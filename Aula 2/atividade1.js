class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        this.string = string;
    }

    /**
     * Returns the first substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {
        if (this.string.indexOf(subStr) < 0) {
            return '';
        }

        return subStr;
    }


    /**
     * Returns the last substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        if (this.string.lastIndexOf(subStr) < 0) {
            return '';
        }

        return subStr;
    }

    /**
     * Returns the fsubstring between two given other strings
     * @param  {String} subStr1  begining of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        const firstIndex = this.string.indexOf(subStr1);
        if (firstIndex < 0) {
            return '';
        }

        const lastIndex = this.string.indexOf(subStr2, firstIndex + subStr1.length);
        if (lastIndex < 0) {
            return '';
        }

        return this.string.substring(firstIndex + subStr1.length, lastIndex);
    }

    /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
    both_ends() {
        const stringLength = this.string.length;

        if (stringLength < 2) {
            return '';
        }

        return this.string.substring(0, 2) + this.string.substring(stringLength - 2);
    }

    /**
     Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
    fix_start(str1) {
        return this.string.replace(str1, (match) => {
            return '*'.repeat(match.length);
        })
    }

}

module.exports = StringManipulations;