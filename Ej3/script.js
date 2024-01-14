'use strict';

window.addEventListener('load', function () {
    document.getElementById('boton').addEventListener('click', function () {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            console.log(this.status + " - " + this.statusText);
            console.log(this.readyState);
            if (this.readyState == 4 && this.status == 200) {
                let container = document.createElement("div");
                var body = document.getElementsByTagName('body');
                container.className = "container";
                container.innerText = this.responseText;
                container.style.marginTop = "1%";
                document.body.appendChild(container);

            }
        };

        xhr.open("GET", "ajax.php?nombre=Carlos&apellido=Landa Vazquez", true);
        xhr.send();
        console.log(xhr.responseText);
    });
});