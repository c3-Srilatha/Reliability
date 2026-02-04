/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Location';

describe(filename, function () {
  /*
   * V8 Migration Notice: This constant was globally defined. Please define a constant in the type definition if applicable.
   */
  var filename = 'test_Location';
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  beforeEach(function () {
    this.testLoc = TestApi.createEntity(this.ctx, 'Location', {
      address: {
        raw: '1450 Astor Ave, Ann Arbor, MI',
        formatted: '1450AstorAveAnnArborMI',
        components: [
          {
            name: '1450AstorAve',
            abbr: 'AST',
            types: [{ id: 'street_address' }],
          },
          { name: '48105', abbr: '4', types: [{ id: 'postal_code' }] },
          { name: 'Ann Arbor', abbr: 'AA', types: [{ id: 'city' }] },
          {
            name: 'Michigan',
            abbr: 'MI',
            types: [{ id: 'administrative_area_level_1' }],
          },
        ],
        geometry: { latitude: 81.1, longitude: -21.4 },
      },
    });
  });

  it('should match fetched updateAll job', function () {
    /**
     * Check if a proper job has been created and started.
     */
    var job = Location.updateGeocodingAll(null, false, false);

    var jobId = job.id;

    expect(LocationGeocodingJob.make(jobId).get().filter).toEqual(
      'exists(address.raw)&& !exists(address.geometry.latitude)'
    );

    TestApi.waitForSetup(this.ctx, null, 1, 300);
  });

  it('should update geometry for addy with raw data', function () {
    /**
     * Check if the function can properly update geometries.
     */
    Location.updateGeocoding(this.testLoc, true);

    expect(Location.make(this.testLoc).get().address.geometry.latitude).toBeCloseTo(42.2577533);

    TestApi.waitForSetup(this.ctx, null, 1, 300);
  });

  it('should be able to update batch locations', function () {
    var testLocs = [Location.make(this.testLoc).get()];

    Location.updateGeocodingBatch(testLocs, true);

    expect(Location.make(this.testLoc).get().address.geometry.latitude).toBeCloseTo(42.2577533);

    TestApi.waitForSetup(this.ctx, null, 1, 300);
  });

  it('should be able to extract an address component', function () {
    /**
     * Check if the function can extract a component.
     */
    Location.updateGeocoding(this.testLoc, true);

    var result = Location.findAddressComponent(Location.make(this.testLoc).get(), 'street_address', null);

    expect(result).toEqual('1450 Astor Ave');

    TestApi.waitForSetup(this.ctx, null, 1, 300);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });
});
