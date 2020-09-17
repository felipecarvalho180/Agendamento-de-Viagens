import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 999px) {
    justify-content: space-between;
  }

  & > :first-child {
    margin-right: 10px;
  }
`;

const Divider = styled.div`
  border: 1px solid #cbd5e0;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 75px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & > :first-child {
    display: flex;
    align-items: center;
  }

  & > :last-child {
    display: flex;
    align-items: center;
  }

  & > :first-child > * {
    margin-right: 24px;
  }

  & > :first-child > :last-child {
    margin-right: 0;
  }

  & > :last-child > * {
    margin-right: 24px;
  }

  & > :last-child > :last-child {
    margin-right: 0;
  }
`;

const Links = styled.a`
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.div`
  padding: 14px 18px;
  border: solid 2px #fff;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    background-color: #fff;
    color: #a0aec0;
  }
`;

export { Wrapper, ContentWrapper, Divider, Links, LoginButton, LinksWrapper };
