let imgUrl = "Images/"
let a = new Array(...document.getElementsByClassName("item"))
let b = new Array(...document.getElementsByClassName("loud"))
let c = new Array(...document.getElementsByClassName("price"))
let d = new Array(...document.getElementsByClassName("add"))

export const getFromBackEnd = () => {
    b.forEach(e => e.classList.add("lds-dual-ring"))
    return fetch('https://api.jsonbin.io/b/5ecfb5e47741ef56a563698f/4', {
            headers: {
                'Content-Type': 'application/json',
                'secret-key': '$2b$10$706IbEnWHlfw73u70HT9reTbkywnskFW1ZFV3DR9ZdPxc3xm4UgJq'
            }
        })
        .then(res => {
            return res.json()
        }).then(data => {
            a.forEach((e, i) => {
                e.style.backgroundImage = `url(${imgUrl + data[i].img})`;
                c[i].innerHTML = data[i].title + ":  " + data[i].price + "$"
            })
            b.forEach(e => e.classList.remove("lds-dual-ring"))
        })
}


d.forEach(e => {
    let bool = true
    e.onclick = function() {
        if (bool) {
            let f = document.getElementById("count")
            bool = false
            f.innerHTML = +f.innerHTML + 1
        }
    }
})


let textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });