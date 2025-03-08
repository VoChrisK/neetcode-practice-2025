class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;

        Map<String, Integer> hashMap = new HashMap<String, Integer>();
        String sChars[] = s.split("");
        String tChars[] = t.split("");

        Arrays.stream(sChars).forEach((c) -> {
            if (hashMap.containsKey(c)) {
                hashMap.put(c, hashMap.get(c) + 1);
            } else {
                hashMap.put(c, 1);
            }
        });

        Arrays.stream(tChars).forEach((c) -> {
            if (hashMap.containsKey(c)) {
                hashMap.put(c, hashMap.get(c) - 1);
            } else {
                hashMap.put(c, -1);
            }
        });

        Object[] values = hashMap.values().toArray();

        for(int i = 0; i < values.length; i++) {
            if ((int) values[i] != 0) return false;
        }

        return true;
    }
}