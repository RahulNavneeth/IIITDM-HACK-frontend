"use client"

import { API_URL } from "@/libs/constants";
import { useMessageStore } from "@/libs/store";
import axios from "axios";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";

const AddDoctor = () => {
    const [name, setName] = useState<string>('');
    const [uid, setUID] = useState<string>('');
    const [license, setLicense] = useState<number>(0);
    const [pass, setPass] = useState<string>("");
    const [c_pass, setC_Pass] = useState<string>("");
    const [specialization, setSpecialization] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const MData = useMessageStore((i) => i.setData);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            if (pass !== c_pass) {
                MData({ type: "error", message: "Passwords do not match", show: true });
                return;
            }
            await axios.post(API_URL + "/hospital/add-doctor", {
                type: "H",
                uid: localStorage.getItem("h_uid"),
                h_token: localStorage.getItem("h_token"),
                license_no: license,
                name,
                d_uid: uid,
                pass,
                specialization,
                hospital_id: localStorage.getItem("h_uid")
            })
            MData({ type: "success", message: "Doctor added successfully", show: true });
            window.location.href = "/hospital";
        } catch (e) {
            //
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <div className="w-[90%] md:w-2/6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-8">Add doctor</h1>
                <>
                    <input onChange={(e) => setUID(e.target.value)} type="text" placeholder="uid" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input onChange={(e) => setSpecialization(e.target.value)} type="text" placeholder="specialization" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input onChange={(e) => setC_Pass(e.target.value)} type="password" placeholder="Confirm Password" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input onChange={(e) => setLicense(parseInt(e.target.value))} type="number" placeholder="License No" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                </>
                <button onClick={handleSubmit} className="px-8 flex flex-col items-center mx-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold w-full">{loading ?
                    <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" /> : "Submit"}</button>
            </div>
        </div>
    )
}

export default AddDoctor;
