import styled from "styled-components";

export const FooterStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;&display=swap");
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
  }
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .blueLine {
    height: 1px;
    background-color: var(--color-primary);
    width: 100vw;
  }

  img {
    width: 40vw;
    max-width: 150px;
    height: 15vh;
    max-height: 80px;
  }

  .links {
    margin: 10px;
    width: 10vw;
    max-width: 25px;
    height: 5vh;
    max-height: 25px;
  }

  .credits {
    font-weight: 200;
    width: 100vw;
    max-width: 250px;
    text-align: center;
    font-size: 15px;
  }
`;
