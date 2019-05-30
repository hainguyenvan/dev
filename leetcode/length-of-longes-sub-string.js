var lengthOfLongestSubstring = function (s) {
    console.log(s);
    let subStr = '';
    let subList = [];
    for (let i = 0; i < s.length; i++) {
        subList.push(s.substring(i, i + 1));
        for (let j = i + 2; j <= s.length; j++) {
            subList.push(s.substring(i, j));
        }
    }

    if (subList.length === 0) {
        return subStr.length;
    }

    for (let i = 0; i < subList.length; i++) {
        let str = subList[i];
        let duplicate = false;
        // console.log('str: ', str);
        for (let j = 0; j < str.length; j++) {
            // console.log('str.charAt(j): ', str.charAt(j));
            let firstIndex = str.indexOf(str.charAt(j));
            let lastIndex = str.lastIndexOf(str.charAt(j));
            // console.log('first index: ', firstIndex);
            // console.log('last index: ', lastIndex);
            if (lastIndex !== firstIndex) {
                duplicate = true;
                break;
            }
        }
        if ((duplicate === false) && (subStr.length < str.length)) {
            subStr = str;
        }
        // console.log('str: ', str);
    }
    // console.log('data list: ', subList);
    return subStr.length;
};

let count = lengthOfLongestSubstring('pwwkew');
console.log(count);