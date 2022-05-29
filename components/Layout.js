import Navbar from "./Navbar";
import Footer from "./Footer";
import ValoNavbar from "./ValoNavbar/ValoNavbar";

const Layout = ({ children }) => {
  return (
    <div className="content geo-bg">
      {/* <ValoNavbar /> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
