import { useNavigate } from "react-router-dom";

function Denied() {
    const Navigate = useNavigate();
    const navigateToHome = () => {
        Navigate("/")
    }
    return (
        <main className="h-screen w-full flex flex-col  items-center justify-center bg-[#1A2238]">
            <h1 className=" text-9xl font-extrabold  text-white  tracking-widest">
                403
            </h1>
            <div className=" bg-black text-white px-6 text-sm rounded rotate-12 absolute">
                Access denied
            </div>
            <div className=" mt-5 ">
                <span onClick={navigateToHome} className=" relative cursor-pointer block px-8 py-3 bg-[#83773db6]  border  text-white">
                    Go Back
                </span>
            </div>
        </main>
    );
}
export default Denied;