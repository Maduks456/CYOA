<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CYOA </title>
    <link rel="stylesheet" href="style.css">
     
</head>
<body>
    <script type="text/javascript" scr="day1.js" defer></script>
    <div class="main">
        <div class="main_front" id="mai">
          <div class="main_front_title">

          </div>

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
    
