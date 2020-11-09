$(".Next1").click(function() {
    let birthmonth = $(".username1").val();
    $("#month").text(birthmonth);
    $(".question2").show();
    $(".question1").hide();
});

$(".Next2").click(function() {
    let birthDay = $(".username2").val();
    $("#day").text(birthDay);
    $(".question3").show();
    $(".question2").hide();
});

$(".Solution").click(function() {
    let LuckyNumber = $(".username3").val();
    let LuckyYear = Number(LuckyNumber) + 2030;
    $("#number").text(LuckyNumber);
    $("#year").text(LuckyYear);
    $(".question3").hide();
    $(".ball").show();
    $("body").css("background", "pink ");
    $(".header").css("background", "purple");
    $(".header").css("color", "lightblue");
});