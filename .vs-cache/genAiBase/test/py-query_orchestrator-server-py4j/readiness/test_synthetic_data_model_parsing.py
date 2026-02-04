# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable = line-too-long, anomalous-backslash-in-string

import pytest


SyntheticDataModelParser = c3.Genai.PyUtil.importResourceFile(
    "/genAiBase/resource/code/c3genai/synthetic_data_generation/automatic_data_model_generation/synthetic_data_model_parser.py",
    ["SyntheticDataModelParser"],
)


@pytest.fixture(scope="module")
def synthetic_data_model_parser():
    yield SyntheticDataModelParser(data_model_name="testDataModel")


def test_parse_data_model_into_individual_type_meta():
    test_synthetic_data_model = """
Assistant: Sometimes the LLM will produce some random text that we do not want to parse.
```c3typ
/**
 * We need to be able to parse Type comments.
 */
entity type Flight {

    /**
     * We also need to be able to parse the field comments.
     */
    airline: string
}

Some random string should not break the parsing.

/**
* We want to parse the comments even if incorrectly formatted.
*/
entity type FlightPrice mixes TimedDataHeader<FlightPriceMeasurement> {
    flight: Flight
}

entity type FlightPriceMeasurement mixes TimedDataPoint<FlightPrice> {
    timestamp: datetime
    price: float
}

type SomeOtherNonEntityType {
    withSomeField: string
}

type SomeNonEntityEmptyType

type SomeOtherNonEntityTypeWithNoNewLineFields { withSomeFieldNotInNewLine: string}

entity type SomeEmptyEntityType mixes TimedDataPoint<TimeDataHeader>
```"""

    target = [
        {
            "declaredPkgPath": "/genAiBase/src/Flight.c3typ",
            "declaredSrcLine": 4,
            "declaredSrcCharInLine": 1,
            "name": "Flight",
            "doc": "We need to be able to parse Type comments.",
            "comments": [
                {
                    "declaredSrcLine": 1,
                    "declaredSrcCharInLine": 1,
                    "source": "/**\n * We need to be able to parse Type comments.\n */",
                }
            ],
            "declaredEntity": True,
            "declaredFieldTypes": [
                {
                    "declaredSrcLine": 9,
                    "declaredSrcCharInLine": 5,
                    "doc": "We also need to be able to parse the field comments.",
                    "name": "airline",
                    "valueType": {"name": "string"},
                    "comments": [
                        {
                            "declaredSrcLine": 6,
                            "declaredSrcCharInLine": 5,
                            "source": "/**\n     * We also need to be able to parse the field comments.\n     */",
                        }
                    ],
                }
            ],
        },
        {
            "declaredPkgPath": "/genAiBase/src/FlightPrice.c3typ",
            "declaredSrcLine": 4,
            "declaredSrcCharInLine": 1,
            "name": "FlightPrice",
            "doc": "We want to parse the comments even if incorrectly formatted.",
            "comments": [
                {
                    "declaredSrcLine": 1,
                    "declaredSrcCharInLine": 1,
                    "source": "/**\n* We want to parse the comments even if incorrectly formatted.\n*/",
                }
            ],
            "declaredEntity": True,
            "declaredMixinRefTypes": [
                {"name": "TimedDataHeader", "refVarBindings": [{"name": "FlightPriceMeasurement"}]}
            ],
            "declaredFieldTypes": [
                {"declaredSrcLine": 5, "declaredSrcCharInLine": 5, "name": "flight", "valueType": {"name": "Flight"}}
            ],
        },
        {
            "declaredPkgPath": "/genAiBase/src/FlightPriceMeasurement.c3typ",
            "declaredSrcLine": 1,
            "declaredSrcCharInLine": 1,
            "name": "FlightPriceMeasurement",
            "declaredEntity": True,
            "declaredMixinRefTypes": [{"name": "TimedDataPoint", "refVarBindings": [{"name": "FlightPrice"}]}],
            "declaredFieldTypes": [
                {
                    "declaredSrcLine": 2,
                    "declaredSrcCharInLine": 5,
                    "name": "timestamp",
                    "valueType": {"name": "datetime"},
                },
                {"declaredSrcLine": 3, "declaredSrcCharInLine": 5, "name": "price", "valueType": {"name": "float"}},
            ],
        },
        {
            "declaredPkgPath": "/genAiBase/src/SomeOtherNonEntityType.c3typ",
            "declaredSrcLine": 1,
            "declaredSrcCharInLine": 1,
            "name": "SomeOtherNonEntityType",
            "declaredFieldTypes": [
                {
                    "declaredSrcLine": 2,
                    "declaredSrcCharInLine": 5,
                    "name": "withSomeField",
                    "valueType": {"name": "string"},
                }
            ],
        },
        {
            "declaredPkgPath": "/genAiBase/src/SomeNonEntityEmptyType.c3typ",
            "declaredSrcLine": 1,
            "declaredSrcCharInLine": 1,
            "name": "SomeNonEntityEmptyType",
        },
        {
            "declaredPkgPath": "/genAiBase/src/SomeOtherNonEntityTypeWithNoNewLineFields.c3typ",
            "declaredSrcLine": 1,
            "declaredSrcCharInLine": 1,
            "name": "SomeOtherNonEntityTypeWithNoNewLineFields",
            "declaredFieldTypes": [
                {
                    "declaredSrcLine": 1,
                    "declaredSrcCharInLine": 50,
                    "name": "withSomeFieldNotInNewLine",
                    "valueType": {"name": "string"},
                }
            ],
        },
        {
            "declaredPkgPath": "/genAiBase/src/SomeEmptyEntityType.c3typ",
            "declaredSrcLine": 1,
            "declaredSrcCharInLine": 1,
            "name": "SomeEmptyEntityType",
            "declaredEntity": True,
            "declaredMixinRefTypes": [{"name": "TimedDataPoint", "refVarBindings": [{"name": "TimeDataHeader"}]}],
        },
    ]

    output = SyntheticDataModelParser.parse_data_model_into_individual_type_meta(test_synthetic_data_model)
    output_as_json = [type_meta.toJson() for type_meta in output]
    assert target == output_as_json, f"Expected {target=} to be {output_as_json}."


def test_clean_up_conflicting_names(synthetic_data_model_parser):
    test_synthetic_data_model = """

entity type Server mixes User {
    user: User
    users: [User](server)
    any: Any
}

entity type NewType

entity type SomeOtherUser mixes NewType

entity type User mixes TimedDataHeader<Server>{
    server: Server
}
"""

    target = """entity type ServerTestDataModel mixes UserTestDataModel {

  user:  UserTestDataModel
  users: [UserTestDataModel](server)
  any:   Any
}

entity type NewType

entity type SomeOtherUser mixes NewType

entity type UserTestDataModel mixes TimedDataHeader<ServerTestDataModel> {

  server: ServerTestDataModel
}
"""
    output = synthetic_data_model_parser.clean_up_conflicting_type_names(test_synthetic_data_model)
    assert output == target, f"Expected {output=} to be {target=}."


def test_clean_blacklisted_fields():
    test_data_model = """entity type Rabbit mixes TimedDataHeader<SomeTimedDataPoint> {
    name: string
    version: string
    someField: [Fox](version)
}

entity type Fox {
    someField: [Rabbit](version)
    version: string
}

entity type Ant
"""

    target = """entity type Rabbit mixes TimedDataHeader<SomeTimedDataPoint> {

  nameRabbit:    string
  versionRabbit: string
  someField:     [Fox](versionFox)
}

entity type Fox {

  someField:  [Rabbit](versionRabbit)
  versionFox: string
}

entity type Ant
"""
    output = SyntheticDataModelParser.clean_blacklisted_fields(test_data_model)
    assert output == target, f"Expected {output=} to be {target=}."


def tes_add_foreign_keys():
    test_data_model = """
entity type Fox {
    toOverride: int
    some: string
}

entity type Rabbit {
  someFieldtoAddForeignKey:  [Fox](missingReference)
  someFieldToOverride:  [Fox](toOverride)
}

entity type Cat {
    foxes: [Fox]
}
"""

    target = """entity type Fox {

  some:             string
  missingReference: Rabbit
  toOverride:       Rabbit
  cat:              Cat
}

entity type Rabbit {

  someFieldtoAddForeignKey: [Fox](missingReference)
  someFieldToOverride:      [Fox](toOverride)
}

entity type Cat {

  foxes: [Fox](cat)
}
"""
    output = SyntheticDataModelParser.add_foreign_keys(test_data_model)
    assert output == target, f"Expected {output=} to be {target=}."


def test_add_schema_name():
    parser = SyntheticDataModelParser(data_model_name="dataModelName")
    test_data_model = """
entity type One {
    someFirstField: double
}

entity type Two mixes TimedDataHeader<Three>
"""
    output = parser.add_schema_name(test_data_model)
    target = """entity type One schema name 'ONEDATAMODELNAME' {

  someFirstField: double
}

entity type Two mixes TimedDataHeader<Three> schema name 'TWODATAMODELNAME'
"""
    assert target == output, f"Expected {output=} to be {target=}"


@pytest.mark.skip(reason="PLAT-89095 -- upserting types not supported in Jarvis")
def test_generate_whitelist():
    test_data_model = """

type Cat {
    zeroField: string
    timestamp: datetime
}

entity type Dog {
    someFirstField: double
    referencedNoneEntity: Cat
}

entity type Mouse mixes Cat, TimedDataHeader<Elephant> {
    someField: string
}

entity type Elephant mixes TimedDataPoint<Mouse> {
    notATimestamp: string

    @ts(treatment='previous')
    value: double
}
"""
    data_model_parser = SyntheticDataModelParser(data_model_name="dataModelName")
    output = data_model_parser.generate_whitelist_from_data_model(test_data_model)
    target = {
        "Cat": {"fields": ["timestamp", "zeroField"]},
        "Dog": {"fields": ["id", "referencedNoneEntity", "someFirstField"]},
        "Mouse": {"fields": ["data", "someField", "timestamp", "zeroField"]},
        "Elephant": {"fields": ["notATimestamp", "parent", "start", "value"]},
    }
    assert target == output, f"Expected {output=} to be {target=}."
