"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"
import { useMessageStore, usePatientEmailStore } from "@/libs/store";
import axios from "axios";
import { Spinner } from "@material-tailwind/react";
import { API_URL } from "@/libs/constants";

const Info = () => {
    const [data, setData] = useState([])
    const [message, setMessage] = useState<string>("Search patient record with email");
    const [email, setEmail] = useState<string>("");
    const [dUid, setDUid] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [initLoading, setInitLoading] = useState<boolean>(true);

    const PEmailData = usePatientEmailStore((i) => i.setEmail);

    useEffect(() => {
        const GET = async () => {
            if ("d_uid" in localStorage) {
                setDUid(localStorage.getItem("d_uid") as string);
                return;
            }
        }
        GET()
    }, []);

    const MData = useMessageStore((i) => i.setData);
    const router = useRouter();
    const handleEmail = async () => {
        setLoading(true);
        try {
            const { data } = await axios.post(API_URL + "/doctor/check-email", {
                email,
                uid: dUid,
                d_token: localStorage.getItem("d_token"),
                type: "D"
            })
            setData(data)
        } catch (e) {
            setMessage("No patient found with this email");
        } finally {
            setLoading(false);
        }
    }
    const handlePatient = () => {
        PEmailData({ email: data[0]['email'], name: data[0]['name'], uid: data[0]['uid'] });
        router.push("/info/cp");
    }
    useEffect(() => {
        if (!("d_token" in localStorage)) {
            MData({ type: "error", message: "You are not authorized", show: true });
            router.push("/login");
            return;
        } else {
            setInitLoading(false);
        }
    }, [])
    if (initLoading) {
        return (
            <div className="w-full h-full p-10 flex flex-col items-center justify-center bg-gray-50">
                <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" />
            </div>
        )
    }
    return (
        <div className="w-full h-full p-10 flex flex-col items-center justify-start bg-gray-50">
            <div className="font-black text-3xl text-gray-800 mb-8">Patients data</div>
            <div className="sm:w-3/6 w-full flex flex-col gap-4">
                <div className="flex flex-row">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <button onClick={handleEmail} className="px-8 mx-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold">{loading ? <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" /> : "Submit"}</button>
                </div>
                {data.length > 0 ?
                    <div className="w-full flex flex-col gap-4">
                        <button onClick={handlePatient} className="w-full p-4 flex flex-col items-start justify-between rounded-lg shadow bg-white">
                            <div className="font-semibold">{data[0]['name']}</div>
                            <div className="font-semibold text-gray-400">{data[0]['email']}</div>
                        </button>
                    </div>
                    : <div className="w-full text-center font-semibold mt-10">{message}</div>}
            </div>
        </div>
    )
}

export default Info;
