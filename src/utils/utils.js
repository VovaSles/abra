
export const metric = (temperature) => {
    return (temperature - 32) * (5 / 9)
}

export const getWeekDat = (date) => {
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = new Date(date)
    return weekday[d.getDay()]
}