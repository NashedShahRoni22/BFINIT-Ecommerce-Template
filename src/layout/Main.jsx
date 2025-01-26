import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar/Navbar";
import CategoryBar from "../components/shared/CategoryBar";
import Footer from "../components/shared/Footer";

export default function Main() {
  return (
    <div className="font-roboto">
      <Navbar />
      {/* Large Device Sticky Category Bar */}
      <CategoryBar />
      <Outlet />
      <Footer />
    </div>
  );
}
