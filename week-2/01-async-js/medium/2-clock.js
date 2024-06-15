setInterval(() => {
    const currentTime =  new Date()
    const hours = String(currentTime.getHours()).padStart(2, 0)
    const minutes = String(currentTime.getMinutes()).padStart(2, 0)
    const seconds = String(currentTime.getSeconds()).padStart(2, 0)
    console.log(`${hours}:${minutes}:${seconds}`)
}, 1000)


setInterval(() => {
    const currentTime =  new Date()
    console.log(currentTime.toLocaleTimeString().toLocaleUpperCase())
}, 1000)

