/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

import { createContext, spyOn, teardown } from 'test-api';
import find from 'lodash/find';
import { getUiMetadata } from '@c3/ui/UiMetadata';
import { asGroup } from 'test-runner';
import { fromJavaScript } from 'lambda';
import {
  saveChangesToUiMetadata,
  removeUiMetadata,
  getUiSdlComponents,
  getUiSdlComponentsWithPages,
  getPagesByComponent,
  searchTypesThatMixin,
} from '@c3/ui/UiSdlMetadataUtil';
import { tag } from 'metadata-store';
import { objectContaining } from 'jasmine';
import reduce from 'lodash/reduce';
import { array, make } from 'type-ref';

const filename = 'test_UiSdlMetadataUtil';
describe(filename, function () {
  beforeAll(function () {
    this.ctx = createContext(filename);
    this.testGroup = 'C3.Group.Developer';
    this.getTestAppMetadata = function () {
      return find(getUiMetadata(), function (config) {
        return config.application.name === 'MetadataUtilTesting';
      });
    };
  });

  describe('::saveChangesToUiMetadata', function () {
    beforeAll(function () {
      this.dataSources = [
        {
          redux: true,
          c3type: 'UiSdlMetadataUtil',
          c3function: 'getUiSdlComponents',
          moduleName: 'MetadataUtilTesting',
          id: 'MetadataUtilTesting.components',
          name: 'components',
        },
      ];
      this.pages = [
        {
          title: 'page1',
          component: 'UIReactPage',
          moduleName: 'MetadataUtilTesting',
          name: 'page1',
          id: 'MetadataUtilTesting.page1',
        },
      ];
      this.components = [
        {
          name: 'grid',
          component: 'UIViewSDLGrid',
          moduleName: 'MetadataUtilTesting',
          id: 'MetadataUtilTesting.grid',
        },
        {
          name: 'filterPanel',
          component: 'UIViewSDLFilterPanel',
          moduleName: 'MetadataUtilTesting',
          id: 'MetadataUtilTesting.filterPanel',
        },
      ];
      this.uiMetadata = {
        components: this.components,
        dataSources: this.dataSources,
        pages: this.pages,
      };
      asGroup(
        this.testGroup,
        fromJavaScript(function (uiMetadata) {
          saveChangesToUiMetadata(uiMetadata);
        }).partiallyCall([this.uiMetadata]),
      );
      this.metadata = this.getTestAppMetadata();
    });

    afterAll(function () {
      // Remove ui metadata
      tag().updateMetadata(null, [
        'meta://server/uiStandardDesignLanguage/ui/MetadataUtilTesting/dataSources/components.json',
        'meta://server/uiStandardDesignLanguage/ui/MetadataUtilTesting/pages/page1.json',
        'meta://server/uiStandardDesignLanguage/ui/MetadataUtilTesting/components/grid.json',
        'meta://server/uiStandardDesignLanguage/ui/MetadataUtilTesting/components/filterPanel.json',
      ]);
    });

    it('should save components metadata (grid)', function () {
      expect(this.metadata.components).toContain(objectContaining(this.components[0]));
    });

    it('should save components metadata (filterPanel)', function () {
      expect(this.metadata.components).toContain(objectContaining(this.components[1]));
    });

    it('should save pages metadata', function () {
      expect(this.metadata.pages).toEqual(this.pages);
    });

    it('should save dataSources', function () {
      expect(this.metadata.dataSources).toEqual(this.dataSources);
    });
  });

  describe('::removeUiMetadata', function () {
    beforeAll(function () {
      this.components = [
        {
          name: 'grid',
          component: 'UiSdlDataGrid',
          moduleName: 'MetadataUtilTesting',
          id: 'MetadataUtilTesting.grid',
        },
      ];
      saveChangesToUiMetadata({
        components: this.components,
        dataSources: [],
        pages: [],
      });
      this.initialMetadata = this.getTestAppMetadata();
      this.metadataToRemove = {
        components: this.components,
        dataSources: [],
        pages: [],
      };
    });

    afterAll(function () {
      tag().updateMetadata(null, [
        'meta://server/uiStandardDesignLanguage/ui/MetadataUtilTesting/components/grid.json',
      ]);
    });

    it('sets up files correctly', function () {
      expect(this.initialMetadata.components).toContain(objectContaining(this.components[0]));
    });

    describe('removes the given metadata', function () {
      beforeAll(function () {
        asGroup(
          this.testGroup,
          fromJavaScript(function (metadataToRemove) {
            removeUiMetadata(metadataToRemove);
          }).partiallyCall([this.metadataToRemove]),
        );
        this.updatedMetadata = this.getTestAppMetadata();
      });

      it('removes the given metadata', function () {
        expect(this.updatedMetadata).toBeUndefined();
      });
    });
  });

  describe('Component functions', function () {
    beforeAll(function () {
      this.uiMetadata = [
        {
          application: {
            id: 'TestApplication1',
          },
          pages: [
            {
              id: 'TestPage1',
              title: 'Test Page 1',
              component: 'UiLayoutFlexSidePanel',
              children: [{ component: 'TestApplication1.app1Grid' }],
            },
          ],
          components: [
            {
              id: 'TestApplication1.app1Grid',
              component: 'UiSdlDataGrid',
            },
            {
              id: 'TestApplication1.app1FilterPanel',
              component: 'UiSdlFilterPanel',
            },
          ],
        },
        {
          application: {
            id: 'TestApplication2',
          },
          pages: [
            {
              id: 'TestPage2a',
              title: 'Test Page 2a',
              component: 'UiSdlLayoutNavigation',
              content: { component: 'TestApplication2.content' },
            },
            {
              id: 'TestPage2b',
              title: 'Test Page 2b',
              component: 'UiLayoutFlexSidePanel',
              children: { component: 'TestApplication2.app2Grid' },
            },
          ],
          components: [
            {
              id: 'TestApplication2.content',
              component: 'UiLayoutFlexSidePanel',
              leftSidePanel: {
                component: 'TestApplication2.app2FilterPanel',
              },
              children: [
                {
                  component: 'TestApplication2.app2Grid',
                },
              ],
            },
            {
              id: 'TestApplication2.app2Grid',
              component: 'UiSdlDataGrid',
            },
            {
              id: 'TestApplication2.app2FilterPanel',
              component: 'UiSdlFilterPanel',
            },
            {
              id: 'TestApplication2.app2MetricTile',
              component: 'UiSdlMetricTile',
            },
          ],
        },
      ];
      this.allComponents = reduce(
        this.uiMetadata,
        function (result, app) {
          return result.concat(app.components);
        },
        [],
      );
      spyOn(this.ctx, 'UIMetadata', 'getUIMetadata').returnValue(this.uiMetadata).register();
      this.getUiSdlComponents = function (spec, applicationBlacklist) {
        return asGroup(
          this.testGroup,
          fromJavaScript(function (spec, applicationBlacklist) {
            return getUiSdlComponents(spec, applicationBlacklist);
          }).partiallyCall(spec, applicationBlacklist),
        );
      };
      this.getUiSdlComponentsWithPages = function (spec, applicationBlacklist) {
        return asGroup(
          this.testGroup,
          fromJavaScript(function (spec, applicationBlacklist) {
            return getUiSdlComponentsWithPages(spec, applicationBlacklist);
          }).partiallyCall(spec, applicationBlacklist),
        );
      };
      this.getPagesByComponent = function (component, pages, components) {
        return asGroup(
          this.testGroup,
          fromJavaScript(function (component, pages, components) {
            return getPagesByComponent(component, pages, components);
          }).partiallyCall(component, pages, components),
        );
      };
    });

    describe('::getUiSdlComponents', function () {
      describe('when not specifying an application blacklist', function () {
        it('should return all components of all applications', function () {
          const data = this.getUiSdlComponents(null, null);
          expect(data).toEqual({ objs: this.allComponents });
        });
      });

      describe('when specifying an empty application blacklist', function () {
        it('should return all components of all applications', function () {
          const data = this.getUiSdlComponents({}, []);
          expect(data).toEqual({ objs: this.allComponents });
        });
      });

      describe('when specifying a populated application blacklist', function () {
        it('should return only components from applications that are not in the blacklist', function () {
          const applicationBlacklist = [this.uiMetadata[0].application.id];
          const data = this.getUiSdlComponents({}, applicationBlacklist);
          expect(data).toEqual({ objs: this.uiMetadata[1].components });
        });
      });
    });

    describe('::getPagesByComponent', function () {
      beforeAll(function () {
        const componentsMapping = {};
        this.allComponents.forEach(function (component) {
          componentsMapping[component.id] = component;
        });
        this.componentsMapping = componentsMapping;
      });

      describe('when component does not appear on any pages', function () {
        it('an empty array is returned', function () {
          const app = this.uiMetadata[1];
          const pages = app.pages;
          const component = app.components[3];
          const result = this.getPagesByComponent(component, pages, this.componentsMapping);
          expect(result.isEmpty()).toBeTruthy();
        });
      });

      describe('when component appears on one page', function () {
        it('an array with a single page name is returned', function () {
          const app = this.uiMetadata[1];
          const pages = app.pages;
          const component = app.components[2];
          const result = this.getPagesByComponent(component, pages, this.componentsMapping);
          expect(result).toEqual(['Test Page 2a']);
        });
      });

      describe('when component appears on two pages', function () {
        it('an array with two page names is returned', function () {
          const app = this.uiMetadata[1];
          const pages = app.pages;
          const component = app.components[1];
          const result = this.getPagesByComponent(component, pages, this.componentsMapping);
          expect(result).toEqual(['Test Page 2a', 'Test Page 2b']);
        });
      });
    });
  });

  describe('::searchTypesThatMixin', function () {
    beforeAll(function () {
      spyOn(this.ctx, 'MetadataUtil', 'getTypesThatMixin')
        .returnValue(array([make('Asset'), make('ServicePoint'), make('FixedAsset')]))
        .register();
      this.searchTypesThatMixin = function (mixinType, searchString) {
        return asGroup(
          this.testGroup,
          fromJavaScript(function (mixinType, searchString) {
            return searchTypesThatMixin(mixinType, searchString);
          }).partiallyCall(mixinType, searchString),
        );
      };
    });

    it('should return all the mixined types in alphabetical order if searchString is empty', function () {
      const types = this.searchTypesThatMixin('Persistable', null);
      expect(types.length).toEqual(3);
      expect(types[0].typeName).toEqual('Asset');
      expect(types[1].typeName).toEqual('FixedAsset');
      expect(types[2].typeName).toEqual('ServicePoint');
    });

    it('should only return the mixined types and the search string is included in its type name', function () {
      const types = this.searchTypesThatMixin('Persistable', 'asSeT');
      expect(types.length).toEqual(2);
      expect(types[0].typeName).toEqual('Asset');
      expect(types[1].typeName).toEqual('FixedAsset');
    });

    it('should return an empty array when the search string is not included in any type names', function () {
      const types = searchTypesThatMixin('Persistable', 'NothingFound');
      expect(types.length).toEqual(0);
    });
  });

  afterAll(function () {
    teardown(this.ctx);
  });
});
