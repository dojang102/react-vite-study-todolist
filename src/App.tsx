import TodoHeader from "./components/TodoHeader"
import TodoEditor from "./components/TodoEditor"
import TodoList from "./components/TodoList"

function App() {
  return (
    <>
    <div className="todo">
      <TodoHeader />
      {/* 할 일 등록 */}
      <TodoEditor />
      {/* 할 일 목록 */}
      <TodoList />
    </div>
    </>
  )
}

export default App
