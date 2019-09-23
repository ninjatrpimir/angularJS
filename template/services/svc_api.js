/**
 * Created by miha on 03.04.2015 10:11.
 */

app.service('svcApi', ['$http', 'svcQUI', '$localStorage', '$state',
    function ($http, svcQUI, $localStorage, $state) {

        // --------- CRUD -----------------
        this.requestCounter = 0;
        var self = this;
        
        this.create = function (entityName, entityObject) {
            this.requestCounter++;
//            console.log("requestCounter cre", this.requestCounter);
             svcQUI.blockUI(Globalize.localize("savingData"));
            return $http.post('api/' + entityName + "/save?token=" + $localStorage.token, {object: entityObject})
                    .success(successHandler)
                    .error(serverErrorHandler)
        };

        this.read = function (entityName, id) {
            this.requestCounter++;
//            console.log("requestCounter read", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
            return $http.post('api/' + entityName + "/get/" + id + "?token=" + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };
        
        this.readPost = function (entityName, arrayData, col ) {
            this.requestCounter++;
//            console.log("requestCounter readPost", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
            if (angular.isDefined(col)) {
                col = '/' + col;
            } else {
                col = '';
            }
           
            return $http.post('api/' + entityName + "/post" + col + "?token=" + $localStorage.token, {object: arrayData})
                    .success(successHandler)
                    .error(serverErrorHandler)
        };

        //filters = [{column :"columnName",value:"columnValue" }, {column :"columnName",value:"columnValue"}, ...];  
        this.readList = function (entityName) {
            this.requestCounter++;
//            console.log("requestCounter readList", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
//             filters = {"columns": [{"group_name":"jezici" },{group_name :"cat_alati"} , {value_en :"cat_alati"}], "operator": "OR"};
//            if(angular.isUndefined(filters))filters = [];
//, {object: filters}
            return $http.post('api/' + entityName + "/get?token=" + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };

        this.getLList = function (entityName) {
            this.requestCounter++;
//            console.log("requestCounter getlll", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
            return $http.post('api/' + entityName + "/getl?token=" + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };

        this.update = function (entityName, entityObject) {
            this.requestCounter++;
//            console.log("requestCounter update", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("savingData"));
            console.log("update", entityName, entityObject);
            return $http.post('api/' + entityName + "/save?token=" + $localStorage.token, {object: entityObject})
                    .success(successHandler)
                    .error(serverErrorHandler)
        };

        this.delete = function (entityName, id) {
            this.requestCounter++;
//            console.log("requestCounter dele", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("savingData"));
            return $http.post('api/' + entityName + "/delete/" + id + "?token=" + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };

        this.generatePDF = function (entityName, id) {
           
            var win = window.open('api/' + entityName + "/pdf/" + id + "?token=" + $localStorage.token);
        };
        
       
        
        this.generatePDFStorno = function (entityName, id) {
           
            var win = window.open('api/' + entityName + "/pdf_storno/" + id + "?token=" + $localStorage.token);
        };

        this.permissions = function () {
            this.requestCounter++;
//            console.log("requestCounter per", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
            return $http.post('api/role/permissions?token=' + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };

        this.getFilteredList = function (entityName, filter1, filter2) {
            this.requestCounter++;
//            console.log("requestCounter getflis", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
            if (angular.isDefined(filter1)) {
                filter1 = '/' + filter1;
            } else {
                filter1 = '';
            }
            if (angular.isDefined(filter2)) {
                filter2 = '/' + filter2;
            } else {
                filter2 = '';
            }
            return $http.post('api/' + entityName + '/get' + filter1 + filter2 + '?token=' + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };

        this.getFilteredLList = function (entityName, filter1, filter2, columnName, columnValue) {
            this.requestCounter++;
//            console.log("requestCounter getfll", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
            var whereCondition = '';
            if (angular.isDefined(filter1)) {
                filter1 = '/' + filter1;
            } else {
                filter1 = '';
            }
            if (angular.isDefined(filter2)) {
                filter2 = '/' + filter2;
            } else {
                filter2 = '';
            }
            
            if (angular.isDefined(columnName) && angular.isDefined(columnValue)) {
                whereCondition = '/' + columnName + '/' + columnValue;
            } 
            
            return $http.post('api/' + entityName + '/getl' + filter1 + filter2 + whereCondition+ '?token=' + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };
        
        this.getRangedLList = function (entityName, columnName, dateFrom, dateTo) {
            this.requestCounter++;
//            console.log("requestCounter getrange", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
            if (angular.isDefined(dateFrom)) {
                dateFrom = '/' + dateFrom;
            } else {
                dateFrom = '';
            }
            if (angular.isDefined(dateTo)) {
                dateTo = '/' + dateTo;
            } else {
                dateTo = '';
            }
            
            if (angular.isDefined(columnName)) {
                columnName = '/' + columnName;
            } else {
                columnName = '';
            }
            return $http.post('api/' + entityName + '/getl/-1' +columnName+ dateFrom + dateTo + '?token=' + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };
        
        this.getRangedFilteredLList = function (entityName, columnName, dateFrom, dateTo, secColumnName, secColumnValue) {
            this.requestCounter++;
//            console.log("requestCounter getrange", this.requestCounter);
            var secCondition = "";
            svcQUI.blockUI(Globalize.localize("gettingData"));
            if (angular.isDefined(dateFrom)) {
                dateFrom = '/' + dateFrom;
            } else {
                dateFrom = '';
            }
            if (angular.isDefined(dateTo)) {
                dateTo = '/' + dateTo;
            } else {
                dateTo = '';
            }
            
            if (angular.isDefined(columnName)) {
                columnName = '/' + columnName;
            } else {
                columnName = '';
            }
            
            if (angular.isDefined(secColumnName) && angular.isDefined(secColumnValue)) {
                secCondition = '/' + secColumnName + '/' +secColumnValue ;
            } 
            
            return $http.post('api/' + entityName + '/getl/-1' +columnName+ dateFrom + dateTo + secCondition +'?token=' + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };
        
        this.getOrganizationProject = function (entityName, id, invoiceCountry) {
            this.requestCounter++;
//            console.log("requestCounter getOrgProj", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
            if (angular.isDefined(invoiceCountry)) {
                invoiceCountry = '/' + invoiceCountry;
            } else {
                invoiceCountry = '';
            }
             return $http.post('api/' + entityName + "/invoice/" + id + invoiceCountry+"?token=" + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };
        this.getInvoiceReadyTaskByVendor = function (entityName, id) {
            this.requestCounter++;
//            console.log("requestCounter getOrgProj", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
           
             return $http.post('api/' + entityName + "/vendor_invoice/" + id +"?token=" + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };
        
        this.getProjectsByTaskUser = function (entityName, idUser, param1, param2, param3, param4) {
            this.requestCounter++;
//            console.log("requestCounter getOrgProj", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
            var filterString ="";
            if (angular.isDefined(param1)) {
                filterString += '/' + param1;
                if (angular.isDefined(param2)) {
                    filterString += '/' + param2;
                    if (angular.isDefined(param3)) {
                        filterString += '/' + param3;
                        if (angular.isDefined(param4)) {
                            filterString += '/' + param4;
                        }
                    }
                }
            } 
            return $http.post('api/' + entityName + "/user_task/" + idUser + filterString+ "?token=" + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };
        
        this.sendEmail = function (entityName, projectTaskId, userId) {
            this.requestCounter++;
           
            svcQUI.blockUI(Globalize.localize("sendingEmail"));
            
            return $http.post('api/' + entityName + "/mail/" + projectTaskId +"/"+userId+ "?token=" + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler)
        };
        
        this.resetPass = function (entityName, userData) {
            this.requestCounter++;
           
            svcQUI.blockUI(Globalize.localize("resetingPassword"));
            
            return $http.post('api/' + entityName + "/password_reset?token=" + $localStorage.token, {object: userData})
                    .success(successHandler)
                    .error(serverErrorHandler)
        };
        
        // ------------ Login/Logout --------------
        this.login = function (userData) {
            return $http.post('api/user/login', {object: userData})
                    .error(serverErrorHandler);
        };

        this.logout = function () {
            return $http.post('api/user/logout?token=' + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler);
        };

        this.getPermissions = function () {
          
            this.requestCounter++;
//            console.log("requestCounter getpre", this.requestCounter);
            svcQUI.blockUI(Globalize.localize("gettingData"));
            return $http.post('api/role/permissions?token=' + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler);
        };

        this.tokenVerify = function () {
//            this.requestCounter++;
//            svcQUI.blockUI(Globalize.localize("gettingData"));
            return $http.post('api/token/verify?token=' + $localStorage.token)
                    .success(successHandler)
                    .error(serverErrorHandler);
        };


        // ---------------------------
        function successHandler(result) {
//            console.log("requestCounter succes", self.requestCounter);
           
            if(self.requestCounter > 0){
                self.requestCounter--;
            }
            if(self.requestCounter == 0){
                svcQUI.unblockUI();
            }

            if (!result.success) {
                svcQUI.showPopupError(result.message);
            }
        }

        function serverErrorHandler(data, status) {
            svcQUI.unblockUI();
            self.requestCounter = 0;
            switch (status) {
                case 401:
                    //svcQUI.showToastError(Globalize.localize("sessionExpired"));
                    $state.go('login');
                    delete $localStorage.token;
                    break;
                case 404:
                    svcQUI.showPopup(Globalize.localize("pathNotFound"), Globalize.localize("error"),
                            function () {
                                $state.go('welcome');
                            });
                    break;
                default:
                    svcQUI.showPopup(Globalize.localize("internalServerError"), Globalize.localize("error"));
            }
        }

    }]);
