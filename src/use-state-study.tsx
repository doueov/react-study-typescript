import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

interface Person {
    name: string;
    age: number;
}
type PersonOrUndefined = Person | undefined
type PersonOrEmpty = Person | undefined | null
type StringArray = string[]

function UserStatePerson() {
    // const [person, setPerson] = useState<Person | undefined>()
    // const [person, setPerson] = useState<PersonOrUndefined |null>(null)
    const [person, setPerson] = useState<Person | null>(null)

    return <div>
        <button onClick={
            () => {
                setPerson({ name: "John", age: 20 })
            }
        }>사람 만들기</button>
    </div>
}

// 타입스크립트로 바꾸기
const Calculator = function () {
    const [count, setCount] = useState<number>(0)
    const [text, setText] = useState<string>("a")
    return <div>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setText(text + "a")}>a 추가</button>
    </div>
}


root.render(<div>

</div>)