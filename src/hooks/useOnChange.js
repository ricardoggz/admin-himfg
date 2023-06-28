import { useState } from "react"

export const useOnChange = ()=>{
    const [inputData, setInputData] = useState(null)

    const onChange = (evt)=> setInputData({
        ...inputData,
        [evt.target.name]: evt.target.value
    })

    const onReset = ()=> setInputData(null)

    return {inputData, onChange, onReset}
}