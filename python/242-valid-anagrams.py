class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        dict = {}

        for char in s:
            if char in dict:
                dict[char] += 1
            else:
                dict[char] = 1

        for char in t:
            if char in dict:
                dict[char] -= 1
            else:
                dict[char] = -1

        values = list(dict.values())

        for el in values:
            if el != 0:
                return False

        return True
