function countZeroes(arr) {
  let leftIdx = 0
  let rightIdx = arr.length - 1
  while (leftIdx < rightIdx){
      let middleIdx = Math.floor(leftIdx + rightIdx / 2)
        if (arr[middleIdx] == 0 && arr[middleIdx - 1] == 1){
            let firstZeroIdx = middleIdx
        } else if (arr[middleIdx] == 1 && arr[middleIdx + 1] == 0) {
            let firstZeroIdx = middleIdx - 1
        } else if (arr[middleIdx - 1] == 0) {
            rightIdx = middleIdx - 1
        } else if (arr[middleIdx + 1] == 1) {
            leftIdx = middleIdx + 1
        }
    }
    return(arr.length - firstZeroIdx)
}

module.exports = countZeroes