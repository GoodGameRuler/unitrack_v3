import "./index.css"

export default function Home() {
  return (
    <div className="aboutUsContainer">
      <div className="contentContainer">
        <h1 className="pageHeader"> Welcome to UniTrack! </h1>
        <div className="body">
          <p> Unitrack features an easy and simple way to plan your degree at The University of Sydney. Click on Degree Planning to Get Started! </p>
        </div>
      </div>
      <Divider />
      
      <div className="contentContainer">
        <h2 className="subheading"> Our Story </h2>
        <div className="body">
          <p> 
            Unitrack first came to life as a project submission for <a href="https://www.sydney.edu.au/engineering/industry-and-community/partner-with-us/coding-fest.html">Coding Fest 2023</a> by
            4 undergraduate students. One of the toughest challenges we encountered upon starting university was navigating degree planning with multiple websites and resources
            provided by the university. Degree planning is not only crucial for students to graduate with correct requirements, but also to conveniently and efficiently plan out semesters.
            Hence, we thought, <em>what is more exciting than building our own degree planner?</em>
          </p>
        </div>
      </div>
      <Divider />
      
      <div className="contentContainer">
        <h2 className="subheading"> Meet the Current Team </h2>
        <div class="profileContainer">
            <a href="https://github.com/jennifermtan" className="profilePhoto jenny"> </a>
            <a href="https://github.com/GoodGameRuler" className="profilePhoto udit"> </a>
        </div>
      </div>
      <Divider />

      <div className="contentContainer">
        <h2 className="subheading"> Keen to Contribute? </h2>
        <div className="profileContainer">
            <a href="https://github.com/GoodGameRuler/unitrack_v3" className="profilePhoto githubSVG"></a>
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
