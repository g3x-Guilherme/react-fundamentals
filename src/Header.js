import React, { useContext }  from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";
import styles from  './Header.css';

import { ThemeContext } from "./ThemeContext"

export function Header({ title, children }) {

  const { onToggleTheme } = useContext(ThemeContext)

  return (
  <>
  <h1 className={styles.title}>{title}</h1>
  <Button onClick={onToggleTheme}>
    Mudar tema
  </Button>
  {children}
 
  </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

Header.defaultProps = {
  title: `JStack's Blog`,
}