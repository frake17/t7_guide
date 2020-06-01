$(document).ready(function () {
    $("#josie_pic").mouseover(function () {
        $("#bryan, #hw, #king").css('filter', 'blur(5px)');
        $(".josie_intro").css('display', 'inline');
    });
    $("#josie_pic").mouseout(function () {
        $("#bryan, #hw, #king").css('filter', '');
        $(".josie_intro").css('display', 'none');
    });
});

$(document).ready(function () {
    $("#bryan_pic").mouseover(function () {
        $("#josie, #hw, #king").css('filter', 'blur(5px)');
        $(".bryan_intro").css('display', 'inline');
    });
    $("#bryan_pic").mouseout(function () {
        $("#josie, #hw, #king").css('filter', '');
        $(".bryan_intro").css('display', 'none');
    });
});

$(document).ready(function () {
    $("#king_pic").mouseover(function () {
        $("#bryan, #hw, #josie").css('filter', 'blur(5px)');
        $(".king_intro").css('display', 'inline');
    });
    $("#king_pic").mouseout(function () {
        $("#bryan, #hw, #josie").css('filter', '');
        $(".king_intro").css('display', 'none');
    });
});

$(document).ready(function () {
    $("#hw_pic").mouseover(function () {
        $("#bryan, #josie, #king").css('filter', 'blur(5px)');
        $(".hw_intro").css('display', 'inline');
    });
    $("#hw_pic").mouseout(function () {
        $("#bryan, #josie, #king").css('filter', '');
        $(".hw_intro").css('display', 'none');
    });
});