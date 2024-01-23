function cyberReindeer(road: string, time: number) {
  const regex = /S[\.\*]/g
  let result: string[] = []
  let lastChar = '.'
  result.push(road)
  for (let i=1; (i<time); i++) {
  	if (i == 5) road = road.replaceAll("|","*")
		let matches = road.match(regex)
    if (matches) {
    	road = road.replace(regex, lastChar + 'S')
      lastChar = matches[0][1]
    } 
    result.push(road)
  }
  
  return result
}
