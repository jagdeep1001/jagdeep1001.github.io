
function openCal(evt, calName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(calName).style.display = "block";
    evt.currentTarget.ClassName += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function CalculateMetric() {

    var gender, weight, height, age, level, firstop, secondop, thirdop, total, calories, level, display;

    gender = document.getElementById("genderMetric").value;
    weight = document.getElementById("weightMetric").value;
    height = document.getElementById("heightMetric").value;
    age = document.getElementById("ageMetric").value;
    level = radioCheck1();
    if (level != "0") {
        if (gender == "maleM") {
            firstop = 13.75 * weight;
            secondop = 5.003 * height;
            thirdop = 6.755 * age;
            total = 66.47 + firstop + secondop - thirdop;
            calories = total * level;
        }
        else if (gender == "femaleM") {
            firstop = 9.563 * weight;
            secondop = 1.85 * height;
            thirdop = 4.676 * age;
            total = 655.1 + firstop + secondop - thirdop;
            calories = total * level;
        }
        document.getElementById("display").value;
        document.getElementById("display").innerHTML = ('Your body will burn ' + total.toFixed(2) + ' calories each day. Based upon this, your daily calorie requirement would be ' + calories.toFixed(2) + ' calories.');
    } else {
        alert("Enter and check all parts!")
    }
}

function CalculateImperial() {

    var gender, age, level, firstop, secondop, thirdop, total, calories, stone, pound, inch, feet, height, weight;

    gender = document.getElementById("genderImperial").value;
    stone = document.getElementById("stoneImperial").value;
    pound = document.getElementById("poundImperial").value;
    feet = document.getElementById("feetImperial").value;
    inch = document.getElementById("inchImperial").value;
    age = document.getElementById("ageImperial").value;
    level = radioCheck2();

    height = parseInt(feet) * 12 + parseInt(inch);
    weight = parseInt(stone) * 14 + parseInt(pound);

    if (level != 0) {
        if (gender == "maleI") {
            firstop = 6.24 * weight;
            secondop = 12.7 * height;
            thirdop = 6.755 * age;
            total = 66.47 + firstop + secondop - thirdop;
            calories = total * level;
        }
        else if (gender == "femaleI") {
            firstop = 4.35 * weight;
            secondop = 4.7 * height;
            thirdop = 4.7 * age;
            total = 655.1 + firstop + secondop - thirdop;
            calories = total * level;
        }
        document.getElementById("displayTotal").value;
        document.getElementById("displayTotal").innerHTML = ('Your body will burn ' + total.toFixed(2) + ' calories each day. Based upon this, your daily calorie requirement would be ' + calories.toFixed(2) + ' calories.');
    } else {
        alert("Enter or check all parts!")
    }

}

function radioCheck1() {
    var radio = document.getElementsByName("levelMetric");
    var checkOne = 0;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            checkOne = radio[i].value;
        }
    }
    return checkOne;
}

function radioCheck2() {
    var radio = document.getElementsByName("levelImperial");
    var checkOne = 0;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            checkOne = radio[i].value;
        }
    }
    return checkOne;
}
