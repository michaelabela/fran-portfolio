import Layout from "../components/Layout";

function HomeContent() {
  return (
    <div className="flex w-100 justify-center pt-40 lg:pt-0">
      <img
        src={"/images/production-images/homofermenters/homofermenters-124.jpg"}
        className="lg:w-2/3 w-10/12"
      />
    </div>
  );
}

function Home() {
  return (
    <Layout
      showContactInfo={false}
      selectedPage="home"
      content={<HomeContent />}
    />
  );
}

export default Home;
