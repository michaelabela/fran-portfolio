import { IProduction } from "./types";

export const productions: IProduction[] = [
  {
    id: "homofermenters",
    title: "HOMOFERMENTERS",
    content: (
      <div>
        <p>TK</p>
      </div>
    ),
    images: [
      "./production-images/homofermenters/homofermenters-35.jpg",
      "./production-images/homofermenters/homofermenters-47.jpg",
      "./production-images/homofermenters/homofermenters-57.jpg",
      "./production-images/homofermenters/homofermenters-93.jpg",
      "./production-images/homofermenters/homofermenters-94.jpg",
      "./production-images/homofermenters/homofermenters-122.jpg",
      "./production-images/homofermenters/homofermenters-124.jpg",
      "./production-images/homofermenters/homofermenters-140.jpg",
      "./production-images/homofermenters/homofermenters-143.jpg",
      "./production-images/homofermenters/homofermenters-173.jpg",
    ],
  },
  {
    id: "swim",
    title: "SWIM",
    content: (
      <div className="flex flex-col gap-5">
        <span>
          <p>by Xiaoyan Kang</p>
          <p>directed by Francesca Sabel</p>
        </span>
        <p>
          starring Brandon Bautista, Casey Landman, Jeada Elaine May, and Kamiah
          Vickers
        </p>
        <p>
          designed by Rachel Fiorito (lights), Kat Belfer (costumes), Amelia Way
          (sound), Emily Fujioka (props)
        </p>
        <p>stage managed by Holly Adam</p>
        <p>24 Hour Plays: Nationals Classic Stage Company</p>
      </div>
    ),
    images: ["./production-images/swim/swim01.jpg"],
  },
  {
    id: "screech_owl",
    title: "SCREECH OWL",
    content: (
      <div className="flex flex-col gap-5">
        <span>
          <p>by Madison Fiedler</p>
          <p>directed by Francesca Sabel</p>
        </span>
        <p>
          starring Laura Harris, Matthew Harris, Ryan Rilette, Andrea Harris,
          and Haley Wong
        </p>
        <p>dramaturgy by Adrien-Alice Hansel</p>
        <p>Studio Theatre (DC)</p>
      </div>
    ),
    images: [
      "./production-images/screech_owl/so02.JPG",
      "./production-images/screech_owl/so01.JPG",
    ],
  },
  {
    id: "this_is_what_the_days_are",
    title: "THIS IS WHAT THE DAYS ARE",
    content: (
      <div className="flex flex-col gap-5">
        <span>
          <p>By Madison Fiedler</p>
          <p>Directed by Francesca Sabel</p>
        </span>
        <p>
          Starring Moe Angelos, John Behlmann, Kayli Carter, Francis Jue, Nicole
          Villamil
        </p>
        <p>Atlantic Theater Company/tall poPpy</p>
      </div>
    ),
    images: [
      "./production-images/this_is_what_the_days_are/this03.jpeg",
      "./production-images/this_is_what_the_days_are/this02.jpeg",
      "./production-images/this_is_what_the_days_are/this01.JPG",
    ],
  },
  {
    id: "your_own_personal_exegesis",
    title: "YOUR OWN PERSONAL EXEGESIS",
    content: (
      <div className="flex flex-col gap-5">
        <span>
          <p>by Julia May Jonas</p>
          <p>directed by Francesca Sabel</p>
        </span>
        <p>
          starring Maaike Laanstra-Corn, Harry Levine, Pablo Richter, Peyton
          Strong, and Haley Wong
        </p>
        <p>
          designed by Leanne Pajot (sets), Claire Chen (lights), Alex Hanesworth
          (sound), Dylan Lewis (props)
        </p>
        <span>
          <p>staged managed by Mikey Abela</p>
          <p>assistant directed by Jason Goodman</p>
        </span>
        <p>Brown University</p>
      </div>
    ),
    images: [
      "./production-images/your_own_personal_exegesis/your01.jpeg",
      "./production-images/your_own_personal_exegesis/your02.jpeg",
    ],
  },
  {
    id: "belleville",
    title: "BELLEVILLE",
    content: (
      <div className="flex flex-col gap-5">
        <span>
          <p>by Amy Herzog</p>
          <p>directed by Francesca Sabel</p>
        </span>
        <p>
          starring Joe Hinton, Sonna Obiorah, Jeremy Roth-Rose, and Tara Sharma
        </p>
        <p>designed by Maaike Laanstra-Corn (costumes)</p>
        <span>
          <p>staged managed by Mikey Abela</p>
          <p>assistant directed by Grace Attanasio</p>
        </span>
        <p>Brown University</p>
      </div>
    ),
    images: ["./production-images/belleville/belleville01.JPG"],
  },
  {
    id: "gone_missing",
    title: "GONE MISSING",
    content: (
      <div className="flex flex-col gap-5">
        <span>
          <p>by The Civilians</p>
          <p>directed by Francesca Sabel</p>
        </span>
        <p>
          starring Masha Breeze, Kyle Brier, Patrick Elizalde, Faith Hardy, Owen
          Ryan, and Haley Wong
        </p>
        <p>
          designed by Francesca Sabel (space), Jason Goodman (lights), Akari
          Izumi (sound), Maaike Laanstra-Corn (costumes)
        </p>
        <span>
          <p>music directed by Caymus Price</p>
          <p>choreographed by Riya Kothari</p>
          <p>staged managed by Miriam Arden</p>
          <p>assistant directed by Dylan Lewis</p>
        </span>
        <p>Brown University</p>
      </div>
    ),
    images: [
      "./production-images/gone_missing/gone01.jpg",
      "./production-images/gone_missing/gone02.jpg",
      "./production-images/gone_missing/gone03.jpg",
    ],
  },
];
