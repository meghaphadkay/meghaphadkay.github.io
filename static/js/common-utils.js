const splitOnce = (line, delimiter) => {
    const lines = line.split(delimiter);
    return lines.splice(1).join(' ');
}