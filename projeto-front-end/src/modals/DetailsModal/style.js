import styled from "styled-components";

export const DetailsStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  .detailsButton {
    background-color: var(--color-primary);
    color: var(--white);
    border: none;
    border-radius: 3px;
    width: 170px;
    height: 30px;
    font-size: 14px;
    font-weight: 300;
  }

  .detailsButton:hover {
    background-color: var(--color-primary-focus);
  }

  .serviceModal {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    background-color: var(--white);
    border-radius: 10px;
    height: fit-content;
    padding: 0 0 10px 0;
    max-height: 360px;
  }

  .category {
    background-color: var(--color-primary);
    color: var(--white);
    height: 40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px 10px 0px 0px;
    font-weight: 700;
    font-size: 18px;
  }
  .otherInfos {
    display: flex;
    margin-top: 20px;
    align-items: center;
  }

  img {
    width: 35vw;
    max-width: 110px;
    height: 13vh;
    max-height: 100px;
    margin-right: 10px;
  }

  .nameAndValue p {
    font-weight: 700;
    margin: 7px;
    font-size: 14px;
  }

  .description {
    font-size: 13px;
    font-weight: 500;
    padding: 7px;
    margin-left: 8px;
    margin-top: 8px;
    height: 120px;
  }

  .infosModal {
    background-color: var(--color-primary);
    color: var(--white);
    border: none;
    border-radius: 3px;
    width: 220px;
    height: 30px;
    font-size: 16px;
    font-weight: 300;
  }
`;
