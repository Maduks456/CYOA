      // questions that the player will answer
      const questions = ["What do you like?", "what do you do in your free time?", "Say 1 intesting fact about yourself.", "Where did I live?", "Should you tell about your day to your mom or dad?"];
      const Answerbox1 = ["Running","play games", "I know 4 diffrent languages","Perents house","Dad"];
      const Answerbox2 = ["Anime", "Spend time with friends", "I have traveled to 2 diffrent countrys", "School dorms", "Mom"];
      const Answerbox3 = ["Animals especially cats", "Spend time coding", "I have learnd to drive a car", "", ""];
      const Answerbox4 = ["Gambling", "sleep", "", "",""];
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
                    "you went back to your ",
                    "Entering your room in the doorms you met you roommate, talked the whole evening and  went to sleep.",
                    "You told your   about your day and after went to bed."
                    ]
      // Students 1 text and answers
      const Student1 = ["Hey you like  do you want to be friends?", "Cool atlest i will have someone to talk to.", "Oh okey."]
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
            if (localStorage.getItem(St1question)=="Sure" && localStorage.getItem(St2question)=="Sure"){
                if (localStorage.getItem(questions[3])=="Dad") {
                    if(localStorage.getItem(questions[2])=="I know 4 diffrent languages"){
                        document.getElementById("maintext").innerHTML = "Today you got 2 new friends, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you know 4 languages. When you got home you told your dad about your day.";
                    }else if (localStorage.getItem(questions[2])=="I have traveled to 2 diffrent countrys") {
                        document.getElementById("maintext").innerHTML = "Today you got 2 new friends, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have been to 2 diffrent contries. When you got home you told your dad about your day."; 
                    } else {
                        document.getElementById("maintext").innerHTML = "Today you got 2 new friends, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have learnd to drive a car. When you got home you told your dad about your day.";
                    }    
                }else{
                    if(localStorage.getItem(questions[2])=="I know 4 diffrent languages"){
                        document.getElementById("maintext").innerHTML = "Today you got 2 new friends, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you know 4 languages. When you got home you told your mom about your day.";
                    }else if (localStorage.getItem(questions[2])=="I have traveled to 2 diffrent countrys") {
                        document.getElementById("maintext").innerHTML = "Today you got 2 new friends, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have been to 2 diffrent contries. When you got home you told your mom about your day."; 
                    } else {
                        document.getElementById("maintext").innerHTML = "Today you got 2 new friends, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have learnd to drive a car. When you got home you told your mom about your day.";
                    } 
                }
            }else if (localStorage.getItem(St1question)=="Sure" || localStorage.getItem(St2question)=="Sure") {
                if (localStorage.getItem(questions[3])=="Dad") {
                    if(localStorage.getItem(questions[2])=="I know 4 diffrent languages"){
                        document.getElementById("maintext").innerHTML = "Today you got 1 new friend, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you know 4 languages. When you got home you told your dad about your day.";
                    }else if (localStorage.getItem(questions[2])=="I have traveled to 2 diffrent countrys") {
                        document.getElementById("maintext").innerHTML = "Today you got 1 new friend, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have been to 2 diffrent contries. When you got home you told your dad about your day."; 
                    } else {
                        document.getElementById("maintext").innerHTML = "Today you got 1 new friend, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have learnd to drive a car. When you got home you told your dad about your day.";
                    }    
                }else{
                    if(localStorage.getItem(questions[2])=="I know 4 diffrent languages"){
                        document.getElementById("maintext").innerHTML = "Today you got 1 new friend, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you know 4 languages. When you got home you told your mom about your day.";
                    }else if (localStorage.getItem(questions[2])=="I have traveled to 2 diffrent countrys") {
                        document.getElementById("maintext").innerHTML = "Today you got 1 new friend, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have been to 2 diffrent contries. When you got home you told your mom about your day."; 
                    } else {
                        document.getElementById("maintext").innerHTML = "Today you got 1 new friend, you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have learnd to drive a car. When you got home you told your mom about your day.";
                    } 
                }
            } else {
                if (localStorage.getItem(questions[3])=="Dad") {
                    if(localStorage.getItem(questions[2])=="I know 4 diffrent languages"){
                        document.getElementById("maintext").innerHTML = "Today  you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you know 4 languages. When you got home you told your dad about your day.";
                    }else if (localStorage.getItem(questions[2])=="I have traveled to 2 diffrent countrys") {
                        document.getElementById("maintext").innerHTML = "Today you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have been to 2 diffrent contries. When you got home you told your dad about your day."; 
                    } else {
                        document.getElementById("maintext").innerHTML = "Today you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have learnd to drive a car. When you got home you told your dad about your day.";
                    }    
                }else{
                    if(localStorage.getItem(questions[2])=="I know 4 diffrent languages"){
                        document.getElementById("maintext").innerHTML = "Today you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you know 4 languages. When you got home you told your mom about your day.";
                    }else if (localStorage.getItem(questions[2])=="I have traveled to 2 diffrent countrys") {
                        document.getElementById("maintext").innerHTML = "Today you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have been to 2 diffrent contries. When you got home you told your mom about your day."; 
                    } else {
                        document.getElementById("maintext").innerHTML = "Today you live with your perents, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have learnd to drive a car. When you got home you told your mom about your day.";
                    } 
                }
            }
        case 21:
            document.getElementById("days").style.display = 'block';
            document.getElementById("maintext").style.display = 'block';
            document.getElementById("button1").style.display = 'block';
            document.getElementById("button").style.display = 'flex';
            document.getElementById("end").style.display = 'flex';
            document.getElementById("next").style.display = 'none';
            document.getElementById("q"). innerHTML= "";
            document.getElementById("days"). innerHTML= "Day 1";
              if (localStorage.getItem(St1question)=="Sure"&&localStorage.getItem(St2question)=="Sure"){
                if(localStorage.getItem(questions[2])=="I know 4 diffrent languages"){
                    document.getElementById("maintext").innerHTML = "Today you got 2 new friends, you live in the dorms, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you know 4 languages. ";
                }else if (localStorage.getItem(questions[2])=="I have traveled to 2 diffrent countrys") {
                    document.getElementById("maintext").innerHTML = "Today you got 2 new friends, live in the dorms, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have been to 2 diffrent contries. "; 
                } else {
                    document.getElementById("maintext").innerHTML = "Today you got 2 new friends, live in the dorms, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have learnd to drive a car. ";
                }    
            }else if (localStorage.getItem(St1question)=="Sure" || localStorage.getItem(St2question)=="Sure") {
                if(localStorage.getItem(questions[2])=="I know 4 diffrent languages"){
                    document.getElementById("maintext").innerHTML = "Today you got 1 new friend, you llive in the dorms, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you know 4 languages. ";
                }else if (localStorage.getItem(questions[2])=="I have traveled to 2 diffrent countrys") {
                    document.getElementById("maintext").innerHTML = "Today you got 1 new friend, you live in the dorms, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have been to 2 diffrent contries. "; 
                } else {
                    document.getElementById("maintext").innerHTML = "Today you got 1 new friend, you live in the dorms, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have learnd to drive a car. ";
                }    
            } else {
                if(localStorage.getItem(questions[2])=="I know 4 diffrent languages"){
                    document.getElementById("maintext").innerHTML = "Today  you live in the dorms, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you know 4 languages. ";
                }else if (localStorage.getItem(questions[2])=="I have traveled to 2 diffrent countrys") {
                    document.getElementById("maintext").innerHTML = "Today you live in the dorms, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have been to 2 diffrent contries. "; 
                } else {
                    document.getElementById("maintext").innerHTML = "Today you live in the dorms, everyone in you class knows you like "+localStorage.getItem(questions[0]).toLowerCase()+", in your free time you "+localStorage.getItem(questions[1]).toLowerCase()+"and you have learnd to drive a car. ";
                }    
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