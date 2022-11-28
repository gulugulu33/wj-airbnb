import React, { memo } from "react";
import HomeBanner from "./c-cpns/home_banner";
import { HomeWrapper } from "./c-cpns/style";

const Home = memo(() => {
  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
      </HomeWrapper>
    </div>
  );
});

export default Home;
