import Skeleton from "@mui/material/Skeleton";
import { Container } from "./style";
import LoadingAnimation from "../animations/LoadingAnimation";

const LoadingPage = () => {
  return (
    <Container>
      <Skeleton className="header" variant="retangle" animation="wave" />

      <Skeleton className="title" variant="text" animation="wave"></Skeleton>

      <div className="servicesContainer">
        <Skeleton className="buttonNext" variant="rounded" animation="wave" />
        <Skeleton className="services" variant="rounded" animation="wave" />
        <Skeleton className="buttonNext" variant="rounded" animation="wave" />
      </div>

      <div className="footer">
        <Skeleton className="lineFooter" variant="retangle" animation="wave" />

        <div className="footerContainer">
          <div className="social">
            <Skeleton
              className="instagram"
              variant="rounded"
              animation="wave"
            />
            <Skeleton
              className="facebook"
              variant="circular"
              animation="wave"
            />
            <Skeleton className="github" variant="circular" animation="wave" />
            <Skeleton className="linkedIn" variant="rounded" animation="wave" />
          </div>
          <Skeleton className="logo" variant="rounded" animation="wave" />
          <Skeleton className="info" variant="rounded" animation="wave" />
        </div>
      </div>

      <div className="loading">
        <div className="loadingContent">
          <LoadingAnimation className="animation" />
        </div>
      </div>
    </Container>
  );
};

export default LoadingPage;
