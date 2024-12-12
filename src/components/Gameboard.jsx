function Gameboard({ onSelectSquare, board }) {
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
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null ? true : false}
                >
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
