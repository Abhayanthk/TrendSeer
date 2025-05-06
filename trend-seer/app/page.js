import Image from "next/image";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
export default function Home() {
  return (
      // <h1>Hello</h1>
      <div>
            <NavBar/>
            <HomePage/>
            <Footer/> 
        
      </div>
  );
}
