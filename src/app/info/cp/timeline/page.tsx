"use client"
import { usePatientStore } from "@/libs/store";
import { useState } from "react";

const MedicalTimeline = () => {
    const PData = usePatientStore((i) => i.data);
    const [summary, setSummary] = useState<Array<[string, boolean]>>(Array(PData["treatments"].length).fill(["", false]));

    return (
        <div className="w-full h-full p-10 flex flex-col items-center justify-start bg-gray-50">
            <h1 className="font-black text-3xl  mb-8">Patient Medical Timeline</h1>
            <div className="flex flex-col w-full">
                <section>
                    <div className="flex flex-col gap-4">
                        {PData["treatments"].map((value: any, i: number) => (
                            <div key={i} className="flex flex-col bg-white rounded-lg shadow p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold">Date Range: {new Date(value["in_time"]).toDateString()} - {new Date(value["out_time"]).toDateString()}</h3>
                                    <span className="text-sm text-gray-500">Doctor ID - {value["doctor_id"]}</span>
                                </div>
                                <div className="mt-2">
                                    <p><strong>Pioneers:</strong> {
                                        value["pioneers"].map((v: any, j: number) => (
                                            <span key={j} className="text-blue-500">{v}{j !== value["pioneers"].length - 1 && ","} </span>
                                        ))
                                    }</p>
                                    <p><strong>Type:</strong> {value["type"]}</p>
                                    {summary[i][1] && <p><strong>Summary:</strong> {summary[i][0].length > 0 ? "WATHA" : "Generating..."}</p>}
                                </div>
                                <div className="flex flex-row">
                                    <button onClick={() => {
                                        window.location.href = "/info/cp/" + value["treatment_id"] + "/files";
                                    }} className="mt-4 w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold">View Files & Data</button>
                                    <button onClick={() => {
                                        let temp = [...summary];
                                        temp[i] = ["", true];
                                        setSummary(temp);
                                        // TODO: ASWATH LLM
                                        setTimeout(() => {
                                            let temp = [...summary];
                                            temp[i] = ["Watha", true];
                                            setSummary(temp);
                                        }, 2000)
                                    }} className="mt-4 w-full ml-2 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold">Get summary</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default MedicalTimeline;
