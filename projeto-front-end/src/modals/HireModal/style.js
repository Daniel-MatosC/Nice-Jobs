import styled from "styled-components";

export const HireStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  .hireButton {
    background-color: var(--color-primary);
    color: var(--white);
    border: none;
    border-radius: 3px;
    width: 170px;
    height: 30px;
    font-size: 14px;
    font-weight: 300;
  }

  .hireButton:hover {
    background-color: var(--color-primary-focus);
  }

  .hireModal {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--white);
    border-radius: 10px;
    height: 50vh;
    max-height: 370px;
  }

  .contacts p {
    width: 70%;
    text-align: center;
    font-weight: 600;
  }

  .contacts {
    background-color: var(--color-primary);
    color: var(--white);
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0px 0px;
    font-size: 14px;
  }

  .otherInfos {
    margin-top: 20px;
    align-items: center;
  }

  .infos {
    color: var(--color-primary);
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 20px;
    width: 25px;
    height: 25px;
  }

  .crown {
    color: var(--premium-detail);
  }
`;
