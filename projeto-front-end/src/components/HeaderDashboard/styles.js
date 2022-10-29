import styled from "styled-components";

export const Header = styled.header`
  background: #06c3bd;

  .whiteLogo {
    display: none;
  }
  .imgUser {
    width: 55px;
    height: 55px;
    margin-left: 12px;
    position: absolute;
    border-radius: 50%;
  }
  .infoUser {
    padding-top: 20px;
  }
  h2 {
    margin-left: 75px;
    font-weight: 600;
    font-family: "Inter";
    font-size: 20px;
    line-height: 29px;
    color: #ffffff;
  }

  p {
    margin-left: 75px;
    margin-bottom: 30px;
    font-size: 14px;
    color: #ffffff;
  }

  .navegation {
    width: 320px;
    display: flex;
    justify-content: space-around;
    width: 320px;
    .search {
      display: flex;
      align-items: center;
      width: 190px;
      height: 28px;
      background-color: #ffffff;
      border-radius: 10px;
      margin-left: 12px;

      input {
        background-color: transparent;
        padding: 0 10px;
        width: 90%;
      }
      .searchIcon {
        color: #06c3bd;
        margin: 5px;
      }
    }
  }

  @media screen and (min-width: 829px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    .whiteLogo {
      display: block;
      width: 120px;
      height: 90px;
    }
    .infoUser {
      margin-right: 2%;
    }
    .navegationDiv {
      width: 70%;
      margin-left: 2%;
    }
    .navegation {
      gap: 10px;
      width: 60%;
      align-items: center;
      .search {
        height: 40px;
        width: 40%;
      }
    }
  }
`;
