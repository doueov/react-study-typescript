import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

function MyComponent() {
    return <div>Hello</div>
}

interface MyPropType {
    a: number,
    b: String
}

const MyPropsComponent: React.FC<MyPropType> = (props): JSX.Element => {
    return <div>{props.a} {props.b}</div>
}

// Q) UserProfile 컴포넌트고 name, age, address를 props로 받아서 출력
interface UserProfileProps {
    name: String,
    age: number,
    address: String
}

const MyUserProfile: React.FC<UserProfileProps> = (props): JSX.Element => {
    return <div>
        {props.name}
        {props.age}
        {props.address}
    </div>
}

root.render(<div>
    <MyComponent />
    <MyPropsComponent a={100} b="world" />
    <MyPropsComponent a={100} b="hello" />
    <MyUserProfile name="doyeon" age={19} address="Seoul" />
</div>)