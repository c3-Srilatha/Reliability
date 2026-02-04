/*
 * Copyright 2009-2023 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_UiDesignableValidator_AllDesignableComponents';

describe(filename, function () {
  // TODO: remove xit block and uncomment the rest when JsWebpackBrowser is implemented/functional
  xit(filename, function () {});
  // Var componentTypeNames = UiTagMetadataStore.typesWithAnnotation('uiSdlDesignerComponent', 'designable', true).at('typeName');
  // var skipList = [
  //   /*
  //    * Container doesn't have a data spec, but UI Designer currently requires all components to have data specs.
  //    * The UiSdlContainer designable test is expected to fail until this is addressed in UI Designer.
  //    */
  //   'UiSdlContainer',
  // ];
  // componentTypeNames.forEach(function (componentTypeName) {
  //   if (skipList.indexOf(componentTypeName) > -1)
  //     return;
  //   TestApi.validateUiComponentDesignability(componentTypeName, componentTypeName, [{ id: 'en' }]);
  // });
});
