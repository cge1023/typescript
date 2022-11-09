class Car4 {
    // color: string; 멤버변수 선언 이렇게 해주거나 아래처럼 public / readonly 붙여준다.
    constructor(public color: string){
        this.color = color;
    }
    start(){
        console.log("start")
    }
}

const bmw = new Car4("red")

// 접근 제한자(Access modifier) - public, private, protected
// public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
// protected - 자식 클래스에서 접근 가능
// private - 해당 클래스 내부에서만 접근 가능

class Car5 {
    protected name: string= "car";
    color: string;
    static wheels = 4;
    constructor(color:string){
        this.color = color;
    }
    start() {
        console.log("start")
        console.log(this.name)
        console.log(Car5.wheels)
    }
}

class Benz extends Car5 {
    constructor(color: string) {
        super(color);
    }
    showName() {
        console.log(super.name)
    }
}

const z4 = new Benz("black");

// 추상 class
abstract class Car6 {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }
    abstract doSomething():void; // 추상화된 메서드는 상속받은 쪽에서 정의 되어져야 한다.
}

class Honda extends Car6 {
    constructor(color: string) {
        super(color);
    }
    doSomething(){ // 요렇게
        alert(3);
    }
}
