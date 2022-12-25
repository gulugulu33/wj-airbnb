import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../../components/room-item";
import { RoomsWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props;

  return (
    <RoomsWrapper>
      {roomList.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />;
      })}
    </RoomsWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array
};

export default SectionRooms;
