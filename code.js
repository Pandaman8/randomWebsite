function moveButton(){
    var x = document.getElementById("#click1");
    var counterElement = document.getElementById("#counter");
    var counterStr = counterElement.style.right;
    var counter = parseInt(counterStr);
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

    topInt = 20 + (Math.random()*(height-200));
    leftInt = 20 + (Math.random() * (width-200));
    if(counter < 100){
        x.style.top = topInt.toString() + "px";
        x.style.left = leftInt.toString() + "px";
    }
    counter = counter + 1;
    counterElement.style.right = counter.toString() + "px";
    
}