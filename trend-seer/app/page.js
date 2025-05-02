import Image from "next/image";
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
export default function Home() {
  return (
      // <h1>Hello</h1>
      <div>
            <Header/>
            <div className="flex">
            <Sidebar/>
            <HomePage/>
            </div>
            <Footer/>
      </div>
  );
}
