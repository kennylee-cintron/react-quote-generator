import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="nav">
      <NavLink to="/"> Quote </NavLink>
      {/*<NavLink to="/signup"> Sing up </NavLink>*/}
      <NavLink to="/messageBoard">Message me</NavLink>
      {/* <NavLink to="/login"> Login </NavLink> */}
    </div>
  );
}
