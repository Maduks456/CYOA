<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
     
</head>
<body>
    <div class="main">
        <div class="main_front" id="mai">

        </div>
        <div class="main_task">
            <div class="main_task_text" >
                <div class="main_task_text-maintext" id="q">Its the first day of school and you dont know where to go.</div>
                <div class="main_task_text-mainbutton">
                    <button onclick="FrText()">
                        Next
                    </button>
                </div>
            </div>
            <div class="main_task_answers">
                <div class="main_task_answers_answer">

                        <button onclick=" GetAnswer1()" id="ans1">
                            yes
                        </button>                 
                </div>
                <div class="main_task_answers_answer">
                        <button onclick=" GetAnswer2()" id="ans2">
                            no
                        </button>                 
                </div>
            </div>
            <div class="main_task_answers">
                <div class="main_task_answers_answer">
                    
                        <button onclick=" GetAnswer3()" id="ans3">
                            not really
                        </button>                 
                
                </div>
                <div class="main_task_answers_answer">
                        <button onclick=" GetAnswer4()" id="ans4">
                            I dont hate it but dont love it
                        </button>                 
                </div>
            </div>
        </div>
    </div>

</body>
</html>
    <script>
      // teacher/redder lines
      const qwestions = ["What do you like?", "what do you do in your free time?", "Say 1 intesting fact about yourself."];
      const Answerbox1 = ["Running","play games", "I know 4 diffrent languages"];
      const Answerbox2 = ["Anime", "Spend time with friends", "I have traveled to 2 diffrent countrys"];
      const Answerbox3 = ["Animals especially cats", "Spend time coding", "I have learnd to drive a car"];
      const Answerbox4 = ["Gambeling", "sleep", " "];
      const text1 = ["Its the first day of school and you dont know where to go.", 
                    "You go in to the school and try to find your classroom.",
                    "You find yor classroom and sit down",
                    "Its the first day so everyone is talking about themselfs and its your turn", 
                    "The teacher asks you qwestions about you", 
                    "Oh thats intresting",
                    "Really?",
                    "After you spoke a classmate  came up to you and asked."
                    ]
      // Students 1 text and answers
      const Student1 = ["Hey you like  do you want to be friends?"]
      const StuAnswerbox1 = ["Sure"]
      const StuAnswerbox2 = ["No sorry"]
      let x = 0
      let y = 1
      let z = 0
      function FrText() {
 
        if (y<=4) {
        document.getElementById("q").innerHTML = text1[y]
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            y=y+1
  
        }else if (y==8 && x==3){
            document.getElementById("q").innerHTML = Student1[z]
            document.getElementById("ans1").style.display = 'block';
            document.getElementById("ans2").style.display = 'block';
          document.getElementById("ans1").innerHTML = StuAnswerbox1[z];
          document.getElementById("ans2").innerHTML = StuAnswerbox2[z];
      }else{
        document.getElementById("q").innerHTML = qwestions[x]
            document.getElementById("ans1").style.display = 'block';
            document.getElementById("ans2").style.display = 'block';
            document.getElementById("ans3").style.display = 'block';
            document.getElementById("ans4").style.display = 'block';
          document.getElementById("ans1").innerHTML = Answerbox1[x];
          document.getElementById("ans2").innerHTML = Answerbox2[x];
          document.getElementById("ans3").innerHTML = Answerbox3[x];
          document.getElementById("ans4").innerHTML = Answerbox4[x];
      }
          console.log(y);
    }

    function GetAnswer1() {
        
        
         let q= document.getElementById("q").innerHTML;
         let answer1 = document.getElementById("ans1").innerHTML;
         localStorage.setItem(q, answer1)

          if(y==5 || y==6 || x==2){
            document.getElementById("q").innerHTML = text1[y]
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            y=y+1
            
          }else if(localStorage.getItem(qwestions[0]) == Answerbox2){

            
  
          }else{
            document.getElementById("mai"). innerHTML = "You picked " + localStorage.getItem(qwestions[0]) + ", " + localStorage.getItem(qwestions[1]) + ", " + localStorage.getItem(qwestions[2]);
          }
              x=x+1;
            console.log(y);
          console.log("x is" + x)
    }   
    function  GetAnswer2() {
        
         let q= document.getElementById("q").innerHTML
         let answer2 = document.getElementById("ans2").innerHTML
         localStorage.setItem(q, answer2)
        
          if(y==5 || y==6){
     
            document.getElementById("q").innerHTML = text1[y]
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            y=y+1
          }else{
            document.getElementById("mai"). innerHTML = "You picked " + localStorage.getItem(qwestions[0]) + ", " + localStorage.getItem(qwestions[1]) + ", " + localStorage.getItem(qwestions[2]);
          }
            x=x+1;
    }    
    function  GetAnswer3() {
        
        let q= document.getElementById("q").innerHTML
        let answer3 = document.getElementById("ans3").innerHTML
        localStorage.setItem(q, answer3)
  
          if(y==5 || y==6){
    
            document.getElementById("q").innerHTML = text1[y]
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            y=y+1
          }else{
            document.getElementById("mai"). innerHTML = "You picked " + localStorage.getItem(qwestions[0]) + ", " + localStorage.getItem(qwestions[1]) + ", " + localStorage.getItem(qwestions[2]);
          }
            x=x+1;
    }    
    function  GetAnswer4(){
         let q= document.getElementById("q").innerHTML
         let answer4 = document.getElementById("ans4").innerHTML
         localStorage.setItem(q, answer4)
          
          if(y==5 || y==6){
            document.getElementById("q").innerHTML = text1[y]
            document.getElementById("ans1").style.display = 'none';
            document.getElementById("ans2").style.display = 'none';
            document.getElementById("ans3").style.display = 'none';
            document.getElementById("ans4").style.display = 'none';
            y=y+1
          }else{
            document.getElementById("mai"). innerHTML = "You picked " + localStorage.getItem(qwestions[0]) + ", " + localStorage.getItem(qwestions[1]) + ", " + localStorage.getItem(qwestions[2]);
          }
            x=x+1;
    }    


</script>
