import { useNavigate } from "react-router-dom";
import { TPage } from "../lib/types";
import { useState } from "react";

interface ILayoutProps {
  showContactInfo: boolean;
  selectedPage: TPage | null;
  content: React.ReactNode;
}

function Layout({ showContactInfo, selectedPage, content }: ILayoutProps) {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="lg:grid grid-cols-5 grid-rows-8 max-h-screen min-h-screen">
      <div className="col-span-5 lg:p-10 p-5 flex justify-between">
        <div>
          <h1
            className="lg:text-4xl text-3xl text-black font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Francesca Sabel
          </h1>
          <p className="font-mediumSerif lg:text-3xl text-2xl italic">
            Director
          </p>
        </div>
        <h6
          className="font-medium lg:hidden md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu
        </h6>
      </div>
      <div className="row-start-3 row-span-6 p-10 lg:flex flex-col justify-between hidden">
        <div className="flex flex-col gap-10">
          <div
            className={`w-fit cursor-pointer ${
              selectedPage === "about"
                ? `bg-customGreen text-white`
                : `bg-customGreen/20 hover:bg-customGreen/50 text-black`
            }`}
            onClick={() => navigate("/about")}
          >
            <p className="text-lg font-medium">ABOUT</p>
          </div>
          <div
            className={`w-fit cursor-pointer ${
              selectedPage === "productions"
                ? `bg-customGreen text-white`
                : `bg-customGreen/20 hover:bg-customGreen/50 text-black`
            }`}
            onClick={() => navigate("/productions")}
          >
            <p className="text-lg font-medium">PRODUCTIONS</p>
          </div>
          <div
            className={`w-fit cursor-pointer ${
              selectedPage === "news & upcoming"
                ? `bg-customGreen text-white`
                : `bg-customGreen/20 hover:bg-customGreen/50 text-black`
            }`}
            onClick={() => navigate("/upcoming")}
          >
            <p className="text-lg font-medium">NEWS & UPCOMING</p>
          </div>
        </div>
        {showContactInfo && (
          <div className="flex flex-col gap-3">
            <p className="text-black text-lg font-medium bg-customGreen/20 w-fit">
              CONTACT
            </p>
            <div className="flex flex-col gap-10">
              <span className="text-black text-md font-regular">
                <p>Representation</p>
                <p>Adam Turkel, WME</p>
                <p>aturkel@wmeagency.com</p>
              </span>
              <span className="text-black text-md font-regular">
                <p>Personal</p>
                <p>francescasabel18@gmail.com</p>
                <p>(646) 599-4867</p>
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="lg:col-span-4 col-span-5 row-span-7 lg:pt-10 lg:pr-10 pt-5 mb-10 h-full">
        {content}
      </div>
      {showContactInfo && selectedPage === "about" && (
        <div className="lg:hidden w-full items-center text-center col-span-5 flex flex-col gap-3">
          <p className="text-black text-lg font-medium bg-customGreen/20 w-fit">
            CONTACT
          </p>
          <div className="flex flex-col gap-10">
            <span className="text-black text-md font-regular">
              <p>Representation</p>
              <p>Adam Turkel, WME</p>
              <p>aturkel@wmeagency.com</p>
            </span>
            <span className="text-black text-md font-regular">
              <p>Personal</p>
              <p>francescasabel18@gmail.com</p>
              <p>(646) 599-4867</p>
            </span>
          </div>
        </div>
      )}
      {menuOpen && (
        <div className="absolute items-end bg-white top-14 right-2 z-200 flex flex-col gap-2 border border-black p-1 lg:hidden md:hidden">
          <div
            className={`w-fit cursor-pointer ${
              selectedPage === "about"
                ? `bg-customGreen text-white`
                : `bg-customGreen/20 hover:bg-customGreen/50 text-black`
            }`}
            onClick={() => navigate("/about")}
          >
            <p className="text-lg font-medium">ABOUT</p>
          </div>
          <div
            className={`w-fit cursor-pointer ${
              selectedPage === "productions"
                ? `bg-customGreen text-white`
                : `bg-customGreen/20 hover:bg-customGreen/50 text-black`
            }`}
            onClick={() => navigate("/productions")}
          >
            <p className="text-lg font-medium">PRODUCTIONS</p>
          </div>
          <div
            className={`w-fit cursor-pointer ${
              selectedPage === "news & upcoming"
                ? `bg-customGreen text-white`
                : `bg-customGreen/20 hover:bg-customGreen/50 text-black`
            }`}
            onClick={() => navigate("/upcoming")}
          >
            <p className="text-lg font-medium">NEWS & UPCOMING</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;
