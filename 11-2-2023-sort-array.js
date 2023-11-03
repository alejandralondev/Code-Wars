// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    // Concatenate
    let newString = s1 + s2

    // Convert string to an array
    // Remove duplicates 
    // Sort
    let sortedString = Array.from(new Set(newString.split(''))).sort()

    return sortedString.join('')
}