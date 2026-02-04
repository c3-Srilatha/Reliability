/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

describe('test_UiSdlTsTypesSourceCodeLoader', function () {
  describe('#produceOne', function () {
    describe('TS source files', function () {
      describe('for non-UiSdlComponent types', function () {
        beforeAll(function () {
          this.inheritanceChildResult = UiSdlTsTypesSourceCodeLoader.produceOne('BundlerTestAppInheritanceChild');
          this.inheritanceParentResult = UiSdlTsTypesSourceCodeLoader.produceOne('BundlerTestAppInheritanceParent');
          this.typeScriptTypeResult = UiSdlTsTypesSourceCodeLoader.produceOne('BundlerTestAppTypeScriptType');
          this.innerTypeInheritanceResult = UiSdlTsTypesSourceCodeLoader.produceOne('BundlerTestAppInheritanceChild.InheritInner');
        });

        it('imports inherited annotated methods', function () {
          expect(this.inheritanceChildResult).toBeDefined();
          expect(this.inheritanceChildResult).toMatch(
            "import { epics as epics0 } from '@c3/ui/BundlerTestAppInheritanceParent'",
          );
          expect(this.inheritanceChildResult).toMatch(
            "import { reducers as reducers0 } from '@c3/ui/BundlerTestAppInheritanceParent'",
          );
          expect(this.inheritanceChildResult).toMatch(
            "import { actionCreators as actionCreators0 } from '@c3/ui/BundlerTestAppInheritanceParent'",
          );
          expect(this.inheritanceChildResult).toMatch(
            "import { dummyFunc as dummyFunc_BundlerTestAppInheritanceParent } from '@c3/ui/BundlerTestAppInheritanceParent';",
          );
          expect(this.inheritanceChildResult).not.toMatch(
            "import { dummyFuncOverride as dummyFuncOverride_BundlerTestAppInheritanceChild } from '@c3/ui/BundlerTestAppInheritanceParent';",
          );
        });

        it('exports annotated methods', function () {
          expect(this.inheritanceParentResult).toBeDefined();
          expect(this.inheritanceParentResult).toMatch('export const epics = { PARENT_ACTION: parentEpic };');
          expect(this.inheritanceParentResult).toMatch('export const reducers = { PARENT_ACTION: parentReducer };');
          expect(this.inheritanceParentResult).toMatch('export const actionCreators = { parentActionCreator };');
        });

        it('exports annotated methods from inheritance chain', function () {
          expect(this.inheritanceChildResult).toBeDefined();
          expect(this.inheritanceChildResult).toMatch(
            'export const epics = { ...epics0, CHILD_ACTION: childEpic, CHILD_ACTION_2: childEpic };',
          );
          expect(this.inheritanceChildResult).toMatch(
            'export const reducers = { ...reducers0, CHILD_ACTION: childReducer };',
          );
          expect(this.inheritanceChildResult).toMatch(
            'export const actionCreators = { ...actionCreators0, childActionCreator };',
          );
          expect(this.inheritanceChildResult).toMatch(
            'export { dummyFunc_BundlerTestAppInheritanceParent as dummyFunc };',
          );
          expect(this.inheritanceChildResult).not.toMatch(
            'export { dummyFuncOverride_BundlerTestAppInheritanceChild as dummyFuncOverride };',
          );
        });

        it('does not add redux exports to types without annotated functions', function () {
          expect(this.typeScriptTypeResult).toBeDefined();
          expect(this.typeScriptTypeResult).not.toMatch('export const epics =');
          expect(this.typeScriptTypeResult).not.toMatch('export const reducers =');
          expect(this.typeScriptTypeResult).not.toMatch('export const actionCreators =');
        });

        it('exports and imports sanitized functions inherited from inner types', function () {
          expect(this.innerTypeInheritanceResult).toBeDefined();
          expect(this.innerTypeInheritanceResult).toMatch(
            "import { foo as foo_BundlerTestAppInheritanceChild_Inner } from '@c3/ui/BundlerTestAppInheritanceChild.Inner';"
          );
          expect(this.innerTypeInheritanceResult).toMatch(
            "export { foo_BundlerTestAppInheritanceChild_Inner as foo };"
          );
        })
      });

      describe('for UiSdlComponent types', function () {
        beforeAll(function () {
          this.testAppComponentResult = UiSdlTsTypesSourceCodeLoader.produceOne('BundlerTestAppComponent');
          this.testAppChartResult = UiSdlTsTypesSourceCodeLoader.produceOne('BundlerTestAppChart');
        });

        it('imports inherited methods', function () {
          expect(this.testAppComponentResult).toBeDefined();
          expect(this.testAppComponentResult).toMatch("import { epics as epics0 } from '@c3/ui/UiSdlComponent';");
          expect(this.testAppComponentResult).toMatch("import { reducers as reducers0 } from '@c3/ui/UiSdlComponent';");
          expect(this.testAppComponentResult).toMatch(
            "import { actionCreators as actionCreators0 } from '@c3/ui/UiSdlComponent';",
          );
        });

        it('exports annotated methods from inheritance chain', function () {
          expect(this.testAppComponentResult).toBeDefined();
          expect(this.testAppComponentResult).toMatch('export const epics = { ...epics0 };');
          expect(this.testAppComponentResult).toMatch('export const reducers = { ...reducers0 };');
          expect(this.testAppComponentResult).toMatch('export const actionCreators = { ...actionCreators0 };');
        });

        it('adds defaultValues if there are any initializers defined', function () {
          expect(this.testAppChartResult).toMatch(
            // JSON.stringify does not have the same output as Jsn.stringify
            'export const defaultValues = {"triggersRegistered":false,"wrapWithMetadataId":false,"title":"This is the default value","boolean":false,"number":0,"text":"BundlerTestAppChart.text"};',
          );
        });

        describe('that are remixed', function () {
          beforeAll(function () {
            this.sourceTypeRemixedTypeResult = UiSdlTsTypesSourceCodeLoader.produceOne('TypeWithSourceCodeTypeSource');
            this.moduleTypeRemixedTypeResult = UiSdlTsTypesSourceCodeLoader.produceOne('TypeWithSourceCodeTypeModule');
          });

          describe('with @typeScript(sourceCodeType="Script")', function () {
            it('should concatenate the source code from the original Type', function () {
              expect(this.sourceTypeRemixedTypeResult).toEqual(jasmine.any(String));
              expect(this.sourceTypeRemixedTypeResult).toMatch(
                /export function methodB\(\): boolean \{\n {2}return false;\n\}/,
              );
              expect(this.sourceTypeRemixedTypeResult).toMatch(
                /export function methodA\(\): boolean \{\n {2}return true;\n\}/,
              );
            });
          });

          describe('with @typeScript(sourceCodeType="Module")', function () {
            it('should replace the source code with the remix Type functions', function () {
              expect(this.moduleTypeRemixedTypeResult).toEqual(jasmine.any(String));
              expect(this.moduleTypeRemixedTypeResult).toMatch(
                /export function methodB\(\): boolean \{\n {2}return false;\n\}/,
              );
              expect(this.moduleTypeRemixedTypeResult).not.toMatch(
                /export function methodA\(\): boolean \{\n {2}return true;\n\}/,
              );
            });
          });
        });
      });

      describe('for UiSdlComponent itself', function () {
        beforeAll(function () {
          this.uiSdlcomponentResult = UiSdlTsTypesSourceCodeLoader.produceOne('UiSdlComponent');
        });

        it('are included', function () {
          expect(this.uiSdlcomponentResult).toEqual(jasmine.any(String));
        });

        it('does not import methods', function () {
          expect(this.uiSdlcomponentResult).toBeDefined();
          expect(this.uiSdlcomponentResult).not.toMatch('import { epics');
          expect(this.uiSdlcomponentResult).not.toMatch('import { reducers');
          expect(this.uiSdlcomponentResult).not.toMatch('import { actionCreators');
        });

        it('exports even without its own annotated methods', function () {
          expect(this.uiSdlcomponentResult).toBeDefined();
          expect(this.uiSdlcomponentResult).toMatch('export const epics = {  };');
          expect(this.uiSdlcomponentResult).toMatch(
            'export const reducers = { REGISTER_TRIGGERS: triggersRegisterEffect };',
          );
          expect(this.uiSdlcomponentResult).toMatch(
            'export const actionCreators = { renderInitialAction, registerTriggersAction };',
          );
        });
      });

      describe('for "React" renderer types', function () {
        it('does not generate code', function () {
          expect(UiSdlTsTypesSourceCodeLoader.produceOne('BundlerTestAppComponentReact')).toBeNull();
        });
      });

      describe('for enum types', function () {
        it('does not generate code', function () {
          expect(UiSdlTsTypesSourceCodeLoader.produceOne('BundlerTestAppEnumType')).toBeNull();
        });
      });
    });
  });

  describe('#produceBatch', function () {
    beforeAll(function () {
      this.typeNames = ['UiSdlDataRedux', 'BundlerTestAppNotExistentType', 'UiSdlEpicRedirect'];
      this.result = UiSdlTsTypesSourceCodeLoader.produceBatch(this.typeNames);
      this.fileDetails = this.result.fileDetails;
      this.usedEnums = this.result.usedEnums;
      this.workingDirPrefix = 'node_modules/@c3/ui/';
    });

    describe('generates correct file path in working dir', function () {
      it('for epic types', function () {
        expect(this.fileDetails['epics/UiSdlEpicRedirect.ts'].filePathInWorkingDir).toBe(
          this.workingDirPrefix + 'epics/UiSdlEpicRedirect.ts',
        );
      });

      it('for non-epic types', function () {
        expect(this.fileDetails['UiSdlDataRedux.ts'].filePathInWorkingDir).toBe(
          this.workingDirPrefix + 'UiSdlDataRedux.ts',
        );
      });

      it('for nonexistent types', function () {
        expect(this.fileDetails['BundlerTestAppNotExistentType.ts']).toBe(undefined);
      });
    });

    describe('generates correct file content', function () {
      it('for epic types', function () {
        expect(this.fileDetails['epics/UiSdlEpicRedirect.ts'].fileContent).not.toBeNull();
      });

      it('for non-epic types', function () {
        expect(this.fileDetails['UiSdlDataRedux.ts'].fileContent).not.toBeNull();
      });
    });

    describe('generates correct mapping for use enums', function () {
      it('should include all used enums', function () {
        expect(this.usedEnums['UiSdlDataReceiveMode']).toBeTrue();
      });
    });
  });

  describe('#produceAll', function () {
    beforeAll(function () {
      this.result = UiSdlTsTypesSourceCodeLoader.produceAll().files;
    });

    describe('TS source files', function () {
      describe('for non-UiSdlComponent types', function () {
        it('are included', function () {
          expect(this.result.get('BundlerTestAppInheritanceParent.ts').file.readString()).toEqual(jasmine.any(String));
          expect(this.result.get('BundlerTestAppInheritanceChild.ts').file.readString()).toEqual(jasmine.any(String));
          expect(this.result.get('BundlerTestAppData.ts').file.readString()).toEqual(jasmine.any(String));
        });
      });

      describe('for UiSdlComponent types', function () {
        it('are included', function () {
          expect(this.result.get('BundlerTestAppComponent.ts').file.readString()).toEqual(jasmine.any(String));
        });
      });

      describe('for UiSdlComponent itself', function () {
        beforeEach(function () {
          this.sourceCode = this.result.get('UiSdlComponent.ts').file.readString();
        });

        it('are included', function () {
          expect(this.sourceCode).toEqual(jasmine.any(String));
        });
      });

      describe('for "React" renderer types', function () {
        it('are not included', function () {
          expect(this.result.get('BundlerTestAppComponentReact.ts')).toBeFalsy();
        });
      });

      describe('for enum types', function () {
        it('are not included', function () {
          expect(this.result.get('BundlerTestAppEnumType.ts')).toBeFalsy();
        });
      });
    });
  });

  describe('#addDefaultValuesExport', function () {
    describe('when a type has at least one field with a default value', function () {
      beforeAll(function () {
        this.result = UiSdlTsTypesSourceCodeLoader.addDefaultValuesExport(C3.pkg().typeMeta('BundlerTestAppChart'));
      });

      it('returns a defaultValues export statement, with default values populated', function () {
        expect(this.result).toMatch(
          'export const defaultValues = {"triggersRegistered":false,"wrapWithMetadataId":false,"title":"This is the default value","boolean":false,"number":0,"text":"BundlerTestAppChart.text"};',
        );
      });

      it('returns a defaultValues export statement, with default values populated for false boolean', function () {
        expect(this.result).toContain('"boolean":false');
      });

      it('returns a defaultValues export statement, with default values populated for 0 integer', function () {
        expect(this.result).toContain('"number":0');
      });

      it('returns a defaultValues export statement, with default values populated for wrapWithMetadataId false', function () {
        expect(this.result).toContain('"wrapWithMetadataId":false');
      });
    });

    describe('when the type is a React type', function () {
      it('returns null', function () {
        // It's actually returning an empty string, but somewhere in platform it gets turned into null
        var result = UiSdlTsTypesSourceCodeLoader.addDefaultValuesExport(
          C3.pkg().typeMeta('BundlerTestAppComponentReact'),
        );

        expect(result).toBeFalsy();
      });
    });
  }).pend('MIG8-3499');

  describe('#addImportsAndExports', function () {
    describe('for non-UiSdlComponent types', function () {
      describe('without mixins', function () {
        describe('with its own Redux methods', function () {
          beforeAll(function () {
            this.BundlerTestAppInheritanceParent = C3.pkg().typeMeta('BundlerTestAppInheritanceParent');
            this.sourceCode = UiSdlTsTypesSourceCodeLoader.addImportsAndExports(
              '// Placeholder',
              this.BundlerTestAppInheritanceParent,
            );
          });

          it('includes the original source code', function () {
            expect(this.sourceCode).toMatch('// Placeholder');
          });

          it('exports annotated methods', function () {
            expect(this.sourceCode).toBeDefined();
            expect(this.sourceCode).toMatch('export const epics = { PARENT_ACTION: parentEpic };');
            expect(this.sourceCode).toMatch('export const reducers = { PARENT_ACTION: parentReducer };');
            expect(this.sourceCode).toMatch('export const actionCreators = { parentActionCreator };');
          });
        });

        describe('without its own Redux methods', function () {
          beforeAll(function () {
            this.BundlerTestAppTypeScriptType = C3.pkg().typeMeta('BundlerTestAppTypeScriptType');
            this.sourceCode = UiSdlTsTypesSourceCodeLoader.addImportsAndExports(
              '// Placeholder',
              this.BundlerTestAppTypeScriptType,
            );
          });

          it('includes the original source code', function () {
            expect(this.sourceCode).toMatch('// Placeholder');
          });

          it('does not add redux exports to types without annotated functions', function () {
            expect(this.sourceCode).toBeDefined();
            expect(this.sourceCode).not.toMatch('export const epics =');
            expect(this.sourceCode).not.toMatch('export const reducers =');
            expect(this.sourceCode).not.toMatch('export const actionCreators =');
          });
        });
      });

      describe('with mixins', function () {
        beforeAll(function () {
          this.BundlerTestAppInheritanceChild = C3.pkg().typeMeta('BundlerTestAppInheritanceChild');
          this.sourceCode = UiSdlTsTypesSourceCodeLoader.addImportsAndExports(
            '// Placeholder',
            this.BundlerTestAppInheritanceChild,
          );
        });

        it('includes the original source code', function () {
          expect(this.sourceCode).toMatch('// Placeholder');
        });

        it('imports inherited annotated methods', function () {
          expect(this.sourceCode).toMatch("import { epics as epics0 } from '@c3/ui/BundlerTestAppInheritanceParent'");
          expect(this.sourceCode).toMatch(
            "import { reducers as reducers0 } from '@c3/ui/BundlerTestAppInheritanceParent'",
          );
          expect(this.sourceCode).toMatch(
            "import { actionCreators as actionCreators0 } from '@c3/ui/BundlerTestAppInheritanceParent'",
          );
        });

        it('exports annotated methods from inheritance chain', function () {
          expect(this.sourceCode).toBeDefined();
          expect(this.sourceCode).toMatch(
            'export const epics = { ...epics0, CHILD_ACTION: childEpic, CHILD_ACTION_2: childEpic };',
          );
          expect(this.sourceCode).toMatch('export const reducers = { ...reducers0, CHILD_ACTION: childReducer };');
          expect(this.sourceCode).toMatch('export const actionCreators = { ...actionCreators0, childActionCreator };');
        });
      });
    });

    describe('for UiSdlComponent types', function () {
      beforeAll(function () {
        this.BundlerTestAppComponent = C3.pkg().typeMeta('BundlerTestAppComponent');
        this.sourceCode = UiSdlTsTypesSourceCodeLoader.addImportsAndExports(
          '// Placeholder',
          this.BundlerTestAppComponent,
        );
      });

      it('includes the original source code', function () {
        expect(this.sourceCode).toMatch('// Placeholder');
      });

      it('imports inherited methods', function () {
        expect(this.sourceCode).toMatch("import { epics as epics0 } from '@c3/ui/UiSdlComponent';");
        expect(this.sourceCode).toMatch("import { reducers as reducers0 } from '@c3/ui/UiSdlComponent';");
        expect(this.sourceCode).toMatch("import { actionCreators as actionCreators0 } from '@c3/ui/UiSdlComponent';");
      });

      it('exports annotated methods from inheritance chain', function () {
        expect(this.sourceCode).toMatch('export const epics = { ...epics0 };');
        expect(this.sourceCode).toMatch('export const reducers = { ...reducers0 };');
        expect(this.sourceCode).toMatch('export const actionCreators = { ...actionCreators0 };');
      });
    });

    describe('for UiSdlComponent itself', function () {
      beforeAll(function () {
        this.UiSdlComponent = C3.pkg().typeMeta('UiSdlComponent');
        this.sourceCode = UiSdlTsTypesSourceCodeLoader.addImportsAndExports('// Placeholder', this.UiSdlComponent);
      });

      it('includes the original source code', function () {
        expect(this.sourceCode).toMatch('// Placeholder');
      });

      it('does not import methods', function () {
        expect(this.sourceCode).not.toMatch('import { epics');
        expect(this.sourceCode).not.toMatch('import { reducers');
        expect(this.sourceCode).not.toMatch('import { actionCreators');
      });

      it('exports even without its own annotated methods', function () {
        expect(this.sourceCode).toMatch('export const epics = {  };');
        expect(this.sourceCode).toMatch('export const reducers = { REGISTER_TRIGGERS: triggersRegisterEffect };');
        expect(this.sourceCode).toMatch(
          'export const actionCreators = { renderInitialAction, registerTriggersAction };',
        );
      });
    });

    describe('for "React" renderer types', function () {
      beforeAll(function () {
        this.BundlerTestAppComponentReact = C3.pkg().typeMeta('BundlerTestAppComponentReact');
        this.sourceCode = UiSdlTsTypesSourceCodeLoader.addImportsAndExports(
          '// Placeholder',
          this.BundlerTestAppComponentReact,
        );
      });

      it('includes the original source code', function () {
        expect(this.sourceCode).toMatch('// Placeholder');
      });

      it('does not import methods', function () {
        expect(this.sourceCode).not.toMatch('import { epics');
        expect(this.sourceCode).not.toMatch('import { reducers');
        expect(this.sourceCode).not.toMatch('import { actionCreators');
      });

      it('does not export methods', function () {
        expect(this.sourceCode).not.toMatch('export const epics =');
        expect(this.sourceCode).not.toMatch('export const reducers =');
        expect(this.sourceCode).not.toMatch('export const actionCreators =');
      });
    });
  });

  describe('#addImportsAndExportsBatch', function () {
    beforeAll(function () {
      this.sourceCodes = UiSdlTsTypesSourceCodeLoader.addImportsAndExportsBatch([
        {
          fst: '// Placeholder1',
          snd: C3.type('BundlerTestAppInheritanceParent'),
        },
        {
          fst: '// Placeholder2',
          snd: C3.type('BundlerTestAppInheritanceParent'),
        },
        {
          fst: '// Placeholder2',
          snd: C3.type('BundlerTestAppInheritanceParentNotExist'),
        },
      ]);
    });

    it('returns 3 sourceCodes', function () {
      expect(this.sourceCodes.length).toEqual(3);
    });

    it('returns first sourceCodes with correct content', function () {
      expect(this.sourceCodes[0].content).toMatch('// Placeholder1');
    });

    it('returns second sourceCodes with correct content', function () {
      expect(this.sourceCodes[1].content).toMatch('// Placeholder2');
    });

    it('returns sourceCodes with correct ignore', function () {
      expect(this.sourceCodes[2].ignore).toBeTruthy();
    });
  });
});
