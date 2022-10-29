import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 24px;
  height: auto;
  .title {
    background-color: var(--color-primary);
    width: 100%;
    height: 40%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    color: var(--white);
    h3 {
      font-size: 20px;
    }
    button {
      background-color: transparent;
      border: 0;
      color: var(--white);
      cursor: pointer;
    }
    button:hover {
      color: var(--black);
    }
  }
  .body {
    background-color: var(--white);
    width: 100%;
    padding: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    label {
      font-size: 14px;
      padding: 0 10px;
    }
    select {
      height: 40px;
      width: 100%;
      padding: 0 15px;
      margin: 15px 0;
      border: 0;
      border-radius: 10px;
      background-color: var(--grey-3);
    }

    Button {
      font-size: 18px;
    }
    .error {
      color: var(--error);
      font-size: 12px;
      width: 100%;
      padding: 0 10px;
    }
  }
  @media screen and (min-width: 320px) {
    width: 293px;
  }
  @media screen and (min-width: 1200px) {
    width: 380px;
    .title {
      padding: 30px;
    }
    .body {
      height: 520px;
      Input {
        height: 49px;
      }
      select {
        height: 49px;
      }
    }
  }
`;

export const ModalButton = styled.button`
  margin: 2px 0px;
  background-color: transparent;
  border: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
  cursor: pointer;
`;
