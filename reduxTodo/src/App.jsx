import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/appTodo'

function App() {
 
  return (
    <div className='container'>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </div>
  )
}

export default App
