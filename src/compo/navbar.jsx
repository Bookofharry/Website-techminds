import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css"; // ensure base styles
import "./navbar.css";
import Logo from '../assets/Logo.png'

// Reusable template to render a Menubar item as a <Link>
const linkTemplate = (to) => (item, options) => (
  <Link
    to={to}
    className={options.className}     // keeps PrimeReact styling
    onClick={options.onClick}         // ensures menus close correctly
    style={{ textDecoration: "none" }} // avoid underline
  >
    {item.icon && <span className={item.icon} />}
    <span className="ml-2">{item.label}</span>
  </Link>
);

export default function NavBar() {
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      template: linkTemplate("/"),
    },
    {
      label: "Facilities",
      icon: "pi pi-star",
      template: linkTemplate("/facilities"),
    },
    {
      label: "Programs",
      icon: "pi pi-search",
      items: [
        {
          label: "Coding For Kids Engineering",
          icon: "pi pi-bolt",
          template: linkTemplate("/programs/coding-for-kids-engineering"),
        },
        {
          label: "Data Science",
          icon: "pi pi-server",
          template: linkTemplate("/programs/data-science"),
        },
        {
          label: "Digital Marketing",
          icon: "pi pi-pencil",
          template: linkTemplate("/programs/digital-marketing"),
        },
        {
          label: "Software Engineering",
          icon: "pi pi-palette",
          items: [
            {
              label: "Web Development",
              icon: "pi pi-palette",
              template: linkTemplate("/programs/software-engineering/web-development"),
            },
            {
              label: "App Development",
              icon: "pi pi-palette",
              template: linkTemplate("/programs/software-engineering/app-development"),
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      template: linkTemplate("/contact"),
    },
  ];

  // Logo (left)
  const start = (
    <Link to="/" className="brand" aria-label="Tech Minds Academy Home">
      <img src={Logo} alt="Tech Minds Academy" className="brand-logo" />
      <span className="brand-name">"School Of The Geeks"</span>
    </Link>
  );

  return (
    <div className="card">
      <Menubar model={items} className="custom-menubar" start={start} />
    </div>
  );
}
