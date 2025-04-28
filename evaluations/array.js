function solve(N, arr) {
    let array = {};
    
    // Loop through the array
    for (let i = 0; i < N; i++) { // Start at i = 0
      array[arr[i]] = (array[arr[i]] || 0) + 1; // Increment the count of the number
      
      // Check if any number appears more than N / 2 times
      if (array[arr[i]] > N / 2) {
        console.log("YES");
        return;
      }
    }
    
    console.log("NO");
  }
  
  // Test cases
  solve(5, [1, 2, 2, 2, 2]); // Output: YES
  solve(5, [1, 2, 2, 3, 3]); // Output: NO
  