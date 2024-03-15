"use client"
import { useParams } from "next/navigation"

const Patient = () => {
    const s = useParams();
    const id = s["id"]
    console.log(id);

    return (
        <div className="w-full h-full flex flex-col items-center justify-start p-10 bg-gray-50">
            <div className="w-full flex flex-row items-start justify-between">
                <div className="w-2/6 flex flex-col items-center justify-center">
                    <img className="object-cover rounded-full w-[200px] h-[200px] shadow-lg" alt="patient-profile-picture"
                        src="https://assets.shortpedia.com/uploads/2021/04/15/1618470640.jpg" />
                    <button className="mt-4 underline text-blue-600 hover:text-blue-800"> Edit </button>
                </div>
                <div className="rounded-md w-4/6 p-6 bg-white shadow-md">
                    <div className="font-black text-2xl text-gray-800"> GENERAL INFORMATION </div>
                    <div>
                        <div className="flex flex-row items-center justify-start mt-4">
                            <div className="font-bold"> NAME: </div>
                            <div className="ml-2 text-gray-700"> Keerthy Suresh </div>
                        </div>
                        <div className="w-full flex flex-row">
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
                        <div className="w-full flex flex-row">
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
            <div className="w-full flex flex-col items-start mt-10 bg-gray-100 p-4 rounded-md shadow-lg">
                <div className="font-black text-2xl text-gray-800 mb-4"> MEDICAL INFORMATION </div>
                <div className="w-full">
                    <div className="rounded-md bg-white shadow-md mb-4">
                        <div className="p-6 border-b-2 border-gray-200 font-semibold"> TREATMENTS </div>
                        <ol className="list-decimal pl-8 py-4">
                            <li>Treatment</li>
                            <li>Treatment</li>
                            <li>Treatment</li>
                        </ol>
                    </div>
                    <div className="rounded-md bg-white shadow-md mb-4">
                        <div className="p-6 border-b-2 border-gray-200 font-semibold"> ALLERGIES </div>
                        <ol className="list-decimal pl-8 py-4">
                            <li>Allergy</li>
                            <li>Allergy</li>
                            <li>Allergy</li>
                        </ol>
                    </div>
                    <div className="rounded-md bg-white shadow-md">
                        <div className="p-6 border-b-2 border-gray-200 font-semibold"> DATA </div>
                        <ol className="list-decimal pl-8 py-4">
                            <li>Data</li>
                            <li>Data</li>
                            <li>Data</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Patient;
