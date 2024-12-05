let workVal = 100;
let productVal = 90;
let physHealthVal = 37;
let mentHealthVal = 20;

$(document).ready(function () {
    // jQuery methods go here...
    $(function () {
        $("#schedule").sortable();
    });

    $(".scheduleBlocks").each(function () {
        $(this).draggable({
            connectToSortable: "#schedule",
            helper: "clone",
            revert: "invalid"
        });
    });

    $(function () {
        $("#workload").progressbar({
            value: workVal
        });
    });
    $(function () {
        $("#productivity").progressbar({
            value: productVal
        });
    });
    $(function () {
        $("#physHealth").progressbar({
            value: physHealthVal
        });
    });
    $(function () {
        $("#mentHealth").progressbar({
            value: mentHealthVal
        });
    });

});