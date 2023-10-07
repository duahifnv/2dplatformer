const canvas = document.getElementById("canvas-2d");
const ctx = canvas.getContext("2d");

canvas.width = 1500;
canvas.height = 600;

function drawCascade(){
    const colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple"];
    for(let i = 0; i < colors.length; i++){
        let color = colors[i];
        ctx.beginPath();
        ctx.rect(
            i * 45,
            i * 45,
            canvas.width - 400,
            canvas.height - 350
        );
        ctx.fillStyle = color;
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.lineJoin = "round";
    
    
        ctx.fill();
        ctx.stroke();
    }
}

function drawArc(circleCount, circleRadius){
    const colors = ["#393939", "#7d7d7d", "#bfbfbf"];
    const pi = Math.PI;
    for(let i = 0; i < circleCount; i++){
        let radius = circleRadius * (i + 1);
        let angle = pi/4 * i;
        ctx.beginPath();
        ctx.arc(
            canvas.width/2,
            canvas.height/2,
            radius,
            angle,
            angle + pi/2,
        );
        ctx.lineWidth = 10;
        ctx.fill();
        ctx.fillStyle = colors[i % 3];
        ctx.strokeStyle = colors[i % 3];
        ctx.stroke();
    }
}

function circleInRect(){
    const pi = Math.PI;
    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.fillRect(100, 100, 200, 200);
    ctx.strokeRect(100, 100, 200, 200);

    ctx.lineWidth = 3;
    ctx.arc(200, 200, 70, -pi/4, pi * 1.5);
    ctx.strokeStyle = "red";
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
}

circleInRect();





