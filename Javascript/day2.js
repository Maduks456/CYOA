
//questions/answers and variable for it
const questions2 =[ 
    "Whats 2x160x678?",
    "Its breakfast break what will you do?",
    "You saw 2 diffrent claassmates a tall one and  a emo one. Which do you want to try to friend?",
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

    qu2=0;
// later its for making a friend
    let guess = Math.floor(Math.random() * 2)+1 ;
    console.log("guess is "+guess);
    
//narrator text and array variable
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
n=0
//order variable
order2=1;
console.log(order2);

//  Variables to save data to local storage
let key;
let value;
let checks = 0;
function Next2() {
    switch (order2) {
        case 1: case 2:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if(localStorage.getItem(St1question)=="Sure" || localStorage.getItem(St2question)=="Sure" && checks==1){
                document.getElementById("q").innerHTML = narrator2[n];
                   if( checks==0){
                    order2++
                    n=n+2
                   }
                   
            }else{
                if( checks==1){
                    order2++
                   }
                n++
                document.getElementById("q").innerHTML = narrator2[n];
                checks++

                
            }
            n++
        break;
        case 3: case 4:case 10: case 11: case 12:case 15:case 18:  
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
            document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(answerday2box2[qu2] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(answerday2box3[qu2] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
            qu2++
            console.log(n);
            
        break;
        case 16:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(localStorage.getItem(questions[3]) == "School dorms"){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(localStorage.getItem(questions[0]) == "Anime"){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
            qu2++
        break;
        case 23:

            document.getElementById("days").style.display = 'block';
            document.getElementById("maintext").style.display = 'block';
            document.getElementById("button2").style.display = 'block';
            document.getElementById("button").style.display = 'flex';
            document.getElementById("end").style.display = 'flex';
            document.getElementById("next2").style.display = 'none';
            document.getElementById("button1").style.display = 'none';
            document.getElementById("q"). innerHTML= "";
            document.getElementById("days"). innerHTML= "day 2";
            // mmath answer
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
    order2++
}
function getAnswer1() {
    key= document.getElementById("q").innerHTML;
    value = document.getElementById("ans12").innerHTML;
    localStorage.setItem(key, value)
    switch (order2) {
        case 6:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions2[0])== answerday2box1[0]) {
                document.getElementById("q").innerHTML = narrator2[n];
                n=n+2
            }else if (localStorage.getItem(questions2[0])== answerday2box2[0]) {
                n++;
                document.getElementById("q").innerHTML = narrator2[n];
                n++
            } else {
                n=n+2;
                document.getElementById("q").innerHTML = narrator2[n];
            }
            n++
        break;
        case 8:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions2[1])== answerday2box1[1]) {
                document.getElementById("q").innerHTML = narrator2[n];
                n=n+1
                order2=order2+2;
            }else if (localStorage.getItem(questions2[1])== answerday2box2[1]) {
                n++;
                document.getElementById("q").innerHTML = narrator2[n];
                order2=order2+2;
            } else {
                document.getElementById("ans12").style.display = 'none';
                document.getElementById("ans22").style.display = 'none';
                document.getElementById("ans32").style.display = 'none';
                document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(answerday2box2[qu2] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(answerday2box3[qu2] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
                
            }
            qu2++
            n++
        break;
        case 9:
            console.log("order is "+order2);
            order2++
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
  
            console.log(order2);
            
            n++
        break;
        case 14:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if(localStorage.getItem(questions2[3]) == answerday2box2[3]){
                document.getElementById("q").innerHTML = narrator2[n]
                n=n+2
                order2++
            }else{
                n++
                document.getElementById("q").innerHTML = narrator2[n];
            }
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
            document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(answerday2box2[qu2] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(answerday2box3[qu2] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
            qu2++
        break;
        case 21:
            if(localStorage.getItem(questions2[6])==answerday2box1[6]||localStorage.getItem(questions2[6])==answerday2box3[6]){
                document.getElementById("ans12").style.display = 'none';
                document.getElementById("ans22").style.display = 'none';
                document.getElementById("ans32").style.display = 'none';
                document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(answerday2box2[qu2] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(answerday2box3[qu2] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
            qu2++
            }else{
                document.getElementById("ans12").style.display = 'none';
                document.getElementById("ans22").style.display = 'none';
                document.getElementById("ans32").style.display = 'none';
                if (localStorage.getItem(questions[3])=="School dorms"){
                    document.getElementById("q").innerHTML = "you went to the dorms";
                }else{
                document.getElementById("q").innerHTML = "You went to your perents home";
                }
                order2++
            }
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
    order2++
}
function getAnswer2() {
    key= document.getElementById("q").innerHTML;
    value = document.getElementById("ans22").innerHTML;
    localStorage.setItem(key, value)
    switch (order2) {
        case 6:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions2[0])== answerday2box1[0]) {
                document.getElementById("q").innerHTML = narrator2[n];
                n=n+2
            }else if (localStorage.getItem(questions2[0])== answerday2box2[0]) {
                n++;
                document.getElementById("q").innerHTML = narrator2[n];
                n++
            } else {
                n=n+2;
                document.getElementById("q").innerHTML = narrator2[n];
            }
            n++
        break;
        case 8:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions2[1])== answerday2box1[1]) {
                document.getElementById("q").innerHTML = narrator2[n];
                n=n+1
                order2=order2+2;
            }else if (localStorage.getItem(questions2[1])== answerday2box2[1]) {
                n++;
                document.getElementById("q").innerHTML = narrator2[n];
                order2=order2+2;
            } else {
                document.getElementById("ans12").style.display = 'none';
                document.getElementById("ans22").style.display = 'none';
                document.getElementById("ans32").style.display = 'none';
                document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(answerday2box2[qu2] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(answerday2box3[qu2] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
            }
            qu2++
            n++
        break;
        case 9:
            order2++
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
            if(localStorage.getItem(questions2[3]) == answerday2box2[3]){
                document.getElementById("q").innerHTML = narrator2[n]
                n=n+2
                order2++
            }else{
                n++
                document.getElementById("q").innerHTML = narrator2[n];
            }
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
            document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(answerday2box2[qu2] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(answerday2box3[qu2] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
            qu2++
        break;
        case 21:
            if(localStorage.getItem(questions2[6])==answerday2box1[6]||localStorage.getItem(questions2[6])==answerday2box3[6]){
                document.getElementById("ans12").style.display = 'none';
                document.getElementById("ans22").style.display = 'none';
                document.getElementById("ans32").style.display = 'none';
                document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(answerday2box2[qu2] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(answerday2box3[qu2] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
            qu2++
            }else{
                document.getElementById("ans12").style.display = 'none';
                document.getElementById("ans22").style.display = 'none';
                document.getElementById("ans32").style.display = 'none';
                if (localStorage.getItem(questions[3])=="School dorms"){
                    document.getElementById("q").innerHTML = "you went to the dorms";
                }else{
                document.getElementById("q").innerHTML = "You went to your perents home";
                }
                order2++
            }
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
    order2++
}
function getAnswer3() {
    key= document.getElementById("q").innerHTML;
    value = document.getElementById("ans32").innerHTML;
    localStorage.setItem(key, value)
    switch (order2) {
        case 6:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions2[0])== answerday2box1[0]) {
                document.getElementById("q").innerHTML = narrator2[n];
                n=n+2
            }else if (localStorage.getItem(questions2[0])== answerday2box2[0]) {
                n++;
                document.getElementById("q").innerHTML = narrator2[n];
                n++
            } else {
                n=n+2;
                document.getElementById("q").innerHTML = narrator2[n];
            }
            n++
        break;
        case 8:
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if (localStorage.getItem(questions2[1])== answerday2box1[1]) {
                document.getElementById("q").innerHTML = narrator2[n];
                n=n+1
                order2=order2+2;
            }else if (localStorage.getItem(questions2[1])== answerday2box2[1]) {
                n++;
                document.getElementById("q").innerHTML = narrator2[n];
                order2=order2+2;
            } else {
                document.getElementById("ans12").style.display = 'none';
                document.getElementById("ans22").style.display = 'none';
                document.getElementById("ans32").style.display = 'none';
                document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(answerday2box2[qu2] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(answerday2box3[qu2] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
            }
            qu2++
            n++
        break;
        case 9:
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
        break;
        case 14:
         
            document.getElementById("ans12").style.display = 'none';
            document.getElementById("ans22").style.display = 'none';
            document.getElementById("ans32").style.display = 'none';
            if(localStorage.getItem(questions2[3]) == answerday2box2[3]){
                document.getElementById("q").innerHTML = narrator2[n]
                n=n+2
                order2++
            }else{
                n++
                document.getElementById("q").innerHTML = narrator2[n];
            }
            console.log("n is: "+n);
            n++
            console.log("n after: "+n);
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
            document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(answerday2box2[qu2] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(answerday2box3[qu2] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
            qu2++
        break;
        case 21:
            if(localStorage.getItem(questions2[6])==answerday2box1[6]||localStorage.getItem(questions2[6])==answerday2box3[6]){
                document.getElementById("ans12").style.display = 'none';
                document.getElementById("ans22").style.display = 'none';
                document.getElementById("ans32").style.display = 'none';
                document.getElementById("q").innerHTML = questions2[qu2];
                if(answerday2box1[qu2] != ""){
                    document.getElementById("ans12").style.display = 'block';
                    document.getElementById("ans12").innerHTML = answerday2box1[qu2];
                }
                if(answerday2box2[qu2] != ""){
                    document.getElementById("ans22").style.display = 'block';
                    document.getElementById("ans22").innerHTML = answerday2box2[qu2];
                }
                if(answerday2box3[qu2] != ""){
                    document.getElementById("ans32").style.display = 'block';
                    document.getElementById("ans32").innerHTML = answerday2box3[qu2];
                }
            qu2++
            }else{
                document.getElementById("ans12").style.display = 'none';
                document.getElementById("ans22").style.display = 'none';
                document.getElementById("ans32").style.display = 'none';
                if (localStorage.getItem(questions[3])=="School dorms"){
                    document.getElementById("q").innerHTML = "you went to the dorms";
                }else{
                document.getElementById("q").innerHTML = "You went to your perents home";
                }
            }
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
    order2++
}