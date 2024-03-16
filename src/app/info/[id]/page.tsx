"use client"
import { useParams } from "next/navigation"
import { useState } from "react";

const Patient = () => {
    const s = useParams();
    const [select, setSelect] = useState<"TREATMENTS" | "ALLERGIES" | "DATA" | "GRAPH" | "FILES">("GRAPH");
    const data_data = ["SUGAR", "BP", "RBC", "WBC", "HB", "PLATLETS", "ESR", "MCV", "HEART RATE", "TSH", "Na", "K", "VIT D", "CHOLOESTROL"];
    const id = s["id"]
    console.log(id);

    return (
        <div className="w-full h-full flex flex-col items-center justify-start p-10">
            <div className="w-full flex flex-col sm:flex-row items-start justify-between">
                <div className="w-full sm:w-2/6 flex flex-col items-center justify-center">
                    <img className="object-cover rounded-full w-[200px] h-[200px] shadow-lg" alt="patient-profile-picture"
                        src="https://assets.shortpedia.com/uploads/2021/04/15/1618470640.jpg" />
                    <button className="mt-4 underline text-blue-600 hover:text-blue-800"> Edit </button>
                </div>
                <div className="rounded-md w-full sm:w-4/6 p-6 bg-white shadow-md">
                    <div className="font-black text-2xl text-gray-800"> GENERAL INFORMATION </div>
                    <div>
                        <div className="flex flex-row items-center justify-start mt-4">
                            <div className="font-bold"> NAME: </div>
                            <div className="ml-2 text-gray-700"> Keerthy Suresh </div>
                        </div>
                        <div className="w-full flex flex-row flex-wrap">
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> AGE: </div>
                                <div className="ml-2 text-gray-700"> 30 </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> GENDER: </div>
                                <div className="ml-2 text-gray-700"> Female </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> DOB: </div>
                                <div className="ml-2 text-gray-700"> 69/69/69 </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row flex-wrap">
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> WEIGHT: </div>
                                <div className="ml-2 text-gray-700"> 🌝 </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> HEIGHT: </div>
                                <div className="ml-2 text-gray-700"> 🌚 </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> BMI: </div>
                                <div className="ml-2 text-gray-700"> XXX </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-2">
                            <div className="font-bold"> ADDRESS: </div>
                            <div className="ml-2 text-gray-700"> Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-start mt-10 bg-gray-100 p-4 rounded-md shadow-lg">
                <div className="font-black text-2xl text-gray-800 mb-4"> MEDICAL INFORMATION </div>
                <div className="w-full h-full flex flex-col md:flex-row">
                    <div className="w-full md:w-2/6 h-full justify-evenly flex flex-col">
                        <button onClick={() => setSelect("GRAPH")} className="rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                            <div className="p-6 font-semibold"> GRAPH </div>
                        </button>
                        <button onClick={() => setSelect("TREATMENTS")} className="rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                            <div className="p-6 font-semibold"> TREATMENTS </div>
                        </button>
                        <button onClick={() => setSelect("ALLERGIES")} className="rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                            <div className="p-6 font-semibold"> CONDITIONS </div>
                        </button>
                        <button onClick={() => setSelect("DATA")} className="rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                            <div className="p-6 font-semibold"> DATAS </div>
                        </button>
                        <button onClick={() => setSelect("FILES")} className="rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                            <div className="p-6 font-semibold"> ALL MEDICAL FILES </div>
                        </button>
                    </div>
                    <div className="w-full md:w-4/6 ml-0 md:ml-4">
                        {select === "GRAPH" && <div className="w-full h-full bg-white p-6 rounded-md shadow-md">
                            <div className="font-black text-2xl text-gray-800 mb-4"> GRAPH </div>
                            <div className="w-full h-[400px] md:h-[90%] bg-gray-300 rounded-md"></div>
                        </div>}
                        {select === "TREATMENTS" && <div className="w-full h-full bg-white p-6 rounded-md shadow-md">
                            <div className="font-black text-2xl text-gray-800 mb-4"> TREATMENTS </div>
                            <div className="h-[400px] overflow-scroll">
                                <table cellPadding={10} className="w-full">
                                    <tr className="bg-gray-200 border-[2px] border-black">
                                        <th className="text-center">Treatment</th>
                                        <th className="text-center">Type</th>
                                        <th className="text-center">Condition</th>
                                    </tr>
                                    {Array(15).fill(0).map((_, i) => (
                                        <tr style={{ background: i % 2 ? "#f1f5f9" : "white" }} className="border-[2px] border-black">
                                            <td className="text-center">Treatment {i + 1}</td>
                                            <td className="text-center">Office visit</td>
                                            <td className="flex flex-col items-center justify-center"><div className="w-[20px] h-[20px] rounded-full bg-red-400" /></td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                            <a href={id + "/timeline"}><button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold mt-10">View timeline</button></a>
                        </div>}
                        {select === "ALLERGIES" && <div className="w-full h-full bg-white p-6 rounded-md shadow-md">
                            <div className="list-decimal font-black text-2xl text-gray-800 mb-4"> CONDITIONS </div>
                            <div className="h-[450px] overflow-scroll">
                                <table cellPadding={10} className="w-full">
                                    <tr className="bg-gray-200 border-[2px] border-black">
                                        <th className="text-center">Type</th>
                                        <th className="text-center">Onset Date</th>
                                        <th className="text-center">Severity</th>
                                    </tr>
                                    {Array(15).fill(0).map((_, i) => (
                                        <tr style={{ background: i % 2 ? "#f1f5f9" : "white" }} className="border-[2px] border-black">
                                            <td className="text-center">Type {i + 1}</td>
                                            <td className="text-center">Onset Date {i + 1}</td>
                                            <td className="flex flex-col items-center justify-center"><div className="w-[20px] h-[20px] rounded-full bg-red-400" /></td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>}
                        {select === "DATA" && <div className="w-full h-full bg-white p-6 rounded-md shadow-md">
                            <div className="list-decimal font-black text-2xl text-gray-800 mb-4"> DATAS </div>
                            <div className="h-[450px] overflow-scroll">
                                <table cellPadding={10} className="w-full">
                                    <tr className="bg-gray-200 border-[2px] border-black">
                                        <th className="text-center">Field</th>
                                        <th className="text-center">Value/Range</th>
                                    </tr>
                                    {Array(14).fill(0).map((_, i) => (
                                        <tr style={{ background: i % 2 ? "#f1f5f9" : "white" }} className="border-[2px] border-black">
                                            <td className="text-center">{data_data[i]}</td>
                                            <td className="text-center">{data_data[i]} - value</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        </div>}
                        {select === "FILES" && <div className="w-full h-full bg-white p-6 rounded-md shadow-md">
                            <div className="font-black text-2xl text-gray-800 mb-4"> ALL MEDICAL FILES </div>
                            {Array(5).fill(0).map((_, i) => (
                                <div className="w-full p-4 flex flex-row items-center mb-4 justify-between rounded-lg shadow bg-white">
                                    <div className="font-semibold">File Name {i + 1}.pdf</div>
                                    <button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold">Download</button>
                                </div>
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Patient;
