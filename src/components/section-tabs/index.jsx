import classNames from "classnames";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { TabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabList = [], tabClick } = props;
  const [curIdx, setCurIdx] = useState(0);

  function itemClickHandle(index, name) {
    setCurIdx(index);
    tabClick(index, name);
  }

  return (
    <TabsWrapper>
      {tabList.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames("item", { active: index === curIdx })}
            onClick={(e) => itemClickHandle(index, item)}
          >
            {item}
          </div>
        );
      })}
    </TabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabList: PropTypes.array
};

export default SectionTabs;
