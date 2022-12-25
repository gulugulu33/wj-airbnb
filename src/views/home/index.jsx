import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import SectionHeader from "../../components/section-header";
import SectionRooms from "../../components/section-rooms";
import SectionTabs from "../../components/section-tabs";
import { fetchHomeDataAction } from "../../store/modules/home";
import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
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

  // 数据的转换
  const [name, setName] = useState("佛山");

  const tabList = discountInfo.dest_address?.map((item) => item.name);

  const tabClickHandle = useCallback(
    function (index, name) {
      setName(name);
    },
    [name]
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
          <div className="discount">
            <SectionHeader
              title={discountInfo.title}
              subtitle={discountInfo.subtitle}
            />
            <SectionTabs tabList={tabList} tabClick={tabClickHandle} />
            <SectionRooms
              roomList={discountInfo.dest_list?.[name]}
              itemWidth={"33.333%"}
            />
          </div>
          <HomeSectionV1 infoData={goodPriceInfo} />
          <HomeSectionV1 infoData={highScoreInfo} />
        </div>
      </HomeWrapper>
    </div>
  );
});

export default Home;
