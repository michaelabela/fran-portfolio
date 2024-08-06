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
    <div className="grid grid-cols-5 grid-rows-7 max-h-screen min-h-screen">
      <div className="col-span-5 p-10">
        <h1
          className="text-4xl text-black font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Francesca Sabel
        </h1>
      </div>
      <div className="row-span-6 p-10 flex flex-col justify-between">
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
        </div>
        {showContactInfo && (
          <div className="flex flex-col gap-3">
            <p className="text-black text-lg font-medium">CONTACT</p>
            <div className="flex flex-col gap-10">
              <p className="text-black text-md font-regular">
                <div>Representation</div>
                <div>Adam Turkel, WME</div>
                <div>aturkel@wmeagency.com</div>
              </p>
              <p className="text-black text-md font-regular">
                <div>Personal</div>
                <div>francescasabel18@gmail.com</div>
                <div>(646) 599-4867</div>
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="col-span-4 row-span-6 pt-10 pr-10 pb-10 h-full">
        {content}
      </div>
    </div>
  );
}

export default Layout;
