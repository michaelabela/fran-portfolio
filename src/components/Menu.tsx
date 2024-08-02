import { TPage } from "../lib/types";
import { useNavigate } from "react-router-dom";

interface IMenuProps {
  showContactInfo: boolean;
  selectedPage: TPage | null;
}

const Menu = ({ showContactInfo, selectedPage }: IMenuProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-10 gap-20">
      <h1
        className="text-4xl text-black font-semibold cursor-pointer"
        onClick={() => navigate("/")}
      >
        Francesca Sabel
      </h1>
      <div className="flex flex-col justify-between grow">
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
    </div>
  );
};

export default Menu;
