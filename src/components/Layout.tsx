import { useNavigate } from "react-router-dom";
import { TPage } from "../lib/types";

interface ILayoutProps {
  showContactInfo: boolean;
  selectedPage: TPage | null;
  content: React.ReactNode;
}

function Layout({ showContactInfo, selectedPage, content }: ILayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-5 grid-rows-8 max-h-screen min-h-screen">
      <div className="col-span-5 p-10">
        <h1
          className="text-4xl text-black font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Francesca Sabel
        </h1>
        <p className="font-mediumSerif text-3xl italic">Director</p>
      </div>
      <div className="row-span-7 p-10 flex flex-col justify-between">
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
      <div className="col-span-4 row-span-7 pt-10 pr-10 mb-10 h-full">
        {content}
      </div>
    </div>
  );
}

export default Layout;
