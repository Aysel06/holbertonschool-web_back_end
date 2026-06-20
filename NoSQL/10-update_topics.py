#!/usr/bin/env pyhon3
""" a Python function that changes all topics of a school document based on the name"""
def update_topics(mongo_collection, name, topics):
    """ Return updated documents based on the name """
    mongo_collection.update_many(
        {"name" : name},
        {
            "$set": {"topics" : topics}
        }
    )
    