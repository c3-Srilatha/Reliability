# Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

import pytest


def test_refresh_calc_fields_spec():
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.RefreshCalcFields.make().withDefaults()
    workflow = spec.createWorkflow()
    vertices = workflow.get().vertices
    assert workflow.name == "ReliabilityRisk_RefreshCalcFields"
    assert len(vertices) == 12
    assert all([v.type().name() == "Workflow.Batch" for v in vertices])
    assert all([v.job.type().name() == "RefreshCalcFieldsBatchJob" for v in vertices])


@pytest.mark.xfail
def test_refresh_calc_fields_spec_wrong():
    spec = c3.ReliabilityOrchestrator.ReliabilityRisk.Spec.RefreshCalcFields.make({"specs": []})
    _ = spec.createWorkflow()
