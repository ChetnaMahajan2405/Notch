import { ReactNode } from "react";
import { LOGO_URL } from "constant/api.url";
import Image from "../Image";
import "./header.scss";

interface Props {
  children: ReactNode;
}

const Header = ({ children }: Props) => {
  return (
    <>
      <div className="header">
        <Image
          className="logo"
          src={LOGO_URL}
          alt="notch-logo"
        />
      </div>
      {children}
    </>
  );
};

export default Header;
