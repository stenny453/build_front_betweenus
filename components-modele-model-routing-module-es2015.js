(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-modele-model-routing-module"],{

/***/ "oak9":
/*!***********************************************************!*\
  !*** ./src/app/components/modele/model-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ModelRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelRoutingModule", function() { return ModelRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_model_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth-model-guard.service */ "z0gt");
/* harmony import */ var _forgot_send_forgot_model_send_forgot_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forgot/send-forgot-model/send-forgot-model.component */ "2NLt");
/* harmony import */ var _albums_albums_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albums/albums.component */ "4RNo");
/* harmony import */ var _connexion_model_connexion_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connexion-model/connexion-model.component */ "oF1I");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "7fHp");
/* harmony import */ var _inscription_model_inscription_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inscription-model/inscription-model.component */ "UED+");
/* harmony import */ var _live_chat_model_live_chat_model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./live-chat-model/live-chat-model.component */ "ka6T");
/* harmony import */ var _live_private_model_live_private_model_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./live-private-model/live-private-model.component */ "Sp0i");
/* harmony import */ var _live_vip_model_live_vip_model_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./live-vip-model/live-vip-model.component */ "AtE+");
/* harmony import */ var _profil_model_profil_model_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profil-model/profil-model.component */ "E00H");
/* harmony import */ var _live_tips_model_live_tips_model_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./live-tips-model/live-tips-model.component */ "Duco");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














const routes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        canActivate: [src_app_services_auth_auth_model_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthModelGuardService"]]
    },
    {
        path: 'motdepasseoublie',
        component: _forgot_send_forgot_model_send_forgot_model_component__WEBPACK_IMPORTED_MODULE_2__["SendForgotModelComponent"]
    },
    {
        path: 'connexion',
        component: _connexion_model_connexion_model_component__WEBPACK_IMPORTED_MODULE_4__["ConnexionModelComponent"]
    },
    {
        path: 'inscription',
        component: _inscription_model_inscription_model_component__WEBPACK_IMPORTED_MODULE_6__["InscriptionModelComponent"]
    },
    {
        path: 'albums',
        component: _albums_albums_component__WEBPACK_IMPORTED_MODULE_3__["AlbumsComponent"],
        canActivate: [src_app_services_auth_auth_model_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthModelGuardService"]]
    },
    {
        path: 'profile',
        component: _profil_model_profil_model_component__WEBPACK_IMPORTED_MODULE_10__["ProfilModelComponent"],
        canActivate: [src_app_services_auth_auth_model_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthModelGuardService"]]
    },
    {
        path: 'chat',
        component: _live_chat_model_live_chat_model_component__WEBPACK_IMPORTED_MODULE_7__["LiveChatModelComponent"],
        canActivate: [src_app_services_auth_auth_model_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthModelGuardService"]]
    },
    {
        path: 'live-private',
        component: _live_private_model_live_private_model_component__WEBPACK_IMPORTED_MODULE_8__["LivePrivateModelComponent"],
        canActivate: [src_app_services_auth_auth_model_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthModelGuardService"]]
    },
    {
        path: 'live-vip',
        component: _live_vip_model_live_vip_model_component__WEBPACK_IMPORTED_MODULE_9__["LiveVipModelComponent"],
        canActivate: [src_app_services_auth_auth_model_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthModelGuardService"]]
    },
    {
        path: 'live-tips',
        component: _live_tips_model_live_tips_model_component__WEBPACK_IMPORTED_MODULE_11__["LiveTipsModelComponent"],
        canActivate: [src_app_services_auth_auth_model_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthModelGuardService"]]
    }
];
class ModelRoutingModule {
}
ModelRoutingModule.ɵfac = function ModelRoutingModule_Factory(t) { return new (t || ModelRoutingModule)(); };
ModelRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: ModelRoutingModule });
ModelRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](ModelRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "z0gt":
/*!***********************************************************!*\
  !*** ./src/app/services/auth/auth-model-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: AuthModelGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModelGuardService", function() { return AuthModelGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthModelGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.authService.getToken()) {
            this.router.navigateByUrl("accueil");
            return false;
        }
        const token = this.authService.getToken();
        this.authService.verifyToken(token).subscribe((data) => {
            if (data && data.role === 'model') {
                // this.router.navigateByUrl("modele/albums");
                return true;
            }
            else {
                this.router.navigateByUrl("accueil");
                return false;
            }
            // console.log(data)
        }, (error) => {
            console.log(error);
            this.router.navigateByUrl("accueil");
            return false;
        });
        return true;
    }
}
AuthModelGuardService.ɵfac = function AuthModelGuardService_Factory(t) { return new (t || AuthModelGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthModelGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthModelGuardService, factory: AuthModelGuardService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=components-modele-model-routing-module-es2015.js.map