# Built-in Functions and Methods
# Python includes the following standalone functions for dictionaries:

# cmp(dict1, dict2) - Compares two dictionaries. The comparison process starts with the length of each dictionary, followed by key names, followed by values. The function returns 0 if the two dicts are equal, -1 if dict1 > dict2, 1 if dict1 < dict2.
# len() - give the total length of the dictionary.
# str() - produces a string representation of a dictionary.
# type() - returns the type of the passed variable. If passed variable is a dictionary, it will then return a dict type.
# Python includes the following dictionary methods:
# (either dict.method(yourDictionary) or yourDictionary.method() will work)

# .clear() - removes all elements from the dictionary
# .copy() - returns a shallow copy dictionary
# .fromkeys(sequence, [value] ) - create a new dictionary with keys from sequence and values set to value.
# .get(key, default=None) - For key key, returns value or default if key is not in dictionary.
# .has_key(key) - returns true if a given key is available in the dictionary, otherwise it returns false.
# .items() - returns a list of dictionary's (key, value) tuple pairs.
# .keys() - return a list of dictionary keys.
# .setdefault(key, default=None) - similar to get(), but will set dict[key]=default if key is not already in dictionary.
# .update(dict2) = adds dictionary dict2's key-values pairs to an existing dictionary.
# .values() - returns list of dictionary values.

# Some built-in functions for sequences:
# enumerate(sequence) used in a for loop context to return two-item-tuple for each item in the list indicating the index followed by the value at that index.
# map(function, sequence) applies the function to every item in the sequence you pass in. Returns a list of the results.
# min(sequence) returns the lowest value in a sequence.
# sorted(sequence) returns a sorted sequence

# list.extend(list2) adds all values from a second sequence to the end of the original sequence.
# list.pop(index) remove a value at given position. if no parameter is passed, defaults to final value in the list.
# list.index(value) returns the index position in a list for the given parameter.