import { getDegrees, getMajors } from "../api/utils/degrees";
import "./degreePlanner.css";
import Details from "./details";

// import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export default async function DegreePlanner() {
    const degrees = await getDegrees();
    return <Details degrees={degrees} />;
}
