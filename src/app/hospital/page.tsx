"use client"

import { API_URL } from "@/libs/constants";
import { useMessageStore } from "@/libs/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";

const Hospital = () => {
    const MData = useMessageStore((i) => i.setData);
    const [hospitalData, setHospitalData] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(true);
    const [remLoading, setRemLoading] = useState<Array<boolean>>(Array(100000).fill(false));
    const router = useRouter();
    const handleRemoveDoctor = async (id: string, idx: number) => {
        let temp = [...remLoading];
        temp[idx] = true;
        setRemLoading(temp);
        try {
            const { data } = await axios.delete(API_URL + "/hospital/delete-doctor", {
                data: {
                    doctor_id: id,
                    type: "H",
                    uid: localStorage.getItem("h_uid"),
                    h_token: localStorage.getItem("h_token")
                }
            })
            hospitalData["doctors"].splice(idx, 1);
            remLoading.splice(idx, 1);
            setHospitalData(hospitalData);
            setRemLoading(remLoading);
        } catch (e) {
            //
        } finally {
            let temp = [...remLoading];
            temp[idx] = false;
            setRemLoading(temp);
        }
    }
    useEffect(() => {
        if (!("h_token" in localStorage)) {
            MData({ type: "error", message: "You are not authorized", show: true });
            router.push("/login");
            return;
        }
        const GET = async () => {
            try {
                const { data } = await axios.post(API_URL + "/hospital/get-details", {
                    type: "H",
                    "h_token": localStorage.getItem("h_token"),
                    uid: localStorage.getItem("h_uid")
                })
                setHospitalData(data[0]);
            } catch (e) {
                //
            } finally {
                setLoading(false);
            }
        }
        GET();
    }, [])
    if (loading) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="w-2/6 bg-white flex flex-col items-center justify-center p-4">
                    <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" />
                </div>
            </div>
        )
    }
    return (
        <div className="w-full h-full flex flex-col items-center justify-start p-10">
            <div className="w-full flex flex-col sm:flex-row items-start justify-between">
                <div className="rounded-md w-full p-6 bg-white shadow-md">
                    <div className="font-black text-2xl text-gray-800"> GENERAL INFORMATION</div>
                    <div>
                        <div className="flex flex-row items-center justify-start mt-4">
                            <div className="font-bold"> NAME: </div>
                            <div className="ml-2 text-gray-700"> {hospitalData["name"]} </div>
                        </div>
                        <div className="w-full flex flex-row flex-wrap">
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> DEAN: </div>
                                <div className="ml-2 text-gray-700"> {hospitalData["dean_name"]} </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> TYPE: </div>
                                <div className="ml-2 text-gray-700"> {hospitalData["type"]} </div>
                            </div>
                            <div className="flex flex-row items-center justify-start mt-2 mr-10">
                                <div className="font-bold"> NO OF DOCTORS: </div>
                                <div className="ml-2 text-gray-700"> {hospitalData["doctors"].length} </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-2">
                            <div className="font-bold"> ADDRESS: </div>
                            <div className="ml-2 text-gray-700"> {hospitalData["address"]} </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-start mt-10 bg-gray-100 p-4 rounded-md shadow-lg overflow-auto">
                <div className="font-black text-2xl text-gray-800 mb-4"> DOCTORS INFORMATION <button onClick={() => {
                    router.push("hospital/doctor/add");
                }} className="text-blue-400">+</button></div>
                <div className="w-full h-fit">
                    <table cellPadding={10} className="w-full">
                        <tr className="bg-gray-200 border-[2px] border-black">
                            <th className="text-center w-1/4">Name</th>
                            <th className="text-center w-1/4">Specialization</th>
                            <th className="text-center w-1/4">License No</th>
                            <th className="text-center w-1/4">-</th>
                        </tr>
                        {hospitalData["doctors"].map((value: any, i: number) => (
                            <tr key={i} style={{ background: i % 2 ? "#f1f5f9" : "white" }} className="border-[2px] border-black">
                                <td className="text-center">{value["name"]}</td>
                                <td className="text-center">{value["specialization"]}</td>
                                <td className="text-center">{value["license_no"]}</td>
                                <button onClick={() => handleRemoveDoctor(value["doctor_id"], i)} className="w-full h-[45px] text-center flex flex-col items-center justify-center bg-red-400"> {remLoading[i] ? <Spinner className="animate-spin h-6 w-6 text-red-200" color="white" /> : "Remove"}  </button>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div >
    )
}
export default Hospital;
