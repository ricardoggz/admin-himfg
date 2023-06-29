import { useState, useEffect } from "react"
import axios from "axios"

const BASE_URL = 'https://courses-rest-api-hospital.vercel.app/'
export const useFetch=({url})=>{
    const [courses, setCourses] = useState(null)
    const [isLoading, setIsloading] = useState(true)
    const getData = async()=>{
        try {
            const response = await axios.get(url)
            if(response.status ===200) {
                setIsloading(false)
            }
            setCourses(response.data)
        } catch (error) {
            throw new Error(error)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return [courses, isLoading]
}