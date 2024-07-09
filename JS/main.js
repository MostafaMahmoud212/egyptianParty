                // Right Nav
const rightNav = $('.leftNav').outerWidth();

$(".openNav").click(function () {

    if( $(".leftNav").css("left") == "0px") {

        $(".leftNav").animate( { left: -rightNav }, 800 );
        $(".openNav").text("☰ open");
    }
    else {
        $(".leftNav").animate( { left: 0 }, 800 )
        $(".openNav").text("☰ close");
    }

})
$(".leftNav i").click(function () {
    $(".leftNav").animate( { left: -rightNav }, 800 );
    $(".openNav").text("☰ open");
})



                // duration section

$("#duration .one").css("display", "block");

$('#duration h3.singer').click(function(){
    $('.slider').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
});


            // details section

window.onload = function () {
setInterval(() => { 
const now = new Date();
const targetDate = new Date("2025-01-02T00:00:00");

console.log(targetDate.getTime() / 1000);// 1735776000
const TimeDifference = targetDate.getTime() - now.getTime();

let days = Math.floor(TimeDifference / (1000 * 60 * 60 * 24 ));
let hours = Math.floor((TimeDifference % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
let minutes = Math.floor((TimeDifference % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((TimeDifference % (1000 * 60  )) / 1000);

console.log(seconds);

        $(".day").html(`${days} D`);
        $(".hour").html(`${hours} h`);
        $(".menut").html(`${minutes} m`);
        $(".secand").html(`${seconds} s`);
    }, 1000);
}



function defandTime() {
const now = new Date();
const targetDate = new Date("2025-01-02T00:00:00");
const timeDifference = targetDate.getTime() - now.getTime();

const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

document.querySelector(".day").textContent = `${days}D`;
document.querySelector(".hour").textContent = `${hours}h`;
document.querySelector(".menut").textContent = `${minutes}m`;
document.querySelector(".sacand").textContent = `${seconds}s`;
}  

window.onload = function () {
setInterval(() => {
    defandTime();
}, 1000); 
}


            // contact Section 

$("#message").keyup(function () {
    let lengthOfMs = $(this).val().length;
    $("form p span").text(100 - lengthOfMs);
    if($("form p span").text() <= "0") {
        $("form p span").text("your available character finished")
    }
})