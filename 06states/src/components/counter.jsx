import { useState } from "react"

function Counter(){
    const [count,setCount] = useState(0);

    function addBtn(e){
        e.stopPropagation()
        setCount((prev)=>{
            return prev+1;
        })
    }
    function subBtn(e){
        e.stopPropagation()
        setCount((prev)=>{
            return prev-1;
        })
    }

    return  (
        <>
            <div>
                count is:{count}
            </div>
            <button onClick={addBtn}>+1</button>
            <button onClick={subBtn}>-1</button>
        </>
    )
}
export default Counter