function first() {
    const first = "first";

    function second() {
        const second = "second";
        console.log(first);
        console.log(second);
    }

    second();
}

first();

