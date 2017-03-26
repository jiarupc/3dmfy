/*!
* 	Common.js
*********************************************/
$(function() {
    Sys_Cart.init();
});

//Sys_User.Id
var Sys_User = {
    Id: 0,
    Name: '',
    RoldId: 0
};
//购物车数量
var Sys_Cart = {
    Count: 0,
    init: function () {
        var url = '/Handles/User/ShoppingCart.ashx';
        $.ajax({
            type: 'get',
            url: url,
            data: {
                Act: 'GetCount'
            },
            dataType: 'json',
            cache: false,
            success: function (rs) {
                if (rs) {
                    Sys_Cart.Count = rs.Count;
                    $('#CartSumNum').html(Sys_Cart.Count);
                    $('.handerCartNum').html(Sys_Cart.Count);
                }
            }
        });
    }
};

//服务器时间
var Sys_Timer = 0;

$(document).ready(function() {
    Sys_User.Id = $('#hidUid').val();
    Sys_User.Name = $('#hidAcc').val();
});

//加入购物车（商品单页）
var PrdCart = {
    isOnePrice: 0,
    isColor: 0,
    isSize: 0
};
//-------------------------------------
//跳转到指定的页码
function pageJump(the) {
    var $box = $(the).closest('.box'),
		url = $box.find('.pageUrl').val(),
		page = parseInt0($box.find('.pageInput').val());

    if (page && url) {
        //alert(url+'&page='+page);
        window.location = url + '&page=' + page;
    };
};
