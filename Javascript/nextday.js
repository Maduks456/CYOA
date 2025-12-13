
    localStorage.clear();
    function ToDay2(){
    document.getElementById("q").innerHTML ="You went to school from your "+localStorage.getItem(questions[3]).toLowerCase();;
    document.getElementById("next2").style.display = 'block';
    document.getElementById("days").style.display = 'none';
    document.getElementById("maintext").style.display = 'none';
    document.getElementById("button").style.display = 'none';
    document.getElementById("end").style.display = 'none';
}
function ToDay3() {
    document.getElementById("q").innerHTML ="You went to school from your "+localStorage.getItem(questions[3]).toLowerCase();;
    document.getElementById("next3").style.display = 'block';
    document.getElementById("days").style.display = 'none';
    document.getElementById("maintext").style.display = 'none';
    document.getElementById("button").style.display = 'none';
    document.getElementById("end").style.display = 'none';
}
function ToDay4() {
    document.getElementById("q").innerHTML ="You went to school from your "+localStorage.getItem(questions[3]).toLowerCase();;
    document.getElementById("next4").style.display = 'block';
    document.getElementById("days").style.display = 'none';
    document.getElementById("maintext").style.display = 'none';
    document.getElementById("button").style.display = 'none';
    document.getElementById("end").style.display = 'none';
}
function ToDay5() {
    document.getElementById("q").innerHTML ="You went to school from your "+localStorage.getItem(questions[3]).toLowerCase();;
    document.getElementById("next5").style.display = 'block';
    document.getElementById("days").style.display = 'none';
    document.getElementById("maintext").style.display = 'none';
    document.getElementById("button").style.display = 'none';
    document.getElementById("end").style.display = 'none';
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
            document.getElementById("maintext").innerHTML += "you scorched your hand in physics," 
    }
     if (localStorage.getItem(questions[3])=="School dorms") {
        if (localStorage.getItem(questions5[5])=="Go home"){
            document.getElementById("maintext").innerHTML += "at the end of the week you went back home." 
        }else{
            document.getElementById("maintext").innerHTML += "at the end of the week you stayed at the dorms." 
        }
    }
}

