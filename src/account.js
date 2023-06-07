import React from 'react';
import { useState } from 'react';
function Account() {
  const [status, setstatus] = useState(false);
  function func() {
    setstatus(true);
  }

  function closemodal() {
    setstatus((status) => !status);
  }
  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-50 ">
      <div className="mx-[40vh] flex justify-between p-8 shadow-2xl ">
        <p className="text-4xl font-semibold">Account</p>
        <button className="mx-2 mt-0 h-9 w-32 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-gray-500/50 hover:bg-gray-800">
          Sign out
        </button>
      </div>
      <div className="ml-[40vh] mt-10 flex ">
        <div>
          <div className=" flex h-20 w-60 flex-col items-center justify-center">
            <p className="text-4xl font-semibold">Suman Bando</p>
            <p className="text-xl">abc@gmail.com</p>
          </div>
          <div className="mr-10 mt-20 flex h-[48vh] w-[100%]  flex-col items-start ">
            <button
              onClick={func}
              className="m-1 rounded-md text-2xl hover:bg-gray-900 hover:text-white"
            >
              personal information
            </button>
            <button className="m-1 rounded-md text-2xl hover:bg-gray-900 hover:text-white">
              Billing and Payments
            </button>
            <button className="m-1 rounded-md text-2xl hover:bg-gray-900 hover:text-white">
              order history
            </button>
          </div>
        </div>
      </div>
      {status && (
        <div
          type="button"
          onClick={closemodal}
          className="fixed inset-0 z-50 ml-36 mt-[14vh] flex h-[80vh] w-[90%] flex-wrap items-center justify-center  overflow-y-auto overflow-x-hidden bg-gradient-to-r from-slate-100 to-slate-700 "
        >
          <div className="h-[20vh] shadow-2xl">
            <p className="m-2 text-3xl">Personal information</p>
            <p className="m-2 text-xl">
              Manage your personal information including phone no and email
              address
            </p>
          </div>

          <div className="grid grid-cols-2 ">
            <div className="m-5 h-24 w-60 bg-slate-300 ">
              <p className="ml-5 mt-5 text-3xl">Name</p>
              <p className="ml-5">Suman bando</p>
            </div>
            <div className="m-5 h-24 w-60 bg-slate-300">
              <p className="ml-5 mt-5 text-3xl">Date of Birth</p>
              <p className="ml-5">1 jan 2023</p>
            </div>
            <div className="m-5 h-24 w-60 bg-slate-300">
              <p className="ml-5 mt-5 text-3xl"> country Region</p>
              <p className="ml-5"> delhi,india</p>
            </div>
            <div className="m-5 h-24 w-60 bg-slate-300">
              <p className="ml-5 mt-5 text-3xl">Language</p>
              <p className="ml-5">English</p>
            </div>
            <div className="m-5 h-24 w-60 bg-slate-300">
              <p className="ml-5 mt-5 text-3xl">Contactable At</p>
              <p className="ml-5">abc@gmail.com</p>
            </div>
          </div>
          <div className='bg'></div>
        </div>
      )}
    </div>
  );
}
export default Account;
