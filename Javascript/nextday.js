
localStorage.clear();
function Show() {
        document.getElementById("days").style.display = 'none';
        document.getElementById("maintext").style.display = 'none';
        document.getElementById("button").style.display = 'none';
        document.getElementById("end").style.display = 'none';
        document.getElementById("background").style.display = 'block';
        document.getElementById("background").src='Photos/out2.png'
        document.getElementById('background').style.width ="1400px"
        document.getElementById('background').style.height ="630px"
}
function ToDay2(){
    document.getElementById("q").innerHTML ="You went to school from your "+localStorage.getItem(questions[3]).toLowerCase();;
    document.getElementById("next2").style.display = 'block';
    Show()
}
function ToDay3() {
    document.getElementById("q").innerHTML ="You went to school from your "+localStorage.getItem(questions[3]).toLowerCase();;
    document.getElementById("next3").style.display = 'block';
    Show()
}
function ToDay4() {
    document.getElementById("q").innerHTML ="You went to school from your "+localStorage.getItem(questions[3]).toLowerCase();;
    document.getElementById("next4").style.display = 'block';
    Show()
}
function ToDay5() {
    document.getElementById("q").innerHTML ="You went to school from your "+localStorage.getItem(questions[3]).toLowerCase();;
    document.getElementById("next5").style.display = 'block';
    Show()
}
function OverView() {
    document.getElementById("button5").style.display = 'none';
    // Cheks were you live and witch parent you told your day
    document.getElementById("days"). innerHTML= "Overview";
    if (localStorage.getItem(questions[3])=="Perents house") {
        document.getElementById("maintext").innerHTML = "You live with your perents, "
    }else{
        document.getElementById("maintext").innerHTML = "You live in the school dorms, "
    }
    if (localStorage.getItem(questions[3])=="Perents house") {
        if (localStorage.getItem(questions[4])=="Dad") {
           document.getElementById("maintext").innerHTML += "you told your dad about your first day, " 
        }else{
            document.getElementById("maintext").innerHTML += "you told your mom about your first day, " 
        }
    }
    //cheks what you like
    if (localStorage.getItem(questions[0])==Answerbox1[0]) {
        document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox1[0].toLowerCase()+", " 
    }else if(localStorage.getItem(questions[0])==Answerbox2[0]){
        document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox2[0].toLowerCase()+", " 
    }else if (localStorage.getItem(questions[0])==Answerbox3[0]) {
        document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox3[0].toLowerCase()+", " 
    }else {
        document.getElementById("maintext").innerHTML += "everyone in you class knows that you like"+Answerbox4[0].toLowerCase()+", " 
    }
    //checks what you do in yor free time
    if (localStorage.getItem(questions[1])==Answerbox1[1]) {
        document.getElementById("maintext").innerHTML += "in your free time you "+Answerbox1[1].toLowerCase()+" and " 
    }else if(localStorage.getItem(questions[1])==Answerbox2[1]){
        document.getElementById("maintext").innerHTML += "in your free time you "+Answerbox2[1].toLowerCase()+" and " 
    }else if (localStorage.getItem(questions[1])==Answerbox3[1]) {
        document.getElementById("maintext").innerHTML += "in your free time you "+Answerbox3[1].toLowerCase()+" and " 
    }else {
        document.getElementById("maintext").innerHTML += "in your free time you "+Answerbox4[1].toLowerCase()+" and " 
    }
    // checks your intresting fact
    if (localStorage.getItem(questions[2])==Answerbox1[2]) {
        document.getElementById("maintext").innerHTML += "that you know 4 diffrent languages." 
    }else if(localStorage.getItem(questions[2])==Answerbox2[2]){
        document.getElementById("maintext").innerHTML += "that you have traveled to 2 diffrent countrys."
    }else{
        document.getElementById("maintext").innerHTML += "that you have learnd to drive a car."
    }
    //cheks how many friends you have
    if (localStorage.getItem(St1question)=="Sure" && localStorage.getItem(St2question)=="Sure" && localStorage.getItem(questions2[1])=="Try to make a new friend" && guess==2 && localStorage.getItem(questions2[3])=="Use your phone" ) {
        document.getElementById("maintext").innerHTML += "you made 4 friends at school, " 
    }else if( localStorage.getItem(St1question)=="Sure" && localStorage.getItem(St2question)=="Sure" && localStorage.getItem(questions2[1])=="Try to make a new friend" && guess==2 || 
    localStorage.getItem(St1question)=="Sure" && localStorage.getItem(St2question)=="Sure" && localStorage.getItem(questions2[3])=="Use your phone" || 
    localStorage.getItem(St1question)=="Sure" && localStorage.getItem(questions2[1])=="Try to make a new friend" && guess==2 && localStorage.getItem(questions2[3])=="Use your phone" ||
    localStorage.getItem(St2question)=="Sure" && localStorage.getItem(questions2[1])=="Try to make a new friend" && guess==2 && localStorage.getItem(questions2[3])=="Use your phone" ) {

        document.getElementById("maintext").innerHTML += "you made 3 friends at school, " 
    }else if(localStorage.getItem(St1question)=="Sure" && localStorage.getItem(St2question)=="Sure" || 
    localStorage.getItem(St1question)=="Sure" && localStorage.getItem(questions2[1])=="Try to make a new friend" && guess==2 ||
    localStorage.getItem(St1question)=="Sure" && localStorage.getItem(questions2[3])=="Use your phone" ||
    localStorage.getItem(St2question)=="Sure" && localStorage.getItem(questions2[1])=="Try to make a new friend" && guess==2 ||
    localStorage.getItem(St2question)=="Sure" && localStorage.getItem(questions2[3])=="Use your phone" ||
    localStorage.getItem(questions2[1])=="Try to make a new friend" && guess==2 && localStorage.getItem(questions2[3])=="Use your phone" ){

        document.getElementById("maintext").innerHTML += "you made 2 friends at school, " 
    }else if(localStorage.getItem(St1question)=="Sure" || localStorage.getItem(St2question)=="Sure" || localStorage.getItem(questions2[1])=="Try to make a new friend" && guess==2 || localStorage.getItem(questions2[3])=="Use your phone" ){
            document.getElementById("maintext").innerHTML += "you made 1 friends at school, " 
    }
    // checks the your status in class
    if (localStorage.getItem(questions2[0])=="Be funny and make a joke"){
        document.getElementById("maintext").innerHTML += "half of the class like your jokes, " 
    }else  if (localStorage.getItem(questions2[0])=="Be smart and say the answer"){
        document.getElementById("maintext").innerHTML += "half of the class hates you, " 
    }else  if (localStorage.getItem(questions2[0])=="Be normal and give up"){
        document.getElementById("maintext").innerHTML += "you feal like your an idiot, " 
    }
    //checks if you skiped school
    if (localStorage.getItem(questions3[0])=="Yes"){
        document.getElementById("maintext").innerHTML += "your teacher was mad because you werent at school, " 
    }
    //checks if you listened to the safty rules/ if you got burnt in physics
    if (localStorage.getItem(questions2[5])=="No"){
            document.getElementById("maintext").innerHTML += "you scorched your hand in physics, " 
    }
     if (localStorage.getItem(questions[3])=="School dorms") {
        if (localStorage.getItem(questions5[5])=="Go home"){
            document.getElementById("maintext").innerHTML += "at the end of the week you went back home." 
        }else{
            document.getElementById("maintext").innerHTML += "at the end of the week you stayed at the dorms." 
        }
    }
}
function EndScreen() {
    document.getElementById("days").style.display = 'block';//
    document.getElementById("maintext").style.display = 'block';//
    document.getElementById("button").style.display = 'flex';//
    document.getElementById("end").style.display = 'flex';//
    document.getElementById("background").style.display = 'none';//
    document.getElementById("q"). innerHTML= "";//
}