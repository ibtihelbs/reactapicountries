import { Outlet } from "react-router-dom";
import ThemeSwicher from "../componants/ThemeSwicher";

const Root = () => {
  return (
    <>
      <ThemeSwicher />
      <Outlet />
    </>
  );
};

export default Root;
