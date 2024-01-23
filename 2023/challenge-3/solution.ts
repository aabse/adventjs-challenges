function findNaughtyStep(original: string, modified: string) {
  let longestStr: string, shortestStr: string
  if (original.length < modified.length) {
    longestStr = modified
    shortestStr = original
  } else {
    longestStr = original
    shortestStr = modified
  }
  for (let i = 0; i < longestStr.length; i++) {
    if (!shortestStr[i] || longestStr[i] !== shortestStr[i]) return longestStr[i]
  }
  return ""
}
