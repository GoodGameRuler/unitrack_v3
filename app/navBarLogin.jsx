
// TODO Later
// This functional contains the login/register buttons for the navbar
// At the moment do not export to prevent access of the api
function navBarLogin() {
    return (
        <div className="userLoginDetails">
            <div className="loginInfoContainer" id="scrollBot">
                <div className="hiddenButtons">
                    <button className="navBarButton" onClick={() => {console.log("Working")}}>
                        <i className="material-icons">auto_stories</i>&nbsp;&nbsp;
                        Settings
                    </button>
                    <button className="navBarButton" onClick={() => {console.log("Working")}}>
                        <i className="material-icons">auto_stories</i>&nbsp;&nbsp;
                        Sign In
                    </button>
                    <button className="navBarButton" onClick={() => {console.log("Working")}}>
                        <i className="material-icons">auto_stories</i>&nbsp;&nbsp;
                        Register
                    </button>
                    <hr className="solid" />
                </div>
                <div className="buttonColumn" id="anchor">
                    <i className="material-icons">account_circle</i>&nbsp;&nbsp;
                    <div className="buttonRow">
                        Guest User <br />
                        <small>or Sign in here.</small>
                    </div> <br />
                </div>
            </div>
        </div>
    )
}
