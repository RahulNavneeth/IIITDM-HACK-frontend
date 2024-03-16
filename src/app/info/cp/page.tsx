"use client"
import { usePatientStore } from "@/libs/store";
import { useState } from "react";

const Patient = () => {
    const [select, setSelect] = useState<"TREATMENTS" | "ALLERGIES" | "DATA" | "GRAPH" | "FILES">("DATA");
    const data_data = ["SUGAR", "BP", "RBC", "WBC", "HB", "PLATELETS", "ESR", "MCV", "HEART RATE", "Na", "K", "VIT D", "CHOLESTROL"];
    const data_range = ["100 to 125 mg/dL", "80/120 mmHg", "4.7 and 6.1 million/uL", "4.500K - 11K /uL", "13.8 to 17.2 (g/dL)", "150,000  450,000 platelets (K/μL)", "10 - 20 mm/hr", "80 -100 fl", "60 - 100", "135 - 145 meql/l", "3.6 - 5.2", "20 - 40 ng/ml", "200mg/dl"]

    const usePatientData = usePatientStore((i) => i.data);
    console.log(usePatientData);
    const dob = new Date(usePatientData["dob"]).toDateString()
    console.log(usePatientData);
    return (
        <div className="w-full h-full flex flex-col items-center justify-start p-10">
            <div className="w-full flex flex-col sm:flex-row items-start justify-between">
                <div className="w-full sm:w-2/6 flex flex-col items-center justify-center">
                    <img className="object-cover rounded-full w-[200px] h-[200px] shadow-lg" alt="patient-profile-picture"
                        src={usePatientData["img_url"]} />
                    <button className="mt-4 underline text-blue-600 hover:text-blue-800"> Edit </button>
                </div>
                <div className="rounded-md w-full sm:w-4/6 p-6 bg-white shadow-md">
                    <div className="font-black text-2xl text-gray-800"> GENERAL INFORMATION </div>
                    <div>
                        <div className="flex flex-row items-center justify-start mt-4">
                            <div className="font-bold"> NAME: </div>
                            <div className="ml-2 text-gray-700"> {usePatientData["name"]} </div>
                        </div>
                        <div className="w-full flex flex-row flex-wrap">
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> AGE: </div>
                                <div className="ml-2 text-gray-700"> {usePatientData["age"]} </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> GENDER: </div>
                                <div className="ml-2 text-gray-700"> {usePatientData["gender"]} </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> DOB: </div>
                                <div className="ml-2 text-gray-700"> {dob} </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-row flex-wrap">
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> WEIGHT: </div>
                                <div className="ml-2 text-gray-700"> {usePatientData["weight"]} </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> HEIGHT: </div>
                                <div className="ml-2 text-gray-700"> {usePatientData["height"]} </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> BMI: </div>
                                <div className="ml-2 text-gray-700"> {Math.trunc(usePatientData["weight"] * 10000 / (usePatientData["height"] * usePatientData["height"]))} </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-2">
                            <div className="font-bold"> ADDRESS: </div>
                            <div className="ml-2 text-gray-700"> {usePatientData["address"]} </div>
                        </div>
                        {localStorage.getItem("d_token") && <a href={"cp/timeline/add"}><button className="px-4 ml-3 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold mt-4">Add data</button></a>}
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-start mt-10 bg-gray-100 p-4 rounded-md shadow-lg">
                <div className="font-black text-2xl text-gray-800 mb-4"> MEDICAL INFORMATION </div>
                <div className="w-full h-full flex flex-col md:flex-row">
                    <div className="w-full md:w-2/6 h-full justify-evenly flex flex-col">
                        <button onClick={() => setSelect("DATA")} className="rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                            <div className="p-6 font-semibold"> DATA </div>
                        </button>
                        <button onClick={() => setSelect("ALLERGIES")} className="rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                            <div className="p-6 font-semibold"> CONDITIONS </div>
                        </button>
                        <button onClick={() => setSelect("TREATMENTS")} className="rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                            <div className="p-6 font-semibold"> TREATMENTS </div>
                        </button>
                        <button onClick={() => setSelect("FILES")} className="rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                            <div className="p-6 font-semibold"> ALL MEDICAL FILES </div>
                        </button>
                        <button onClick={() => setSelect("GRAPH")} className="rounded-md bg-blue-500 hover:bg-blue-600 text-white shadow-md mb-4">
                            <div className="p-6 font-semibold"> GRAPH </div>
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
                                    {usePatientData["treatments"].map((value: any, i: number) => (
                                        <tr style={{ background: i % 2 ? "#f1f5f9" : "white" }} className="border-[2px] border-black">
                                            <td className="text-center">{value["treatment_name"]}</td>
                                            <td className="text-center">{value["type"]}</td>
                                            <td className="flex flex-col items-center justify-center">{value["condition"] <= 1 ? <div className="w-[20px] h-[20px] rounded-full bg-green-400" /> : value["condition"] < 3 ? <div className="w-[20px] h-[20px] rounded-full bg-yellow-400" /> : <div className="w-[20px] h-[20px] rounded-full bg-red-400" />}</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                            <a href={"cp/timeline"}><button className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold mt-10">View timeline</button></a>
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
                                    {usePatientData["conditions"].map((value: any, i: number) => (
                                        <tr style={{ background: (i % 2) ? "#f1f5f9" : "white" }} className="border-[2px] border-black">
                                            <td className="text-center">{value["value"]}</td>
                                            <td className="text-center">{new Date(value["onset"]).toDateString()}</td>
                                            <td className="flex flex-col items-center justify-center">{value["severity"] <= 1 ? <div className="w-[20px] h-[20px] rounded-full bg-green-400" /> : value["severity"] < 3 ? <div className="w-[20px] h-[20px] rounded-full bg-yellow-400" /> : <div className="w-[20px] h-[20px] rounded-full bg-red-400" />}</td>
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
                                    {Array(13).fill(0).map((_, i) => (
                                        <tr style={{ background: i % 2 ? "#f1f5f9" : "white" }} className="border-[2px] border-black">
                                            <td className="text-center">{data_data[i]}</td>
                                            <td className="text-center">{data_data[i] === "HEART RATE" ? usePatientData["heart_rate"] : data_data[i] === "VIT D" ? usePatientData["vit_d"] : usePatientData[data_data[i]?.toLowerCase()]} ({data_range[i]})</td>
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
