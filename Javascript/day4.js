//order of this day
let order4 = 1;
//questions/answers and variable for it
const questions4= [
    "Which friend do you want to spend time with?",
    "The teacher asks us how much do we know?",
    "Why did you want to learn programming",
    "Should you start the project now?"
]
const Answerday4box1= [
    "Noone",
    "Alot",
    "It looked intresting",
    "Yes"
]
const Answerday4box2= [
    "1. friend",
    "Not alot",
    "i like programming",
    "No"
]
const Answerday4box3= [
    "2. friend",
    "Nothing",
    "It was the only option"
]
const Answerday4box4= [
    "3. friend",
    ""
]
let qu4 = 0
//narrator text and array variable
const narrator4 = [
    "You spent time with you friend before class",
    "you waited till the class started",
    "The lesson starts and its programming",
    "Lesson 2 started",
    "The teacher gave the class a main project but the class will learn how to do it",
    "You did the project",
    "You couldnt do the project",
    "You continued listening to the teacher",
    "You needed help",
    "The teacher was happy that you did it",
    "The teacher helped you finish the project",
    "The last lesson is physics",
    "In the lesson you need to research with fire with you deskmate",
    "You did the first steps then you started to with the fire torch",
    "You and the deskmate did the research without any problom",
    "You scorch yor arm with the fire" 
]
let n4 =0

function Next4(){
    switch (order4) {
        case 1:
            document.getElementById("q").innerHTML = questions4[qu4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
                if(Answerday4box1[qu4] != ""){
                    document.getElementById("ans14").style.display = 'block';
                    document.getElementById("ans14").innerHTML = Answerday4box1[qu4];
                }
                if(localStorage.getItem(St1question) == "Sure"){
                    document.getElementById("ans24").style.display = 'block';
                    document.getElementById("ans24").innerHTML = Answerday4box2[qu4];
                }
                if(localStorage.getItem(St2question) == "Sure"){
                    document.getElementById("ans34").style.display = 'block';
                    document.getElementById("ans34").innerHTML = Answerday4box3[qu4];
                }
                if(localStorage.getItem(questions2[2])== "Tall one" && guess==2 || localStorage.getItem(questions2[2])== "Emo one" && guess==2){
                    document.getElementById("ans44").style.display = 'block';
                    document.getElementById("ans44").innerHTML = Answerday4box4[qu4];
                }

            qu4++
        break;
        case 3: case 7: case 13: case 14: case 15:
            document.getElementById("q").innerHTML = narrator4[n4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            n4++
        break;
        case 4: case 8:
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            document.getElementById("q").innerHTML = questions4[qu4];
                if(Answerbox1[qu4] != ""){
                    document.getElementById("ans14").style.display = 'block';
                    document.getElementById("ans14").innerHTML = Answerday4box1[qu4];
                }
                if(Answerbox2[qu4] != ""){
                    document.getElementById("ans24").style.display = 'block';
                    document.getElementById("ans24").innerHTML = Answerday4box2[qu4];
                }
                if(Answerbox3[qu4] != ""){
                    document.getElementById("ans34").style.display = 'block';
                    document.getElementById("ans34").innerHTML = Answerday4box3[qu4];
                }
            qu4++
        break;
        case 10:
            document.getElementById("q").innerHTML = narrator4[n4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            n4++
            if(localStorage.getItem(questions4[1])=="Nothing"){
                localStorage.setItem(questions4[1],"Not alot")
            }else if(localStorage.getItem(questions4[1])=="Not alot") {
                localStorage.setItem(questions4[1],"Alot")
            } 
        break;
        case 11:
            if (localStorage.getItem(questions4[1])== "Alot") {
                document.getElementById("q").innerHTML = narrator4[5]
            }else{
                document.getElementById("q").innerHTML = narrator4[n4]
            }
            n4++
        break;
        case 12:
            if (localStorage.getItem(questions4[1])== "Alot") {
                document.getElementById("q").innerHTML = narrator4[n4]
                n4++
            }else{
                n4++
                document.getElementById("q").innerHTML = narrator4[n4]
            }
            n4++
        break;
        case 16:
            if(localStorage.getItem(questions2[5])==answerday2box1[5]){
                document.getElementById("q").innerHTML = narrator4[n4]
                n4++
            }else{
                n4++
                document.getElementById("q").innerHTML = narrator4[n4]
            }
            n4++
        break;
        case 17:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions[3])=="School dorms"){
                document.getElementById("q").innerHTML = "you went to the dorms";
            }else{
                document.getElementById("q").innerHTML = "You went to your perents house";
            }
        break;
        case 18:
            EndScreen()
            document.getElementById("button4").style.display = 'block';
            document.getElementById("button").style.display = 'flex';
            document.getElementById("next4").style.display = 'none';
            document.getElementById("button3").style.display = 'none';
            document.getElementById("days"). innerHTML= "Day 4";
                if (localStorage.getItem(questions4[0])== Answerday4box1[0]) {
                    document.getElementById("maintext").innerHTML = "Today You waited alone till the lesson, " 
                }else{
                    document.getElementById("maintext").innerHTML = "Today you spent time with your friend before class, "
                }
                if (localStorage.getItem(questions4[1])== Answerday4box1[1]) {
                    document.getElementById("maintext").innerHTML += "you know alot of programming, " 
                }else if (localStorage.getItem(questions4[1])== Answerday4box2[1]){
                    document.getElementById("maintext").innerHTML += "you know not alot of programming, "
                }else{
                    document.getElementById("maintext").innerHTML += "you know nothing about programming, "
                }
                if (localStorage.getItem(questions4[2])== Answerday4box1[2]) {
                    document.getElementById("maintext").innerHTML += "you started to learn programming bcause it looked intresting, " 
                }else if (localStorage.getItem(questions4[2])== Answerday4box2[2]){
                    document.getElementById("maintext").innerHTML += "you started to learn programming bcause i like programming, "
                }else{
                    document.getElementById("maintext").innerHTML += "you started to learn programming bcause it was the only option, "
                }
                
                if (localStorage.getItem(questions4[3])== Answerday4box1[3]) {
                    if(localStorage.getItem(questions4[1])==Answerday4box1[1]){
                        document.getElementById("maintext").innerHTML += "you did the project before the teacher explaned how to do it "
                    }
                }else{
                    document.getElementById("maintext").innerHTML += "you tryed to do it but couldnt do it"
                }
        break;
    }
    switch (order4) {
        case 1:
            document.getElementById('background').src='Photos/hall.png'
            document.getElementById('background').style.width ="1400px"
            document.getElementById('background').style.height ="580px"  
        break;
        case 3: case 13:
            document.getElementById('background').src='Photos/hall_wall.png'
            document.getElementById('background').style.width ="1400px"
            document.getElementById('background').style.height ="580px"
        break;
        case 4: case 14:
            document.getElementById('background').src='Photos/class.png'
            document.getElementById('background').style.width ="1200px"
            document.getElementById('background').style.height ="600px"
        break;
        case 17:
            if(localStorage.getItem(questions[3])== Answerbox1[3]){
                document.getElementById('background').src='Photos/house.png'
                document.getElementById('background').style.width ="1300px"
                document.getElementById('background').style.height ="550px"
    
            }else{
                document.getElementById('background').src='Photos/Dorms.png'
                document.getElementById('background').style.width ="1400px"
                document.getElementById('background').style.height ="600px"
            }
        break;
    }
    order4++
}
function Getanswer1() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans14").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order4) {
        case 2:
            n4++
            document.getElementById("q").innerHTML = narrator4[n4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            n4++
        break;
        case 5:
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            document.getElementById("q").innerHTML = questions4[qu4];
                if(Answerbox1[qu4] != ""){
                    document.getElementById("ans14").style.display = 'block';
                    document.getElementById("ans14").innerHTML = Answerday4box1[qu4];
                }
                if(Answerbox2[qu4] != ""){
                    document.getElementById("ans24").style.display = 'block';
                    document.getElementById("ans24").innerHTML = Answerday4box2[qu4];
                }
                if(Answerbox3[qu4] != ""){
                    document.getElementById("ans34").style.display = 'block';
                    document.getElementById("ans34").innerHTML = Answerday4box3[qu4];
                }
                if(Answerbox4[qu4] != ""){ 
                    document.getElementById("ans44").style.display = 'block';
                    document.getElementById("ans44").innerHTML = Answerday4box4[qu4];
                }
            qu4++
        break;
        case 6:
            document.getElementById("q").innerHTML = narrator4[n4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            n4++
        break;
        case 9:
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            if (localStorage.getItem(questions4[1])=="Alot"){
                document.getElementById("q").innerHTML = narrator4[n4]
                n4=n4+3
                order4=11
            }else{
                n4++
                document.getElementById("q").innerHTML = narrator4[n4]
            }
            n4++
        break;
    }
    order4++
}
function Getanswer2() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans24").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order4) {
        case 2:
            document.getElementById("q").innerHTML = narrator4[n4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            n4=n4+2
        break;
        case 5:
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            document.getElementById("q").innerHTML = questions4[qu4];
                if(Answerbox1[qu4] != ""){
                    document.getElementById("ans14").style.display = 'block';
                    document.getElementById("ans14").innerHTML = Answerday4box1[qu4];
                }
                if(Answerbox2[qu4] != ""){
                    document.getElementById("ans24").style.display = 'block';
                    document.getElementById("ans24").innerHTML = Answerday4box2[qu4];
                }
                if(Answerbox3[qu4] != ""){
                    document.getElementById("ans34").style.display = 'block';
                    document.getElementById("ans34").innerHTML = Answerday4box3[qu4];
                }
                if(Answerbox4[qu4] != ""){ 
                    document.getElementById("ans44").style.display = 'block';
                    document.getElementById("ans44").innerHTML = Answerday4box4[qu4];
                }
            qu4++
        break;
        case 6:
            document.getElementById("q").innerHTML = narrator4[n4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            n4++
        break;
        case 9:
            n4 = n4+2
            document.getElementById("q").innerHTML = narrator4[n4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            n4++
            if(localStorage.getItem(questions4[1])=="Nothing"){
                localStorage.setItem(questions4[1],"Not alot")
            }else if(localStorage.getItem(questions4[1])=="Not alot") {
                localStorage.setItem(questions4[1],"Alot")
            } 
            order4++
        break;
    }
    order4++
}
function Getanswer3() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans34").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order4) {
        case 2:
            document.getElementById("q").innerHTML = narrator4[n4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            n4=n4+2
        break;
        case 5:
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            document.getElementById("q").innerHTML = questions4[qu4];
                if(Answerbox1[qu4] != ""){
                    document.getElementById("ans14").style.display = 'block';
                    document.getElementById("ans14").innerHTML = Answerday4box1[qu4];
                }
                if(Answerbox2[qu4] != ""){
                    document.getElementById("ans24").style.display = 'block';
                    document.getElementById("ans24").innerHTML = Answerday4box2[qu4];
                }
                if(Answerbox3[qu4] != ""){
                    document.getElementById("ans34").style.display = 'block';
                    document.getElementById("ans34").innerHTML = Answerday4box3[qu4];
                }
                if(Answerbox4[qu4] != ""){ 
                    document.getElementById("ans44").style.display = 'block';
                    document.getElementById("ans44").innerHTML = Answerday4box4[qu4];
                }
            qu4++
        break;
        case 6:
            document.getElementById("q").innerHTML = narrator4[n4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            n4++
        break;
    }
    order4++ 
}
function Getanswer4() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans44").innerHTML;
    localStorage.setItem(Key, Value)
        switch (order4) {
        case 2:
            document.getElementById("q").innerHTML = narrator4[n4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
            n4=n4+2
        break;
    }
    order4++
}