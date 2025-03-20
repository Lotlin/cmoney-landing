import { allSliderItems, sliderBtnNext, sliderBtnPrev } from '../getElements.js';

const setItemsOrderIndex = (nodeList) => {
  nodeList.forEach((item, index) => {
    item.style.order = index;
  });
};

const getExtremumOrderElement = (nodeList, findMin = true) => {
  return [...nodeList].reduce((extremum, item) => {
    return (findMin 
      ? parseInt(item.style.order) < parseInt(extremum.style.order)
      : parseInt(item.style.order) > parseInt(extremum.style.order)
    ) ? item : extremum;
  }, nodeList[0]);
};

export const sliderController = () => {
  setItemsOrderIndex(allSliderItems);

  let minOrderElem = getExtremumOrderElement(allSliderItems, true);
  let maxOrderElem = getExtremumOrderElement(allSliderItems, false);

  sliderBtnNext.addEventListener('click', () => {
    minOrderElem.style.order = parseInt(maxOrderElem.style.order) + 1;
    minOrderElem = getExtremumOrderElement(allSliderItems, true);
    maxOrderElem = getExtremumOrderElement(allSliderItems, false);
  });

  sliderBtnPrev.addEventListener('click', () => {
    maxOrderElem.style.order = parseInt(minOrderElem.style.order) - 1;
    minOrderElem = getExtremumOrderElement(allSliderItems, true);
    maxOrderElem = getExtremumOrderElement(allSliderItems, false);
  });
};
