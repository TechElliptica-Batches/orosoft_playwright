let a = 10;
var b = 20;
    {
        let a = 30;
        var b = 40;
        const c = 50;
        d = 60;
        console.log("1:", a, b, c, d); //1: 30 40 50 60
    }
console.log("2:", a, b); // 2: 10 40

    {
        console.log("3:", d); // 60 - hositing
        let d = 70;
        console.log("4:", d); // 70
    }
console.log("5:", d);  // 60