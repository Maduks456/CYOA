      // questions that the player will answer
      const questions = [
        "What do you like?",
        "what do you do in your free time?",
        "Say 1 intesting fact about yourself.",
        "Where did I live?",
        "Should you tell about your day to your mom or dad?"
        ];
      const Answerbox1 = [
        "Running",
        "play games",
        "I know 4 diffrent languages",
        "Perents house",
        "Dad"
        ];
      const Answerbox2 = [
        "Anime",
        "Spend time with friends",
        "I have traveled to 2 diffrent countrys", 
        "School dorms",
        "Mom"
        ];
      const Answerbox3 = [
        "Animals especially cats",
        "Spend time coding",
        "I have learnd to drive a car",
        "",
        ""
        ];
      const Answerbox4 = [
        "Gambling",
        "sleep",
        "",
        "",
        ""
        ];
      // cool running,gambeling, spend time coding 
      // outcast anime, sleep
      //nutral Animals especially cats, spend time with friends, play games
      // narrator/ plAyer text
      const text1 = [
                    "Its the first day of school and you dont know where to go.", 
                    "You go in to the school and try to find your classroom.",
                    "You find yor classroom and sit down",
                    "Its the first day so everyone is talking about themselfs and its your turn", 
                    "The teacher asks you questions about you", 
                    "Oh thats intresting",
                    "Really?",
                    "After you spoke a classmate  came up to you and asked.",
                    "After the class you were going out of the school when a diffrent classmate came up to you",
                    "You went ouside and thought...",
                    "You went back to your ",
                    "Entering your room in the dorms you met you roommate, talked the whole evening and  went to sleep.",
                    "You told your   about your day and after went to bed."
                    ]
      // Students 1 text and answers
      const Student1 = [
        "Hey you like  do you want to be friends?",
         "Cool atlest i will have someone to talk to.",
         "Oh okey."
        ]
      const StuAnswerbox1 = ["Sure"]
      const StuAnswerbox2 = ["No sorry"]
// order of the  text/ questions

let order =1;
console.log(order);

// Text array number
let text = 1;
//Question array number
let qu= 0;
//Stundent Array number
let st = 0;
let change = 1;
//Combining string variables for questions/texts
let textStart;
let textEnd;
let word;

let St1question;
let St2question;
let Narratortext1;
let Narratortext2;
//LocalStorage key and value variable
let Key;
let Value;
function FrText(){
    switch (order) {
        case 1: case 2: case 3: case 4:  case 13: case 16:
            document.getElementById("q").innerHTML = text1[text];
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            text++
        break;
        case 5: case 7: case 9: case 17: 
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            document.getElementById("q").innerHTML = questions[qu];
                if(Answerbox1[qu] != ""){
                    document.getElementById("ans1").style.display = 'block';
                    document.getElementById("ans1").innerHTML = Answerbox1[qu];
                }
                if(Answerbox2[qu] != ""){
                    document.getElementById("ans2").style.display = 'block';
                    document.getElementById("ans2").innerHTML = Answerbox2[qu];
                }
                if(Answerbox3[qu] != ""){
                    document.getElementById("ans3").style.display = 'block';
                    document.getElementById("ans3").innerHTML = Answerbox3[qu];
                }
                if(Answerbox4[qu] != ""){ 
                    document.getElementById("ans4").style.display = 'block';
                    document.getElementById("ans4").innerHTML = Answerbox4[qu];
                }
            qu++
        break;
        case 11:
            textStart = Student1[st].slice(0,12);
            textEnd = Student1[st].slice(13,40);
            word = localStorage.getItem(questions[0]).toLowerCase();
            St1question= textStart + " "+word + textEnd
                document.getElementById("q").innerHTML = St1question;
                document.getElementById("ans1").style.display = 'block';
                document.getElementById("ans2").style.display = 'block';
                document.getElementById("ans1").innerHTML = StuAnswerbox1[st];
                document.getElementById("ans2").innerHTML = StuAnswerbox2[st];
            st++
        break;
        case 14:
            textStart = Student1[st].slice(0,12);
            textEnd = Student1[st].slice(13,40);
            word= localStorage.getItem(questions[1]).toLowerCase();
            St2question= textStart + " "+word + textEnd;
                document.getElementById("q").innerHTML = St2question;
                document.getElementById("ans1").style.display = 'block';
                document.getElementById("ans2").style.display = 'block';
                document.getElementById("ans1").innerHTML = StuAnswerbox1[st];
                document.getElementById("ans2").innerHTML = StuAnswerbox2[st];
            st++
        break;
        case 19:
            if (localStorage.getItem(questions[3])=="Perents house") {
                 document.getElementById("q").innerHTML = questions[qu];
                if(Answerbox1[qu] != ""){
                    document.getElementById("ans1").style.display = 'block';
                    document.getElementById("ans1").innerHTML = Answerbox1[qu];
                }
                if(Answerbox2[qu] != ""){
                    document.getElementById("ans2").style.display = 'block';
                    document.getElementById("ans2").innerHTML = Answerbox2[qu];
                }
                if(Answerbox3[qu] != ""){
                    document.getElementById("ans3").style.display = 'block';
                    document.getElementById("ans3").innerHTML = Answerbox3[qu];
                }
                if(Answerbox4[qu] != ""){ 
                    document.getElementById("ans4").style.display = 'block';
                    document.getElementById("ans4").innerHTML = Answerbox4[qu];
                }
                qu++
            }else{
                document.getElementById("q").innerHTML = text1[text];
                document.getElementById("ans1").style.display = 'none';
                document.getElementById("ans2").style.display = 'none';
                document.getElementById("ans3").style.display = 'none';
                document.getElementById("ans4").style.display = 'none';
                text= text+2; 
            }
        break;
        case 20:
            document.getElementById("days").style.display = 'block';
            document.getElementById("maintext").style.display = 'block';
            document.getElementById("button1").style.display = 'block';
            document.getElementById("button").style.display = 'flex';
            document.getElementById("end").style.display = 'flex';
            document.getElementById("next").style.display = 'none';
            document.getElementById("q"). innerHTML= "";
            document.getElementById("days"). innerHTML= "Day 1";
                document.getElementById("maintext").innerHTML = "You live in the school dorms, "
                //Friends
                if (localStorage.getItem(St1question)==StuAnswerbox1[0]&&localStorage.getItem(St2question)==StuAnswerbox1[0]) {
                    document.getElementById("maintext").innerHTML += "today you made 2 friends, " 
                }else if(localStorage.getItem(St1question)==StuAnswerbox1[0]||localStorage.getItem(St2question)==StuAnswerbox1[0]){
                    document.getElementById("maintext").innerHTML += "today you made 1 friend, "
                }
                //checks what you like
                if (localStorage.getItem(questions[0])==Answerbox1[0]) {
                    document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox1[0].toLowerCase()+", " 
                }else if(localStorage.getItem(questions[0])==Answerbox2[0]){
                    document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox2[0].toLowerCase()+", " 
                }else if (localStorage.getItem(questions[0])==Answerbox3[0]) {
                    document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox3[0].toLowerCase()+", " 
                }else {
                    document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox4[0].toLowerCase()+", " 
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
        break;
        case 21:
            document.getElementById("days").style.display = 'block';
            document.getElementById("maintext").style.display = 'block'; 
            document.getElementById("button1").style.display = 'block';
            document.getElementById("button").style.display = 'flex';
            document.getElementById("end").style.display = 'flex';
            document.getElementById("next").style.display = 'none';
            document.getElementById("q"). innerHTML= "";
            document.getElementById("days"). innerHTML= "Day 1";
                 if (localStorage.getItem(questions[3])=="Perents house") {
                    document.getElementById("maintext").innerHTML = "You live with your perents, "
                }
                if (localStorage.getItem(questions[3])=="Perents house") {
                    if (localStorage.getItem(questions[4])=="Dad") {
                        document.getElementById("maintext").innerHTML += "you told your dad about your first day, " 
                    }else{
                        document.getElementById("maintext").innerHTML += "you told your mom about your first day, " 
                    }
                }
                //Friends
                if (localStorage.getItem(St1question)==StuAnswerbox1[0]&&localStorage.getItem(St2question)==StuAnswerbox1[0]) {
                    document.getElementById("maintext").innerHTML += "you made 2 friends, " 
                }else if(localStorage.getItem(St1question)==StuAnswerbox1[0]||localStorage.getItem(St2question)==StuAnswerbox1[0]){
                    document.getElementById("maintext").innerHTML += "you made 1 friend, "
                }
                //checks what you like
                if (localStorage.getItem(questions[0])==Answerbox1[0]) {
                    document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox1[0].toLowerCase()+", " 
                }else if(localStorage.getItem(questions[0])==Answerbox2[0]){
                    document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox2[0].toLowerCase()+", " 
                }else if (localStorage.getItem(questions[0])==Answerbox3[0]) {
                    document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox3[0].toLowerCase()+", " 
                }else {
                    document.getElementById("maintext").innerHTML += "everyone in you class knows that you like "+Answerbox4[0].toLowerCase()+", " 
                }
                //checks what you d in yor free time
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
        break;
    }
    order++
}
function GetAnswer1(){
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans1").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 6: case 8: case 10:
            document.getElementById("q").innerHTML = text1[text];
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            text++
            break;
        case 12: case 15:
            if (localStorage.getItem(textStart + " "+word + textEnd)== "Sure"){
                document.getElementById("q").innerHTML = Student1[st];
                document.getElementById("ans1").style.display = 'none';
                document.getElementById("ans2").style.display = 'none';
            }else{
                st++
                document.getElementById("q").innerHTML = Student1[st];
                document.getElementById("ans1").style.display = 'none';
                document.getElementById("ans2").style.display = 'none';
            }
            st=0
        break;
        case 18: case 20:
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            switch (change) {
                case 1:
                    if (localStorage.getItem(questions[3])=="Perents house") {
                        textStart = text1[text];
                        word = localStorage.getItem(questions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }else{
                        textStart = text1[text].slice(0,22);
                        word = localStorage.getItem(questions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }
                    text++
                break;
                case 2:
                       text++
                        textStart = text1[text].slice(0,14);
                        textEnd = text1[text].slice(15,53);
                        word = localStorage.getItem(questions[4]).toLowerCase();
                        Narratortext2 = textStart+word+textEnd;
                            document.getElementById("q").innerHTML = Narratortext2;
                break;
            }
        change++
        break;
    }
    order++
}
function GetAnswer2(){
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans2").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 6: case 8: case 10:
            document.getElementById("q").innerHTML = text1[text];
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            text++
            break;
        case 12: case 15:
            if (localStorage.getItem(textStart + " "+word + textEnd)== "Sure"){
                document.getElementById("q").innerHTML = Student1[st];
                document.getElementById("ans1").style.display = 'none';
                document.getElementById("ans2").style.display = 'none';
                if (order<14) {
                    localStorage.setItem("is", St1question);
                }else{
                    localStorage.setItem("is2", St2question);    
                }
            }else{
                st++
                document.getElementById("q").innerHTML = Student1[st];
                document.getElementById("ans1").style.display = 'none';
                document.getElementById("ans2").style.display = 'none';
                if (order<14) {
                    localStorage.setItem("isnot", St1question);
                }else{
                    localStorage.setItem("isnot2", St2question);    
                }
            }
            st=0
        break;
        case 18: case 20:
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            switch (change) {
                case 1:
                    if (localStorage.getItem(questions[3])=="Perents house") {
                        textStart = text1[text];
                        word = localStorage.getItem(questions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }else{
                        textStart = text1[text].slice(0,22);
                        word = localStorage.getItem(questions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }
                    text++
                break;
                case 2:
                       text++
                        textStart = text1[text].slice(0,14);
                        textEnd = text1[text].slice(15,53);
                        word = localStorage.getItem(questions[4]).toLowerCase();
                        Narratortext2 = textStart+word+textEnd;
                            document.getElementById("q").innerHTML = Narratortext2;
                break;
            }
        change++
        break;
    }
    order++
}
function GetAnswer3(){
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans3").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 6: case 8: case 10:
            document.getElementById("q").innerHTML = text1[text];
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            text++
            break;
        case 12: case 15:
            if (localStorage.getItem(textStart + " "+word + textEnd)== "Sure"){
                document.getElementById("q").innerHTML = Student1[st];
                document.getElementById("ans1").style.display = 'none';
                document.getElementById("ans2").style.display = 'none';
                if (order<14) {
                    localStorage.setItem("is", St1question);
                }else{
                    localStorage.setItem("is2", St2question);    
                }
            }else{
                st++
                document.getElementById("q").innerHTML = Student1[st];
                document.getElementById("ans1").style.display = 'none';
                document.getElementById("ans2").style.display = 'none';
                if (order<14) {
                    localStorage.setItem("isnot", St1question);
                }else{
                    localStorage.setItem("isnot2", St2question);    
                }
            }
            st=0
        break;
        case 18: case 20:
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            switch (change) {
                case 1:
                    if (localStorage.getItem(questions[3])=="Perents house") {
                        textStart = text1[text];
                        word = localStorage.getItem(questions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }else{
                        textStart = text1[text].slice(0,22);
                        word = localStorage.getItem(questions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }
                    text++
                break;
                case 2:
                       text++
                        textStart = text1[text].slice(0,14);
                        textEnd = text1[text].slice(15,53);
                        word = localStorage.getItem(questions[4]).toLowerCase();
                        Narratortext2 = textStart+word+textEnd;
                            document.getElementById("q").innerHTML = Narratortext2;
                break;
            }
        change++
        break;
    }
    order++
}
function GetAnswer4(){
    Key= document.getElementById("q").innerHTML;
    Value = document.getElementById("ans4").innerHTML;
    localStorage.setItem(Key, Value)
    switch (order) {
        case 6: case 8: case 10:
            document.getElementById("q").innerHTML = text1[text];
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            text++
            break;
        case 12: case 15:
            if (localStorage.getItem(textStart + " "+word + textEnd)== "Sure"){
                document.getElementById("q").innerHTML = Student1[st];
                document.getElementById("ans1").style.display = 'none';
                document.getElementById("ans2").style.display = 'none';
                if (order<14) {
                    localStorage.setItem("is", St1question);
                }else{
                    localStorage.setItem("is2", St2question);    
                }
            }else{
                st++
                document.getElementById("q").innerHTML = Student1[st];
                document.getElementById("ans1").style.display = 'none';
                document.getElementById("ans2").style.display = 'none';
                if (order<14) {
                    localStorage.setItem("isnot", St1question);
                }else{
                    localStorage.setItem("isnot2", St2question);    
                }
            }
            st=0
        break;
        case 18: case 20:
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            switch (change) {
                case 1:
                    if (localStorage.getItem(questions[3])=="Perents house") {
                        textStart = text1[text];
                        word = localStorage.getItem(questions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }else{
                        textStart = text1[text].slice(0,22);
                        word = localStorage.getItem(questions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }
                    text++
                break;
                case 2:
                       text++
                        textStart = text1[text].slice(0,14);
                        textEnd = text1[text].slice(15,53);
                        word = localStorage.getItem(questions[4]).toLowerCase();
                        Narratortext2 = textStart+word+textEnd;
                            document.getElementById("q").innerHTML = Narratortext2;
                break;
            }
        change++
        break;
    }
    order++
}