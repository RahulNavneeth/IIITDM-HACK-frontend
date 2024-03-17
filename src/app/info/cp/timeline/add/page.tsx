"use client"

import { API_URL } from "@/libs/constants";
import { useMessageStore, usePatientStore } from "@/libs/store";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";

const TimelineAdd = () => {
    const [selected, setSelected] = useState<"TREATMENT" | "GENERAL" | "ALLERGIES">("TREATMENT")
    const [files, setFiles] = useState<FileList | null>(null)

    const [t_name, setT_Name] = useState<string>("");
    const [t_type, setT_Type] = useState<string>("");
    const [t_condition, setT_Condition] = useState<string>("");
    const [t_in, setT_In] = useState<string>("");
    const [t_out, setT_Out] = useState<string>("");
    const [t_problems, setT_Problems] = useState<Array<string>>([""]);

    const [t_loading, setT_Loading] = useState<boolean>(false);
    const [g_loading, setG_Loading] = useState<boolean>(false);
    const [c_loading, setC_Loading] = useState<boolean>(false);

    const MData = useMessageStore((i) => i.setData);
    const PData = usePatientStore((i) => i.data);

    const [condition, setCondition] = useState<string>("");
    const [type, setType] = useState<number>(1);
    const [date, setDate] = useState<string>("");

    const data_data = ["SUGAR", "BP", "RBC", "WBC", "HB", "PLATELETS", "ESR", "MCV", "HEART RATE", "Na", "K", "VIT D", "CHOLESTROL"];
    const data_data_inp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const [g_data, setG_Data] = useState(data_data_inp);

    const handleConditionSubmit = async () => {
        setC_Loading(true);
        try {
            await axios.post(API_URL + "/doctor/add-condition", {
                email: PData["email"],
                d_token: localStorage.getItem("d_token"),
                uid: localStorage.getItem("d_uid"),
                type: "D",
                value: condition,
                onset: date,
                severity: type
            })
            MData({ type: "success", message: "General data added successfully", show: true });
            window.location.href = "/info/cp";
        } catch (e) {
            MData({ type: "error", message: "Error adding data", show: true });
        } finally {
            setC_Loading(false);
        }
    }

    const handleGeneralSubmit = async () => {
        setG_Loading(true);
        try {
            await axios.put(API_URL + "/doctor/update-record", {
                email: PData["email"],
                d_token: localStorage.getItem("d_token"),
                uid: localStorage.getItem("d_uid"),
                type: "D",
                sugar: g_data[0],
                bp: g_data[1],
                rbc: g_data[2],
                wbc: g_data[3],
                hb: g_data[4],
                platelets: g_data[5],
                esr: g_data[6],
                mcv: g_data[7],
                heart_rate: g_data[8],
                na: g_data[9],
                k: g_data[10],
                vitamin_d: g_data[11],
                cholestrol: g_data[12]
            })
            MData({ type: "success", message: "General data added successfully", show: true });
            window.location.href = "/info/cp";
        } catch (e) {
            MData({ type: "error", message: "Error adding data", show: true });
        } finally {
            setG_Loading(false);
        }
    }

    const handleTreatmentSubmit = async () => {
        setT_Loading(true);
        try {
            await axios.post(API_URL + "/doctor/add-treatment", {
                treatment_name: t_name,
                t_type: t_type,
                condition: t_condition,
                doctor_id: localStorage.getItem("d_id"),
                in_time: t_in,
                out_time: t_out,
                pioneers: t_problems,
                email: PData["email"],
                d_token: localStorage.getItem("d_token"),
                uid: localStorage.getItem("d_uid"),
                type: "D"
            })
            MData({ type: "success", message: "Treatment added successfully", show: true });
            window.location.href = "/info/cp";
        } catch (e) {
            MData({ type: "error", message: "Error adding data", show: true });
        } finally {
            setT_Loading(false);
        }
    }
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
                    <input onChange={(e) => setT_Name(e.target.value)} type="text" placeholder="Treatment Name" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input onChange={(e) => setT_Type(e.target.value)} type="text" placeholder="Type of visit" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input onChange={(e) => setT_Condition(e.target.value)} type="text" placeholder="Condition" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <div className="flex flex-row items-center justify-start w-full gap-x-2">
                        <input onChange={(e) => setT_In(e.target.value)} type="date" placeholder="In" className="mb-2 w-1/2 outline-none p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                        <input onChange={(e) => setT_Out(e.target.value)} type="date" placeholder="out" className="mb-2 w-1/2 outline-none p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    </div>
                    <h1 className="text-xl w-full mt-6 font-bold mb-4">Pioneers <button className="text-blue-400" onClick={() => { setT_Problems([...t_problems, ""]); }}>+</button></h1>
                    <div className="w-full">
                        {t_problems.map((_, i) => (
                            <div key={i} className="flex flex-row w-full">
                                <input onChange={(e) => {
                                    let temp = t_problems;
                                    temp[i] = e.target.value;
                                    setT_Problems([...temp]);
                                }} type="text" placeholder={"Pioneer " + (i + 1)} className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                                {t_problems.length > 1 && <button onClick={() => {
                                    if (t_problems.length === 1) return;
                                    let temp = t_problems;
                                    temp.splice(i, 1);
                                    setT_Problems([...temp]);
                                }} className="text-red-400 w-[75px] h-[60px] font-semibold rounded-md ml-2">X</button>}
                            </div>))}
                    </div>
                    <button onClick={handleTreatmentSubmit} className="px-8 flex flex-col items-center mx-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold w-full">{t_loading ? <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" /> : "Submit"}</button>
                </div>}
                {selected === "GENERAL" && <div className="w-full h-full py-10 flex flex-col items-center justify-start bg-gray-50">
                    <div className="overflow-scroll h-[600px]">
                        {data_data.map((data, i) => (
                            <input
                                key={i}
                                onChange={(e) => {
                                    let temp = g_data;
                                    temp[i] = parseInt(e.target.value);
                                    setG_Data([...temp]);
                                }}
                                type="number" placeholder={data} className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                        ))}
                    </div>
                    <button onClick={handleGeneralSubmit} className="px-8 flex flex-col items-center mx-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold w-full">{g_loading ? <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" /> : "Submit"}</button>
                </div>}
                {selected === "ALLERGIES" && <div className="w-full h-full py-10 flex flex-col items-center justify-start bg-gray-50">
                    <input onChange={(e) => setCondition(e.target.value)} type="text" placeholder="Conditions" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <select onChange={(e) => setType(parseInt(e.target.value))} className="outline-none w-full p-4 border-2 mb-4 rounded-lg border-gray-200 shadow bg-white">
                        <option value="3">HIGH</option>
                        <option value="2">NORMAL</option>
                        <option value="1">LOW</option>
                    </select>
                    <input onChange={(e) => setDate(e.target.value)} type="date" placeholder="out" className="mb-2 w-full outline-none p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <button onClick={handleConditionSubmit} className="px-8 flex flex-col items-center mx-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold w-full">{c_loading ? <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" /> : "Submit"}</button>
                </div>}
            </div>
        </div>
    )
}

export default TimelineAdd;
