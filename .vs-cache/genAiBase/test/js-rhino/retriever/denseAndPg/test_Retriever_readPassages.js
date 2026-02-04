/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Retriever_readPassages';
const passagesFilePath = 'gcs://c3--datasets/genai/filesForJarvis/200kpassages.json';
const lambdaString =
  'def read_passages_file_lambda():\n\timport resource\n\tremote_file = c3.GcsFileSystem.makeFile("' +
  passagesFilePath +
  '")\n\tpassages = c3.Genai.Retriever.readPassagesFile(remote_file)\n\treturn {"peak_mem": (resource.getrusage(resource.RUSAGE_SELF).ru_maxrss / 1e3), "num_passages": len(passages)}';

/*
 *A more readable version of the lambdaString (multi-line string -> fromPySrc seems to cause issues)
 *
 *def read_passages_file_lambda():
 *    import resource
 *    def get_peak_usage():
 *        return resource.getrusage(resource.RUSAGE_SELF).ru_maxrss / 1e3
 *    remote_file = c3.GcsFileSystem.makeFile("' + passagesFilePath + '")
 *    passages = c3.Genai.Retriever.readPassagesFile(remote_file)
 *    return {"peak_mem": get_peak_usage(), "num_passages": len(passages)}
 */

describe(filename, function () {
  beforeAll(function () {
    var f = GcsFileSystem.makeFile(passagesFilePath);
    expect(f.exists()).withContext('Test passages file should exist').toBe(true);
    expect(f.readMetadata().contentLength)
      .withContext('Test passages file should have expected size')
      .toEqual(616426930);
  });

  it('readPassages should not take an exorbitant amount of memory', function () {
    var lambda = Lambda.fromPySrc(lambdaString, 'py-py4j');
    var result = lambda.apply();
    expect(result.peak_mem)
      .withContext('memory load should indicate that passages were retrieved')
      .toBeGreaterThan(1500);
    expect(result.peak_mem).withContext('memory load should not be exorbitant').toBeLessThan(5250);
    expect(result.num_passages).withContext('number of passages should be as expected').toEqual(196840);
  });
});
