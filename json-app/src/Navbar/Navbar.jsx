import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", text: "Home" },
  { to: "/product", text: "Products" },
  { to: "/singleproduct", text: "Single Product" },
  { to: "/contact", text: "Contact" },
  { to: "/login", text: "Login" },
];

export function Navabr() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        width: "85%",
        margin: "auto",
      }}
      className="Navbar"
    >
      {links.map((el) => {
        return (
          <NavLink
            key={el.text}
            style={({ isActive }) => {
              return isActive
                ? {
                    border: "1px solid black",
                    padding: "0.4rem",
                    borderRadius: "10px",
                    transition: "0.7s",
                    color: "teal",
                    textDecoration: "none",
                  }
                : { color: "black", textDecoration: "none" };
            }}
            to={el.to}
          >
            {el.text}
          </NavLink>
        );
      })}
    </div>
  );
}
