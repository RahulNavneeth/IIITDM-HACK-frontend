"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

const MedicalTimeline = () => {
    const [summary, setSummary] = useState<Array<[string, boolean]>>(Array(5).fill(["", false]));
    const params = useParams();
    const patientId = params["id"];
    console.log(patientId);

    useEffect(() => {
        console.log(summary);
    }, [summary]);

    return (
        <div className="w-full h-full p-10 flex flex-col items-center justify-start bg-gray-50">
            <h1 className="font-black text-3xl  mb-8">Patient Medical Timeline</h1>
            <div className="flex flex-col w-full">
                <section>
                    <div className="flex flex-col gap-4">
                        {Array(5).fill(0).map((_, i) => (
                            <div className="flex flex-col bg-white rounded-lg shadow p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold">Date Range: 69/69/69 - 420/420/420</h3>
                                    <span className="text-sm text-gray-500">Dr. Johnny sins</span>
                                </div>
                                <div className="mt-2">
                                    <p><strong>Reason for Visit:</strong> Example reason here</p>
                                    <div><strong>Patient Diseases and Allergies tested:</strong>
                                        <ol className="pl-5 list-decimal">
                                            {Array(5).fill(0).map((_, i) => (
                                                <li key={i}>Disease/Allergy</li>
                                            ))}
                                        </ol>
                                    </div>
                                    {summary[i][1] && <p><strong>Summary:</strong> {summary[i][0].length > 0 ? "WATHA" : "Generating..."}</p>}
                                </div>
                                <div className="flex flex-row">
                                    <button className="mt-4 w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold">View Files & Data</button>
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
