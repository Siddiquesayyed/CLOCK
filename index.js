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
    if (Hour == 0) { Hour = '12' }

    if (Hour > 12) { Hour = Hour % 12; Zone = "PM"; } else { Zone = 'AM' }
    if (Hour < 10) { Hour = "0" + Hour; }
    document.getElementById('Time').innerHTML = `${Hour} : ${Minute} : ${Sec}  ${Zone}`
    document.getElementById('Day').innerHTML = `${date}`
}, 1000)

let newTime = new Date();
let Hour = newTime.getHours();

let list = document.getElementById('sun').classList;
let styleMove = document.getElementById('move').style;
let bodyStyle = document.body.style;
let img = document.getElementById('img').style;

if (Hour > 6 && Hour < 11) {
    list.remove('moon');
    list.add('sun');
    bodyStyle.backgroundColor = 'white'
    bodyStyle.color = 'black'
    styleMove.animation = "";
    styleMove.animation = "mor 1s linear forwards"
}
else if (Hour >= 11 && Hour <= 15) {
    styleMove.animation = "";
    styleMove.animation = "aft 3s linear forwards"
}
else if (Hour > 15 && Hour < 18) {
    styleMove.animation = "";
    styleMove.animation = "eve 5s linear forwards"
}
else if (Hour >= 18 && Hour <= 23) {
    img.display = "none"
    list.remove('sun');
    list.add('moon');
    bodyStyle.backgroundColor = 'black'
    bodyStyle.color = 'white'
    styleMove.animation = ""
    styleMove.animation = "mor 1s linear forwards"
}
else if (Hour == 0 && Hour <= 3) {
    img.display = "none"
    list.remove('sun');
    list.add('moon');
    bodyStyle.backgroundColor = 'black'
    bodyStyle.color = 'white'
    styleMove.animation = ""
    styleMove.animation = "aft 3s linear forwards"
}
else if (Hour > 3 && Hour <= 6) {
    img.display = "none"
    list.remove('sun');
    list.add('moon');
    bodyStyle.backgroundColor = 'black'
    bodyStyle.color = 'white'
    styleMove.animation = ""
    styleMove.animation = "eve 5s linear forwards"
}




























