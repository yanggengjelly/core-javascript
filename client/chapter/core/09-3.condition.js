/* ---------------- */
/* Switch           */
/* ---------------- */

// const value = 10;

// switch (value) {
//   case 10:
//     console.log('10입니다.');
//     break;
//   case 20:
//     console.log('20입니다.');
//     break;
//   default:
//     console.log('난수입니다.');
// }

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

// const MORNING = '아침',
//   LUNCH = '점심',
//   DINNER = '저녁',
//   NIGHT = '밤',
//   LATE_NIGHT = '심야',
//   DAWN = '새벽';

// let thisTime = DAWN;

// switch (thisTime) {
//   case MORNING:
//     console.log('뉴스 기사 글을 읽는다');
//     break;
//   case LUNCH:
//     console.log('자주 가는 식당에 가서 식사를 한다');
//     break;
//   case DINNER:
//     console.log('동네 한바퀴를 조깅한다');
//     break;
//   case NIGHT:
//     console.log('친구에게 전화를 걸어 수다를 떤다');
//     break;
//   case LATE_NIGHT:
//   case DAWN:
//     console.log('잠');
//     break;
// }

/* switch문 → if문 변환 --------------------------------------------------- */

// const MORNING = '아침',
//   LUNCH = '점심',
//   DINNER = '저녁',
//   NIGHT = '밤',
//   LATE_NIGHT = '심야',
//   DAWN = '새벽';

// let thisTime = prompt('우린 시간대별로 무엇을 할까?');

// if (thisTime === MORNING) {
//   console.log('디스코드를 켠다');
// } else if (thisTime === LUNCH) {
//   console.log('체력 보충을 위한 잠을 잔다.');
// } else if (thisTime === DINNER) {
//   console.log('회고조 팀원들끼리 코드리뷰');
// } else if (thisTime === NIGHT) {
//   console.log('내일을 위한 체력을 위해 잠을 잔다.');
// } else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
//   console.log('내일의 수업을 위한 info글 읽다가 잠이 들어');
//   console.log('꿈속에서 에러를 해결하는 나의 모습을 찾는다.');
// }

/* switch vs. if -------------------------------------------------------- */

//prompt를 통해 숫자를 입력 받는다 (0 ~ 6까지)

// swich case 문을 사용해서
// *const a = +prompt('0~6까지 숫자를 입력해줘');

// + 앞에 두면 암시적으로 숫자로 형변환 된다

// 스위치문은 엄격히 숫자와 문자 등 엄격하게 받음 자동으로 변환하지않음

// let a = getRandom();

// 함수를 쓰는 이유 : 코드의 재사용성을 높이기위해 => 매개변수의 활용
// 관심사의 분리 separation of concerns
// 함수는 하나의 기능만을 수행하는게
function getRandom(n) {
  return Math.floor(Math.random() * n);
}

function getDay(number) {
  switch (number) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
  }
}

getDay(getRandom());

function weekend() {
  const today = getDay(getRandom(7));

  if (today.includes('토') || today.includes('일')) {
    //includes('토') 토라는 문자가 포함되어있는지
    console.log(`오늘은 ${today}요일 이며 주말입니다`);
  } else {
    return `오늘은 평일입니다`;
  }

  // return today.includes('토') || today.includes('일')
  //   ? '주말입니다'
  //   : '평일입니다';
}
