import React from "react";

function Account(){
    return(
        <div className="bg-gradient-to-r from-slate-700 to-slate-50 ">
        <div className="flex justify-between mx-[40vh] p-8 ">
        <p className="text-4xl font-semibold">Account</p>
        <button  className="mt-0 px-3 py-2 mx-2 h-9 w-32 bg-gray-900 text-white rounded-md shadow-lg shadow-gray-500/50 text-sm font-semibold hover:bg-gray-800">Sign out</button>
    </div>
    <div className="flex ml-[40vh] mt-10 ">
        <div >
                   <div className=" h-20 w-60 flex flex-col justify-center items-center">
                        <p className="text-4xl font-semibold">Name</p>
                        <p className="text-xl">abc@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-start mr-10 mt-20  h-[62vh] w-60">
                        <button className="text-2xl m-1 hover:bg-gray-900 hover:text-white rounded-md">personal information</button>
                        <button className="text-2xl m-1 hover:bg-gray-900 hover:text-white rounded-md">Billing and Payments</button>
                        <button className="text-2xl m-1 hover:bg-gray-900 hover:text-white rounded-md">order history</button>
                    </div>
        </div>
        <div className="">
        <div className="h-[20vh] ">
                    <p className="text-3xl m-2">Personal information</p>
                    <p className="text-xl m-2">Manage your personal information including phone no and email address</p>
                </div>
                <div className="grid grid-cols-2 ">
                    <div className="h-24 w-60 bg-slate-300 m-5 ">
                        <p className="mt-5 ml-5 text-3xl">Name</p>
                        <p className="ml-5">Suman bando</p>
                    </div>
                    <div className="h-24 w-60 bg-slate-300 m-5">
                        <p className="mt-5 ml-5 text-3xl">Date of Birth</p>
                        <p className="ml-5">1 jan 2023</p>
                    </div>
                    <div className="h-24 w-60 bg-slate-300 m-5">
                        <p className="mt-5 ml-5 text-3xl"> country Region</p>
                        <p className="ml-5"> delhi,india</p>
                    </div>
                    <div className="h-24 w-60 bg-slate-300 m-5">
                        <p className="mt-5 ml-5 text-3xl">Language</p>
                        <p className="ml-5">English</p>
                    </div>
                    <div className="h-24 w-60 bg-slate-300 m-5">
                        <p className="mt-5 ml-5 text-3xl">Contactable At</p>
                        <p className="ml-5">abc@gmail.com</p>
                    </div>
        </div>
        </div>
    </div>


        </div>
    )
}
export default Account;