
function countUpTime() {

    let counter = 0;

    let timer = setInterval(() => {
        if(counter === 60) {
            clearTimer();
            return;
        }
        counter ++;

        document.getElementById("timer").innerHTML = `${counter} +`

    },20 );

    function clearTimer() {
        clearInterval(timer)
    }
}

countUpTime();