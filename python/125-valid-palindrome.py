class Solution:
    def isPalindrome(self, s: str) -> bool:
        string = "abcdefghijklmnopqrstuvwxyz0123456789"
        s = s.lower()
        s = list(filter(lambda c: c in string, list(s)))

        left = 0
        right = len(s) - 1

        while(left < right):
            if s[left] != s[right]:
                return False

            left += 1
            right -= 1

        return True