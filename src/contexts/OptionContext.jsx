import { createContext, useState, useEffect } from "react"

export const OptionContext = createContext()

export const OptionProvider = ({children})=>{
    const [options, setOptions] = useState([])

    const addOption = ({option_name, option_value})=>{
        setOptions(options.concat([
            {
                option_name: option_name,
                option_value:option_value
            }
        ]))
    }

    const editOption = ({index, newElement})=>{
        setOptions(options.splice(index, 1, newElement))
    }

    const deleteOption = ({index})=>{
        setOptions(options.splice(index, 1))
    }
    return (
        <OptionContext.Provider value={{options, editOption, addOption, deleteOption}}>
            {children}
        </OptionContext.Provider>
    )
}