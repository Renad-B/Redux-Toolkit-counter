import {useDispatch, useSelector} from "react-redux";
import { decrement, increment, reset } from '../counterSlice';
import { RootState } from "../../store";


const Counter =()=> {
   console.log("meow");
    const count = useSelector((state: RootState)=> state.counterR.count);
    const dispatch=useDispatch();
    console.log("cat");
    const handleIncrement=()=>{
        dispatch(increment());
    };

    const handleReset=()=>{
        dispatch(reset());
    };

    const handleDecrement=()=>{
        dispatch(decrement());
    };

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleReset}>0</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default Counter;