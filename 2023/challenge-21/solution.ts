function findBalancedSegment(message: number[]) {
  const segments = {}
  let maxBalanced: number[] | null = null
  for (let i = 0; i < message.length-1; i++) {
    segments[i] = []
    for (let j = i+1; j < message.length; j++) {
      const subMessage = message.slice(i,j+1)
      if (isBalanced(subMessage)) {
        segments[i].push(subMessage)
        if (!maxBalanced || subMessage.length > (maxBalanced[2])) {
          maxBalanced = [i,i+subMessage.length-1, subMessage.length]
        }
      }
    }
  }
  
  function isBalanced(array: number[]) {
    const count0 = array.filter(item => item === 0).length
    const count1 = array.filter(item => item === 1).length
    return count0 === count1
  }
  return maxBalanced ? maxBalanced.slice(0,-1) : []
}
