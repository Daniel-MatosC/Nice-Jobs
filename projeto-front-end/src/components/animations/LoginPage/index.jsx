import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import json from "../../../assets/loginAnimation.json";

const LoginAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: json,
    });

    return () => lottie.destroy();
  }, []);

  return <div className="container" ref={container} />;
};

export default LoginAnimation;
