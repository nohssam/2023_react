import dummy from "../db/data.json";

export default function DayList() {
    // console.log(dummy);
    // json 같은 반복 처리 할때는 주로 map를 사용
    return(
            <ul className="list_day">
                {dummy.days.map(k => (
                    <li key={k.id}> Day {k.day} </li>
                ))}
            </ul>    
        );
}