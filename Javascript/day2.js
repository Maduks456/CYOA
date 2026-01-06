
//questions/answers
const questions2 =[ 
    "Whats 2x160x678?",
    "Its breakfast break what will you do?",
    "You saw 2 diffrent claassmates a tall one and a emo one. Which do you want to try to friend?",
    "What should you do?",
    "For the lunch break what should you do?",
    "should you listen to the safty rules?",
    "The teacher asked you how much you know about physics?",
    "Do you know the formula for gravity"
]
const answerday2box1 = [
    "Be funny and make a joke",
    "Get food",
    "Tall one",
    "Use your phone",
    "Eat",
    "Yes",
    "Alot",
    "I dont know that one"
    ];
const answerday2box2 = [
    "Be smart and say the answer",
    "Wait till next lesson",
    "Emo one",
    "Start drawing",
    "Wait in the dorms",
    "No",
    "Nothing",
    "Is it AxBxC"
    ];
const answerday2box3 = [
    "Be normal and give up",
    "Try to make a new friend",
    "",
    "",
    "Watch anime",
    "",
    "Everything",
    ""
    ];
// later its for making a friend
    let guess = Math.floor(Math.random() * 2)+1 ;
//narrator text and 
const narrator2 = [ 
    "When you entered the school you met your first friend and talked till the math lesson started", 
    "When you entered the school and went to your first class",
    "When you got next to the class you met your second friend talked and the math lesson started",
    "Your first lesson started and its maths",
    "The teacher was asking questions and picked you",
    "You made half of your class laughed",
    "Half of your class hates you",
    "Third of your class was laughing at you",
    "You ate food and after the next lesson started",
    "You sat next to the lessons class",
    "The next lesson is english",
    "The english lesson is boring",
    "You drew the whole lesson",
    "The teacher saw yor phone and yelled at you",
    "After class a crazy classmate said your his friend now",
    "The next lesson is physics",
    "The teacher is talking about safty rules in the physics classroom"
];

//variable for friend code doesnt brake
let checks = 0;
function Next2() {
    switch (order) {
        case 1: case 2:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if(localStorage.getItem(St1question)=="Sure" || localStorage.getItem(St2question)=="Sure" && checks==1){
                document.getElementById("q").innerHTML = narrator2[n];
                   if( checks==0){
                    order++
                    n=n+2
                   }
                   
            }else{
                if( checks==1){
                    order++
                   }
                n++
                document.getElementById("q").innerHTML = narrator2[n];
                checks++
            }
            n++
        break;
        case 3: case 4:case 10: case 11: case 12: case 15: case 18:  
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = narrator2[n];
            n++
        break;

        case 5: case 7: case 13: case 19:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = questions2[qu];
                if(answerday2box1[qu] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu];
                }
                if(answerday2box2[qu] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu];
                }
                if(answerday2box3[qu] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu];
                }
            qu++
        break;
        case 16:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = questions2[qu];
                if(answerday2box1[qu] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu];
                }
                if(localStorage.getItem(questions[3]) == "School dorms"){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu];
                }
                if(localStorage.getItem(questions[0]) == "Anime"){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu];
                }
            qu++
        break;
        case 23:
            EndScreen()
            document.getElementById("button2").style.display = 'block';
            document.getElementById("next2").style.display = 'none';
            document.getElementById("button1").style.display = 'none';
            document.getElementById("days"). innerHTML= "Day 2";
            // math answer
              if (localStorage.getItem(questions2[0])==answerday2box1[0]){
            document.getElementById("maintext").innerHTML = "Today you in math answered the question with a joke and half of the class knows your funny, " 
            }else if (localStorage.getItem(questions2[0])==answerday2box2[0]){
            document.getElementById("maintext").innerHTML = "Today you in math answered the question and half of the class hates you, " 
            }else if (localStorage.getItem(questions2[0])==answerday2box3[0]){
            document.getElementById("maintext").innerHTML = "Today you in math didnt answered the question and a third of the class was laughing at you, " 
            }
            if (localStorage.getItem(questions2[1])==answerday2box3[1]&&guess==2&&localStorage.getItem(questions2[3])==answerday2box1[3]) {
                document.getElementById("maintext").innerHTML += "you made 2 friends, " 
            }else if(localStorage.getItem(questions2[1])==answerday2box3[1]&&guess==2||localStorage.getItem(questions2[3])==answerday2box1[3]){
                document.getElementById("maintext").innerHTML += "you made 1 friend, "
            }
            if (localStorage.getItem(questions2[5])=="No"){
                document.getElementById("maintext").innerHTML += "you didnt listen to the safty rules, " 
            }else{
                document.getElementById("maintext").innerHTML += "you listened to the safty rules, " 
            }
        break;
    }
    switch (order) {
        case 7: case 16:
            document.getElementById('background').src='Photos/hall.png'
            document.getElementById('background').style.width ="1400px"
            document.getElementById('background').style.height ="580px"
        break;
        case 1: case 11: case 18:
            document.getElementById('background').src='Photos/hall_wall.png'
            document.getElementById('background').style.width ="1400px"
            document.getElementById('background').style.height ="580px"
        break;
        case 3: case 12: case 19:
            document.getElementById('background').src='Photos/class.png'
            document.getElementById('background').style.width ="1200px"
            document.getElementById('background').style.height ="600px"
        break;
    }
    order++
}
function getAnswer1() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans12").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 8:
            if (localStorage.getItem(questions2[1])==answerday2box2[1]) {
                document.getElementById('background').src='Photos/hall_wall.png'
                document.getElementById('background').style.width ="1400px"
                document.getElementById('background').style.height ="580px"
            }else if (localStorage.getItem(questions2[1])==answerday2box3[1]) {
                document.getElementById('background').src='Photos/hall.png'
                document.getElementById('background').style.width ="1400px"
                document.getElementById('background').style.height ="580px"
            }else{
                document.getElementById('background').src='Photos/wont.png'
                document.getElementById('background').style.width ="1300px"
                document.getElementById('background').style.height ="560px"
            } 
        break;
        case 17:
            document.getElementById('background').src='Photos/hall_wall.png'
            document.getElementById('background').style.width ="1400px"
            document.getElementById('background').style.height ="580px"
        break;
        case 22:
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
    switch (order) {
        case 6:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = narrator2[n];
            n=n+2
            n++
        break;
        case 8:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = narrator2[n];
            n=n+1
            order=order+2;
            qu++
            n++
        break;
        case 9:
            order++
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions[0])== "Anime" ){
                document.getElementById("q").innerHTML = "Im not gonna be your friend anime weeb";
            }else if(guess == 1) {
                document.getElementById("q").innerHTML = "Im not gonna be your friend";
            }else{
                document.getElementById("q").innerHTML = "Im gonna be your friend";
            }
            n++
        break;
        case 14:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            n++
            document.getElementById("q").innerHTML = narrator2[n];
            n++
        break;
        case 17:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = narrator2[n];
            n++
        break;
        case 20:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = questions2[qu];
                if(answerday2box1[qu] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu];
                }
                if(answerday2box2[qu] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu];
                }
                if(answerday2box3[qu] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu];
                }
            qu++
        break;
        case 21:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = questions2[qu];
            if(answerday2box1[qu] != ""){
                document.getElementById("ans12").style.display = 'block';
                document.getElementById("ans12").innerHTML = answerday2box1[qu];
            }
            if(answerday2box2[qu] != ""){
                document.getElementById("ans22").style.display = 'block';
                document.getElementById("ans22").innerHTML = answerday2box2[qu];
            }
            if(answerday2box3[qu] != ""){
                document.getElementById("ans32").style.display = 'block';
                document.getElementById("ans32").innerHTML = answerday2box3[qu];
            }
            qu++
        break;
        case 22:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions[3])=="School dorms"){
                document.getElementById("q").innerHTML = "you went to the dorms";
            }else{
                document.getElementById("q").innerHTML = "You went to your perents house";
            }
        break;
    }
    order++
}
function getAnswer2() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans22").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 8:
            if (localStorage.getItem(questions2[1])==answerday2box2[1]) {
                document.getElementById('background').src='Photos/hall_wall.png'
                document.getElementById('background').style.width ="1400px"
                document.getElementById('background').style.height ="580px"
            }else if (localStorage.getItem(questions2[1])==answerday2box3[1]) {
                document.getElementById('background').src='Photos/hall.png'
                document.getElementById('background').style.width ="1400px"
                document.getElementById('background').style.height ="580px"
            }else{
                document.getElementById('background').src='Photos/wont.png'
                document.getElementById('background').style.width ="1300px"
                document.getElementById('background').style.height ="560px"
            } 
        break;
        case 17:
            document.getElementById('background').src='Photos/hall_wall.png'
            document.getElementById('background').style.width ="1400px"
            document.getElementById('background').style.height ="580px"
        break;
        case 22:
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
    switch (order) {
        case 6:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            n++;
            document.getElementById("q").innerHTML = narrator2[n];
            n=n+2
        break;
        case 8:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            n++;
            document.getElementById("q").innerHTML = narrator2[n];
            order=order+2;
            qu++
            n++
        break;
        case 9:
            order++
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions[0])== "Anime" ){
                document.getElementById("q").innerHTML = "Im not gonna be your friend anime weeb";
            }else if(guess == 1) {
                document.getElementById("q").innerHTML = "Im not gonna be your friend";
            }else{
                document.getElementById("q").innerHTML = "Im gonna be your friend";
            }
            n++
        break;
        case 14:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = narrator2[n]
            n=n+2
            order++
            n++
        break;
        case 17:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = narrator2[n];
            n++
        break;
        case 20:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = questions2[qu];
                if(answerday2box1[qu] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu];
                }
                if(answerday2box2[qu] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu];
                }
                if(answerday2box3[qu] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu];
                }
            qu++
        break;
        case 21:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions[3])=="School dorms"){
                document.getElementById("q").innerHTML = "you went to the dorms";
            }else{
                document.getElementById("q").innerHTML = "You went to your perents home";
            }
            order++
        break;
        case 22:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions[3])=="School dorms"){
                document.getElementById("q").innerHTML = "you went to the dorms";
            }else{
                document.getElementById("q").innerHTML = "You went to your perents home";
            }
        break;
    }
    switch (order) {
        case 22:
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
    order++
}
function getAnswer3() {
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans32").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 8:
            if (localStorage.getItem(questions2[1])==answerday2box2[1]) {
                document.getElementById('background').src='Photos/hall_wall.png'
                document.getElementById('background').style.width ="1400px"
                document.getElementById('background').style.height ="580px"
            }else if (localStorage.getItem(questions2[1])==answerday2box3[1]) {
                document.getElementById('background').src='Photos/hall.png'
                document.getElementById('background').style.width ="1400px"
                document.getElementById('background').style.height ="580px"
            }else{
                document.getElementById('background').src='Photos/wont.png'
                document.getElementById('background').style.width ="1300px"
                document.getElementById('background').style.height ="560px"
            } 
        break;
        case 17:
            document.getElementById('background').src='Photos/hall_wall.png'
            document.getElementById('background').style.width ="1400px"
            document.getElementById('background').style.height ="580px"
        break;
    }
    switch (order) {
        case 6:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
                n=n+2;
                document.getElementById("q").innerHTML = narrator2[n];
            n++
        break;
        case 8:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = questions2[qu];
            if(answerday2box1[qu] != ""){
                document.getElementById("ans12").style.display = 'block';
                document.getElementById("ans12").innerHTML = answerday2box1[qu];
            }
            if(answerday2box2[qu] != ""){
                document.getElementById("ans22").style.display = 'block';
                document.getElementById("ans22").innerHTML = answerday2box2[qu];
            }
            if(answerday2box3[qu] != ""){
                document.getElementById("ans32").style.display = 'block';
                document.getElementById("ans32").innerHTML = answerday2box3[qu];
            }
            qu++
            n++
        break;
        case 17:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = narrator2[n];
            n++
        break;
        case 21:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = questions2[qu];
            if(answerday2box1[qu] != ""){
                document.getElementById("ans12").style.display = 'block';
                document.getElementById("ans12").innerHTML = answerday2box1[qu];
            }
            if(answerday2box2[qu] != ""){
                document.getElementById("ans22").style.display = 'block';
                document.getElementById("ans22").innerHTML = answerday2box2[qu];
            }
            if(answerday2box3[qu] != ""){
                document.getElementById("ans32").style.display = 'block';
                document.getElementById("ans32").innerHTML = answerday2box3[qu];
            }
            qu++
        break;
    }
    order++
}