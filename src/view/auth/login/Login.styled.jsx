import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);

  .login-btn {
    width: 180px;
    border-radius: 30px;
    :hover {
      outline: 1px solid #1976d2;
      background-color: #1976d2;
      color: white;
    }
  }
`;
