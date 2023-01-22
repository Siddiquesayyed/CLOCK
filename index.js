const Options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

setInterval(() => {
    let Time = new Date();
    let date = Time.toLocaleDateString(undefined, Options);

    let Sec = Time.getSeconds();
    if (Sec < 10) { Sec = "0" + Sec; }

    let Minute = Time.getMinutes()
    if (Minute < 10) { Minute = "0" + Minute; }

    let Zone;
    let Hour = Time.getHours()

    if (Hour >= 12) { Hour = Hour % 12; Zone = "PM"; } else { Zone = 'AM' }
    if (Hour < 10) { Hour = "0" + Hour; }

    // if (Hour < 12) { Zone = "AM" }
    // else { Zone = "PM"; }

    document.getElementById('Time').innerHTML = `${Hour} : ${Minute} : ${Sec}  ${Zone}`
    document.getElementById('Day').innerHTML = `${date}`
}, 1000)

let newTime = new Date();
let Hour = newTime.getHours();

if (Hour > 6 && Hour <= 11) {
    document.getElementById('sun').classList.remove('moon');
    document.getElementById('sun').classList.add('sun');
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    document.getElementById('move').style.animation = "";
    document.getElementById('move').style.animation = "mor 1s linear forwards"
}
if (Hour > 11 && Hour <= 15) {
    document.getElementById('move').style.animation = "";
    document.getElementById('move').style.animation = "aft 3s linear forwards"
}
if (Hour > 15 && Hour <= 18) {
    document.getElementById('move').style.animation = "";
    document.getElementById('move').style.animation = "eve 5s linear forwards"
}


if (Hour > 18 && Hour <= 23) {
    document.getElementById('sun').classList.remove('sun');
    document.getElementById('sun').classList.add('moon');
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    document.getElementById('move').style.animation = ""
    document.getElementById('move').style.animation = "mor 1s linear forwards"
}
if (Hour > 23 && Hour <= 3) {
    document.getElementById('move').style.animation = ""
    document.getElementById('move').style.animation = "aft 3s linear forwards"
}
if (Hour > 3 && Hour <= 6) {
    document.getElementById('move').style.animation = ""
    document.getElementById('move').style.animation = "eve 5s linear forwards"
}



























