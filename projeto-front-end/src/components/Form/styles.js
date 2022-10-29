import styled from "styled-components";

export const ContainerLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .error {
      color: var(--error);
      font-size: 12px;
    }
  }
`;

export const ContainerRegister = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  .infoSelector {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .error {
      color: var(--error);
      font-size: 12px;
    }
  }
`;
