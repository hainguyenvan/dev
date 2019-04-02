function twoSum(nums, target) {
    let indexs = [];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let checkSum = nums[i] + nums[j];
            if (checkSum === target) {
                indexs.push(i);
                indexs.push(j);
                return indexs;
            }
        }
    }
    return indexs;
}

function twoSumHashTable(nums, target) {
    let hasMap = {};
    let indexs = [];
    nums.forEach((num, index) => {
        hasMap[num] = index
    });
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hasMap[complement] != undefined && hasMap[complement] != i) {
            indexs.push(i);
            indexs.push(hasMap[complement]);
            break;
        }
    }
    return indexs;
}

function twoSumHashTableOnePass(nums, target) {
    let indexs = [];
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hashMap[complement] != undefined) {
            indexs.push(hashMap[complement]);
            indexs.push(i);
            break;
        }
        hashMap[nums[i]] = i;
    }
    return indexs;
}

let nums = [-1, -2, -3, -4, -5];
console.log('indexs: ', towSumHashTableOnePass(nums, -8))