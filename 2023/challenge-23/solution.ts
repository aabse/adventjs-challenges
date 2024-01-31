function organizeChristmasDinner(dishes: any[]) {
  let ingredients = {}
  for (let i = 0; i < dishes.length; i++) {
    for (let j = 1; j < dishes[i].length; j++) {
      if (ingredients[dishes[i][j]] == undefined) {
        ingredients[dishes[i][j]] = [dishes[i][0]]
      } else {
        ingredients[dishes[i][j]].push(dishes[i][0])
      }
    }
  }
  const ingredientsArray: any[] = Object.entries(ingredients)
  const filtered = ingredientsArray.filter(elem => elem[1].length > 1)
  const format = filtered.map(elem => [elem[0], ...elem[1].sort()])
  return format.sort()
}
