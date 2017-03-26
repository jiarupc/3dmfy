$(document).ready(function () {
    listPlans();
    $("#deleteBtn").on("click", function () {
        deletePlans()
    });

    $("#updateBtn").on("click", function () {
        updatePlan()
    });
});
var plans = [];


function listPlans() {
    var html = "";
    $.ajax({
        url: "/plans" ,
        type: "GET",
        dataType: "json",
        async:false,
        success: function(data) {
            $.each(data, function (key, plan) {
                html += '<tr id="' + plan.id + '">';
                html += '<td><input name="planBtn" type="checkbox" class="i-checks"></td>';
                html += '<td>' + plan.id + '</td>';
                html += '<td>' + plan.name + '</td>';
                html += '<td>' + plan.designer + '</td>';
                html += '<td>' + plan.type + '</td>';
                html += '<td>' + plan.style + '</td>';
                html += '<td>' + plan.area + '</td>';
                html += '<td>';
                html +=     '<img src=' + plan.coverPath + ' height="64" width="64" />';
                html +=     '<p hidden="hidden">' + plan.planPath + '</p>';
                html += '</td>';
                html += '<td>' + plan.time + '</td>';
                html += '</tr>';
                plans.push(plan);
            });
            $("#plans_table > tbody").empty().append(html);
        },
        error: function (XMLHttpRequest) {
            console.log(XMLHttpRequest.readyState);
            console.log(XMLHttpRequest.status);
        }
    })
}

function deletePlans() {
    var plans = [] ;

    var check = $("input[name='planBtn']:checkbox");
    check.each(function () {
        if ($(this).is(":checked")) {
            var id = $(this).parent().parent("tr").attr("id");
            var coverPath = $('#' + id).children().children("img").attr("src");
            var planPath = $('#' + id).children().children("p:hidden").html();
            var plan = {"id" : id, "coverPath" : coverPath, "planPath" : planPath};
            plans.push(plan);
        }
    });

    if (del_sure())
        $.ajax({
            url: "/delete/plans" ,
            data: JSON.stringify(plans),
            contentType: "application/json; charset=utf-8",
            type: "POST",
            async: false,
            success: function(data) {
                if (data != null && data != "") {
                    listPlans();
                }
            },
            error: function (XMLHttpRequest) {
                console.log(XMLHttpRequest.readyState);
                console.log(XMLHttpRequest.status);
            }
        });
}

function del_sure() {
    return confirm("确定要删除？");
}

function updatePlan() {
    var $check = $("input[name='planBtn']:checkbox");
    $check.each(function () {
        if ($(this).is(":checked")) {
            var id = $(this).parent().parent("tr").attr("id");
            $.each(plans, function (key, plan) {
                if (plan.id == id) {
                    $("#name").val(plan.name);
                    $("#designer").val(plan.designer);
                    $("#ID").val(plan.id)

                }
            });
            return ;
        }
    });

}
