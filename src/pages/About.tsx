import Layout from "../components/Layout";

function AboutContent() {
  return (
    <div className="h-full flex flex-col items-center gap-3 overflow-scroll pb-10">
      <img src="/images/Sabel_Headshot.jpeg" className="lg:w-1/3 w-2/3" />
      <p className="font-regular lg:w-7/12 w-10/12">
        Francesca Sabel is a Brooklyn-based director of new plays. She has
        directed and developed work with Ars Nova, the Atlantic Theater Company,
        BEDLAM, the Brick, Classic Stage, Clubbed Thumb, the Working Theater and
        the Playwrights’ Realm. She has also worked as assistant or associate to
        directors including Anne Kauffman, Neil Pepe, Steve Broadnax, and Knud
        Adams. Currently, she is developing new plays with Eliana
        Theologides-Rodriguez, Kallan Dana, and Madison Fiedler.
      </p>
      <p className="font-regular lg:w-7/12 w-10/12">
        Francesca has been an Artist in Residence at Roundabout Theater Company,
        Portland Theater Festival, the Cell, the 24 Hour Plays and TAG at the
        Tank. Previously, she led casting and community engagement as Studio
        Theatre’s Creative Producer (DC). She is a graduate of Brown University,
        where she studied English and early American history.
      </p>
      <a
        href="/files/Sabel_Resume_Spring_2q5.pdf"
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
