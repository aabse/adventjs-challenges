function transformTree(tree: number[]) {
  let finalTree = addNode({}, 0)
  function addNode(node: any, index: number) {
    if (tree[index] == undefined) return null
    node.value = tree[index]
    node.left = addNode({}, (index+1)*2-1)
    node.right = addNode({}, (index+1)*2)
    return node
  }
  return finalTree
}
