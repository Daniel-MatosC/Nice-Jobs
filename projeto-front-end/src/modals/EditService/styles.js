import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 24px;
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
    max-height: 390px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    label {
      font-size: 14px;
      padding: 0 10px;
    }
    Button {
      margin: 0;
      font-size: 18px;
    }
    div {
      display: flex;
      flex-direction: column;
      margin: 15px 0;

      select {
        width: 100%;
        padding-left: 7px;
        margin-top: 10px;
        height: 40px;
        background-color: var(--grey-3);
        border-radius: 10px;
      }
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
        margin: 15px 0;
      }
      Button {
        margin-top: 0;
      }
      select {
        height: 49px;
      }
    }
  }
`;
