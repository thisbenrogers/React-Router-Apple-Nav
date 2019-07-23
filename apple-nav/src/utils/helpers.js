import { urlArr, subUrlArr } from './data';

const makeSubObject = (sA, sUA) => {
  let subNavArr = [];
  sA.map((name, index) => {
    let subObj = {};
    subObj.name = name;
    subObj.url = sUA[index];
    switch (subObj.name) {
      case 'MacBook Air':
        subObj.isNew = true;
        break;
      case 'MacBook Pro':
        subObj.isNew = true;
        break;
      case 'Mac Pro':
        subObj.isNew = true;
        break;
      case 'Pro Display XDR':
        subObj.isNew = true;
        break;
      case 'iPad Air':
        subObj.isNew = true;
        break;
      case 'iPad mini':
        subObj.isNew = true;
        break;
      case 'iPhone Xs':
        subObj.isNew = true;
        break;
      case 'iPhone Xr':
        subObj.isNew = true;
        break;
      case 'Apple TV app':
        subObj.isNew = true;
        break;
      case 'Apple TV+':
        subObj.isNew = true;
        break;
      case 'iPod touch':
        subObj.isNew = true;
        break;
      default:
        subObj.isNew = false;
    }
    subNavArr.push(subObj);
  })
  if (sA === [null]) {
    return null;
  } else {
    return subNavArr;
  }
}

export const makeObjects = (navA, subA) => {
  const navObjArr = [];
  navA.map((str, index) => {
    let obj = {};
    obj.name = str;
    obj.rend = (str === 'ICON') ? urlArr[index] : obj.name;
    obj.subNav = (str === 'ICON') ? null : makeSubObject(subA[index], subUrlArr[index]);
    console.log("Made Object: ", obj);
  });
}

