function moveButton(){
    var x = document.getElementById("#click1");
    var Cheight = document.documentElement.clientHeight;
    var Cwidth = document.documentElement.clientWidth;
    var Wheight = window.innerHeight;
    var Wwidth = window.innerWidth;
    var height;
    var width;
    var topStr = x.style.top;
    var leftStr = x.style.left;
    var topInt;
    var leftInt;

    height = Math.min(Cheight, Wheight);
    width = Math.min(Cwidth, Wwidth);

    topInt = 20 + (Math.random()*(height-40));
    leftInt = 20 + (Math.random() * (width-40));

    x.style.top = topInt.toString() + "px";
    x.style.left = leftInt.toString() + "px";
}