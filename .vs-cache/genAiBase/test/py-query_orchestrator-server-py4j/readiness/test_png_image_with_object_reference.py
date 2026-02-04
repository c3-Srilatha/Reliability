# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# Import the ObjectReference system
from c3agents.plan_and_execute.components.object_reference import ObjectReferenceConstants
from PIL.PngImagePlugin import PngImageFile

create_png_image_file = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/test/py-query_orchestrator-server-py4j/readiness/utils.py",
    ["create_png_image_file"],
)


def test_png_image_with_object_reference():
    """
    Test how PngImageFile works with ObjectReference system
    """
    # Create the PngImageFile
    png_image_file = create_png_image_file()

    # Verify it's the correct type
    assert isinstance(png_image_file, PngImageFile), f"Expected PngImageFile, got {type(png_image_file)}"
    assert png_image_file.size == (100, 100), f"Expected size (100, 100), got {png_image_file.size}"
    assert png_image_file.mode == "RGB", f"Expected mode RGB, got {png_image_file.mode}"

    # Create object reference - this should now work with PngImageFile
    obj_ref = ObjectReferenceConstants.create_object_reference(id="test_png_image", obj=png_image_file)

    # Assert object reference properties
    assert obj_ref is not None, "Object reference should not be None"
    assert obj_ref.id == "test_png_image", f"Expected id 'test_png_image', got '{obj_ref.id}'"
    assert isinstance(obj_ref.object, PngImageFile), f"Expected PngImageFile object, got {type(obj_ref.object)}"
    assert obj_ref.type == "PIL.Image.Image", f"Expected type 'PIL.Image.Image', got '{obj_ref.type}'"
    assert obj_ref.modality == "image", f"Expected modality 'image', got '{obj_ref.modality}'"

    # Convert to image URL format
    image_url_dict = obj_ref.to_image_url()
    assert isinstance(image_url_dict, dict), f"Expected dict, got {type(image_url_dict)}"
    assert "type" in image_url_dict, "Image URL dict should contain 'type' key"
    assert "image_url" in image_url_dict, "Image URL dict should contain 'image_url' key"
    assert image_url_dict["type"] == "image_url", f"Expected type 'image_url', got '{image_url_dict['type']}'"
    assert "url" in image_url_dict["image_url"], "Image URL should contain 'url' key"
    assert image_url_dict["image_url"]["url"].startswith("data:image/png;base64,"), "URL should be base64 encoded PNG"
