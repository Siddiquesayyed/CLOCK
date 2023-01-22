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
    if (Hour === 0) { Hour = '12' }

    if (Hour >= 12) { Hour = Hour % 12; Zone = "PM"; } else { Zone = 'AM' }
    if (Hour < 10) { Hour = "0" + Hour; }



    document.getElementById('Time').innerHTML = `${Hour} : ${Minute} : ${Sec}  ${Zone}`
    document.getElementById('Day').innerHTML = `${date}`
}, 1000)

let newTime = new Date();
let Hour = newTime.getHours();

let classList = document.getElementById('sun').classList;
let styleAnimation = document.getElementById('move').style;

if (Hour > 6 && Hour <= 11) {
    classList.remove('moon');
    classList.add('sun');
    document.getElementById('img').classList.add('img')
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    styleAnimation.animation = "";
    styleAnimation.animation = "mor 1s linear forwards"
}
if (Hour > 11 && Hour <= 15) {
    styleAnimation.animation = "";
    styleAnimation.animation = "aft 3s linear forwards"
}
if (Hour > 15 && Hour <= 18) {
    styleAnimation.animation = "";
    styleAnimation.animation = "eve 5s linear forwards"
}

if (Hour > 18 && Hour <= 23) {
    classList.remove('sun');
    classList.add('moon');
    document.getElementById('img').classList.remove('img')
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
    styleAnimation.animation = ""
    styleAnimation.animation = "mor 1s linear forwards"
}
if (Hour > 23 && Hour <= 3) {
    styleAnimation.animation = ""
    styleAnimation.animation = "aft 3s linear forwards"
}
if (Hour > 3 && Hour <= 6) {
    styleAnimation.animation = ""
    styleAnimation.animation = "eve 5s linear forwards"
}



























