import React, { useContext }  from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";
import { ThemeContext } from "../../context/ThemeContext"

import Title from '../Title';
export function Header({ title, children }) {

  const { onToggleTheme } = useContext(ThemeContext)

  return (
  <>
  <Title>{title}</Title>
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