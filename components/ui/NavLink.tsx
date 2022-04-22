import Link from "next/link";

const NavLink = ({ url, text }: { url: string; text: string }) => {
  return <Link href={url.toLowerCase()}>{text}</Link>;
};

export default NavLink;
