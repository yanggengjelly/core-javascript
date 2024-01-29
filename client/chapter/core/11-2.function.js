/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

//! 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function (a, b, c, d, e, f, g) {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체

  console.log(arguments); //순환시켜서 또는 반복시켜서 값을 다 더하기

  let total = 0;
  //?for문

  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  //?for... of

  // for (let value of arguments) {
  //   total += value;
  // }

  //? 빌려쓰기

  // Array.prototype.forEach.call(arguments, function (item) {
  //   console.log(item);

  //   total += item;
  // });

  //* arguments의 부모를(object) 배열로 바꿔치기 한다면?

  // arguments.__proto__ = Array.prototype;

  const arr = [...arguments];
  // console.log(arr);

  // arr.forEach(function (item) {
  //   total += item;
  // });
  //! 배열의 메서드 array method 중요
  //? forEach => 값을 반환하지 않음. 반복의 로직만 처리
  //? reduce => 값을 변환함. 모든걸 다 (배열,객체,문자,숫자)

  //? map => 배열을 반환함
  //? filter => 배열을 반환함

  total = arr.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  return total;

  // return a + b + c + d + e + f + g;
};

const result = calculateTotal(10, 20, 30, 40, 50, 60, 70, 80);

console.log(result);

//! 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

//! 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

//! 콜백 함수 (표현)식 ------------------중요 ----------------
let cd = function (state, success, fail) {
  if (state) {
    return success();
  } else {
    return fail();
  }
};

cd(
  true,
  function () {
    return '성공';
  },
  function () {
    return '실패';
  }
);

//? 콜백을 활용한 간단한 예제
function movePage(url, success, fail) {
  // if(url.includes('www')){
  //   success(url)
  // }else{
  //   fail()
  // }

  url.includes('www') ? success(url) : fail();
}

// movePage(
//   'https://www.naver.com',
//   url => console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`),
//   ()=> console.error('잘못된 url 정보를 입력하셨습니다.')
// )

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(`3초 뒤 해당 url인 ${url}로 넘어갑니다.`);

    setTimeout(() => {
      // window.location.href = url
    }, 3000);
  },
  function () {
    console.error('잘못된 url 정보를 입력하셨습니다.');
  }
);

console.clear();
//! 함수 선언문 vs. 함수 (표현)식
// --------------------
//! 즉시 실행 함수 (표현)식
//! Immediately Invoked Function Expression
const MASTER = (function () {
  let uuid = 'aaaaaaasd!sda';
  return {
    getKey() {
      return uuid;
    },
    setKey(value) {
      uuid = value;
    },
  };
})();

console.log(MASTER.getKey());

// import { css } from "../../utils/css.js";

// css()

// const css = (function(){

//   function getStyle(node,prop){

//     if(typeof node === 'string'){
//       node = document.querySelector(node)
//     }
//     if(typeof prop !== 'string'){
//       throw new Error('getStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//     }
//     return getComputedStyle(node)[prop]
//   }

//   function setStyle(node,prop,value){

//     if(typeof node === 'string') node = document.querySelector(node);

//     if(typeof prop !== 'string'){
//       throw new Error('setStyle 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
//     }

//     if(!value) throw new Error('setStyle 함수의 세 번째 인수는 필수 입력값 입니다.');

//     node.style[prop] = value
//   }

//   function css(node,prop,value){

//     return (!value) ? getStyle(node,prop) : setStyle(node,prop,value)

//   }

//   return css;

// })()

// 개발 팀장 : 박가희 getStyle, setStyle, css 이거 만들었으니까 가져다 쓰세용 근데,,get,set 함수는 쓰지 말고 css 함수만 사용하셔도 됩니다.

// 개발 인턴 : 박지성  getStyle() 작동은 잘됨. 컨벤션 깨짐
