// Literal Types

const useName1 = "Bob";
let userName2:string|number = "Tom";

type Job = "police" | "developer" | "teacher";

interface User3 { 
    name: string;
    job: Job;
}

const user2: User3 = {
    name : "Bob",
    job : "developer"
}