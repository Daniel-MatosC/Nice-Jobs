import styled from "styled-components";

export const Container = styled.div`
  .headerModal {
    background: var(--color-primary);
    height: 61px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .h3EditPerfil {
    color: var(--white);
    padding-top: 21px;
    font-size: 23px;
    padding-left: 76px;
  }

  p {
    padding-left: 276px;
    margin-top: -22px;
    font-size: 21px;
    color: var(--white);
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    background-color: var(--grey-3);
    width: 266px;
    padding-left: 10px;
    height: 35px;
    margin-left: 15px;
    border-radius: 6px;
  }

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 27px;
    margin-top: 7px;
    margin-left: 20px;
  }

  button {
    width: 266px;
    margin-left: 17px;
    margin-top: 18px;
    height: 35px;
    border-radius: 6px;
    background: var(--color-primary);
    color: var(--white);
    border: none;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  margin: 2px 0px;
  background-color: transparent;
  border: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-primary);
  cursor: pointer;
`;
