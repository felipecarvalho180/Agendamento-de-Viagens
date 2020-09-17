import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 25px;
  background: #ffffff;
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1),
    0px 10px 10px rgba(0, 0, 0, 0.04);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 15px 25px;
  background: #edf2f7;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 20px 25px rgba(0, 0, 0, 0.1),
    0px 10px 10px rgba(0, 0, 0, 0.04);
  justify-content: flex-end;
  max-width: 1000px;
  margin: 0 auto;
  margin-bottom: 25px;
`;

const InputsWrapper = styled.div`
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export { Wrapper, ButtonWrapper, InputsWrapper };
