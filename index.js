const superbowlWin = (record) => {
    const win = record.find(obj => obj.result === "W")
    return win ? win.year : undefined
} 
console.log(superBowlWin(record))