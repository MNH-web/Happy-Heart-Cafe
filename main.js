$(".gluten").click(function() {
    $(".list").toggle()
})




$(".guitar").click(function() {
    $(".guitar-dates").toggle();
});

$(".psychic").click(function() {
    $(".psychic-dates").toggle();
})


$(".fiction").click(function() {
    $(".fiction-dates").toggle();
})




const date = new Date();

const dateOfMonth = date.getDate();
const d = date.getDay();
const m = date.getMonth();
const year = date.getFullYear();

const dayOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
const monthName = new Array("January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")

const now = dayOfWeek[d];
const month = monthName[m];

console.log(now);
console.log(month);





function openClosed() {
    if (now === dayOfWeek[1] || now === dayOfWeek[2] || now === dayOfWeek[3] || now === dayOfWeek[4]) {
        $(".mon-thur").css("background-color", "rgba(102, 141, 60, .6)");
        $(".mon-thur").css("color", "#ffff");
    } else if (now === dayOfWeek[5]) {
        $(".fri").css("background-color", "rgba(102, 141, 60, .6)");
        $(".fri").css("color", "#ffff");
    } else if (now === dayOfWeek[6]) {
        $(".sat").css("background-color", "rgba(102, 141, 60, .6 )");
        $(".sat").css("color", "#ffff");
    } else {
        $(".sun").css("background-color", "rgba(255, 0, 0, .6 )");
        $(".sun").css("color", "#ffff");
    }
};
openClosed();


function crossDates() {
    if (month === monthName[7]) {
        $(".a").css("text-decoration", "line-through");
        $(".b").css("background-color", "rgba(102, 141, 60, .6 )")
    }
    if (month === monthName[8]) {
        $(".a").css("display", "none");
        $(".b").css("text-decoration", "line-through");
        $(".c").css("background-color", "rgba(102, 141, 60, .6 )")
    }
    if (month === monthName[9]) {
        $(".a , .b").css("display", "none");
        $(".c").css("text-decoration", "line-through");
        $(".d").css("background-color", "rgba(102, 141, 60, .6 )")

    }
    if (month === monthName[10]) {
        $(".a , .b , .c").css("display", "none");
        $(".d").css("text-decoration", "line-through");
        $(".e").css("background-color", "rgba(102, 141, 60, .6 )")

    }
    if (month === monthName[11]) {
        $(".a , .b , .c , .d ").css("display", "none");
        $(".e").css("text-decoration", "line-through");
        $(".f").css("background-color", "rgba(102, 141, 60, .6 )")

    }
}
crossDates();