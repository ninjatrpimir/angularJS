
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'pages/login/tmp_login.html',
                    controller: 'ctrl_login'
                })
                .state('welcome', {
                    url: '/welcome',
                    templateUrl: 'pages/welcome/welcome.html',
                    controller: 'ctrl_welcome',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state) {
                            console.log("welcome routing checkPermission");
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                $state.go("login");
                            });
                            svcUser.canAccessModuleResolve(deferred);
                            return deferredPromise;
                        }
                    }
                })

                // admin
                .state('admin', {
                    url: '/admin',
                    templateUrl: "pages/admin/tmp_admin.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.workflowList', {
                    url: '/workflow',
                    templateUrl: 'pages/admin/workflow/tmp_workflowList.html',
                    controller: 'ctrl_admin_workflowList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.workflow', {
                    url: '/workflow/:id',
                    templateUrl: 'pages/admin/workflow/tmp_workflow.html',
                    controller: 'ctrl_admin_workflow',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcWorkflow) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcWorkflow.data = data;
                            });

                            console.log($stateParams.id);
                            svcWorkflow.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.unitOfMeasureList', {
                    url: '/unitOfMeasure',
                    templateUrl: 'pages/admin/unitOfMeasure/tmp_unitOfMeasureList.html',
                    controller: 'ctrl_admin_unitOfMeasureList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.unitOfMeasure', {
                    url: '/unitOfMeasure/:id',
                    templateUrl: 'pages/admin/unitOfMeasure/tmp_unitOfMeasure.html',
                    controller: 'ctrl_admin_unitOfMeasure',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcUnitOfMeasure) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcUnitOfMeasure.data = data;
                            });

                            console.log("svcUnitOfMeasure getData:", $stateParams.id);
                            svcUnitOfMeasure.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.employee', {
                    url: '/employee/:employeeId',
                    templateUrl: 'pages/admin/employee/tmp_employee.html',
                    controller: 'ctrl_employee',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.employeeList', {
                    url: '/employee',
                    templateUrl: 'pages/admin/employee/tmp_employeeList.html',
                    controller: 'ctrl_employeeList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.office', {
                    url: '/office/:officeId',
                    templateUrl: 'pages/admin/office/tmp_office.html',
                    controller: 'ctrl_office',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.officeList', {
                    url: '/office',
                    templateUrl: 'pages/admin/office/tmp_officeList.html',
                    controller: 'ctrl_officeList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.logList', {
                    url: '/log',
                    templateUrl: 'pages/admin/log/tmp_logList.html',
                    controller: 'ctrl_logList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.role', {
                    url: '/role/:roleId',
                    templateUrl: 'pages/admin/role/tmp_role.html',
                    controller: 'ctrl_role',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.roleList', {
                    url: '/role',
                    templateUrl: 'pages/admin/role/tmp_roleList.html',
                    controller: 'ctrl_roleList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }

                    // bi
                })
                .state('bi', {
                    url: '/bi',
                    templateUrl: "pages/bi/tmp_bi.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.jobsDetails', {
                    url: '/jobs-details',
                    templateUrl: 'pages/bi/report_detalji_poslovi/report_detalji_poslovi.html',
                    controller: 'ctrl_report_detalji_poslovi',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.PMAnalysis', {
                    url: '/project-managers-analysis',
                    templateUrl: 'pages/bi/analiza_voditelji/analiza_voditelji.html',
                    controller: 'ctrl_analiza_voditelji',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.jobAnalysis', {
                    url: '/organization-analysis',
                    templateUrl: 'pages/bi/analiza_poslovi/analiza_poslovi.html',
                    controller: 'ctrl_analiza_poslovi',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.orgStatusAnalysis', {
                    url: '/organization-status-analysis',
                    templateUrl: 'pages/bi/analiza_organizacija_po_statusima/analiza_statusa_oraganizacija.html',
                    controller: 'ctrl_analiza_statusa_organizacija',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.orgTenderAnalysis', {
                    url: '/organization-tender-analysis',
                    templateUrl: 'pages/bi/analiza_ponuda/analiza_ponuda.html',
                    controller: 'ctrl_analiza_ponuda',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.projectAnalysis', {
                    url: '/project-analysis',
                    templateUrl: 'pages/bi/analiza_projekata/analiza_projekata.html',
                    controller: 'ctrl_analiza_projekata',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.invoiceAnalysis', {
                    url: '/invoice-analysis',
                    templateUrl: 'pages/bi/analiza_faktura/analiza_faktura.html',
                    controller: 'ctrl_analiza_faktura',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.customerSegments', {
                    url: '/customer-segments',
                    templateUrl: 'pages/bi/customer_segments/customer_segments.html',
                    controller: 'ctrl_customer_segments',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.cohort', {
                    url: '/cohort',
                    templateUrl: 'pages/bi/cohort/cohort.html',
                    controller: 'ctrl_cohort',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.crr', {
                    url: '/crr',
                    templateUrl: 'pages/bi/analiza_CRR/analiza_crr.html',
                    controller: 'ctrl_analiza_crr',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.departmentAnalysis', {
                    url: '/department-analysis',
                    templateUrl: 'pages/bi/analiza_odjela/analiza_odjela.html',
                    controller: 'ctrl_analiza_odjela',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.translatorAnalysis', {
                    url: '/translators-analysis',
                    templateUrl: 'pages/bi/analiza_prevoditelji/analiza_prevoditelji.html',
                    controller: 'ctrl_analiza_prevoditelji',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.inhouseTranslatorAnalysis', {
                    url: '/inhousetranslators-analysis',
                    templateUrl: 'pages/bi/analiza_zaposlenici/analiza_zaposlenici.html',
                    controller: 'ctrl_analiza_zaposlenici',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.CATAnalysis', {
                    url: '/cat-analysis',
                    templateUrl: 'pages/bi/analiza_alati/analiza_alati.html',
                    controller: 'ctrl_analiza_alati',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.YTDAnalysis', {
                    url: '/ytd-analysis',
                    templateUrl: 'pages/bi/analiza_ytd/analiza_ytd.html',
                    controller: 'ctrl_analiza_ytd',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.YTDAnalysis_old', {
                    url: '/ytd-analysis-old',
                    templateUrl: 'pages/bi/analiza_YTD_old/analiza_YTD.html',
                    controller: 'ctrl_analiza_YTD',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.costCorrelation', {
                    url: '/cost-correlation',
                    templateUrl: 'pages/bi/korelacija_promet_trosak/korelacija_promet_trosak.html',
                    controller: 'ctrl_korelacija_promet_trosak',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.marginCorrelation', {
                    url: '/margin-correlation',
                    templateUrl: 'pages/bi/korelacija_promet_marza/korelacija_promet_marza.html',
                    controller: 'ctrl_korelacija_promet_marza',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.translatorDetails', {
                    url: '/translator-details',
                    templateUrl: 'pages/bi/report_detalji_prevoditelji/report_detalji_prevoditelji.html',
                    controller: 'ctrl_report_detalji_prevoditelji',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.AdHoc', {
                    url: '/ad-hoc',
                    templateUrl: 'pages/bi/ad-hoc/ad-hoc.html',
                    controller: 'ctrl_adhoc',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.worklogAnalysis', {
                    url: '/worklog-analysis',
                    templateUrl: 'pages/bi/analiza_work_log/analiza_worklog.html',
                    controller: 'ctrl_analiza_worklog',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.contractAnalysis', {
                    url: '/contract-analysis',
                    templateUrl: 'pages/bi/analiza_ugovora/analiza_ugovora.html',
                    controller: 'ctrl_analiza_ugovora',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.taskAnalysis', {
                    url: '/task-analysis',
                    templateUrl: 'pages/bi/analiza_zadataka/analiza_zadataka.html',
                    controller: 'ctrl_analiza_zadataka',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('bi.questionnarieAnalysis', {
                    url: '/questionnarie-analysis',
                    templateUrl: 'pages/bi/analiza_anketa_organizacija/analiza_anketa_organizacija.html',
                    controller: 'ctrl_analiza_anketa_organizacija',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, BI_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })


                // šifrarnik



                .state('admin.codeBook', {
                    url: '/codeBook',
                    templateUrl: "pages/admin/codeBook/tmp_codeBook.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.brandList', {
                    url: '/brand',
                    templateUrl: 'pages/admin/codeBook/brand/tmp_brandList.html',
                    controller: 'ctrl_codeBook_brandList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.brand', {
                    url: '/brand/:brandId',
                    templateUrl: 'pages/admin/codeBook/brand/tmp_brand.html',
                    controller: 'ctrl_codeBook_brand',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcBrand) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (brand) {
                                svcBrand.brand = brand;
                            });

                            console.log($stateParams.brandId);
                            svcBrand.getBrand(deferred, $stateParams.brandId);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.codeBook.languageList', {
                    url: '/language',
                    templateUrl: 'pages/admin/codeBook/language/tmp_languageList.html',
                    controller: 'ctrl_codeBook_languageList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.language', {
                    url: '/language/:id',
                    templateUrl: 'pages/admin/codeBook/language/tmp_language.html',
                    controller: 'ctrl_codeBook_language',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            console.log("*checkPermission:");
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcLanguage) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                console.log("*getData:", data);
                                svcLanguage.data = data;
                            });
                            console.log("get dtaa:" + $stateParams.id);

                            svcLanguage.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }

                })
                .state('admin.codeBook.countryList', {
                    url: '/country',
                    templateUrl: 'pages/admin/codeBook/country/tmp_countryList.html',
                    controller: 'ctrl_codeBook_countryList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.country', {
                    url: '/country/:id',
                    templateUrl: 'pages/admin/codeBook/country/tmp_country.html',
                    controller: 'ctrl_codeBook_country',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcCountry) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcCountry.data = data;
                            });

                            svcCountry.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.codeBook.countyList', {
                    url: '/county',
                    templateUrl: 'pages/admin/codeBook/county/tmp_countyList.html',
                    controller: 'ctrl_codeBook_countyList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.county', {
                    url: '/county/:id',
                    templateUrl: 'pages/admin/codeBook/county/tmp_county.html',
                    controller: 'ctrl_codeBook_county',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcCounty) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcCounty.data = data;
                            });

                            svcCounty.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.codeBook.cityList', {
                    url: '/city',
                    templateUrl: 'pages/admin/codeBook/city/tmp_cityList.html',
                    controller: 'ctrl_codeBook_cityList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.city', {
                    url: '/city/:id',
                    templateUrl: 'pages/admin/codeBook/city/tmp_city.html',
                    controller: 'ctrl_codeBook_city',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcCity) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcCity.data = data;
                            });

                            svcCity.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.codeBook.paramsList', {
                    url: '/params',
                    templateUrl: 'pages/admin/codeBook/params/tmp_paramsList.html',
                    controller: 'ctrl_admin_codeBook_paramsList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.params', {
                    url: '/params/:id',
                    templateUrl: 'pages/admin/codeBook/params/tmp_params.html',
                    controller: 'ctrl_admin_codeBook_params',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcParams) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcParams.data = data;
                            });

                            svcParams.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.codeBook.employeeFunctionParams', {
                    url: '/function_params/',
                    templateUrl: "pages/admin/codeBook/employeeFunctionParams/tmp_employeeFunctionParams.html",
                    controller: "ctrl_admin_codeBook_employeeFunctionParams",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcEmployeeFunctionParams) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcEmployeeFunctionParams.data = data;
                            });

                            //console.log("route getData:",$stateParams.id);
                            svcEmployeeFunctionParams.getList(deferred);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.orientationProgramList', {
                    url: '/orientationProgram',
                    templateUrl: 'pages/admin/codeBook/orientationProgram/tmp_orientationProgramList.html',
                    controller: 'ctrl_admin_codeBook_orientationProgramList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.orientationProgram', {
                    url: '/orientationProgram/:id',
                    templateUrl: 'pages/admin/codeBook/orientationProgram/tmp_orientationProgram.html',
                    controller: 'ctrl_admin_codeBook_orientationProgram',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcOrientationProgram) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcOrientationProgram.data = data;
                            });

                            svcOrientationProgram.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.codeBook.tenderDetails', {
                    url: '/tender_details/',
                    templateUrl: "pages/admin/codeBook/tenderDetails/tmp_tenderDetails.html",
                    controller: "ctrl_admin_codeBook_tenderDetails",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcTenderDetails) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcTenderDetails.data = data;
                            });

                            //console.log("route getData:",$stateParams.id);
                            svcTenderDetails.getList(deferred);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.specializationList', {
                    url: '/specialization',
                    templateUrl: 'pages/admin/codeBook/specialization/tmp_specializationList.html',
                    controller: 'ctrl_admin_codeBook_specializationList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.specialization', {
                    url: '/specialization/:id',
                    templateUrl: 'pages/admin/codeBook/specialization/tmp_specialization.html',
                    controller: 'ctrl_admin_codeBook_specialization',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcSpecialization) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcSpecialization.data = data;
                            });

                            svcSpecialization.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.codeBook.taskTypeList', {
                    url: '/taskType',
                    templateUrl: 'pages/admin/codeBook/taskType/tmp_taskTypeList.html',
                    controller: 'ctrl_admin_codeBook_taskTypeList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.taskType', {
                    url: '/taskType/:id',
                    templateUrl: 'pages/admin/codeBook/taskType/tmp_taskType.html',
                    controller: 'ctrl_admin_codeBook_taskType',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcTaskType) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcTaskType.data = data;
                            });

                            svcTaskType.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.codeBook.currencyExchangeList', {
                    url: '/currencyExchange',
                    templateUrl: 'pages/admin/codeBook/currencyExchange/tmp_currencyExchangeList.html',
                    controller: 'ctrl_admin_codeBook_currencyExchangeList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.currencyExchange', {
                    url: '/currencyExchange/:id',
                    templateUrl: 'pages/admin/codeBook/currencyExchange/tmp_currencyExchange.html',
                    controller: 'ctrl_admin_codeBook_currencyExchange',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcCurrencyExchange) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcCurrencyExchange.data = data;
                            });

                            svcCurrencyExchange.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.codeBook.timeManagementList', {
                    url: '/timeManagement',
                    templateUrl: 'pages/admin/codeBook/timeManagement/tmp_timeManagementList.html',
                    controller: 'ctrl_admin_codeBook_timeManagementList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.timeManagement', {
                    url: '/timeManagement/:id',
                    templateUrl: 'pages/admin/codeBook/timeManagement/tmp_timeManagement.html',
                    controller: 'ctrl_admin_codeBook_timeManagement',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcTimeManagement) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcTimeManagement.data = data;
                            });

                            svcTimeManagement.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('admin.codeBook.questionsForOrganizationsList', {
                    url: '/questionsForOrganizations',
                    templateUrl: 'pages/admin/codeBook/questionsForOrganizations/tmp_questionsForOrganizationsList.html',
                    controller: 'ctrl_admin_codeBook_questionsForOrganizationsList',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('admin.codeBook.questionsForOrganizations', {
                    url: '/questionsForOrganizations/:id',
                    templateUrl: 'pages/admin/codeBook/questionsForOrganizations/tmp_questionsForOrganizations.html',
                    controller: 'ctrl_admin_codeBook_questionsForOrganizations',
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ADMIN_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcQuestionsForOrganizations) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcQuestionsForOrganizations.data = data;
                            });

                            svcQuestionsForOrganizations.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })

                // Sales
                .state('sales', {
                    url: '/sales',
                    templateUrl: "pages/sales/tmp_sales.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, SALES_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('sales.organizationList', {
                    url: '/organization',
                    templateUrl: "pages/sales/organization/tmp_organizationList.html",
                    controller: "ctrl_sales_organizationList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, SALES_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('sales.organization', {
                    url: '/organization/:id',
                    templateUrl: "pages/sales/organization/tmp_organization.html",
                    controller: "ctrl_sales_organization",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, SALES_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcOrganization) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcOrganization.data = data;
                            });

                            console.log($stateParams.id);
                            svcOrganization.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })
                .state('sales.organization.info', {
                    url: '/info',
                    templateUrl: "pages/sales/organization/info/tmp_organizationInfo.html",
                    controller: "ctrl_sales_organization_info"
                })
                .state('sales.organization.basic', {
                    url: '/basic',
                    templateUrl: "pages/sales/organization/basic/tmp_organizationBasic.html",
                    controller: "ctrl_sales_organization_basic"
                })
                .state('sales.organization.grid', {
                    url: '/grid',
                    templateUrl: "pages/sales/organization/grid/tmp_organizationGrid.html",
                    controller: "ctrl_sales_organization_grid"
                })
                .state('sales.organization.priceListSummarys', {
                    url: '/extracts',
                    templateUrl: "pages/sales/organization/priceListSummarys/tmp_organizationPriceListSummarys.html",
                    controller: "ctrl_sales_organization_priceListSummary"
                })
                .state('sales.organization.tenders', {
                    url: '/tenders',
                    templateUrl: "pages/sales/organization/tenders/tmp_organizationTenders.html",
                    controller: "ctrl_sales_organization_tenders"
                })
                .state('sales.organization.projects', {
                    url: '/projects',
                    templateUrl: "pages/sales/organization/projects/tmp_organizationProjects.html",
                    controller: "ctrl_sales_organization_projects"
                })
                .state('sales.organization.invoices', {
                    url: '/invoices',
                    templateUrl: "pages/sales/organization/invoices/tmp_organizationInvoices.html",
                    controller: "ctrl_sales_organization_invoices"
                })
                .state('sales.organization.priceList', {
                    url: '/priceList',
                    templateUrl: "pages/sales/organization/priceList/tmp_organizationPriceList.html",
                    controller: "ctrl_sales_organization_priceList"
                })
                .state('sales.organization.communication', {
                    url: '/communication',
                    templateUrl: "pages/sales/organization/communication/tmp_organizationCommunication.html",
                    controller: "ctrl_sales_organization_communication"
                })
                .state('sales.organization.history', {
                    url: '/history',
                    templateUrl: "pages/sales/organization/history/tmp_organizationHistory.html",
                    controller: "ctrl_sales_organization_history"
                })
                .state('sales.organization.potential', {
                    url: '/potential',
                    templateUrl: "pages/sales/organization/potential/tmp_organizationPotential.html",
                    controller: "ctrl_sales_organization_potential"
                })
                .state('sales.organization.other', {
                    url: '/other',
                    templateUrl: "pages/sales/organization/other/tmp_organizationOther.html",
                    controller: "ctrl_sales_organization_other",
                    resolve: {
                        getData: function ($q, $stateParams, svcOrganization) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcOrganization.tenderDetails = data;

                            });

                            console.log($stateParams.id);
                            svcOrganization.getTenderDetails(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('sales.tenderList', {
                    url: '/tender',
                    templateUrl: "pages/sales/tender/tmp_tenderList.html",
                    controller: "ctrl_sales_tenderList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, SALES_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('sales.tender', {
                    url: '/tender/:id',
                    templateUrl: "pages/sales/tender/tmp_tender.html",
                    controller: "ctrl_sales_tender",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, SALES_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcTender) {

                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcTender.data = data;
                            });

                            console.log($stateParams.id);
                            svcTender.getData(deferred, $stateParams.id);
                            return deferredPromise;

                        }
                    }
                })
                .state('sales.tender.basic', {
                    url: '/basic',
                    templateUrl: "pages/sales/tender/basic/tmp_tenderBasic.html",
                    controller: "ctrl_sales_tender_basic"
                })
                .state('sales.tender.info', {
                    url: '/info',
                    templateUrl: "pages/sales/tender/info/tmp_tenderInfo.html",
                    controller: "ctrl_sales_tender_info"
                })
                .state('sales.priceList', {
                    url: '/price-list/:id',
                    templateUrl: "pages/sales/priceList/tmp_orgPriceList.html",
                    controller: "ctrl_sales_orgPriceList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, SALES_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcOrgPriceList) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcOrgPriceList.data = data;
                            });

                            //console.log("route getData:",$stateParams.id);
                            svcOrgPriceList.getData(deferred, -1);
                            return deferredPromise;
                        }
                    }
                })
                .state('sales.priceListSummaryList', {
                    url: '/priceListSummary',
                    templateUrl: "pages/sales/priceListSummary/tmp_priceListSummaryList.html",
                    controller: "ctrl_sales_priceListSummaryList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, SALES_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('sales.priceListSummary', {
                    url: '/priceListSummary/:id',
                    templateUrl: "pages/sales/priceListSummary/tmp_priceListSummary.html",
                    controller: "ctrl_sales_priceListSummary",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, SALES_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcPriceListSummary) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                console.log(data);
                                svcPriceListSummary.data = data;
                            });
                            console.log("tsmetko id", $stateParams.id);
                            svcPriceListSummary.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })
                .state('sales.grid', {
                    url: '/grid',
                    templateUrl: "pages/sales/grid/tmp_grid.html",
                    controller: "ctrl_sales_grid",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, SALES_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcGrid) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcGrid.data = data;
                            });

                            //console.log("route getData:",$stateParams.id);
                            svcGrid.getList(deferred, true);
                            return deferredPromise;
                        }
                    }
                })

                //vendor
                .state('vendor', {
                    url: '/vendor',
                    templateUrl: "pages/vendor/tmp_vendor.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VENDOR_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('vendor.vendorList', {
                    url: '/vendor/vendorList',
                    templateUrl: "pages/vendor/vendor/tmp_vendorList.html",
                    controller: "ctrl_vendor_vendorList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VENDOR_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('vendor.vendor', {
                    url: '/vendor/:id',
                    templateUrl: "pages/vendor/vendor/tmp_vendor.html",
                    controller: "ctrl_vendor_vendor",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                console.log("vendor");
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VENDOR_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcVendor, svcUser, svcQUI, $state) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
//                                svcVendor.data = data;
//                                console.log('vv', data.user_data);
//                                console.log('vv', svcUser.getUserID());
//                                console.log('vv', data.user_data.id == svcUser.getUserID());
                                if (data.user_data.active == 1) {
                                    if (data.user_data.id == svcUser.getUserID()) {
                                        svcVendor.data = data;
                                    } else {
                                        svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                        $state.go("vendor.vendorList");
                                    }
                                } else {
                                    svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                    $state.go("vendor.vendorList");
                                }
                            });

                            console.log("route getData:", $stateParams.id);
                            svcVendor.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })
                .state('vendor.vendor.basic', {
                    url: '/basic',
                    templateUrl: "pages/vendor/vendor/basic/tmp_vendorVendorBasic.html",
                    controller: "ctrl_vendor_vendor_basic",
                    resolve: {
                        test: function () {
                            console.log("statse vendor vendor basic");
                            return true;
                        }
                    }
                })
                .state('vendor.vendorTaskList', {
                    url: '/tasks/vendorTaskList',
                    templateUrl: "pages/vendor/tasks/tmp_vendorTaskList.html",
                    controller: "ctrl_vendor_taskList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VENDOR_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('vendor.tasks', {
                    url: '/tasks/:id',
                    templateUrl: "pages/vendor/tasks/tmp_vendorTask.html",
                    controller: "ctrl_vendor_tasks",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                console.log("vendor");
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VENDOR_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcTask, $filter, svcUser, svcQUI, $state) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                if (data.id_user == svcUser.getUserID()) {
                                    svcTask.data = data;
                                } else {
                                    svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                    $state.go("vendor.vendorTaskList");
                                }
                            });

                            console.log($stateParams.id);
                            svcTask.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })

                //VM
                .state('vm', {
                    url: '/vm',
                    templateUrl: "pages/vm/tmp_vm.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VM_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('vm.vendorList', {
                    url: '/vendor',
                    templateUrl: "pages/vm/vendor/tmp_vendorList.html",
                    controller: "ctrl_vm_vendorList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                console.log("vendor_Ist");
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VM_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('vm.vendor', {
                    url: '/vendor/:id',
                    templateUrl: "pages/vm/vendor/tmp_vendor.html",
                    controller: "ctrl_vm_vendor",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                console.log("vendor");
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VM_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcVendor) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcVendor.data = data;
                            });

                            console.log("route getData:", $stateParams.id);
                            svcVendor.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })
                .state('vm.vendor.basic', {
                    url: '/basic',
                    templateUrl: "pages/vm/vendor/basic/tmp_vendorBasic.html",
                    controller: "ctrl_vm_vendor_basic"
                })
                .state('vm.vendor.invoiceList', {
                    url: '/invoiceList',
                    templateUrl: "pages/vm/vendor/invoice/tmp_vmVendorInvoiceList.html",
                    controller: "ctrl_vmVendorInvoiceList"
                })
                .state('vm.vendor.invoice', {
                    url: '/invoice/:idInvoice',
                    templateUrl: "pages/vm/vendor/invoice/tmp_vmVendorInvoice.html",
                    controller: "ctrl_vmVendorInvoice",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VENDOR_INVOICE_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcVendorInvoice) {
                            console.log("state ", $stateParams);
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                console.log("state ", data);

                                svcVendorInvoice.data = data;
                            });
                            svcVendorInvoice.getData(deferred, $stateParams.idInvoice);
                            return deferredPromise;
                        }
                    }
                })
                .state('vm.vendor.contract', {
                    url: '/contract',
                    templateUrl: "pages/vm/vendor/contract/tmp_vendorContract.html",
                    controller: "ctrl_vm_vendor_contract"
                })
                .state('vm.vendor.history', {
                    url: '/history',
                    templateUrl: "pages/vm/vendor/history/tmp_vendorHistory.html",
                    controller: "ctrl_vm_vendor_history"
                })
                .state('vm.vendor.priceList', {
                    url: '/priceList',
                    templateUrl: "pages/vm/vendor/priceList/tmp_vendorPriceList.html",
                    controller: "ctrl_vm_vendor_price_list"
                })
                .state('vm.searchCompetences', {
                    url: '/search_competences/',
                    templateUrl: "pages/vm/searchCompetences/tmp_searchCompetences.html",
                    controller: "ctrl_vm_search_competences",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VM_MODULE_ID);
                            return deferredPromise;
                        },
//                        getData: function ($q, $stateParams, svcTenderDetails) {
//                            var deferred = $q.defer();
//                            var deferredPromise = deferred.promise;
//                            deferredPromise.then(function (data) {
//                                svcTenderDetails.data = data;
//                            });
//
//                            //console.log("route getData:",$stateParams.id);
//                            svcTenderDetails.getList(deferred);
//                            return deferredPromise;
//                        }
                    }
                })

                //HR
                .state('hr', {
                    url: '/hr',
                    templateUrl: "pages/hr/tmp_hr.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, HUMAN_RESOURCES_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('hr.employeeList', {
                    url: '/employee',
                    templateUrl: "pages/hr/employee/tmp_employeeList.html",
                    controller: "ctrl_hr_employeeList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, HUMAN_RESOURCES_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('hr.employee', {
                    url: '/employee/:employeeId',
                    templateUrl: "pages/hr/employee/tmp_employee.html",
                    controller: "ctrl_hr_employee",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            console.log('checkPermission');
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, HUMAN_RESOURCES_MODULE_ID);
                            return deferredPromise;
                            console.log($state);
                        },
                        getData: function ($q, $stateParams, svcEmployeeHR, $filter, svcUser, svcQUI, $state) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {

//                        console.log('data', data);

                                if (svcUser.canEditModule()) {
                                    console.log('svcUser.canEditModule()', svcUser.canEditModule());
                                    svcEmployeeHR.data = data;
                                } else if (svcUser.canViewModule()) {
                                    console.log('svcUser.canViewModule()', svcUser.canViewModule());
                                    if (data.user_data.id == svcUser.getUserID()) {
                                        svcEmployeeHR.data = data;
                                    } else {
                                        svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                        $state.go("hr.employeeList");
                                    }

                                } else {
                                    svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                    $state.go("hr.employeeList");
                                }

//                        svcEmployeeHR.data = data;
                            });

                            svcEmployeeHR.getData(deferred, $stateParams.employeeId);
                            return deferredPromise;
                        }
                    }
                })
                .state('hr.employee.basic', {
                    url: '/basic',
                    templateUrl: "pages/hr/employee/basic/tmp_employeeBasic.html",
                    controller: "ctrl_hr_employee_basic"
                })
                .state('hr.employee.expanded', {
                    url: '/expandedData',
                    templateUrl: "pages/hr/employee/expandedEmployeeData/tmp_expandedEmployeeData.html",
                    controller: "ctrl_hr_employee_expanded_data"
                })
                .state('hr.employee.education', {
                    url: '/education',
                    templateUrl: "pages/hr/employee/education/tmp_employeeEducation.html",
                    controller: "ctrl_hr_employee_education"
                })
                .state('hr.employee.orientationProgram', {
                    url: '/orientationProgram',
                    templateUrl: "pages/hr/employee/orientationProgram/tmp_employeeOrientationProgram.html",
                    controller: "ctrl_hr_employee_orientation_program"
                })
                .state('hr.employee.targets', {
                    url: '/targets',
                    templateUrl: "pages/hr/employee/targets/tmp_employeeTargets.html",
                    controller: "ctrl_hr_employee_targets"
                })
                .state('hr.employee.evaluation', {
                    url: '/evaluation',
                    templateUrl: "pages/hr/employee/evaluation/tmp_employeeEvaluation.html",
                    controller: "ctrl_hr_employee_evaluation"
                })
                .state('hr.educationList', {
                    url: '/education',
                    templateUrl: "pages/hr/educations/tmp_educationList.html",
                    controller: "ctrl_hr_educationList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, HUMAN_RESOURCES_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('hr.education', {
                    url: '/education/:id',
                    templateUrl: "pages/hr/educations/tmp_education.html",
                    controller: "ctrl_hr_education",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            console.log('checkPermission');
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, HUMAN_RESOURCES_MODULE_ID);
                            return deferredPromise;
                            console.log($state);
                        },
                        getData: function ($q, $stateParams, svcEducation, $filter, svcUser, svcQUI, $state) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                console.log(data);

                                svcEducation.data = data;
//                        if (data.id_user == svcUser.getUserID()) {
//                            svcEducation.data = data;
//                        } else {
//                            svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
//                            $state.go("translator.translatorTaskList");
//                        }
                            });

                            svcEducation.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })
                .state('hr.evaluationList', {
                    url: '/evaluation',
                    templateUrl: "pages/hr/evaluation/tmp_evaluationList.html",
                    controller: "ctrl_hr_evaluationList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, HUMAN_RESOURCES_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('hr.evaluation', {
                    url: '/evaluation/:id',
                    templateUrl: "pages/hr/evaluation/tmp_evaluation.html",
                    controller: "ctrl_hr_evaluation",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            console.log('checkPermission');
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, HUMAN_RESOURCES_MODULE_ID);
                            return deferredPromise;
                            console.log($state);
                        },
                        getData: function ($q, $stateParams, svcEvaluation, $filter, svcUser, svcQUI, $state) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                console.log(data);

                                svcEvaluation.data = data;
//                        if (data.id_user == svcUser.getUserID()) {
//                            svcEvaluation.data = data;
//                        } else {
//                            svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
//                            $state.go("translator.translatorTaskList");
//                        }
                            });

                            svcEvaluation.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })

                // PM
                .state('pm', {
                    url: '/pm',
                    templateUrl: "pages/pm/tmp_pm.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, PM_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('pm.projectList', {
                    url: '/project',
                    templateUrl: "pages/pm/project/tmp_projectList.html",
                    controller: "ctrl_pm_projectList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, PM_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('pm.project', {
                    url: '/project/:id',
                    templateUrl: "pages/pm/project/tmp_project.html",
                    controller: "ctrl_pm_project",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, PM_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcProject) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcProject.data = data;
                            });

                            console.log($stateParams.id);
                            svcProject.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })
                .state('pm.project.info', {
                    url: '/info',
                    templateUrl: "pages/pm/project/info/tmp_projectInfo.html",
                    controller: "ctrl_pm_project_info"
                })
                .state('pm.project.basic', {
                    url: '/basic',
                    templateUrl: "pages/pm/project/basic/tmp_projectBasic.html",
                    controller: "ctrl_pm_project_basic"
                })
                .state('pm.project.tasks', {
                    url: '/tasks',
                    templateUrl: "pages/pm/project/tasks/tmp_projectTasks.html",
                    controller: "ctrl_pm_project_tasks"
                })
                .state('pm.project.history', {
                    url: '/history',
                    templateUrl: "pages/pm/project/history/tmp_projectHistory.html",
                    controller: "ctrl_pm_project_history"

                })
                .state('pm.taskList', {
                    url: '/task',
                    templateUrl: "pages/pm/task/tmp_taskList.html",
                    controller: "ctrl_pm_taskList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, PM_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('pm.task', {
                    url: '/task/:id',
                    templateUrl: "pages/pm/task/tmp_task.html",
                    controller: "ctrl_pm_task",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, PM_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcTask) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                svcTask.data = data;
                            });

                            console.log($stateParams.id);
                            svcTask.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })

                //inhouse Translators
                .state('translator', {
                    url: '/translator',
                    templateUrl: "pages/inhouseTranslators/tmp_inhouseTranslators.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, INHOUSE_TRANSLATORS_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('translator.translatorProjectList', {
                    url: '/projects/projectList',
                    templateUrl: "pages/inhouseTranslators/projects/tmp_inhouseTranslatorProjectList.html",
                    controller: "ctrl_inhouseTranslators_projects_projectList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, INHOUSE_TRANSLATORS_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('translator.project', {
                    url: '/projects/project/:id',
                    templateUrl: "pages/inhouseTranslators/projects/tmp_inhouseTranslatorProject.html",
                    controller: "ctrl_inhouseTranslators_projects_project",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, INHOUSE_TRANSLATORS_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcProject, $filter, svcUser, svcQUI, $state) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                console.log('svcProject data', data);

                                var num = 0;
                                angular.forEach(data.tasks, function (item) {
                                    if (item.id_user == svcUser.getUserID()) {
                                        num++;
                                    }
                                });

                                if (num > 0) {
                                    svcProject.data = data;
                                } else {
                                    svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                    $state.go("translator.translatorProjectList");
                                }

                            });

                            console.log($stateParams.id);
                            svcProject.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })
                .state('translator.translatorTaskList', {
                    url: '/tasks/taskList',
                    templateUrl: "pages/inhouseTranslators/tasks/tmp_inhouseTranslatorTaskList.html",
                    controller: "ctrl_inhouseTranslators_tasks_taskList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, INHOUSE_TRANSLATORS_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('translator.task', {
                    url: '/tasks/task/:id',
                    templateUrl: "pages/inhouseTranslators/tasks/tmp_inhouseTranslatorTask.html",
                    controller: "ctrl_inhouseTranslators_tasks_task",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, INHOUSE_TRANSLATORS_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcTask, $filter, svcUser, svcQUI, $state) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {
                                if (data.id_user == svcUser.getUserID()) {
                                    svcTask.data = data;
                                } else {
                                    svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                    $state.go("translator.translatorTaskList");
                                }
                            });

                            console.log($stateParams.id);
                            svcTask.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })


                .state('invoice', {
                    url: '/invoice',
                    templateUrl: "pages/invoice/tmp_invoice.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, INVOICE_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('invoice.invoiceList', {
                    url: '/invoice',
                    templateUrl: "pages/invoice/invoice/tmp_invoiceList.html",
                    controller: "ctrl_invoiceList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, INVOICE_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('invoice.invoice', {
                    url: '/invoice/:id',
                    templateUrl: "pages/invoice/invoice/tmp_invoice.html",
                    controller: "ctrl_invoice",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, INVOICE_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcInvoice) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {

                                svcInvoice.data = data;
                            });


                            svcInvoice.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }
                })

                //worklog
                .state('workLog', {
                    url: '/workLog',
                    templateUrl: "pages/worklog/tmp_wl.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, WORKLOG_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('workLog.workLog', {
                    url: '/workLog/:id',
                    templateUrl: "pages/worklog/workLog/tmp_workLog.html",
                    controller: "ctrl_workLog_workLog",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, WORKLOG_MODULE_ID);
                            return deferredPromise;
                        },
//                        getData: function ($q, $stateParams, svcWorkLog) {
//                            var deferred = $q.defer();
//                            var deferredPromise = deferred.promise;
//                            deferredPromise.then(function (data) {
//                                svcWorkLog.data = data;
//                            });
//
//                            console.log($stateParams.id);
//                            svcWorkLog.getData(deferred, $stateParams.id);
//                            return deferredPromise;
//                        }
                    }
                })

                .state('vendorInvoice', {
                    url: '/vendorInvoice',
                    templateUrl: "pages/vendorInvoice/tmp_vendorInvoice.html",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VENDOR_INVOICE_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('vendorInvoice.vendorInvoiceList', {
                    url: '/vendorInvoice',
                    templateUrl: "pages/vendorInvoice/vendorInvoice/tmp_vendorInvoiceList.html",
                    controller: "ctrl_vendorInvoiceList",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VENDOR_INVOICE_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('vendorInvoice.vendorInvoice', {
                    url: '/vendorInvoice/:id',
                    templateUrl: "pages/vendorInvoice/vendorInvoice/tmp_vendorInvoice.html",
                    controller: "ctrl_vendorInvoice",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, VENDOR_INVOICE_MODULE_ID);
                            return deferredPromise;
                        },
                        getData: function ($q, $stateParams, svcVendorInvoice) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function (data) {

                                svcVendorInvoice.data = data;
                            });


                            svcVendorInvoice.getData(deferred, $stateParams.id);
                            return deferredPromise;
                        }
                    }

                })
               
        //organizations
                .state('organizationProfileQuestionnaire', {
                    url: '/questionnaire/:id',
                    templateUrl: "pages/organizations/questionnaire/tmp_organizationQuestionnaire.html",
                    controller: "ctrl_organizations_questionnaire",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ORGANIZATION_MODULE_ID);
                            return deferredPromise;
                        }
                    }
                })
                .state('changeClientUserSettings', {
                    url: '/changeSettings/:id',
                    templateUrl: "pages/organizations/changeClientUserSettings/tmp_changeClientUserSettings.html",
                    controller: "ctrl_organizations_change_password",
                    resolve: {
                        checkPermission: function ($q, svcUser, $state, svcQUI) {
                            var deferred = $q.defer();
                            var deferredPromise = deferred.promise;
                            deferredPromise.then(function () {
                            }, function () {
                                svcQUI.showToastWarning(Globalize.localize("notAuthorized"));
                                $state.go("welcome");
                            });
                            svcUser.canAccessModuleResolve(deferred, ORGANIZATION_MODULE_ID);
                            return deferredPromise;
                        },
//                        getData: function ($q, $stateParams, svcOrganization, svcUser) {
//                            var org_user_id = svcUser.getUserID();
//                            var deferred = $q.defer();
//                            var deferredUser = deferred.promise;
//                            deferredUser.then(function (userData) {
//                                var org_user_type_id_ext = userData.user_type_id_ext;
//                                
//                                var deferred = $q.defer();
//                                var deferredPromise = deferred.promise;
//                                deferredPromise.then(function (data) {
//                                    svcOrganization.data = data;
//                                    console.log(svcOrganization.data);
//                                });
//                                svcOrganization.getData(deferred, org_user_type_id_ext);
//                                return deferredPromise;
//                            });
//                            svcUser.getData(deferred, org_user_id);
//                        }
                    }
                })
        
        ;

        $urlRouterProvider.otherwise('/welcome');
    }]);