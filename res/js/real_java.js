function cover() {
    var img = document.getElementById('cover_img');
    var images = ["./res/img/winter.jpg", "./res/img/summer.jpg", "./res/img/spring.jpg", "./res/img/fall.jpg"]
    setInterval(frame, 2500);
    var i = 0;

    function frame() {
        img.src = images[i % 4];
        i++;
    }
}

function heart(id) {
    if (id.src == "file:///C:/Users/HP/web%20projects/camping/res/img/heart.svg") {
        id.src = "./res/img/red_heart.svg";
    } else
        id.src = "./res/img/heart.svg";

}