'use client';
import "./navBar.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function NavBar() {

    const router = useRouter();

    return (
        <div className="navBarContainer">
            <Link className="navBarTitle" href="/">UniTrack</Link>
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
