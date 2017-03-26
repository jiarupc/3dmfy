<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="renderer" content="webkit">

    <title>3d商城</title>

    <link href="/statics/css/Common/bootstrap.min.css" rel="stylesheet">
    <link href="/statics/css/Common/font-awesome.css" rel="stylesheet">

    <link href="/statics/css/Common/animate.css" rel="stylesheet">
    <link href="/statics/css/Common/style.css" rel="stylesheet">

    <!-- Mainly scripts -->
    <script src="/statics/js/Common/jquery-3.1.1.js"></script>
    <script src="/statics/js/Common/bootstrap.min.js"></script>


</head>

<body class="gray-bg">

<div class="middle-box text-center loginscreen animated fadeInDown">
    <div>
        <h1 class="logo-name">QY</h1>
        <h3>欢迎进入 QY 后台管理</h3>

        <form class="m-t" role="form" action="/admin/login" method="post">
            <div class="form-group">
                <input type="text" name="username" class="form-control" placeholder="用户名" required="required">
            </div>
            <div class="form-group">
                <input type="password" name="password" class="form-control" placeholder="密码" required="required">
            </div>
            <button type="submit" class="btn btn-primary block full-width m-b">登 录</button>


            <p class="text-muted text-center">
                <a href="#"><small>忘记密码了？</small></a>
            </p>

        </form>
    </div>
</div>


</body>

</html>
