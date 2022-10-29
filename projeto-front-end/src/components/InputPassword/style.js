import styled from "styled-components";

export const Container = styled.div`
  label {
    font-size: 14px;
    margin: 15px 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    margin-top: 12px;
    border-radius: 10px;
    background-color: var(--grey-3);
    input {
      border: 0;
      outline: 0;
      height: 100%;
      width: 80%;
      background-color: transparent;
    }
  }
`;
