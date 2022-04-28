import Link from "next/link";
import { NavLinkProps } from "../../types/types";

const NavLink = ({ href, text }: NavLinkProps) => {
  return (
    <Link href={href.toLowerCase()} passHref>
      <span className="cursor-pointer inline">{text}</span>
    </Link>
  );
};

export default NavLink;
