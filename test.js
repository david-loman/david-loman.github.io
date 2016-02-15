var Ball = {
    createNew : function(w,h){
        var ball = {};
        ball.width = w;
        ball.height = h;

        ball.radius= parseInt((Math.random() * 17))+10;
        ball.x=parseInt((Math.random() * (ball.width - 2* ball.radius)))+ball.radius;
        ball.y=parseInt((Math.random() * (ball.height - 2*ball.radius)))+ball.radius;
        ball.speedX=Math.random() * 0.5 + 0.5;
        ball.speedY=Math.random() * 0.5 + 0.5;
        ball.color="#FFEE88";

        ball.run = function (){
            ball.x = ball.x + ball.speedX;
            ball.y = ball.y + ball.speedY;
            if (ball.x > (ball.width - ball.radius) || ball.x < ball.radius){
                ball.speedX = - ball.speedX;
            }
            if (ball.y > (ball.height - ball.radius) || ball.y < ball.radius){
                ball.speedY = - ball.speedY;
            }
        };

        ball.get_x = function(){
            return ball.x;
        };

        ball.get_y = function (){
            return ball.y;
        };

        ball.get_radius = function(){
            return ball.radius;
        };

        ball.get_color = function (){
            return ball.color;
        };

        return ball;
    }
};
