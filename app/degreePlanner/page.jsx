import { getDegrees, getMajors } from "../api/utils/degrees";
import "./degreePlanner.css";
import Details from "./details";

export default async function DegreePlanner() {
    const degrees = await getDegrees();
    return <Details degrees={degrees} />;
}
