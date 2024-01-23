function decode(message: string) {
  const regex = /\([^()]+\)/
	const match = message.match(regex)
  if (!match) return message
  const subString = match[0].replace("(","").replace(")","")
  let revertedString = "";
  for (let i=subString.length-1; i>=0; i--) {
    revertedString += subString[i]
  }
  return decode(message.replace(regex, revertedString))
}
