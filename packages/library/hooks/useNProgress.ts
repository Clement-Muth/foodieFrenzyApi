import Router from "next/router";
import { start, done } from "nprogress";
import { useEffect } from "react";

const useNProgress = () => {
  useEffect(() => {
    const handleRouteStart = () => start();
    const handleRouteDone = () => done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
};

export default useNProgress;
