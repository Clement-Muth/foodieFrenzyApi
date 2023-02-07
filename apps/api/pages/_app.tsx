import { useEffect } from "react";

const MyApp = ({ Component }: any) => {
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <>
      <Component />
    </>
  );
};

export default MyApp;
