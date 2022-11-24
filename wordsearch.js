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
    for (let l of horizontalJoin) {
      if (l.includes(word)) return true;
    }
  
    const verticalJoin = [];
  
    for (let i = 0; i < letters.length; i++) {
      for (let j = 0; j < letters[i].length; j++) {
  
        if (!verticalJoin[j]) {
          verticalJoin[j] = [];
        }
        verticalJoin[j][i] = letters[i][j];
      }
    }
  
    const verticalJoin2 = verticalJoin.map(arrs => arrs.join(''));
  
    for (let x of verticalJoin2) {
      if (x.includes(word)) return true;
    }
    
    return false;
  };
  
  module.exports = wordSearch;