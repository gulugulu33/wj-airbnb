import WjRequest from "..";

export function getHomeGoodPriceData() {
  return WjRequest.get({
    url: "/home/goodprice"
  });
}

export function getHomeHighScoreData() {
  return WjRequest.get({
    url: "/home/highscore"
  });
}

export function getHomeDiscountData() {
  return WjRequest.get({
    url: "/home/discount"
  });
}

export function getHomeHotRecommendData() {
  return WjRequest.get({
    url: "/home/hotrecommenddest"
  });
}
