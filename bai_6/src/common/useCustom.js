import {useState} from "react";

export function useCustom(amount, init) {

    const [count, setCount] = useState(init);

    function increase() {
        setCount(count + amount);
    }

    return [count, increase]
}