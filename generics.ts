// Generic : 클래스나 함수 인터페이스를 다양한 타입으로 재사용

function getSize(arr:number[] | string[] | boolean[] | object[]):number {
    return arr.length;
}

const arr1 = [1,2,3];
getSize(arr1); // 3

const arr2 = ["a","b","c"];
getSize(arr2)

const arr3 = [false, true, true];
getSize(arr3);

const arr4 = [{}, {}, {name: "Tim"}];
getSize(arr4);

// 위의 함수 이렇게 generics를 사용하여 변형
function getSize2<T>(arr: T[]): number {
    return arr.length;
}

const arr5 = [1,2,3];
getSize2<number>(arr5);

const arr6 = ["a","b","c"];
getSize2<string>(arr6)

// interface에서 이용한 generics
interface Mobile<T> {
    name: string;
    price: number;
    option: T;
}

const m1: Mobile<object> = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false,
    }
};

const m2: Mobile<string> = {
    name: "s20",
    price: 900,
    option: "good"
};

// generics extends

interface User2 {
    name: string;
    age: number;
}

interface Car {
    name: string;
    color: string;
}

interface Book {
    price: number;
}

const user: User2 = {name: "a", age: 10};
const car: Car = {name: "bmw", color: "red"};
const book: Book = {price: 3000};

function showName<T extends {name: string}>(data: T): string {
    return data.name;
}

showName(user);
showName(car);
// showName(book);s