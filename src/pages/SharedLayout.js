import { Link, Outlet } from "react-router-dom";
import StyledNavbar from "./StyledNavbar";

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <footer>OUR footer</footer>
    </>
  );
};
export default SharedLayout;
