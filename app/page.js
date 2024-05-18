import "./index.css"

export default function Home() {
  return (
    <div className="aboutUsContainer">
      <div className="contentContainer">
        <h1 className="homePageHeader"> Welcome to UniTrack! </h1>
        <div className="body">
          <p> Unitrack features an easy and simple way to plan your degree at The University of Sydney. Click on <em>Degree Plan</em> to get started! </p>
        </div>
      </div>
      <Divider />
      
      <div className="contentContainer">
        <h2 className="subheading"> Our Story </h2>
        <div className="body">
          <p> 
            Unitrack first came to life as a project submission for <a href="https://www.sydney.edu.au/engineering/industry-and-community/partner-with-us/coding-fest.html">Coding Fest 2023</a> by
            4 undergraduate students, which won the Coding Fest 2023 Citadel Securities Best UG Junior Project Award Champion. As undergraduates, one of the toughest challenges we encountered
            upon starting university was navigating degree planning with multiple websites and resources. Hence, we decided to create our own degree planner to streamline the process of degree
            planing for future USYD students!
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
        <h2 className="subheading"> Contributors </h2>
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
            <ProfileLink
              key={'gitparth12'}
              username={'gitparth12'}
              imageUrl={'/images/parth.jpeg'}
            />
            <ProfileLink
              key={'devanshimirchandani'}
              username={'devanshimirchandani'}
              imageUrl={'/images/devu.jpeg'}
            />
            <ProfileLink
              key={'antrikshdhandv'}
              username={'antrikshdhand'}
              imageUrl={'/images/antriksh.png'}
            />
        </div>
      </div>
      <Divider />

      <div className="contentContainer">
        <h2 className="subheading"> Keen to Contribute? </h2>
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
    <a
      href={profileUrl}
      className="profilePhoto"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></a>
  );
};

