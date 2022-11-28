
let twoSum = function(nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return  [i, j]
            }
        }
    }
}






let isPalindrome = function(x) {

    let a = x.toString().split('').reverse('').join('');

    if (x < 0) {
        return false
    }
   else if ( x < 10) {
       return true
    }
   else if (x % 10 === 0) {
       return false
    }
   else if ( x == a.toString()) {
       return true
    }

   else return 1 === x;


};





let romanToInt = function (s) {

    let symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900

    }
    let result = 0;

    for (let i = 0; i < s.length; i++) {

        if (symbols[s[i]] < symbols[s[i + 1]]) {
            result -= symbols[s[i]]
        }
         if (symbols[s[i]] > symbols[s[i+1]]){
        result -= symbols[s[i]]}

    }

    return result
}
console.log(romanToInt(s = "XIX"))

