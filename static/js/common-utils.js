/**
 * Splits a string at most once by a delimiter and returns the
 * substring following the delimiter.
 * @param line - String to split once.
 * @param delimiter - The delimiter to split by
 * @returns {*|string} - The substring following the delimiter.
 */
const splitOnce = (line, delimiter) => {
    for (let i = 0; i < line.length; i++) {
        let char = line[i];
        if (char === delimiter) return line.slice(i+1).trim();
    }
    return line;
}