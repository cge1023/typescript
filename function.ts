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

function showName() {
    console.log(this.name);
}

const a = showName.bind(Sam)