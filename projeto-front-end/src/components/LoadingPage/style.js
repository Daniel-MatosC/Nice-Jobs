import styled from "styled-components";

export const Container = styled.div`
  .header {
    height: 93px;
    width: 100%;
  }

  .title {
    display: none;
  }

  .servicesContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin: 40px 16px 0;

    .buttonNext {
      display: none;
    }

    .services {
      width: 1000px;
      height: 270px;
    }
  }

  .footer {
    margin: 10% 0 20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .lineFooter {
      width: 100%;
      height: 1px;
    }

    .footerContainer {
      display: flex;
      width: 255px;
      align-items: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 10px;

      .social {
        display: flex;
        gap: 5px;

        .instagram {
          width: 25px;
          height: 25px;
        }

        .facebook {
          width: 25px;
          height: 25px;
        }

        .github {
          width: 25px;
          height: 25px;
        }

        .linkedIn {
          width: 25px;
          height: 25px;
        }
      }

      .logo {
        width: 130px;
        height: 70px;
      }

      .info {
        width: 245px;
        height: 80px;
      }
    }
  }

  .loading {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .loadingContent {
      text-align: center;
      display: flex;
      align-items: center;
      background-color: var(--white);
      border-radius: 50%;
      box-shadow: 0px 10px 28px 4px rgba(0, 0, 0, 0.3);

      .container {
        width: 300px;
      }
    }
  }

  @media screen and (min-width: 770px) {
    .title {
      display: block;
      width: 257px;
      height: 24px;
      padding: 20px 0;
      margin: 0 auto;
      margin-top: 25px;
    }
    .servicesContainer {
      .buttonNext {
        display: block;
        width: 70px;
        height: 60px;
      }
    }
  }
`;
