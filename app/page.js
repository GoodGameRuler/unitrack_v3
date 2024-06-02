import "./index.css"

function Home() {
  return (
    <>
    <h2 className="pageHeader"> Welcome to UniTrack </h2>
    <em> Hello welcome to UniTrack. Our goal is to make Degree Planning at The Univeristy of Sydney Simplier. Click on Degree Planning to Get Started. </em>
    <hr />
    <h3> Meet the Current Team </h3>
    <div className="circlesContainer">
        <span className="profilePhoto"> </span>
        <span className="profilePhoto"> </span>
        <span className="profilePhoto"> </span>
        <span className="profilePhoto"> </span>
        <span className="profilePhoto"> </span>
    </div>
    <hr />
    <h3> Keen to Contribute? </h3>
    <div className="circlesContainer">
        <span className="profilePhoto githubSVG">  </span>
    </div>

    </>
  );
}

export default Home;