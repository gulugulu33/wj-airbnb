import React, { memo } from "react";
import IconSearchBar from "../../../../assets/svg/icon-search-bar";
import { CenterWrapper } from "./style";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">🐏🐏🐏🐏🐏🐏</div>
        <div className="icon">
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
