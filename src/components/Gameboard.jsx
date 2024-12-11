const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function Gameboard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   const handleGameBoardClick = (rowIndex, colIndex) => {
  //     setGameBoard((prevGameboard) => {
  //       const updatedArray = [
  //         ...prevGameboard.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedArray[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedArray;
  //     });
  //     onSelectSquare();
  //   };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default Gameboard;