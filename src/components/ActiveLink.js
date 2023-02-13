import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

const ActiveLink = ({ router, href, isLeftSideBar = false, children }) => {
  const isCurrentPath = router.pathname === href || router.asPath === href;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  (function prefetchPages() {
    if (typeof window !== 'undefined') router.prefetch(router.pathname);
  })();

  const settings = {
    theme: "light"
  };

  const theme =
    settings.theme === "light" && isLeftSideBar ? '#e65100' : '#ffeb3b';
  const color = isCurrentPath ? theme : '';

  return (
    <Link
      href={href}
      onClick={handleClick}
      style={{
        textDecoration: 'none',
        margin: 16,
        padding: 10,
        fontWeight: isCurrentPath ? 'bold' : 'normal', // I left mine all bold
        border: isCurrentPath ? '3px solid navy' : 'none',
        borderRadius: '25px',
        borderWidth: '3px',
        fontSize: 17,
        fontFamily: 'fantasy',
        textShadow: isCurrentPath ? 'none' : '2px 2px 2px gray',
        background: isCurrentPath ? 'yellow' : 'white', // I left mine all bold
        boxShadow: isCurrentPath ? '2px 2px 7px navy' : 'none', // I left mine all bold

        // color: isLeftSideBar ? '#e65100' : '#ffeb3b',
      }}>
      {children}
    </Link>
  );
};

ActiveLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default withRouter(ActiveLink);
