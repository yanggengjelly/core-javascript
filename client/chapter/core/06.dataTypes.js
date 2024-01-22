/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/*ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// * 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(typeof empty);

// * 2. 값이 할당되지 않은 상태

let undef;
console.log(typeof undef);

// * 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const duble = 'hello';
const single = 'hello';
const backtick = `hello ${10 + 30}`;

// ? console.log(); 검사해보면 string으로 나온다

// * 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150;
const floatingPointNumber = 10.331;

// ? console.log() 검사해보면 number로 나온다

// * 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigNumber = 123n;
console.log(typeof bigNumber);

// ? console.log() 검사해보면 Bigint로 나온다

// * 6. 참(true, yes) 또는 거짓(false, no)

const isClicked = false;
console.log(typeof isClicked);

// ? console.log() 검사해보면 boolean로 나온다

// * 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const obj = { name: 'tiger' };
console.log(typeof obj);

// ? console.log() 검사해보면 object로 나온다

// * 8. 고유한 식별자(unique identifier)

const unique = Symbol('uuid');
console.log(typeof unique);

// ? console.log() 검사해보면 symbol로 나온다

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// * 1) 연산자 typeof
// * 2) 함수 typeof()

// * 언어 상, 오류

// * Object

const user = {
  name: 'tiger',
  age: 29,
  // method
  sayHi: function () {
    //normal function method
    console.log('hello~');
  },
  sayHi2: () => {
    // arrow function method
    console.log('hello~');
  },
  sayHi3() {
    // concise method
    console.log('hello~');
  },
};

// * Array
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr);

// * function

//? 상자 함
//? 셈 수

// 선언
function sum(a, b) {
  return a + b; // 결과를 내뱉는다 (결과가  result로 호출됨)
}

const result = sum(1, 2); //호출

//? 함수를 만드는이유는 재사용성을 위해

// * this

// 잔디가 안떠요
