import styled from "styled-components";

export const Div = styled.div`
  cursor: pointer;
  z-index: 1;

  .icon {
    width: fit-content;
    height: 44px;
    position: relative;
    padding: 10px;
    top: -15%;
    margin-left: 10px;
  }

  .hamburguer {
    top: 50%;
    left: 10%;
    width: 30px;
    height: 3px;
    border-radius: 3px;
    background: #000;
    position: absolute;
    box-shadow: 0, 2px, 5px rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    &::before {
      top: -8px;
      content: "";
      position: absolute;
      width: 30px;
      height: 3px;
      border-radius: 3px;
      background: #000;
      box-shadow: 0, 2px, 5px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }

    &::after {
      top: 8px;
      content: "";
      position: absolute;
      width: 30px;
      height: 3px;
      border-radius: 3px;
      background: #000;
      box-shadow: 0, 2px, 5px rgba(0, 0, 0, 0.2);
      transition: 0.3s;
    }
  }

  .list {
    width: 160px;
    display: flex;
    flex-direction: column;
    padding: 9px 0;
    flex-wrap: nowrap;
    color: #06c3bd;
    line-height: 17px;

    .crown {
      color: #ffb71c;
    }
  }

  .list.lisItems {
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
    font-weight: 600;
    padding: 7px 0 7px 10px;
    :hover {
      background-color: var(--grey-3);
    }
  }

  .icon.iconActive .hamburguer {
    background: transparent;
    box-shadow: 0, 2px, 5px transparent;
  }

  .icon.iconActive .hamburguer::after {
    top: 9px;
    left: -4px;
    background: #06a9bd;
    transform: rotate(225deg);
    box-shadow: 0, -2px, 5px rgba(0, 0, 0, 0.2);
  }

  .icon.iconActive .hamburguer::before {
    top: 9px;
    left: -4px;
    background: #06a9bd;
    transform: rotate(135deg);
    box-shadow: 0, -2px, 5px rgba(0, 0, 0, 0.2);
  }

  .menu.menuOpen {
    position: absolute;
    margin-left: 1px;
    width: 127px;
    background: #fff;
    width: 160px;
    border-radius: 15px;
    box-shadow: 10px 0 69px 0 rgba(0, 0, 0, 0.29);
  }

  .menu.menuClose {
    display: none;
  }
  @media screen and (min-width: 768px) {
    ul {
      padding: 0;
    }

    li {
      margin: 20px 0;
      font-weight: 600;
    }
    .menu.menuOpen {
      height: fit-content;
    }
  }
`;
