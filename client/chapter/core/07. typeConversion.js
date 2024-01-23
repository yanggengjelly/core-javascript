/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/*  데이터 → 문자 
----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(String(YEAR)); // 명시적 형변환
console.log(YEAR + ''.trim()); // 암시적 형변환 // .trim() 메서드 공백제거

// undefined, null

let days = null;
let weekend;

console.log(days + ''); // 암시적 형변환환
console.log(undefined + '');

// boolean

let isClicked = false; // 앞에 is나 has 붙으면 대부분 true나 false 가 붙는다
console.log(isClicked + '');

/* 데이터 → 숫자 
----------------------------------------------------------- */

// undefined

let friend;
console.log(Number(friend));

// null

let money = null;
console.log(Number(money));

// boolean

let cutie = true;
console.log(Number(cutie));

// string

let num = '250';
console.log(Number(num)); //명시적 형변환
console.log(num * 1); // 암시적 형변환

// numeric string

const width = '105.3px'; // 주의할점은 앞에 문자먼저 올경우나 중간에 문자가 있을경우 에러가남
console.log(Number(width));
console.log(parseInt(width)); // 정수 반환
console.log(parseFloat(width)); // 소수점 반환

/* 데이터 → 불리언 
---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.log(Boolean(friend));
console.log(Boolean(' ')); //빈문자와 공백문자는 다르다
console.log(Boolean(0));
console.log(Boolean('0'));
// 느낌표 두개를 !! 작성하면 암시적으로 변환가능

// 위에 나열한 것 이외의 것들

const value = prompt('값을 입력해주세요');
// const value = Number(prompt('값을 입력해주세요'))
// const value = prompt('값을 입력해주세요') / 1
// const value = prompt('값을 입력해주세요') * 1

// console.log(Number(value) + 50); //명시적
console.log(value * 1 + 50); // 암시적
