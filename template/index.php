<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!--<title>Ciklopea ERP</title>-->
        <title>Template</title>
        <!--        <link rel="shortcut icon" type="image/png" href="res/assets/favicon.ico"/>-->

        <link rel="shortcut icon" href="favicon.png"  type="image/png"/>
        <link rel="icon" href="favicon.png"  type="image/png"/>

        <!--        <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Oxygen:400,300,700%7CSquada+One' type='text/css' media='all'/>
                <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900'  type='text/css' media='all'>-->

        <!--    Styles -->
        <link href="res/css/BQ.css?id=114" rel="stylesheet" type="text/css"/>
        <link href="res/css/vizElements.css?id=114" rel="stylesheet" type="text/css"/>

        <!--<link href="res/css/dx.common.css?id=114" rel="stylesheet" type="text/css"/>-->
        <!--<link href="res/css/dx.light.css?id=114" rel="stylesheet" type="text/css"/>-->
        <link href="lib/dx16.1.5/Lib/css/dx.common.css" rel="stylesheet" type="text/css"/>
        <link href="lib/dx16.1.5/Lib/css/dx.light.css" rel="stylesheet" type="text/css"/>
        <link href="lib/dx16.1.5/Lib/css/dx.light.compact.css" rel="stylesheet" type="text/css"/>
        
        
        <!--<link href="res/css/ciklopea_dx.css?id=114" rel="stylesheet" type="text/css"/>-->
        <link href="res/css/dx.custom.css?id=114" rel="stylesheet" type="text/css"/>
        <link href="res/css/main.css?id=114" rel="stylesheet" type="text/css"/>
        <link href="res/css/q-framework.css?id=114" rel="stylesheet" type="text/css"/>
        <link href="res/css/loading-bar.css?id=114" rel="stylesheet" type="text/css"/>
        <link href="res/css/jquery.gridster.css?id=114" rel="stylesheet" type="text/css"/>
        <link href="res/css/gridsterdemo.css?id=114" rel="stylesheet" type="text/css"/>

        <!--    Localization -->
        <script src="lib/globalize0.1.1.min.js?id=114" type="text/javascript"></script>
        <script src="localization/en-US.js?id=114" type="text/javascript"></script>
        <script src="localization/hr-HR.js?id=114" type="text/javascript"></script>
        <script src="localization/Lt-sr-SP.js?id=114" type="text/javascript"></script>
        
        <!--    Constants -->
        <script src="framework/variables.js?id=114" type="text/javascript"></script>

        <!--    Third Party Libraries -->
        <script src="lib/moment.js?id=114" type="text/javascript"></script>
        <script src="lib/accounting.js?id=114" type="text/javascript"></script>
        <script src="lib/fileSaver.min.js?id=114" type="text/javascript"></script>
        <script src="lib/papaParse.min.js?id=114" type="text/javascript"></script>
        <script src="lib/jquery-2.1.3.min.js?id=114" type="text/javascript"></script>
        <script src="lib/jquery-ui-1.10.4.custom.min.js?id=114" type="text/javascript"></script>
        <script src="lib/angular1.3.15.min.js?id=114" type="text/javascript"></script>
        <script src="lib/angular-animate1.3.15.min.js?id=114" type="text/javascript"></script>
        <script src="lib/angular-sanitize1.3.15.min.js?id=114" type="text/javascript"></script>
        <script src="lib/ngStorage.min.js?id=114" type="text/javascript"></script>
        <script src="lib/angular-jwt.js?id=114" type="text/javascript"></script>
        <script src="lib/loading-bar.js?id=114" type="text/javascript"></script>
        <script src="lib/angular-ui-router-0.2.13.js?id=114" type="text/javascript"></script>
<!--        <script src="lib/dx15.1.3/dx.chartjs.js?id=114" type="text/javascript"></script>
        <script src="lib/dx15.1.3/dx.webappjs.js?id=114" type="text/javascript"></script>-->
        <script src="lib/jquery.gridster.with-extras.min.js?id=114" type="text/javascript"></script>
        <!--<script src="lib/jszip.min.js?id=114" type="text/javascript"></script>-->
             
        <script src="lib/dx16.1.5/Lib/js/jszip.js?id=114" type="text/javascript"></script>
        <script src="lib/dx16.1.5/Lib/js/dx.viz-web.js?id=114" type="text/javascript"></script>
        <!--<script type="text/javascript" src="https://cdn3.devexpress.com/jslib/16.2.3/js/dx.viz-web.js?id=114"></script>-->

        <!--    Angular config -->
        <script src="app.js?id=114" type="text/javascript"></script>
        <script src="routing.js?id=114" type="text/javascript"></script>

        <!--    Services -->
        <script src="services/svc_bi.js?id=114" type="text/javascript"></script>
        <script src="services/svc_api.js?id=114" type="text/javascript"></script>
        <script src="services/svc_QUI.js?id=114" type="text/javascript"></script>
        <script src="services/svc_user.js?id=114" type="text/javascript"></script>
        <script src="services/svc_login.js?id=114" type="text/javascript"></script>
        <script src="services/svc_stateHelper.js?id=114" type="text/javascript"></script>
        <script src="services/admin/svc_office.js?id=114" type="text/javascript"></script>
        <script src="services/admin/svc_employee.js?id=114" type="text/javascript"></script>
        <script src="services/admin/svc_workflow.js?id=114" type="text/javascript"></script>
        <script src="services/admin/svc_role.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_country.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_county.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_brand.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_city.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_params.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_employeeFunctionParams.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_orientationProgram.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_specialization.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_taskType.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_currency.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_tenderDetails.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_timeManagement.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_questionsForOrganizations.js?id=114" type="text/javascript"></script>
        <script src="services/admin/svc_unitOfMeasure.js?id=114" type="text/javascript"></script>
        <script src="services/admin/svc_log.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_language.js?id=114" type="text/javascript"></script>
        <script src="services/sales/svc_organization.js?id=114" type="text/javascript"></script>
        <script src="services/sales/svc_organizationPriceList.js?id=114" type="text/javascript"></script>
        <script src="services/sales/svc_tender.js?id=114" type="text/javascript"></script>
        <script src="services/sales/svc_grid.js?id=114" type="text/javascript"></script>
        <script src="services/sales/svc_priceListSummary.js?id=114" type="text/javascript"></script>
        <script src="services/pm/svc_project.js?id=114" type="text/javascript"></script>
        <script src="services/pm/svc_task.js?id=114" type="text/javascript"></script>
        <script src="services/bi/svc_checkboxId.js?id=114" type="text/javascript"></script>
        <script src="services/vm/svc_vendor.js?id=114" type="text/javascript"></script>
        <script src="services/admin/svc_currencyList.js?id=114" type="text/javascript"></script>
        <script src="services/admin/codeBook/svc_currencyExchange.js?id=114" type="text/javascript"></script>
        <script src="services/invoice/svc_invoice.js?id=114" type="text/javascript"></script>
        <script src="services/hr/svc_employee.js?id=114" type="text/javascript"></script>
        <script src="services/hr/svc_education.js?id=114" type="text/javascript"></script>
        <script src="services/hr/svc_evaluation.js?id=114" type="text/javascript"></script>
        <script src="services/worklog/svc_workLog.js?id=114" type="text/javascript"></script>
        <script src="services/vendorInvoice/svc_vendorInvoice.js?id=114" type="text/javascript"></script>
        <script src="services/organizations/svc_organizationQuestionnaire.js?id=114" type="text/javascript"></script>
        
        <!--    Q Framework -->
        <script src="framework/Events.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/BQ_charting.js?id=114" type="text/javascript"></script>
        <script src="framework/q-framework/CommonArrayManipulation.js?id=114" type="text/javascript"></script>
        <script src="framework/q-framework/selectOnFocus/dir_qSelectOnFocus.js?id=114" type="text/javascript"></script>
        <script src="framework/q-framework/checkbox-list/dir_qCheckboxList.js?id=114" type="text/javascript"></script>
        <script src="framework/q-framework/popup/dir_qPopup.js?id=114" type="text/javascript"></script>
        <script src="framework/q-framework/toast/dir_qToast.js?id=114" type="text/javascript"></script>
        <script src="framework/q-framework/tooltip/dir_qTooltip.js?id=114" type="text/javascript"></script>
        <script src="framework/q-framework/header/dir_qHeader.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/variables_bi.js?id=114" type="text/javascript"></script>
        <script src="framework/ng-common.js?id=114" type="text/javascript"></script>

        <script src="framework/bi/checkbox/dir_input.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/dragDropBorder/dir_dragDropHighlightContainer.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/dropdown/dir_selectbq.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/selectOnFocus/dir_qSelectOnFocus.js?id=114" type="text/javascript"></script>

        <script src="framework/filters/fltr_qFilter.js?id=114" type="text/javascript"></script>

        <!--        DIRECTIVES-->
        <script src="framework/q-framework/directives/dir_lastElement.js?id=114" type="text/javascript"></script>
        <script src="framework/directives/addBrandPopup/dir_addBrandPopup.js?id=114" type="text/javascript"></script>
        <script src="framework/directives/listOrderChanger/dir_listOrderChanger.js?id=114" type="text/javascript"></script>
        <script src="framework/directives/changeStatusPopup/dir_changeStatusPopup.js?id=114" type="text/javascript"></script>
        <script src="framework/directives/createUser/createUser.js?id=114" type="text/javascript"></script>
        <script src="framework/directives/taskList/dir_qTaskList.js?id=114" type="text/javascript"></script>
        <script src="framework/directives/orgTaskList/dir_orgTaskList.js?id=114" type="text/javascript"></script>
        <script src="framework/directives/gridCalculator/dir_gridCalculator.js?id=114" type="text/javascript"></script>
        <script src="framework/directives/taskListForPriceListSummary/dir_taskListForSummary.js?id=114" type="text/javascript"></script>
        <!--    Pages -->
        <script src="pages/login/ctrl_login.js?id=114" type="text/javascript"></script>
        <script src="pages/welcome/welcome.js?id=114" type="text/javascript"></script>


        <!--  Admin  -->
        <script src="pages/admin/workflow/ctrl_workflowList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/workflow/ctrl_workflow.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/unitOfMeasure/ctrl_unitOfMeasureList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/unitOfMeasure/ctrl_unitOfMeasure.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/employee/ctrl_employee.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/employee/ctrl_employeeList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/office/ctrl_office.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/office/ctrl_officeList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/role/ctrl_role.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/role/ctrl_roleList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/brand/ctrl_brandList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/brand/ctrl_brand.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/country/ctrl_countryList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/country/ctrl_country.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/county/ctrl_countyList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/county/ctrl_county.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/city/ctrl_cityList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/city/ctrl_city.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/specialization/ctrl_specialization.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/specialization/ctrl_specializationList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/params/ctrl_paramsList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/params/ctrl_params.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/employeeFunctionParams/ctrl_employeeFunctionParams.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/orientationProgram/ctrl_orientationProgramList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/orientationProgram/ctrl_orientationProgram.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/taskType/ctrl_taskTypeList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/taskType/ctrl_taskType.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/log/ctrl_logList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/language/ctrl_languageList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/language/ctrl_language.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/currencyExchange/ctrl_currencyExchangeList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/currencyExchange/ctrl_currencyExchange.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/tenderDetails/ctrl_tenderDetails.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/timeManagement/ctrl_timeManagement.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/timeManagement/ctrl_timeManagementList.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/questionsForOrganizations/ctrl_questionsForOrganizations.js?id=114" type="text/javascript"></script>
        <script src="pages/admin/codeBook/questionsForOrganizations/ctrl_questionsForOrganizationsList.js?id=114" type="text/javascript"></script>
        
        <!--   BI   -->
        <script src="pages/bi/report_detalji_poslovi/report_detalji_poslovi.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/report_detalji_prevoditelji/report_detalji_prevoditelji.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_voditelji/analiza_voditelji.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_organizacija_po_statusima/analiza_statusa_oraganizacija.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_ponuda/analiza_ponuda.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_poslovi/analiza_poslovi.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_prevoditelji/analiza_prevoditelji.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_alati/analiza_alati.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_YTD_old/analiza_YTD.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_ytd/analiza_ytd.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/korelacija_promet_marza/korelacija_promet_marza.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/korelacija_promet_trosak/korelacija_promet_trosak.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/ad-hoc/ad-hoc.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/common.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/CommonArrayManipulation.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/CommonArrayManipulationBQ.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/listsDefinitions.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/defaultObjects.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/palettes.js?id=114" type="text/javascript"></script>
        <script src="framework/bi/utility.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_projekata/analiza_projekata.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_faktura/analiza_faktura.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/customer_segments/customer_segments.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/cohort/cohort.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_CRR/analiza_crr.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_odjela/analiza_odjela.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_work_log/analiza_worklog.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_ugovora/analiza_ugovora.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_zadataka/analiza_zadataka.js?id=114" type="text/javascript"></script>
        
        <script src="pages/bi/ad-hoc/report/visualize/dir_qReportVisualize.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/ad-hoc/report/visualize/dir_qQueryFilters.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/ad-hoc/report/visualize/dir_qLocalFilters.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/ad-hoc/tabs/qVisualizationTabs/dir_qVisualizationTabs.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/ad-hoc/dir_dragDrop.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/ad-hoc/charts/qChart/dir_qChart.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/ad-hoc/charts/qTable/dir_qTable.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/ad-hoc/charts/dir_colorPicker.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/ad-hoc/charts/dir_colorPickerHex.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/ad-hoc/charts/dir_dragDropReport.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_zaposlenici/analiza_zaposlenici.js?id=114" type="text/javascript"></script>
        <script src="pages/bi/analiza_anketa_organizacija/analiza_anketa_organizacija.js?id=114" type="text/javascript"></script>

        <!--  Sales  -->
        <script src="pages/sales/organization/ctrl_organizationList.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/ctrl_organization.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/info/ctrl_organizationInfo.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/basic/ctrl_organizationBasic.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/grid/ctrl_organizationGrid.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/priceListSummarys/ctrl_organizationPriceListSummarys.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/tenders/ctrl_organizationTenders.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/projects/ctrl_organizationProjects.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/invoices/ctrl_organizationInvoices.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/priceList/ctrl_organizationPriceList.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/communication/ctrl_organizationCommunication.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/history/ctrl_organizationHistory.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/potential/ctrl_organizationPotential.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/organization/other/ctrl_organizationOther.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/tender/ctrl_tenderList.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/tender/ctrl_tender.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/tender/basic/ctrl_tenderBasic.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/tender/info/ctrl_tenderInfo.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/priceList/ctrl_orgPriceList.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/priceListSummary/ctrl_priceListSummaryList.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/priceListSummary/ctrl_priceListSummary.js?id=114" type="text/javascript"></script>
        <script src="pages/sales/grid/ctrl_grid.js?id=114" type="text/javascript"></script>

        <!--  PM -->
        <script src="pages/pm/project/ctrl_projectList.js?id=114" type="text/javascript"></script>
        <script src="pages/pm/project/ctrl_project.js?id=114" type="text/javascript"></script>
        <script src="pages/pm/project/basic/ctrl_projectBasic.js?id=114" type="text/javascript"></script>
        <script src="pages/pm/project/basic/dir_assignUserPopup.js?id=114" type="text/javascript"></script>
        <script src="pages/pm/project/info/ctrl_projectInfo.js?id=114" type="text/javascript"></script>
        <script src="pages/pm/project/tasks/ctrl_projectTasks.js?id=114" type="text/javascript"></script>
        <script src="pages/pm/project/history/ctrl_projectHistory.js?id=114" type="text/javascript"></script>
        <script src="pages/pm/task/ctrl_taskList.js?id=114" type="text/javascript"></script>
        <script src="pages/pm/task/ctrl_task.js?id=114" type="text/javascript"></script>


        <!--  VM -->
        <script src="pages/vm/vendor/ctrl_vendor.js?id=114" type="text/javascript"></script>
        <script src="pages/vm/vendor/ctrl_vendorList.js?id=114" type="text/javascript"></script>
        <script src="pages/vm/vendor/basic/ctrl_vendorBasic.js?id=114" type="text/javascript"></script>
        <script src="pages/vm/vendor/contract/ctrl_vendorContract.js?id=114" type="text/javascript"></script>
        <script src="pages/vm/vendor/priceList/ctrl_vendorPriceList.js?id=114" type="text/javascript"></script>
        <script src="pages/vm/vendor/history/ctrl_vendorHistory.js?id=114" type="text/javascript"></script>
        <script src="pages/vm/searchCompetences/ctrl_searchCompetences.js?id=114" type="text/javascript"></script>
        <script src="pages/vm/vendor/invoice/ctrl_vmVendorInvoice.js?id=114" type="text/javascript"></script>
        <script src="pages/vm/vendor/invoice/ctrl_vmVendorInvoiceList.js?id=114" type="text/javascript"></script>
        
        <!-- Vendor-->
        <script src="pages/vendor/vendor/ctrl_vendor.js?id=114" type="text/javascript"></script>
        <script src="pages/vendor/vendor/ctrl_vendorList.js?id=114" type="text/javascript"></script>
        <script src="pages/vendor/vendor/basic/ctrl_vendorVendorBasic.js?id=114" type="text/javascript"></script>
        <script src="pages/vendor/tasks/ctrl_vendorTask.js?id=114" type="text/javascript"></script>
        <script src="pages/vendor/tasks/ctrl_vendorTaskList.js?id=114" type="text/javascript"></script>
        
        <!-- HR -->
        <script src="pages/hr/employee/ctrl_employeeList.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/employee/ctrl_employee.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/employee/basic/ctrl_employeeBasic.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/employee/expandedEmployeeData/ctrl_expandedEmployeeData.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/employee/orientationProgram/ctrl_employeeOrientationProgram.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/employee/targets/ctrl_employeeTargets.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/employee/education/ctrl_employeeEducation.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/educations/ctrl_educationList.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/educations/ctrl_education.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/employee/evaluation/ctrl_employeeEvaluation.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/evaluation/ctrl_evaluationList.js?id=114" type="text/javascript"></script>
        <script src="pages/hr/evaluation/ctrl_evaluation.js?id=114" type="text/javascript"></script>
        
        <!-- InhouseTranslators -->
        <script src="pages/inhouseTranslators/tasks/ctrl_inhouseTranslatorTask.js?id=114" type="text/javascript"></script>
        <script src="pages/inhouseTranslators/tasks/ctrl_inhouseTranslatorTaskList.js?id=114" type="text/javascript"></script>
        <script src="pages/inhouseTranslators/projects/ctrl_inhouseTranslatorProject.js?id=114" type="text/javascript"></script>
        <script src="pages/inhouseTranslators/projects/ctrl_inhouseTranslatorProjectList.js?id=114" type="text/javascript"></script>
        
        <!-- Invoice -->
        <script src="pages/invoice/invoice/ctrl_invoiceList.js?id=114" type="text/javascript"></script>
        <script src="pages/invoice/invoice/ctrl_invoice.js?id=114" type="text/javascript"></script>
        
        <!-- Vendor Invoice-->
        <script src="pages/vendorInvoice/vendorInvoice/ctrl_vendorInvoiceList.js?id=114" type="text/javascript"></script>
        <script src="pages/vendorInvoice/vendorInvoice/ctrl_vendorInvoice.js?id=114" type="text/javascript"></script>
        
        <!-- WorkLog -->
        <script src="pages/worklog/workLog/ctrl_workLog.js?id=114" type="text/javascript"></script>
        
        <!-- Organizations -->
        <!--<script src="pages/organizations/questionnaire/ctrl_organizationQuestionnaire.js" type="text/javascript"></script>-->
        <script src="pages/organizations/changeClientUserSettings/ctrl_changeClientUserSettings.js?id=114" type="text/javascript"></script>
        
    </head>

    <body ng-app="app" ng-controller="mainCtrl as main">

        <header ng-if="showHeader" id="app-header">
            <div id="logo-header" ui-sref="welcome"></div>

            <div id="header">
                <div class="content">
                    <div class="menu" dx-menu="dxMenu"></div>
                    <div class="profileMenu" dx-menu="dxProfileMenu"></div>
                    
                </div>
            </div>
           
            
        </header>

        <div ng-if="showHeader" id="action-bar" style="">
            <div id="action-bar-title">{{pageTitle}}<div class="action-bar-title-content">{{entityName}}</div></div>
            <div id="buttons-bar">
                <div ng-repeat="button in buttons" class="buttons-bar-button">
                    <div dx-button="button"></div>
                </div>

            </div>
        </div>

        <div ui-view class="root-ui-view"></div>

    </div>

    <div id="modal" ng-show="blockUI" class="animate-show">
        <div id="modalBackground"></div>
        <div id="modalContent">
<!--            <div class="spinner">
                <div class="cube1"></div>
                <div class="cube2"></div>
            </div>-->
            <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
            <div class="modal-msg">{{blockMsg}}</div>
        </div>
    </div>

<q-toast></q-toast>
<q-popup></q-popup>
</body>
</html>
