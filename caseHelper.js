function startingUpperCase(string) {
    return string[0].toUpperCase() + string.substring(1);
}

function splitCamelCase(string) {
    let newString = "";
    for (const char of string) {
        if (char === char.toUpperCase()) {
            newString += " " + char.toLowerCase(); 
        } else {
            newString += char;
        }
    }
    return newString;
}

module.exports = {startingUpperCase, splitCamelCase};
