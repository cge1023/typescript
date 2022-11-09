// Intersection Types

interface Car3 {
    name: string;
    start(): void;
}

interface Toy {
    name: string;
    color: string;
    price:  number;
}

const toyCar: Toy & Car3 = {
    name: "타요",
    start(){},
    color: "blue",
    price: 1000,
}