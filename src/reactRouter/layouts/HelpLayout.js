import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website help</h2>
      <p>
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.
      </p>
      <nav>
        <NavLink to="faq">View the faq</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
