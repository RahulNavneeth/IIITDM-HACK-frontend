"use client"

import { useParams } from "next/navigation"

const MedicalFiles = () => {
    const s = useParams();
    const id = s["id"]
    const date = s["date"]
    console.log(id, date);
    return (
        <div className="w-full h-full p-10 flex flex-col items-center justify-start bg-gray-50">
            <div className="font-bold text-3xl text-gray-800 mb-8">Medical Files ({date})</div>
            {/* Files List */}
            <div className="w-full flex flex-col gap-4">
                {/* File Item */}
                <div className="w-full p-4 flex flex-row items-center justify-between border-2 rounded-lg border-gray-200 shadow bg-white">
                    <div className="font-semibold">File Name 1.pdf</div>
                    <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold">Download</button>
                </div>
                {/* Repeat for other files */}
                <div className="w-full p-4 flex flex-row items-center justify-between border-2 rounded-lg border-gray-200 shadow bg-white">
                    <div className="font-semibold">File Name 2.pdf</div>
                    <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold">Download</button>
                </div>
                <div className="w-full p-4 flex flex-row items-center justify-between border-2 rounded-lg border-gray-200 shadow bg-white">
                    <div className="font-semibold">Blood Test Results.jpg</div>
                    <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold">Download</button>
                </div>
                {/* Add more files as needed */}
            </div>
        </div>
    )
}

export default MedicalFiles;
