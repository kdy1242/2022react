import React from "react";
import ReactDOM from "react-dom";

// const ComponentWithProps = function(props) {
//     console.log(props)
//     return <p>{JSON.stringify(props)}</p>
// }


// 배열 비구조화 할당
const arr = [100, 200];
const [ v1, v2 ] = arr;
// const v1 = arr[0]
// const v2 = arr[1]
const [ v3 ] = arr;

// 객체 비구조화 할당
const user = { name: "John", age: 20 }
//const { name, age } = user;
// const name = user.name;
// const age = user.age;

const name = "Hello";
const { nmae: n, age } = user;

function f({ name, age }) {
    console.log(name, age);
}

function f2(user) {
    const name = user.name;
    const age = user.age;
    console.log(name, age);
}

function Greeting(props) {
    return <h1>Hello, {props.name}</h1>
}

function Sum(props) {
    const { x, y } = props
    return <h1>{x + y}</h1>
}

// 함수 인자값을 전달받으면서 비구조화 할당 진행
const PersonProfile = function(props) {
    const { name, age, gender, profile, highlight } = props.person

    return (
        <div className='person' style={props.highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}

ReactDOM.render(
    <div>
        <PersonProfile name='John' age={35} gender='male'
            profile='https://randomuser.me/api/portraits/men/75.jpg' />
        <PersonProfile {...anotherPerson} highlight />
    </div>, document.getElementById('root'))