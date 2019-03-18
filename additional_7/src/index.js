module.exports = function solveSudoku(matrix) {
  let toSolveMatrix = matrix;

  function isInRow(row, number) {
    for (let i = 0; i < 9; i++) {
      if (toSolveMatrix[row][i] === number) {
        return true;
      }
    }
    return false;
  }

  function isInCol(col, number) {
    for (let i = 0; i < 9; i++) {
      if (toSolveMatrix[i][col] === number) {
        return true;
      }
    }
    return false;
  }

  function isInBox(row, col, number) {
    let r = row - row % 3;
    let c = col - col % 3;
    for (let i = r; i < r + 3; i++) {
      for (let j = c; j < c + 3; j++) {
        if (toSolveMatrix[i][j] === number) {
          return true;
        }
      }
    }
    return false;
  }

  function isOK(row, col, number) {
    return (!isInRow(row, number) && !isInCol(col, number) && !isInBox(row, col, number));
  }

  function solve() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (toSolveMatrix[row][col] === 0) {
          for (let number = 1; number <= 9; number++) {
            if (isOK(row, col, number)) {
              toSolveMatrix[row][col] = number;
              if (solve()) {
                return true;
              } else {
                toSolveMatrix[row][col] = 0;
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  solve();
  return toSolveMatrix;
};
