import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

interface Todo {
    text: string;
    completed: boolean;
}

function TodoApp() {
    const [todos, setTodos] = useState<Todo[]>([]);
    return <div></div>
}

root.render(<TodoApp />)