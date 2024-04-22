let counts = setInterval(updated,0.00001);
let upto = 0;
    function updated() {
        let count = document.getElementById("counter");
        count.innerHTML = ++upto;
        if (upto === 1995) {
            clearInterval(counts);
        }
    }