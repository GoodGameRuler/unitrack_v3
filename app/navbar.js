'use client';
import "./navbar.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function NavBar() {

    const router = useRouter();

    return (
        <div className="navBarContainer">
            <Link className="navBarTitle" href="/">Unitrack</Link>
            <div className="navBarItemsContainer">
                <button className="navBarButton navBarItem" onClick={() => router.push("/degreePlanner")}>
                    <i className="material-icons">edit_calendar</i>&nbsp;&nbsp;
                    Degree Plan
                </button>
                <button className="navBarButton navBarItem" onClick={() => router.push("/units")}>
                    <i className="material-icons">auto_stories</i>&nbsp;&nbsp;
                    Units
                </button>
            </div>
        </div>
    )
}
// <div className="userLoginDetails">
//     <div className="loginInfoContainer" id="scrollBot">
//         <div className="hiddenButtons">
//             <button className="navBarButton" onClick={() => {console.log("Working")}}>
//                 <i className="material-icons">auto_stories</i>&nbsp;&nbsp;
//                 Settings
//             </button>
//             <button className="navBarButton" onClick={() => {console.log("Working")}}>
//                 <i className="material-icons">auto_stories</i>&nbsp;&nbsp;
//                 Sign In
//             </button>
//             <button className="navBarButton" onClick={() => {console.log("Working")}}>
//                 <i className="material-icons">auto_stories</i>&nbsp;&nbsp;
//                 Register
//             </button>
//             <hr className="solid" />
//         </div>
//         <div className="buttonColumn" id="anchor">
//             <i className="material-icons">account_circle</i>&nbsp;&nbsp;
//             <div className="buttonRow">
//                 Guest User <br />
//                 <small>or Sign in here.</small>
//             </div> <br />
//         </div>
//     </div>
// </div>
