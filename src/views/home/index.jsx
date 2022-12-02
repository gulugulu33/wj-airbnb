import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "../../components/room-item";
import { fetchHomeDataAction } from "../../store/modules/home";
import HomeBanner from "./c-cpns/home_banner";
import { HomeWrapper } from "./c-cpns/style";

const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo
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
          <div className="good-price">
            <h2>{goodPriceInfo.title}</h2>
            <ul className="room-list">
              {goodPriceInfo.list?.slice(0, 8).map((item) => {
                return <RoomItem itemData={item} key={item.id} />;
              })}
            </ul>
          </div>
        </div>
      </HomeWrapper>
    </div>
  );
});

export default Home;
