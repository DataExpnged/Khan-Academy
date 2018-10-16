var faceX = 200;
var bodyX = 200;
var bodyY = 212;
var bodyW = 118;
var bodyH = bodyW/2;
var X = 53;
var X2 = 38;
var X3 = 38;
var rectX = -51;
draw = function() {
    background(207, 254, 255);
        fill(89, 59, 0);
    rect(rectX, 133, 96, 4);
    fill(189, 189, 189);
    triangle(X, 136, X2, 126, X3, 145);
    rectX= rectX+40;
    X= X+40;
    X2=X2+40;
    X3=X3+40;
    fill(255, 255, 255);
        ellipse(bodyX, bodyY+78, 140, 140);//body...again
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(faceX, bodyY-70, bodyH+30, 82); // face?
    fill(0, 0, 0);
    ellipse(faceX-20, bodyY-74, 10, 10);//eye
    ellipse(faceX+20, bodyY-74, 10, 10);//other eye
    faceX=faceX+15;

};
