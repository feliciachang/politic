
const monthNames = [
    "Jan", "Fef", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const parseUTC = (date) => {
    const dateObj = new Date(date)
    return "" + monthNames[dateObj.getMonth()] + " " + dateObj.getDate() + ", " + dateObj.getFullYear()
}