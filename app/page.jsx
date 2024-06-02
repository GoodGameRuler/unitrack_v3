import Link from "next/link";
import "./index.css"

export default function Home() {
  return (
    <div className="aboutUsContainer">
      <div className="contentContainer">
        <h1 className="heading"> Welcome to UniTrack! </h1>
        <div className="aboutUsTagline">
          <p> Easy and simple way to plan your degree at The University of Sydney.</p>
        </div>
      </div>
      <Divider />

      <div className="contentContainer">
        <h2 className="subheading"> Our Story </h2>
        <div className="body aboutUs">
          <p>
            Unitrack first came to life as a project submission for <Link href="https://www.sydney.edu.au/engineering/industry-and-community/partner-with-us/coding-fest.html" target="_blank" rel="noopener noreferrer">Coding Fest 2023</Link> by
            4 undergraduate students: Udit Samant, Jennifer Tan, Parth Bhargava, Devanshi Mirchandani. It won the Coding Fest 2023 Citadel Securities Best UG Junior Project Award Champion.
            As undergraduates, one of the toughest challenges we encountered upon starting university was navigating degree planning with multiple websites and resources. Hence, we decided to create
            our own degree planner to streamline the process of degree planning for future USYD students!
          </p>
        </div>
      </div>
      <Divider />

      <div className="contentContainer">
        <h2 className="subheading"> Maintainers </h2>
        <div className="profileContainer">
            <ProfileLink
              key={'jennifermtan'}
              username={'jennifermtan'}
              imageUrl={'/images/jenny.png'}
            />
            <ProfileLink
              key={'GoodGameRuler'}
              username={'GoodGameRuler'}
              imageUrl={'/images/udit.jpeg'}
            />
        </div>
      </div>
      <Divider />

      <div className="contentContainer">
        <h2 className="subheading"> Keen to Contribute? </h2>
        <div className="body aboutUs">See the full team on GitHub!</div>
        <div className="profileContainer">
          <ProfileLink
            key={'github'}
            username={'GoodGameRuler/unitrack_v3'}
            imageUrl={'/images/github-mark.svg'}
          />
        </div>
      </div>
    </div>
  );
}

const Divider = () => {
  return (
    <div className="divider">
      <hr/>
    </div>
  );
};

const ProfileLink = ({ username, imageUrl }) => {
  const profileUrl = `https://github.com/${username}`;

  return (
    <Link
      href={profileUrl}
      className="profilePhoto"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></Link>
  );
};
