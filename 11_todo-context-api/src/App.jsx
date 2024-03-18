import { useContext, useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now, ...todo }, ...prevTodos])
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((singleTodo) => singleTodo.id === id ? todo : singleTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((singleTodo) => singleTodo.id !== id))
  }

  const completedTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((singleTodo) => singleTodo.id === id ? { ...singleTodo, completed: !singleTodo.completed } : singleTodo))
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")); // Use "todos" as the key
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContextProvider value={{ todos, addTodo, updateTodo, deleteTodo, completedTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => 
              <div key={todo.id} className='w-full'> 
                <TodoItem todo={todo}/>
              </div>
            )}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
