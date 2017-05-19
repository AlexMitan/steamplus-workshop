window.onload = function() {
	let canvas = document.getElementById("paper"),
		ctx = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;
        pi = Math.PI,
        sin = Math.sin,
        cos = Math.cos,
        ctr = 0;

    ////////////////////////
    //                    //
    //  DISPLAY FUNCTION  //
    //                    //
    ////////////////////////

    function display() {
        ctr++;
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, height);

        drawCircle(110 + ctr, 100 + sin(ctr + 1) * 10, 20, 'red');
        drawStar(100 + ctr, 100, 30, 'red', pi);
        drawRectangle(130 + ctr, 100 + sin(ctr + 3) * 10, 30, 20, 'blue');

        setTimeout(display, 1000 / 60);
    }
    display();

    ////////////////////////
    //                    //
    //  DISPLAY FUNCTION  //
    //                    //
    ////////////////////////

    // random number from a to b, like rand(10, 20)
    function rand(a, b){
        return Math.random() * b + a;
    }

    // draw a circle of size r at x,y
    function drawCircle(x, y, r, color='white'){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2*pi);
        ctx.fill();
    }
    
    // draw a rectangle of size r at x,y
    function drawRectangle(x, y, w, h, color='white'){
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.rect(x, y, w, h);
        ctx.fill();
    }
    
    function drawStar(x, y, size, colour='white', rotation=0){
        ctx.save();
        ctx.strokeStyle = colour;
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.beginPath();
        for(var i = 0; i < 5; i += 1){
            var ang1 = i * 2 * pi / 5;
            var ang2 = (i + 2) * 2 * pi / 5;
            ctx.moveTo(sin(ang1) * size, cos(ang1) * size);
            ctx.lineTo(sin(ang2) * size, cos(ang2) * size);
        }
        ctx.stroke();
        ctx.restore();
    }
};
