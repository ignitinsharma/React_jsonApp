import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", text: "Home" },
  { to: "/login", text: "Login" },
  { to: "/product", text: "Product" },
  { to: "/singleproduct", text: "Singleproduct" },
  { to: "/contact", text: "Contact" },
];

export function Navabr() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
      }}
      className="Navbar"
    >
      {links.map((el) => {
        return (
          <NavLink
            style={({ isActive }) => {
              return isActive
                ? {
                    border: "1px solid black",
                    padding: "0.4rem",
                    borderRadius: "10px",
                    transition: "0.7s",
                    color: "teal",
                  }
                : { color: "black" };
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
