// 함수

function add2(num1:number, num2:number):number {
    return num1 + num2;
}

function isAdult2(age:number):boolean {
    return age > 19;
}

// 선택적 매개변수가 필수 매개변수보다 앞에 오면 에러 발생!
function hello(name: string, age?: number):string {
    if (age!= undefined) {
        return `Hello, ${name}. You are ${age}.`;
    } else {
        return `Hello, ${name}`;
    }
}

const result = hello('kaylyn');

function add3(...nums:number[]) {
    return nums.reduce((result, num) => result + num, 0);
}
add3(1, 2, 3);

interface User1{
    name: string;
}

const Sam: User1 = {name: 'Sam'}

function showName(this:User1) {
    console.log(this.name);
}

const a = showName.bind(Sam);
a();

// 함수 overload : 전달받은 매개변수의 갯수나 타입에 따라 다른동작을 하게하는 것
interface User2 {
    name: string;
    age: number;
}
function join(name: string, age: string):string;
function join(name: string, age: number):User2;
function join(name: string, age:number|string):User2 | string {
    if (typeof age ==="number") {
        return {
            name,
            age,
        };
    } else {
        return "나이는 숫자로 입력해주세요."
    }
}

const sam: User2 = join("Sam", 30);
const jane: string = join("Jane", "30");