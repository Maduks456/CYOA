let Depresion = depresion;
let order3 = 1;
const questions3 = [
    "Do you want to skip school?", 
    "He asks what should they do with there time",
    "Teacher called you and asked why werent you at school?"
];
const Answerday3box1 = [
    "Yea",
    "Explore the city",
    "Lie"
    
];
const Answerday3box2 = [
    "No",
    "Go to a concert",
    "Tell the truth"
];
const Answerday3box3 = [
    "",
    "Visit the movies",
    ""

];
let qu3 = 0;
const narrator3 = [
    "Before going into the school the crazy classmate came up to you and asked",
    "You walked into the school"

]
n3= 0;
let key3;
let value3;
function Next3() {
    switch (order3) {
        case 1:
            if(localStorage.getItem(questions2[3])== "Use your phone"){
                document.getElementById("q") = narrator3[n3]
            }else{
                n3++
                document.getElementById("q") = narrator3[n3]
                order3=order3+2
            }
            n3++
        break;
        case 2:
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
        case 5:
            if(localStorage.getItem(questions3[2])=="Lie"){
                document.getElementById("q") = "The teacher doesnt fully trust you" 
            }else{
                document.getElementById("q") = "The teacher is angry at you"
                Depresion=Depresion+1
            }
        break;
        case 6:
            document.getElementById("days").style.display = 'block';
            document.getElementById("maintext").style.display = 'block';
            document.getElementById("button3").style.display = 'block';
            document.getElementById("button").style.display = 'flex';
            document.getElementById("end").style.display = 'flex';
            document.getElementById("next2").style.display = 'none';
            document.getElementById("button2").style.display = 'none';
            document.getElementById("q"). innerHTML= "";
            document.getElementById("days"). innerHTML= "day 3";
            document.getElementById("maintext").innerHTML = "You skiped school and "+localStorage.getItem(questions3[1])+" and "+localStorage.getItem(questions3[2]);
        break;
    }
    order3++
}
function getanswer1() {
    key3= document.getElementById("q").innerHTML;
    value3 = document.getElementById("ans13").innerHTML;
    localStorage.setItem(key, value)
    switch (order3) {
        case 3:
            if(localStorage.getItem(questions3[0])=="Yea"){
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
                document.getElementById("q") = narrator3[n3]
                n3++
            }
        break;
        case 4:
            document.getElementById("ans13").style.display = 'none';
            document.getElementById("ans23").style.display = 'none';
            document.getElementById("ans33").style.display = 'none';
            if(localStorage.getItem(questions3[1])==Answerday3box1[1]){
                document.getElementById("q") = "You explorde the city the whole day and came back to "+localStorage.getItem(questions[3]).toLowerCase()  
            }else if(localStorage.getItem(questions3[1])==Answerday3box2[1]){
                document.getElementById("q") = "You went to a concert and came back to "+localStorage.getItem(questions[3]).toLowerCase()   
            }else{
                document.getElementById("q") = "You went to the movies and came back to "+localStorage.getItem(questions[3]).toLowerCase()   
            }
        break;
    }
    
}