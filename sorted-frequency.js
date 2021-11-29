function sortedFrequency(arr, val) {
    let startingIdx
    let endingIdx
    let leftIdx = 0
    let rightIdx = arr.length - 1
    while (leftIdx < rightIdx){
        let middleIdx = Math.floor(leftIdx + rightIdx / 2)
          if (arr[middleIdx] == val && arr[middleIdx - 1] < val){
              startingIdx = middleIdx
          } else if (arr[middleIdx] == val && arr[middleIdx + 1] > val) {
              endingIdx = middleIdx - 1
          } else if (arr[middleIdx] < val) {
              rightIdx = middleIdx - 1
          } else if (arr[middleIdx] > val) {
              leftIdx = middleIdx + 1
          }
      }
      return(endingIdx-startingIdx)

}

module.exports = sortedFrequency