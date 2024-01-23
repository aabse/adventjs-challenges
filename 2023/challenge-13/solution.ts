function calculateTime(deliveries: string[]) {
  let totalSeconds = 0
  const maxTime = 7*60*60
  for (let delivery of deliveries) {
    const time = delivery.split(":")
    const hours = Number(time[0])
    const minutes = Number(time[1])
    const seconds = Number(time[2])
    totalSeconds += seconds + minutes*60 + hours*60*60
  }
  const difTime = maxTime - totalSeconds
  let finalTime = difTime <= 0 ? "" : "-"
  const finalHours = String(Math.abs(Math.trunc(difTime/60/60))).padStart(2,"0")
  const finalMinutes = String(Math.abs(Math.trunc(difTime/60%60))).padStart(2,"0")
  const finalSeconds = String(Math.abs(difTime%60)).padStart(2,"0")
  finalTime += `${finalHours}:${finalMinutes}:${finalSeconds}`
  return finalTime
}
