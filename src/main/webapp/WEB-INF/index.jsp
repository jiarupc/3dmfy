<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="icon" href="/statics/img/ui/headlogo.ico" type="image/x-icon">
    <title>方案设计_美作天然居</title>

    <link href="/statics/css/Common/bootstrap.min.css" rel="stylesheet">
    <link href="/statics/css/Common/font-awesome.css" rel="stylesheet">

    <link href="/statics/css/Common/animate.css" rel="stylesheet">
    <link href="/statics/css/Common/font-awesome.min.css" rel="stylesheet">
    <link href="/statics/css/Common/style.css" rel="stylesheet">

    <script src="/statics/js/Common/jquery-3.1.1.js"></script>
    <script src="/statics/js/Common/bootstrap.min.js"></script>
    <script type="text/javascript" src="/statics/js/Common/jPages.js"></script>

    <script src="/statics/js/index/index.js"></script>

</head>
<body>

<div class="header container col-lg-12">
    <div class="row border-bottom top-bar">
        <nav class="top-bar navbar-static-top col-lg-12" role="navigation">
            <ul class="nav navbar-top-links right col-lg-8" style="margin-top: 15px;">
                <li>
                    <span class="text-muted welcome-message hidden-xs">
                        您好，欢迎来到美作天然居！
                    </span>
                    <span class="text-muted">
                        <a href="http://www.3dmfy.com/User/Login.aspx">[ 登陆 ]</a>
                    </span>
                    <span class="text-muted">
                        <a href="http://www.3dmfy.com/User/Register.aspx">[ 注册 ]</a>
                    </span>
                </li>

                <li class="hidden-xs">
                    <span class="text-muted">
                        <a href="http://www.3dmfy.com/User/UserOrders.aspx">我的订单</a>
                    </span>
                </li>

                <li class="hidden-xs">
                    <span class="text-muted">
                        <a href="http://www.3dmfy.com/Tools/Tools.aspx">计算器</a>
                    </span>
                </li>

                <li class="hidden-xs">
                    <span class="text-muted">
                        <a href="http://www.3dmfy.com/News.aspx">最新动态</a>
                    </span>
                </li>

                <li class="hidden-xs">
                    <span class="text-muted">
                        <a href="http://www.3dmfy.com/Help.aspx">帮助中心</a>
                    </span>
                </li>

                <li class="hidden-xs">
                    <span class="text-muted">
                        <a href="http://supplier.3dmfy.com/WebManage/Login.aspx">供应商</a>
                    </span>
                </li>

            </ul>
        </nav>
    </div>

    <div class="row">
        <div class="text-center">
            <nav class="navbar navbar-default col-lg-11 col-md-11 col-sm-11 col-xs-11" role="navigation">
                <div class="header-logo navbar-header visible-lg col-lg-5 col-md-4">
                    <!--<a class="logo" href="http://www.3dmfy.com" title="美作天然居" alt="美作天然居"></a>-->
                    <img src="../statics/img/web/logo.jpg"/>
                </div>

                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12" style="min-height: 112px">
                    <div class="headerSearchBg">
                    <form method="post" name="headerSearch" action="http://www.3dmfy.com/Search.aspx">
                        <input name="key" type="text" value="" class="headerSearchInput col-lg-10 col-md-9 col-sm-9 col-xs-9" placeholder="搜索关键字" />
                        <input name="sb" type="submit" value="搜索" class="headerSearchBtn col-lg-2 col-md-3 col-sm-3 col-xs-3">
                    </form>
                </div>

                    <div class="headerSearchLink hidden-xs">
                        热门搜索：
                        <a href="http://www.3dmfy.com/Search.aspx?key=床" class="link">床</a>
                        <a href="http://www.3dmfy.com/Search.aspx?key=沙发" class="link">沙发</a>
                        <a href="http://www.3dmfy.com/Search.aspx?key=吊灯" class="link">吊灯</a>
                        <a href="http://www.3dmfy.com/Search.aspx?key=壁灯" class="link">壁灯</a>
                        <a href="http://www.3dmfy.com/Search.aspx?key=吸顶灯" class="link">吸顶灯</a>
                        <a href="http://www.3dmfy.com/Search.aspx?key=台灯" class="link">台灯</a>
                    </div>
                </div>

                <div class="right m-t-sm col-lg-2 col-md-3 visible-lg ">
                    <img src="../statics/img/web/code.jpg" alt="美作天然居" />
                    <p>微信号</p>
                </div>
            </nav>
        </div>
    </div>

    <div class="row bg-green">
        <nav class="navbar" role="navigation">
            <div class="container">
                <div class="navbar-header" style="float: right; margin-right: 2%">
                    <button type="button" class="navbar-toggle" data-toggle="collapse"
                            data-target="#navbar-collapse">
                        <span class="sr-only">切换导航</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="navbar-collapse">
                    <ul class="nav navbar-nav col-lg-12 col-md-12">
                        <li><a href="http://www.3dmfy.com/Index.aspx">首页</a></li>
                        <li class="active-green"><a href="#">三维商城</a></li>
                        <li><a href="http://www.3dmfy.com/MallCenter.aspx">产品商城</a></li>
                        <li><a href="http://www.3dmfy.com/PlanList.aspx">方案商城</a></li>
                        <li class="visible-lg"><a href="http://www.3dmfy.com/News.aspx">最新动态</a></li>
                        <li class="visible-lg"><a href="http://www.3dmfy.com/Help.aspx?id=3">帮助中心</a></li>
                        <li><a href="http://www.3dmfy.com/User/UserList.aspx">设计之家</a></li>
                        <li class="m-l-xxl shopping-Car visible-lg"><a href="http://www.3dmfy.com/User/Cart.aspx"><i class="fa fa-cart-plus"></i>购物车：0</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    <div class="row">
        <div class="headerBanner visible-lg visible-md visible-sm"></div>
        <%--<div class="container">--%>
        <%--<div class="col-lg-10 col-md-10 visible-lg visible-md" style="padding: 0 0 0 0; margin: 0 0 0 0">--%>
        <%--<img src="../statics/img/ad/headerBanner.jpg"/>--%>
        <%--</div>--%>
        <%--</div>--%>
    </div>
</div>

<div class="main container">
    <div class="row">
        <div class="col-sm-3 col-xs-3 col-lg-3 visible-lg visible-sm visible-md">
            <!--<div class="row">-->
            <div class="boxTitle">
                <div class="tab selected">
                    最新方案
                </div>
            </div>

            <div class="plan-items" id="latest-Plan">
                <!--item-->
                <!--<div class="item text-center">
                    <div class="m-b-xs m-t-xs"><img src="/statics/test.png" class="img-responsive" /></div>
                    <div class="m-b-xs">方案：<a>方案01</a></div>
                    <div class="m-b-xs">设计师：<a>多啦A梦</a></div>
                </div>
                <div class="item text-center">
                    <div class="pic"><img src="/statics/test.png" /></div>
                    <div class="tit">方案：<a>方案01</a></div>
                    <div class="tit">设计师：<a>多啦A梦</a></div>
                </div>
                <div class="item text-center">
                    <div class="pic"><img src="/statics/test.png" /></div>
                    <div class="tit">方案：<a>方案01</a></div>
                    <div class="tit">设计师：<a>多啦A梦</a></div>
                </div>
            </div>-->
            </div>
        </div>

        <div class="col-sm-9 col-xs-9 col-lg-9 col-xs-12">
            <div class="row visible-lg visible-md visible-sm">
                <div class="FilterDiv">
                    <h1><em>方案</em> - 筛选条件</h1>

                    <div class="FilterWrap">
                        <div class="items">
                            <!--item-->
                            <div class="item" id="type">
                                <div class="tit">
                                    房型：
                                </div>
                                <div class="sub">
                                    <!--<a id="type_clean" class="link selected">全部</a>-->
                                </div>
                            </div>
                            <div class="br"></div>
                            <!--/item-->

                            <div class="item" id="style">
                                <div class="tit">
                                    风格：
                                </div>
                                <div class="sub">
                                    <!--<a id="style_clean" class="link selected">全部</a>-->
                                </div>
                            </div>
                            <div class="br"></div>
                            <!--/item-->

                            <div class="item" id="area">
                                <div class="tit">
                                    面积：
                                </div>
                                <div class="sub">
                                    <!--<a id="area_clean" class="link selected">全部</a>-->
                                </div>
                            </div>
                            <!--/item-->

                        </div>
                    </div>
                </div>
            </div>

            <div class="row" id="design-plan">

                <!-- <div class="col-lg-4 col-sm-6 col-xs-12">
                    <div class="design-Plan">
                        <a href="">
                            <img src="/statics/test2.png" class="thumbnail img-responsive">
                        </a>
                        <div class="left">
                            <a href=""><h3>斯巴达</h3></a>
                            <a href=""><h5>希腊风/两室一厅</h5></a>
                        </div>
                    </div>
                </div> -->

            </div>

            <div class="col-md-12 text-center m-t">
                <div class="pagination" id="result"></div>
            </div>
        </div>
    </div>
</div>

<div class="top-footer">
    <div class="container">
        <div class="row">
            <div class="col-lg-1 visible-lg"></div>

            <div class="col-lg-2 col-sm-6 col-xs-6">
                <ul>
                    <h2>新手指南</h2>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=5">美作天然居会员制度</a></li>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=4">免费注册用户</a></li>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=3">了解美作天然居</a></li>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=2">网购家具流程</a></li>
                </ul>
            </div>

            <div class="col-lg-2 col-sm-6 col-xs-6">
                <ul>
                    <h2>支付方式</h2>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=8">支付宝支付</a></li>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=7">贷款支付</a></li>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=6">网银支付</a></li>
                    <li><a>&nbsp&nbsp&nbsp</a></li>
                </ul>
            </div>

            <div class="col-lg-2 visible-lg">
                <a href="http://www.3dmfy.com/">
                    <img src="../statics/img/web/footLogo.jpg" height="110" width="100"/>
                </a>
            </div>

            <div class="col-lg-2 col-sm-6 col-xs-6">
                <ul>
                    <h2>商城保障</h2>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=11">退换货标准</a></li>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=10">提供发票</a></li>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=9">保证正品</a></li>
                </ul>
            </div>

            <div class="col-lg-2 col-sm-6 col-xs-6">
                <ul>
                    <h2>服务条款</h2>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=19">隐私保护</a></li>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=18">免责声明</a></li>
                    <li><a href="http://www.3dmfy.com/Help.aspx?id=17">注册协议</a></li>
                </ul>
            </div>

            <div class="col-lg-1 visible-lg"></div>
        </div>
    </div>
</div>

<div class="bottom-footer">
    <div class="container text-center">
        <div class="row m-b-sm">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <a href="http://www.3dmfy.com/Help.aspx?id=20">关于我们</a><span>|</span>

                <a href="http://www.3dmfy.com/Help.aspx?id=21">联系我们</a><span>|</span>

                <a href="http://www.3dmfy.com/JobList.aspx" class="hidden-xs">人才招聘</a><span class="hidden-xs">|</span>

                <a href="http://www.3dmfy.com/Help.aspx?id=16">商家加盟</a><span>|</span>

                <a href="http://www.3dmfy.com/Help.aspx?id=15">广告服务</a><span class="hidden-xs">|</span>

                <a href="http://www.3dmfy.com/Help.aspx?id=14" class="hidden-xs">友情链接</a>
            </div>
        </div>

        <div class="row m-b-sm">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                copyright &copy; 2011-2014 美作天然居 版权所有
                <a href="http://www.miibeian.gov.cn/publish/query/indexFirst.action">粤ICP备13046533号-1</a>&nbsp;

                <script type="text/javascript">
                    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
                    document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F0995625ff5e032345ba74142bcd6ca34' type='text/javascript'%3E%3C/script%3E"));
                </script>
                &nbsp;

                <img src="/statics/img/web/police-record.png" />
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44010402000428">粤公网安备 44010402000428号</a>
            </div>
        </div>

        <div class="row m-b-xs">
            <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <img src="/statics/img/web/footIco.jpg" />
            </div>
        </div>
    </div>
</div>
</body>
</html>

<script>
    $(function() {
        $("#result").jPages({
            containerID: "design-plan",
            previous: "上一页",
            next: "下一页",
            perPage: 12,
            scrollBrowse: false
        });
    });
</script>