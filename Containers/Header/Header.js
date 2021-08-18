import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pages from "../../Data/Pages";
import { GlobalStyle } from "../../Styles/GlobalStyle";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="menu_div">
      <GlobalStyle />
      <header className="menu_head">
          <Link href="/">
            <a>
              <img
                src="https://viessmann.vercel.app/images/viessman%20logo.png"
                alt="logo"
                className="menu_logo"
              />
            </a>
          </Link>
        {Pages.map((v) => (
          <div className="menu_links">
            <Link href={v.href}>
              <a className="menu_bar">
                <FontAwesomeIcon icon={v.icon} className="menu_icon" />
                {v.title}
              </a>
            </Link>
          </div>
        ))}
      </header>
    </div>
  );
};
