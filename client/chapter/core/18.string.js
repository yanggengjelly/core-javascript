/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message[3];

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
// message[3] = 'a'

// 부분 문자열 추출
let slice = message.slice(1);
let subString = message.substring(2, 5);
let subStr = message.substring(2, 5);

// 문자열 포함 여부 확인
let indexOf = message.indexOf('hi');

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Apple Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'FireFox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
  }

  return browserName;
}

let lastIndexOf;
let includes = message.includes('Less');
//  message이 변수 친구가 'Less라는 단어를 가지고있으면 불린으로 반환'
let startsWith = message.startsWith('Less');
let endsWith = message.endsWith('more.');

// 공백 잘라내기

let str = '    a     b    c d';
//  방향 공백 제거
let trimLeft = str.trimLeft();
let trimRight;
//  양쪽 끝 공백 제거
let trim = str.trim();

// 텍스트 반복
let repeat;

// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;
