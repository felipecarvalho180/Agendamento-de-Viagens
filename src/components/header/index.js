import React from "react";

import LogoSVG from "../../assets/svg/Icon/Logo.js";
import Menu from "../../assets/svg/Icon/Menu.js";
import {
  ContentWrapper,
  Wrapper,
  Divider,
  Links,
  LoginButton,
  LinksWrapper,
} from "./style.js";

function Header(props) {
  return (
    <Wrapper>
      <ContentWrapper>
        <LogoSVG color="#fff" width="60" height="60" />
        {window.innerWidth < 1000 && (
          <Menu color="#fff" width="40" height="40" />
        )}
        {window.innerWidth >= 1000 && (
          <React.Fragment>
            <LinksWrapper>
              <div>
                <Links>Explore</Links>
                <Links>Sobre Nós</Links>
                <Links>Seguros</Links>
                <Links>Hotéis</Links>
              </div>
              <div>
                <Links>Viagens</Links>
                <LoginButton>Login</LoginButton>
              </div>
            </LinksWrapper>
          </React.Fragment>
        )}
      </ContentWrapper>
      <Divider />
    </Wrapper>
  );
}

export default Header;
