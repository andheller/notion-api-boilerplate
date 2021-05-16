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
      image="https://raw.githubusercontent.com/andheller/notion-api-boilerplate/f0bab35b9d1ce387458847c4c9b14bb43ed9262e/public/undraw_Code_thinking_re_gka2.svg"
      buttonText="View on GitHub"
      buttonColor="primary"
      buttonPath="https://github.com/andheller/notion-api-boilerplate"
    />
  );
}

export default IndexPage;
