import { useMatch } from "react-router-dom";
import Layout from "../components/Layout";
import { productions } from "../lib/productions-list";
import { IProduction } from "../lib/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductionContent() {
  const match = useMatch("/productions/:productionId");
  const production: IProduction | undefined = productions.find(
    (item: IProduction) => {
      return item.id === match?.params.productionId;
    }
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col pl-20 gap-5 pb-5">
      <div className="w-1/2">
        {production?.images.length && production?.images.length > 1 ? (
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            transitionDuration={500}
            slidesToSlide={1}
            arrows={false}
          >
            {production?.images.map((image) => {
              return (
                <div key={image}>
                  <img src={image} />
                </div>
              );
            })}
          </Carousel>
        ) : (
          <img src={production?.images[0]} />
        )}
      </div>
      <h3 className="text-xl font-medium">{production?.title}</h3>
      <span className="font-regular">{production?.content}</span>
    </div>
  );
}

function Production() {
  return (
    <Layout
      showContactInfo={true}
      selectedPage="productions"
      content={<ProductionContent />}
    />
  );
}

export default Production;
