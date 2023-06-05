
function Contact(){
    return(
        <div className="relative h-[89vh] w-full bg-gradient-to-r from-slate-700 to-slate-50  ">
            <div className="absolute top-5 left-[60vh] bg-slate-700 w-96 h-96 z-10 flex flex-col justify-center items-center text-2xl font-semibold" >
            <span className="text-6xl my-8">ECCOMERCE</span>
                <p>HIGH QUALITY ATTIRES</p>
                <p>BEST CUSTOMER SERVICES</p>
            </div>
            <div className=" absolute top-40 left-1/2 h-96 w-96 bg-slate-400 flex flex-col justify-center items-center text-2xl font-semibold">
                <p className="my-5">CALL US</p>
                <p>+91-7428789074</p>
                <p>+91-4584225785</p>
                <p className="my-5">LOCATION</p>
                <p>Baba Path Hurhuru, </p>
                <p>Jharkhand ,Inda ,825301</p>
            </div>
        </div>
    )
}
export default Contact;