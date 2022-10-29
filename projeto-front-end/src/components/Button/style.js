import styled from "styled-components";

export const Container = styled.div`
  .button {
    background-color: var(--color-primary);
    color: var(--white);
    border-radius: 5px;
    height: 50px;
    max-width: 100%;
    font-weight: 700;
    text-transform: none;
    padding: 17px;

    :hover {
      background-color: var(--color-primary-focus);
      color: var(--black);
    }
  }

  @media screen and (min-width: 1200px) {
    text-align: center;
  }
`;
