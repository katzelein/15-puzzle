// 15 Puzzle Game Logic                                   ]

let width = 3, height = 3, inPlay = [], innerBoard = '';

// Create the gameboard upon loading the page
const buildInnerBoard = () => {
  for (let x = 0; x < height; x++) {
    innerBoard += createRow(x);
    for (let y = 0; y < width; y++) {
      let newTile = createTile(x,y);
      innerBoard += newTile;
    }
    innerBoard += "</tr>";
  }
  attachBoard();
}

const createHTMLBoard = () => {
  let newBoard = document.createElement('tbody')
  newBoard.setAttribute('id', 'game-board')
  return newBoard;
}

const attachBoard = () => {

  let gameBoard;
  let mainCanvas = document.getElementById('board');

  if (!document.getElementById('game-board')) {
    gameBoard = createHTMLBoard()
    gameBoard.innerHTML = innerBoard;
    mainCanvas.appendChild(gameBoard);
  }
  else {
    gameBoard = document.getElementById('game-board')
    gameBoard.innerHTML = null;
    gameBoard.innerHTML = innerBoard;
    mainCanvas.replaceChild(document.getElementById('game-board'), gameBoard)
  }
  var cells = document.getElementsByTagName('td')
  Array.prototype.forEach.call(cells, function(cell) {
    cell.addEventListener('click', cellClick.bind(this))
  });
  document.getElementById('reset').addEventListener('click', buildInnerBoard)
}

const createRow = (x) => {
  return "<tr id='row" + x + "'>";
}

const renderFromScratch = () => {
  const board = generateRandomBoard();
  renderBoard(board);
}

const renderBoard = (document, board) => {
  const boardTable = document.createElement("table")

  boardTable.innerHTML = board.map((row, yIndex) => {
    const row = document.createElement("tr")
    row.innerBoard = row.map((cellValue, xIndex) => {
      const cell = document.createElement("td")
      cell.textContent = cellValue
      cell.addEventListener((evt) => {
        const newBoard = shiftCell(board, cellValue)
        renderBoard(newBoard)
      })
      return cell;
    })
    return row;
  })

  document.getElementById("board").innerHTML = boardTable;
}

const createTile = (x, y) => {
  const td = document.createElement("td")
  const cellType = num === (width * height) ? 'empty' : 'full';
  td.setAttribute("class", cellType)
  td.addEventListener((evt) => {cellClick(x, y)})

  // let tile;
  // let num = assignNumber();
  // let cellType = num === (width * height) ? 'empty' : 'full';
  // tile = "<td class='" + cellType + "' id='" + x + "-" + y + "'>" + num + "</td>";
  // return tile;

}

const assignNumber = () => {
  let max = width * height;
  let num = Math.floor(Math.random() * max) + 1;
  while(inPlay.length < max) {
    if (inPlay.indexOf(num) === -1) {
      inPlay.push(num);
      return num;
    }
    else return assignNumber();
  }
  return num; //TODO: included for test purposes, remove when done
}

// this returns an array of subarrays containing the ids to have their textContent's switched and to what numbers
const cellClick = (evt) => {
  let clickedId = evt.target.id;
  let clickedText = parseInt(evt.target.textContent);
  let emptyCell = document.getElementsByClassName('empty')
  let emptyId = emptyCell[0].id
  let emptyText = parseInt(emptyCell[0].textContent)
  const rowIdx = 0;
  const colIdx = 2;
}

const isEmpty = (board) => board.length === 0;
const colLength = (board) => board[0].length;
const rowLength = (board) => board.length;

const shiftCell = (board, cell) => {
  // find max value
  // if it's in the same row or same column, switch their values
  if (isEmpty(board)) {
    return [];
  } else if (colLength(board) === 1 && rowLength(board) === 1) {
    return board;
  } else {
    // getIndexOfEmptyCell(board)
    // getIndexOfCell(board, cell)

    // updateValueOfCellAtIndex(index, newValue)
    // swapCells(board, index1, index2)

    // const newFullCell = Math.max.apply(null, board[0])
    // const newEmptyCell = cell;
    // return [[newFullCell, newEmptyCell]]
  }
}

//   let diff, direction;

//   if (clickedId[rowIdx] === emptyId[rowIdx]) {
//     diff = Math.abs(clickedId[colIdx] - emptyId[colIdx]);
//     direction = 'row'
//   }
//   else if (clickedId[colIdx] === emptyId[colIdx]) {
//     diff = Math.abs(clickedId[rowIdx] - emptyId[rowIdx]);
//     direction = 'col'
//   }
//   if (diff === 1) {
//     tradeCells(diff, direction, clickedText, clickedId, emptyText, emptyId);
//   }
// } 

const tradeCells = (diff, dir, clickedTxt, clickedId, emptyTxt, emptyId) => {
  if (diff === 1) {
    let firstIdx = inPlay.indexOf(clickedTxt)
    let secondIdx = inPlay.indexOf(emptyTxt)

    inPlay[firstIdx] = emptyTxt;
    inPlay[secondIdx] = clickedTxt;
    renderNewBoard();
  }
  // else {
  //   var cellsToChange = [];
  //   var cells = Array.from(document.getElementsByTagName('td'))
  //   cells.forEach(cell => {
  //     if (dir === 'row' && cell.id[0] === emptyId[0]) {
  //       cellsToChange.push()
  //     }
  //   })
  // }
}

const renderNewBoard = () => {
  var cells = Array.from(document.getElementsByTagName('td'))
  cells.forEach((cell,i) => {
    cell.textContent = inPlay[i];
    if (cell.getAttribute('class', 'empty')) cell.setAttribute('class', 'full')
    if (cell.textContent === (width*height).toString()) cell.setAttribute('class', 'empty')
  })
}

// buildInnerBoard();