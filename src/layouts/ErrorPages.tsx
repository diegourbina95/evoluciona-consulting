import { FC, Fragment } from "react";
import Switcher1 from "./layoutcomponents/Switcher1";

interface ErrorPagesProps {
  children: React.ReactNode;
}

const ErrorPages: FC<ErrorPagesProps> = ({ children }) => {
  document.querySelector("body")?.classList.add("login-img");
  return (
    <Fragment>
      <div>
        <Switcher1 />
        {children}
      </div>
    </Fragment>
  );
};

export default ErrorPages;
