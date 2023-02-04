import axios from "axios"
'use client';
import { useEffect, useState } from "react";


export function useFetch<T = unknown>(url:string){
    const [data, setData] = useState<T | null>(null)

    useEffect(()=> {
        axios.get(url)
        .then((res:any) => {
            setData(res.data);
        })
    })

        return {data}

}