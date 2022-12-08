import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "../../store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import { HomeWrapper } from "./c-cpns/style";

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
        <div className="content">
          <HomeSectionV1 infoData={goodPriceInfo} />
          <HomeSectionV1 infoData={highScoreInfo} />
        </div>
      </HomeWrapper>
    </div>
  );
});

export default Home;
