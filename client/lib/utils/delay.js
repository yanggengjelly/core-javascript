import { getNode, insertLast } from '../dom/index.js';
import { isNumber, isObject } from './typeOf.js';
import { xhrPromise } from './xhr.js';
import { tiger } from './yanggeng.js';

const first = getNode('.first');
const second = getNode('.second');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '100px';
//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(() => {
//       first.style.top = '0';
//       second.style.top = '0';
//     });
//   });
// });

//프라미스를 통해 어떻게 리팩토리 할수있는가 프라미스 중요

// const promise = new Promise((resolve, reject) => {
//   // resolve('성공~');
//   reject('실패!');
// });

// console.log(promise);

// 위에 구문이 기본 프로미스 구문
//무조건 메게변수 앞이 성공 뒤가 실패 (메게변수는 변경가능)

// !
//mixin
//기존 객체 + 전달 받은 객체

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  successMessage: '성공입니다.',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};

export function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  let { shouldReject, successMessage, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(successMessage);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

// delayP(2000)
//   .then((res) => {
//     console.log(res);

//     first.style.top = '-100px';
//     second.style.top = '100px';

//     return delayP(1000);
//   })
//   .then((res) => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';

//     return delayP(1000);
//   })
//   .then((res) => {
//     first.style.top = '0';
//     second.style.top = '0';

//     return delayP(1000);
//   })
//   .catch(() => {});

// const promise = new Promise((a,b)=>{
//   b('실패!')
// })

// console.log( promise );

// !
// async : 함수의 리턴값을 무조건 Promise<Object>

async function delayA(data) {
  return data;
}

// delayA('양준호').then(console.log);

// const result = await delayA('양준호');
// console.log(result);

//!
// async function 라면끓이기() {
//   console.log('물');
//   await delayP();
//   // 코드의 흐름제어
//   console.log('스프');
//   await delayP();

//   console.log('면');
//   await delayP();

//   console.log('그릇');
//   await delayP();
// }

// 라면끓이기();

//!

async function getData() {
  const response = await tiger.get('https://pokeapi.co/api/v2/pokemon/1');

  const imgSrc = response.data.sprites.other.showdown['front_default'];

  insertLast('h1', `<img src="${imgSrc}" alt="" />`);
}

// getData();
