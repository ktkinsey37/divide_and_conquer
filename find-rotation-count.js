function findRotationCount(arr, low=0, high=arr.length-1){
    if(high >= low){
        if (high === 1) return 0
        let mid = low + Math.floor((high - low) / 2)
        if (arr[mid] < arr[mid-1]){
            return mid
        } else if (arr[low] > arr[mid]){console.log("stuck here");
            return findRotationCount(arr, low, mid-1)
        } return findRotationCount(arr, mid+1, high)
    }
    return 0
}

module.exports = findRotationCount