"use client"

import { useState } from "react";

const Info = () => {
    const [data, setData] = useState([])
    const [message, setMessage] = useState<string>("Search patient record with email");
    return (
        <div className="w-full h-full p-10 flex flex-col items-center justify-start bg-gray-50">
            <div className="font-black text-3xl text-gray-800 mb-8">Patients data</div>
            <div className="sm:w-3/6 w-full flex flex-col gap-4">
                <div className="flex flex-row">
                    <input type="email" placeholder="Email" className="outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <button className="px-8 mx-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold">Submit</button>
                </div>
                {data.length > 0 ?
                    <div className="w-full flex flex-col gap-4">
                        <button className="w-full p-4 flex flex-col items-start justify-between rounded-lg shadow bg-white">
                            <div className="font-semibold">Keerthy Suresh - 30F</div>
                            <div className="font-semibold text-gray-400">keerthysuresh@gmail.com</div>
                        </button>
                        {/* Repeat for other files */}
                        <button className="w-full p-4 flex flex-col items-start justify-between rounded-lg shadow bg-white">
                            <div className="font-semibold">Keerthy Suresh - 30F</div>
                            <div className="font-semibold text-gray-400">keerthysuresh@gmail.com</div>
                        </button>
                        <button className="w-full p-4 flex flex-col items-start justify-between rounded-lg shadow bg-white">
                            <div className="font-semibold">Keerthy Suresh - 30F</div>
                            <div className="font-semibold text-gray-400">keerthysuresh@gmail.com</div>
                        </button>
                    </div>
                    : <div className="w-full text-center font-semibold mt-10">{message}</div>}
            </div>
        </div>
    )
}

export default Info;
