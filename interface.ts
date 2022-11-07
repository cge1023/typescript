// let user:object;

// user = {
//   name:'xx',
//   age:30
// }

// console.log(user.name)
type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender?: string;
  readonly birthYear: number;
  // 1 ?: string;
  // 2 ?: string; 학년별 등급을 매길 때
  [grade:number] : Score;
}

let user: User = {
  name: "kaylyn",
  age: 29,
  birthYear: 1993,
  1 : 'F',
  2 : 'A'
};

user.age = 10;
//user.birthYear 식으로 생성 불가
console.log(user.name)

// interface : 프로퍼트 수정은 가능하지만 생성은 불가능!

// interface를 이용한 함수
interface Add {
  (num1:number, num2:number): number;
}

const add : Add = function(x, y){
  return x + y;
}

add(2,3);

interface IsAdult {
  (age:number):boolean;
}

const isAdult:IsAdult = (age) => {
  return age > 19;
}

console.log(isAdult(17));

// implements : 키워드는 class의 interface에 만족하는지 여부를 체크할 때 사용된다. implements한 interface의 타입이 없다면 에러를 반환한다.
interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c:string){
    this.color = c;
  }
  start() {
    console.log('go!!')
  }
}

const b = new Bmw('green');