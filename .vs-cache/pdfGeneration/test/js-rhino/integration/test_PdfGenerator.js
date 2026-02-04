/*
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_PdfGenerator';

describe(filename, function () {
  describe('generatePdf', function () {
    beforeAll(function () {
      this.pdfPath = filename + '_test.pdf';
      this.result = PdfGenerator.generatePdf(
        PdfGenerationSpec.make(
          {
            url: this.pdfPath,
            pdfCreator: ApplicationPdfCreator,
            pdfComponents: [PdfTitle.make({ title: 'TJ-REL!', titleType: PdfTitleType.forId('h4') })],
          },
          true
        )
      );
    });

    it('returns a file path to the generated file', function () {
      expect(this.result.url).toContain(this.pdfPath);
    });

    it('persists a file at the given file path', function () {
      expect(this.result.exists()).toEqual(true);
    });

    afterAll(function () {
      this.result.delete();
    });
  });
});
