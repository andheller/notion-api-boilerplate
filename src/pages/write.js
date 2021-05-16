import { useState } from 'react'
import Subscribe from '@/components/Write'

function IndexPage() {
  const [subscribed, setSubscribed] = useState(false)

import React from "react";
import HeroSection2 from "components/HeroSection2";

function WritePage(props) {
  return (
    <HeroSection2
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Write"
      subtitle="Write to a Notion Database"
    />
  );
}

export default WritePage;
