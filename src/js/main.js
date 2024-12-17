let workVal = 100;
let productVal = 90;
let physHealthVal = 37;
let mentHealthVal = 20;

$(document).ready(function () {
    // jQuery methods go here...
    $(function () {
        $("#schedule").sortable({
            connectWith: "#content",
            cursor: "move",
            handle: ".portlet-header",
            placeholder: "portlet-placeholder ui-corner-all",
        });
    });

    $(".portlet").addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all").find(".portlet-header").addClass("ui-widget-header ui-corner-all");

    $(".portlet").resizable({
        grid: 40,
        containment: "#schedule"
    }
    );

    $(".scheduleBlocks").each(function () {
        $(this).draggable({
            connectToSortable: "#schedule",
            helper: "clone",
            revert: "invalid"
        });
    });

    $(function () {
        $("#menu").menu();
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