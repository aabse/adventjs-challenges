function organizeGifts(gifts: string) {
        const regex = /(\d+(\w))/g
	let result = ""
	const listGifts = gifts.match(regex)
  result = listGifts.reduce((prevGift, currentGift) => {
  	const item = currentGift.slice(-1)
    const number = Number(currentGift.slice(0,-1))
    const pales = Math.trunc(number/50)
    const boxes = Math.trunc(number%50/10)
    const ind = Math.trunc(number%50%10)
    let tempResult = `[${item}]`.repeat(pales)
    tempResult += `{${item}}`.repeat(boxes)
    tempResult += `(${`${item}`.repeat(ind)})`.replaceAll('()','')
    
    return prevGift + tempResult
  }, '')
  return result
}
