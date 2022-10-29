import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  padding: 0 15px;

  .align {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;

    .tittleImage {
      display: none;
    }

    .board {
      background-color: var(--white);
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 10px;
      width: 100%;

      .logoForm {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 271px;
        }

        h1 {
          font-size: 18px;
          text-align: center;
          margin-bottom: 30px;
          width: 80%;
          color: var(--color-primary);
        }

        form {
          width: 100%;
          margin-bottom: 20px;
        }

        p {
          font-size: 16px;
          width: 80%;
          text-align: center;

          a {
            color: var(--color-primary);
            :hover {
              color: var(--color-primary-focus);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .align {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;

      .tittleImage {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--color-primary);
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;

        h1 {
          font-size: 32px;
          font-weight: 400;
          width: 80%;
          text-align: center;
          margin-top: 80px;
          color: var(--white);
        }

        .container {
          width: 600px;
        }
      }

      .board {
        width: 585px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

        .logoForm {
          img {
            width: 413px;
          }

          h1 {
            display: none;
          }

          label {
            font-size: 20px;
          }

          input,
          .inputPassword {
            height: 51px;
            font-size: 16px;
          }
          button {
            height: 51px;
            font-size: 20px;
          }
        }
      }
    }
  }
`;
