/* --------------- */
/* While Loop      */
/* --------------- */

// let a = 10;
// while (a) {
// console.log(--a);
// }

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
  'Zustand',
];

// let i = 0;
// while (i < 7) {
//   console.log(frontEndDev[i]);
//   i++;
// }

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

let i = 0;
while (i < frontEndDev.length) {
  //.length를 쓰면 배열에 추가되도 자연스럽게 사용가능
  const value = frontEndDev[i];
  // 꼭 변수에 담아서 사용하기 아니면 날것 그대로 사용하게되서 위험함
  console.log(value);
  i++;
}

// while 문 (역순환 : 역방향)
let j = frontEndDev.length - 1; //안하면 .length 때문에 undefinde가 뜸
while (j >= 0) {
  const value = frontEndDev[j];
  console.log(value);
  j--;
}

// 성능 진단 : 순환 vs. 역순환
