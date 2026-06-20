#!/usr/bin/env python3
def list_all(mongo_collection):
    return list(mongo_collection.find())
//a Python function that lists all documents in a collection