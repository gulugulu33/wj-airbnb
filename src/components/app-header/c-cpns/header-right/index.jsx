import React, { memo, useEffect, useState } from "react";
import IconAvatar from "../../../../assets/svg/icon_avatar";
import IconGlobal from "../../../../assets/svg/icon_global";
import IconMenu from "../../../../assets/svg/icon_menu";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const windowHandleClick = () => {
      setShowPanel(false);
    };
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);

  function profileClickHandle() {
    setShowPanel(true);
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item register">注册</div>
              <div className="item login">登录</div>
            </div>
            <div className="bottom">
              <div className="item">🐏 の 🐏</div>
              <div className="item">🐏 の 🐏</div>
              <div className="item">🐏 の 🐏</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
