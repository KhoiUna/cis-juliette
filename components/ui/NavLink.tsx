import Link from "next/link";
import { NavLinkProps } from "../../types/types";

const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <Link href={href.toLowerCase()} passHref>
      <p className="cursor-pointer inline">{text}</p>
    </Link>
  );
};

export default NavLink;
