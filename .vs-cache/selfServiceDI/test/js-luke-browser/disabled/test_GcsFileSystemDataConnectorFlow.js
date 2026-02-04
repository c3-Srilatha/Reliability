/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_GcsFileSystemDataConnectorFlow';

function wait1Seconds() {
  this.client.runAsyncLambda(function () {
    return new Promise(function (resolve, reject) {
      /**
       * Force luke to slow down and wait.
       */
      setTimeout(resolve, 1000);
    });
  });
}

LukeBrowser.runJasmine(filename, function () {
  describe(filename + ' @testApp(mode=dev)', function () {
    beforeAll(function () {
      this.client = LukeBrowser.init();

      this.externalSourceSearchBarSelector =
        '.c3-metadata-id-selfservicedi-externalsourcessearchbar input.c3-form-field';
      this.bottomSheetSearchSelector = '.information-card-parent:nth-child(1) .information-card-subtitle:nth-child(2)';
      this.bottomSheetCloseButton =
        '.c3-metadata-id-selfservicedi-adddatasourcebottomsheet  > div.bottom-sheet-container > div > div.bottom-sheet-content > div.icons-container > span';

      this.bottomSheet = LukeTestSelfServiceDIMultiStepComponent.make({ luke: this.client }, true);
      this.messageBanner = LukeTestUiSdlMessageContainer.make({ luke: this.client }, true);
      this.errorInlineNotification = LukeTestUiSdlInlineNotification.make({ luke: this.client }, true);
      this.connectorForm = LukeTestSelfServiceDIGcsConnectorForm.make({ luke: this.client }, true);

      this.selfServiceDIPage = LukeTestSelfServiceDIPage.make(
        {
          luke: this.client,
          externalSourcesSidePanel: LukeTestUiSdlSidePanel.make({ luke: this.client }, true),
          dataGrid: LukeTestPreviewSqlTableDataGrid.make({ luke: this.client }, true),
          multiStepComponent: LukeTestMultiStepComponent.make({ luke: this.client }, true),
          presentationalTreeView: LukeTestPresentationalTreeView.make({ luke: this.client }, true),
        },
        true
      );
    });

    afterAll(function () {
      this.client.closeWindow();
    });

    describe('select connector', function () {
      beforeAll(function () {
        this.selfServiceDIPage.openPage();
        this.urlProtocol = 'gcs://';
        this.absBucketUrl = this.urlProtocol + 'c3--local/dataFusionTestFiles/';
        this.folderSubPath = 'dataFusionTestFiles';

        this.srcFilesList = ['iris_1.csv', 'iris_2.csv', 'iris_3.csv', 'iris_4.csv', 'iris_5.csv'];
        this.destUrlList = [];

        this.sourceCollectionInboxUrl = this.absBucketUrl + this.folderSubPath + '/';
        this.gcsKeyFileUploader = LukeTestUiSdlFileUpload.make({ luke: this.client }, true);
        this.gcsKeyFileUrls = SelfServiceDITestUtil.retrieveFileUrls(['test/resources/gcs_key.json'], C3.pkg().name());
        this.formValues = {
          name: 'GcsConn',
          description: 'GCS Connection Description',
          bucketUrl: 'c3--local/dataFusionTestFiles/',
          keyFilePath: 'gcs_key.json',
        };
        this.connectorSelector = '.data-connector-categories-list-container button[aria-label="Google Cloud"]';
        this.nodeSelector = this.formValues.name + '.' + this.absBucketUrl;
      });

      it('home page is rendered', function () {
        this.selfServiceDIPage.rendered();
      });

      describe('::GCS Connector', function () {
        describe('select Google Cloud', function () {
          beforeAll(function () {
            this.selfServiceDIPage.addDataSource();
            this.selfServiceDIPage.search(this.connectorSelector).click();
          });

          describe('clicking next', function () {
            beforeAll(function () {
              this.selfServiceDIPage.multiStepComponent.proceed();
            });

            afterAll(function () {
              SelfServiceDITestUtil.copyFilesFromPkg(
                this.srcFilesList,
                C3.pkg().name(),
                this.absBucketUrl + this.folderSubPath
              ).forEach((f) => this.destUrlList.push(f));
            });

            it('should render the multistep component', function () {
              this.selfServiceDIPage.multiStepComponent.rendered();
            });

            it('should render the connector form', function () {
              this.connectorForm.rendered();
            });

            describe('set fields in data connector form', function () {
              describe('name', function () {
                beforeAll(function () {
                  this.connectorForm.setName(this.formValues.name);
                });

                it('is correctly set', function () {
                  this.connectorForm.getName().assert(LukeAssertionMatcher.TO_EQUAL, this.formValues.name);
                });

                describe('removing the name field', function () {
                  beforeAll(function () {
                    this.connectorForm.setName('');
                  });

                  afterAll(function () {
                    this.connectorForm.setName(this.formValues.name);
                  });

                  it('shows correct error', function () {
                    this.connectorForm
                      .getNameError()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale('SelfServiceDI.DataConnectorForm.name.hintText')
                      );
                  });
                });
              });

              describe('description', function () {
                beforeAll(function () {
                  this.connectorForm.setDescription(this.formValues.description);
                });

                it('is correctly set', function () {
                  this.connectorForm
                    .getDescription()
                    .assert(LukeAssertionMatcher.TO_EQUAL, this.formValues.description);
                });
              });

              describe('bucket url', function () {
                beforeAll(function () {
                  this.connectorForm.setNewBucketUrl(this.formValues.bucketUrl);
                });

                it('is correctly set', function () {
                  this.connectorForm
                    .getBucketUrl()
                    .assert(
                      LukeAssertionMatcher.TO_EQUAL,
                      Translation.getTranslationForLocale('SelfService.NewMount.label').replace(
                        '${INPUT}',
                        this.formValues.bucketUrl
                      )
                    );
                });
              });

              describe('key', function () {
                beforeAll(function () {
                  this.gcsKeyFileUploader.uploadFile(this.gcsKeyFileUrls[0]);
                });

                it('is correctly set', function () {
                  this.connectorForm
                    .getDescription()
                    .assert(LukeAssertionMatcher.TO_EQUAL, this.formValues.description);
                });
              });

              describe('connection status', function () {
                describe('when required fields are missing', function () {
                  beforeAll(function () {
                    this.connectorForm.setName('');
                    wait1Seconds();
                    this.connectorForm.clickTestConnectionButton();
                  });

                  afterAll(function () {
                    this.connectorForm.setName(this.formValues.name);
                  });

                  it('shows failed', function () {
                    wait1Seconds();
                    this.connectorForm
                      .getTestConnectionStatus()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale('SelfServiceDI.failed.label')
                      );
                  });

                  it('shows inline error message', function () {
                    wait1Seconds();
                    this.errorInlineNotification
                      .getTitleText()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale(
                          'SelfServiceDI.DataConnectorForm.currentConnectStatus.incorrectRequiredFields.text'
                        )
                      );
                  });
                });

                describe('when url field is missing', function () {
                  beforeAll(function () {
                    this.connectorForm.clearSelectedBucketUrl();
                    wait1Seconds();
                    this.connectorForm.clickTestConnectionButton();
                  });

                  afterAll(function () {
                    this.connectorForm.setNewBucketUrl(this.formValues.bucketUrl);
                  });

                  it('shows failed', function () {
                    wait1Seconds();
                    this.connectorForm
                      .getTestConnectionStatus()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale('SelfServiceDI.failed.label')
                      );
                  });

                  it('shows inline error message', function () {
                    wait1Seconds();
                    this.errorInlineNotification
                      .getTitleText()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale(
                          'SelfServiceDI.DataConnectorForm.currentConnectStatus.genericError.text'
                        )
                      );
                  });
                });

                describe('when connector fields are correct', function () {
                  beforeAll(function () {
                    wait1Seconds();
                    this.connectorForm.clickTestConnectionButton();
                  });

                  it('shows success', function () {
                    wait1Seconds();
                    this.connectorForm.getTestConnectionStatus().assert(LukeAssertionMatcher.TO_EQUAL, 'Success');
                  });
                });
              });

              describe('selecting complete', function () {
                beforeAll(function () {
                  this.selfServiceDIPage.multiStepComponent.proceed();
                });

                it('adds new data connector', function () {
                  wait1Seconds();
                  var successBanner = Translation.getTranslationForLocale(
                    'SelfServiceDI.CreateSourceSystem.success.message'
                  ).replace('{dataSourceName}', this.formValues.name);
                  this.messageBanner.bannerPrimaryTextAt(1).then((_, txt) => {
                    expect(txt).toEqual(successBanner);
                  });
                  this.messageBanner.assertBannerTypeAt(1, UiSdlMessageBannerType.SUCCESS);
                });

                it('treenode has correct icon', function () {
                  this.selfServiceDIPage.presentationalTreeView
                    .treeNodeIcon(this.nodeSelector, 'circle-check')
                    .assert('toExist');
                });
              });

              describe('clicking the correct tree node', function () {
                beforeAll(function () {
                  this.selfServiceDIPage.presentationalTreeView.treeNodeClick(this.nodeSelector);
                });

                describe('on the details page', function () {
                  it('name is correct', function () {
                    this.selfServiceDIPage
                      .search('.c3-metadata-id-selfservicedi-selectedsourcesystemnamelist .header')
                      .text()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale(
                          'SelfServiceDI.DataConnectorForm.name.label.text'
                        ).toUpperCase()
                      );
                    this.selfServiceDIPage
                      .search('.c3-metadata-id-selfservicedi-selectedsourcesystemnamelist .value')
                      .text()
                      .assert(LukeAssertionMatcher.TO_EQUAL, this.formValues.name);
                  });

                  it('description is correct', function () {
                    this.selfServiceDIPage
                      .search('.c3-metadata-id-selfservicedi-selectedsourcesystemdescriptionlist .header')
                      .text()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale(
                          'SelfServiceDI.DataConnectorForm.description.label.text'
                        ).toUpperCase()
                      );
                    this.selfServiceDIPage
                      .search('.c3-metadata-id-selfservicedi-selectedsourcesystemdescriptionlist .value')
                      .text()
                      .assert(LukeAssertionMatcher.TO_EQUAL, this.formValues.description);
                  });

                  it('bucket_or_path is correct', function () {
                    this.selfServiceDIPage
                      .search(
                        '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails .item:nth-child(1) .header'
                      )
                      .text()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale(
                          'SelfServiceDI.DataConnectorForm.bucketOrPath.label.text'
                        ).toUpperCase()
                      );
                    this.selfServiceDIPage
                      .search(
                        '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails .item:nth-child(1) .description'
                      )
                      .text()
                      .assert(LukeAssertionMatcher.TO_EQUAL, this.absBucketUrl);
                  });
                });

                it('type is correct', function () {
                  this.selfServiceDIPage
                    .search(
                      '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails .item:nth-child(2) .header'
                    )
                    .text()
                    .assert(
                      LukeAssertionMatcher.TO_EQUAL,
                      Translation.getTranslationForLocale(
                        'SelfServiceDI.DataConnectorForm.type.label.text'
                      ).toUpperCase()
                    );
                  this.selfServiceDIPage
                    .search(
                      '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails .item:nth-child(2) .description'
                    )
                    .text()
                    .assert(LukeAssertionMatcher.TO_EQUAL, 'bucket');
                });

                it('versioning is correct', function () {
                  this.selfServiceDIPage
                    .search(
                      '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails .item:nth-child(3) .header'
                    )
                    .text()
                    .assert(
                      LukeAssertionMatcher.TO_EQUAL,
                      Translation.getTranslationForLocale(
                        'SelfServiceDI.DataConnectorForm.versioning.label.text'
                      ).toUpperCase()
                    );
                  this.selfServiceDIPage
                    .search(
                      '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails .item:nth-child(3) .description'
                    )
                    .text()
                    .assert(LukeAssertionMatcher.TO_EQUAL, 'Disabled');
                });

                describe('contents', function () {
                  it('is empty', function () {
                    this.selfServiceDIPage
                      .search(
                        '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails .item:nth-child(4) .header'
                      )
                      .text()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale(
                          'SelfServiceDI.DataConnectorForm.contents.label.text'
                        ).toUpperCase()
                      );
                    this.selfServiceDIPage
                      .search(
                        '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails .item:nth-child(4) .description'
                      )
                      .getValue()
                      .assert(LukeAssertionMatcher.TO_BE_EMPTY);
                  });

                  describe('clicking on estimate', function () {
                    beforeAll(function () {
                      this.selfServiceDIPage
                        .search('.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetailsestimatebutton button')
                        .click();
                    });

                    it('should show contents', function () {
                      this.selfServiceDIPage
                        .search(
                          '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails .item:nth-child(4) .description'
                        )
                        .text()
                        .assert(LukeAssertionMatcher.TO_CONTAIN, ' KB');
                    });
                  });
                });

                it('location is correct', function () {
                  this.selfServiceDIPage
                    .search(
                      '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails2 .item:nth-child(1) .header'
                    )
                    .text()
                    .assert(
                      LukeAssertionMatcher.TO_EQUAL,
                      Translation.getTranslationForLocale(
                        'SelfServiceDI.DataConnectorForm.location.label.text'
                      ).toUpperCase()
                    );
                  this.selfServiceDIPage
                    .search(
                      '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails2 .item:nth-child(1) .description'
                    )
                    .text()
                    .assert(LukeAssertionMatcher.TO_EQUAL, 'undefined');
                });

                it('connection is correct', function () {
                  this.selfServiceDIPage
                    .search(
                      '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails2 .item:nth-child(2) .header'
                    )
                    .text()
                    .assert(
                      LukeAssertionMatcher.TO_EQUAL,
                      Translation.getTranslationForLocale(
                        'SelfServiceDI.DataConnectorForm.connection.label.text'
                      ).toUpperCase()
                    );
                  this.selfServiceDIPage
                    .search(
                      '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails2 .item:nth-child(2) .description'
                    )
                    .text()
                    .assert(LukeAssertionMatcher.TO_EQUAL, 'Active');
                });

                it('file path selection is correct', function () {
                  this.selfServiceDIPage
                    .search(
                      '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails2 .item:nth-child(3) .header'
                    )
                    .text()
                    .assert(
                      LukeAssertionMatcher.TO_EQUAL,
                      Translation.getTranslationForLocale(
                        'SelfServiceDI.DataConnectorForm.filePathSelection.label.text'
                      ).toUpperCase()
                    );
                  this.selfServiceDIPage
                    .search(
                      '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetails2 .item:nth-child(3) .description'
                    )
                    .text()
                    .assert(LukeAssertionMatcher.TO_EQUAL, '0');
                });
              });
            });
          });
        });

        describe('clicking on connection properties and changing description and bucketUrl', function () {
          describe('from the treeNodeActions', function () {
            beforeAll(function () {
              this.newBucketUrl = this.formValues.bucketUrl + this.folderSubPath + '/';
              this.newAbsBucketUrl = this.urlProtocol + this.newBucketUrl;
              GcsFileSystem.inst().setMount('testMount', this.newAbsBucketUrl);
              this.selfServiceDIPage.presentationalTreeView.treeNodeActionClick(this.nodeSelector, 2);
              this.connectionConfigurationModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
              this.expectedDescription = 'New description';
            });

            afterAll(function () {
              this.selfServiceDIPage.presentationalTreeView.treeNodeActionClick(this.nodeSelector, 2);
              this.connectionConfigurationModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
              this.connectorForm.setDescription(this.formValues.description);
              this.connectorForm.setNewBucketUrl(this.formValues.bucketUrl);
              this.gcsKeyFileUploader.uploadFile(this.gcsKeyFileUrls[0]);
              this.selfServiceDIPage.multiStepComponent.proceed();
              GcsFileSystem.inst().removeMount('testMount');
              wait1Seconds();
              this.selfServiceDIPage.openPage();
            });

            it('renders the connection configuration modal', function () {
              this.connectionConfigurationModal.rendered();
            });

            describe('changing description', function () {
              beforeAll(function () {
                this.connectorForm.setDescription(this.expectedDescription);
              });

              it('is correctly set', function () {
                this.connectorForm.getDescription().assert(LukeAssertionMatcher.TO_EQUAL, this.expectedDescription);
              });
            });

            describe('changing bucket url', function () {
              beforeAll(function () {
                this.connectorForm.selectNewBucketUrl(this.newBucketUrl);
              });

              it('is correctly set', function () {
                this.connectorForm.getBucketUrl().assert(LukeAssertionMatcher.TO_EQUAL, this.newBucketUrl);
              });
            });

            describe('when connector fields are correct', function () {
              beforeAll(function () {
                wait1Seconds();
                this.connectorForm.clickTestConnectionButton();
              });

              it('shows success', function () {
                wait1Seconds();
                this.connectorForm.getTestConnectionStatus().assert(LukeAssertionMatcher.TO_EQUAL, 'Success');
              });
            });

            describe('selecting complete', function () {
              beforeAll(function () {
                this.selfServiceDIPage.multiStepComponent.proceed();
              });

              it('shows the success banner', function () {
                this.client
                  .search('.c3-sdl-message-container-view .c3-sdl-message-banner-content h1')
                  .text()
                  .assert(
                    LukeAssertionMatcher.TO_CONTAIN,
                    Translation.getTranslationForLocale('SelfServiceDI.CreateSourceSystem.editSuccess.message').replace(
                      '{dataSourceName}',
                      this.formValues.name
                    )
                  );
              });

              it('connector tree shows success overlay icon', function () {
                this.selfServiceDIPage.presentationalTreeView
                  .treeNodeIcon(this.nodeSelector, 'circle-check')
                  .assert(LukeAssertionMatcher.TO_EXIST);
              });
            });
          });
        });

        describe('clicking on connection properties', function () {
          describe('from the treeNodeActions', function () {
            beforeAll(function () {
              this.selfServiceDIPage.presentationalTreeView.treeNodeActionClick(this.nodeSelector, 2);
              this.connectionConfigurationModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
            });

            it('renders the connection configuration modal', function () {
              this.connectionConfigurationModal.rendered();
            });

            it('populates the name field', function () {
              this.connectorForm.getName().assert(LukeAssertionMatcher.TO_EQUAL, this.formValues.name);
            });

            it('populates the description field', function () {
              this.connectorForm.getDescription().assert(LukeAssertionMatcher.TO_EQUAL, this.formValues.description);
            });

            describe('clicking test connection', function () {
              beforeAll(function () {
                wait1Seconds();
                this.connectorForm.clickTestConnectionButton();
              });

              it('shows failed', function () {
                wait1Seconds();
                this.connectorForm
                  .getTestConnectionStatus()
                  .assert(
                    LukeAssertionMatcher.TO_EQUAL,
                    Translation.getTranslationForLocale('SelfServiceDI.failed.label')
                  );
              });

              it('shows inline error message', function () {
                wait1Seconds();
                this.errorInlineNotification
                  .getTitleText()
                  .assert(
                    LukeAssertionMatcher.TO_EQUAL,
                    Translation.getTranslationForLocale(
                      'SelfServiceDI.DataConnectorForm.currentConnectStatus.genericError.text'
                    )
                  );
              });

              describe('clicking cancel', function () {
                beforeAll(function () {
                  this.selfServiceDIPage.multiStepComponent.proceed();
                  this.selfServiceDIPage.multiStepComponent.cancel();
                });

                describe('and refreshing the page', function () {
                  beforeAll(function () {
                    this.selfServiceDIPage.openPage();
                  });

                  it('presentation tree view component shows failed inline notification', function () {
                    this.selfServiceDIPage
                      .search('.c3-metadata-id-selfservicedi-sidepanelinlinenotification .inline-notification-title')
                      .text()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale(
                          'SelfServiceDI.inlinNotification.pingErrorTitle.label.text'
                        ).replace('{connectorName}', this.formValues.name)
                      );
                    this.selfServiceDIPage
                      .search(
                        '.c3-metadata-id-selfservicedi-sidepanelinlinenotification .inline-notification-link-text'
                      )
                      .text()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale(
                          'SelfServiceDI.inlinNotification.pingErrorLinkText.label.text'
                        )
                      );
                  });

                  it('connector tree shows error overlay icon', function () {
                    this.selfServiceDIPage.presentationalTreeView
                      .treeNodeIcon(this.formValues.name + '.' + this.urlProtocol, 'exclamation-circle')
                      .assert(LukeAssertionMatcher.TO_EXIST);
                  });
                });

                describe('clicking on edit configuration', function () {
                  beforeAll(function () {
                    this.selfServiceDIPage.presentationalTreeView.treeNodeActionClick(
                      this.formValues.name + '.' + this.urlProtocol,
                      2
                    );
                    this.connectionConfigurationModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
                  });

                  describe('and fixing the connection', function () {
                    beforeAll(function () {
                      this.connectorForm.setNewBucketUrl(this.formValues.bucketUrl);
                      this.gcsKeyFileUploader.uploadFile(this.gcsKeyFileUrls[0]);
                      this.selfServiceDIPage.multiStepComponent.proceed();
                    });

                    it('connector tree shows success overlay icon', function () {
                      this.selfServiceDIPage.presentationalTreeView
                        .treeNodeIcon(this.nodeSelector, 'circle-check')
                        .assert(LukeAssertionMatcher.TO_EXIST);
                    });

                    it('shows the success banner', function () {
                      this.client
                        .search('.c3-sdl-message-container-view .c3-sdl-message-banner-content h1')
                        .text()
                        .assert(
                          LukeAssertionMatcher.TO_CONTAIN,
                          Translation.getTranslationForLocale(
                            'SelfServiceDI.CreateSourceSystem.editSuccess.message'
                          ).replace('{dataSourceName}', this.formValues.name)
                        );
                    });
                  });
                });
              });
            });
          });

          describe('from the connector details page', function () {
            beforeAll(function () {
              this.selfServiceDIPage.presentationalTreeView.treeNodeClick(this.nodeSelector);
              this.selfServiceDIPage
                .search(
                  '.c3-metadata-id-selfservicedi-selectedsourcesystembucketdetailsconnectionpropertiesbutton button'
                )
                .click();
              this.connectionConfigurationModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
            });

            it('renders the connection configuration modal', function () {
              this.connectionConfigurationModal.rendered();
            });

            it('populates the name field', function () {
              this.connectorForm.getName().assert(LukeAssertionMatcher.TO_EQUAL, this.formValues.name);
            });

            it('populates the description field', function () {
              this.connectorForm.getDescription().assert(LukeAssertionMatcher.TO_EQUAL, this.formValues.description);
            });

            describe('clicking test connection', function () {
              beforeAll(function () {
                wait1Seconds();
                this.connectorForm.clickTestConnectionButton();
              });

              it('shows failed', function () {
                wait1Seconds();
                this.connectorForm
                  .getTestConnectionStatus()
                  .assert(
                    LukeAssertionMatcher.TO_EQUAL,
                    Translation.getTranslationForLocale('SelfServiceDI.failed.label')
                  );
              });

              it('shows inline error message', function () {
                wait1Seconds();
                this.errorInlineNotification
                  .getTitleText()
                  .assert(
                    LukeAssertionMatcher.TO_EQUAL,
                    Translation.getTranslationForLocale(
                      'SelfServiceDI.DataConnectorForm.currentConnectStatus.genericError.text'
                    )
                  );
              });

              describe('clicking cancel', function () {
                beforeAll(function () {
                  this.selfServiceDIPage.multiStepComponent.proceed();
                  this.selfServiceDIPage.multiStepComponent.cancel();
                });

                describe('and refreshing the page', function () {
                  beforeAll(function () {
                    this.selfServiceDIPage.openPage();
                  });

                  it('presentation tree view component shows failed inline notification', function () {
                    this.selfServiceDIPage
                      .search('.c3-metadata-id-selfservicedi-sidepanelinlinenotification .inline-notification-title')
                      .text()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale(
                          'SelfServiceDI.inlinNotification.pingErrorTitle.label.text'
                        ).replace('{connectorName}', this.formValues.name)
                      );
                    this.selfServiceDIPage
                      .search(
                        '.c3-metadata-id-selfservicedi-sidepanelinlinenotification .inline-notification-link-text'
                      )
                      .text()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale(
                          'SelfServiceDI.inlinNotification.pingErrorLinkText.label.text'
                        )
                      );
                  });

                  it('connector tree shows error overlay icon', function () {
                    this.selfServiceDIPage.presentationalTreeView
                      .treeNodeIcon(this.formValues.name + '.' + this.urlProtocol, 'exclamation-circle')
                      .assert('toExist');
                  });
                });

                describe('clicking on edit configuration', function () {
                  beforeAll(function () {
                    this.selfServiceDIPage.presentationalTreeView.treeNodeActionClick(
                      this.formValues.name + '.' + this.urlProtocol,
                      2
                    );
                    this.connectionConfigurationModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
                  });

                  describe('and fixing the connection', function () {
                    beforeAll(function () {
                      this.connectorForm.setNewBucketUrl(this.formValues.bucketUrl);
                      this.connectorForm.setNewBucketUrl(this.formValues.bucketUrl);
                      this.gcsKeyFileUploader.uploadFile(this.gcsKeyFileUrls[0]);
                      this.selfServiceDIPage.multiStepComponent.proceed();
                    });

                    it('connector tree shows success overlay icon', function () {
                      this.selfServiceDIPage.presentationalTreeView
                        .treeNodeIcon(this.nodeSelector, 'circle-check')
                        .assert(LukeAssertionMatcher.TO_EXIST);
                    });
                  });
                });
              });
            });
          });
        });

        describe('::Add Source Collection', function () {
          afterAll(function () {
            C3.FileSystem.deleteFilesBatch(this.destUrlList, null);
            this.selfServiceDIPage.multiStepComponent.cancel();
          });

          describe('selecting update file path', function () {
            beforeAll(function () {
              this.selfServiceDIPage.presentationalTreeView.treeNodeActionClick(this.nodeSelector, 1);
              this.selfServiceDIPage
                .search('.c3-metadata-id-selfservicedi-fileexplorersidepanel .presentational-tree-node-expand-icon')
                .click();
            });

            it('multistepComponent is rendered', function () {
              this.selfServiceDIPage.multiStepComponent.rendered();
            });

            it('step 1 is rendered', function () {
              this.selfServiceDIPage
                .search('.multi-step-progress-steps .current-step')
                .text()
                .assert(LukeAssertionMatcher.TO_EQUAL, '1');
            });

            it('rootUrl is selected', function () {
              this.selfServiceDIPage
                .search('.c3-metadata-id-selfservicedi-selectfilepathfileexplorer .active')
                .text()
                .assert(LukeAssertionMatcher.TO_EQUAL, this.absBucketUrl);
            });

            describe('when a new folder is selected', function () {
              beforeAll(function () {
                wait1Seconds();
                this.selfServiceDIPage.presentationalTreeView.treeNodeClick(this.sourceCollectionInboxUrl);
                wait1Seconds();
              });

              it('correctly updates the folder url', function () {
                this.selfServiceDIPage
                  .search('.c3-metadata-id-selfservicedi-selectfilepathfileexplorer .active')
                  .text()
                  .assert(LukeAssertionMatcher.TO_EQUAL, this.folderSubPath);
              });

              describe('clicking cancel', function () {
                beforeAll(function () {
                  this.selfServiceDIPage.multiStepComponent.cancel();
                  this.selfServiceDIPage.presentationalTreeView.treeNodeActionClick(this.nodeSelector, 1);
                  this.selfServiceDIPage
                    .search('.c3-metadata-id-selfservicedi-fileexplorersidepanel .presentational-tree-node-expand-icon')
                    .click();
                });

                it('resets the selection', function () {
                  this.selfServiceDIPage
                    .search('.c3-metadata-id-selfservicedi-selectfilepathfileexplorer .active')
                    .text()
                    .assert(LukeAssertionMatcher.TO_EQUAL, this.absBucketUrl);
                });
              });

              describe('clicking next', function () {
                beforeAll(function () {
                  this.selfServiceDIPage.presentationalTreeView.treeNodeClick(this.sourceCollectionInboxUrl);
                  this.selfServiceDIPage.multiStepComponent.proceed();
                });

                it('goes to step 2', function () {
                  this.selfServiceDIPage
                    .search('.multi-step-progress-steps .current-step')
                    .text()
                    .assert(LukeAssertionMatcher.TO_EQUAL, '2');
                });
              });
            });

            describe('::step 2: Select files and set schema', function () {
              beforeAll(function () {
                this.schemaForm = LukeTestUiSdlForm.make({ luke: this.client }, true);
                this.tabPanel = LukeTestUiSdlTabPanel.make({ luke: this.client }, true);
                this.schemaGrid = LukeTestUiSdlDataGrid.make({ luke: this.client }, true);
                this.schemaTab = LukeTestSchemaTabTableColumnGrid.make({ luke: this.client }, true);
                this.filesGrid = LukeTestFileUploadGrid.make({ luke: this.client }, true);
                this.appliedSchemaGrid = LukeTestUiSdlDataGrid.make({ luke: this.client }, true);
              });

              it('should load schema tab by default', function () {
                this.tabPanel
                  .activeTabText()
                  .assert(
                    LukeAssertionMatcher.TO_EQUAL,
                    Translation.getTranslationForLocale(
                      'SelfServiceDI.SelectedSourceCollectionTabPanel.SchemaTab.title'
                    )
                  );
              });

              it('should have 4 tabs', function () {
                this.tabPanel
                  .tabsText()
                  .assert(LukeAssertionMatcher.TO_EQUAL, [
                    Translation.getTranslationForLocale(
                      'SelfServiceDI.SelectedSourceCollectionTabPanel.SchemaTab.title'
                    ),
                    Translation.getTranslationForLocale('SelfServiceDI.FileUploadTabPanel.files.title'),
                    Translation.getTranslationForLocale('SelfServiceDI.FileStorageTabPanel.appliedSchema.title'),
                    Translation.getTranslationForLocale('SelfServiceDI.fileSettings.label'),
                  ]);
              });

              describe(':schemaTab', function () {
                beforeAll(function () {
                  this.originalFileHeaders = [
                    'Encoded',
                    'Id',
                    'PetalLengthCm',
                    'PetalWidthCm',
                    'SepalLengthCm',
                    'SepalWidthCm',
                    'Species',
                  ];
                  this.originalAliases = [
                    'encoded',
                    'id',
                    'petalLengthCm',
                    'petalWidthCm',
                    'sepalLengthCm',
                    'sepalWidthCm',
                    'species',
                  ];
                  this.originalDataTypes = ['string', 'string', 'string', 'string', 'string', 'string', 'string'];
                });

                it('schema name field is empty', function () {
                  this.schemaForm.getInputValue('tableName').assert(LukeAssertionMatcher.TO_BE_EMPTY);
                });

                it('schema description field is empty', function () {
                  this.schemaForm.getTextAreaValue('description').assert(LukeAssertionMatcher.TO_BE_EMPTY);
                });

                describe('clicking next', function () {
                  beforeAll(function () {
                    this.selfServiceDIPage.multiStepComponent.proceed();
                    wait1Seconds();
                  });

                  it('should show error: Required field incomplete', function () {
                    this.errorInlineNotification
                      .getTitleText()
                      .assert(
                        LukeAssertionMatcher.TO_EQUAL,
                        Translation.getTranslationForLocale('SelfServiceDI.createTableFromFiles.errorMsg')
                      );
                  });
                });

                describe('clicking uncheck all in the schema grid', function () {
                  beforeAll(function () {
                    this.schemaGrid.selectAll();
                    wait1Seconds();
                  });

                  it('should uncheck all the rows', function () {
                    this.schemaGrid.rowSelected(1).assert(LukeAssertionMatcher.TO_BE_FALSE);
                  });

                  describe('clicking next', function () {
                    beforeAll(function () {
                      this.selfServiceDIPage.multiStepComponent.proceed();
                      wait1Seconds();
                    });

                    it('shows error => No selected rows in the schema', function () {
                      this.errorInlineNotification
                        .getTitleText()
                        .assert(
                          LukeAssertionMatcher.TO_EQUAL,
                          Translation.getTranslationForLocale('SelfServiceDI.schemaTabNoSelectedError.subtitle.label')
                        );
                    });
                  });
                });

                describe('clicking select all in the schema grid', function () {
                  beforeAll(function () {
                    this.schemaGrid.selectAll();
                    wait1Seconds();
                  });

                  it('should check all the rows', function () {
                    this.schemaGrid.rowSelected(1).assert('toBeTrue');
                  });
                });

                it('column headers match the column name values', function () {
                  this.schemaTab
                    .getTextForCellsInColumn(1)
                    .assert(LukeAssertionMatcher.TO_EQUAL, this.originalFileHeaders);
                });

                it('column aliases match the expected inferred aliases', function () {
                  this.schemaTab.getColumnAliases(true).assert(LukeAssertionMatcher.TO_EQUAL, this.originalAliases);
                });

                it('column dataTypes match the expected inferred dataTypes', function () {
                  this.schemaTab
                    .getTextForCellsInColumn(3)
                    .assert(LukeAssertionMatcher.TO_EQUAL, this.originalDataTypes);
                });

                describe('selecting columns', function () {
                  describe('unchecking a column', function () {
                    beforeAll(function () {
                      this.schemaTab.selectRow(1);
                    });

                    it('disables column alias', function () {
                      this.schemaTab.rowInputDisabled(1, 3).assert(LukeAssertionMatcher.TO_EXIST);
                    });

                    it('disables description', function () {
                      this.schemaTab.rowInputDisabled(1, 5).assert(LukeAssertionMatcher.TO_EXIST);
                    });
                  });

                  describe('rechecking a column', function () {
                    beforeAll(function () {
                      this.schemaTab.selectRow(1);
                    });

                    it('enables column alias', function () {
                      this.schemaTab.rowInputNotDisabled(1, 3).assert(LukeAssertionMatcher.TO_EXIST);
                    });

                    it('enables description', function () {
                      this.schemaTab.rowInputNotDisabled(1, 5).assert(LukeAssertionMatcher.TO_EXIST);
                    });
                  });
                });

                describe('updating column alias', function () {
                  describe('when the column alias is too short', function () {
                    beforeAll(function () {
                      this.shortAlias = 'v';
                      this.schemaTab.setColumnAlias(true, 1, this.shortAlias);
                      wait1Seconds();
                    });

                    it('shows an error for the column alias', function () {
                      this.schemaTab
                        .columnAliasError(true, 1)
                        .assert(
                          LukeAssertionMatcher.TO_EQUAL,
                          Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.length.hintText')
                        );
                    });
                  });

                  describe('when the column alias is too long', function () {
                    beforeAll(function () {
                      this.longAlias = 'a'.repeat(31);
                      this.schemaTab.setColumnAlias(true, 1, this.longAlias);
                    });

                    it('shows an error for the column alias', function () {
                      this.schemaTab
                        .columnAliasError(true, 1)
                        .assert(
                          LukeAssertionMatcher.TO_EQUAL,
                          Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.length.hintText')
                        );
                    });
                  });

                  describe('when the column alias has a space in it', function () {
                    beforeAll(function () {
                      this.schemaTab.setColumnAlias(true, 1, 'hello world');
                      wait1Seconds();
                    });

                    it('shows an error for the column alias', function () {
                      this.schemaTab
                        .columnAliasError(true, 1)
                        .assert(
                          LukeAssertionMatcher.TO_EQUAL,
                          Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.alphanumeric.hintText')
                        );
                    });
                  });

                  describe('when the column alias has a special character in it', function () {
                    beforeAll(function () {
                      this.schemaTab.setColumnAlias(true, 1, 'hello-world');
                      wait1Seconds();
                    });

                    it('shows an error for the column alias', function () {
                      this.schemaTab
                        .columnAliasError(true, 1)
                        .assert(
                          LukeAssertionMatcher.TO_EQUAL,
                          Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.alphanumeric.hintText')
                        );
                    });
                  });

                  describe('when the column alias starts with a number', function () {
                    beforeAll(function () {
                      this.schemaTab.setColumnAlias(true, 1, '1helloWorld');
                      wait1Seconds();
                    });

                    it('shows an error for the column alias', function () {
                      this.schemaTab
                        .columnAliasError(true, 1)
                        .assert(
                          LukeAssertionMatcher.TO_EQUAL,
                          Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.startWithNumber.hintText')
                        );
                    });
                  });

                  describe('when the column alias collides with an existing column', function () {
                    beforeAll(function () {
                      this.schemaTab.setColumnAlias(true, 1, this.originalAliases[3]);
                      wait1Seconds();
                    });

                    afterAll(function () {
                      this.schemaTab.setColumnAlias(true, 1, this.originalAliases[1]);
                    });

                    it('shows an error for the column alias', function () {
                      this.schemaTab
                        .columnAliasError(true, 1)
                        .assert(
                          LukeAssertionMatcher.TO_EQUAL,
                          Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.duplicate.hintText').replace(
                            '{alias}',
                            this.originalAliases[3]
                          )
                        );
                    });
                  });

                  describe('renaming a column to a reserved keyword i.e. name', function () {
                    beforeAll(function () {
                      this.schemaTab.setColumnAlias(true, 1, 'name');
                      wait1Seconds();
                    });

                    it('shows an error for the column alias', function () {
                      this.schemaTab
                        .columnAliasError(true, 1)
                        .assert(
                          LukeAssertionMatcher.TO_EQUAL,
                          Translation.getTranslationForLocale('SelfServiceDI.AliasEditCell.reserved.hintText').replace(
                            '{alias}',
                            'name'
                          )
                        );
                    });
                  });

                  describe('when the column alias is valid', function () {
                    beforeAll(function () {
                      this.validAlias = 'encoded';
                      this.schemaTab.setColumnAlias(true, 1, this.validAlias);
                    });

                    it('does not show an error for the column alias', function () {
                      this.schemaTab
                        .search(this.schemaTab.cellSelector(1, 1, this.schemaTab.inputHintTextSelector))
                        .assertNot(LukeAssertionMatcher.TO_EXIST);
                    });
                  });
                });

                describe('updating column description', function () {
                  describe('when the column description is too short', function () {
                    beforeAll(function () {
                      this.shortDesc = 'desc';
                      this.schemaTab.setColumnDescription(true, 1, this.shortDesc);
                      wait1Seconds();
                    });

                    afterAll(function () {
                      this.schemaTab.setColumnDescription(true, 1, 'a good column description.');
                      wait1Seconds();
                    });

                    it('shows an error for the column description', function () {
                      this.schemaTab
                        .columnDescriptionError(true, 1)
                        .assert(
                          LukeAssertionMatcher.TO_EQUAL,
                          Translation.getTranslationForLocale('SelfServiceDI.AliasDescreiptionCell.length.hintText')
                        );
                    });
                  });

                  describe('when the description is too long', function () {
                    beforeAll(function () {
                      this.longDescription = 'a'.repeat(501);
                      this.schemaTab.setColumnDescription(true, 1, this.longDescription);
                    });

                    it('shows an error for the description', function () {
                      this.schemaTab
                        .columnDescriptionError(true, 1)
                        .assert(
                          LukeAssertionMatcher.TO_EQUAL,
                          Translation.getTranslationForLocale('SelfServiceDI.AliasDescreiptionCell.length.hintText')
                        );
                    });
                  });

                  describe('when the description is valid', function () {
                    beforeAll(function () {
                      this.validDescription = 'this is a valid description';
                      this.schemaTab.setColumnDescription(true, 1, this.validDescription);
                    });

                    it('does not show an error for the column description', function () {
                      this.schemaTab
                        .search(this.schemaTab.cellSelector(1, 5, this.schemaTab.inputHintTextSelector))
                        .assertNot(LukeAssertionMatcher.TO_EXIST);
                    });
                  });
                });

                describe('updating schema name and description', function () {
                  beforeAll(function () {
                    this.schemaNameHintSelector =
                      '.c3-metadata-id-selfservicedi-configureschemaandpreviewfileform .form-section-item:nth-child(1) .c3-form-field-hint';
                    this.schemaDescriptionHintSelector =
                      '.c3-metadata-id-selfservicedi-configureschemaandpreviewfileform .form-section-item:nth-child(2) .c3-form-field-hint';
                  });

                  afterAll(function () {
                    this.schemaForm.setInputValue('tableName', 'IrisTable');
                    this.schemaForm.setTextAreaValue('description', 'A table to view Iris data.');
                  });

                  describe('updating schema name', function () {
                    describe('when schema name is less than 4 characters', function () {
                      beforeAll(function () {
                        this.schemaForm.setInputValue('tableName', 'AA');
                      });

                      it('shows the schema name error', function () {
                        this.selfServiceDIPage
                          .search(this.schemaNameHintSelector)
                          .text()
                          .assert(
                            LukeAssertionMatcher.TO_EQUAL,
                            Translation.getTranslationForLocale('SelfServiceDI.descriptionLengthTooShortError.label')
                          );
                      });
                    });

                    describe('when schema name starts with number', function () {
                      beforeAll(function () {
                        this.schemaForm.setInputValue('tableName', '1IrisTable');
                      });

                      it('shows the schema name error', function () {
                        this.selfServiceDIPage
                          .search(this.schemaNameHintSelector)
                          .text()
                          .assert(
                            LukeAssertionMatcher.TO_EQUAL,
                            Translation.getTranslationForLocale('SelfServiceDI.tableNameNotCapitalizedError.label')
                          );
                      });
                    });

                    describe('when schema name is non-pascal case', function () {
                      beforeAll(function () {
                        this.schemaForm.setInputValue('tableName', 'iris-table');
                      });

                      it('shows the schema name error', function () {
                        this.selfServiceDIPage
                          .search(this.schemaNameHintSelector)
                          .text()
                          .assert(
                            LukeAssertionMatcher.TO_EQUAL,
                            Translation.getTranslationForLocale('SelfServiceDI.tableNameNotCapitalizedError.label')
                          );
                      });
                    });

                    describe('when schema name is camelCase', function () {
                      beforeAll(function () {
                        this.schemaForm.setInputValue('tableName', 'irisTable');
                      });

                      it('shows the schema name error', function () {
                        this.selfServiceDIPage
                          .search(this.schemaNameHintSelector)
                          .text()
                          .assert(
                            LukeAssertionMatcher.TO_EQUAL,
                            Translation.getTranslationForLocale('SelfServiceDI.tableNameNotCapitalizedError.label')
                          );
                      });
                    });

                    describe('when schema name has space', function () {
                      beforeAll(function () {
                        this.schemaForm.setInputValue('tableName', 'Iris Table');
                      });

                      it('shows the schema name error', function () {
                        this.selfServiceDIPage
                          .search(this.schemaNameHintSelector)
                          .text()
                          .assert(
                            LukeAssertionMatcher.TO_EQUAL,
                            Translation.getTranslationForLocale('SelfServiceDI.tableNameNotCapitalizedError.label')
                          );
                      });
                    });
                  });

                  describe('updating schema description', function () {
                    describe('when schema description is less than 4 characters', function () {
                      beforeAll(function () {
                        this.schemaForm.setTextAreaValue('description', 'AA');
                      });

                      it('shows the schema description error', function () {
                        this.selfServiceDIPage
                          .search(this.schemaDescriptionHintSelector)
                          .text()
                          .assert(
                            LukeAssertionMatcher.TO_EQUAL,
                            Translation.getTranslationForLocale('SelfServiceDI.descriptionLengthTooShortError.label')
                          );
                      });
                    });
                  });
                });
              });

              describe(':filesTab', function () {
                beforeAll(function () {
                  this.tabPanel.clickTab('Files');
                });

                it('should have 5 rows', function () {
                  this.filesGrid.numberOfRows().assert(LukeAssertionMatcher.TO_EQUAL, 5);
                });

                it('should have the correct column names', function () {
                  this.filesGrid.columnNames().assert(LukeAssertionMatcher.TO_EQUAL, ['File name', 'Size', 'Warnings']);
                });

                it('should have the correct file names', function () {
                  this.filesGrid
                    .getTextForCellsInColumn(0)
                    .assert(LukeAssertionMatcher.TO_EQUAL, [
                      'iris_1.csv',
                      'iris_2.csv',
                      'iris_3.csv',
                      'iris_4.csv',
                      'iris_5.csv',
                    ]);
                });

                it('should have the correct file sizes', function () {
                  this.filesGrid
                    .getTextForCellsInColumn(1)
                    .assert(LukeAssertionMatcher.TO_EQUAL, ['1.01 KB', '1.06 KB', '1.15 KB', '1.15 KB', '1.01 KB']);
                });

                it('should have the correct warnings', function () {
                  this.filesGrid
                    .getTextForCellsInColumn(2)
                    .assert(LukeAssertionMatcher.TO_EQUAL, [null, null, null, null, null]);
                });

                describe('going back to schemaTab', function () {
                  beforeAll(function () {
                    this.tabPanel.clickTab('Schema');
                  });

                  it('should preserve the schemaTab updates', function () {
                    this.schemaForm.getInputValue('tableName').assert(LukeAssertionMatcher.TO_EQUAL, 'IrisTable');
                    this.schemaForm
                      .getTextAreaValue('description')
                      .assert(LukeAssertionMatcher.TO_EQUAL, 'A table to view Iris data.');
                    this.schemaGrid.numberOfRows().assert(LukeAssertionMatcher.TO_EQUAL, 7);
                  });
                });
              });

              describe(':appliedSchemaTab', function () {
                beforeAll(function () {
                  this.appliedSchemaFilesTree = LukeTestPresentationalTreeView.make({
                    luke: this.client,
                    parentSelector:
                      '.c3-metadata-id-selfservicedi-filestorageappliedschematreeviewsidepanel .presentational-tree-view-container',
                  });
                  this.expectedColumnNames = [
                    'encoded',
                    'id',
                    'petalWidthCm1',
                    'sepalLengthCm',
                    'sepalWidthCm',
                    'species',
                  ];
                  this.tabPanel.clickTab('Schema');
                  this.schemaTab.selectRow(3);
                  this.schemaTab.setColumnAlias(true, 4, this.expectedColumnNames[2]);
                  wait1Seconds();
                  this.tabPanel.clickTab('Applied Schema');
                  wait1Seconds();
                  this.fileOneRowOne = ['0', '1', '0.2', '5.1', '3.5', 'Iris-setosa'];
                  this.fileTwoRowOne = ['0', '31', '0.2', '4.8', '3.1', 'Iris-setosa'];
                });

                it('should render the applied schema grid', function () {
                  this.appliedSchemaGrid.rendered();
                });

                it('applied schema grid has correct columns', function () {
                  this.appliedSchemaGrid.columnNames().assert(LukeAssertionMatcher.TO_EQUAL, this.expectedColumnNames);
                });

                it('applied schema grid should have at max 20 rows', function () {
                  this.appliedSchemaGrid.numberOfRows().assert(LukeAssertionMatcher.TO_EQUAL, 20);
                });

                it('should load the transformed data', function () {
                  this.appliedSchemaGrid
                    .getTextForCellsInRow(0)
                    .assert(LukeAssertionMatcher.TO_EQUAL, this.fileOneRowOne);
                });

                it('should have the first file selected', function () {
                  this.appliedSchemaFilesTree.isTreeNodeSelected('iris_1.csv');
                });

                describe('selecting second file', function () {
                  beforeAll(function () {
                    this.appliedSchemaFilesTree.treeNodeClick('iris_2.csv');
                    wait1Seconds();
                  });

                  it('should reload the transformed data in grid', function () {
                    this.appliedSchemaGrid
                      .getTextForCellsInRow(0)
                      .assert(LukeAssertionMatcher.TO_EQUAL, this.fileTwoRowOne);
                  });
                });
              });
            });
          });
        });

        describe('delete connector', function () {
          beforeAll(function () {
            this.deleteDataSourceFormInputSelector =
              '.c3-metadata-id-selfservicedi-deletedataconnectorform input.c3-form-field';
            this.deleteModal = LukeTestUiSdlModal.make({ luke: this.client }, true);
            this.selfServiceDIPage.presentationalTreeView.treeNodeActionClick(this.nodeSelector, 3);
          });

          it('opens a modal', function () {
            this.deleteModal.rendered();
          });

          it('show the modal name correctly', function () {
            this.deleteModal
              .getHeaderText()
              .assert(
                LukeAssertionMatcher.TO_CONTAIN,
                Translation.getTranslationForLocale('SelfServiceDI.deleteDataConnector.label')
              );
          });

          it('show the modal correctly', function () {
            this.deleteModal
              .getContentText()
              .assert(
                LukeAssertionMatcher.TO_CONTAIN,
                Translation.getTranslationForLocale(
                  'SelfServiceDI.deleteDataSourceForm.dataConnector.description'
                ).replace('{dataSourceName}', this.formValues.name)
              );
          });

          describe('click the cancel button on modal', function () {
            beforeAll(function () {
              this.deleteModal.clickButton('secondary');
            });

            it('tree node exist', function () {
              wait1Seconds();
              this.selfServiceDIPage.presentationalTreeView.treeNodeSelector(this.nodeSelector).assert('toExist');
            });
          });

          describe('click on delete button on the modal', function () {
            beforeAll(function () {
              this.selfServiceDIPage.presentationalTreeView.treeNodeActionClick(this.nodeSelector, 3);
              wait1Seconds();
              this.client.search(this.deleteDataSourceFormInputSelector).setValue(this.formValues.name);
              wait1Seconds();
              this.deleteModal.clickButton('danger');
            });

            it('show success banner', function () {
              wait1Seconds();
              this.client
                .search('.c3-sdl-message-container-view .c3-sdl-message-banner-content h1')
                .text()
                .assert(
                  LukeAssertionMatcher.TO_CONTAIN,
                  Translation.getTranslationForLocale('SelfServiceDI.DeleteSourceSystem.success.message').replace(
                    '{dataSourceName}',
                    this.formValues.name
                  )
                );
            });
          });
        });
      });
    });
  });
});
