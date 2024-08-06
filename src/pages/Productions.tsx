import Layout from "../components/Layout";
import { productions } from "../lib/productions-list";
import { IProduction } from "../lib/types";
import { useNavigate } from "react-router-dom";

function ProductionsContent() {
  const navigate = useNavigate();

  return (
    <div className="h-full grid grid-cols-3 gap-x-10 gap-y-12 overflow-scroll pl-20 pr-20">
      {productions.map((production: IProduction) => {
        return (
          <div
            className="col-span-1 flex flex-col items-center cursor-pointer"
            key={production.id}
            onClick={() => navigate(`/productions/${production.id}`)}
          >
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                className="object-cover w-full h-full"
                src={production.images[0]}
                loading="lazy"
              />
            </div>
            <p className="text-center mt-2">{production.title}</p>
          </div>
        );
      })}
    </div>
  );
}

function Productions() {
  return (
    <Layout
      showContactInfo={true}
      selectedPage="productions"
      content={<ProductionsContent />}
    />
  );
}

export default Productions;
