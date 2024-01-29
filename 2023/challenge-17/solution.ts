function optimizeIntervals(intervals: any[]) {
  const start = intervals.map(item => item[0]).sort((a,b) => a - b)
  const end = intervals.map(item => item[1]).sort((a,b) => a - b)
  let finalIntervals: any[] = []
  let interval: number[] = [start[0]]
  for (let i = 1; i < start.length; i++) {
    if (start[i] > end[i-1]) {
      interval.push(end[i-1])
      finalIntervals.push(interval)
      interval = [start[i]]
    }
  }
  interval.push(end[end.length-1])
  finalIntervals.push(interval)
  return finalIntervals
}
