# Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
# Confidential and Proprietary C3 Materials.
# This material, including without limitation any software, is the confidential trade secret and proprietary
# information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
# strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
# This material may be covered by one or more patents or pending patent applications.

# pylint: disable=line-too-long,too-many-arguments,redefined-outer-name
import pytest

FILE_NAME = "test_few_shot_retriever.py"

logger = c3.log()


# pylint: disable=redefined-outer-name, unused-argument, too-many-arguments
@pytest.fixture(scope="module", autouse=False)
def few_shot_example(ctx):
    spec = c3.Genai.StructuredQuery.Spec.make(
        {
            "sourceType": "Genai.Aircraft",
            "spec": c3.Genai.StructuredQuery.Spec.make(
                {
                    "spec": c3.EvalSpec.make(
                        {
                            "filter": "('San Francisco' == location.city)",
                            "projection": "count()",
                        }
                    ),
                    "sourceType": "Genai.Aircraft",
                }
            ),
        }
    )

    example = c3.TestApi.upsertEntity(
        ctx,
        "Genai.FewShotExample.StructuredQuery.EvalQuery",
        {"id": "test_example_id", "query": "test query", "spec": spec},
    )
    yield example
    example.remove()


def _similarity_search_spec(
    query,
    exampleTypeName,
    nExamples,
    minVectorDistance=None,
    maxVectorDistance=None,
    include="query",
    subjectFilter=None,
):
    return {
        "query": query,
        "exampleTypeName": exampleTypeName,
        "nExamples": nExamples,
        "minVectorDistance": minVectorDistance,
        "maxVectorDistance": maxVectorDistance,
        "include": include,
        "subjectFilter": subjectFilter,
    }


def evalquery_expected_outputs():
    query = "What is the ID of the aircraft with the highest risk score?"
    exampleTypeName = "Genai.FewShotExample.StructuredQuery.EvalQuery"
    readinessGraphFixtureName = "readiness_data_model_graph"
    emptyGraphFixtureName = "empty_data_model_graph"

    return [
        {
            "graphFixtureName": readinessGraphFixtureName,
            "similaritySearchSpec": _similarity_search_spec(query, exampleTypeName, 0),
            "expectedOutput": "Given the data model and the query, write the corresponding json spec.\n\nData model:\n\n{{data_model_string}}\n\n\n\n{{rules}}\n\nQuery: {{query}}\njson spec:",
        },
        {
            "graphFixtureName": readinessGraphFixtureName,
            "similaritySearchSpec": _similarity_search_spec(query, exampleTypeName, 1),
            "expectedOutput": 'Given the data model and the query, write the corresponding json spec.\n\nData model:\n\n{{data_model_string}}\n\nUser: How many Aircrafts are in New York?\nAssistant: {"sourceType": "Genai.Aircraft", "projection": "count()", "filter": "\'New York\' == location.city", "interval": "DAY"}\n\n{{rules}}\n\nQuery: {{query}}\njson spec:',
        },
        {
            "graphFixtureName": readinessGraphFixtureName,
            "similaritySearchSpec": _similarity_search_spec(query, exampleTypeName, 5),
            "expectedOutput": 'Given the data model and the query, write the corresponding json spec.\n\nData model:\n\n{{data_model_string}}\n\nUser: How many Aircrafts are in San Francisco?\nAssistant: {"sourceType": "Genai.Aircraft", "projection": "count()", "filter": "\'San Francisco\' == location.city", "interval": "DAY"}\nUser: How many Aircrafts are in New York?\nAssistant: {"sourceType": "Genai.Aircraft", "projection": "count()", "filter": "\'New York\' == location.city", "interval": "DAY"}\n\n{{rules}}\n\nQuery: {{query}}\njson spec:',
        },
        {
            "graphFixtureName": readinessGraphFixtureName,
            "similaritySearchSpec": _similarity_search_spec(query, exampleTypeName, -1),
            "expectedOutput": 'Given the data model and the query, write the corresponding json spec.\n\nData model:\n\n{{data_model_string}}\n\nUser: How many Aircrafts are in San Francisco?\nAssistant: {"sourceType": "Genai.Aircraft", "projection": "count()", "filter": "\'San Francisco\' == location.city", "interval": "DAY"}\nUser: How many Aircrafts are in New York?\nAssistant: {"sourceType": "Genai.Aircraft", "projection": "count()", "filter": "\'New York\' == location.city", "interval": "DAY"}\n\n{{rules}}\n\nQuery: {{query}}\njson spec:',
        },
        {
            "graphFixtureName": emptyGraphFixtureName,
            "similaritySearchSpec": _similarity_search_spec(query, exampleTypeName, 5),
            "expectedOutput": "Given the data model and the query, write the corresponding json spec.\n\nData model:\n\n{{data_model_string}}\n\n\n\n{{rules}}\n\nQuery: {{query}}\njson spec:",
        },
    ]


def suggested_queries_expected_outputs():
    query = "How many Aircrafts are in San Francisco?"
    exampleTypeName = "Genai.FewShotExample.QueryResultPair"
    return [
        {
            "similaritySearchSpec": _similarity_search_spec(query, exampleTypeName, 0),
            "expectedOutput": 'Given the historical queries, most recent query, and most recent response, use the historical queries to generate follow-up queries that fit the context of the most recent query/response.\nRepeat the historical queries when it makes sense to be the follow-up query.\nWhen the historical queries cannot be used verbatim as logical follow-up queries, revise the historical queries by replacing the nouns with the nouns from the most recent query/response.\nIf replacing the nouns makes all of the generated follow-up queries nonsense, return a json with an empty array.\nIf the historical queries are repeating the most recent query (e.g., "what\'s the price of Car-Toyota?" and "what are the prices of Car-Mazda?" are the same), exclude it from the output.\nIf any historical queries are irrelevant to the most recent query, exclude them from the output.\nDo not generate follow-up queries solely based on the most recent query and most recent response.\nGenerate {{n_examples}} follow-up queries that are distinct from each other and different from the most recent query/response.\nOnly use the information in HISTORICAL QUERIES & RESPONSES to generate follow-up queries.\nIgnore any hashtags with references in the follow-up queries.\n\nOUTPUT FORMAT:\nThe output format of the response should be json serializable like\n{"follow_up_queries": [...]}\n\nEXAMPLE 1 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s the basic info about the Mexico?", "Capital: Mexico City; Population (2022): 127.5 million"],\n ["What is the GDP of US in 2023?", "From [#2], in 2023, the U.S. GDP is about 27.36 trillion USD."],\n ["What is the population of UK in 2018?", "It\'s 66.46 million described in [UkFacts.pdf#93]"]]\n]\nEXAMPLE 1 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 1 MOST RECENT RESPONSE:\nCapital: Washington, D.C. \nPopulation (2022): 333.3 million\nEXAMPLE 1 ANSWER:\n{"follow_up_queries": [\n  "What is the GDP of the US in 2023?",\n  "What is the population of Washington, D.C. in 2018?"\n]}\n\nEXAMPLE 2 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s price of Toyota-Camry in 2023?", "MSRP: From $26,320"],\n ["What\'s most popular song in 2024?", "Fortnight."]]\n]\nEXAMPLE 2 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 2 MOST RECENT RESPONSE:\nCapital: Washington, D.C.\nPopulation (2022): 333.3 million\nEXAMPLE 2 ANSWER:\n# All HISTORICAL QUERIES are irrelevant to MOST RECENT QUERY so output a json with an empty array\n{"follow_up_queries": []}\n\nEXAMPLE 3 HISTORICAL QUERIES & RESPONSES:\n[[["How much oil does Canada produce per day?", "In 2023, Canada produced 5.65 million barrels of oil per day"],\n ["What\'s the total area of Canada?", "The total area of Canada is approximately 9.98 million square kilometers."]],\n [["Who invented airplane?", "Wilbur and Orville Wright"],\n ["When did they invent the airplane?", "1903"]]\n]\nEXAMPLE 3 MOST RECENT QUERY:\nHow much oil does Russia produce per day?\nEXAMPLE 3 MOST RECENT RESPONSE:\nRussia produces 11 million barrels of oil per day.\nEXAMPLE 3 ANSWER:\n{"follow_up_queries": [\n"What\'s the total area of Russia?" # This follows the query "How much oil does <country> produce per day?" and replaces Canada by Russia.\n]}\n\nHISTORICAL QUERIES & RESPONSES:\n[]\nMOST RECENT QUERY:\n{{prev_query}}\nMOST RECENT RESPONSE:\n{{prev_response}}\n',
        },
        {
            "similaritySearchSpec": _similarity_search_spec(query, exampleTypeName, 1),
            "expectedOutput": 'Given the historical queries, most recent query, and most recent response, use the historical queries to generate follow-up queries that fit the context of the most recent query/response.\nRepeat the historical queries when it makes sense to be the follow-up query.\nWhen the historical queries cannot be used verbatim as logical follow-up queries, revise the historical queries by replacing the nouns with the nouns from the most recent query/response.\nIf replacing the nouns makes all of the generated follow-up queries nonsense, return a json with an empty array.\nIf the historical queries are repeating the most recent query (e.g., "what\'s the price of Car-Toyota?" and "what are the prices of Car-Mazda?" are the same), exclude it from the output.\nIf any historical queries are irrelevant to the most recent query, exclude them from the output.\nDo not generate follow-up queries solely based on the most recent query and most recent response.\nGenerate {{n_examples}} follow-up queries that are distinct from each other and different from the most recent query/response.\nOnly use the information in HISTORICAL QUERIES & RESPONSES to generate follow-up queries.\nIgnore any hashtags with references in the follow-up queries.\n\nOUTPUT FORMAT:\nThe output format of the response should be json serializable like\n{"follow_up_queries": [...]}\n\nEXAMPLE 1 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s the basic info about the Mexico?", "Capital: Mexico City; Population (2022): 127.5 million"],\n ["What is the GDP of US in 2023?", "From [#2], in 2023, the U.S. GDP is about 27.36 trillion USD."],\n ["What is the population of UK in 2018?", "It\'s 66.46 million described in [UkFacts.pdf#93]"]]\n]\nEXAMPLE 1 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 1 MOST RECENT RESPONSE:\nCapital: Washington, D.C. \nPopulation (2022): 333.3 million\nEXAMPLE 1 ANSWER:\n{"follow_up_queries": [\n  "What is the GDP of the US in 2023?",\n  "What is the population of Washington, D.C. in 2018?"\n]}\n\nEXAMPLE 2 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s price of Toyota-Camry in 2023?", "MSRP: From $26,320"],\n ["What\'s most popular song in 2024?", "Fortnight."]]\n]\nEXAMPLE 2 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 2 MOST RECENT RESPONSE:\nCapital: Washington, D.C.\nPopulation (2022): 333.3 million\nEXAMPLE 2 ANSWER:\n# All HISTORICAL QUERIES are irrelevant to MOST RECENT QUERY so output a json with an empty array\n{"follow_up_queries": []}\n\nEXAMPLE 3 HISTORICAL QUERIES & RESPONSES:\n[[["How much oil does Canada produce per day?", "In 2023, Canada produced 5.65 million barrels of oil per day"],\n ["What\'s the total area of Canada?", "The total area of Canada is approximately 9.98 million square kilometers."]],\n [["Who invented airplane?", "Wilbur and Orville Wright"],\n ["When did they invent the airplane?", "1903"]]\n]\nEXAMPLE 3 MOST RECENT QUERY:\nHow much oil does Russia produce per day?\nEXAMPLE 3 MOST RECENT RESPONSE:\nRussia produces 11 million barrels of oil per day.\nEXAMPLE 3 ANSWER:\n{"follow_up_queries": [\n"What\'s the total area of Russia?" # This follows the query "How much oil does <country> produce per day?" and replaces Canada by Russia.\n]}\n\nHISTORICAL QUERIES & RESPONSES:\n[[[How many Aircrafts are in San Francisco?, There are 5 aircrafts in San Francisco.], [Which one has the highest risk score?, The aircraft with the highest risk score is X09.]]]\nMOST RECENT QUERY:\n{{prev_query}}\nMOST RECENT RESPONSE:\n{{prev_response}}\n',
        },
        {
            "similaritySearchSpec": _similarity_search_spec(query, exampleTypeName, 2, 0.001),
            "expectedOutput": 'Given the historical queries, most recent query, and most recent response, use the historical queries to generate follow-up queries that fit the context of the most recent query/response.\nRepeat the historical queries when it makes sense to be the follow-up query.\nWhen the historical queries cannot be used verbatim as logical follow-up queries, revise the historical queries by replacing the nouns with the nouns from the most recent query/response.\nIf replacing the nouns makes all of the generated follow-up queries nonsense, return a json with an empty array.\nIf the historical queries are repeating the most recent query (e.g., "what\'s the price of Car-Toyota?" and "what are the prices of Car-Mazda?" are the same), exclude it from the output.\nIf any historical queries are irrelevant to the most recent query, exclude them from the output.\nDo not generate follow-up queries solely based on the most recent query and most recent response.\nGenerate {{n_examples}} follow-up queries that are distinct from each other and different from the most recent query/response.\nOnly use the information in HISTORICAL QUERIES & RESPONSES to generate follow-up queries.\nIgnore any hashtags with references in the follow-up queries.\n\nOUTPUT FORMAT:\nThe output format of the response should be json serializable like\n{"follow_up_queries": [...]}\n\nEXAMPLE 1 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s the basic info about the Mexico?", "Capital: Mexico City; Population (2022): 127.5 million"],\n ["What is the GDP of US in 2023?", "From [#2], in 2023, the U.S. GDP is about 27.36 trillion USD."],\n ["What is the population of UK in 2018?", "It\'s 66.46 million described in [UkFacts.pdf#93]"]]\n]\nEXAMPLE 1 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 1 MOST RECENT RESPONSE:\nCapital: Washington, D.C. \nPopulation (2022): 333.3 million\nEXAMPLE 1 ANSWER:\n{"follow_up_queries": [\n  "What is the GDP of the US in 2023?",\n  "What is the population of Washington, D.C. in 2018?"\n]}\n\nEXAMPLE 2 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s price of Toyota-Camry in 2023?", "MSRP: From $26,320"],\n ["What\'s most popular song in 2024?", "Fortnight."]]\n]\nEXAMPLE 2 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 2 MOST RECENT RESPONSE:\nCapital: Washington, D.C.\nPopulation (2022): 333.3 million\nEXAMPLE 2 ANSWER:\n# All HISTORICAL QUERIES are irrelevant to MOST RECENT QUERY so output a json with an empty array\n{"follow_up_queries": []}\n\nEXAMPLE 3 HISTORICAL QUERIES & RESPONSES:\n[[["How much oil does Canada produce per day?", "In 2023, Canada produced 5.65 million barrels of oil per day"],\n ["What\'s the total area of Canada?", "The total area of Canada is approximately 9.98 million square kilometers."]],\n [["Who invented airplane?", "Wilbur and Orville Wright"],\n ["When did they invent the airplane?", "1903"]]\n]\nEXAMPLE 3 MOST RECENT QUERY:\nHow much oil does Russia produce per day?\nEXAMPLE 3 MOST RECENT RESPONSE:\nRussia produces 11 million barrels of oil per day.\nEXAMPLE 3 ANSWER:\n{"follow_up_queries": [\n"What\'s the total area of Russia?" # This follows the query "How much oil does <country> produce per day?" and replaces Canada by Russia.\n]}\n\nHISTORICAL QUERIES & RESPONSES:\n[[[What is the aircraft with the highest risk score?, The aircraft with the highest risk score is X09.], [How do I reduce the risk score of X09?, You can reduce the risk score of X09 by performing regular maintenance.]]\n[[How many Aircrafts are in New York?, There are 10 aircrafts in New York.], [Where is the airport in New York?, The airport in New York is JFK.]]]\nMOST RECENT QUERY:\n{{prev_query}}\nMOST RECENT RESPONSE:\n{{prev_response}}\n',
        },
        {
            "similaritySearchSpec": _similarity_search_spec(query, exampleTypeName, 5, 0, 2),
            "expectedOutput": 'Given the historical queries, most recent query, and most recent response, use the historical queries to generate follow-up queries that fit the context of the most recent query/response.\nRepeat the historical queries when it makes sense to be the follow-up query.\nWhen the historical queries cannot be used verbatim as logical follow-up queries, revise the historical queries by replacing the nouns with the nouns from the most recent query/response.\nIf replacing the nouns makes all of the generated follow-up queries nonsense, return a json with an empty array.\nIf the historical queries are repeating the most recent query (e.g., "what\'s the price of Car-Toyota?" and "what are the prices of Car-Mazda?" are the same), exclude it from the output.\nIf any historical queries are irrelevant to the most recent query, exclude them from the output.\nDo not generate follow-up queries solely based on the most recent query and most recent response.\nGenerate {{n_examples}} follow-up queries that are distinct from each other and different from the most recent query/response.\nOnly use the information in HISTORICAL QUERIES & RESPONSES to generate follow-up queries.\nIgnore any hashtags with references in the follow-up queries.\n\nOUTPUT FORMAT:\nThe output format of the response should be json serializable like\n{"follow_up_queries": [...]}\n\nEXAMPLE 1 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s the basic info about the Mexico?", "Capital: Mexico City; Population (2022): 127.5 million"],\n ["What is the GDP of US in 2023?", "From [#2], in 2023, the U.S. GDP is about 27.36 trillion USD."],\n ["What is the population of UK in 2018?", "It\'s 66.46 million described in [UkFacts.pdf#93]"]]\n]\nEXAMPLE 1 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 1 MOST RECENT RESPONSE:\nCapital: Washington, D.C. \nPopulation (2022): 333.3 million\nEXAMPLE 1 ANSWER:\n{"follow_up_queries": [\n  "What is the GDP of the US in 2023?",\n  "What is the population of Washington, D.C. in 2018?"\n]}\n\nEXAMPLE 2 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s price of Toyota-Camry in 2023?", "MSRP: From $26,320"],\n ["What\'s most popular song in 2024?", "Fortnight."]]\n]\nEXAMPLE 2 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 2 MOST RECENT RESPONSE:\nCapital: Washington, D.C.\nPopulation (2022): 333.3 million\nEXAMPLE 2 ANSWER:\n# All HISTORICAL QUERIES are irrelevant to MOST RECENT QUERY so output a json with an empty array\n{"follow_up_queries": []}\n\nEXAMPLE 3 HISTORICAL QUERIES & RESPONSES:\n[[["How much oil does Canada produce per day?", "In 2023, Canada produced 5.65 million barrels of oil per day"],\n ["What\'s the total area of Canada?", "The total area of Canada is approximately 9.98 million square kilometers."]],\n [["Who invented airplane?", "Wilbur and Orville Wright"],\n ["When did they invent the airplane?", "1903"]]\n]\nEXAMPLE 3 MOST RECENT QUERY:\nHow much oil does Russia produce per day?\nEXAMPLE 3 MOST RECENT RESPONSE:\nRussia produces 11 million barrels of oil per day.\nEXAMPLE 3 ANSWER:\n{"follow_up_queries": [\n"What\'s the total area of Russia?" # This follows the query "How much oil does <country> produce per day?" and replaces Canada by Russia.\n]}\n\nHISTORICAL QUERIES & RESPONSES:\n[[[What is the aircraft with the highest risk score?, The aircraft with the highest risk score is X09.], [How do I reduce the risk score of X09?, You can reduce the risk score of X09 by performing regular maintenance.]]\n[[How many Aircrafts are in New York?, There are 10 aircrafts in New York.], [Where is the airport in New York?, The airport in New York is JFK.]]\n[[How many Aircrafts are in San Francisco?, There are 5 aircrafts in San Francisco.], [Which one has the highest risk score?, The aircraft with the highest risk score is X09.]]]\nMOST RECENT QUERY:\n{{prev_query}}\nMOST RECENT RESPONSE:\n{{prev_response}}\n',
        },
        {
            "similaritySearchSpec": _similarity_search_spec(query, exampleTypeName, 5, 0, 0.07),
            "expectedOutput": 'Given the historical queries, most recent query, and most recent response, use the historical queries to generate follow-up queries that fit the context of the most recent query/response.\nRepeat the historical queries when it makes sense to be the follow-up query.\nWhen the historical queries cannot be used verbatim as logical follow-up queries, revise the historical queries by replacing the nouns with the nouns from the most recent query/response.\nIf replacing the nouns makes all of the generated follow-up queries nonsense, return a json with an empty array.\nIf the historical queries are repeating the most recent query (e.g., "what\'s the price of Car-Toyota?" and "what are the prices of Car-Mazda?" are the same), exclude it from the output.\nIf any historical queries are irrelevant to the most recent query, exclude them from the output.\nDo not generate follow-up queries solely based on the most recent query and most recent response.\nGenerate {{n_examples}} follow-up queries that are distinct from each other and different from the most recent query/response.\nOnly use the information in HISTORICAL QUERIES & RESPONSES to generate follow-up queries.\nIgnore any hashtags with references in the follow-up queries.\n\nOUTPUT FORMAT:\nThe output format of the response should be json serializable like\n{"follow_up_queries": [...]}\n\nEXAMPLE 1 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s the basic info about the Mexico?", "Capital: Mexico City; Population (2022): 127.5 million"],\n ["What is the GDP of US in 2023?", "From [#2], in 2023, the U.S. GDP is about 27.36 trillion USD."],\n ["What is the population of UK in 2018?", "It\'s 66.46 million described in [UkFacts.pdf#93]"]]\n]\nEXAMPLE 1 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 1 MOST RECENT RESPONSE:\nCapital: Washington, D.C. \nPopulation (2022): 333.3 million\nEXAMPLE 1 ANSWER:\n{"follow_up_queries": [\n  "What is the GDP of the US in 2023?",\n  "What is the population of Washington, D.C. in 2018?"\n]}\n\nEXAMPLE 2 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s price of Toyota-Camry in 2023?", "MSRP: From $26,320"],\n ["What\'s most popular song in 2024?", "Fortnight."]]\n]\nEXAMPLE 2 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 2 MOST RECENT RESPONSE:\nCapital: Washington, D.C.\nPopulation (2022): 333.3 million\nEXAMPLE 2 ANSWER:\n# All HISTORICAL QUERIES are irrelevant to MOST RECENT QUERY so output a json with an empty array\n{"follow_up_queries": []}\n\nEXAMPLE 3 HISTORICAL QUERIES & RESPONSES:\n[[["How much oil does Canada produce per day?", "In 2023, Canada produced 5.65 million barrels of oil per day"],\n ["What\'s the total area of Canada?", "The total area of Canada is approximately 9.98 million square kilometers."]],\n [["Who invented airplane?", "Wilbur and Orville Wright"],\n ["When did they invent the airplane?", "1903"]]\n]\nEXAMPLE 3 MOST RECENT QUERY:\nHow much oil does Russia produce per day?\nEXAMPLE 3 MOST RECENT RESPONSE:\nRussia produces 11 million barrels of oil per day.\nEXAMPLE 3 ANSWER:\n{"follow_up_queries": [\n"What\'s the total area of Russia?" # This follows the query "How much oil does <country> produce per day?" and replaces Canada by Russia.\n]}\n\nHISTORICAL QUERIES & RESPONSES:\n[[[How many Aircrafts are in San Francisco?, There are 5 aircrafts in San Francisco.], [Which one has the highest risk score?, The aircraft with the highest risk score is X09.]]]\nMOST RECENT QUERY:\n{{prev_query}}\nMOST RECENT RESPONSE:\n{{prev_response}}\n',
        },
        {
            "similaritySearchSpec": _similarity_search_spec(
                query, exampleTypeName, 5, 0, 2, "query", c3.Filter.contains("query", "Francisco")
            ),
            "expectedOutput": 'Given the historical queries, most recent query, and most recent response, use the historical queries to generate follow-up queries that fit the context of the most recent query/response.\nRepeat the historical queries when it makes sense to be the follow-up query.\nWhen the historical queries cannot be used verbatim as logical follow-up queries, revise the historical queries by replacing the nouns with the nouns from the most recent query/response.\nIf replacing the nouns makes all of the generated follow-up queries nonsense, return a json with an empty array.\nIf the historical queries are repeating the most recent query (e.g., "what\'s the price of Car-Toyota?" and "what are the prices of Car-Mazda?" are the same), exclude it from the output.\nIf any historical queries are irrelevant to the most recent query, exclude them from the output.\nDo not generate follow-up queries solely based on the most recent query and most recent response.\nGenerate {{n_examples}} follow-up queries that are distinct from each other and different from the most recent query/response.\nOnly use the information in HISTORICAL QUERIES & RESPONSES to generate follow-up queries.\nIgnore any hashtags with references in the follow-up queries.\n\nOUTPUT FORMAT:\nThe output format of the response should be json serializable like\n{"follow_up_queries": [...]}\n\nEXAMPLE 1 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s the basic info about the Mexico?", "Capital: Mexico City; Population (2022): 127.5 million"],\n ["What is the GDP of US in 2023?", "From [#2], in 2023, the U.S. GDP is about 27.36 trillion USD."],\n ["What is the population of UK in 2018?", "It\'s 66.46 million described in [UkFacts.pdf#93]"]]\n]\nEXAMPLE 1 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 1 MOST RECENT RESPONSE:\nCapital: Washington, D.C. \nPopulation (2022): 333.3 million\nEXAMPLE 1 ANSWER:\n{"follow_up_queries": [\n  "What is the GDP of the US in 2023?",\n  "What is the population of Washington, D.C. in 2018?"\n]}\n\nEXAMPLE 2 HISTORICAL QUERIES & RESPONSES:\n[[["What\'s price of Toyota-Camry in 2023?", "MSRP: From $26,320"],\n ["What\'s most popular song in 2024?", "Fortnight."]]\n]\nEXAMPLE 2 MOST RECENT QUERY:\nWhat\'s the basic info about the US?\nEXAMPLE 2 MOST RECENT RESPONSE:\nCapital: Washington, D.C.\nPopulation (2022): 333.3 million\nEXAMPLE 2 ANSWER:\n# All HISTORICAL QUERIES are irrelevant to MOST RECENT QUERY so output a json with an empty array\n{"follow_up_queries": []}\n\nEXAMPLE 3 HISTORICAL QUERIES & RESPONSES:\n[[["How much oil does Canada produce per day?", "In 2023, Canada produced 5.65 million barrels of oil per day"],\n ["What\'s the total area of Canada?", "The total area of Canada is approximately 9.98 million square kilometers."]],\n [["Who invented airplane?", "Wilbur and Orville Wright"],\n ["When did they invent the airplane?", "1903"]]\n]\nEXAMPLE 3 MOST RECENT QUERY:\nHow much oil does Russia produce per day?\nEXAMPLE 3 MOST RECENT RESPONSE:\nRussia produces 11 million barrels of oil per day.\nEXAMPLE 3 ANSWER:\n{"follow_up_queries": [\n"What\'s the total area of Russia?" # This follows the query "How much oil does <country> produce per day?" and replaces Canada by Russia.\n]}\n\nHISTORICAL QUERIES & RESPONSES:\n[[[How many Aircrafts are in San Francisco?, There are 5 aircrafts in San Francisco.], [Which one has the highest risk score?, The aircraft with the highest risk score is X09.]]]\nMOST RECENT QUERY:\n{{prev_query}}\nMOST RECENT RESPONSE:\n{{prev_response}}\n',
        },
    ]


@pytest.fixture(scope="module")
def evalquery_prompt_template():
    return c3.Genai.Prompt.forId("eval_spec_generation_default_prompt")


@pytest.fixture(scope="module")
def suggested_queries_prompt_template():
    return c3.Genai.Prompt.forId("suggested_queries_generation_default_prompt")


@pytest.fixture(scope="module")
def evalquery_few_shot_retriever(evalquery_prompt_template):
    return c3.Genai.Agent.Tool.Util.FewShotRetriever(templatePrompt=evalquery_prompt_template)


@pytest.fixture
def readiness_data_model_graph():
    yield c3.Genai.StructuredData.DataModelGraph.forName("readiness_test_data_model_graph")


@pytest.fixture
def empty_data_model_graph():
    yield c3.Genai.StructuredData.DataModelGraph.forName("default")


@pytest.fixture(scope="module")
def query_pair_few_shot_retriever(suggested_queries_prompt_template):
    return c3.Genai.Agent.Tool.Util.FewShotRetriever(templatePrompt=suggested_queries_prompt_template)


@pytest.mark.parametrize("test_case", evalquery_expected_outputs())
def test_build_evalquery_prompt(request, evalquery_few_shot_retriever, test_case):
    similaritySearchSpec = test_case["similaritySearchSpec"]
    expectedOutput = test_case["expectedOutput"]
    data_model_graph = request.getfixturevalue(test_case["graphFixtureName"])
    similaritySearchSpec["subjectFilter"] = data_model_graph.filterForWhiteListedTypes()
    prompt = evalquery_few_shot_retriever.buildPromptFromExamples(similaritySearchSpec).toString()
    assert prompt == expectedOutput


@pytest.mark.parametrize("test_case", suggested_queries_expected_outputs())
def test_build_suggested_queries_prompt(query_pair_few_shot_retriever, test_case):
    similaritySearchSpec = test_case["similaritySearchSpec"]
    expectedOutput = test_case["expectedOutput"]
    prompt = query_pair_few_shot_retriever.buildPromptFromExamples(similaritySearchSpec).toString()
    assert prompt == expectedOutput
