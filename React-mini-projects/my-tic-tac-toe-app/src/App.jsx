import './App.css'
import Board from './component/Board'
import Header from './component/Header'
import ScoreTracker from './component/ScoreTracker'
import TurnIndicater from './component/TurnIndicater'

function App() {


  return (
    <>
      <Header />
      <TurnIndicater />
      <Board />
      <ScoreTracker />
    </>
  )
}

export default App
