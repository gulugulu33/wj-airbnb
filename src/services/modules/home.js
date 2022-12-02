import WjRequest from "..";

export function getHomeGoodPriceData() {
  return WjRequest.get({
    url: "/home/goodprice"
  });
}
