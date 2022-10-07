import React from 'react'
import Board from '../components/Board'
import BoardData from '../components/BoardData'
export default function App() {
  const [boardGame,setBoardGame] = React.useState(BoardData)

  const spaceColor = (space,color) => {
    return {backgroundColor: color}
  }

  const board = boardGame.data.boardSpaces.map(boardSpace => {
      return (
        <section className="board-space">
            <div style={spaceColor(boardSpace.space,boardSpace.color)} className="color-box"></div>
            <Board
              key={boardSpace.id}
              id={boardSpace.id}
              space={boardSpace.space}
              name={boardSpace.name}
              value={boardSpace.value}
              color={boardSpace.color}
          />
        </section>
      )
  })
  


  return (
    <main className="board">
      {board}
    </main>
  )
}

