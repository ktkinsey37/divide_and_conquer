function sortedFrequency(arr, val) {
    const firstVal = findFirst(arr, val)
    if (firstVal === -1) return firstVal
    const secondVal = findLast(arr, val)
    console.log(firstVal, secondVal, "firstval and second val before return")
    return (secondVal - firstVal) + 1;

}

function findFirst(arr, val, low = 0, high = arr.length-1){
    if (high >= low){
        let mid = low + Math.floor((high - low) / 2)
        if ((arr[mid - 1] < val || mid === 0 )&& arr[mid] === val){
            return mid
        } else if (arr[mid] < val){
            return findFirst(arr, val, mid+1, high)
        }
        return findFirst(arr, val, low, mid-1)
    }
    return -1
}

function findLast(arr, val, low = 0, high = arr.length-1){
    if (high >= low){
        let mid = low + Math.floor((high - low) / 2)
        if ((arr[mid + 1] > val || mid === arr.length-1)&& arr[mid] === val){
            return mid
        } else if (arr[mid] > val){
            return findLast(arr, val, low, mid-1)
        }
        return findLast(arr, val, mid+1, high)
    }
    return -1
}

module.exports = sortedFrequency