(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-admin-admin-routing-module"],{

/***/ "Zpkz":
/*!**********************************************************!*\
  !*** ./src/app/components/admin/admin-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _connected_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connected/dashboard-admin/dashboard-admin.component */ "Q/uv");
/* harmony import */ var _connected_dashboard_admin_main_dashboard_admin_main_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connected/dashboard-admin/main-dashboard-admin/main-dashboard-admin.component */ "oLxM");
/* harmony import */ var _connected_dashboard_admin_list_clients_admin_list_clients_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connected/dashboard-admin/list-clients-admin/list-clients-admin.component */ "a36q");
/* harmony import */ var _connected_dashboard_admin_bloquer_clients_admin_bloquer_clients_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connected/dashboard-admin/bloquer-clients-admin/bloquer-clients-admin.component */ "xGZH");
/* harmony import */ var _connected_dashboard_admin_statistique_clients_admin_statistique_clients_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connected/dashboard-admin/statistique-clients-admin/statistique-clients-admin.component */ "k6Le");
/* harmony import */ var _connected_dashboard_admin_demande_clients_admin_demande_clients_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./connected/dashboard-admin/demande-clients-admin/demande-clients-admin.component */ "LLUR");
/* harmony import */ var _connected_dashboard_admin_model_list_models_admin_list_models_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./connected/dashboard-admin/model/list-models-admin/list-models-admin.component */ "MDA7");
/* harmony import */ var _connected_dashboard_admin_model_bloquer_models_admin_bloquer_models_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./connected/dashboard-admin/model/bloquer-models-admin/bloquer-models-admin.component */ "TVkP");
/* harmony import */ var _connected_dashboard_admin_model_ask_models_admin_ask_models_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./connected/dashboard-admin/model/ask-models-admin/ask-models-admin.component */ "SggC");
/* harmony import */ var _connected_dashboard_admin_model_statistique_models_admin_statistique_models_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./connected/dashboard-admin/model/statistique-models-admin/statistique-models-admin.component */ "XGfg");
/* harmony import */ var _connected_dashboard_admin_model_detail_model_admin_detail_model_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./connected/dashboard-admin/model/detail-model-admin/detail-model-admin.component */ "72E4");
/* harmony import */ var _connected_dashboard_admin_administration_paiement_admin_paiement_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./connected/dashboard-admin/administration/paiement-admin/paiement-admin.component */ "RyAV");
/* harmony import */ var _connected_dashboard_admin_administration_list_paiement_admin_list_paiement_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./connected/dashboard-admin/administration/list-paiement-admin/list-paiement-admin.component */ "j7XU");
/* harmony import */ var _connected_dashboard_admin_administration_message_admin_message_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./connected/dashboard-admin/administration/message-admin/message-admin.component */ "Z8Rj");
/* harmony import */ var _connected_dashboard_admin_administration_setting_admin_setting_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./connected/dashboard-admin/administration/setting-admin/setting-admin.component */ "yZ7H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const routes = [
    {
        path: '',
        component: _connected_dashboard_admin_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_1__["DashboardAdminComponent"],
        // canActivate: [AuthAdminGuardService],
        children: [
            {
                path: '',
                component: _connected_dashboard_admin_main_dashboard_admin_main_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_2__["MainDashboardAdminComponent"],
            },
            {
                path: 'dashboard',
                component: _connected_dashboard_admin_main_dashboard_admin_main_dashboard_admin_component__WEBPACK_IMPORTED_MODULE_2__["MainDashboardAdminComponent"]
            },
            {
                path: 'les-clients',
                component: _connected_dashboard_admin_list_clients_admin_list_clients_admin_component__WEBPACK_IMPORTED_MODULE_3__["ListClientsAdminComponent"]
            },
            {
                path: 'les-clients-bloques',
                component: _connected_dashboard_admin_bloquer_clients_admin_bloquer_clients_admin_component__WEBPACK_IMPORTED_MODULE_4__["BloquerClientsAdminComponent"]
            },
            {
                path: 'les-demandes-clients',
                component: _connected_dashboard_admin_demande_clients_admin_demande_clients_admin_component__WEBPACK_IMPORTED_MODULE_6__["DemandeClientsAdminComponent"]
            },
            {
                path: 'clients-statistiques',
                component: _connected_dashboard_admin_statistique_clients_admin_statistique_clients_admin_component__WEBPACK_IMPORTED_MODULE_5__["StatistiqueClientsAdminComponent"]
            },
            {
                path: 'les-modeles',
                component: _connected_dashboard_admin_model_list_models_admin_list_models_admin_component__WEBPACK_IMPORTED_MODULE_7__["ListModelsAdminComponent"]
            },
            {
                path: 'les-modeles-bloques',
                component: _connected_dashboard_admin_model_bloquer_models_admin_bloquer_models_admin_component__WEBPACK_IMPORTED_MODULE_8__["BloquerModelsAdminComponent"]
            },
            {
                path: 'les-demandes-modeles',
                component: _connected_dashboard_admin_model_ask_models_admin_ask_models_admin_component__WEBPACK_IMPORTED_MODULE_9__["AskModelsAdminComponent"]
            },
            {
                path: 'modeles-statistiques',
                component: _connected_dashboard_admin_model_statistique_models_admin_statistique_models_admin_component__WEBPACK_IMPORTED_MODULE_10__["StatistiqueModelsAdminComponent"]
            },
            {
                path: 'detail-model',
                component: _connected_dashboard_admin_model_detail_model_admin_detail_model_admin_component__WEBPACK_IMPORTED_MODULE_11__["DetailModelAdminComponent"]
            },
            {
                path: 'list-paiement',
                component: _connected_dashboard_admin_administration_list_paiement_admin_list_paiement_admin_component__WEBPACK_IMPORTED_MODULE_13__["ListPaiementAdminComponent"]
            },
            {
                path: 'paiement',
                component: _connected_dashboard_admin_administration_paiement_admin_paiement_admin_component__WEBPACK_IMPORTED_MODULE_12__["PaiementAdminComponent"]
            },
            {
                path: 'message-admin',
                component: _connected_dashboard_admin_administration_message_admin_message_admin_component__WEBPACK_IMPORTED_MODULE_14__["MessageAdminComponent"]
            },
            {
                path: 'setting-admin',
                component: _connected_dashboard_admin_administration_setting_admin_setting_admin_component__WEBPACK_IMPORTED_MODULE_15__["SettingAdminComponent"]
            }
        ]
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=components-admin-admin-routing-module-es2015.js.map