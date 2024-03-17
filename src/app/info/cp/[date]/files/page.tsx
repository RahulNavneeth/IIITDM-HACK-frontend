"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js'
import { Spinner } from "@material-tailwind/react";

const MedicalFiles = () => {
    const s = useParams();
    const date = s["date"]
    const [_data, setData] = useState<Array<any>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const supabase = createClient("https://qjpneuwevwrxutoruzkr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqcG5ldXdldndyeHV0b3J1emtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0ODg2NTAsImV4cCI6MjAyNjA2NDY1MH0.81hUqF6RXFOQv9jJuP40j_Q6mG2nbOPb30TsHY1RBu4");
    useEffect(() => {
        const GET = async () => {
            const { data } = await supabase
                .storage
                .from('EHR')
                .list(`${date}`, {
                    limit: 1000
                })
            setData(data || [])
        }
        GET();
    }, [])
    const handleDownload = async (file_name: string) => {
        setLoading(true)
        try {
            const { data } = await supabase
                .storage
                .from('EHR')
                .download(`${date}/${file_name}`);
            const url = URL.createObjectURL(data || new Blob())
            const a = document.createElement('a')
            a.href = url
            a.download = 'Employee.pdf'
            document.body.appendChild(a)
            a.click()
            a.remove()
        } catch (e) {
            //
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="w-full h-full p-10 flex flex-col items-center justify-start bg-gray-50">
            <div className="font-black text-3xl text-gray-800 mb-8">Medical Files ({date})</div>
            <div className="sm:w-3/6 w-full flex flex-col gap-4">
                {_data.map((file, index) => (
                    <div key={index} className="w-full p-4 flex flex-row items-center justify-between rounded-lg shadow bg-white">
                        <div className="font-semibold">{file["name"]}</div>
                        <button onClick={() => handleDownload(file["name"])} className="px-4 py-2 rounded bg-blue-500 flex flex-col items-center justify-center hover:bg-blue-600 text-white font-bold">{loading ? <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" /> : "Download"}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MedicalFiles;
