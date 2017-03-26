<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--<%@ page isELIgnored="false" %>--%>
<html>
<head>
    <meta charset="UTF-8">
    <title>${plan.name}</title>
    <style>
        .fullScreen {
            min-width: 99vw;
            min-height: 97vh;
            margin: 0 0 0 0;
            padding: 0 0 0 0;
            text-align: center;
        }
    </style>
</head>

<body style="background-color: #000000">
<div class="fullScreen">
    <object type="application/x-shockwave-flash" data="${plan.planPath}" class="fullScreen">
        <%--<param name="movie" value="1.swf"/>--%>
        <param name="allowFullScreen" value="true" />
        <param name="FlashVars" value="xml=vcastr.xml" />
    </object>
</div>
</body>
</html>