function moveButton(){
    var x = document.getElementById("#click1");
    var tauntTop;
    var tauntLeft;
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
    var tauntNum = 0;

    height = Math.min(Cheight, Wheight);
    width = Math.min(Cwidth, Wwidth);

    topInt = 20 + (Math.random()*(height-200));
    leftInt = 20 + (Math.random() * (width-200));
    tauntLeft = 20 + (Math.random() * (width-200));
    tauntTop = 20 + (Math.random()*(height-200));
    tauntNum = Math.floor(1 + (Math.random()*5));

    for(let i = 1; i < 6; i++){
        document.getElementById("#taunt" + i.toString()).style.visibility = "hidden";
    }
   
    if(counter < 100){
        x.style.top = topInt.toString() + "px";
        x.style.left = leftInt.toString() + "px";
        document.getElementById("#taunt" + tauntNum.toString()).style.visibility = "visible";
        document.getElementById("#taunt" + tauntNum.toString()).style.top = tauntTop.toString() + "px";
        document.getElementById("#taunt" + tauntNum.toString()).style.left = tauntLeft.toString() + "px";
    }
    counter = counter + 1;
    counterElement.style.right = counter.toString() + "px";
    
}