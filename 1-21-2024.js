// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
    // Convert hours minutes and seconds to milliseconds
    let hoursInMilliseconds = h * 60 * 60 * 1000
    let minutesInMilliseconds = m * 60 * 1000
    let secondsInMilliseconds = s * 1000

    // Calculate total time in milliseconds since midnight
    var totalTime = hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds

    return totalTime
}