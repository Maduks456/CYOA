let order4 = 1;
const questions4= [
    "Which friend do you want to spend time with?"
]
const Answerday4box1= [
    "Noone"
]
const Answerday4box2= [
    "1. friend"
]
const Answerday4box3= [
    "2. friend"
]
const Answerday4box4= [
    localStorage.getItem(questions2[2]),
    ""
]
function Next4(){
    switch (order4) {
        case 1:
            document.getElementById("q").innerHTML = questions4[qu4]
            document.getElementById("ans14").style.display = 'none';
            document.getElementById("ans24").style.display = 'none';
            document.getElementById("ans34").style.display = 'none';
            document.getElementById("ans44").style.display = 'none';
                if(Answerday4box1[qu4] != ""){
                    document.getElementById("ans14").style.display = 'block';
                    document.getElementById("ans14").innerHTML = Answerday4box1[qu4];
                }
                if(localStorage.getItem(St1question) == "Sure"){
                    document.getElementById("ans24").style.display = 'block';
                    document.getElementById("ans24").innerHTML = Answerday4box2[qu4];
                }
                if(localStorage.getItem(St2question) == "Sure"){
                    document.getElementById("ans34").style.display = 'block';
                    document.getElementById("ans34").innerHTML = Answerday4box3[qu4];
                }
                if(localStorage.getItem(questions2[2])== "Tall one" && guess==0 || localStorage.getItem(questions2[2])== "EMO one" && guess==0)
                    document.getElementById("ans44").style.display = 'block';
                    document.getElementById("ans44").innerHTML = Answerday4box3[qu4];
            qu3++
        break;
    }
    order4++
}