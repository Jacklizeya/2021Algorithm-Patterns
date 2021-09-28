const topological_sort = function(vertices, edges) {

  let inDegree = Array(vertices).fill(0)
  let adjacentList = Array(vertices).fill(0).map(()=> Array())
  console.log(adjacentList)

  for (let pairs of edges) {
    let start = pairs[0]
    let end = pairs[1]
    adjacentList[start].push(end)
    inDegree[end]++
  }

  console.log(adjacentList, inDegree)
  let queue = []
  for (i = 0; i < vertices; i++) {
    if (inDegree[i] === 0) {queue.push(i)}
  }

  let j = 0
  while (j < queue.length) {
    adjacentList[queue[j]].forEach(end =>{ inDegree[end]--; if (inDegree[end] === 0) {queue.push(end)}})
    j++
  }
  console.log(queue)
  return queue

};


console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
