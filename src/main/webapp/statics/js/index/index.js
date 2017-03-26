$(document).ready(function () {
    listTags();
    listPlans();
    selectPlansByTag();
    listLatestPlans();
    $("img").on("click",function () {
        getUrlPath($(this));
    });

});

var plans = [];

function listLatestPlans() {
    var html = "";
    $.ajax({
        url: "/latest/plans" ,
        type: "GET",
        dataType: "json",
        async:false,
        success: function(data) {
            $.each(data, function (key, plan) {
                html += '<div class="item text-center">';
                html += '<div class="m-b-xs m-t-xs">';
                html += '<img src="' + plan.coverPath +'" class="img-responsive" alt="'+plan.planPath+'" />';
                html += '</div>';
                html += '<div class="m-b-xs"><h3>' + plan.name + '</h3></div>';
                html += '<div class="m-b-xs"><h5>设计师：'+ plan.designer + '</h5></div>';
                html += '</div>';
            });
            $("#latest-Plan").empty().append(html)
        },
        error: function (XMLHttpRequest) {
            console.log(XMLHttpRequest.readyState);
            console.log(XMLHttpRequest.status);
        }
    })
}

function listPlans() {
    var html = "";
    $.ajax({
        url: "/plans" ,
        type: "GET",
        dataType: "json",
        async:false,
        success: function(data) {
            $.each(data, function (key, plan) {
                html += appendHtml(plan);
                plans.push(plan);
            });
            $("#design-plan").empty().append(html);
        },
        error: function (XMLHttpRequest) {
            console.log(XMLHttpRequest);
        }
    })
}

function listTags() {
    var type = "";
    var style = "";
    var area = "";
    $.ajax({
        url: "/tags" ,
        type: "GET",
        dataType: "json",
        async:false,
        success: function(data) {
            $.each(data, function (key, tag) {
                // alert(tag.category);
                alert
                if (tag.category == 1) {
                    type += '<a class="link">'+ tag.name +'</a>'
                }
                if (tag.category == 2) {
                    style += '<a class="link">'+ tag.name +'</a>'
                }
                if (tag.category == 3) {
                    area += '<a class="link">'+ tag.name +'</a>'
                }
            });
            $("#type").children("div.sub").append(type);
            $("#style").children("div.sub").append(style);
            $("#area").children("div.sub").append(area);
        },
        error: function (XMLHttpRequest) {
            console.log(XMLHttpRequest);
        }
    })
}

function selectPlansByTag() {
    var tag = new Array(3);
    var html = "";
    var $item = $(".item").children("div.sub").children("a");
    $item.on("click",function () {
        //筛选框样式
        // $(this).siblings().removeClass("selected");
        $item.removeClass("selected");
        $(this).addClass("selected");

        //获取筛选信息
        var $tagName = $(this).parents(".item").attr("id");

        if ($tagName ==  "type") {
            tag[0] = $(this).html();
            html = "";
            $.each(plans, function (key, plan) {
                if (tag[0] == plan.type) {
                    html += appendHtml(plan)
                }
            });
            $("#design-plan").empty().append(html);
        }
        if ($tagName == "style") {
            tag[1] = $(this).html();
            html = "";
            $.each(plans, function (key, plan) {
                if (tag[1] == plan.style) {
                    html += appendHtml(plan)
                }
            });
            $("#design-plan").empty().append(html);
        }
        if ($tagName == "area") {
            tag[2] = $(this).html();
            html = "";
            $.each(plans, function (key, plan) {
                if (tag[2] == plan.area) {
                    html += appendHtml(plan)
                }
            });
            $("#design-plan").empty().append(html);
        }
    });
}

function appendHtml(plan) {
    var html = "";
    html += '<div class="col-lg-4 col-sm-6 col-xs-12">';
    html += '<div class="design-Plan">';
    html += '<div><img src="'+ plan.coverPath+ '" class="thumbnail img-responsive" alt="'+plan.planPath+'"></div>';
    html += '<div class="left">';
    html += '<h3>' + plan.name + '</h3>';
    html += '<h5>' + plan.designer + '/' + plan.type + '</h5>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    return html;
}

function getUrlPath($img) {
    var path = $img.attr("alt");
    var name = $img.parent().siblings().children("h3").html();

    var plan = {"planPath" : path, "name" : name};
    var page = window.open('about:blank', '_blank');

    // alert(name);

    $.ajax({
        url: "/redirect/mall",
        data: JSON.stringify(plan),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function(data) {
            if (data != null)
                page.location.href = "/mall";
        },
        error: function (XMLHttpRequest) {
            console.log(XMLHttpRequest);
        }
    })

}

