import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

type Todo = {
    text: string;
    completed: boolean;
}

type TodoItems = Todo[]

type TodoItemProps = {
    todo: Todo;
    idx: number;
    handleTodoStatusToggle: (todoIndex: number) => void;
    handleTodoRemove: (todoIndex: number) => void;
}

type TodoListProps = {
    todos: TodoItems;
    handleTodoStatusToggle: (todoIndex: number) => void;
    handleTodoRemove: (todoIndex: number) => void;
}

type TodoAdderProps = {
    handleTodoAdd: (newTodo: Todo) => void
}

const TodoItem = function ({
    todo: { completed, text },
    idx,
    handleTodoStatusToggle, handleTodoRemove }: TodoItemProps) {
    return (
        <div>
            {/* style로 전달할 수 있는 타입은 (React.CSSProperties | undefined) 타입 */}
            <span style={completed ? { textDecoration: 'line-through' } : undefined}
                onClick={() => handleTodoStatusToggle(idx)}>
                {text}
            </span>&nbsp;
            <button onClick={() => handleTodoRemove(idx)}>삭제</button>
        </div>
    )
}

function TodoList({ todos, handleTodoStatusToggle, handleTodoRemove }: TodoListProps) {
    return <ul>
        {todos.map((todo, index) => <TodoItem todo={todo}
            idx={index}
            handleTodoStatusToggle={handleTodoStatusToggle}
            handleTodoRemove={handleTodoRemove} />
        )}
    </ul>
}

function TodoAdder({ handleTodoAdd }: TodoAdderProps) {
    const [input, setInput] = useState("")
    // 인라인 함수로 정의할 경우, 맥락에 따르는 타입 추론을 해주므로 굳이 타입 신경 안써도 됨
    /*
    return <div>
        <input type='text' onChange={(e) => {
            setInput(e.target.value)
        }} value={input} />
        <button onClick={(e) => {
            handleTodoAdd({ completed: false, text: input })
            setInput("")
        }}>추가</button>
    </div>
    */
    // 아래와 같이 외부 함수로 정의할 경우에는 타입 추론이 불가하므로, 타입을 명시해줘야 함
    // (인라인으로 먼저 정의하고 타입 정보만 알아내고 써주면 됨)
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
    const [todos, setTodos] = useState<TodoItems>([
        { completed: false, text: '리액트 공부하기' },
        { completed: true, text: 'ES6 문법 공부하기' }
    ])

    const handleTodoAdd = (newTodo: Todo) => setTodos(todos => [...todos, newTodo])
    const handleTodoStatusToggle = (todoIndex: number) => {
        setTodos(todos => {
            return todos.map((todo, idx) => {
                if (idx === todoIndex) return { ...todo, completed: !todo.completed }
                return todo
            })
        })
    }
    const handleTodoRemove = (todoIndex: number) => {
        setTodos(todos => { return todos.filter((_, idx) => { return idx !== todoIndex }) })
    }

    return <div>
        <TodoAdder
            handleTodoAdd={handleTodoAdd} />
        <TodoList todos={todos}
            handleTodoStatusToggle={handleTodoStatusToggle}
            handleTodoRemove={handleTodoRemove} />
    </div>
}

root.render(<TodoApp />)