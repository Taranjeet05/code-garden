import './App.css'
import Header from './components/Header'
import Instruction from './components/Instructions'
import Board from './components/Board'
import RollButton from './components/RollButton'


function App() {
  

  return (
    <>
    <div className='text-Black bg-[#F5F5F5]'>
      <Header />
      <Instruction />
      <Board />
      <RollButton />
    </div>
    </>
  )
}

export default App
