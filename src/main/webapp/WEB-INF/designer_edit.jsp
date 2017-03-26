<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="renderer" content="webkit">

    <title>设计师管理</title>

    <link href="/statics/css/bootstrap.min.css?v=3.4.0" rel="stylesheet">
    <link href="/statics/font-awesome/css/font-awesome.css?v=4.3.0" rel="stylesheet">

    <link href="/statics/css/animate.css" rel="stylesheet">
    <link href="/statics/css/style.css?v=2.2.0" rel="stylesheet">


    <!-- Mainly scripts -->
    <script src="/statics/js/jquery-2.1.1.min.js"></script>
    <script src="/statics/js/bootstrap.min.js?v=3.4.0"></script>
    <script src="/statics/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="/statics/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

    <!-- Custom and plugin javascript -->
    <script src="/statics/js/hplus.js?v=2.2.0"></script>
    <script src="/statics/js/plugins/pace/pace.min.js"></script>

    <!-- Data Tables -->
    <script src="/statics/js/plugins/dataTables/jquery.dataTables.js"></script>
    <script src="/statics/js/plugins/dataTables/dataTables.bootstrap.js"></script>

    <script src="/statics/js/designer/edit.js"></script>

</head>

<body class="fixed-navigation">
<div id="wrapper">
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav" id="side-menu">

                <li class="nav-header">

                    <div class="dropdown profile-element">
                            <span>
                                <img alt="image" class="img-circle" src="/statics/img/profile_small.jpg" />
                            </span>
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                                <span class="clear">
                                    <span class="block m-t-xs">
                                        <strong class="font-bold">Beaut-zihan</strong>
                                    </span>
                                    <span class="text-muted text-xs block">
                                        超级管理员<b class="caret"></b>
                                    </span>
                                </span>
                        </a>

                        <ul class="dropdown-menu animated fadeInRight m-t-xs">
                            <li><a href="">修改头像</a>
                            </li>
                            <li><a href="">个人资料</a>
                            </li>
                            <li><a href="">联系我们</a>
                            </li>
                            <li><a href="">信箱</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="login.jsp">安全退出</a>
                            </li>
                        </ul>
                    </div>
                    <div class="logo-element">
                        QY
                    </div>

                </li>

                <li>
                    <a href="/admin/plan/2">
                        <i class="fa fa-th-large"></i>
                        <span class="nav-label">方案案例</span>
                        <span class="fa arrow"></span>
                    </a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="/admin/plan/1">方案发布</a>
                        </li>

                        <li>
                            <a href="/admin/plan/2">方案管理</a>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="/admin/designer/2">
                        <i class="fa fa-th-large"></i>
                        <span class="nav-label">设计师</span>
                        <span class="fa arrow"></span>
                    </a>
                    <ul class="nav nav-second-level">
                        <li>
                            <a href="/admin/designer/1">设计师发布</a>
                        </li>

                        <li>
                            <a href="/admin/designer/2">设计师管理</a>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </nav>

    <div id="page-wrapper" class="gray-bg dashbard-1">
        <div class="row border-bottom">
            <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">

                <div class="navbar-header">
                    <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="../upload/index.html#"><i class="fa fa-bars"></i> </a>
                    <form role="search" class="navbar-form-custom">
                        <div class="form-group">
                            <input type="text" placeholder="请输入您需要查找的内容 …" class="form-control" name="top-search" id="top-search">
                        </div>
                    </form>
                </div>

                <ul class="nav navbar-top-links navbar-right">
                    <li>
                        <a href="login.jsp">
                            <i class="fa fa-sign-out"></i> 退出
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="col-lg-12 ibox float-e-margins">
                <div class="ibox-title">
                    <h5>编辑表格</h5>
                    <div class="ibox-tools">
                        <a class="collapse-link">
                            <i class="fa fa-chevron-up"></i>
                        </a>
                        <a class="close-link">
                            <i class="fa fa-times"></i>
                        </a>
                    </div>
                </div>

                <div class="ibox-content">
                    <table class="table table-striped table-bordered table-hover " id="designers_table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>序号</th>
                            <th>设计师</th>
                            <th>照片</th>
                        </tr>
                        </thead>

                        <tbody>
                        </tbody>

                    </table>
                    <div class="text-right">
                        <button id="updateBtn" class="btn btn-info " type="button" data-toggle="modal" data-target="#designer-editor"><i class="fa fa-paste"></i>&nbsp;编辑</button>
                        <button class="btn btn-danger" type="button" id="deleteBtn"><i class="fa fa-times"></i>&nbsp;删除</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <div class="pull-right">
                By：<a href="" target="_blank">jiarupc</a>
            </div>
            <div>
                <strong>Copyright</strong> QY &copy; 2016
            </div>
        </div>
    </div>

</div>

<!-- modal Window -->
<div class="row col-lg-12 modal inmodal" id="designer-editor" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content animated fadeIn">
            <div class="modal-header gray-bg">
                <form class="form-horizontal" action="/update/designer" method="post" enctype="multipart/form-data">

                    <div class="form-group">
                        <label class="col-sm-2 control-label">姓名</label>

                        <div class="col-sm-10">
                            <input id="name" name="name" type="text" placeholder="输入设计师姓名" class="form-control">
                        </div>
                    </div>

                    <div>
                        <label>
                            <input id="ID" name="ID" type="text" hidden/>
                        </label>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label">照片上传</label>

                        <div class="col-sm-10">
                            <input id="picPath" name="file" type="file" class="form-control">
                        </div>
                    </div>

                    <div class="modal-footer text-right">
                        <button class="btn btn-primary" type="submit"><i class="fa fa-check"></i>&nbsp;提交</button>
                        <button type="button" class="btn btn-white" data-dismiss="modal">关闭</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>

</body>

</html>

<script>
    $(document).ready(function () {
        <!--Page_Level Scripts-->
        /* Init DataTables */
        var oTable = $("#designers_table").dataTable();
    });
</script>
