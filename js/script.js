//       _____                         _     
//  ____|_   _|                       | |    
// / __ \ | |   __ _  _ __  ___  _   _ | |__  
// / / _` || | / _` || '__|/ __|| | | || '_ \ 
// | | (_| || || (_| || |  | (__ | |_| || |_) |
// \ \__,_|\_/ \__,_||_|   \___| \__, ||_.__/ 
// \____/                        __/ |       
//                             |___/   

// Function
$(function(){
    var array = ['paper', 'rock', 'scissor'];
    var yourScore =0;
    var pcScore =0;
    $(document).on('click', 'span', function(){
    var you = $(this).attr('class');
    $('.your span').css('opacity', 0.3);
    $(this).css('opacity', 1.0);
    var pc= array[Math.floor(Math.random()*array.length)
];

// Score Pc and Your
var amount = 0.5;
$('.pc span').attr("class", "")
$('.pc span').addClass(pc);
if(you == "paper" && pc == "rock"){
yourScore +=amount;
} else if(you == "rock" && pc == "scissor"){
yourScore +=amount;
} else if(you == "scissor" && pc == "paper"){
yourScore +=amount;
}else if(pc == "paper" && you == "rock"){
pcScore +=amount;
} else if(pc == "rock" && you == "scissor"){
pcScore +=amount;
} else if(pc == "scissor" && you == "paper"){
pcScore +=amount;
}
$('.yourScore').html(yourScore);
$('.pcScore').html(pcScore);

    
    });
});