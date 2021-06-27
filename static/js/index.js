//Challange 1 YOur age



function formula(){
  let y=prompt("print your year :");
  let answer=(2020-y)*365;
  let h1=document.createElement("h1");
  let textAnswer=document.createTextNode("you are "+answer+" years old")
  h1.setAttribute('id','answer');
  h1.appendChild(textAnswer);
  document.getElementById("bitch").appendChild(h1);
  console.log(answer);
}
function reset(){
  document.getElementById("bitch").remove();
}

function generate(){
  let image=document.createElement("img");
  let div=document.getElementById('flex-cat');
  image.style="width:100px;height:100px;"
  image.src="https://media.tenor.com/images/8c12144e7a8dff02e978c6c4a2c273e5/tenor.gif";
  div.appendChild(image);
}


///// function for 3 rpsGame

function rpsGame(yourChoice){
  //console.log(yourChoice.id);
   let humanchoice,botchoice;
  humanchoice=yourChoice.id;// rock paper or scissor
   botchoice=randomRps();
   //console.log(botchoice);

   let my_result=decideWinner(humanchoice,botchoice);
   //console.log(my_result);
  //
  message=finalMessage(my_result); // you won you lost
  console.log(message);
  rpsFrontEnd(yourChoice.id,botchoice,message)
}

//bot choose randomly
function randomRps(){
 let my_array=['pap','rock','scissor'];
  let a=Math.floor(Math.random()*3);

  return my_array[a];
}

function decideWinner(humanchoice,botchoice){
  let rpsDatabase={
    'rock':{'scissor':1,'rock':0.5,'pap':0},
    'pap':{'scissor':0,'rock':1,'pap':0.5},
    'scissor':{'scissor':0.5,'rock':0,'pap':1},
  };
  let yourScore=rpsDatabase[humanchoice][botchoice];
  let botScore=rpsDatabase[botchoice][humanchoice];
  return [yourScore,botScore];
}

///message function

function finalMessage([yourScore,botScore]){
  if (yourScore===0){
    return {'message':"you Lost","color":'red'};
  }else if (yourScore=== 0.5) {
    return {'message':"you tied","color":'yellow'};
  }else{
    return {'message':"you win","color":'green'};

  }
}



///////
function rpsFrontEnd(yourChoice,botchoice,message){
  let imagesDatebase={
    'rock':document.getElementById('rock').src,
    'pap':document.getElementById('pap').src,
    'scissor':document.getElementById('scissor').src,
  }
  //remove all pics
  document.getElementById('rock').remove();
  document.getElementById('pap').remove();
  document.getElementById('scissor').remove();

  let humanDiv=document.createElement("div");
  let botDiv=document.createElement("div");
  let messageDiv=document.createElement("div");


  humanDiv.innerHTML='<img src="'+imagesDatebase[yourChoice]+'" height="100px" width="100px" style="box-shadow: 0px 10px 50px rgba(0, 0, 255, 0.7);">'
  messageDiv.innerHTML="<h1 style=color:"+message.color+">"+message.message+"</h1>"
  botDiv.innerHTML='<img src="'+imagesDatebase[botchoice]+'" height="100px" width="100px" style="box-shadow: 0px 10px 50px rgba(255, 0, 0, 0.7);">'

  document.getElementById('rps').appendChild(humanDiv);
  document.getElementById('rps').appendChild(messageDiv);
  document.getElementById('rps').appendChild(botDiv);

}


////////////////////Challange 4 Change the color


var all_buttons=document.getElementsByTagName("button");
console.log(all_buttons);

let copyAllButtons=[];
for (let i=0;i<all_buttons.length;i++){
  copyAllButtons.push(all_buttons[i]);
}


///// main function


function hey(btnCh){
  if (btnCh.value==="red"){
    buttonRed();
  }else if (btnCh.value==="reset"){
    buttonReset();
  }else if (btnCh.value==="green"){
    buttonGreen();
  }
 else if (btnCh.value==='random')
   {
    randomColors();
  }
function buttonRed(){
  for (var i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
 }
 function buttonGreen(){
   for (var i = 0; i < all_buttons.length; i++) {
     all_buttons[i].classList.remove(all_buttons[i].classList[1]);
     all_buttons[i].classList.add('btn-success');
   }
  }

function buttonReset(){
  for (var i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i].classList[1]);
  }
}

function randomColors(){
  let choices =['btn-primary','btn-danger','btn-success','btn-warning'];

  for (var i = 0; i < all_buttons.length; i++) {
      let v=choices[Math.floor((Math.random()*4))];
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(v);
  }
}

};




////// CHALLANGE 5 blackjack
let blackjackGame={
  "you":{"scoreSpan":'#your-blackjack-result','div':".your-box",'score':0},
  "dealer":{"scoreSpan":'#dealer-blackjack-result','div':".dealer-box",'score':0}

}

const YOU=blackjackGame['you']
const DEALER=blackjackGame['dealer']

let hitSound= new Audio('static\sounds\swish.m4a');
document.querySelector('#hit-button').addEventListener('click',blackjackHit);
document.querySelector('#deal-button').addEventListener('click',blackjackDeal);
 function blackjackHit(){
   showCard(YOU);
 }


function showCard(activePlayer){
  let cardImage=document.createElement('img');
  cardImage.src='static/images/Q.png';
  document.querySelector(activePlayer['div']).appendChild(cardImage);
  hitSound.play();
}

function blackjackDeal(){
  let yourImages=document.querySelector("#your-box").querySelectorAll("img");
  console.log(yourImages);
}
