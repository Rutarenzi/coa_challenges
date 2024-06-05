const  checkConstraints=(arr, target) =>{
    // Array Length Check
    if (arr.length < 1 || arr.length > 100000) {
        return false;
    }

    // Element Range Check
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < -1000000000 || arr[i] > 1000000000) {
            return false;
        }
    }

    // Target Sum Range Check
    if (target < -1000000000 || target > 1000000000) {
        return false;
    }

    // All checks passed
    return true;
}


const  CheckSubArray=(arr, target) =>{
    let start = 0; // starting point
    let Sum = 0; // Initialize current sum
    
    // Iterate through the array
    if(checkConstraints(arr,target)){
        for (let end = 0; end < arr.length; end++) {
            // Add element at end pointer to current sum
            Sum += arr[end];
            
            // Check if current sum equals target
            if (Sum === target) {
                return true;
            }
            
            // If current sum exceeds target, move start pointer and adjust current sum
            while (Sum > target && start < end) {
                Sum -= arr[start];
                start++;
            }
        }
        
    }
    // If no subarray sums up to target, return false
    return false;
}

// Test the function
const arr = [1];
const target = 1;
console.log(CheckSubArray(arr, target)); // Output: true
