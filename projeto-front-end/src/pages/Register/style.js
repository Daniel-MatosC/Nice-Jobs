import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  padding: 30px 20px;

  .registerForm {
    border-radius: 15px;
    width: 100%;
    padding: 20px 15px;
    background-color: var(--white);
    margin: 0 auto;
    max-width: 1170px;

    .redirectDiv {
      text-align: center;
      margin-top: 40px;
      font-size: 14px;

      a {
        color: var(--color-primary);

        :hover {
          color: var(--color-primary-focus);
        }
      }
    }

    .imgDiv {
      text-align: center;
    }

    img {
      width: 70%;
    }

    form {
      display: flex;
      flex-direction: column;

      select {
        height: 49px;
        padding: 0 15px;
        margin: 15px 0;
        border: 0;
        border-radius: 10px;
        background-color: var(--grey-3);
      }

      .selectDiv {
        display: flex;
        flex-direction: column;
      }

      span {
        color: var(--error);
        margin: 5px 0 12px 0;
        font-size: 12px;
      }
    }
  }

  @media screen and (min-width: 328px) {
    .registerForm {
      width: 293px;
    }
  }
  @media screen and (min-width: 1200px) {
    .registerForm {
      width: 70%;
      height: 30%;

      .imgDiv {
        text-align: center;
      }

      img {
        width: 20%;
      }
    }

    .form {
      display: flex;
      justify-content: space-evenly;
      .column {
        width: 40%;
      }

      input {
        height: 51px;
      }

      label {
        font-size: 16px;
      }
    }

    .button {
      width: 50%;
    }
  }
`;
