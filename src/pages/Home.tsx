import Layout from "../components/Layout";

function HomeContent() {
  return (
    <>
      <p>Home content</p>
    </>
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
