import React, { useContext }  from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";
import { ThemeContext } from "../../context/ThemeContext"

import styled from 'styled-components';

const Title = styled.h1`
  color: #637BF3;
`;

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