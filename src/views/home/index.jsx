import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchHomeDataAction } from "../../store/modules/home";
import { isEmptyObject } from "../../utils";
import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { HomeWrapper } from "./c-cpns/style";

const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo
    }),
    shallowEqual
  );

  // 派发异步事件 发送网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <div>
      <HomeWrapper>
        <HomeBanner />
        <div className="content">
          {isEmptyObject(discountInfo) && (
            <HomeSectionV2 infoData={discountInfo} />
          )}
          <HomeSectionV1 infoData={goodPriceInfo} />
          <HomeSectionV1 infoData={highScoreInfo} />
        </div>
      </HomeWrapper>
    </div>
  );
});

export default Home;
