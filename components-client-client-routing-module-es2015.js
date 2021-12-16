(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-client-client-routing-module"],{

/***/ "4YL/":
/*!************************************************************!*\
  !*** ./src/app/components/client/client-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var _albums_model_albums_model_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./albums-model/albums-model.component */ "qJ+Y");
/* harmony import */ var _live_live_tips_clients_live_tips_clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../live/live-tips-clients/live-tips-clients.component */ "m6FT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth/auth-guard.service */ "BhFI");
/* harmony import */ var _home_home_connected_home_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/home-connected/home-client.component */ "yCu6");
/* harmony import */ var _live_live_free_live_free_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../live/live-free/live-free.component */ "uWYa");
/* harmony import */ var _live_live_private_live_private_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../live/live-private/live-private.component */ "s4EQ");
/* harmony import */ var _live_live_vip_live_vip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../live/live-vip/live-vip.component */ "KxeW");
/* harmony import */ var _paiement_paiement_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../paiement/paiement.component */ "YmGC");
/* harmony import */ var _buy_credit_buy_credit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buy-credit/buy-credit.component */ "P0jf");
/* harmony import */ var _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./confirm-email/confirm-email.component */ "q+ge");
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profil/profil.component */ "vhwF");
/* harmony import */ var _reactivate_account_reactivate_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reactivate-account/reactivate-account.component */ "XSM7");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signin/signin.component */ "XWhv");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "jC5+");
/* harmony import */ var _live_live_free_saloon_live_free_saloon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../live/live-free-saloon/live-free-saloon.component */ "CIt8");
/* harmony import */ var _between_shop_between_shop_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./between-shop/between-shop.component */ "6P+w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















const routes = [
    {
        path: 'inscription',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"]
    },
    {
        path: 'connexion',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_13__["SigninComponent"]
    },
    {
        path: 'profile',
        component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_11__["ProfilComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'achat_de_credit',
        component: _buy_credit_buy_credit_component__WEBPACK_IMPORTED_MODULE_9__["BuyCreditComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'between_shop',
        component: _between_shop_between_shop_component__WEBPACK_IMPORTED_MODULE_16__["BetweenShopComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'paiement',
        component: _paiement_paiement_component__WEBPACK_IMPORTED_MODULE_8__["PaiementComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'accueil/registered',
        component: _home_home_connected_home_client_component__WEBPACK_IMPORTED_MODULE_4__["HomeClientComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'live/free',
        component: _live_live_free_live_free_component__WEBPACK_IMPORTED_MODULE_5__["LiveFreeComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'live/private',
        component: _live_live_private_live_private_component__WEBPACK_IMPORTED_MODULE_6__["LivePrivateComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'live/vip',
        component: _live_live_vip_live_vip_component__WEBPACK_IMPORTED_MODULE_7__["LiveVipComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'live/tips-clients',
        component: _live_live_tips_clients_live_tips_clients_component__WEBPACK_IMPORTED_MODULE_1__["LiveTipsClientsComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'live/choice-us',
        component: _live_live_free_saloon_live_free_saloon_component__WEBPACK_IMPORTED_MODULE_15__["LiveFreeSaloonComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'albums-model',
        component: _albums_model_albums_model_component__WEBPACK_IMPORTED_MODULE_0__["AlbumsModelComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'register/confirm',
        component: _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmEmailComponent"]
    },
    {
        path: 'reactivation/account',
        component: _reactivate_account_reactivate_account_component__WEBPACK_IMPORTED_MODULE_12__["ReactivateAccountComponent"]
    },
];
class ClientRoutingModule {
}
ClientRoutingModule.ɵfac = function ClientRoutingModule_Factory(t) { return new (t || ClientRoutingModule)(); };
ClientRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: ClientRoutingModule });
ClientRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](ClientRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "BhFI":
/*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuardService {
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
            //console.log(data)
            // this.router.navigateByUrl("client/accueil/registered");
        }, (error) => {
            console.log(error);
            this.router.navigateByUrl("accueil");
            return false;
        });
        return true;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=components-client-client-routing-module-es2015.js.map