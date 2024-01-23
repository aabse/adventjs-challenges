function maxDistance(movements: string) {
  const matchesRight = movements.match(/>/g) || []
  const matchesLeft = movements.match(/</g) || []
  const matchesComodin = movements.match(/\*/g) || []

  const movementsRight = matchesRight.length
  const movementsLeft = matchesLeft.length
  const difference = Math.abs(movementsRight-movementsLeft)
  const movementsComodin = matchesComodin.length
  const finalDistance = difference + movementsComodin
  return finalDistance
}
