//判断函数
function nullable(data) {
    return data == "";
}

function overflow(data) {
    return data.length > 16;
}

function illegalChar(data) {
    var pattern = new RegExp("[~'!@#$%^&*()-+_=:]");
    return pattern.test(data);
}

function unMatch(data1, data2) {
    return data1 != data2;
}

function post_sub(url, data, view) {
    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        success: function () {
            window.location.href =  view;
        },
        error: function (XMLHttpRequest, textStatus) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
            return false;
        }
    })
}

