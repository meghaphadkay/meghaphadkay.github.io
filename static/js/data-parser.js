class DataParser {
    /**
     * Parses any data file containing key-value data in a special site-specific
     * format and returns an array of objects.
     *
     * Each data file holds information about a particular object in `"- key: value"` format.
     * Two objects are separated by `"--"` on a separate line.
     *
     * For example -
     * ```
     * - heading: Object 1
     * - link: https://google.com
     * - description: This is object 1.
     *
     * --
     *
     * - heading: Object 2
     * - link: https://google.com
     * - description: This is object 2.
     * ```
     * @param text - String data.
     */
    static parse(text) {
        text = text.split('\n');
        const data = [];
        let currObj = {};
        let currKey = '';
        let currValue= '';
        for (let line of text) {
            if (line.trim() === '--' && Object.keys(currObj).length > 0) {
                if (currKey.length > 0) {
                    currObj[currKey] = currValue;
                }
                data.push(currObj);
                currObj = {};
                currKey = '';
                currValue = '';
                continue;
            }
            if (line.match(/-\s.+:.*/g)) {
                if (currKey.trim().length > 0) currObj[currKey] = currValue.trim();
                currKey = line.split(':')[0].slice(2);
                currValue = splitOnce(line, ':');
            }
            else if (line.trim().length > 0) {
                currValue += line.trim() + ' ';
            }
        }
        if (Object.keys(currObj).length > 0) {
            if (currKey.length > 0) {
                currObj[currKey] = currValue;
            }
            data.push(currObj);
        }
        return data;
    }
}