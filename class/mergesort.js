// function mergeSort(array) {
//     // Base case: array with 1 element is already sorted
//     if (array.length <= 1) {
//       return array;
//     }
  
//     // Split the array into two halves
//     const mid = Math.floor(array.length / 2);
//     const left = array.slice(0, mid);
//     const right = array.slice(mid);
  
//     // Recursively split and merge
//     return merge(mergeSort(left), mergeSort(right));
//   }
  
//   function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
  
//     // Merge the two arrays in sorted order
//     while (leftIndex < left.length && rightIndex < right.length) {
//       if (left[leftIndex] < right[rightIndex]) {
//         result.push(left[leftIndex]);
//         leftIndex++; // Move left array pointer
//       } else {
//         result.push(right[rightIndex]);
//         rightIndex++; // Move right array pointer
//       }
//     }
  
//     // Concatenate any remaining elements from left and right arrays
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
//   }
  
//   // Example usage
//   const array = [38, 27, 43, 3, 9, 82, 10];
//   console.log("Original array:", array);
//   const sortedArray = mergeSort(array);
//   console.log("Sorted array:", sortedArray);
  

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index of the target element
      }
    }
    return -1; // Return -1 if the target is not found
  }
  
  // Example usage:
  const array = [10, 20, 30, 40, 50];
  const targetValue = 30;
  
  const result = linearSearch(array, targetValue);
  
  if (result !== -1) {
    console.log(`Element found at index: ${result}`);
  } else {
    console.log("Element not found in the array.");
  }


  function linearSearch(arr,target){
    for (let i=0;i<arr.length; 1++){
        if (arr[i]===target){
            return i;
        }
    }
    return -1;
  }