/**
 * Created by miha on 01.04.2015 10:30.
 */
var app = angular.module("app", ['ui.router', 'dx', 'angular-loading-bar', 'ngStorage', 'angular-jwt', 'dragDrop']);

var dragDrop = angular.module('dragDrop', []).value('uiSortableConfig', {});

app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

        var param = function (obj) {
            var query = '', name, value, fullSubName, subName, subValue, innerObj, i;

            for (name in obj) {
                value = obj[name];

                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                }

            }
            return query.length ? query.substr(0, query.length - 1) : query;
        };

//     Override $http service's default transformRequest
//    $httpProvider.defaults.transformRequest = [function (data) {
//        return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
//    }];

    }]);


app.controller("mainCtrl", ["$rootScope", "$scope", "$log", '$window', 'svcQUI', 'svcLogin', '$q', '$state', 'svcUser', 'svcStateHelper',
    function ($rootScope, $scope, $log, $window, svcQUI, svcLogin, $q, $state, svcUser, svcStateHelper) {

        Globalize.culture(svcUser.getUserLanguage());
        console.log("svcUser.getUserLanguage()", svcUser.getUserLanguage());

        $rootScope.app_version = "build 24.03.2017 v1";

        function initMenu() {
            $scope.dxMenu = {
                items: [
                    {
                        text: 'Sales',
                        moduleId: SALES_MODULE_ID,
                        items: [
                            {text: Globalize.localize("organization"), state: "sales.organizationList"},
                            {text: Globalize.localize("tender"), state: "sales.tenderList"},
                            {text: Globalize.localize("priceList"), state: "sales.priceList"},
                            {text: Globalize.localize("priceListSummary"), state: "sales.priceListSummaryList"},
                            {text: Globalize.localize("grid"), state: "sales.grid"},
                        ],
                    },
                    {
                        text: "PM",
                        moduleId: PM_MODULE_ID,
                        items: [
                            {text: Globalize.localize("projects"), state: "pm.projectList"},
//                            {text: Globalize.localize("tasks"), state: "pm.taskList"}
                        ]
                    },
                    {
                        text: "VM",
                        moduleId: VM_MODULE_ID,
                        items: [
                            {text: Globalize.localize("vendor"), state: "vm.vendorList"},
                            {text: Globalize.localize("searchCompetences"), state: "vm.searchCompetences"}
                        ]
                    },
                    {
                        text: "HR",
                        moduleId: HUMAN_RESOURCES_MODULE_ID,
                        items: [
                            {text: Globalize.localize("employee"), state: "hr.employeeList"},
                            {text: Globalize.localize("education"), state: "hr.educationList"},
//                            {text: Globalize.localize("evaluation"), state: "hr.evaluationList"}
                        ]
                    },
                    {
                        text: "BI",
                        moduleId: BI_MODULE_ID,
                        items: [
//                            {
//                                text: Globalize.localize("reports"),
//                                items: [
//                                    {text: Globalize.localize("jobDetails"), state: "bi.jobsDetails"},
//                                    {text: Globalize.localize("translatorDetails"), state: "bi.translatorDetails"}
//                                ]
//                            },

                            {text: Globalize.localize("worklog"), state: "bi.worklogAnalysis"},
                            {text: 'BDM',
                                items: [
                                    {text: Globalize.localize("organizationAnalysis"), state: "bi.jobAnalysis"},
                                    {text: Globalize.localize("organizationStatusAnalysis"), state: "bi.orgStatusAnalysis"},
                                    {text: Globalize.localize("contractAnalysis"), state: "bi.contractAnalysis"},
                                    {text: Globalize.localize("customerSegments"), state: "bi.customerSegments"},
                                    {text: Globalize.localize("cohortAnalysis"), state: "bi.cohort"},
                                    {text: Globalize.localize("CRRAnalysis"), state: "bi.crr"},
                                    {text: Globalize.localize("YTDAnalysis"), state: "bi.YTDAnalysis"}
                                ]
                            },
                            {text: 'Operations',
                                items: [
                                    {text: Globalize.localize("jobAnalysis"), state: "bi.projectAnalysis"},
                                    {text: Globalize.localize("PMAnalysis"), state: "bi.PMAnalysis"},
                                    {text: Globalize.localize("tenderAnalysis"), state: "bi.orgTenderAnalysis"},
                                    {text: Globalize.localize("DepartmentAnalysis"), state: "bi.departmentAnalysis"},
                                    {text: Globalize.localize("taskAnalysis"), state: "bi.taskAnalysis"},
                                    {text: Globalize.localize("questionnarieAnalysis"), state: "bi.questionnarieAnalysis"}
                                ]
                            },
                            {text: 'HR / VM',
                                items: [
                                    {text: Globalize.localize("translatorAnalysis"), state: "bi.translatorAnalysis"},
                                    {text: Globalize.localize("inhouseTranslatorAnalysis"), state: "bi.inhouseTranslatorAnalysis"}
                                ]
                            },
                            {text: Globalize.localize("finance"),
                                items: [
                                    {text: Globalize.localize("invoiceAnalysis"), state: "bi.invoiceAnalysis"}
                                ]
                            },
//                                    {text: Globalize.localize("CATAnalysis"), state: "bi.CATAnalysis"},
//                                    {text: Globalize.localize("YTDAnalysis"), state: "bi.YTDAnalysis_old"},
//                                    {text: Globalize.localize("costCorrelation"), state: "bi.costCorrelation"},
//                                    {text: Globalize.localize("marginCorrelation"), state: "bi.marginCorrelation"}

                            {text: Globalize.localize("AdHoc"), state: "bi.AdHoc"}

                        ]
                    },
                    {
                        text: Globalize.localize("menu_invoicing"),
                        moduleId: INVOICE_MODULE_ID,
                        items: [
                            {text: Globalize.localize("invoice"), state: "invoice.invoiceList"},
//                            {text: Globalize.localize("open_projects"), state: "vendor.vendorTaskList"}
                        ]
                    },
                    {
                        text: Globalize.localize("administration"),
                        moduleId: ADMIN_MODULE_ID,
                        items: [
                            {text: Globalize.localize("codeBook"),
                                items: [
                                    {text: Globalize.localize("params"), state: "admin.codeBook.paramsList"},
                                    {text: Globalize.localize("functionParams"), state: "admin.codeBook.employeeFunctionParams"},
                                    {text: Globalize.localize("orientationProgram"), state: "admin.codeBook.orientationProgramList"},
                                    {text: Globalize.localize("tenderDetails"), state: "admin.codeBook.tenderDetails"},
                                    {text: Globalize.localize("taskType"), state: "admin.codeBook.taskTypeList"},
                                    {text: Globalize.localize("specialization"), state: "admin.codeBook.specializationList"},
                                    {text: Globalize.localize("language"), state: "admin.codeBook.languageList"},
                                    {text: Globalize.localize("brand"), state: "admin.codeBook.brandList"},
                                    {text: Globalize.localize("country"), state: "admin.codeBook.countryList"},
                                    {text: Globalize.localize("county"), state: "admin.codeBook.countyList"},
                                    {text: Globalize.localize("city"), state: "admin.codeBook.cityList"},
                                    {text: Globalize.localize("currencyExchangeLists"), state: "admin.codeBook.currencyExchangeList"},
                                    {text: Globalize.localize("timeManagement"), state: "admin.codeBook.timeManagementList"},
                                    {text: Globalize.localize("questionsForOrganizationAnalysis"), state: "admin.codeBook.questionsForOrganizationsList"}
                                ]
                            },
                            {text: Globalize.localize("workflow"), state: "admin.workflowList"},
                            {text: Globalize.localize("unitOfMeasure"), state: "admin.unitOfMeasureList"},
//                            {text: Globalize.localize("employee"), state: "admin.employeeList"},
                            {text: Globalize.localize("office"), state: "admin.officeList"},
                            {text: Globalize.localize("role"), state: "admin.roleList"},
//                            {text: Globalize.localize("logs"), state: "admin.logList"}
                        ]
                    },
//                    {
//                        text: Globalize.localize("myData"),
//                        moduleId: VENDOR_MODULE_ID,
//                        items: [
//                            {text: Globalize.localize("basicInfo"), state: "vendor.vendorList"},
//                            {text: Globalize.localize("tasks"), state: "vendor.vendorTaskList"}
//                        ]
//                    },
                    {
                        text: Globalize.localize("myProfile"), state: "vendor.vendorList",
                        moduleId: VENDOR_MODULE_ID
                    },
                    {
                        text: Globalize.localize("myTasks"), state: "vendor.vendorTaskList",
                        moduleId: VENDOR_MODULE_ID
                    },
                    {
                        text: Globalize.localize("projects"), state: "translator.translatorProjectList",
                        moduleId: INHOUSE_TRANSLATORS_MODULE_ID
                    },
                    {
                        text: Globalize.localize("myTasks"), state: "translator.translatorTaskList",
                        moduleId: INHOUSE_TRANSLATORS_MODULE_ID
                    },
                    {
                        text: Globalize.localize("worklog"), state: "workLog.workLog",
                        moduleId: WORKLOG_MODULE_ID
                    },
//                    {
//                        text: Globalize.localize("questionnaire"), state: "organizationProfileQuestionnaire",
//                        moduleId: ORGANIZATION_MODULE_ID
//                    },
                    {
                        text: Globalize.localize("menu_invoicing"),
                        moduleId: VENDOR_MODULE_ID,
                        items: [
                            {text: Globalize.localize("invoice"), state: "vendorInvoice.vendorInvoiceList"},
//                            {text: Globalize.localize("open_projects"), state: "vendor.vendorTaskList"}
                        ]
                    },
                ],
                onItemClick: function (event) {

                    if (angular.isDefined(event.itemData.state)) {
                        $state.go(event.itemData.state);
                    }

                }

            };

            if (svcUser.getUserTypeId() == 2) {
                $scope.dxProfileMenu = {
                    items: [
                        {
                            text: svcUser.getUserName(),
                            items: [
                                {text: Globalize.localize("logout"), action: "logout"},
                                {text: Globalize.localize("userAccountSettings"), state: "changeClientUserSettings", moduleId: ORGANIZATION_MODULE_ID}
                            ]
                        }

                    ],
                    onItemClick: function (data) {

                        if (angular.isDefined(data.itemData.action)) {
                            if (data.itemData.action == "logout") {
                                logout();
                            }
                        }
                        console.log(data);
                        if (angular.isDefined(data.itemData.state)) {
                            $state.go(data.itemData.state);
                        }

                    }

                };
            } 
            else {
                $scope.dxProfileMenu = {
                    items: [
                        {
                            text: svcUser.getUserName(),
                            items: [
                                {text: Globalize.localize("logout"), action: "logout"}
                            ]
                        }

                    ],
                    onItemClick: function (data) {

                        if (angular.isDefined(data.itemData.action)) {
                            if (data.itemData.action == "logout") {
                                logout();
                            }
                        }

                    }

                };
            }
        }
        initMenu();





        // strings
        $rootScope.localizeStrings = function () {
            localizeVariables();
            $scope.str_administration = Globalize.localize("administration");
            $scope.str_employee = Globalize.localize("employee");
            $scope.str_office = Globalize.localize("office");
            $scope.str_logout = Globalize.localize("logout");
            initMenu();
            //console.log("localizeStrings: " + $scope.str_employee);
        };

        // check user token
        if (angular.isUndefined(svcUser.getToken())) {
            Globalize.culture(DEFAULT_LANGUAGE);
            $rootScope.localizeStrings();
            $state.go('login');
        } else {
            var deferredTokenVerify = $q.defer();
            deferredTokenVerify.promise.then(function () {
            });
            //$rootScope.userName = svcUser.getUserName();
            $scope.dxProfileMenu.items[0].text = svcUser.getUserName();
            Globalize.culture(svcUser.getUserLanguage());
            $rootScope.localizeStrings();
            svcLogin.tokenVerify(deferredTokenVerify);
        }

        // user logout
        function logout() {

            svcQUI.showPopupQuestion(Globalize.localize("areYouSureLogout"),
                    Globalize.localize("logout"),
                    function () {
                        var deferred = $q.defer();
                        deferred.promise.then(function () {
                            $scope.userName = "";
                            $state.go('login');
                        });
                        svcLogin.logout(deferred);
                    });


        }

        // set user name
        $rootScope.setUserName = function (userName) {
            $scope.dxProfileMenu.items[0].text = userName;
        };

        // set permissions for menu
        $rootScope.setMenuPermissions = function () {
            angular.forEach($scope.dxMenu.items, function (menuItem) {
                //console.log("canAccess " + menuItem.moduleId, svcUser.canAccessModule(menuItem.moduleId));
                menuItem.visible = svcUser.canAccessModule(menuItem.moduleId);
            });
        };

        $rootScope.setMenuPermissions();

        // buttons setter
        $rootScope.setButtons = function (buttons) {
            $scope.buttons = buttons;
        };

        // ui blocker
        $scope.blockUI = false;
        $scope.blockMsg = "";

        $rootScope.blockUI = function (msg) {
            $scope.blockMsg = msg;
            $scope.blockUI = true;
        };

        $rootScope.unblockUI = function () {
            $scope.blockMsg = "";
            $scope.blockUI = false;
        };

        $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams) {
                    console.log('requestCounter $stateChangeStart', toState.url);
                    //svcStateHelper.saveLastState(fromState, fromParams);
                    svcQUI.blockUI(Globalize.localize("pleaseWait"));
                });

        // on every router state change, clear page title
        $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    console.log('requestCounter $stateChangeSuccess', toState, toParams);
                    $rootScope.currentModuleId = svcUser.currentModuleId;
                    if (toState.name != 'login')
                        svcQUI.showHeader();

                    svcQUI.onRouteChanged(fromState, fromParams);

                    svcQUI.unblockUI();
                });

        // svcQUI methods
        //$rootScope.showToastSuccess = function (message, displayTime) {
        //    $scope.showToastSuccess(message, displayTime);
        //};
        //
        //$rootScope.showToastInfo = function (message, displayTime) {
        //    $scope.showToastInfo(message, displayTime);
        //};
        //
        //$rootScope.showToastWarning = function (message, displayTime) {
        //    $scope.showToastWarning(message, displayTime);
        //};
        //
        //$rootScope.showToastError = function (message, displayTime) {
        //    $scope.showToastError(message, displayTime);
        //};

        $rootScope.showPopup = function (content, title, okFunction, closeOnOutsideClick, fullscreen, height, width) {
            console.log("errr content", content);
            console.log("errr title", title);

            $scope.showPopup(content, title, okFunction, closeOnOutsideClick, fullscreen, height, width);
        };

        $rootScope.showPopupQuestion = function (content, title, confirmFunction, declineFunction, fullscreen, height, width) {
            $scope.showPopupQuestion(content, title, confirmFunction, declineFunction, fullscreen, height, width);
        };

        $log.info("Angular application started!");
        //console.log($localStorage.token);
    }
]);
