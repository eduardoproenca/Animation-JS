var pos = -60;
var aviao, aviao2;

function iniciar() {
    aviao = document.getElementById("aviao");
    aviao.innerHTML = '';
    mover();
}

function mover() {
    aviao.style.left = pos + "px";
    if (pos < 380) {
        pos = pos + 100;
        aguardar();
    } else {
        aviao.innerHTML = "<img id='aviao2' src=images/aviao.png>";
        aviao.style.left = pos + "px";
        if (pos < 1400) {
            pos = pos + 30;
            aguardar();
        }
        else {
            aviao.innerHTML = '';
            pos = -40;
            mover();
        }
    }

    function sleep() {
        return new Promise(resolve => setTimeout(resolve, 300));
    }

    async function aguardar() {
        await sleep();
        mover();
    }
}





