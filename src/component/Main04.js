import styles from './Main04.module.css'
import { useState } from "react";

export default function Main04() {
    const[number, setNumber] = useState(1);
    return(
        <div id={styles.container}>
           <h1>Root : {number}</h1>
           <div id={styles.grid}>
               {/* 변수값을 전달하기 위해서 props를 사용하자  */}
               {/* props란 컴포넌트에 속성 */}
                <Left1 number={number} />
                <Right1 plus={()=>{
                    setNumber(number+1);
                }}  />
           </div>
        </div>
    );
}

function Left1(props) {
    return(
        <div>
            <h1>Left1 </h1>
            <Left2 number={props.number} />
        </div>
    );
}

function Left2(props) {
    return(
        <div>
            <h1>Left2  </h1>
            <Left3 number={props.number} />
        </div>
    );
}

function Left3(props) {
    return(
        <div>
            <h1>Left3 : {props.number} </h1>
        </div>
    );
}

function Right1(props) {
    return(
        <div>
            <h1>Right1</h1>
            <Right2 plus={()=>{
                props.plus();
            }}/>
        </div>
    );
}
function Right2(props) {
    return(
        <div>
            <h2>Right2</h2>
            <Right3 plus={()=>{
                props.plus();
            }} />
        </div>
    );
}
function Right3(props) {
    return(
        <div>
            <h2>Right3</h2>
            <input type='button' value='+'  onClick={()=>{
                // 바로 사용할 수 없다.
                // setNumber(number++);
                // plus() 함수 호출 
                props.plus();
            }} />
        </div>
    );
}