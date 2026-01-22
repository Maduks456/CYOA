
//questions/answers
const questions5 = [
    "You where thinking did I sleep well?",
    "How do you feel in class?",
    "Should you do the work?",
    "Where are you gonna change?",
    "For the fist lesson of PE the theacher asks what you want to do?",
    "Will you stay in the dorms or go home?"
]
const Answerday5box1= [
    "Yes",
    "Bored",
    "Yes",
    "At school",
    "Basketball",
    "Go home"
]
const Answerday5box2= [
    "No",
    "Intrested",
    "No",
    "At dorms",
    "Football",
    "Stay in the dorms"
]
const Answerday5box3= [
    "",
    "Sleepy",
    "",
    "",
    "volleyball",
    ""
]

//narrator text
const narrator5= [
    "You went to the first lesson it latvian",
    "You sat in you chair till the teacher gave you a thing to do",
    "You were listening to your teacher closly",
    "The teacher gave you work that you need to do before the class ends",
    "For doing the work the teacher gave you a positive note",
    "For not doing the work the teacher gave you a negative note",
    "You sleeped till the whole class and the teacher gave you a negative note",
    "The next lesson is PE and starts in a few minutes, you need to change",
    "You played  for the whole class",
    "You went home for the weekend",
    "You stayed in the dorms"
]
function Next5(){
    switch (order) {
        case 1: case 6:
            document.getElementById("q").innerHTML = questions5[qu]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
                if(Answerday5box1[qu] != ""){
                    document.getElementById("ans15").style.display = 'block';
                    document.getElementById("ans15").innerHTML = Answerday5box1[qu];
                }
                if(Answerday5box2[qu] != ""){
                    document.getElementById("ans25").style.display = 'block';
                    document.getElementById("ans25").innerHTML = Answerday5box2[qu];
                }
                if(Answerday5box3[qu] != ""){
                    document.getElementById("ans35").style.display = 'block';
                    document.getElementById("ans35").innerHTML = Answerday5box3[qu];
                }
            qu++
        break;
        case 3:
            document.getElementById("q").innerHTML = questions5[qu]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
                if(Answerday5box1[qu] != ""){
                    document.getElementById("ans15").style.display = 'block';
                    document.getElementById("ans15").innerHTML = Answerday5box1[qu];
                }
                if(Answerday5box2[qu] != ""){
                    document.getElementById("ans25").style.display = 'block';
                    document.getElementById("ans25").innerHTML = Answerday5box2[qu];
                }
                if(localStorage.getItem(questions5[0])=="No"){
                    document.getElementById("ans35").style.display = 'block';
                    document.getElementById("ans35").innerHTML = Answerday5box3[qu];
                }
            qu++
        break;
        case 5: case 8:
            document.getElementById("q").innerHTML = narrator5[narratorArray]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray++
        break;
        case 9:
            document.getElementById("q").innerHTML = questions5[qu]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
                if(Answerday5box1[qu] != ""){
                    document.getElementById("ans15").style.display = 'block';
                    document.getElementById("ans15").innerHTML = Answerday5box1[qu];
                }
                if(localStorage.getItem(questions[3]) =="School dorms"){
                    document.getElementById("ans25").style.display = 'block';
                    document.getElementById("ans25").innerHTML = Answerday5box2[qu];
                }
                 if(Answerday5box3[qu] != ""){
                    document.getElementById("ans35").style.display = 'block';
                    document.getElementById("ans35").innerHTML = Answerday5box1[qu];
                }
                qu++
        break;
        case 12:
            if(localStorage.getItem(questions[3])=="Perents house"){
                document.getElementById("q").innerHTML = narrator5[narratorArray]
                document.getElementById("ans15").style.display = 'none';
                document.getElementById("ans25").style.display = 'none';
                document.getElementById("ans35").style.display = 'none';
                order==13
            }else{
                document.getElementById("q").innerHTML = questions5[qu]
                document.getElementById("ans15").style.display = 'none';
                document.getElementById("ans25").style.display = 'none';
                document.getElementById("ans35").style.display = 'none';
                    if(Answerday5box1[qu] != ""){
                        document.getElementById("ans15").style.display = 'block';
                        document.getElementById("ans15").innerHTML = Answerday5box1[qu];
                    }
                    if(Answerday5box2[qu] != ""){
                        document.getElementById("ans25").style.display = 'block';
                        document.getElementById("ans25").innerHTML = Answerday5box2[qu];
                    }
                    if(Answerday5box3[qu] != ""){
                        document.getElementById("ans35").style.display = 'block';
                        document.getElementById("ans35").innerHTML = Answerday5box3[qu];
                    }
                qu++
            }
        break;
        case 14:
            EndScreen()
            document.getElementById("button").style.display = 'block';
            document.getElementById("button").style.display = 'flex';
            document.getElementById("next5").style.display = 'none';
            document.getElementById("button4").style.display = 'none';
            document.getElementById("days"). innerHTML= "Day 5";
            if (localStorage.getItem(questions5[0])== Answerday5box1[0]) {
                document.getElementById("maintext").innerHTML = "Today you slept well, " 
            }else{
                document.getElementById("maintext").innerHTML = "Today you didnt sleep well, " 
            }
            if (localStorage.getItem(questions5[1])== Answerday5box3[1]) {
                document.getElementById("maintext").innerHTML += "you were to sleepy so you slept trough the first lesson, " 
            }
            if (localStorage.getItem(questions5[1])!= Answerday5box3[1]) {
                if (localStorage.getItem(questions5[2])== Answerday5box1[2]) {
                    document.getElementById("maintext").innerHTML += "you did the work for the first lesson, " 
                }else{
                    document.getElementById("maintext").innerHTML += "you didnt the work for the first lesson, " 
                }
            }
            if (localStorage.getItem(questions[3])==Answerbox1[3]) {
                if (localStorage.getItem(questions5[4])== Answerday5box1[4]) {
                    document.getElementById("maintext").innerHTML += "in PE you played basketball." 
                }else if (localStorage.getItem(questions5[4])== Answerday5box2[4]) {
                    document.getElementById("maintext").innerHTML += "in PE you played football." 
                }else{
                    document.getElementById("maintext").innerHTML += "in PE you played volleyball." 
                }
            }else{
                if (localStorage.getItem(questions5[4])== Answerday5box1[4]) {
                    document.getElementById("maintext").innerHTML += "in PE you played basketball and " 
                }else if (localStorage.getItem(questions5[4])== Answerday5box2[4]) {
                    document.getElementById("maintext").innerHTML += "in PE you played football and " 
                }else{
                    document.getElementById("maintext").innerHTML += "in PE you played volleyball and " 
                }
            }
            if (localStorage.getItem(questions[3])==Answerbox2[3]) {
                if (localStorage.getItem(questions5[5])== Answerday5box1[5]) {
                    document.getElementById("maintext").innerHTML += "you went back home for the weekend." 
                }else{
                    document.getElementById("maintext").innerHTML += "you stayed at the dorms." 
                }
            }
        break;
    }
    switch (order) {
        case 3:
            document.getElementById('background').src='Photos/class.png'
        break;
        case 8: case 12:
            document.getElementById('background').src='Photos/hall.png'
        break;
    }
    order++
}
function get_answer1() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans15").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 2: case 13:
            document.getElementById("q").innerHTML = narrator5[narratorArray]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray++
        break;
        case 4: 
            document.getElementById("q").innerHTML = narrator5[narratorArray]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray=narratorArray+2 
        break;
        case 7:
            document.getElementById("q").innerHTML = narrator5[narratorArray]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray=narratorArray+3 
        break;
        case 10:
            document.getElementById("q").innerHTML = questions5[qu]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
                if(Answerday5box1[qu] != ""){
                    document.getElementById("ans15").style.display = 'block';
                    document.getElementById("ans15").innerHTML = Answerday5box1[qu];
                }
                if(Answerday5box2[qu] != ""){
                    document.getElementById("ans25").style.display = 'block';
                    document.getElementById("ans25").innerHTML = Answerday5box2[qu];
                }
                if(Answerday5box3[qu] != ""){
                    document.getElementById("ans35").style.display = 'block';
                    document.getElementById("ans35").innerHTML = Answerday5box3[qu];
                }
            qu++
        break;
        case 11:
            let start= narrator5[narratorArray].slice(0,11)
            let end= narrator5[narratorArray].slice(11,31)
            document.getElementById("q").innerHTML = start+localStorage.getItem(questions5[4]).toLowerCase()+end
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray++
        break;
    }
    switch (order) {
        case 2:
            document.getElementById('background').src='Photos/hall_wall.png'
        break;
        case 10:
            document.getElementById('background').src='Photos/wont.png'
        break;
        case 13:
            if(localStorage.getItem(questions[3])== Answerbox1[3]){
                document.getElementById('background').src='Photos/house.png'
            }else{
                if (localStorage.getItem(questions5[5])== Answerday5box1[5]){
                    document.getElementById('background').src='Photos/house.png'
                } else {
                    document.getElementById('background').src='Photos/Dorms.png'
                }
            }
        break;
    }
    order++
}
function get_answer2() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans25").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 2:
            document.getElementById("q").innerHTML = narrator5[narratorArray]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray++
        break;
        case 4: case 13:
            narratorArray++
            document.getElementById("q").innerHTML = narrator5[narratorArray]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray++
        break;
        case 7:
            narratorArray++
            document.getElementById("q").innerHTML = narrator5[narratorArray]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray=narratorArray+2 
        break;
        case 10:
            document.getElementById("q").innerHTML = questions5[qu]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
                if(Answerday5box1[qu] != ""){
                    document.getElementById("ans15").style.display = 'block';
                    document.getElementById("ans15").innerHTML = Answerday5box1[qu];
                }
                if(Answerday5box2[qu] != ""){
                    document.getElementById("ans25").style.display = 'block';
                    document.getElementById("ans25").innerHTML = Answerday5box2[qu];
                }
                if(Answerday5box3[qu] != ""){
                    document.getElementById("ans35").style.display = 'block';
                    document.getElementById("ans35").innerHTML = Answerday5box3[qu];
                }
            qu++
        break;
        case 11:
            let start= narrator5[narratorArray].slice(0,11)
            let end= narrator5[narratorArray].slice(11,31)
            document.getElementById("q").innerHTML = start+localStorage.getItem(questions5[4]).toLowerCase()+end
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray++
        break;
    }
    switch (order) {
        case 2:
            document.getElementById('background').src='Photos/hall_wall.png'
        break;
        case 10:
            document.getElementById('background').src='Photos/wont.png'
        break;
        case 13:
            if(localStorage.getItem(questions[3])== Answerbox1[3]){
                document.getElementById('background').src='Photos/house.png'
            }else{
                if (localStorage.getItem(questions5[5])== Answerday5box1[5]){
                    document.getElementById('background').src='Photos/house.png'
                } else {
                    document.getElementById('background').src='Photos/Dorms.png'
                }
            }
        break;
    }
    order++
}
function get_answer3() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans35").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 2:
            document.getElementById("q").innerHTML = narrator5[narratorArray]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray++
        break;
        case 4:
            narratorArray=66
            document.getElementById("q").innerHTML = narrator5[narratorArray]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray++
            order = 7
            qu++
        break;
        case 11:
            let start= narrator5[narratorArray].slice(0,11)
            let end= narrator5[narratorArray].slice(11,31)
            document.getElementById("q").innerHTML = start+localStorage.getItem(questions5[4]).toLowerCase()+end
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            narratorArray++
        break;
    }
    switch (order) {
        case 2:
            document.getElementById('background').src='Photos/hall_wall.png'
        break;
    }
    order++
}