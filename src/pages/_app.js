import React from "react";
import "styles/global.scss";
import NavbarCustom from "components/NavbarCustom";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
