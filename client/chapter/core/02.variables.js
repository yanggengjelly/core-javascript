/* ------------------ */
/* Variables          */
/* ------------------ */

let admin;
let nickName;
nickName = 'john';
admin = nickName;

alert(admin);

// name 자체는 window에 기본적으로 있는값이다 확인하는 방법은
// 개발자 도구 콘솔에서 '변수값 입력' in window 를 입력하면 true나 false가 나옴
// fales가 나오면 사용 가능 true가 나오면 사용 할 수있지만 이미 window에 있다고 제안

const ourPlanetName = 'Earth';
const currentUserName = 'junho';

// ctr + Shift + t 번역

/* 다음 내용을 분석한 후, 프로그래밍 할 수 있도록 변수와 상수를 작성해봅니다. ----------- */

/* variables ----------------------------------------------------------- */

// - 갯수 별 상품 가격 계산하기
//* Calculate product price by quantity
let calculateProductPrice;
// - 구매 제품 가격의 총 합
//* Total price of purchased products
let totalPrice;

// - 구매 결제 여부
//* Whether to pay for a purchase
//? is 나 has를 갖게 되면 관례적으로 할당값은 true | false를 담고있다
let isPayment = false;
// - 구매 결제 내역
//* Purchase payment history
let paymentlist;

// - 오늘의 운세 today's horoscope
let todaysHoroscope;
// - 상품 정보 product information
//* 객체로 관리 ( {}객체 안에 내용물 변경 가능함 그리고
//* Object.freeze()로 수정 불가로 만들기도 가능함)
const productInfomation = {};

/* constant variables -------------------------------------------------- */

// - 1년 기준 일(day)자 수
//* Number of days per year
const dasyOfYear = '365';

// - 브랜드 접두사 brand prefix
const brandPrefix = 'nike';
