import { useEffect } from "react";
import "antd/dist/antd.css";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-in",
      offset: 50,
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
