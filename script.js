document.addEventListener("DOMContentLoaded", function () {
    let playButton = document.getElementById("playButton");

    // Обработчик клика по кнопке
    playButton.addEventListener("click", function (event) {
        event.preventDefault(); 

        let sound = new Audio('click.mp3');  
        sound.play().catch(() => console.log("Автовоспроизведение заблокировано")); 

        // Переход на сайт после проигрывания звука
        setTimeout(() => {
            window.location.href = "https://1wcjlr.com/casino/list?open=register&p=y6wx";
        }, 1000);
    });
});
