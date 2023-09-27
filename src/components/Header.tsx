import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Alignment,
  Classes
} from "@blueprintjs/core";
import { Icon } from "@blueprintjs/core";
import { Colors } from "@blueprintjs/core";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <Navbar style={{ background: Colors.BLACK }} className="nav-header">
      <NavbarGroup align={Alignment.LEFT}>
        <NavLink to="/" style={{ color: Colors.WHITE, textDecoration: "none" }}>
          <NavbarHeading className={Classes.LARGE}>
            <h1 style={{ color: Colors.RED1 }}>BOTFLIX</h1>
          </NavbarHeading>
        </NavLink>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <NavbarHeading>
          <NavLink
            to="/search"
            className={({ isActive }) => (isActive ? "hide" : "")}
          >
            <Icon icon="search-text" size={25} intent="danger" />
          </NavLink>
        </NavbarHeading>
      </NavbarGroup>
    </Navbar>
  );
}
