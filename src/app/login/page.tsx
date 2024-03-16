const Login = () => {
    return (
        <div>
            <div className="w-full h-screen flex flex-col items-center justify-center">
                <div className="w-[90%] md:w-2/6 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center p-4">
                    <h1 className="text-2xl font-bold mb-8">Login</h1>
                    <input type="email" placeholder="Email" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <input type="password" placeholder="Password" className="mb-2 outline-none w-full p-4 border-2 rounded-lg border-gray-200 shadow bg-white" />
                    <select className="outline-none w-full p-4 border-2 mb-4 rounded-lg border-gray-200 shadow bg-white">
                        <option value="doctor">Hospital</option>
                        <option value="doctor">Doctor</option>
                        <option value="doctor">Patient</option>
                    </select>
                    <button className="px-8 mx-2 py-4 rounded bg-blue-500 hover:bg-blue-600 text-white font-bold w-full">Submit</button>
                </div>
                <a href="/signup" className="text-sm mt-10 text-blue-700">Don't have an account? Signup as a Patient</a>
            </div>
        </div>
    )
}

export default Login;
