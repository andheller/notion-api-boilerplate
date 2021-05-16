import React from "react";
import HeroSection from "components/HeroSection";

function IndexPage(props) {
  return (
    <HeroSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Notion API Test"
      subtitle="Demo code to read and write Data to your Notion workspace from a Next.js Application."
      image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
      buttonText="View on GitHub"
      buttonColor="primary"
      buttonPath="https://github.com/andheller/notion-api-boilerplate"
    />
  );
}

export default IndexPage;
