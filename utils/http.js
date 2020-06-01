// let imgUrl = "Images/"
let a = new Array(...document.getElementsByClassName("item"))
let b = new Array(...document.getElementsByClassName("loud"))
let c = new Array(...document.getElementsByClassName("price"))
let d = new Array(...document.getElementsByClassName("add"))
let modalBody = document.getElementById("modal-body")




export const getFromBackEnd = () => {
        b.forEach(e => e.classList.add("lds-dual-ring"))
        return fetch('https://api.jsonbin.io/b/5ed3e58f60775a56858596f9', {
                headers: {
                    'Content-Type': 'application/json',
                    'secret-key': '$2b$10$706IbEnWHlfw73u70HT9reTbkywnskFW1ZFV3DR9ZdPxc3xm4UgJq'
                }
            })
            .then(res => {
                return res.json()
            }).then(data => {
                console.log(data)
                data.forEach((e, i) => {
                    b[i].classList.remove("lds-dual-ring")
                    a[i].style.backgroundImage = `url(${e.img})`
                    c[i].innerHTML = `${e.title}  ${e.price + "$"}`
                })
            })
    }
    // a.forEach((e, i) => {
    //     e.style.backgroundImage = data[i].img;
    //     // c[i].innerHTML = data[i].title + ":  " + data[i].price + "$"
    // })
    // b.forEach(e => e.classList.remove("lds-dual-ring"))




// d.forEach(e => {
//     let bool = true
//     e.onclick = function() {
//         if (bool) {
//             let f = document.getElementById("count")
//             bool = false
//             f.innerHTML = +f.innerHTML + 1
//         }
//     }
// })


let f = document.getElementById("count")

d.forEach(e => {
    e.onclick = function() {
        e.disabled = true
        let div = document.createElement("div")
        let button = document.createElement("button")
        button.textContent = "X"
        div.textContent = e.parentElement.children[0].textContent
        button.onclick = () => {
            f.innerHTML -= 1
            button.parentElement.remove()
            this.disabled = false
        }
        div.appendChild(button)
        modalBody.appendChild(div)
        f.innerHTML = +f.innerHTML + 1
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



let modal = document.getElementById('myModal');
let btn = document.getElementById("korzina");
let span = document.getElementsByClassName("close")[0];
let logo = document.getElementById("logo")



logo.onclick = function() {
    window.location.reload()
}

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}