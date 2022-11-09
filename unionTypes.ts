// Union Types

interface Car2 {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

function getGift(gift: Car2 | Mobile) {
    console.log(gift.color);
    if(gift.name === "car"){
        gift.start()
    } else {
        gift.call();
    }
}