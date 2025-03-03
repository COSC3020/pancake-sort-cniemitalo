function flip(array, n) {
    var reverseSection = array.slice(0, n);
    var left = 0; 
    var right = reverseSection.length - 1; 

    while (left < right) {
        var temp = array[left]; 
        array[left] = array[right]; 
        array[right] = temp; 
        left++; 
        right--; 
    }

    return array;
}

//find the index of the largest element 
//within a section of n elements 
function findMax(array, n) {
    var max = 0; 
    for (var i = 0; i < n; i++) {
        if (array[i] > array[max]) {
            max = i; 
        }
    }
    return max; 
}


// Use only flip() here to manipulate the array
function pancakeSort(array) {
    var n = array.length; 
    //iterate backwards through the array, sorting 
    //the largest elements into their correct positions
    for (var i = n; i > 1; i--) {
        var max = findMax(array, i); 
        //move the max if it's not at the end 
        //it's already sorted in correct position
        if (max !== i - 1) {
            //move if not at the start 
            //it'll get sorted in the next flip
            if (max !== 0) {
                //reverse the array so max is first element 
                flip(array, max + 1); 
            }
            //reverse unsorted parts to move max to it's 
            //correct position
            flip(array, i); 
        }
    }
    return array;
}
