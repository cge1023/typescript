// keyof

interface User {
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}

type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = 'id'; // User key값만 assignable 함

// Partial<T>

let admin: Partial<User> = {
    id: 1,
    name: "Bob",
} //age, gender 값이 없어도 오류가 나지 않음

// Required<T>

interface User3 {
    id: number;
    name: string;
    age?: number;
}

let admin2: Required<User3> = {
    id: 1,
    name: "Bob",
    age: 30,
}

// Readonly<T>

interface User4 {
    id: number,
    name: string,
    age?: number;
}

let admin3: Readonly<User4> = {
    id: 1,
    name: "Bob"
};
// 처음에 값 할당만 가능하고 수정은 불가
// admin3.id = 4;

// Record<K, T>

// interface Score {
//     "1": "A" | "B" | "C" | "D";
//     "2": "A" | "B" | "C" | "D";
//     "3": "A" | "B" | "C" | "D";
//     "4": "A" | "B" | "C" | "D";
// }

type Grade = "1" | "2" | "3" | "4";
type Score = "A" | "B" | "C" | "D"; 

const score:Record<Grade, Score> = {
    1: "A",
    2: "C",
    3: "B",
    4: "D"
};

interface User5 {
    id: number;
    name: string;
    age: number;
}

function isValid(user: User5) {
    const result: Record<keyof User5, boolean> = {
        id: user.id > 0,
        name: user.name !== '',
        age: user.age > 0,
    }
    return result;
}

// Pick<T, K>

interface User6 {
    id: number;
    name: string;
    age: number;
    gender: "M" | "F";
}
// 키값을 뽑아서 사용할 수 있음
const admin4: Pick<User6, "id" | "name"> = {
    id: 0,
    name: "Bob"
};

// Omit<T, K>

interface User7 {
    id: number;
    name: string;
    age: number;
    gender: "M" | "F";
}

const admin5: Omit<User7, "age" | "gender"> = {
    id: 0,
    name: "Bob"
}

// Exclude<T1, T2>

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | string>; // T1 타입에서 number와 string 타입을 제외시켜라

// NonNullable<Type>

type T3 = string | null | undefined | void;
type T4 = NonNullable<T3>; // string | void