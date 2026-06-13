#!/usr/bin/env python3
""" Module providing panigation helper function """


def index_range(page , page_size):
    """Returns a tuple containing start and end indexes."""
    start_index = (page -1)*page_size
    end_index = start_index + page_size
    return (start_index , end_index)
