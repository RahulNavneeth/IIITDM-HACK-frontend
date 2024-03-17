"use client"

import { useMessageStore } from "@/libs/store";
import { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { API_URL } from "@/libs/constants";

const Signup = () => {
    const [page, setPage] = useState<number>(0);
    const [uid, setUID] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [pass, setPass] = useState<string>("");
    const [c_pass, setC_Pass] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [gender, setGender] = useState<"MALE" | "FEMALE">("MALE");
    const [dob, setDob] = useState<string>("");
    const [blood, setBlood] = useState<string>("OP");
    const [weight, setWeight] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [age, setAge] = useState<number>(0);
    const [address, setAddress] = useState<string>("");
    const [img_url, setImg_url] = useState<string>("");
    const [treatment, setTreatment] = useState<Array<string>>([""]);
    const [allergies, setAllergies] = useState<Array<string>>([""]);

    const [loading, setLoading] = useState<boolean>(false)

    const MData = useMessageStore((i) => i.setData);

    const handleSubmit = async () => {
        setLoading(true);
        if (pass !== c_pass) {
            MData({ type: "error", message: "Password and Confirm Password should be same", show: true });
            setLoading(false);
            return;
        }
        try {
            await axios.post(API_URL + "/patient/sign-up", {
                uid,
                email,
                pass,
                name,
                age,
                gender,
                dob,
                weight,
                height,
                address,
                bg: blood,
                img_url,
            })
            MData({ type: "success", message: "Signup successful", show: true });
            window.location.href = "/login";
        } catch (e) {
            //
        } finally {
            setLoading(false);
        }
    }
    return (
        <div>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-2/6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold mb-8">Signup</h1>
                    {!page ?
                        <>
                            <input onChange={(e) => setUID(e.target.value)} type="text" placeholder="UID" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                            <input onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                            <input onChange={(e) => setC_Pass(e.target.value)} type="password" placeholder="Confirm Password" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                            <input onChange={(e) => setAge(parseInt(e.target.value))} type="number" placeholder="Age" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                            <select onChange={(e) => setGender(e.target.value as "MALE" | "FEMALE")} className="outline-none w-full p-4 border-2 mb-2 rounded-lg border-gray-200 shadow bg-white">
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                            </select>
                            <input onChange={(e) => setDob(e.target.value)} type="date" placeholder="DOB" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                            <select onChange={(e) => setBlood(e.target.value)} className="outline-none w-full p-4 border-2 mb-2 rounded-lg border-gray-200 shadow bg-white">
                                <option value="O +ve">O +ve</option>
                                <option value="O -ve">O -ve</option>
                                <option value="A +ve">A +ve</option>
                                <option value="A -ve">A -ve</option>
                                <option value="B +ve">B +ve</option>
                                <option value="B -ve">B -ve</option>
                                <option value="AB +ve">AB +ve</option>
                                <option value="AB -ve">AB -ve</option>
                            </select>
                            <input onChange={(e) => setWeight(parseInt(e.target.value))} type="number" placeholder="Weight in KG" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                            <input onChange={(e) => setHeight(parseInt(e.target.value))} type="number" placeholder="Height in CM" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                            <textarea onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                            <input onChange={(e) => setImg_url(e.target.value)} type="text" placeholder="Image URL" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                        </>
                        : <div className="w-full">
                            <div className="w-full">
                                <div className="w-full">
                                    <h1 className="text-xl font-bold mb-4">Treatments <button className="text-blue-400" onClick={() => { setTreatment([...treatment, ""]); }}>+</button></h1>
                                    <div>
                                        {treatment.map((_, i) => (
                                            <div key={i} className="flex flex-row">
                                                <input type="text" placeholder={"Treatment " + (i + 1)} className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                                                {treatment.length > 1 && <button onClick={() => {
                                                    if (treatment.length === 1) return;
                                                    let temp = treatment;
                                                    temp.splice(i, 1);
                                                    setTreatment([...temp]);
                                                }} className="text-red-400 w-[75px] h-[60px] font-semibold rounded-md ml-2">X</button>}
                                            </div>))}
                                    </div>
                                </div>
                                <div className="w-full">
                                    <h1 className="text-xl font-bold my-4">Allergies <button className="text-blue-400" onClick={() => { setAllergies([...allergies, ""]); }}>+</button></h1>
                                    <div className="w-full">
                                        {allergies.map((_, i) => (
                                            <div key={i} className="flex flex-row">
                                                <input type="text" placeholder={"Allergies " + (i + 1)} className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                                                {allergies.length > 1 && <button onClick={() => {
                                                    if (allergies.length === 1) return;
                                                    let temp = allergies;
                                                    temp.splice(i, 1);
                                                    setAllergies([...temp]);
                                                }} className="text-red-400 w-[75px] h-[60px] font-semibold rounded-md ml-2">X</button>}
                                            </div>))}
                                    </div>
                                </div>
                            </div>
                        </div>}
                    <button onClick={() => handleSubmit()} className="px-8 mx-2 py-4 flex flex-col items-center justify-center rounded bg-blue-500 mt-8 hover:bg-blue-600 text-white font-bold w-full">{loading ? <Spinner className="animate-spin h-6 w-6 text-blue-400" color="white" /> : "Submit"}</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;
