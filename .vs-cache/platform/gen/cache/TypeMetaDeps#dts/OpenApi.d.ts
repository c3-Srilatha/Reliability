// TypeScript definitions for the C3 type OpenApi

/**
 * This type has util functions for OpenAPI (Swagger) as well as providing an endpoint for serving OpenAPI specs
 * for accessing C3 types through REST. For example, the spec for this type can be accessed at
 * [/openapi/v3/type/OpenApi.yaml](server:/openapi/v3/type/OpenApi.yaml).
 *
 * @see https://spec.openapis.org/oas/latest.html
 * @see OpenApiGenerator
 *
 * @remarks this represents a value passed to a method that expects an instance of OpenApi
 */
declare interface IOpenApi {
}

/**
 * This type has util functions for OpenAPI (Swagger) as well as providing an endpoint for serving OpenAPI specs
 * for accessing C3 types through REST. For example, the spec for this type can be accessed at
 * [/openapi/v3/type/OpenApi.yaml](server:/openapi/v3/type/OpenApi.yaml).
 *
 * @see https://spec.openapis.org/oas/latest.html
 * @see OpenApiGenerator
 *
 * @remarks this represents a made instance of OpenApi
 */
declare class OpenApi {

  /**
   * Get PrimitiveType of corresponding Open API Primitive Type
   * @param openApiPrimitiveType
   *        Open API primitive type. eg. string, boolean, number, integer
   */
  static primitiveType(openApiPrimitiveType: string): PrimitiveType;

  /**
   * Get ReferenceType of corresponding Open API Reference Type
   * @param openApiReferenceType
   *        Open API reference type. Can be ref or object.
   * @param openApiReferenceTypeName
   *        the name of Open API reference type used to generate C3 reference type.
   *        eg. in Open API spec "$ref": "#/definitions/IotHubDescription", IotHubDescription will be the name of Open API reference type
   */
  static referenceType(openApiReferenceType: string, openApiReferenceTypeName: string): ReferenceType;

  /**
   * generate types for open api spec file in json format.
   * @param openApiSpec
   *        open api spec file in json format
   * @param typeName
   *        generated type name
   * @param outputPath
   *        the path where to generate types
   */
  static generateType(openApiSpec: any, typeName: string, outputPath: string): void;

  /**
   * Provide the `/openapi/v3/type/` end point. The type name should be specified as the last element of the path,
   * for example: `/openapi/v3/type/TypeMeta`.
   *
   * If the ".yaml" file extension is used, the result will be in YAML, otherwise the result will be JSON. A ".json"
   * file extension may also be used, but no other file extensions are allowed.
   */
  static serveType(typeName: string, version: string): ContentValue | null;
}

