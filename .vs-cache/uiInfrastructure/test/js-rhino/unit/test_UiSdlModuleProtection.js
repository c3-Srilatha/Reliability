/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlModuleProtection', function () {
  describe('UiSdlModuleProtection', function () {
    beforeAll(function () {
      /**
       * IMPORTANT: The keys below are only used for testing.
       */
      this.privateKey =
        '-----BEGIN PRIVATE KEY-----\n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\n1XCKvOBpRO2qK9wjcdPbTp/l0I8BEBg=\n-----END PRIVATE KEY-----';

      this.wrongPrivateKey =
        '-----BEGIN PRIVATE KEY-----\n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\nveAbMBFCLK7EcAxTYnP8leJlJ2t1mgc=\n-----END PRIVATE KEY-----';

      this.publicKey =
        '-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA2l/LSo8naYtUMtVA0KKo\nH9bC3l0DY5sKHKu0GKYmM0G7HoGSsiFvSrZi44RjYo5bBs/1+eTYxy+DInlaJNFw\n87P8pb//1eheRV6ShKd493Py3iY/FrRVfvDxrX8IES2LCGfzewnrTL5zuv9D4jy3\nPkQy70kaFLYX+EVfipAQuXOTpAK4JNSU8SL6wcsxSfEy2anr1F5JpZeOPmhZviop\nszJ/lFWUMFKqNzj06V1L23f0bwqlGTsovUCSAe8U8n3r4tYojVIpjyqRcwgh6zg5\nVx7Gkv93yMNRpL5wQvYF/TTCiB3NgH8pay77wkC2k6mvTnbE/P39eRv8Iq0DepI/\n57czU/5avqvwCFw4dg21pqXQ9iwpWblImBZnFhbdpY7tyzHgbLTxEXBXdXPuPFrk\nGnOVA4k6SQsXsaqQdUUewjHDAMzVIzNdi6/RYQ7sFuRJ0r7GXEBwMZiF2iuSmEJx\nuchYmB6mIqUoYs5+0kGwy58KWgKg0CSmisuE2i22QiNn7GXZXrgt9bFO2sUqJxMY\naHPY0375z2mD7L1vbDITnc6WtnO4uc4aT6bBXdNb9tLhKTa96SP8p8gtPX+5bTPn\nl93fv6URUYy+drtHjEltPJULUJ3a780jqImn/T9JNcKq5z61ortOzWQ9xm6q7FS9\nAUtwQCPblirDXId6VOaVmYcCAwEAAQ==\n-----END PUBLIC KEY-----';

      this.protectedPackageName = 'myProtectedPackage';

      this.protectedModule = UiSdlProtectedModule.make({
        packageName: this.protectedPackageName,
        federatedModules: [this.protectedPackageName],
        componentTypeNames: ['ProtectedPackageComponent'],
        publicKey: this.publicKey,
      });
    });

    it('must not be extensible', function () {
      expect(UiSdlModuleProtection.meta().isFinal()).toBeTruthy();
      expect(UiSdlModuleProtection.meta().isNotRemixable()).toBeTruthy();
    });

    describe('detectInvalidPackages', function () {
      describe('when no protected package is not being used', function () {
        it('should return an empty collection', function () {
          const invalid = UiSdlModuleProtection.detectInvalidPackages(
            {
              unprotectedPkg: UiSdlComponentPackageAccess.make(),
            },
            {
              [this.protectedPackageName]: this.protectedModule,
            },
            'myAppPkg',
          );
          expect(invalid.size).toEqual(0);
        });
      });

      describe('when a protected package is used without token', function () {
        it('should return the name of the package', function () {
          const invalid = UiSdlModuleProtection.detectInvalidPackages(
            {
              [this.protectedPackageName]: UiSdlComponentPackageAccess.make(),
            },
            {
              [this.protectedPackageName]: this.protectedModule,
            },
            'myAppPkg',
          );
          expect(invalid).toContain(this.protectedPackageName);
        });
      });

      describe('when a protected package is used with an invalid token', function () {
        it('should return the name of the package', function () {
          const invalidToken = Jwt.make({
            payload: {
              rootPackage: 'anotherAppPkg',
              componentPackage: 'protectedPackage',
              ownerEmail: 'devx-ui@c3.ai',
            },
            header: {
              alg: 'RS512',
              typ: 'JWT',
            },
          }).sign({ key: this.privateKey, algKind: JwsAlgorithmKind.RSA512 });

          const invalid = UiSdlModuleProtection.detectInvalidPackages(
            {
              [this.protectedPackageName]: UiSdlComponentPackageAccess.make({
                accessToken: invalidToken,
              }),
            },
            {
              [this.protectedPackageName]: this.protectedModule,
            },
            'myAppPkg',
          );
          expect(invalid).toContain(this.protectedPackageName);
        });
      });
    });

    describe('isValidToken', function () {
      beforeAll(function () {
        this.appPackage = 'myAppPackage';

        this.validToken = Jwt.make({
          payload: {
            rootPackage: this.appPackage,
            componentPackage: this.protectedPackageName,
            ownerEmail: 'devx-ui@c3.ai',
          },
          header: {
            alg: 'RS512',
            typ: 'JWT',
          },
        }).sign({ key: this.privateKey, algKind: JwsAlgorithmKind.RSA512 });
      });

      it('should return true when token is valid', function () {
        const result = UiSdlModuleProtection.isValidToken(
          UiSdlComponentPackageAccess.make({ accessToken: this.validToken }),
          this.protectedModule,
          this.appPackage,
        );
        expect(result).toEqual(true);
      });

      it("should return false when token doesn't belong to app", function () {
        const result = UiSdlModuleProtection.isValidToken(
          UiSdlComponentPackageAccess.make({ accessToken: this.validToken }),
          this.protectedModule,
          'myOtherAppPackage',
        );
        expect(result).toBeFalsy();
      });

      it('should return false if package access is not provided', function () {
        const result = UiSdlModuleProtection.isValidToken(null, this.protectedModule, this.appPackage);
        expect(result).toBeFalsy();
      });

      it('should return false if token is not provided', function () {
        const result = UiSdlModuleProtection.isValidToken(
          UiSdlComponentPackageAccess.make({}),
          this.protectedModule,
          this.appPackage,
        );
        expect(result).toBeFalsy();
      });

      it("should return false if the token doesn't belong to the protected package", function () {
        const token = Jwt.make({
          payload: {
            rootPackage: this.appPackage,
            componentPackage: 'myOtherProtectedPackage',
            ownerEmail: 'devx-ui@c3.ai',
          },
          header: {
            alg: 'RS512',
            typ: 'JWT',
          },
        }).sign({ key: this.privateKey, algKind: JwsAlgorithmKind.RSA512 });

        const result = UiSdlModuleProtection.isValidToken(
          UiSdlComponentPackageAccess.make({ accessToken: token }),
          this.protectedModule,
          this.appPackage,
        );

        expect(result).toBeFalsy();
      });

      it('should return false if the token was not signed with the right key', function () {
        const token = Jwt.make({
          payload: {
            rootPackage: this.appPackage,
            componentPackage: 'myProtectedPackage',
            ownerEmail: 'devx-ui@c3.ai',
          },
          header: {
            alg: 'RS512',
            typ: 'JWT',
          },
        }).sign({ key: this.wrongPrivateKey, algKind: JwsAlgorithmKind.RSA512 });

        const result = UiSdlModuleProtection.isValidToken(
          UiSdlComponentPackageAccess.make({ accessToken: token }),
          this.protectedModule,
          this.appPackage,
        );

        expect(result).toBeFalsy();
      });
    });
  });
});
