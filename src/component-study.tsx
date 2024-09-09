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
// ?(optional) : 속성 값을 써도 되고 안 써도 됨
interface UserProfileProps {
    name: String,
    age: number,
    address?: String
}

const MyUserProfile: React.FC<UserProfileProps> = (props): JSX.Element => {
    return <div>
        {props.name}
        {props.age}
        {props.address}
    </div>
}

const MyUserProfileDate: any = {
    name: 30, age: "John"
}

const MyUserProfileData2: UserProfileProps = {
    name: "John", age: 30
}

// Q)
interface ProductData {
    id: string;
    manufacturer: string;
}

interface ProductInfoProps {
    num: number;
    product: ProductData;
}

const ProductInfo: ProductInfoProps = {
    num: 1,
    product: { id: "A1234", manufacturer: "Samsung" }
}

interface CalcProp {
    clacFn: (op1: number, op2: number) => number;    // 함수형 타입
    fn?: () => void;
}

// Q) Calculator 컴포넌트를 정의하고, CalcProp을 전달 받도록 코드 작성
function Calculator({ clacFn, fn }: CalcProp) {
    return <div>
        {clacFn(2, 4)}
        <button onClick={fn}>Click</button>
    </div>
}

root.render(<div>
    <MyComponent />
    <MyPropsComponent a={100} b="world" />
    <MyPropsComponent a={100} b="hello" />
    <MyUserProfile name="doyeon" age={19} address="Seoul" />
    <MyUserProfile name="doyeon" age={19} />
    <Calculator clacFn={(a, b) => a+b} />
    <Calculator clacFn={(a, b) => a*b} fn={() => console.log("Hello")}/>

</div>)