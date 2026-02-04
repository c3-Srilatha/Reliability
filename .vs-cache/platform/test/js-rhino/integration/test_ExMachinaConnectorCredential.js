/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ExMachinaConnectorCredential';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename, null);
    this.testUsername = filename + '_userId';
    this.anotherTestUsername = filename + '_anotherUserId';

    this.inputCredentials = {
      id: DatastoreType.MYSQL + '-' + filename,
      serverEndpoint: 'c3.ai',
      username: 'c3',
      password: 'ai',
      secretKey: 'secret',
      displayName: 'display-' + filename,
      datastoreType: DatastoreType.MYSQL,
    };

    this.user = TestApi.createExMachinaTestUser(
      this.ctx,
      TestApiUserConfig.make({ username: this.testUsername }, true),
      ['ExMachina.Editor']
    ).user;
    this.anotherUser = TestApi.createExMachinaTestUser(
      this.ctx,
      TestApiUserConfig.make({ username: this.anotherTestUsername }, true),
      ['ExMachina.Editor']
    ).user;

    this.credentialsToClear = [this.inputCredentials.id];

    this.upsertTestCredentialAsUser = function (userId, credentialOptionsOverrides, datastoreCredentialType) {
      return TestApi.upsertTestCredentialAsUser(
        userId,
        Object.assign({}, { displayName: 'display-' + filename }, credentialOptionsOverrides),
        datastoreCredentialType
      );
    };
  });

  afterAll(function () {
    for (var i = 0; i < this.credentialsToClear.length; i++) {
      TestApi.clearCredentialForUser(this.user.id, this.credentialsToClear[i]);
    }
    User.make(this.user, true).remove();
    User.make(this.anotherUser, true).remove();
    TestApi.teardown(this.ctx);
  });

  describe('upsertCredential', function () {
    describe('creates a new credential', function () {
      describe('with a provided id', function () {
        beforeAll(function () {
          this.credentialSnowflake = this.upsertTestCredentialAsUser(
            this.user.id,
            {
              id: this.inputCredentials.id,
              username: this.inputCredentials.username,
              password: this.inputCredentials.password,
              description: 'JDBCStore data connector with snowflake id',
            },
            'JdbcStoreDataConnectorCredential'
          );
        });

        it('returns an ExMachinaConnectorCredential with the given id', function () {
          expect(this.credentialSnowflake.id).toEqual(this.inputCredentials.id);
        });

        it('upserts an ExMachinaConnectorCredential with the correct fields', function () {
          var credentialFetch = ExMachinaConnectorCredential.fetch({
            filter: Filter.eq('id', this.inputCredentials.id).toString(),
          });
          expect(credentialFetch.count).toEqual(1);
          expect(credentialFetch.objs[0].displayName).toEqual(this.inputCredentials.displayName);
          expect(credentialFetch.objs[0].datastore).toEqual(this.inputCredentials.datastoreType);
        });

        it('prevents credential access for other user', function () {
          TestRunner.asUser(
            User.forId(this.anotherUser.id),
            Lambda.fromJsFunc(function (id) {
              expect(ExMachinaConnectorCredential.fetchCount({ filter: Filter.eq('id', id).toString() })).toEqual(0);
            }).partiallyCall([this.inputCredentials.id])
          );
        });

        describe('upserts an ExMachinaConnectorCredentialConfig with the given id', function () {
          it('with ACL access for creating user', function () {
            TestRunner.asUser(
              User.forId(this.user.id),
              Lambda.fromJsFunc(function (id) {
                var credentialConfig = ExMachinaConnectorCredentialConfig.make(
                  {
                    id: id,
                  },
                  true
                );
                expect(credentialConfig.getConfig()).toBeDefined();
              }).partiallyCall([this.inputCredentials.id])
            );
          });

          it('without ACL access for other user', function () {
            TestRunner.asUser(
              User.forId(this.anotherUser.id),
              Lambda.fromJsFunc(function (id) {
                expect(
                  function () {
                    ExMachinaConnectorCredentialConfig.make({ id: id }, true).getConfig();
                  }.bind(this)
                ).toThrowError(/does not have read access/);
              }).partiallyCall([this.inputCredentials.id])
            );
          });
        });
      });

      describe('without a provided id', function () {
        beforeAll(function () {
          this.credentialRandomId = this.upsertTestCredentialAsUser(this.user.id, {
            description: 'Connector credential without id',
          });
          this.credentialsToClear.push(this.credentialRandomId.id);
        });

        it('upserts an ExMachinaConnectorCredential with a random id and correct fields', function () {
          var credentialFetch = ExMachinaConnectorCredential.fetch({
            filter: Filter.eq('id', this.credentialRandomId.id).toString(),
          });
          expect(credentialFetch.count).toEqual(1);
          expect(credentialFetch.objs[0].displayName).toEqual(this.inputCredentials.displayName);
          expect(credentialFetch.objs[0].datastore).toEqual(this.inputCredentials.datastoreType);
        });

        describe('upserts an ExMachinaConnectorCredentialConfig with the same random id', function () {
          it('with ACL access for creating user', function () {
            TestRunner.asUser(
              User.forId(this.user.id),
              Lambda.fromJsFunc(function (id) {
                expect(ExMachinaConnectorCredentialConfig.make({ id: id }, true).getConfig()).toBeDefined();
              }).partiallyCall([this.credentialRandomId.id])
            );
          });

          it('without ACL access for other user', function () {
            TestRunner.asUser(
              User.forId(this.anotherUser.id),
              Lambda.fromJsFunc(function (id) {
                expect(
                  function () {
                    ExMachinaConnectorCredentialConfig.make({ id: id }, true).getConfig();
                  }.bind(this)
                ).toThrowError(/does not have read access/);
              }).partiallyCall([this.inputCredentials.id])
            );
          });
        });
      });

      describe('for a non-default user', function () {
        beforeAll(function () {
          this.userCredential = this.upsertTestCredentialAsUser(this.user.id, {
            description: 'Connector credential for alternate user',
          });
        });

        afterAll(function () {
          TestApi.clearCredentialForUser(this.user.id, this.userCredential.id);
        });

        it('applies appropriate ACL', function () {
          TestRunner.asUser(
            User.forId(this.user.id),
            Lambda.fromJsFunc(function (user, id) {
              var acl = ExMachinaConnectorCredentialConfig.make({ id: id }, true).getConfig().acl;
              expect(acl.length).toEqual(1);
              expect(acl[0].member.id).toMatch(user);
            }).partiallyCall([this.user.id, this.userCredential.id])
          );
        });
      });
    });

    describe('updates an existing credential', function () {
      beforeAll(function () {
        this.credentialToUpdate = this.upsertTestCredentialAsUser(this.user.id, {
          description: 'Connector credential to update',
        });

        this.unauthorizedUser = TestApi.createExMachinaTestUser(
          this.ctx,
          TestApiUserConfig.make({ username: this.testusername }, true),
          ['ExMachina.Editor']
        ).user;

        this.credentialUpdated = this.upsertTestCredentialAsUser(
          this.user.id,
          {
            id: this.credentialToUpdate.id,
            displayName: this.inputCredentials.displayName + '-modified-once',
            username: this.inputCredentials.username,
            password: this.inputCredentials.password,
            description: 'Connector credential updated once',
          },
          'JdbcStoreDataConnectorCredential'
        );
      });

      afterAll(function () {
        TestApi.clearCredentialForUser(this.user.id, this.credentialToUpdate.id);
      });

      describe('happy path', function () {
        describe('for user with access', function () {
          it('returns an ExMachinaConnectorCredential with the original id', function () {
            expect(this.credentialUpdated.id).toEqual(this.credentialToUpdate.id);
          });

          it('updates existing ExMachinaConnectorCredential with the correct fields', function () {
            TestRunner.asUser(
              User.forId(this.user.id),
              Lambda.fromJsFunc(function (inputCredentials, id) {
                var credentialFetch = ExMachinaConnectorCredential.fetch({ filter: Filter.eq('id', id).toString() });
                expect(credentialFetch.count).toEqual(1);
                expect(credentialFetch.objs[0].displayName).toEqual(inputCredentials.displayName + '-modified-once');
                expect(credentialFetch.objs[0].datastore).toEqual(inputCredentials.datastoreType);
              }).partiallyCall([this.inputCredentials, this.credentialUpdated.id])
            );
          });

          describe('updates the ExMachinaConnectorCredentialConfig with the given id', function () {
            it('with ACL access for creating user', function () {
              TestRunner.asUser(
                User.forId(this.user.id),
                Lambda.fromJsFunc(function (inputCredentials, id) {
                  expect(ExMachinaConnectorCredentialConfig.make({ id: id }, true).getConfig()).toBeDefined();

                  var credentialConfig = ExMachinaConnectorCredentialConfig.make({ id: id }, true);
                  var displayName = ExMachinaBasePrivilegedAction.credentialSecretValue(
                    credentialConfig,
                    'credentials'
                  ).displayName;
                  expect(displayName).toMatch(inputCredentials.displayName + '-modified-once');
                }).partiallyCall([this.inputCredentials, this.credentialUpdated.id])
              );
            });
          });
        });
      });

      describe('sad path', function () {
        describe('if user does not have access', function () {
          it('throws an unauthorized error', function () {
            TestRunner.asUser(
              User.forId(this.unauthorizedUser.id),
              Lambda.fromJsFunc(function (id, inputCredentials) {
                expect(function () {
                  return ExMachinaConnectorCredential.upsertCredential(
                    JdbcStoreDataConnectorCredential.make(
                      {
                        id: id,
                        displayName: inputCredentials.displayName + '-modified-twice',
                        serverEndpoint: inputCredentials.serverEndpoint,
                        username: inputCredentials.username,
                        password: inputCredentials.password,
                        datastore: inputCredentials.datastoreType,
                        secretKey: inputCredentials.secretKey,
                        description: 'Connector credential updated twice',
                      },
                      true
                    )
                  );
                }).toThrowError();
              }).partiallyCall([this.credentialToUpdate.id, this.inputCredentials])
            );
          });

          it('leaves existing ExMachinaConnectorCredential unchanged', function () {
            TestRunner.asUser(
              User.forId(this.user.id),
              Lambda.fromJsFunc(function (inputCredentials, id) {
                var credentialFetch = ExMachinaConnectorCredential.fetch({ filter: Filter.eq('id', id).toString() });
                expect(credentialFetch.count).toEqual(1);
                expect(credentialFetch.objs[0].displayName).toEqual(inputCredentials.displayName + '-modified-once');
                expect(credentialFetch.objs[0].datastore).toEqual(inputCredentials.datastoreType);
              }).partiallyCall([this.inputCredentials, this.credentialUpdated.id])
            );
          });

          it('does not give access to unauthorized user', function () {
            TestRunner.asUser(
              User.forId(this.unauthorizedUser.id),
              Lambda.fromJsFunc(function (id) {
                expect(ExMachinaConnectorCredential.fetchCount()).toEqual(0);
                expect(function () {
                  ExMachinaConnectorCredentialConfig.make({ id: id }, true).getConfig();
                }).toThrowError(/does not have read access/);
              }).partiallyCall([this.credentialToUpdate.id])
            );
          });
        });
      });
    });
  });

  describe('fetchCredentials', function () {
    beforeAll(function () {
      this.fetchCredential = this.upsertTestCredentialAsUser(this.anotherUser.id, {
        description: 'Connector credential for alternate user',
      });
    });

    afterAll(function () {
      TestApi.clearCredentialForUser(this.anotherUser.id, this.fetchCredential.id);
    });

    it('limits credentials fetched by ACL privilege', function () {
      // 1 from upsertCredential spec for a non-default user
      TestRunner.asUser(
        User.forId(this.anotherUser.id),
        Lambda.fromJsFunc(function () {
          expect(ExMachinaConnectorCredential.fetchCredentials().count).toEqual(1);
        })
      );
    });

    it('uses datastore when given', function () {
      TestRunner.asUser(
        User.forId(this.anotherUser.id),
        Lambda.fromJsFunc(function () {
          expect(ExMachinaConnectorCredential.fetchCredentials(DatastoreType.MYSQL).count).toEqual(1);
          expect(ExMachinaConnectorCredential.fetchCredentials(DatastoreType.SNOWFLAKE).count).toEqual(0);
        })
      );
    });
  });

  describe('fetchCredentialWrappers', function () {
    beforeAll(function () {
      this.fetchCredential = this.upsertTestCredentialAsUser(this.anotherUser.id, {
        description: 'Connector credential for alternate user',
      });
    });

    afterAll(function () {
      TestApi.clearCredentialForUser(this.anotherUser.id, this.fetchCredential.id);
    });

    it('limits credentials fetched by ACL privilege', function () {
      // 1 from upsertCredential spec for a non-default user
      TestRunner.asUser(
        User.forId(this.anotherUser.id),
        Lambda.fromJsFunc(function () {
          expect(ExMachinaConnectorCredential.fetchCredentialWrappers().count).toEqual(1);
        })
      );
    });

    it('fetches credentials', function () {
      TestRunner.asUser(
        User.forId(this.anotherUser.id),
        Lambda.fromJsFunc(function (credentialId) {
          expect(
            ExMachinaConnectorCredential.fetchCredentialWrappers(
              FetchSpec.make(
                {
                  filter: Filter.eq('id', credentialId).toString(),
                },
                true
              )
            ).count
          ).toEqual(1);
        }).partiallyCall([this.fetchCredential.id])
      );
    });
  });

  describe('fetchCredentialAssets', function () {
    beforeAll(function () {
      this.fetchCredentialAssetsCredential = this.upsertTestCredentialAsUser(this.user.id, {
        description: 'Connector credential for alternate user for fetching credential assets',
      });
    });

    afterAll(function () {
      TestApi.clearCredentialForUser(this.user.id, this.fetchCredentialAssetsCredential.id);
    });

    describe('when a datastore is not passed in', function () {
      beforeAll(function () {
        this.result = TestRunner.asUser(
          User.forId(this.user.id),
          Lambda.fromJsFunc(function () {
            return ExMachinaConnectorCredential.fetchCredentialAssets();
          })
        );
      });

      it('returns the expected number of credentials', function () {
        expect(this.result.count).toEqual(3);
      });

      it('returns the expected fields from the credential', function () {
        var firstObj = this.result.objs[0];
        expect(firstObj.id).toBeDefined();
        expect(firstObj.displayName).toBeDefined();
        expect(firstObj.description).toBeDefined();
        expect(firstObj.datastore).toBeDefined();
      });
    });

    describe('when a datastore is passed in', function () {
      it("filters out the credentials that don't match the datastore", function () {
        var result = TestRunner.asUser(
          User.forId(this.user.id),
          Lambda.fromJsFunc(function () {
            return ExMachinaConnectorCredential.fetchCredentialAssets(DatastoreType.SNOWFLAKE);
          })
        );
        expect(result.count).toEqual(0);
      });
    });
  });

  describe('getCredential', function () {
    it('returns the DataConnectorCredential passed in upon creation', function () {
      var connectorCredential = this.upsertTestCredentialAsUser(this.user.id, {
        description: 'Connector credential without id',
      });
      this.credentialsToClear.push(connectorCredential.id);
      TestRunner.asUser(
        User.forId(this.user.id),
        Lambda.fromJsFunc(function (id, inputCredentials) {
          var credential = ExMachinaConnectorCredential.forId(id).getCredential();
          expect(credential.displayName).toEqual(inputCredentials.displayName);
          expect(credential.serverEndpoint).toEqual(inputCredentials.serverEndpoint);
          expect(credential.datastore).toEqual(inputCredentials.datastoreType);
          expect(credential.secretKey).toEqual(inputCredentials.secretKey);
        }).partiallyCall([connectorCredential.id, this.inputCredentials])
      );
    });
  });

  describe('removeCredential', function () {
    beforeAll(function () {
      this.credentialToRemove = this.upsertTestCredentialAsUser(this.user.id, {
        description: 'Connector credential without id',
      });
    });

    describe('sad path when unauthorized', function () {
      it('throws error', function () {
        TestRunner.asUser(
          User.forId(this.anotherUser.id),
          Lambda.fromJsFunc(function (credential) {
            expect(
              function () {
                credential.removeCredential();
              }.bind(this)
            ).toThrowError(/does not have write access/);
          }).partiallyCall([this.credentialToRemove])
        );
      });

      it('does not remove the ExMachinaConnectorCredential instance', function () {
        TestRunner.asUser(
          User.forId(this.user.id),
          Lambda.fromJsFunc(function (id) {
            expect(ExMachinaConnectorCredential.fetchCount({ filter: Filter.eq('id', id).toString() })).toBe(1);
          }).partiallyCall([this.credentialToRemove.id])
        );
      });

      it('does not remove the ExMachinaConnectorCredentialConfig instance', function () {
        TestRunner.asUser(
          User.forId(this.user.id),
          Lambda.fromJsFunc(function (id) {
            expect(ExMachinaConnectorCredentialConfig.make({ id: id }, true).getConfig()).toBeDefined();
          }).partiallyCall([this.credentialToRemove.id])
        );
      });
    });

    describe('happy path', function () {
      it('returns true', function () {
        TestRunner.asUser(
          User.forId(this.user.id),
          Lambda.fromJsFunc(function (id) {
            expect(ExMachinaConnectorCredential.forId(id).removeCredential()).toBe(true);
          }).partiallyCall([this.credentialToRemove.id])
        );
      });

      it('removes the ExMachinaConnectorCredential instance', function () {
        expect(
          ExMachinaConnectorCredential.fetchCount({ filter: Filter.eq('id', this.credentialToRemove.id).toString() })
        ).toBe(0);
      });

      it('removes the ExMachinaConnectorCredentialConfig instance', function () {
        var id = this.credentialToRemove.id;
        expect(function () {
          ExMachinaConnectorCredentialConfig.make({ id: id }, true).getConfig();
        }).toThrowError(/This ConfigAclEnabled object does not exist./);
      });
    });
  });

  describe('updateCredentialMetadata', function () {
    beforeAll(function () {
      this.connectorCredential = this.upsertTestCredentialAsUser(this.user.id, {
        description: 'Old description',
      });

      this.spec = {
        id: this.connectorCredential.id,
        displayName: 'Updated name',
        description: 'Updated description',
      };

      this.updateMetadataSpec = ExMachinaConnectorCredentialUpdateMetadataSpec.make(this.spec, true);

      TestRunner.asUser(
        User.forId(this.user.id),
        Lambda.fromJsFunc(function (spec) {
          ExMachinaConnectorCredential.updateCredentialMetadata(spec);
        }).partiallyCall([this.updateMetadataSpec])
      );
    });

    afterAll(function () {
      TestApi.clearCredentialForUser(this.user.id, this.connectorCredential.id);
    });

    describe('when an authorized user updates the connector credential metadata', function () {
      it('updates the name and description of the connector credential', function () {
        TestRunner.asUser(
          User.forId(this.user.id),
          Lambda.fromJsFunc(function (id, spec) {
            var credentialFetch = ExMachinaConnectorCredential.fetch({ filter: Filter.eq('id', id).toString() });
            expect(credentialFetch.objs[0].displayName).toEqual(spec.displayName);
            expect(credentialFetch.objs[0].description).toEqual(spec.description);
          }).partiallyCall([this.connectorCredential.id, this.spec])
        );
      });

      it('updates the name and description in the connector credential config', function () {
        TestRunner.asUser(
          User.forId(this.user.id),
          Lambda.fromJsFunc(function (id, spec) {
            var credentialConfig = ExMachinaConnectorCredentialConfig.make({ id: id }, true);
            var credentials = ExMachinaBasePrivilegedAction.credentialSecretValue(credentialConfig, 'credentials');

            expect(credentialConfig.getConfig()).toBeDefined();
            expect(credentials.displayName).toEqual(spec.displayName);
            expect(credentials.description).toEqual(spec.description);
          }).partiallyCall([this.connectorCredential.id, this.spec])
        );
      });
    });

    describe('when an unauthorized user attempts to update the connector credential metadata', function () {
      it('throws an unauthorized error', function () {
        var unauthorizedUser = TestApi.createExMachinaTestUser(
          this.ctx,
          TestApiUserConfig.make({ username: this.testusername }, true),
          ['ExMachina.Editor']
        ).user;
        TestRunner.asUser(
          User.forId(unauthorizedUser.id),
          Lambda.fromJsFunc(function (spec) {
            expect(function () {
              ExMachinaConnectorCredential.updateCredentialMetadata(spec);
            }).toThrowError();
          }).partiallyCall([this.updateMetadataSpec])
        );
      });
    });
  });
});
