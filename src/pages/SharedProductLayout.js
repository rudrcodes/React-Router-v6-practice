import { Outlet } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

const SharedProductLayout = () => {
  return (
    <>
    <section className="section">

      <h2>Product</h2>
    </section>
      <Outlet />
    </>
  );
};
export default SharedProductLayout;
