import Layout from "../components/Layout";

function ProductionsContent() {
  return (
    <>
      <p>Productions content</p>
    </>
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
