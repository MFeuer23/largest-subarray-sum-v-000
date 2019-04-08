function largestSubarraySum (arr) {
  let subArr = arr.slice(0, arr.indexOf(Math.min(...arr)))
  console.log(subArr)
}