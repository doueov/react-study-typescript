import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

interface Todo {
    text: string;
    completed: boolean;
}

type TodoItemProps = {
    todo: Todo;
}

type TodoListProps = {
    todos: Todo[];
    handgleTodoRemove: (todoAdder: number) => void;
}

function TodoItem({ todo }: TodoItemProps) {

}

// TodoList 컴포넌트 정의하고 TodoApp에서 보여주기
function TodoList({ todos }: TodoListProps) {
    return <ul>
        {
            todos.map(todo => <TodoItem todo={todo} />)
        }
    </ul>
}

type TodoAdderProps = {
    handleTodoAdd: (newTodo: Todo) => void;
}

function TodoAdder({ handleTodoAdd }: TodoAdderProps) {
    const [input, setInput] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)
    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        handleTodoAdd({ completed: false, text: input })
        setInput("")
    }


    return <div>
        <input type='text' onChange={handleChange} value={input} />
        <button onClick={handleOnClick}>추가</button>
    </div>
}

function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([
        { completed: false, text: "타입스크립트 공부하기" }
    ]);

    const handleTodoAdd = (newTodo: Todo) => setTodos(todos => todos.concat(newTodo))
    const handleTodoRemove = 

    return <div>
        <TodoAdder handleTodoAdd={handleTodoAdd} />
        <TodoList todos={todos} />
    </div>
}

root.render(<TodoApp />)