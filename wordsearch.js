/*
* Your project - and a brief description of what it does.
*/


/*
*
* Function Name - and a brief description of what it does
*
* @param {string} argument name - information it holds
* @param {string} argument name - information it holds
*
*/


const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    //console.log(horizontalJoin);
    for (let l of horizontalJoin) {
      //console.log(l);
      if (l.includes(word)) return true;
    }
    //return false;
  
    const verticalJoin = [];
  
    // loop through the first set of arrays
    for (let i = 0; i < letters.length; i++) {
      // loop through each element of each array
      for (let j = 0; j < letters[i].length; j++) {
  
        if (!verticalJoin[j]) {
          verticalJoin[j] = [];
        }
        verticalJoin[j][i] = letters[i][j];
      }
    }
  
    const verticalJoin2 = verticalJoin.map(arrs => arrs.join(''));
    console.log(verticalJoin2);
  
    for (let x of verticalJoin2) {
      //console.log(x);
      if (x.includes(word)) return true;
    }
    
    return false;
    //console.log(vertiicalJoin2);
    //console.log(verticalJoin);
  };
  
  wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], "FRANK");
  
  
  module.exports = wordSearch;