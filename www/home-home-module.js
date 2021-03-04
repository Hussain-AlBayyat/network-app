(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title> Blank </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <div *ngFor=\"let question of questions;\">\n      <ion-item>\n        <ion-label>\n          {{question[\"text\"]}}: <span style=\"color: blue\">{{question[\"value\"]}}</span>\n        </ion-label>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ "kwrG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/network-interface/ngx */ "XQxt");
/* harmony import */ var _ionic_native_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/wifi-wizard-2/ngx */ "ASgJ");
/* harmony import */ var _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/sim/ngx */ "ObYS");









let HomePage = class HomePage {
    /*
    Connection.UNKNOWN
  Connection.ETHERNET
  Connection.WIFI
  Connection.CELL_2G
  Connection.CELL_3G
  Connection.CELL_4G
  Connection.CELL
  Connection.NONE
  Is LTE  on?
  Are you connected to internet, LTE?
  Is data active?
   
  Is WIFI on?
  Is connected to SSID?
  What is the name of SSID?
  Is connected to internet, WIFI?
  Does LTE supported?
  Does WiFi Supported?
  */
    constructor(platform, network, networkInterface, wifiWizard2, changeDetection, sim, toastController) {
        this.platform = platform;
        this.network = network;
        this.networkInterface = networkInterface;
        this.wifiWizard2 = wifiWizard2;
        this.changeDetection = changeDetection;
        this.sim = sim;
        this.toastController = toastController;
        this.isConnected = false;
        this.questionsList = [
            'Is LTE  on',
            'Are you connected to internet, LTE',
            'Is data active',
            'Is WIFI on',
            'Is connected to SSID',
            'What is the name of SSID',
            'Does LTE supported',
            'Does WiFi Supported',
        ];
    }
    ngOnInit() {
        this.platform.ready().then((platfrom) => {
            this.watchNetwork();
            this.network.onChange().subscribe((onChnage) => {
                console.log('change ', onChnage);
            });
        });
    }
    ngOnDestroy() {
        this.disconnectSubscription.unsubscribe();
        this.connectSubscription.unsubscribe();
    }
    watchNetwork() {
        this.onDisconnect();
        this.onConnect();
        this.answerQuestions();
    }
    trackItem(index, item) {
        console.log(item);
        return item;
    }
    reset() {
        this.disconnectSubscription.unsubscribe();
        this.connectSubscription.unsubscribe();
    }
    answerQuestions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let isWifiEnabled = yield this.wifiWizard2
                .isWifiEnabled()
                .catch((error) => console.log('isWifiEnabled Error:', error));
            let ssid = yield this.wifiWizard2
                .getConnectedSSID()
                .catch((error) => console.log('getConnectedSSID Error:', error));
            let isConnectedToTheInternet = yield this.wifiWizard2
                .isConnectedToInternet()
                .then((isConnected) => {
                return isConnected === 'IS_CONNECTED_TO_INTERNET' ? true : false;
            })
                .catch((error) => console.log('isConnectedToInternet Error:', error));
            console.log('is conncted to the internet', isConnectedToTheInternet);
            let connectionType = this.network.type;
            let isConnectedUsingSim = this.isConnected && !ssid ? true : false;
            let isConnectedUsingWifi = this.isConnected && ssid ? true : false;
            // console.log(await this.sim.requestReadPermission().catch(error => console.log("requestReadPermission",error)));
            //console.log(await this.sim.getSimInfo());
            this.questions = [
                { text: 'Is LTE  on', value: isConnectedUsingSim },
                {
                    text: 'Are you connected to internet, LTE',
                    value: isConnectedUsingSim,
                },
                { text: 'Is data active', value: isConnectedToTheInternet || false },
                { text: 'Is WIFI on', value: isWifiEnabled || false },
                { text: 'Is connected to SSID', value: ssid ? true : false },
                { text: 'What is the name of SSID', value: ssid || 'N/A' },
                {
                    text: 'Is connected to internet, WIFI',
                    value: isConnectedUsingWifi,
                },
                { text: 'What is the connection type', value: connectionType },
                { text: ' Does LTE supported', value: 'N/A' },
                { text: 'Does WiFi Supported', value: 'N/A' },
            ];
            this.changeDetection.detectChanges();
        });
    }
    onDisconnect() {
        this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            this.showToast('You are not connected to the internet');
            console.log('network disco', this.network.type);
            this.isConnected = false;
            this.answerQuestions();
        });
    }
    onConnect() {
        this.connectSubscription = this.network.onConnect().subscribe(() => {
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            this.isConnected = true;
            this.answerQuestions();
            setTimeout(() => {
                if (this.network.type === 'wifi') {
                    this.getWiFiIPAddress();
                    this.showToast('You are connected to the internet using WIFI');
                }
                else if (this.network.type !== 'none') {
                    this.showToast('You are connected to the internet using SIM');
                    this.getCarrierIPAddress();
                }
            }, 3000);
        }, (error) => console.log('on connect error', error));
    }
    getWiFiIPAddress() {
        this.networkInterface
            .getWiFiIPAddress()
            .then((address) => {
            console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`);
        })
            .catch((error) => console.error(`Unable to get IP: ${error}`));
    }
    getCarrierIPAddress() {
        this.networkInterface
            .getCarrierIPAddress()
            .then((address) => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
            .catch((error) => console.error(`Unable to get IP: ${error}`));
    }
    getHttpProxyInformation() {
        const url = 'www.github.com';
        this.networkInterface
            .getHttpProxyInformation(url)
            .then((proxy) => console.info(`Type: ${proxy.type}, Host: ${proxy.host}, Port: ${proxy.port}`))
            .catch((error) => console.error(`Unable to get proxy info: ${error}`));
    }
    showToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000,
            });
            toast.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__["Network"] },
    { type: _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_6__["NetworkInterface"] },
    { type: _ionic_native_wifi_wizard_2_ngx__WEBPACK_IMPORTED_MODULE_7__["WifiWizard2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_8__["Sim"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map