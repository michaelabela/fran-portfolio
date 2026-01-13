import Layout from "../components/Layout";

function AboutContent() {
  return (
    <div className="h-full flex flex-col items-center gap-3 overflow-scroll pb-10">
      <img src="/images/Sabel_Headshot.jpeg" className="lg:w-1/3 w-2/3" />
      <p className="font-regular lg:w-7/12 w-10/12">
        Francesca Sabel is a Brooklyn-based director specializing in new play
        development. Her work aims to be 'easy to enter and difficult to leave,'
        emphasizing off-kilter rhythms, uncanny architectures, and structural
        surprise. In addition to directing new work at venues including Ars
        Nova, the Atlantic Theater Company, the Brick, Classic Stage, Clubbed
        Thumb, and the Playwrights’ Realm, she has assisted (mostly on world
        premieres) for directors like Knud Adams, Steve Broadnax, Neil Pepe, and
        Caitlin Sullivan. She has been an Artist in Residence at Roundabout
        Theater Company, Portland Theater Festival, the Cell, and the Tank
        Artists’ Group. Previously, she led casting and community engagement as
        Studio Theatre’s Creative Producer (DC). She is a full member of SDC,
        and a graduate of Brown University, where she studied English and early
        American history.
      </p>
      <p className="font-regular lg:w-7/12 w-10/12">
        Up next, Francesca is developing new plays by{" "}
        <a
          className="font-regular lg:w-7/12 w-10/12"
          href="https://www.broadwayworld.com/off-broadway/article/Kallan-Dana-Named-Working-Theater-Playwright-In-Residence-20250814"
        >
          <u>Kallan Dana</u>
        </a>{" "}
        and{" "}
        <a href="https://www.madisonfiedler.net/">
          <u>Madison Fiedler</u>
        </a>
        , and serving as associate director to Annie Kauffman on Clare Barron’s{" "}
        <a
          className="font-regular lg:w-7/12 w-10/12"
          href="https://cherrylanetheatre.org/shows/ygo"
        >
          <u>YOU GOT OLDER (Cherry Lane/A24)</u>
        </a>
        .
      </p>
      <a
        href="/files/Sabel_Resume_Spring_25.pdf"
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
