import React from "react";
import { Provider } from "react-redux";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Home from "./pages/home";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <GlobalStyle />
        <Home />
      </Wrapper>
    </Provider>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #a0aec0 0%, #718096 100%);
  height: 547px;
  padding: 13px 20px 0 20px;
`;

export default App;
