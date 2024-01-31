function Ani(name) {
  // this.name = name
}

const _a = new Ani('호돌이');

/* -------------------------------------------- */
/*                      ---                     */
/* -------------------------------------------- */

// constructor method는 최초 1회만 실행됨. (n회? x)

class Animal {
  constructor(name) {
    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  }
}

// const a = new Animal('호돌이')

class Tiger extends Animal {
  constructor(name) {
    super(name);
    this.pattern = '호랑이무늬';
  }

  static bark() {
    return `어흥!`;
  }

  hunt(target) {
    return `${target}에게 조심히 접근한다.`;
  }
}

const 한라산호랑이 = new Tiger('한돌이');
