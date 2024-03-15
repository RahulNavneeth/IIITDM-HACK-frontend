"use client"

import { useParams } from "next/navigation"

const Timeline = () => {
    const s = useParams();
    const id = s["id"]
    console.log(id);
    return (
        <div className="w-full h-full p-10 flex flex-col items-center justify-start bg-gray-50">
            <div className="font-bold text-3xl text-gray-800 mb-8"> TIMELINE </div>
            <div className="w-full h-px bg-gray-200 mb-6"></div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full mt-6">
                    <div className="flex flex-row w-full gap-4">
                        <div className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-white">
                            <div className="font-bold text-lg">69/69/69 - 420/420/420</div>
                        </div>
                        <div className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-white"> DOCTOR DETAILS </div>
                        <div className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-white"> REASON </div>
                    </div>
                    <div className="flex flex-row w-full gap-4 mt-4">
                        <div className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-white"> SUMMARY </div>
                        <div className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-white"> PATIENT DISEASES AND ALLERGIES, OTHER INFO </div>
                        <button className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-blue-500 hover:bg-blue-600 text-white font-bold"> FILES & DATA </button>
                    </div>
                    <div className="w-full h-px bg-gray-200 my-6"></div>
                </div>
                <div className="flex flex-col w-full mt-6">
                    <div className="flex flex-row w-full gap-4">
                        <div className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-white">
                            <div className="font-bold text-lg">69/69/69 - 420/420/420</div>
                        </div>
                        <div className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-white"> DOCTOR DETAILS </div>
                        <div className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-white"> REASON </div>
                    </div>
                    <div className="flex flex-row w-full gap-4 mt-4">
                        <div className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-white"> SUMMARY </div>
                        <div className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-white"> PATIENT DISEASES AND ALLERGIES, OTHER INFO </div>
                        <button className="w-1/3 h-[150px] flex flex-col items-center justify-center border-2 rounded-lg border-gray-200 shadow bg-blue-500 hover:bg-blue-600 text-white font-bold"> FILES & DATA </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;
