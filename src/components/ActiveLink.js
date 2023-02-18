import { withRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";
import Link from "next/link";

const ActiveLink = ({ router, href, isLeftSideBar = false, children }) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  (function prefetchPages() {
    if (typeof window !== "undefined") router.prefetch(router.pathname);
  })();

  const settings = {
    theme: "light",
  };

  const theme =
    settings.theme === "light" && isLeftSideBar ? "#e65100" : "#ffeb3b";
  const color = isCurrentPath ? theme : "";

  return (
    <div className="m-3">
      <Link
        href={href}
        onClick={handleClick}
        className={`ml-20 px-2 py-1 font-serif text-2xl text-white
      ${
        isCurrentPath
          ? "rounded-full border-2 border-solid border-black bg-purple-900 text-black shadow-md shadow-black"
          : ""
      }`}
      >
        {children}
      </Link>
    </div>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default withRouter(ActiveLink);
