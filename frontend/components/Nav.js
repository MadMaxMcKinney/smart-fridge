import Logo from "./Logo";
import Link from "next/link";

const Nav = () => {
    return (
        <Link href="/">
            <a>
                <Logo />
            </a>
        </Link>
    );
};

export default Nav;
