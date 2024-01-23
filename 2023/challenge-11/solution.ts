function getIndexsForPalindrome(word: string) {
  const reverseWord = (word: string) => {
    return word.split("").reverse().join("")
  }
  const reversedWord = reverseWord(word)
  if (word === reversedWord) return []
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== reverseWord[i]) {
      
      for (let j = i; j < word.length; j++) {
        let tempWord = word
        
        if (i != j) {
          tempWord = tempWord.slice(0,i) + word[j] + tempWord.slice(i+1)
          tempWord = tempWord.slice(0,j) + word[i] + tempWord.slice(j+1)
          if (tempWord === reverseWord(tempWord)) {
            return [i, j]
          }
        }
      }
    }
  }
  return null
}
