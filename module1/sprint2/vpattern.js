function getAsciiArrow(n) {
    let result = '';
  
    // Loop to create the upper part of the arrow
    for (let i = 1; i < n; i++) {
      let leftPadding = ' '.repeat(i);  // Spaces before the backslash
      let middleSpace = ' '.repeat(n-i-1); // Spaces between the slashes
      let line = leftPadding + '\\' + middleSpace + ' /' + '\n'; // Construct one line
      result += line;
    }
  
    // Add the last line with the down arrow part
    result += ' '.repeat(n) + '\\/';
    return result;
  }
  
  // Test with n = 4
  console.log(getAsciiArrow(4));
  
  