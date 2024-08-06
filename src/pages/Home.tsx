import Layout from "../components/Layout";

function HomeContent() {
  return (
    <div className="flex w-100 justify-center ">
      <img
        src={"./productions/homofermenters/homofermenters-124.jpg"}
        className="w-2/3"
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
