const splitOnce = (line, delimiter) => {
    for (let i = 0; i < line.length; i++) {
        let char = line[i];
        if (char === delimiter) return line.slice(i+1).trim();
    }
    return line;
}