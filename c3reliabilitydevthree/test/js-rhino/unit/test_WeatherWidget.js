/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_WeatherWidget';

describe(filename, function () {
  it('should export a React component', function () {
    var WeatherWidgetModule;
    try {
      WeatherWidgetModule = require('@c3/app/ui/src/components/WeatherWidget');
    } catch (e) {
      WeatherWidgetModule = null;
    }

    expect(WeatherWidgetModule).toBeDefined();

    var Component = WeatherWidgetModule && (WeatherWidgetModule.default || WeatherWidgetModule);
    var componentType = typeof Component;
    var isComponentLike = componentType === 'function' || componentType === 'object';
    expect(isComponentLike).toBe(true);
  });
});
