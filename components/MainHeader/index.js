import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import NavLink from "../NavLink";

const MainHeader = () => {
  return (
    <header className={classes.header}>
        <Link href="/" className={classes.logo}>
        <Image src={logo} alt="Logo" priority />
        NextLevel Food 
        </Link>

       <nav className={classes.nav}>
        <ul>
            <li>
                <NavLink href="/meals">
                Browse Meals
                </NavLink>
                </li>

                <li>
                <NavLink href="/community">
                Community
                </NavLink>
                </li>
        </ul>
       </nav>
    </header>
  )
}

export default MainHeader;
