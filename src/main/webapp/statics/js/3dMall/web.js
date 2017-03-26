/*!
* 	web.js
*********************************************/

$(function () {
    //头部下拉分类
    handerCategory_init();
    
    //产品分类扩展
    ProductCategory_init();
	
    //Placeholder fix ie
    $.julyuiPlaceholderFlash();
});


//交流方案
function IM_Show(pid) {
    self.location = '/User/UserChatAdd.aspx?pid=' + pid;
};

//头部下拉分类
function handerCategory_init() {
    var $root = $('#handerCategory');
    if (!$root.size()) {
        return;
    };
	
    $root.hover(
		function () {
		    $(this).addClass('hover');
		},
		function () {
		    $(this).removeClass('hover');
		}
	);

    $root.find('.item').hover(
		function () {
		    $(this).addClass('open');

			var $br  = $(this).find('.subBr');
			if($br.attr('isHeight')!=='1'){
				var hh = parseInt0($(this).height());
				$(this).find('.subBr').css({height:hh});
				$br.attr('isHeight','1');
			};
		},
		function () {
		    $(this).removeClass('open');
		}
	);
};

//产品分类扩展
function ProductCategory_init() {
    var $root = $('#ProductCategoryBar');
    if (!$root.size()) {
        return;
    };

    $root.find('.dot').on('click', function () {
        var $the = $(this).closest('.dl').find('.dd');
        if ($the.is(':visible')) {
            $the.hide();
            $(this).html('+');
        } else {
            $the.show();
            $(this).html('-');
        };
    });
};

//左边商品分类 当前选择
function ProductCategory_selected(cid) {
    var $root = $('#ProductCategoryBar');
    if (!$root.size()) {
        return;
    };
	
    var $link = $root.find('.link[cid="' + cid + '"]');

    if ($link.size()) {
        $link.addClass('selected');
		
		var $dl = $link.closest('.dl');
		if($dl.size()){
			var $dd = $dl.find('.dd');
			if($dd.size()){
				$dd.show();
				$dl.find('.dot').html('-');
			};
		};
    };
};

//nav 当前选择
function nav_selected(key) {
    var $nav = $('.handerNav .nav');
    var $link = $nav.find('.link[title="' + key + '"]');
    if ($link.size()) {
        $nav.find('.selected').removeClass('selected');
        $link.closest('.item').addClass('selected');
    };
};


//加入购物车（产品）
function Cart_AddPrd(id) {
    if ($('#hidUid').val() == 0) {
        self.location = '/User/Login.aspx?url=/ProductView.aspx?id='+id;
        return false;
    }

    var num = parseInt1($('#PrdViewInput_Num').val()),
		colorId = parseInt0($('#PrdViewInput_Color').val()),
		sizeId = parseInt0($('#PrdViewInput_Size').val());

    if (typeof PrdCart !== 'undefined') {
        if (PrdCart.isColor && colorId == 0) {
            alert('请选择颜色');
            return false;
        };

        if (PrdCart.isSize && sizeId == 0) {
            alert('请选择规格');
            return false;
        };
    };

    //---------------------------------------
    //确定唯一的goods
    if (colorId > 0 && sizeId > 0 && pv_goodsId == 0) {
        return false;
    }

    var url = FixUrl('/Handles/User/ShoppingCart.ashx?act=Add');
    $.ajax({
        type: 'get',
        url: url,
        data: {
            SeleTypeId: 1,
            GoodsId: pv_goodsId,
            Count: num,
        },
        dataType: 'json',
        cache: false,
        success: function (rs) {
            if (rs) {
                if (rs.Staus == '1') {
                    //---------------------------------------
                    var salePrice = parseFloat0($('#hidSalePrice').val());
                    var amount = '&yen;' + MyRound2(salePrice * num); //总金额

                    var sb = [
                        '<div class="modal_cart">',
                            '<div class="modal_title">商品成功放入购物车</div>',
                            '<div class="modal_msg">',
                                '<div class="con">',
                                    '<div class="pic">',
                                        '<div class="iconBigBox"><div class="iconBig iconBig-yes"></div></div>',
                                    '</div>',
                                    '<div class="txt">',
                                        '购物车共有 <span class="txtRed14">', num, '</span> 件商品，',
                                        '商品总金额合计：<span class="txtRed14b">', amount, '</span>',
                                    '</div>',
                                '</div>',
                                '<div class="fc"></div>',
                            '</div>',
                            '<div class="modal_btns">',
                                '<a href="javascript:;" class="btn70 btnH26 btnGray btnClose" onclick="$.modal.close();return false;">继续购物</a>',
                                '<a href="/User/Cart.aspx" class="btn100 btnH26 btnRed">查看购物车</a>',
                            '</div>',
                        '</div>'
                    ].join('');

                    $.modal(sb, { zIndex: 10000, minHeight: 200, minWidth: 450, maxHeight: 200, maxWidth: 450 });

                    return true;
                } else {
                    alert(rs.Message);
                };
            } else {
                AjaxErrorCallback();
            }
        },
        error: AjaxErrorCallback
    });

    return false;
};

//加入购物车（方案）
function Cart_AddPlan(id) {
    if ($('#hidUid').val() == 0) {
        self.location = '/User/Login.aspx?url=/PlanView.aspx?id='+id;
        return false;
    }

    var url = FixUrl('/Handles/User/ShoppingCart.ashx?act=Add');
    $.ajax({
        type: 'get',
        url: url,
        data: {
            SchemeId: id,
            SeleTypeId:5
        },
        dataType: 'json',
        cache: false,
        success: function (rs) {
            if (rs) {
                if (rs.Staus == '1') {
                    //---------------------------------------
                    var salePrice = parseFloat0($('#SchemeSumPay').val());
                    var amount = '&yen;' + MyRound2(salePrice); //总金额
                    var num = $('#SchemePrdCount').val();

                    var sb = [
                        '<div class="modal_cart">',
                            '<div class="modal_title">商品成功放入购物车</div>',
                            '<div class="modal_msg">',
                                '<div class="con">',
                                    '<div class="pic">',
                                        '<div class="iconBigBox"><div class="iconBig iconBig-yes"></div></div>',
                                    '</div>',
                                    '<div class="txt">',
                                        '购物车共有 <span class="txtRed14">', num, '</span> 件商品，',
                                        '商品总金额合计：<span class="txtRed14b">', amount, '</span>',
                                    '</div>',
                                '</div>',
                                '<div class="fc"></div>',
                            '</div>',
                            '<div class="modal_btns">',
                                '<a href="javascript:;" class="btn70 btnH26 btnGray btnClose" onclick="$.modal.close();return false;">继续购物</a>',
                                '<a href="/User/Cart.aspx" class="btn100 btnH26 btnRed">查看购物车</a>',
                            '</div>',
                        '</div>'
                    ].join('');

                    $.modal(sb, { zIndex: 10000, minHeight: 200, minWidth: 450, maxHeight: 200, maxWidth: 450 });

                    return true;
                } else {
                    alert(rs.Message);
                };
            } else {
                AjaxErrorCallback();
            }
        },
        error: AjaxErrorCallback
    });
};

//关注用户
function Fav_AddUser(id) {
    if ($('#hidUid').val() == 0) {
        self.location = '/User/Login.aspx?url=/User/UserView.aspx?id='+id;
        return false;
    }

    var url = FixUrl('/Handles/Favorites.ashx?act=Users');
    $.ajax({
        type: 'get',
        url: url,
        data: {
            uid: id,
        },
        dataType:'json',
        success: function(rs) {
            if (rs.ret == 1) {
                alert('关注成功');
            }
        }
    });

    return true;
}


//收藏（产品）
function Fav_AddPrd(id) {
    if ($('#hidUid').val() == 0) {
        self.location = '/User/Login.aspx?url=/ProductView.aspx?id='+id;
        return false;
    }

    var url = FixUrl('/Handles/Favorites.ashx?act=Product');
    $.ajax({
        type: 'GEt',
        url: url,
        data: {
            pid: id,
        },
        dataType:'json',
        success: function(rs) {
            if (rs.ret == 1) {
                alert('收藏成功');
            }
        }
    });

    return true;
};

//收藏（方案）
function Fav_AddPlan(id) {
    if ($('#hidUid').val() == 0) {
        self.location = '/User/Login.aspx?url=/PlanView.aspx?id='+id;
        return false;
    }

    var url = FixUrl('/Handles/Favorites.ashx?act=Scheme');
    $.ajax({
        type: 'get',
        url: url,
        data: {
            sid: id,
        },
        dataType:'json',
        success: function(rs) {
            if (rs.ret == 1) {
                alert('收藏成功');
            }
        }
    });

    return true;
};