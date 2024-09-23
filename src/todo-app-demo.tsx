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
    todos: Todo[]
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

function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([
        { completed: false, text: "타입스크립트 공부하기" }
    ]);
    return <div>
        <TodoList todos={todos} />
    </div>
}

root.render(<TodoApp />)