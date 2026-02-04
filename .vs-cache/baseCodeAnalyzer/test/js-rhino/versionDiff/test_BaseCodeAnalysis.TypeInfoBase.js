/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const testName = 'test_BaseCodeAnalysis.TypeInfoBase';

describe(testName, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(testName);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('::resolvedFieldMeta', function () {
    beforeAll(function () {
      var otherTypeMeta = TypeMeta.fromString(`type OtherType {
        inheritedField: int
      }`);

      this.typeInfo = BaseCodeAnalysis.TypeInfoBase.make({
        typeMeta: `type SomeType mixes OtherType {
          nonInheritedField: string
          inheritedField: ~
        }`,
        metaDeps: {
          mixins: ['OtherType'],
        },
        resolvedInheritedFields: {
          inheritedField: [otherTypeMeta.declaredFieldType('inheritedField').first()],
        },
      });
    });

    describe('when the resolved field exists', function () {
      beforeAll(function () {
        var baseFieldMeta = this.typeInfo.typeMeta.declaredFieldType('inheritedField').first();
        this.fieldMeta = this.typeInfo.resolvedFieldMeta(baseFieldMeta);
      });

      it('returns the resolved field', function () {
        expect(this.fieldMeta.valueType).toBeInstanceOf(IntType);
      });
    });

    describe("when the resolved field doesn't exist", function () {
      beforeAll(function () {
        var baseFieldMeta = this.typeInfo.typeMeta.declaredFieldType('nonInheritedField').first();
        this.fieldMeta = this.typeInfo.resolvedFieldMeta(baseFieldMeta);
      });

      it('returns the original field', function () {
        expect(this.fieldMeta.valueType).toBeInstanceOf(StringType);
      });
    });
  });

  describe('::isBeta', function () {
    beforeAll(function () {
      this.betaTypeInfo = BaseCodeAnalysis.TypeInfoBase.make({
        typeMeta: `@beta
        type BetaType {
          nonBetaField: string
        }`,
      });

      this.nonBetaTypeInfo = BaseCodeAnalysis.TypeInfoBase.make({
        typeMeta: `type NonBetaType {
          @beta
          betaField: string
          nonBetaField: string
        }`,
      });
    });

    it('returns true for beta Types', function () {
      expect(this.betaTypeInfo.isBeta()).toBeTrue();
    });

    it('returns false for non-beta Types', function () {
      expect(this.nonBetaTypeInfo.isBeta()).toBeFalse();
    });

    it('returns true for non-beta fields on beta Types', function () {
      var baseFieldMeta = this.betaTypeInfo.typeMeta.declaredFieldType('nonBetaField').first();
      expect(this.betaTypeInfo.isBeta(baseFieldMeta)).toBeTrue();
    });

    it('returns true for beta fields on non-beta Types', function () {
      var baseFieldMeta = this.nonBetaTypeInfo.typeMeta.declaredFieldType('betaField').first();
      expect(this.nonBetaTypeInfo.isBeta(baseFieldMeta)).toBeTrue();
    });

    it('returns false for non-beta fields on non-beta Types', function () {
      var baseFieldMeta = this.nonBetaTypeInfo.typeMeta.declaredFieldType('nonBetaField').first();
      expect(this.nonBetaTypeInfo.isBeta(baseFieldMeta)).toBeFalse();
    });
  });

  describe('::isPrivate', function () {
    beforeAll(function () {
      this.privateTypeInfo = BaseCodeAnalysis.TypeInfoBase.make({
        typeMeta: `private type PrivateType {
          nonPrivateField: string
        }`,
      });

      this.nonPrivateTypeInfo = BaseCodeAnalysis.TypeInfoBase.make({
        typeMeta: `type NonPrivateType {
          privateField: private string
          nonPrivateField: string
        }`,
      });
    });

    it('returns true for private Types', function () {
      expect(this.privateTypeInfo.isPrivate()).toBeTrue();
    });

    it('returns false for non-private Types', function () {
      expect(this.nonPrivateTypeInfo.isPrivate()).toBeFalse();
    });

    it('returns true for non-private fields on private Types', function () {
      var baseFieldMeta = this.privateTypeInfo.typeMeta.declaredFieldType('nonPrivateField').first();
      expect(this.privateTypeInfo.isPrivate(baseFieldMeta)).toBeTrue();
    });

    it('returns true for private fields on non-private Types', function () {
      var baseFieldMeta = this.nonPrivateTypeInfo.typeMeta.declaredFieldType('privateField').first();
      expect(this.nonPrivateTypeInfo.isPrivate(baseFieldMeta)).toBeTrue();
    });

    it('returns false for non-private fields on non-private Types', function () {
      var baseFieldMeta = this.nonPrivateTypeInfo.typeMeta.declaredFieldType('nonPrivateField').first();
      expect(this.nonPrivateTypeInfo.isPrivate(baseFieldMeta)).toBeFalse();
    });
  });
});
