$(function () {
    listDesigners();
    $("#deleteBtn").on("click", function () {
        deleteDesigners()
    });
    $("#updateBtn").on("click", function () {
        updateDesigner()
    });

});
var designers = [];

function listDesigners() {
    var html = "";
    $.ajax({
        url: "/designers" ,
        type: "GET",
        dataType: "json",
        async:false,
        success: function(data) {
            $.each(data, function (key, designer) {
                html += '<tr id="' + designer.id + '">';
                html += '<td><input name="designerBtn" type="checkbox" class="i-checks"></td>';
                html += '<td>' + designer.id + '</td>';
                html += '<td>' + designer.name + '</td>';
                html += '<td><img src=' + designer.picPath + ' height="64" width="64" /></td>';
                html += '</tr>';
                designers.push(designer);
            });
            $("#designers_table > tbody").empty().append(html);
        },
        error: function (XMLHttpRequest) {
            console.log(XMLHttpRequest.readyState);
            console.log(XMLHttpRequest.status);
        }
    })
}

function deleteDesigners() {
    // var designerIds = [];
    var designers =[] ;

    var $check = $("input[name='designerBtn']:checkbox");
    $check.each(function () {
        if ($(this).is(":checked")) {
            var id = $(this).parent().parent("tr").attr("id");
            var picPath = $('#' + id).children().children("img").attr("src");
            var designer = {"id" : id, "picPath" : picPath};
            designers.push(designer);
            // designerIds.push(id);
        }
    });

    if (del_sure())
        $.ajax({
            url: "/delete/designers" ,
            data: JSON.stringify(designers),
            contentType: "application/json; charset=utf-8",
            type: "POST",
            async: false,
            success: function(data) {
                if (data != null && data != "") {
                    listDesigners();
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

function updateDesigner() {
    var $check = $("input[name='designerBtn']:checkbox");
    $check.each(function () {
        if ($(this).is(":checked")) {
            var id = $(this).parent().parent("tr").attr("id");
            $.each(designers, function (key, designer) {
                if (designer.id == id) {
                    $("#name").val(designer.name);
                    $("#ID").val(designer.id)
                }
            });
            return ;
        }
    });
}


