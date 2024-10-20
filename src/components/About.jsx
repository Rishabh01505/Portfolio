import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p>
            This section includes my Education, Skills, Internships and
            Certifications.
          </p>
          <br />
          <h1 className="text-green-500 text-semibold text-xl">Education</h1>
          <span>
            <b>B.Tech in Information Technology</b>
            <br />
            Dec 2020 - Jun 2024
            <br />
            Bharati Vidyapeeth’s College of Engineering, Delhi (BVCOE)
            <br />
            Affiliated to Guru Gobind Singh Indraprastha University, Delhi
            (GGSIPU), Approved by All India Council for Technical Education
            (AICTE) and NBA Accredited.
            <br />
            CGPA: 8.46 | Equivalent Percentage: 84.60 | Division: First
            <br />
            <br />
            <b>CBSE Class 12</b>
            <br />
            Apr 2018 - Mar 2019
            <br />
            Arwachin International School, Delhi
            <br />
            Aggregate Percentage: 90.66
            <br />
            <br />
            <b>CBSE Class 10</b>
            <br />
            Apr 2016 - Mar 2017
            <br />
            Arwachin International School, Delhi
            <br />
            CGPA: 10.00 | Equivalent Percentage: 95.00
          </span>
          <br /> <br />
          <h1 className="text-green-500 text-semibold text-xl">
            Skills & Expertise
          </h1>
          <span>
            - Programming Languages: Core Java, JavaScript, C.
            <br />
            - Data Structures and Algorithms (DSA)
            <br />
            - Front-End Development: HTML, CSS, JavaScript, Tailwind CSS,
            React.js, Redux.
            <br />
            - Back-End Development: Node.js, Express.js, MongoDB, MySQL.
            <br />
            - Version Control: Git, GitHub.
            <br />
            - IDEs and Tools: Visual Studio Code, IntelliJ IDEA, Postman,
            Android Studio.
            <br />- Deployment Platforms: Netlify, Render.
          </span>
          <br /> <br />
          <h1 className="text-green-500 text-semibold text-xl">
            Trainings/Internships
          </h1>
          <span>
            <b>VaultofCodes - Frontend Web Development</b>
            <br />
            Sep 2024 - Oct 2024 <br />
            - Enhanced my expertise in frontend web technologies (HTML, CSS, JS,
            React) through hands-on experience. <br />- Finalized the design and
            functionality of the client website. <br />- Designed a responsive
            portfolio website for the client.
          </span>
          <br /> <br />
          <h1 className="text-green-500 text-semibold text-xl">
            Certifications
          </h1>
          <span>
            <b>Coding Ninjas - Data Structures in JAVA</b>
            <br />
            Nov 2021
            <br />
            <a
              href="https://certificate.codingninjas.com/verify/e3d09ba42a0ca526"
              target="blank"
            >
              <i>
                <u>Certificate</u>
              </i>
            </a>
            <br />
            <br />
            <b>Coding Ninjas - Introduction to JAVA</b>
            <br />
            Jul 2021
            <br />
            <a
              href="https://certificate.codingninjas.com/verify/fcf9b1425598c91c"
              target="blank"
            >
              <i>
                <u>Certificate</u>
              </i>
            </a>
          </span>
          {/* <h1 className="text-green-500 text-semibold text-xl">
            Accomplishments
          </h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            debitis!
          </span> */}
        </div>
      </div>
      <hr />
    </>
  );
}

export default About;
