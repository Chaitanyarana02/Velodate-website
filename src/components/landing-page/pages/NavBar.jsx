import { useNavigate } from "react-router-dom";

const NavBar = () => {

  const  navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between px-2 md:px-8  py-4 w-full">
        <img onClick={()=>navigate('/')} src="/assets/navbar/velodateLogo.svg" className="cursor-pointer" alt="vilodateLogo" />

        <button className="bg-[#D8A409] hover:bg-[#be9838] p-2 rounded-lg">
          Download App
        </button>
      </div>
    </>
  );
};

export default NavBar;
