/* eslint-disable simple-import-sort/imports */
import { Link } from "react-router-dom";
import Appcard from "../components/AppCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col pt-10">
        <Navbar />
        <Appcard />
        <Link to={"/"}>Go to login</Link>
      </div>
    </>
  );
}
