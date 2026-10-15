import { useState } from "react"
import { Header } from "./components/Header"
import { TodoFilter } from "./components/TodoFilter"
import { TodoFooter } from "./components/TodoFooter"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import "./index.css"

// Начальные данные для демонстрации UI
const INITIAL_TODOS = [
  { id: 1, text: "Изучить React", completed: true },
  { id: 2, text: "Выполнить контрольную работу", completed: false },
  { id: 3, text: "Прочитать документацию", completed: false },
]

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS)
  const [inputValue, setInputValue] = useState("")
  const [filter, setFilter] = useState("all")

  // TODO: реализовать добавление задачи
  function handleAdd() {}

  // TODO: реализовать переключение статуса задачи
  function handleToggle(id) {}

  // TODO: реализовать удаление задачи
  function handleDelete(id) {}

  // TODO: реализовать очистку выполненных задач
  function handleClearCompleted() {}

  // TODO: реализовать фильтрацию — сейчас возвращаются все задачи
  const filteredTodos = todos

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4">
      <div className="max-w-md mx-auto">
        <Header />

        <TodoInput value={inputValue} onChange={setInputValue} onAdd={handleAdd} />

        <TodoFilter activeFilter={filter} onFilterChange={setFilter} />

        <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />

        <TodoFooter activeCount={activeCount} completedCount={completedCount} onClearCompleted={handleClearCompleted} />
      </div>
    </div>
  )
}

export default App
