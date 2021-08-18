(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-client-client-routing-module"], {
    /***/
    "4YL/":
    /*!************************************************************!*\
      !*** ./src/app/components/client/client-routing.module.ts ***!
      \************************************************************/

    /*! exports provided: ClientRoutingModule */

    /***/
    function YL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function () {
        return ClientRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth/auth-guard.service */
      "BhFI");
      /* harmony import */


      var _home_home_connected_home_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../home/home-connected/home-client.component */
      "yCu6");
      /* harmony import */


      var _live_live_free_live_free_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../live/live-free/live-free.component */
      "uWYa");
      /* harmony import */


      var _live_live_private_live_private_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../live/live-private/live-private.component */
      "s4EQ");
      /* harmony import */


      var _live_live_vip_live_vip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../live/live-vip/live-vip.component */
      "KxeW");
      /* harmony import */


      var _paiement_paiement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../paiement/paiement.component */
      "YmGC");
      /* harmony import */


      var _buy_credit_buy_credit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./buy-credit/buy-credit.component */
      "P0jf");
      /* harmony import */


      var _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./confirm-email/confirm-email.component */
      "q+ge");
      /* harmony import */


      var _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./profil/profil.component */
      "vhwF");
      /* harmony import */


      var _reactivate_account_reactivate_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./reactivate-account/reactivate-account.component */
      "XSM7");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./signin/signin.component */
      "XWhv");
      /* harmony import */


      var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./signup/signup.component */
      "jC5+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'inscription',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"]
      }, {
        path: 'connexion',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"]
      }, {
        path: 'profile',
        component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_9__["ProfilComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }, {
        path: 'achat_de_credit',
        component: _buy_credit_buy_credit_component__WEBPACK_IMPORTED_MODULE_7__["BuyCreditComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }, {
        path: 'paiement',
        component: _paiement_paiement_component__WEBPACK_IMPORTED_MODULE_6__["PaiementComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }, {
        path: 'accueil/registered',
        component: _home_home_connected_home_client_component__WEBPACK_IMPORTED_MODULE_2__["HomeClientComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }, {
        path: 'live/free',
        component: _live_live_free_live_free_component__WEBPACK_IMPORTED_MODULE_3__["LiveFreeComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }, {
        path: 'live/private',
        component: _live_live_private_live_private_component__WEBPACK_IMPORTED_MODULE_4__["LivePrivateComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }, {
        path: 'live/vip',
        component: _live_live_vip_live_vip_component__WEBPACK_IMPORTED_MODULE_5__["LiveVipComponent"],
        canActivate: [src_app_services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_1__["AuthGuardService"]]
      }, {
        path: 'register/confirm',
        component: _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmEmailComponent"]
      }, {
        path: 'reactivation/account',
        component: _reactivate_account_reactivate_account_component__WEBPACK_IMPORTED_MODULE_10__["ReactivateAccountComponent"]
      }];

      var ClientRoutingModule = function ClientRoutingModule() {
        _classCallCheck(this, ClientRoutingModule);
      };

      ClientRoutingModule.ɵfac = function ClientRoutingModule_Factory(t) {
        return new (t || ClientRoutingModule)();
      };

      ClientRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: ClientRoutingModule
      });
      ClientRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ClientRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "BhFI":
    /*!*****************************************************!*\
      !*** ./src/app/services/auth/auth-guard.service.ts ***!
      \*****************************************************/

    /*! exports provided: AuthGuardService */

    /***/
    function BhFI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () {
        return AuthGuardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      "9ans");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuardService = /*#__PURE__*/function () {
        function AuthGuardService(authService, router) {
          _classCallCheck(this, AuthGuardService);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuardService, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var _this = this;

            if (!this.authService.getToken()) {
              this.router.navigateByUrl("accueil");
              return false;
            }

            var token = this.authService.getToken();
            this.authService.verifyToken(token).subscribe(function (data) {// console.log(data)
            }, function (error) {
              console.log(error);

              _this.router.navigateByUrl("accueil");

              return false;
            });
            return true;
          }
        }]);

        return AuthGuardService;
      }();

      AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
        return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuardService,
        factory: AuthGuardService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=components-client-client-routing-module-es5.js.map