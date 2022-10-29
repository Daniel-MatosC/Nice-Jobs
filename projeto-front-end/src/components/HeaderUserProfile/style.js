import styled from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 60px;
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px 0;

  .logo {
    display: none;
  }

  .divUm {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 0 10px;
  }

  .divUm > button {
    width: 70px;
    height: 30px;
    background-color: var(--color-primary);
    border: 1px solid var(--white);
    color: var(--white);
    border-radius: 10px;
    cursor: pointer;
  }

  .divUm > button:hover {
    background-color: var(--color-primary-focus);
    transition: 144ms;
  }

  .divDois {
    min-width: 220px;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .divDois > img {
    width: 40px;
  }

  .divDois > div {
    padding: 0 0 0 5px;
  }

  .divDois > div > h1 {
    color: var(--white);
    font-size: 16px;
  }

  .divDois > div > h2 {
    width: 160px;
    color: var(--white);
    font-size: 12px;
  }

  @media screen and (min-width: 500px) {
    .logo {
      display: block;
      width: 100px;
    }
  }
`;
