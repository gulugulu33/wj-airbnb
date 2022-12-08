import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHomeGoodPriceData, getHomeHighScoreData } from "../../services";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
    //有两个 await 请求 第二个会等第一个 用 promise.then 解决 直接 dispatch 可不用过 extrareducer
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    }
  },
  // extraReducers: {
  //   [fetchHomeDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceInfo = payload;
  //   }
  // }
  extraReducers: (builder) => {
    // builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
    //   state.goodPriceInfo = payload;
    // });
  }
});

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction } =
  homeSlice.actions;

export default homeSlice.reducer;
