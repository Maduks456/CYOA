<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CYOA test</title>
    <link rel="stylesheet" href="style.css">
     
</head>
<body>
<script src="Javascript/nextday.js" defer></script>
<script src="Javascript/day1.js" defer></script>
<script src="Javascript/day2.js" defer></script>
<script src="Javascript/day3.js" defer></script>
<script src="Javascript/day4.js" defer></script>
<script src="Javascript/day5.js" defer></script>
    <div class="main">

        <div class="main_front">
          <div class="main_front_Endings" id="end">
            <div class="main_front_Endings-days " id="days">
            </div>
            <div class="main_front_Endings-maintext" id="maintext"> 
            </div>
            <div class="main_front_Endings_button" id="button">
                <button id="button1" onclick="ToDay2()">Next Day2</button>
                <button id="button2" onclick="ToDay3()">Next Day3</button>
                <button id="button3" onclick="ToDay4()">Next Day4</button>
                <button id="button4" onclick="ToDay5()">Next Day5</button>
                <button id="button5" onclick="OverView()">OverView</button>
            </div>
        </div>

        </div>
        <div class="main_task">
            <div class="main_task_text" >
                <div class="main_task_text-maintext" id="q">Its the first day of school and you dont know where to go.</div>
                <div class="main_task_text-mainbutton">
                    <button onclick="FrText()" id="next">
                        Next
                    </button>
                    <button onclick="Next2()" id="next2">
                        Next2
                    </button>
                    <button onclick="Next3()" id="next3">
                        Next3
                    </button>
                    <button onclick="Next4()" id="next4">
                        Next4
                    </button>
                    <button onclick="Next5()" id="next5">
                        Next5
                    </button>
                </div>
            </div>
            <div class="main_task_answers">
                <div class="main_task_answers_answer">
                        <button class="day1" onclick=" GetAnswer1()" id="ans1">
                        </button>
                        <button class="day2" onclick=" getAnswer1()" id="ans12">
                        </button>
                        <button class="day3" onclick=" getanswer1()" id="ans13">
                        </button>       
                        <button class="day4" onclick=" Getanswer1()" id="ans14">
                        </button>
                        <button class="day5" onclick=" get_answer1()" id="ans15">
                        </button>                                                                    
                </div>
                <div class="main_task_answers_answer">
                        <button class="day1" onclick=" GetAnswer2()" id="ans2">
                        </button> 
                        <button class="day2" onclick=" getAnswer2()" id="ans22">
                        </button>
                        <button class="day3" onclick=" getanswer2()" id="ans23">
                        </button>                                
                        <button class="day4" onclick=" Getanswer2()" id="ans24">
                        </button>  
                        <button class="day5" onclick=" get_answer2()" id="ans25">
                        </button>                                      
                </div>
            </div>
            <div class="main_task_answers">
                <div class="main_task_answers_answer">
                        <button class="day1" onclick=" GetAnswer3()" id="ans3">
                        </button>                 
                        <button class="day2" onclick=" getAnswer3()" id="ans32">
                        </button>
                        <button class="day3" onclick=" getanswer3()" id="ans33">
                        </button>                
                        <button class="day4" onclick=" Getanswer3()" id="ans34">
                        </button>
                        <button class="day5" onclick=" get_answer3()" id="ans35">
                        </button>                               
                </div>
                <div class="main_task_answers_answer">
                        <button class="day1" onclick=" GetAnswer4()" id="ans4">
                        </button>                          
                        <button class="day4" onclick=" Getanswer4()" id="ans44">
                        </button>                               
                </div>
            </div>
        </div>
    </div>
    
</body>
</html>