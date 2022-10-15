axios.get("https://dummyjson.com/users")
    .then(res => reload(res.data.users))

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let editA = document.querySelector(".ap")
let editAp = document.querySelector(".app")
let editApp = document.querySelector(".appp")

function reload(arr) {
    for (let item of arr) {

        let q = document.createElement('div')
        let p = document.createElement('h4')
        let h1 = document.createElement('h1')
        let img = document.createElement('img')
        let c = document.createElement('div')
        let h2 = document.createElement('h4')
        let e = document.createElement('div')

        let btn = document.createElement('button')

        q.classList.add('q')
        p.innerHTML = "Email:" + " " + item.email
        h1.innerHTML = item.firstName
        img.src = item.image
        c.classList.add('c')
        e.classList.add('e')
        h2.innerHTML = "Year:" + " " + item.age
        btn.innerHTML = "Подробнее"
        btn.classList.add("btn")

        e.append(h1, img,)
        c.append(p, h2, btn)
        q.append(e, c)

        if (item.age <= 25) {
            two.append(q)
        } if (item.age >= 25 || item <= 40) {
            three.append(q)
        } if (item.age >= 40) {
            four.append(q)
        }

        let btns = document.querySelectorAll('.btn')
        btns.forEach((bt) => {

            let modal = document.querySelector('.modal')
            let modal_bg = document.querySelector('.modal_bg')

            bt.onclick = () => {



                
                modal.style.display = "block"
                modal_bg.style.display = "block"
                setTimeout(() => {
                    modal_bg.style.opacity = "1"
                    modal.style.opacity = "1"
                    modal.style.transform = "translate(-50%, -50%) scale(1)";
                }, 200)
            }

        })

    }




    let qq = document.querySelector('.q')




    editA.onclick = () => {
        var snd = document.querySelector(".two :nth-child(5)")
        var scond = document.querySelector(".two :nth-child(6)")

        if (editA.innerHTML === "Показать все") {

            editA.innerHTML = "Свернуть"
            snd.style.display = "flex"
            scond.style.display = "flex"

        } else {

            snd.style.display = "none"
            scond.style.display = "none"
            editA.innerHTML = "Показать все"

        }
    }


    editAp.onclick = () => {
        var s_ = document.querySelector(".three :nth-child(5)")
        var s__ = document.querySelector(".three :nth-child(6)")
        var s___ = document.querySelector(".three :nth-child(7)")
        var s____ = document.querySelector(".three :nth-child(8)")
        var s_____ = document.querySelector(".three :nth-child(9)")
        var s______ = document.querySelector(".three :nth-child(10)")
        var s_______ = document.querySelector(".three :nth-child(11)")
        var s________ = document.querySelector(".three :nth-child(12)")

        if (editAp.innerHTML === "Показать все") {

            editAp.innerHTML = "Свернуть"
            s_.style.display = "flex"
            s__.style.display = "flex"
            s___.style.display = "flex"
            s____.style.display = "flex"
            s_____.style.display = "flex"
            s______.style.display = "flex"
            s_______.style.display = "flex"
            s________.style.display = "flex"

        } else {

            s_.style.display = "none"
            s__.style.display = "none"
            s___.style.display = "none"
            s____.style.display = "none"
            s_____.style.display = "none"
            s______.style.display = "none"
            s_______.style.display = "none"
            s________.style.display = "none"
            editAp.innerHTML = "Показать все"

        }
    }


    editApp.onclick = () => {
        var qe_ = document.querySelector(".four :nth-child(5)")
        var qe__ = document.querySelector(".four :nth-child(6)")
        var qe___ = document.querySelector(".four :nth-child(7)")
        var qe____ = document.querySelector(".four :nth-child(8)")
        var qe_____ = document.querySelector(".four :nth-child(9)")
        var qe______ = document.querySelector(".four :nth-child(10)")
        var qe_______ = document.querySelector(".four :nth-child(11)")
        var qe________ = document.querySelector(".four :nth-child(12)")

        if (editApp.innerHTML === "Показать все") {

            editApp.innerHTML = "Свернуть"
            qe_.style.display = "flex"
            qe__.style.display = "flex"
            qe___.style.display = "flex"
            qe____.style.display = "flex"
            qe_____.style.display = "flex"
            qe______.style.display = "flex"
            qe_______.style.display = "flex"
            qe________.style.display = "flex"

        } else {

            qe_.style.display = "none"
            qe__.style.display = "none"
            qe___.style.display = "none"
            qe____.style.display = "none"
            qe_____.style.display = "none"
            qe______.style.display = "none"
            qe_______.style.display = "none"
            qe________.style.display = "none"
            editApp.innerHTML = "Показать все"

        }
    }









}


