"use client"

import { useState } from "react";

const TimelineAdd = () => {
    const [selected, setSelected] = useState<"TREATMENT" | "GENERAL" | "ALLERGIES">("TREATMENT")
    const [files, setFiles] = useState<FileList | null>(null)
    const data_data = ["SUGAR", "BP", "RBC", "WBC", "HB", "PLATLETS", "ESR", "MCV", "HEART RATE", "TSH", "Na", "K", "VIT D", "CHOLOESTROL"];
    return (
        <div className="w-full h-full p-10 flex flex-col items-center justify-start bg-gray-50">
            <div className="font-black text-3xl text-gray-800 mb-8">Checkup details</div>
            <div className="flex flex-row w-full items-center justify-evenly gap-4">
                <button onClick={() => setSelected("TREATMENT")} style={{ background: selected === "TREATMENT" ? "#1d4ed8" : "" }} className="w-1/3 rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                    <div className="p-6 font-semibold"> TREATMENT </div>
                </button>
                <button onClick={() => setSelected("GENERAL")} style={{ background: selected === "GENERAL" ? "#1d4ed8" : "" }} className="w-1/3 rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                    <div className="p-6 font-semibold"> GENERAL </div>
                </button>
                <button onClick={() => setSelected("ALLERGIES")} style={{ background: selected === "ALLERGIES" ? "#1d4ed8" : "" }} className="w-1/3 rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                    <div className="p-6 font-semibold"> CONDITIONS </div>
                </button>
            </div>
            <div className="w-2/4">
                {selected === "TREATMENT" && <div className="w-full h-full py-10 flex flex-col items-center justify-start bg-gray-50">
                    <input type="text" placeholder="Treatment Name" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input type="text" placeholder="Type of visit" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input type="text" placeholder="Condition" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <div className="flex flex-row items-center justify-start w-full gap-x-2">
                        <input type="date" placeholder="In" className="mb-2 w-1/2 outline-none p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                        <input type="date" placeholder="out" className="mb-2 w-1/2 outline-none p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    </div>
                    <textarea placeholder="Problems" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input
                        onChange={(e) => setFiles(e.target.files)}
                        multiple={true} type="file" placeholder="Files" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    {files && (
                        <div className="flex flex-row gap-2">
                            {Array.from(files).map((file) => (
                                <div key={file.name} className="flex flex-col gap-2">
                                    <div className="text-sm bg-white p-5 rounded-md border-2 border-gray-200 font-semibold text-gray-800">{file.name}</div>
                                </div>
                            ))}
                        </div>
                    )}
                    <button className="px-8 my-6 m-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold w-full">Submit</button>
                </div>}
                {selected === "GENERAL" && <div className="w-full h-full py-10 flex flex-col items-center justify-start bg-gray-50">
                    <div className="overflow-scroll h-[600px]">
                        {data_data.map((data) => (
                            <input type="number" placeholder={data} className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                        ))}
                    </div>
                    <button className="px-8 my-6 m-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold w-full">Submit</button>
                </div>}
                {selected === "ALLERGIES" && <div className="w-full h-full py-10 flex flex-col items-center justify-start bg-gray-50">
                    <input type="text" placeholder="Conditions" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <select className="outline-none w-full p-4 border-2 mb-4 rounded-lg border-gray-200 shadow bg-white">
                        <option value="doctor">HIGH</option>
                        <option value="doctor">NORMAL</option>
                        <option value="doctor">LOW</option>
                    </select>
                    <input type="date" placeholder="out" className="mb-2 w-full outline-none p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <button className="px-8 my-6 m-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold w-full">Submit</button>
                </div>}
            </div>
        </div>
    )
}

export default TimelineAdd;
