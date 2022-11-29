
$(document).ready(function () {
    // dog picture appears and disappears when button is clicked
    $("#dog_button").click(function () {
        if ($("#dog").hasClass("hidden")) {
            $("#dog").css("display", "block");
            $("#dog").removeClass("hidden");
        }
        else {
            $("#dog").css("display", "none");
            $("#dog").addClass("hidden");
        }
    });
});