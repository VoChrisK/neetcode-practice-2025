class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        dict = {}

        for string in strs:
            sortedString = list(string)
            sortedString.sort()
            sortedString = "".join(sortedString)

            if sortedString in dict:
                dict[sortedString].append(string)
            else:
                dict[sortedString] = [string]

        return list(dict.values())