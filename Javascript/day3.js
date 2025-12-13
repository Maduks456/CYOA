

let order3 = 1;
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
let qu3 = 0;
let checking = 0;
const narrator3 = [
    "Before going into the school the crazy classmate came up to you and asked",
    "You walked into the school",
    "The first lesson started and the  class with your head teacher",
    "She said that you need split into groups",
    "You did the group project",
    "You couldnt work on the project",
    "The teacher was happy about your group",
    "The teacher was Disapointed about your group",
    "You waited till Biology and went in",
    "The teacher wanted to get to know everyone in the class",
    "You did nothing else just sat on your phone",
    "I became a teacher because i liked children  and you are the future of us",
    "When I have free time I like gardening"

]
let n3= 0;
let key3;
let value3;
function Next3() {
    switch (order3) {
        case 1:
            if(localStorage.getItem(questions2[3])== "Use your phone"){
                document.getElementById("q").innerHTML= narrator3[n3]
            }else{
                n3++
                document.getElementById("q").innerHTML= narrator3[n3]
                order3=7
                qu3 = 3
            }
            n3++
        break;
        case 2: case 10: case 5: case 17:
            document.getElementById("q").innerHTML = questions3[qu3]
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
                if(Answerday3box1[qu3] != ""){
                    document.getElementById("ans13").style.display = 'block';
                    document.getElementById("ans13").innerHTML = Answerday3box1[qu3];
                }
                if(Answerday3box2[qu3] != ""){
                    document.getElementById("ans23").style.display = 'block';
                    document.getElementById("ans23").innerHTML = Answerday3box2[qu3];
                }
                if(Answerday3box3[qu3] != ""){
                    document.getElementById("ans33").style.display = 'block';
                    document.getElementById("ans33").innerHTML = Answerday3box3[qu3];
                }
            qu3++
        break;
        case 7:
            //end of the day for skiping school
            document.getElementById("days").style.display = 'block';
            document.getElementById("maintext").style.display = 'block';
            document.getElementById("button3").style.display = 'block';
            document.getElementById("button").style.display = 'flex';
            document.getElementById("end").style.display = 'flex';
            document.getElementById("next3").style.display = 'none';
            document.getElementById("button2").style.display = 'none';
            document.getElementById("q"). innerHTML= "";
            document.getElementById("days"). innerHTML= "day 3";
            document.getElementById("maintext").innerHTML = "You skiped school and "+localStorage.getItem(questions3[1])+" and "+localStorage.getItem(questions3[2]);
        break;
        case 8: case 9: case 13: case 14:
            document.getElementById("q").innerHTML = narrator3[n3]
            n3++
            console.log("n3 is "+n3);
            
        break;
        case 12:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[3])== Answerday3box3[3]){
                document.getElementById("q").innerHTML = narrator3[n3]
                n3++
            }else{
                n3++
                document.getElementById("q").innerHTML = narrator3[n3]
            }
            n3++
        break;
        case 15:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            document.getElementById("q").innerHTML = questions3[qu3]
                if(Answerday3box1[qu3] != ""){
                    document.getElementById("ans13").style.display = 'block';
                    document.getElementById("ans13").innerHTML = Answerday3box1[qu3];
                }
                if(Answerday3box2[qu3] != ""){
                    document.getElementById("ans23").style.display = 'block';
                    document.getElementById("ans23").innerHTML = Answerday3box2[qu3];
                }
                if(Answerday3box3[qu3] != ""){
                    document.getElementById("ans33").style.display = 'block';
                    document.getElementById("ans33").innerHTML = Answerday3box3[qu3];
                }
            qu3++
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
            document.getElementById("days").style.display = 'block';
            document.getElementById("maintext").style.display = 'block';
            document.getElementById("button3").style.display = 'block';
            document.getElementById("button").style.display = 'flex';
            document.getElementById("end").style.display = 'flex';
            document.getElementById("next3").style.display = 'none';
            document.getElementById("button2").style.display = 'none';
            document.getElementById("q"). innerHTML= "";
            document.getElementById("days"). innerHTML= "day 3";
            document.getElementById("maintext").innerHTML = "day 3 done?"
        break;
    }
    console.log("before "+order3); 
    order3++
    console.log("after "+order3);
}
function getanswer1() {
    key3= document.getElementById("q").innerHTML;
    value3 = document.getElementById("ans13").innerHTML;
    localStorage.setItem(key3, value3)
    switch (order3) {
        case 3:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[0])=="Yes"){
                document.getElementById("q").innerHTML = questions3[qu3]
                document.getElementById("ans13").style.display = 'none';
                document.getElementById("ans23").style.display = 'none';
                document.getElementById("ans33").style.display = 'none';
                if(Answerday3box1[qu3] != ""){
                    document.getElementById("ans13").style.display = 'block';
                    document.getElementById("ans13").innerHTML = Answerday3box1[qu3];
                }
                if(Answerday3box2[qu3] != ""){
                    document.getElementById("ans23").style.display = 'block';
                    document.getElementById("ans23").innerHTML = Answerday3box2[qu3];
                }
                if(Answerday3box3[qu3] != ""){
                    document.getElementById("ans33").style.display = 'block';
                    document.getElementById("ans33").innerHTML = Answerday3box3[qu3];
                }
            qu3++
            }else{
                document.getElementById("q").innerHTML = narrator3[n3]
                n3++
                order3=7
                qu3 = 3
            }
        break;
        case 4:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[1])==Answerday3box1[1]){
                document.getElementById("q").innerHTML = "You explorde the city the whole day and came back to "+localStorage.getItem(questions[3]).toLowerCase()  
            }else if(localStorage.getItem(questions3[1])==Answerday3box2[1]){
                document.getElementById("q").innerHTML = "You went to a concert and came back to "+localStorage.getItem(questions[3]).toLowerCase()   
            }else{
                document.getElementById("q").innerHTML = "You went to the movies and came back to "+localStorage.getItem(questions[3]).toLowerCase()   
            }
        break;
        case 6:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[2])=="Lie"){
                document.getElementById("q").innerHTML = "The teacher doesnt fully trust you" 
            }else{
                document.getElementById("q").innerHTML = "The teacher is angry at you"
            }
        break;
        case 11:
            console.log(localStorage.getItem(questions3[3]));
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[3])== Answerday3box1[3]){
                n3++
                document.getElementById("q").innerHTML= "The teacher didnt allow you to work alone so she put you with "+Answerday3box2[3]+". "+narrator3[n3]
            }else if (localStorage.getItem(questions3[3])== Answerday3box2[3]){
                n3++
                document.getElementById("q").innerHTML = narrator3[n3]
            }else{
                document.getElementById("q").innerHTML = narrator3[n3]
                n3++
            }
            n3++
        break;
        case 16:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[4])== Answerday3box1[4]){
                document.getElementById("q").innerHTML= narrator3[n3]
                order3=order3+2

            }else{
                n3++
                document.getElementById("q").innerHTML= narrator3[n3]
            }
            n3++
        break;
        case 18:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[5])== "No"){
                document.getElementById("q").innerHTML= narrator3[10]
            }else{
                document.getElementById("q").innerHTML= narrator3[n3]
            }
            n3++
        break;
    }
    console.log("before "+order3); 
    order3++
    console.log("after "+order3);
}
function getanswer2() {
    key3= document.getElementById("q").innerHTML;
    value3 = document.getElementById("ans23").innerHTML;
    localStorage.setItem(key3, value3)
    switch (order3) {
        case 3:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[0])=="Yes"){
                document.getElementById("q").innerHTML = questions3[qu3]
                document.getElementById("ans13").style.display = 'none';
                document.getElementById("ans23").style.display = 'none';
                document.getElementById("ans33").style.display = 'none';
                if(Answerday3box1[qu3] != ""){
                    document.getElementById("ans13").style.display = 'block';
                    document.getElementById("ans13").innerHTML = Answerday3box1[qu3];
                }
                if(Answerday3box2[qu3] != ""){
                    document.getElementById("ans23").style.display = 'block';
                    document.getElementById("ans23").innerHTML = Answerday3box2[qu3];
                }
                if(Answerday3box3[qu3] != ""){
                    document.getElementById("ans33").style.display = 'block';
                    document.getElementById("ans33").innerHTML = Answerday3box3[qu3];
                }
            qu3++
            }else{
                document.getElementById("q").innerHTML = narrator3[n3]
                n3++
                order3=7
                qu3 = 3
            }
        break;
        case 4:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[1])==Answerday3box1[1]){
                document.getElementById("q").innerHTML = "You explorde the city the whole day and came back to "+localStorage.getItem(questions[3]).toLowerCase()  
            }else if(localStorage.getItem(questions3[1])==Answerday3box2[1]){
                document.getElementById("q").innerHTML = "You went to a concert and came back to "+localStorage.getItem(questions[3]).toLowerCase()   
            }else{
                document.getElementById("q").innerHTML = "You went to the movies and came back to "+localStorage.getItem(questions[3]).toLowerCase()   
            }
        break;
        case 6:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[2])=="Lie"){
                document.getElementById("q").innerHTML = "The teacher doesnt fully trust you" 
            }else{
                document.getElementById("q").innerHTML = "The teacher is angry at you"
            }
        break;
        case 11:
            console.log(localStorage.getItem(questions3[3]));
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[3])== Answerday3box1[3]){
                n3++
                document.getElementById("q").innerHTML= "The teacher didnt allow you to work alone so she put you with "+Answerday3box2[3]+". "+narrator3[n3]
            }else if (localStorage.getItem(questions3[3])== Answerday3box2[3]){
                n3++
                document.getElementById("q").innerHTML = narrator3[n3]
            }else{
                document.getElementById("q").innerHTML = narrator3[n3]
                n3++
            }
            n3++
        break;
        case 16:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[4])== Answerday3box1[4]){
                document.getElementById("q").innerHTML= narrator3[n3]
                order3++

            }else{
                n3++
                document.getElementById("q").innerHTML= narrator3[n3]
            }
            n3++
        break;
        case 18:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[5])== "No"){
                document.getElementById("q").innerHTML= narrator3[10]
            }else{
                document.getElementById("q").innerHTML= narrator3[n3]
            }
            n3++
        break;
    }
    console.log("before "+order3); 
    order3++
    console.log("after "+order3);
}
function getanswer3() {
    key3= document.getElementById("q").innerHTML;
    value3 = document.getElementById("ans33").innerHTML;
    localStorage.setItem(key3, value3)
    switch (order3) {
        case 3:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[0])=="Yes"){
                document.getElementById("q").innerHTML = questions3[qu3]
                document.getElementById("ans13").style.display = 'none';
                document.getElementById("ans23").style.display = 'none';
                document.getElementById("ans33").style.display = 'none';
                if(Answerday3box1[qu3] != ""){
                    document.getElementById("ans13").style.display = 'block';
                    document.getElementById("ans13").innerHTML = Answerday3box1[qu3];
                }
                if(Answerday3box2[qu3] != ""){
                    document.getElementById("ans23").style.display = 'block';
                    document.getElementById("ans23").innerHTML = Answerday3box2[qu3];
                }
                if(Answerday3box3[qu3] != ""){
                    document.getElementById("ans33").style.display = 'block';
                    document.getElementById("ans33").innerHTML = Answerday3box3[qu3];
                }
            qu3++
            }else{
                document.getElementById("q").innerHTML = narrator3[n3]
                n3++
                order3=7
                qu3 = 3
            }
        break;
        case 4:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[1])==Answerday3box1[1]){
                document.getElementById("q").innerHTML = "You explorde the city the whole day and came back to "+localStorage.getItem(questions[3]).toLowerCase()  
            }else if(localStorage.getItem(questions3[1])==Answerday3box2[1]){
                document.getElementById("q").innerHTML = "You went to a concert and came back to "+localStorage.getItem(questions[3]).toLowerCase()   
            }else{
                document.getElementById("q").innerHTML = "You went to the movies and came back to "+localStorage.getItem(questions[3]).toLowerCase()   
            }
        break;
        case 6:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[2])=="Lie"){
                document.getElementById("q").innerHTML = "The teacher doesnt fully trust you" 
            }else{
                document.getElementById("q").innerHTML = "The teacher is angry at you"
            }
        break;
        case 11:
            console.log(localStorage.getItem(questions3[3]));
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[3])== Answerday3box1[3]){
                n3++
                document.getElementById("q").innerHTML= "The teacher didnt allow you to work alone so she put you with "+Answerday3box2[3]+". "+narrator3[n3]
            }else if (localStorage.getItem(questions3[3])== Answerday3box2[3]){
                n3++
                document.getElementById("q").innerHTML = narrator3[n3]
            }else{
                document.getElementById("q").innerHTML = narrator3[n3]
                n3++
            }
            n3++
        break;
        case 16:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[4])== Answerday3box1[4]){
                document.getElementById("q").innerHTML= narrator3[n3]
                order3++

            }else{
                n3++
                document.getElementById("q").innerHTML= narrator3[n3]
            }
            n3++
        break;
        case 18:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[5])== "No"){
                document.getElementById("q").innerHTML= narrator3[10]
            }else{
                document.getElementById("q").innerHTML= narrator3[n3]
            }
            n3++
        break;
    }
    console.log("before "+order3); 
    order3++
    console.log("after "+order3);
}