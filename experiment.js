var containsDuplicate = function(nums) {
  let seen = new Set()

  for (let num of nums) {
    if (seen.includes(num)) return true
    seen.push(num)
  }
return false
};

console.log(containsDuplicate([3,3]))
//console.log(containsDuplicate([1,2,3,1]))
//console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
//console.log(containsDuplicate([1,2,3,4,5,6,7,8]))