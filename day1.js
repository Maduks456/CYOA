      // qwestions that the player will answer
      const qwestions = ["What do you like?", "what do you do in your free time?", "Say 1 intesting fact about yourself.", "Where did I live?", "Should you tell about your day to your mom or dad?"];
      const Answerbox1 = ["Running","playing games", "I know 4 diffrent languages","Perents home","Dad"];
      const Answerbox2 = ["Anime", "Spend time with friends", "I have traveled to 2 diffrent countrys", "School dorms", "Mom"];
      const Answerbox3 = ["Animals especially cats", "Spend time coding", "I have learnd to drive a car", " ", " "];
      const Answerbox4 = ["Gambeling", "sleep", " ", " "," "];
      // cool running,gambeling, spend time coding 
      // outcast anime, sleep
      //nutral Animals especially cats, spend time with friends, play games
      // narrator/ plAyer text
      const text1 = [
                    "Its the first day of school and you dont know where to go.", 
                    "You go in to the school and try to find your classroom.",
                    "You find yor classroom and sit down",
                    "Its the first day so everyone is talking about themselfs and its your turn", 
                    "The teacher asks you qwestions about you", 
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
// order of the  text/ qwestions
let order =1;
// Text array number
let text = 1;
//Qwestion array number
let qw= 0;
//Stundent Array number
let st = 0;


let change = 1;
//Combining string variables for qwestions/texts
let textStart;
let textEnd;
let word;

let St1Qwestion;
let St2Qwestion;
let Narratortext1;
let Narratortext2;
//LocalStorage key and value variable
let Key;
let Value;
console.log("helo")
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
            document.getElementById("q").innerHTML = qwestions[qw];
                if(Answerbox1 != " "){
                    document.getElementById("ans1").style.display = 'block';
                    document.getElementById("ans1").innerHTML = Answerbox1[qw];
                }
                if(Answerbox2 != " "){
                    document.getElementById("ans2").style.display = 'block';
                    document.getElementById("ans2").innerHTML = Answerbox2[qw];
                }
                if(Answerbox3 != " "){
                    document.getElementById("ans3").style.display = 'block';
                    document.getElementById("ans3").innerHTML = Answerbox3[qw];
                }
                if(Answerbox4 != " "){ 
                    document.getElementById("ans4").style.display = 'block';
                    document.getElementById("ans4").innerHTML = Answerbox4[qw];
                }
            qw++
        break;
        case 11:
            textStart = Student1[st].slice(0,12);
            textEnd = Student1[st].slice(13,40);
            word = localStorage.getItem(qwestions[0]).toLowerCase();
            St1Qwestion= textStart + " "+word + textEnd
                document.getElementById("q").innerHTML = St1Qwestion;
                document.getElementById("ans1").style.display = 'block';
                document.getElementById("ans2").style.display = 'block';
                document.getElementById("ans1").innerHTML = StuAnswerbox1[st];
                document.getElementById("ans2").innerHTML = StuAnswerbox2[st];
            st++
        break;
        case 14:
            textStart = Student1[st].slice(0,12);
            textEnd = Student1[st].slice(13,40);
            word2 = localStorage.getItem(qwestions[1]).toLowerCase();
            St2Qwestion= textStart + " "+word + textEnd;
                document.getElementById("q").innerHTML = St2Qwestion;
                document.getElementById("ans1").style.display = 'block';
                document.getElementById("ans2").style.display = 'block';
                document.getElementById("ans1").innerHTML = StuAnswerbox1[st];
                document.getElementById("ans2").innerHTML = StuAnswerbox2[st];
            st++
        break;
        case 19:
            if (localStorage.getItem(qwestions[3])=="Perents home") {
                 document.getElementById("q").innerHTML = qwestions[qw];
                if(Answerbox1 != " "){
                    document.getElementById("ans1").style.display = 'block';
                    document.getElementById("ans1").innerHTML = Answerbox1[qw];
                }
                if(Answerbox2 != " "){
                    document.getElementById("ans2").style.display = 'block';
                    document.getElementById("ans2").innerHTML = Answerbox2[qw];
                }
                if(Answerbox3 != " "){
                    document.getElementById("ans3").style.display = 'block';
                    document.getElementById("ans3").innerHTML = Answerbox3[qw];
                }
                if(Answerbox4 != " "){ 
                    document.getElementById("ans4").style.display = 'block';
                    document.getElementById("ans4").innerHTML = Answerbox4[qw];
                }
                qw++
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
            document.getElementById(mai).innerHTML = "You today picked"+ localStorage.getItem(qwestions[0])+", "+ localStorage.getItem(qwestions[1])+", "+ localStorage.getItem(qwestions[2])+", "+ localStorage.getItem(St2Qwestion)+", "+ localStorage.getItem(qwestions[3])+", "+ localStorage.getItem(St1Qwestion);
        break;
        case 21:
            document.getElementById(mai).innerHTML = "You today picked"+ localStorage.getItem(qwestions[0])+", "+ localStorage.getItem(qwestions[1])+", "+ localStorage.getItem(qwestions[2])+", "+ localStorage.getItem(St2Qwestion)+", "+ localStorage.getItem(qwestions[3])+", "+ localStorage.getItem(qwestions[4])+", "+ localStorage.getItem(St1Qwestion);
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
            if (localStorage.getItem(textStart + " "+word + textEnd)== "Sure" || localStorage.getItem(textStart + " "+word2 + textEnd)== "Sure"){
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
                    if (localStorage.getItem(qwestions[3])=="Perents home") {
                        textStart = text1[text];
                        word = localStorage.getItem(qwestions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }else{
                        textStart = text1[text].slice(0,22);
                        word = localStorage.getItem(qwestions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }
                    text++
                break;
                case 2:
                       text++
                        textStart = text1[text].slice(0,14);
                        textEnd = text1[text].slice(15,53);
                        word = localStorage.getItem(qwestions[4]).toLowerCase();
                        Narratortext2 = textStart+word+textEnd;
                            document.getElementById("q").innerHTML = Narratortext2;
                break;
            }
        change++
        break;
    }
    console.log("before is "+order);
    order++
    console.log("after is "+order);
}
function GetAnswer2(){
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
            if (localStorage.getItem(textStart + " "+word + textEnd)== "Sure" || localStorage.getItem(textStart + " "+word2 + textEnd)== "Sure"){
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
                    if (localStorage.getItem(qwestions[3])=="Perents home") {
                        textStart = text1[text];
                        word = localStorage.getItem(qwestions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }else{
                        textStart = text1[text].slice(0,22);
                        word = localStorage.getItem(qwestions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }
                    text++
                break;
                case 2:
                       text++
                        textStart = text1[text].slice(0,14);
                        textEnd = text1[text].slice(15,53);
                        word = localStorage.getItem(qwestions[4]).toLowerCase();
                        Narratortext2 = textStart+word+textEnd;
                            document.getElementById("q").innerHTML = Narratortext2;
                break;
            }
        change++
        break;
    }
    console.log("before is "+order);
    order++
    console.log("after is "+order);
}
function GetAnswer3(){
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
            if (localStorage.getItem(textStart + " "+word + textEnd)== "Sure" || localStorage.getItem(textStart + " "+word2 + textEnd)== "Sure"){
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
                    if (localStorage.getItem(qwestions[3])=="Perents home") {
                        textStart = text1[text];
                        word = localStorage.getItem(qwestions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }else{
                        textStart = text1[text].slice(0,22);
                        word = localStorage.getItem(qwestions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }
                    text++
                break;
                case 2:
                       text++
                        textStart = text1[text].slice(0,14);
                        textEnd = text1[text].slice(15,53);
                        word = localStorage.getItem(qwestions[4]).toLowerCase();
                        Narratortext2 = textStart+word+textEnd;
                            document.getElementById("q").innerHTML = Narratortext2;
                break;
            }
        change++
        break;
    }
    console.log("before is "+order);
    order++
    console.log("after is "+order);
}
function GetAnswer4(){
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
            if (localStorage.getItem(textStart + " "+word + textEnd)== "Sure" || localStorage.getItem(textStart + " "+word2 + textEnd)== "Sure"){
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
                    if (localStorage.getItem(qwestions[3])=="Perents home") {
                        textStart = text1[text];
                        word = localStorage.getItem(qwestions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }else{
                        textStart = text1[text].slice(0,22);
                        word = localStorage.getItem(qwestions[3]).toLowerCase();
                        Narratortext1 = textStart+word;
                            document.getElementById("q").innerHTML = Narratortext1;
                    }
                    text++
                break;
                case 2:
                       text++
                        textStart = text1[text].slice(0,14);
                        textEnd = text1[text].slice(15,53);
                        word = localStorage.getItem(qwestions[4]).toLowerCase();
                        Narratortext2 = textStart+word+textEnd;
                            document.getElementById("q").innerHTML = Narratortext2;
                break;
            }
        change++
        break;
    }
    console.log("before is "+order);
    order++
    console.log("after is "+order);
}