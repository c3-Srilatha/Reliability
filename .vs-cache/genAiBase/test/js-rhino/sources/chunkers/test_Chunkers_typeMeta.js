/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Chunkers_typeMeta';

describe(filename, function () {
  it('Fake type should return no chunks', function () {
    expect(
      Genai.SourceFile.Chunker.TypeMetaChunker.typeDocChunks('Genai.SourceFile.Chunker.TypeMetaChunker.Genai.FakeType')
    ).toEqual([]);
  });

  it('Private Type Should return correct Chunks', function () {
    var chunks = Genai.SourceFile.Chunker.TypeMetaChunker.typeDocChunks(
      'Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeA'
    );
    for (var i = 0; i < chunks.length; i++) {
      expect(chunks[i])
        .withContext(`chunk ${i}`)
        .toMatch(
          new RegExp(
            [
              'Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeA is an Type.\n\nFields belonging to Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeA type: privateField\n\nMethods belonging to Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeA type: privateFunction\n\nDocumentation: A private test type for {@link Genai.SourceFile.Chunker.TypeMetaChunker}',
              'privateField is a field on the type: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeA.\n\nprivateField is of type: string.\n\nDeclaration:privateField: string\n\nDocumentation: field on a private type',

              // In 8.6 or later, "private" is explicitly included in the chunk, while in 8.5 or earlier, it is not.
              'privateFunction is a (private )?function on the type: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeA\n\nReturn type: json\n\nDeclaration: privateFunction: (private )?function\\(\\): json js-server\n\nDocumentation: private function on private type',
            ][i]
          )
        );
    }
  });

  it('Should return correct Enum Type Chunks', function () {
    expect(
      Genai.SourceFile.Chunker.TypeMetaChunker.typeDocChunks('Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeB')
    ).toEqual([
      'Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeB is an Type.\n\nEnum Values belonging to Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeB Enum type: enumValue\n\nDocumentation: An enum test type for {@link Genai.SourceFile.Chunker.TypeMetaChunker}',
      'enumValue is a field on the Enum type: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeB.\nenumValue has the default value of: "EnumValue"\nDocumentation: field on enum type',
    ]);
  });

  it('Should return correct Abstract Type Chunks', function () {
    expect(
      Genai.SourceFile.Chunker.TypeMetaChunker.typeDocChunks('Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeC')
    ).toEqual([
      'Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeC is an Type.\n\nFields belonging to Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeC type: abstractField\n\nMethods belonging to Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeC type: abstractFunction\n\nDocumentation: An abstract test type for {@link Genai.SourceFile.Chunker.TypeMetaChunker}',
      'abstractField is a field on the type: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeC.\n\nabstractField is of type: string.\n\nDeclaration:abstractField: string\n\nDocumentation: field on an abstract type',
      'abstractFunction is a abstract member function on the type: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeC\n\nabstractFunction contains the following params:\n\t- param, an optional param of type: boolean\n\nDeclaration: abstractFunction: abstract member function(param: boolean)\n\nDocumentation: function on an abstract type',
    ]);
  });

  it('Should return correct Entity Type Chunks', function () {
    expect(
      Genai.SourceFile.Chunker.TypeMetaChunker.typeDocChunks('Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeD')
    ).toEqual([
      'Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeD is an Type.\n\nMixins: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeC\n\nFields belonging to Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeD type: abstractField, memberField\n\nMethods belonging to Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeD type: memberFunction\n\nInherited Fields belonging to Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeD type: abstractField\n\nInherited Methods belonging to Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeD type: abstractFunction\n\nDocumentation: An entity test type for {@link Genai.SourceFile.Chunker.TypeMetaChunker}',
      'abstractField is a function on the type: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeD\n\nDeclaration: abstractField: ~\n\nDocumentation: inherited field on entity type',
      'memberField is a field on the type: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeD.\n\nmemberField is of type: string.\n\nDeclaration:memberField: string\n\nDocumentation: member field on entity type',
      'memberFunction is a function on the type: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeD\n\nmemberFunction contains the following params:\n\t- paramA, an optional param of type: string\n\t- paramB, an required param of type: int\n\tspec, a spec param of type: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeE. Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeE contains the following fields\n\t\t- specFieldA, of type: string\n\t\t- specFieldB, of type: int\n\nReturn type: boolean\n\nDeclaration: memberFunction: function(paramA: string, paramB: !int, spec: Genai.SourceFile.Chunker.TypeMetaChunker.TestTypeE): boolean js-server\n\nDocumentation: member function on entity type',
    ]);
  });
});
