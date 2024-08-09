import Layout from "../components/Layout";

function AboutContent() {
  return (
    <div className="h-full flex flex-col items-center gap-3 overflow-scroll">
      <img src="/images/Sabel_Headshot.jpeg" className="lg:w-1/3 w-2/3" />
      <p className="font-regular lg:w-7/12 w-10/12">
        Francesca Sabel is a Brooklyn-based director specializing in new play
        development. Her work aims to be 'easy to enter and difficult to leave,'
        emphasizing off-kilter rhythms, uncanny architectures, and structural
        surprise. In addition to directing new work at venues including the
        Atlantic Theater Company, Clubbed Thumb, Ars Nova, BEDLAM, Studio
        Theatre, and New York City Center, she has assisted (mostly on world
        premieres) for directors like Knud Adams, Caitlin Sullivan, Steve
        Broadnax, and Sam Pinkleton. She is an Artist in Residence at the
        Roundabout Directors Group, a member of the Tank Artists' Group for
        playwrights and directors, an alum of 24 Hour Plays: Nationals, and a
        reader for the Playwrights’ Center and Playwrights Realm. Previously,
        she led casting and community engagement as Studio Theatre’s Creative
        Producer. BA: Brown University.
      </p>
      <a
        href="/files/Sabel_Resume_Summer_24.pdf"
        className="font-regular justify-self-end hover:bg-customGreen/20"
        download
      >
        <u>RESUME</u>
      </a>
    </div>
  );
}

function About() {
  return (
    <Layout
      showContactInfo={true}
      selectedPage="about"
      content={<AboutContent />}
    />
  );
}

export default About;
