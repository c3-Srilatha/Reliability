// TypeScript definitions for the C3 type LocationFunctionLibrary

/**
 * A library of location-based functions that mix in functionalities from {@link MetricFunctionLibrary} and {@link Value}.
 *
 * This library includes functions for calculating geographic distances and determining the central point
 * of a set of latitude/longitude coordinates.
 *
 * @remarks this represents a value passed to a method that expects an instance of LocationFunctionLibrary
 */
declare interface ILocationFunctionLibrary {
}

/**
 * A library of location-based functions that mix in functionalities from {@link MetricFunctionLibrary} and {@link Value}.
 *
 * This library includes functions for calculating geographic distances and determining the central point
 * of a set of latitude/longitude coordinates.
 *
 * @remarks this represents a made instance of LocationFunctionLibrary
 */
declare class LocationFunctionLibrary {

  /**
   * Calculates the Haversine distance between two geographic points.
   * The Haversine formula is used to calculate the shortest distance over the Earth's surface.
   *
   * @param xLat
   *           Latitude of the first point (in decimal degrees).
   * @param xLon
   *           Longitude of the first point (in decimal degrees).
   * @param yLat
   *           Latitude of the second point (in decimal degrees).
   * @param yLon
   *           Longitude of the second point (in decimal degrees).
   *
   * @return the exact Haversine distance between the points (typically in kilometers or miles).
   */
  static singleHaversineDistance(xLat?: number, xLon?: number, yLat?: number, yLon?: number): ExactDimension | null;

  /**
   * Calculates the geographic center (midpoint) of a set of latitude/longitude coordinates.
   * The center is calculated as the average of the provided latitudes and longitudes.
   *
   * @param latLongs
   *           An array of latitude/longitude coordinates.
   *
   * @return the latitude and longitude of the center point.
   */
  static latLongCenter(latLongs?: Array_Type<LatLong>): LatLong | null;
}

