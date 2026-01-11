
//questions/answers
const questions3 = [
    "Do you want to skip school?", 
    "He asks what should they do with there time",
    "Teacher called you and asked why werent you at school?",
    "Who should you team up with?",
    "If you want to ask me something be free to do so",
    "Something else?"
];
const Answerday3box1 = [
    "Yes",
    "Explore the city",
    "Lie",
    "Alone",
    "Nothing to ask",
    "No"
];
const Answerday3box2 = [
    "No",
    "Go to a concert",
    "Tell the truth",
    "Random classmates",
    "Why did you become a teacher?",
    "What do you do in yor free time?"
];
const Answerday3box3 = [
    "",
    "Visit the movies",
    "",
    "Friends",
    "",
    ""
];
//narrator text 
const narrator3 = [
    "Before going into the school the crazy classmate came up to you and asked",
    "You walked into the school",
    "The first lesson started and the class with your head teacher",
    "She said that you need split into groups",
    "You did the group project",
    "You couldnt work on the project",
    "The teacher was happy about your group",
    "The teacher was Disapointed about your group",
    "You waited till Biology and went in",
    "The teacher wanted to get to know everyone in the class",
    "You did nothing else just sat on your phone",
    "I became a teacher because i liked children and you are the future of us",
    "When I have free time I like gardening"
]
function Next3() {
    switch (order) {
        case 1:
            if(localStorage.getItem(questions2[3])== "Use your phone"){
                document.getElementById("q").innerHTML= narrator3[n]
            }else{
                n++
                document.getElementById("q").innerHTML= narrator3[n]
                order=7
                qu = 3
            }
            n++
        break;
        case 2: case 10: case 5: case 17:
            document.getElementById("q").innerHTML = questions3[qu]
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
                if(Answerday3box1[qu] != ""){
                    document.getElementById("ans13").style.display = 'block';
                    document.getElementById("ans13").innerHTML = Answerday3box1[qu];
                }
                if(Answerday3box2[qu] != ""){
                    document.getElementById("ans23").style.display = 'block';
                    document.getElementById("ans23").innerHTML = Answerday3box2[qu];
                }
                if(Answerday3box3[qu] != ""){
                    document.getElementById("ans33").style.display = 'block';
                    document.getElementById("ans33").innerHTML = Answerday3box3[qu];
                }
            qu++
        break;
        case 7:
            //end of the day for skiping school
            EndScreen()
            document.getElementById("button3").style.display = 'block';
            document.getElementById("next3").style.display = 'none';
            document.getElementById("button2").style.display = 'none';
            document.getElementById("days"). innerHTML= "Day 3";
            document.getElementById("maintext").innerHTML = "Today you skiped school, "
            if (localStorage.getItem(questions3[1])==Answerday3box1[1]){
                document.getElementById("maintext").innerHTML += "you explored the city, "
            }else  if (localStorage.getItem(questions3[1])==Answerday3box2[1]){
                document.getElementById("maintext").innerHTML += "you went to a concert, "
            }else{
                document.getElementById("maintext").innerHTML += "you visited the movies, "
            }
            if(localStorage.getItem(questions3[2])=="Lie"){
                document.getElementById("maintext").innerHTML += "you lied to you teacher why you werent at school."
            }else{
                document.getElementById("maintext").innerHTML += "you told the truth to you teacher why you werent at school."
            }
        break;
        case 8: case 9: case 13: case 14:
            document.getElementById("q").innerHTML = narrator3[n]
            n++
        break;
        case 12:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[3])== Answerday3box3[3]){
                document.getElementById("q").innerHTML = narrator3[n]
                n++
            }else{
                n++
                document.getElementById("q").innerHTML = narrator3[n]
            }
            n++
        break;
        case 15:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML = questions3[qu]
            if(Answerday3box1[qu] != ""){
                document.getElementById("ans13").style.display = 'block';
                document.getElementById("ans13").innerHTML = Answerday3box1[qu];
            }
            if(Answerday3box2[qu] != ""){
                document.getElementById("ans23").style.display = 'block';
                document.getElementById("ans23").innerHTML = Answerday3box2[qu];
            }
            if(Answerday3box3[qu] != ""){
                document.getElementById("ans33").style.display = 'block';
                document.getElementById("ans33").innerHTML = Answerday3box3[qu];
            }
            qu++
        break;
        case 19:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions[3])=="School dorms"){
                document.getElementById("q").innerHTML = "you went to the dorms";
            }else{
                document.getElementById("q").innerHTML = "You went to your perents home";
            }
        break;
        case 20:
            EndScreen()
            document.getElementById("button3").style.display = 'block';
            document.getElementById("next3").style.display = 'none';
            document.getElementById("button2").style.display = 'none';
            document.getElementById("days"). innerHTML= "Day 3";
            if (localStorage.getItem(questions3[3])==Answerday3box1[3]){
                document.getElementById("maintext").innerHTML = "Today you thought you could do the group project all alone but the teacher didnt alow it, "
            }else  if (localStorage.getItem(questions3[3])==Answerday3box2[3]){
                document.getElementById("maintext").innerHTML = "'Today you tryed to work with random classmates but were terrible, "
            }else{
                document.getElementById("maintext").innerHTML += "Today you worked with your fiends and you did it, "
            }
            if (localStorage.getItem(questions3[4])==Answerday3box1[4]){
                document.getElementById("maintext").innerHTML = "you sat in biology on your phone."
            }else{
                document.getElementById("maintext").innerHTML = "you asked you biology teacher questions."
            }
        break;
    }
    switch (order) {
        case 7:
            if(localStorage.getItem(questions2[3])!= "Use your phone"){
                document.getElementById('background').src='Photos/hall.png'
            }
        break;
        case 5: case 19:
            if(localStorage.getItem(questions[3])== Answerbox1[3]){
                document.getElementById('background').src='Photos/house.png'
            }else{
                document.getElementById('background').src='Photos/Dorms.png'
            }
        break;
        case 8: case 13:
            document.getElementById('background').src='Photos/hall_wall.png'
        break;
        case 9: case 14:
            document.getElementById('background').src='Photos/class.png'
        break;
    } 
    console.log(order);
    order++
}
function getanswer1() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans13").innerHTML;
    localStorage.setItem(Key, Value)
    
    switch (order) {
        case 3:
            document.getElementById("q").innerHTML = questions3[qu]
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(Answerday3box1[qu] != ""){
                document.getElementById("ans13").style.display = 'block';
                document.getElementById("ans13").innerHTML = Answerday3box1[qu];
            }
            if(Answerday3box2[qu] != ""){
                document.getElementById("ans23").style.display = 'block';
                document.getElementById("ans23").innerHTML = Answerday3box2[qu];
            }
            if(Answerday3box3[qu] != ""){
                document.getElementById("ans33").style.display = 'block';
                document.getElementById("ans33").innerHTML = Answerday3box3[qu];
            }
            qu++
        break;
        case 4:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML = "You explorde the city the whole day and came back to "+localStorage.getItem(questions[3]).toLowerCase()  
        break;
        case 6:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML = "The teacher doesnt fully trust you" 
        break;
        case 11:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            n++
            document.getElementById("q").innerHTML= "The teacher didnt allow you to work alone so she put you with "+Answerday3box2[3]+". "+narrator3[n]
            n++
        break;
        case 16:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML= narrator3[n]
            order=order+2
            n++
        break;
        case 18:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML= narrator3[10]
            n++
        break;
    }
    switch (order) {
        case 4: 
            document.getElementById('background').src='Photos/wont.png'
        break;
    }
    console.log(order);
    order++
}
function getanswer2() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans23").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 3:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML = narrator3[n]
            n++
            order=7
            qu = 3
        break;
        case 4:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML = "You went to a concert and came back to "+localStorage.getItem(questions[3]).toLowerCase()   
        break;
        case 6:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML = "The teacher is angry at you"
        break;
        case 11:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            n++
            document.getElementById("q").innerHTML = narrator3[n]
            n++
        break;
        case 16:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            n++
            document.getElementById("q").innerHTML= narrator3[n] 
            n++
        break;
        case 18:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML= narrator3[n]
            n++
        break;
    }
    switch (order) {
        case 4: 
            document.getElementById('background').src='Photos/wont.png'
        break;
        case 7:
            if(localStorage.getItem(questions3[0])== "No"){
                document.getElementById('background').src='Photos/hall.png'
            }
        break;
    }
    console.log(order);
    order++
}
function getanswer3() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans33").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 4:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML = "You went to the movies and came back to "+localStorage.getItem(questions[3]).toLowerCase()   
        break;
        case 11:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML = narrator3[n]
            n++
            n++
        break;
    }
    switch (order) {
        case 4: 
            document.getElementById('background').src='Photos/wont.png'
        break;
    }
    console.log(order);
    order++
}