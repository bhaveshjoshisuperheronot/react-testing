import { useState } from "react"
import { UseCounterProps } from "./useCounter.types";


export const useCounter = ({intialCount = 0}: UseCounterProps = {}) => {
    const [count, setCount] = useState(intialCount);
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    return {count, increment, decrement}
}