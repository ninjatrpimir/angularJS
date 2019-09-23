<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Template</title>
        <link href="lib/dx16.1.5/Lib/css/dx.common.css" rel="stylesheet" type="text/css"/>
        <link href="lib/dx16.1.5/Lib/css/dx.light.css" rel="stylesheet" type="text/css"/>
        <link href="lib/dx16.1.5/Lib/css/dx.light.compact.css" rel="stylesheet" type="text/css"/>

        <!--    Third Party Libraries -->
        <script src="lib/jquery-2.1.3.min.js?id=114" type="text/javascript"></script>
        <script src="lib/jquery-ui-1.10.4.custom.min.js?id=114" type="text/javascript"></script>
        <script src="lib/angular1.3.15.min.js?id=114" type="text/javascript"></script>
        <script src="lib/angular-ui-router-0.2.13.js?id=114" type="text/javascript"></script>
        <script src="lib/dx16.1.5/Lib/js/jszip.js?id=114" type="text/javascript"></script>
        <script src="lib/dx16.1.5/Lib/js/dx.viz-web.js?id=114" type="text/javascript"></script>

        <!--    Angular config -->
        <script src="app.js?id=114" type="text/javascript"></script>
        <script src="routing.js?id=114" type="text/javascript"></script>

        <!--    Services -->
        <script src="services/svc_api.js?id=114" type="text/javascript"></script>

        <!--    Pages -->
        <script src="pages/welcome/welcome.js?id=114" type="text/javascript"></script>

    </head>

    <body ng-app="app" ng-controller="mainCtrl as main">

<!--        <header ng-if="showHeader" id="app-header">-->
<!--            <div id="logo-header" ui-sref="welcome"></div>-->
<!---->
<!--            <div id="header">-->
<!--                <div class="content">-->
<!--                    <div class="menu" dx-menu="dxMenu"></div>-->
<!--                    <div class="profileMenu" dx-menu="dxProfileMenu"></div>-->
<!--                    -->
<!--                </div>-->
<!--            </div>-->
<!--           -->
<!--            -->
<!--        </header>-->
<!---->
<!--        <div ng-if="showHeader" id="action-bar" style="">-->
<!--            <div id="action-bar-title">{{pageTitle}}<div class="action-bar-title-content">{{entityName}}</div></div>-->
<!--            <div id="buttons-bar">-->
<!--                <div ng-repeat="button in buttons" class="buttons-bar-button">-->
<!--                    <div dx-button="button"></div>-->
<!--                </div>-->
<!---->
<!--            </div>-->
<!--        </div>-->

<!--        <div ui-view class="root-ui-view"></div>-->

<!--    </div>-->

<!--    <div id="modal" ng-show="blockUI" class="animate-show">-->
<!--        <div id="modalBackground"></div>-->
<!--        <div id="modalContent">-->
<!--<!--            <div class="spinner">-->
<!--                <div class="cube1"></div>-->
<!--                <div class="cube2"></div>-->
<!--            </div>-->-->
<!--            <div class="spinner">-->
<!--                <div class="dot1"></div>-->
<!--                <div class="dot2"></div>-->
<!--            </div>-->
<!--            <div class="modal-msg">{{blockMsg}}</div>-->
<!--        </div>-->
<!--    </div>-->

<!--<q-toast></q-toast>-->
<!--<q-popup></q-popup>-->
</body>
</html>
