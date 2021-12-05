// let arr = [3,4,1,2]

function findRotatedIndex(arr, val) {
    let workingArr = [...arr];
    let newArr = [];
    let startingIdx = findStart(workingArr);
    newArr.push(...workingArr.slice(startingIdx));
    newArr.push(...workingArr.splice(0, startingIdx));

    const res = search(newArr, val)
    if (res === -1) return -1;
    const offset = res+startingIdx
    if (offset > arr.length - 1){
        return offset % arr.length
    } return offset
}

function search(arr, val, low=0, high=arr.length-1){
    if (high >= low){
        let mid = low + Math.floor((high - low)/2)
        if (arr[mid] === val){
            return mid;
        } else if (arr[mid] < val){
            return search(arr, val, mid+1, high)
        } return search(arr, val, low, mid-1)
    }
    return -1
}


function findStart(arr, low = 0, high = arr.length-1){
    if (arr.length === 0) return -1
    while (low < high){
        if (arr[low] > arr[low+1]){
            return low+1
        } low += 1;
    }

}

module.exports = findRotatedIndex