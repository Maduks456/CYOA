let value5
let key5 
let order5 = 1
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
qu5 =0
const narrator5= [
    "You went to the first lesson it latvian",
    "You sat in you chair till the teacher gave you a thing to do",
    "You were listenig to your teacher closly",
    "The teacher gave you work that you need to do before the class ends",
    "For doing the work the teacher gave you a positive note",
    "For not doing the work the teacher gave you a negative note",
    "You sleeped till the whole class and the teacher gave you a negative note",
    "The next lesson is PE and starts in a few minutes, you need to change",
    "You played  for the whole class",
    "You went home for the weekend",
    "You stayed in the dorms"
]
n5 =0
function Next5(){
    switch (order5) {
        case 1: case 6:
            document.getElementById("q").innerHTML = questions5[qu5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
                if(Answerday5box1[qu5] != ""){
                    document.getElementById("ans15").style.display = 'block';
                    document.getElementById("ans15").innerHTML = Answerday5box1[qu5];
                }
                if(Answerday5box2[qu5] != ""){
                    document.getElementById("ans25").style.display = 'block';
                    document.getElementById("ans25").innerHTML = Answerday5box2[qu5];
                }
                if(Answerday5box3[qu5] != ""){
                    document.getElementById("ans35").style.display = 'block';
                    document.getElementById("ans35").innerHTML = Answerday5box3[qu5];
                }
            qu5++
        break;
        case 3:
            document.getElementById("q").innerHTML = questions5[qu5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
                if(Answerday5box1[qu5] != ""){
                    document.getElementById("ans15").style.display = 'block';
                    document.getElementById("ans15").innerHTML = Answerday5box1[qu5];
                }
                if(Answerday5box2[qu5] != ""){
                    document.getElementById("ans25").style.display = 'block';
                    document.getElementById("ans25").innerHTML = Answerday5box2[qu5];
                }
                if(localStorage.getItem(questions5[0])=="No"){
                    document.getElementById("ans35").style.display = 'block';
                    document.getElementById("ans35").innerHTML = Answerday5box3[qu5];
                    qu5++
                }
            qu5++
        break;
        case 5: case 8:
            document.getElementById("q").innerHTML = narrator5[n5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5++
        break;
        case 9:
            document.getElementById("q").innerHTML = questions5[qu5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
                if(Answerday5box1[qu5] != ""){
                    document.getElementById("ans15").style.display = 'block';
                    document.getElementById("ans15").innerHTML = Answerday5box1[qu5];
                }
                if(localStorage.getItem(questions[3]) =="School dorms"){
                    document.getElementById("ans25").style.display = 'block';
                    document.getElementById("ans25").innerHTML = Answerday5box2[qu5];
                }
                 if(Answerday5box3[qu5] != ""){
                    document.getElementById("ans35").style.display = 'block';
                    document.getElementById("ans35").innerHTML = Answerday5box1[qu5];
                }
                qu5++
        break;
        case 12:
            if(localStorage.getItem(questions[3])=="Perents house"){
                document.getElementById("q").innerHTML = narrator5[n5]
                document.getElementById("ans15").style.display = 'none';
                document.getElementById("ans25").style.display = 'none';
                document.getElementById("ans35").style.display = 'none';
                order5==13
            }else{
                document.getElementById("q").innerHTML = questions5[qu5]
                document.getElementById("ans15").style.display = 'none';
                document.getElementById("ans25").style.display = 'none';
                document.getElementById("ans35").style.display = 'none';
                    if(Answerday5box1[qu5] != ""){
                        document.getElementById("ans15").style.display = 'block';
                        document.getElementById("ans15").innerHTML = Answerday5box1[qu5];
                    }
                    if(Answerday5box2[qu5] != ""){
                        document.getElementById("ans25").style.display = 'block';
                        document.getElementById("ans25").innerHTML = Answerday5box2[qu5];
                    }
                    if(Answerday5box3[qu5] != ""){
                        document.getElementById("ans35").style.display = 'block';
                        document.getElementById("ans35").innerHTML = Answerday5box3[qu5];
                    }
                qu5++
            }
        break;
        case 14:
            document.getElementById("days").style.display = 'block';
            document.getElementById("maintext").style.display = 'block';
            document.getElementById("button5").style.display = 'block';
            document.getElementById("button").style.display = 'flex';
            document.getElementById("end").style.display = 'flex';
            document.getElementById("next5").style.display = 'none';
            document.getElementById("button4").style.display = 'none';
            document.getElementById("q"). innerHTML= "";
            document.getElementById("days"). innerHTML= "day 5";
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
    console.log("before is "+order5);
    order5++
    console.log("After is "+order5); 
}
function get_answer1() {
    key5= document.getElementById("q").innerHTML;
    value5 = document.getElementById("ans15").innerHTML;
    localStorage.setItem(key5, value5)
    switch (order5) {
        case 2: case 13:
            document.getElementById("q").innerHTML = narrator5[n5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5++
        break;
        case 4: 
            document.getElementById("q").innerHTML = narrator5[n5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5= n5+2
        break;
        case 7:
            document.getElementById("q").innerHTML = narrator5[n5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5= n5+3
        break;
        case 10:
            document.getElementById("q").innerHTML = questions5[qu5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
                if(Answerday5box1[qu5] != ""){
                    document.getElementById("ans15").style.display = 'block';
                    document.getElementById("ans15").innerHTML = Answerday5box1[qu5];
                }
                if(Answerday5box2[qu5] != ""){
                    document.getElementById("ans25").style.display = 'block';
                    document.getElementById("ans25").innerHTML = Answerday5box2[qu5];
                }
                if(Answerday5box3[qu5] != ""){
                    document.getElementById("ans35").style.display = 'block';
                    document.getElementById("ans35").innerHTML = Answerday5box3[qu5];
                }
            qu5++
        break;
        case 11:
            let start= narrator5[n5].slice(0,11)
            let end= narrator5[n5].slice(11,31)
            document.getElementById("q").innerHTML = start+localStorage.getItem(questions5[4]).toLowerCase()+end
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5++
        break;
    }
    console.log("before is "+order5);
    order5++
    console.log("After is "+order5); 
}
function get_answer2() {
    key5= document.getElementById("q").innerHTML;
    value5 = document.getElementById("ans25").innerHTML;
    localStorage.setItem(key5, value5)
    switch (order5) {
        case 2:
            document.getElementById("q").innerHTML = narrator5[n5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5++
        break;
        case 4: case 13:
            n5++
            document.getElementById("q").innerHTML = narrator5[n5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5++
        break;
        case 7:
            n5++
            document.getElementById("q").innerHTML = narrator5[n5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5= n5+2
        break;
        case 10:
            document.getElementById("q").innerHTML = questions5[qu5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
                if(Answerday5box1[qu5] != ""){
                    document.getElementById("ans15").style.display = 'block';
                    document.getElementById("ans15").innerHTML = Answerday5box1[qu5];
                }
                if(Answerday5box2[qu5] != ""){
                    document.getElementById("ans25").style.display = 'block';
                    document.getElementById("ans25").innerHTML = Answerday5box2[qu5];
                }
                if(Answerday5box3[qu5] != ""){
                    document.getElementById("ans35").style.display = 'block';
                    document.getElementById("ans35").innerHTML = Answerday5box3[qu5];
                }
            qu5++
        break;
        case 11:
            let start= narrator5[n5].slice(0,11)
            let end= narrator5[n5].slice(11,31)
            document.getElementById("q").innerHTML = start+localStorage.getItem(questions5[4]).toLowerCase()+end
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5++
        break;
        
    }
    console.log("before is "+order5);
    order5++
    console.log("After is "+order5); 
}
function get_answer3() {
    key5= document.getElementById("q").innerHTML;
    value5 = document.getElementById("ans35").innerHTML;
    localStorage.setItem(key5, value5)
    switch (order5) {
        case 2:
            document.getElementById("q").innerHTML = narrator5[n5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5++
        break;
        case 4:
            n5=6
            document.getElementById("q").innerHTML = narrator5[n5]
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5++
            order5 = 7
        break;
        case 11:
            let start= narrator5[n5].slice(0,11)
            let end= narrator5[n5].slice(11,31)
            document.getElementById("q").innerHTML = start+localStorage.getItem(questions5[4]).toLowerCase()+end
            document.getElementById("ans15").style.display = 'none';
            document.getElementById("ans25").style.display = 'none';
            document.getElementById("ans35").style.display = 'none';
            n5++
        break;
    }
    console.log("before is "+order5);
    order5++
    console.log("After is "+order5); 
}