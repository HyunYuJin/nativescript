require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      message: "You have successfully authenticated. This is where you build your core application functionality."
    };
  },

  methods: {
    logout() {
      this.$backendService.logout();
      this.$navigateTo(_Login__WEBPACK_IMPORTED_MODULE_0__["default"], {
        clearHistory: true
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue");
/* harmony import */ var _logo_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/logo.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Logo: _logo_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },

  data() {
    return {
      isLoggingIn: true,
      processing: false,
      user: {
        email: "vue@nativescript.org",
        password: "vue",
        confirmPassword: "vue"
      }
    };
  },

  methods: {
    toggleForm() {
      this.isLoggingIn = !this.isLoggingIn;
    },

    submit() {
      if (!this.user.email || !this.user.password) {
        this.alert("Please provide both an email address and password.");
        return;
      }

      this.processing = true;

      if (this.isLoggingIn) {
        this.login();
      } else {
        this.register();
      }
    },

    login() {
      this.$backendService.login(this.user).then(() => {
        this.processing = false;
        this.$navigateTo(_Home__WEBPACK_IMPORTED_MODULE_0__["default"], {
          clearHistory: true
        });
      }).catch(() => {
        this.processing = false;
        this.alert("Unfortunately we could not find your account.");
      });
    },

    register() {
      if (this.user.password != this.user.confirmPassword) {
        this.alert("Your passwords do not match.");
        this.processing = false;
        return;
      }

      this.$backendService.register(this.user).then(() => {
        this.processing = false;
        this.alert("Your account was successfully created.");
        this.isLoggingIn = true;
      }).catch(() => {
        this.processing = false;
        this.alert("Unfortunately we were unable to create your account.");
      });
    },

    forgotPassword() {
      prompt({
        title: "Forgot Password",
        message: "Enter the email address you used to register for APP NAME to reset your password.",
        inputType: "email",
        defaultText: "",
        okButtonText: "Ok",
        cancelButtonText: "Cancel"
      }).then(data => {
        if (data.result) {
          this.$backendService.resetPassword(data.text.trim()).then(() => {
            this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
          }).catch(() => {
            this.alert("Unfortunately, an error occurred resetting your password.");
          });
        }
      });
    },

    focusPassword() {
      this.$refs.password.nativeView.focus();
    },

    focusConfirmPassword() {
      if (!this.isLoggingIn) {
        this.$refs.confirmPassword.nativeView.focus();
      }
    },

    alert(message) {
      return alert({
        title: "APP NAME",
        okButtonText: "OK",
        message: message
      });
    }

  }
});

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/logo.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['logo']
});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.page[data-v-c27482c4] {\n    align-items: center;\n    flex-direction: column;\n}\n.form[data-v-c27482c4] {\n    margin-left: 30;\n    margin-right: 30;\n    flex-grow: 2;\n    vertical-align: middle;\n}\n.logo[data-v-c27482c4] {\n    margin-bottom: 12;\n    height: 90;\n    font-weight: bold;\n}\n.header[data-v-c27482c4] {\n    horizontal-align: center;\n    font-size: 25;\n    font-weight: 600;\n    margin-bottom: 70;\n    text-align: center;\n    font-style: normal;\n    font-weight: 500;\n    font-size: 18px;\n    letter-spacing: -1px;\n    color: #555555;\n}\n.input-field[data-v-c27482c4] {\n    margin-bottom: 25;\n}\n.input[data-v-c27482c4] {\n    font-size: 18;\n    placeholder-color: #A8A8A8;\n}\n.input[data-v-c27482c4]:disabled {\n    background-color: white;\n    opacity: 0.5;\n}\n.btn-primary[data-v-c27482c4] {\n    margin: 30 5 15 5;\n}\n.login-label[data-v-c27482c4] {\n    horizontal-align: center;\n    color: #A8A8A8;\n    font-size: 16;\n}\n.sign-up-label[data-v-c27482c4] {\n    margin-bottom: 20;\n}\n.bold[data-v-c27482c4] {\n    color: #000000;\n}\n.loginBtn[data-v-c27482c4] {\n    background: #E61773;\n    border-radius: 3px;\n    color: #FFF;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/Login.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/logo.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.t1 {\n    position: absolute;\n    left: 35.56%;\n    right: 57.05%;\n    top: 19.55%;\n    bottom: 76.03%;\n    background: #E61773;\n}\n.a1 {\n    position: absolute;\n    left: 43.6%;\n    right: 53.95%;\n    top: 19.55%;\n    bottom: 76.03%;\n\n    background: #E61773;\n}\n.a2 {\n    position: absolute;\n    left: 43.6%;\n    right: 51.89%;\n    top: 19.55%;\n    bottom: 78.73%;\n\n    background: #E61773;\n}\n", ""]);

// exports

    const application = __webpack_require__("../node_modules/@nativescript/core/application/application.js");
    __webpack_require__("../node_modules/@nativescript/core/ui/styling/style-scope.js");

    if (typeof exports.forEach === "function") {
        exports.forEach(cssExport => {
            if (cssExport.length > 1 && cssExport[1]) {
                // applying the second item of the export as it contains the css contents
                application.addCss(cssExport[1]);
            }
        });
    }
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/logo.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    [
      _c("ActionBar", { attrs: { title: "YOUR APP" } }),
      _c(
        "StackLayout",
        [
          _c("Label", {
            staticClass: "body m-20",
            attrs: { text: _vm.message, textWrap: "true" }
          }),
          _c("Button", {
            staticClass: "btn btn-primary",
            attrs: { text: "Log out" },
            on: { tap: _vm.logout }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { attrs: { actionBarHidden: "true" } },
    [
      _c(
        "FlexboxLayout",
        { staticClass: "page" },
        [
          _c(
            "StackLayout",
            { staticClass: "form" },
            [
              _c("v-template", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var item = ref.item
                      var $index = ref.$index
                      var $even = ref.$even
                      var $odd = ref.$odd
                      return _c("Logo", {
                        staticClass: "logo",
                        attrs: { logo: _vm.logo }
                      })
                    }
                  }
                ])
              }),
              _c("Label", {
                staticClass: "header",
                attrs: { text: "안녕하세요 타시오 입니다" }
              }),
              _c(
                "GridLayout",
                { attrs: { rows: "auto, auto, auto" } },
                [
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "0" } },
                    [
                      _c("TextField", {
                        staticClass: "input",
                        attrs: {
                          hint: "Email",
                          isEnabled: !_vm.processing,
                          keyboardType: "email",
                          autocorrect: "false",
                          autocapitalizationType: "none",
                          returnKeyType: "next",
                          text: _vm.user.email
                        },
                        on: {
                          returnPress: _vm.focusPassword,
                          textChange: function($event) {
                            return _vm.$set(_vm.user, "email", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    { staticClass: "input-field", attrs: { row: "1" } },
                    [
                      _c("TextField", {
                        ref: "password",
                        staticClass: "input",
                        attrs: {
                          isEnabled: !_vm.processing,
                          hint: "Password",
                          secure: "true",
                          returnKeyType: _vm.isLoggingIn ? "done" : "next",
                          text: _vm.user.password
                        },
                        on: {
                          returnPress: _vm.focusConfirmPassword,
                          textChange: function($event) {
                            return _vm.$set(_vm.user, "password", $event.value)
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c(
                    "StackLayout",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.isLoggingIn,
                          expression: "!isLoggingIn"
                        }
                      ],
                      staticClass: "input-field",
                      attrs: { row: "2" }
                    },
                    [
                      _c("TextField", {
                        ref: "confirmPassword",
                        staticClass: "input",
                        attrs: {
                          isEnabled: !_vm.processing,
                          hint: "Confirm password",
                          secure: "true",
                          returnKeyType: "done",
                          text: _vm.user.confirmPassword
                        },
                        on: {
                          textChange: function($event) {
                            return _vm.$set(
                              _vm.user,
                              "confirmPassword",
                              $event.value
                            )
                          }
                        }
                      }),
                      _c("StackLayout", { staticClass: "hr-light" })
                    ],
                    1
                  ),
                  _c("ActivityIndicator", {
                    attrs: { rowSpan: "3", busy: _vm.processing }
                  })
                ],
                1
              ),
              _c("Button", {
                staticClass: "btn btn-primary m-t-20 loginBtn",
                attrs: {
                  text: _vm.isLoggingIn ? "로그인" : "Sign Up",
                  isEnabled: !_vm.processing
                },
                on: { tap: _vm.submit }
              }),
              _c("Label", {
                staticClass: "login-label",
                attrs: {
                  "*v-show": "isLoggingIn",
                  text: "Forgot your password?"
                },
                on: {
                  tap: function($event) {
                    return _vm.forgotPassword()
                  }
                }
              })
            ],
            1
          ),
          _c(
            "Label",
            {
              staticClass: "login-label sign-up-label",
              on: { tap: _vm.toggleForm }
            },
            [
              _c(
                "FormattedString",
                [
                  _c("Span", {
                    attrs: {
                      text: _vm.isLoggingIn
                        ? "Don’t have an account? "
                        : "Back to Login"
                    }
                  }),
                  _c("Span", {
                    staticClass: "bold",
                    attrs: { text: _vm.isLoggingIn ? "Sign up" : "" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/logo.vue?vue&type=template&id=0d899434&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "svg",
        {
          staticClass: "t1",
          attrs: {
            width: "27",
            height: "33",
            viewBox: "0 0 27 33",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", {
            attrs: {
              d:
                "M9.16897 20.8845V24.0694H26.609V32.6H0V0.764664H26.609V9.29525H9.16897V12.3539H26.609V20.8845H9.16897Z",
              fill: "#E61773"
            }
          })
        ],
        1
      ),
      _c(
        "svg",
        {
          staticClass: "a1",
          attrs: {
            width: "10",
            height: "33",
            viewBox: "0 0 10 33",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", {
            attrs: {
              d: "M9.77733 23.8239V32.607H0.973145V0.764664H9.77733V17.2225",
              fill: "#E61773"
            }
          })
        ],
        1
      ),
      _c(
        "svg",
        {
          staticClass: "a2",
          attrs: {
            width: "18",
            height: "14",
            viewBox: "0 0 18 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("path", {
            attrs: {
              d: "M17.2135 0.764664L0.973145 13.1537V0.764664H17.2135Z",
              fill: "#E61773"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./routes/index.js": "./routes/index.js",
	"./services/backend-service.js": "./services/backend-service.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"comment","comment":" @import 'nativescript-theme-core/css/core.light.css'; "},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"#D51A1A"},{"type":"declaration","property":"border-radius","value":"5"},{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"font-weight","value":"600"}]},{"type":"rule","selectors":[".btn-primary:disabled"],"declarations":[{"type":"declaration","property":"opacity","value":"0.5"}]}],"parsingErrors":[]}};;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-vue/dist/index.js");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./routes/index.js");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./services/backend-service.js");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");
        

 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

var backendService = new _services_backend_service__WEBPACK_IMPORTED_MODULE_2__["default"]();
nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$backendService = backendService;
new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  render: h => h("frame", [h(backendService.isLoggedIn() ? _routes__WEBPACK_IMPORTED_MODULE_1__["default"].home : _routes__WEBPACK_IMPORTED_MODULE_1__["default"].login)])
}).$start();
    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Home.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('67410f3a')) {
      api.createRecord('67410f3a', component.options)
    } else {
      api.reload('67410f3a', component.options)
    }
    module.hot.accept("./components/Home.vue?vue&type=template&id=67410f3a&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Home.vue?vue&type=template&id=67410f3a&");
(function () {
      api.rerender('67410f3a', {
        render: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Home.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Home.vue?vue&type=template&id=67410f3a&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Home.vue?vue&type=template&id=67410f3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_67410f3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/Login.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c27482c4",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('c27482c4')) {
      api.createRecord('c27482c4', component.options)
    } else {
      api.reload('c27482c4', component.options)
    }
    module.hot.accept("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
(function () {
      api.rerender('c27482c4', {
        render: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Login.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=style&index=0&id=c27482c4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_c27482c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Login.vue?vue&type=template&id=c27482c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_c27482c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/logo.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logo_vue_vue_type_template_id_0d899434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/logo.vue?vue&type=template&id=0d899434&");
/* harmony import */ var _logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/logo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _logo_vue_vue_type_template_id_0d899434___WEBPACK_IMPORTED_MODULE_0__["render"],
  _logo_vue_vue_type_template_id_0d899434___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('0d899434')) {
      api.createRecord('0d899434', component.options)
    } else {
      api.reload('0d899434', component.options)
    }
    module.hot.accept("./components/logo.vue?vue&type=template&id=0d899434&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _logo_vue_vue_type_template_id_0d899434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/logo.vue?vue&type=template&id=0d899434&");
(function () {
      api.rerender('0d899434', {
        render: _logo_vue_vue_type_template_id_0d899434___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _logo_vue_vue_type_template_id_0d899434___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/logo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/logo.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/logo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/logo.vue?vue&type=style&index=0&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/logo.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_3_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/logo.vue?vue&type=template&id=0d899434&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_template_id_0d899434___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/logo.vue?vue&type=template&id=0d899434&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_template_id_0d899434___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_logo_vue_vue_type_template_id_0d899434___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = JSON.parse("{\"android\":{\"v8Flags\":\"--expose_gc\",\"forceLog\":true,\"markingMode\":\"none\"},\"main\":\"app.js\",\"name\":\"tns-template-vue\",\"version\":\"3.2.0\"}");

/***/ }),

/***/ "./routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Login.vue");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Home.vue");


var routes = {
  login: _components_Login__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _components_Home__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./services/backend-service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackendService; });
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/kinvey-nativescript-sdk/lib/nativescript/index.js");
/* harmony import */ var kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__);
// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["init"]({
  appKey: "kid_SyY8LYO8M",
  appSecret: "09282985d7c540f7b076a9c7fd884c77"
});
class BackendService {
  isLoggedIn() {
    return !!kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].getActiveUser();
  }

  login(user) {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].login(user.email, user.password);
  }

  logout() {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].logout();
  }

  register(user) {
    return kinvey_nativescript_sdk__WEBPACK_IMPORTED_MODULE_0__["User"].signup({
      username: user.email,
      password: user.password
    });
  }

}

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Ib21lLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvbG9nby52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/MDE0NyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ28udnVlPzQ0NWQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ib21lLnZ1ZT9iNjZiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlPzNjZTgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2dvLnZ1ZT9hNjQyIiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSG9tZS52dWU/NTYyNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvbWUudnVlPzgzNDIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi52dWU/ZTYwNiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLnZ1ZT8yMTI0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4udnVlP2ZiNGYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2dvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ28udnVlPzc5YmMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2dvLnZ1ZT85NjAzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9nby52dWU/YjJmOSIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYmFja2VuZC1zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInJvdXRlcyIsIkJhY2tlbmRTZXJ2aWNlIiwiYmFja2VuZFNlcnZpY2UiLCJWdWUiLCJwcm90b3R5cGUiLCIkYmFja2VuZFNlcnZpY2UiLCJyZW5kZXIiLCJoIiwiaXNMb2dnZWRJbiIsIiRzdGFydCIsImxvZ2luIiwiTG9naW4iLCJob21lIiwiSG9tZSIsIktpbnZleSIsImFwcEtleSIsImFwcFNlY3JldCIsImdldEFjdGl2ZVVzZXIiLCJ1c2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ291dCIsInJlZ2lzdGVyIiwic2lnbnVwIiwidXNlcm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FMQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7QUFOQTtBQU5BLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMyQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBLEdBREE7O0FBS0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsdUJBRkE7QUFHQTtBQUNBLHFDQURBO0FBRUEsdUJBRkE7QUFHQTtBQUhBO0FBSEE7QUFTQSxHQWZBOztBQWdCQTtBQUNBO0FBQ0E7QUFDQSxLQUhBOztBQUtBO0FBQ0E7QUFDQSxtQkFDQSxvREFEQTtBQUdBO0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQW5CQTs7QUFxQkE7QUFDQSwyQkFDQSxLQURBLENBQ0EsU0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0EsT0FMQSxFQU1BLEtBTkEsQ0FNQTtBQUNBO0FBQ0EsbUJBQ0EsK0NBREE7QUFHQSxPQVhBO0FBWUEs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Q1EsSUFBRCxFQUFPO0FBQ1IsV0FBT0osNERBQUEsQ0FBWUosS0FBWixDQUFrQlEsSUFBSSxDQUFDQyxLQUF2QixFQUE4QkQsSUFBSSxDQUFDRSxRQUFuQyxDQUFQO0FBQ0g7O0FBRURDLFFBQU0sR0FBRztBQUNMLFdBQU9QLDREQUFBLENBQVlPLE1BQVosRUFBUDtBQUNIOztBQUVEQyxVQUFRLENBQUNKLElBQUQsRUFBTztBQUNYLFdBQU9KLDREQUFBLENBQVlTLE1BQVosQ0FBbUI7QUFBRUMsY0FBUSxFQUFFTixJQUFJLENBQUNDLEtBQWpCO0FBQXdCQyxjQUFRLEVBQUVGLElBQUksQ0FBQ0U7QUFBdkMsS0FBbkIsQ0FBUDtBQUNIOztBQWhCK0IsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPFBhZ2U+XG4gICAgICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJZT1VSIEFQUFwiPjwvQWN0aW9uQmFyPlxuXG4gICAgICAgIDxTdGFja0xheW91dD5cbiAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cImJvZHkgbS0yMFwiIDp0ZXh0PVwibWVzc2FnZVwiIHRleHRXcmFwPVwidHJ1ZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdGV4dD1cIkxvZyBvdXRcIiBAdGFwPVwibG9nb3V0XCI+PC9CdXR0b24+XG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgTG9naW4gZnJvbSBcIi4vTG9naW5cIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgYXV0aGVudGljYXRlZC4gVGhpcyBpcyB3aGVyZSB5b3UgYnVpbGQgeW91ciBjb3JlIGFwcGxpY2F0aW9uIGZ1bmN0aW9uYWxpdHkuXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGxvZ291dCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKExvZ2luLCB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGFjdGlvbkJhckhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgPEZsZXhib3hMYXlvdXQgY2xhc3M9XCJwYWdlXCI+XG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgPCEtLSA8SW1hZ2UgY2xhc3M9XCJsb2dvXCIgc3JjPVwifi9pbWFnZXMvbG9nby5wbmdcIj48L0ltYWdlPiAtLT5cbiAgICAgICAgICAgICAgICA8di10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPExvZ28gY2xhc3M9XCJsb2dvXCIgOmxvZ289XCJsb2dvXCI+PC9Mb2dvPlxuICAgICAgICAgICAgICAgIDwvdi10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJoZWFkZXJcIiB0ZXh0PVwi7JWI64WV7ZWY7IS47JqUIO2DgOyLnOyYpCDsnoXri4jri6RcIj48L0xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBHcmlkTGF5b3V0OiDsnpDsi50g7JqU7IaM66W8IO2FjOydtOu4lOqzvCDqsJnsnYAg67Cp7Iud7Jy866GcIOygleugrCDtlaAg7IiY7J6I64qUIOugiOydtOyVhOybgyDsu6jthYzsnbTrhIggLS0+XG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cImF1dG8sIGF1dG8sIGF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBTdGFja0xheW91dDog7ZWY7JyEIOyalOyGjOulvCDshLjroZwgKOq4sOuzuOqwkikg65iQ64qUIOqwgOuhnOuhnCDsjJPsnYQg7IiY7J6I64qUIOugiOydtOyVhOybgyDsu6jthYzsnbTrhIggLS0+XG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIwXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgaGludD1cIkVtYWlsXCIgOmlzRW5hYmxlZD1cIiFwcm9jZXNzaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU9XCJlbWFpbFwiIGF1dG9jb3JyZWN0PVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XCJub25lXCIgdi1tb2RlbD1cInVzZXIuZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU9XCJuZXh0XCIgQHJldHVyblByZXNzPVwiZm9jdXNQYXNzd29yZFwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCByb3c9XCIxXCIgY2xhc3M9XCJpbnB1dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cImlucHV0XCIgcmVmPVwicGFzc3dvcmRcIiA6aXNFbmFibGVkPVwiIXByb2Nlc3NpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ9XCJQYXNzd29yZFwiIHNlY3VyZT1cInRydWVcIiB2LW1vZGVsPVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJldHVybktleVR5cGU9XCJpc0xvZ2dpbmdJbiA/ICdkb25lJyA6ICduZXh0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVyblByZXNzPVwiZm9jdXNDb25maXJtUGFzc3dvcmRcIj48L1RleHRGaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjbGFzcz1cImhyLWxpZ2h0XCI+PC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cblxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMlwiIHYtc2hvdz1cIiFpc0xvZ2dpbmdJblwiIGNsYXNzPVwiaW5wdXQtZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3M9XCJpbnB1dFwiIHJlZj1cImNvbmZpcm1QYXNzd29yZFwiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGludD1cIkNvbmZpcm0gcGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCIgdi1tb2RlbD1cInVzZXIuY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5LZXlUeXBlPVwiZG9uZVwiPjwvVGV4dEZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gQWN0aXZpdHlJbmRpY2F0b3I6IOuwseq3uOudvOyatOuTnOyXkOyEnCDsi6TtlonspJHsnbgg7Jik7Y2866CI7J207IWY7J2EIOyCrOyaqeyekOyXkOqyjCDslYzrpqzripQg7KeE7ZaJIO2RnOyLnOq4sOulvCDtkZzsi5ztlZjripQgVUkg6rWs7ISxIOyalOyGjCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPEFjdGl2aXR5SW5kaWNhdG9yIHJvd1NwYW49XCIzXCIgOmJ1c3k9XCJwcm9jZXNzaW5nXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIDp0ZXh0PVwiaXNMb2dnaW5nSW4gPyAn66Gc6re47J24JyA6ICdTaWduIFVwJ1wiIDppc0VuYWJsZWQ9XCIhcHJvY2Vzc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgIEB0YXA9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLXQtMjAgbG9naW5CdG5cIj48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8TGFiZWwgKnYtc2hvdz1cImlzTG9nZ2luZ0luXCIgdGV4dD1cIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW4tbGFiZWxcIiBAdGFwPVwiZm9yZ290UGFzc3dvcmQoKVwiPjwvTGFiZWw+XG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIgQHRhcD1cInRvZ2dsZUZvcm1cIj5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ0RvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyAnIDogJ0JhY2sgdG8gTG9naW4nXCI+PC9TcGFuPlxuICAgICAgICAgICAgICAgICAgICA8U3BhbiA6dGV4dD1cImlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJydcIiBjbGFzcz1cImJvbGRcIj48L1NwYW4+XG4gICAgICAgICAgICAgICAgPC9Gb3JtYXR0ZWRTdHJpbmc+XG4gICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICA8L0ZsZXhib3hMYXlvdXQ+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgSG9tZSBmcm9tIFwiLi9Ib21lXCI7XG4gICAgaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nby52dWVcIjtcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgTG9nb1xuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwidnVlQG5hdGl2ZXNjcmlwdC5vcmdcIixcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwidnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZDogXCJ2dWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHRvZ2dsZUZvcm0oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxvZ2luKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGJhY2tlbmRTZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgIC5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGVUbyhIb21lLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlZ2lzdGVyKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXIucGFzc3dvcmQgIT0gdGhpcy51c2VyLmNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgICAgICAgICAgIHByb21wdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBBUFAgTkFNRSB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRiYWNrZW5kU2VydmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNldFBhc3N3b3JkKGRhdGEudGV4dC50cmltKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3VyIHBhc3N3b3JkIHdhcyBzdWNjZXNzZnVsbHkgcmVzZXQuIFBsZWFzZSBjaGVjayB5b3VyIGVtYWlsIGZvciBpbnN0cnVjdGlvbnMgb24gY2hvb3NpbmcgYSBuZXcgcGFzc3dvcmQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5wYXNzd29yZC5uYXRpdmVWaWV3LmZvY3VzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZVZpZXcuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhbGVydChtZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiQVBQIE5BTUVcIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbiAgICAucGFnZSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLmZvcm0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMzA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzA7XG4gICAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEyO1xuICAgICAgICBoZWlnaHQ6IDkwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI1O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA3MDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gICAgICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgIH1cblxuICAgIC5pbnB1dC1maWVsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1O1xuICAgIH1cblxuICAgIC5pbnB1dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTg7XG4gICAgICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xuICAgIH1cblxuICAgIC5pbnB1dDpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuXG4gICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgbWFyZ2luOiAzMCA1IDE1IDU7XG4gICAgfVxuXG4gICAgLmxvZ2luLWxhYmVsIHtcbiAgICAgICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI0E4QThBODtcbiAgICAgICAgZm9udC1zaXplOiAxNjtcbiAgICB9XG5cbiAgICAuc2lnbi11cC1sYWJlbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwO1xuICAgIH1cblxuICAgIC5ib2xkIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuXG4gICAgLmxvZ2luQnRuIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0U2MTc3MztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuPGRpdj5cbiAgICA8c3ZnIGNsYXNzPVwidDFcIiB3aWR0aD1cIjI3XCIgaGVpZ2h0PVwiMzNcIiB2aWV3Qm94PVwiMCAwIDI3IDMzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNOS4xNjg5NyAyMC44ODQ1VjI0LjA2OTRIMjYuNjA5VjMyLjZIMFYwLjc2NDY2NEgyNi42MDlWOS4yOTUyNUg5LjE2ODk3VjEyLjM1MzlIMjYuNjA5VjIwLjg4NDVIOS4xNjg5N1pcIiBmaWxsPVwiI0U2MTc3M1wiIC8+XG4gICAgPC9zdmc+XG4gICAgPHN2ZyBjbGFzcz1cImExXCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjMzXCIgdmlld0JveD1cIjAgMCAxMCAzM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICA8cGF0aCBkPVwiTTkuNzc3MzMgMjMuODIzOVYzMi42MDdIMC45NzMxNDVWMC43NjQ2NjRIOS43NzczM1YxNy4yMjI1XCIgZmlsbD1cIiNFNjE3NzNcIiAvPlxuICAgIDwvc3ZnPlxuICAgIDxzdmcgY2xhc3M9XCJhMlwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTggMTRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xNy4yMTM1IDAuNzY0NjY0TDAuOTczMTQ1IDEzLjE1MzdWMC43NjQ2NjRIMTcuMjEzNVpcIiBmaWxsPVwiI0U2MTc3M1wiIC8+XG4gICAgPC9zdmc+XG5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczogWydsb2dvJ11cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi50MSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDM1LjU2JTtcbiAgICByaWdodDogNTcuMDUlO1xuICAgIHRvcDogMTkuNTUlO1xuICAgIGJvdHRvbTogNzYuMDMlO1xuICAgIGJhY2tncm91bmQ6ICNFNjE3NzM7XG5cbn1cblxuLmExIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDMuNiU7XG4gICAgcmlnaHQ6IDUzLjk1JTtcbiAgICB0b3A6IDE5LjU1JTtcbiAgICBib3R0b206IDc2LjAzJTtcblxuICAgIGJhY2tncm91bmQ6ICNFNjE3NzM7XG59XG5cbi5hMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQzLjYlO1xuICAgIHJpZ2h0OiA1MS44OSU7XG4gICAgdG9wOiAxOS41NSU7XG4gICAgYm90dG9tOiA3OC43MyU7XG5cbiAgICBiYWNrZ3JvdW5kOiAjRTYxNzczO1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnBhZ2VbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5mb3JtW2RhdGEtdi1jMjc0ODJjNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzA7XFxuICAgIG1hcmdpbi1yaWdodDogMzA7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmxvZ29bZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEyO1xcbiAgICBoZWlnaHQ6IDkwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhlYWRlcltkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiA3MDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICAgIGNvbG9yOiAjNTU1NTU1O1xcbn1cXG4uaW5wdXQtZmllbGRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDI1O1xcbn1cXG4uaW5wdXRbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIHBsYWNlaG9sZGVyLWNvbG9yOiAjQThBOEE4O1xcbn1cXG4uaW5wdXRbZGF0YS12LWMyNzQ4MmM0XTpkaXNhYmxlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxufVxcbi5idG4tcHJpbWFyeVtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgbWFyZ2luOiAzMCA1IDE1IDU7XFxufVxcbi5sb2dpbi1sYWJlbFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0E4QThBODtcXG4gICAgZm9udC1zaXplOiAxNjtcXG59XFxuLnNpZ24tdXAtbGFiZWxbZGF0YS12LWMyNzQ4MmM0XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwO1xcbn1cXG4uYm9sZFtkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxufVxcbi5sb2dpbkJ0bltkYXRhLXYtYzI3NDgyYzRdIHtcXG4gICAgYmFja2dyb3VuZDogI0U2MTc3MztcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBjb2xvcjogI0ZGRjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL0xvZ2luLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udDEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDM1LjU2JTtcXG4gICAgcmlnaHQ6IDU3LjA1JTtcXG4gICAgdG9wOiAxOS41NSU7XFxuICAgIGJvdHRvbTogNzYuMDMlO1xcbiAgICBiYWNrZ3JvdW5kOiAjRTYxNzczO1xcbn1cXG4uYTEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDQzLjYlO1xcbiAgICByaWdodDogNTMuOTUlO1xcbiAgICB0b3A6IDE5LjU1JTtcXG4gICAgYm90dG9tOiA3Ni4wMyU7XFxuXFxuICAgIGJhY2tncm91bmQ6ICNFNjE3NzM7XFxufVxcbi5hMiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNDMuNiU7XFxuICAgIHJpZ2h0OiA1MS44OSU7XFxuICAgIHRvcDogMTkuNTUlO1xcbiAgICBib3R0b206IDc4LjczJTtcXG5cXG4gICAgYmFja2dyb3VuZDogI0U2MTc3MztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG4gICAgY29uc3QgYXBwbGljYXRpb24gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbiAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBleHBvcnRzLmZvckVhY2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgICAgIGlmIChjc3NFeHBvcnQubGVuZ3RoID4gMSAmJiBjc3NFeHBvcnRbMV0pIHtcbiAgICAgICAgICAgICAgICAvLyBhcHBseWluZyB0aGUgc2Vjb25kIGl0ZW0gb2YgdGhlIGV4cG9ydCBhcyBpdCBjb250YWlucyB0aGUgY3NzIGNvbnRlbnRzXG4gICAgICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9jb21wb25lbnRzL2xvZ28udnVlJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiUGFnZVwiLFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwiWU9VUiBBUFBcIiB9IH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9keSBtLTIwXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBfdm0ubWVzc2FnZSwgdGV4dFdyYXA6IFwidHJ1ZVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTG9nIG91dFwiIH0sXG4gICAgICAgICAgICBvbjogeyB0YXA6IF92bS5sb2dvdXQgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJQYWdlXCIsXG4gICAgeyBhdHRyczogeyBhY3Rpb25CYXJIaWRkZW46IFwidHJ1ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJGbGV4Ym94TGF5b3V0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnZVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidi10ZW1wbGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHJlZi5pdGVtXG4gICAgICAgICAgICAgICAgICAgICAgdmFyICRpbmRleCA9IHJlZi4kaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJGV2ZW4gPSByZWYuJGV2ZW5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJG9kZCA9IHJlZi4kb2RkXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiTG9nb1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsb2dvOiBfdm0ubG9nbyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoZWFkZXJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIuyViOuFle2VmOyEuOyalCDtg4Dsi5zsmKQg7J6F64uI64ukXCIgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyByb3dzOiBcImF1dG8sIGF1dG8sIGF1dG9cIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1maWVsZFwiLCBhdHRyczogeyByb3c6IFwiMFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoaW50OiBcIkVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogIV92bS5wcm9jZXNzaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlib2FyZFR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3Q6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NhcGl0YWxpemF0aW9uVHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwibmV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udXNlci5lbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblByZXNzOiBfdm0uZm9jdXNQYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS51c2VyLCBcImVtYWlsXCIsICRldmVudC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBzdGF0aWNDbGFzczogXCJoci1saWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJTdGFja0xheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWZpZWxkXCIsIGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJUZXh0RmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNFbmFibGVkOiAhX3ZtLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpbnQ6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdXJlOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuS2V5VHlwZTogX3ZtLmlzTG9nZ2luZ0luID8gXCJkb25lXCIgOiBcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogX3ZtLnVzZXIucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5QcmVzczogX3ZtLmZvY3VzQ29uZmlybVBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoX3ZtLnVzZXIsIFwicGFzc3dvcmRcIiwgJGV2ZW50LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5pc0xvZ2dpbmdJbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNMb2dnaW5nSW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3c6IFwiMlwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiVGV4dEZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjb25maXJtUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGludDogXCJDb25maXJtIHBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyZTogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybktleVR5cGU6IFwiZG9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0udXNlci5jb25maXJtUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29uZmlybVBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIlN0YWNrTGF5b3V0XCIsIHsgc3RhdGljQ2xhc3M6IFwiaHItbGlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJBY3Rpdml0eUluZGljYXRvclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd1NwYW46IFwiM1wiLCBidXN5OiBfdm0ucHJvY2Vzc2luZyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IG0tdC0yMCBsb2dpbkJ0blwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uaXNMb2dnaW5nSW4gPyBcIuuhnOq3uOyduFwiIDogXCJTaWduIFVwXCIsXG4gICAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6ICFfdm0ucHJvY2Vzc2luZ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uc3VibWl0IH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxvZ2luLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIFwiKnYtc2hvd1wiOiBcImlzTG9nZ2luZ0luXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcIkZvcmdvdCB5b3VyIHBhc3N3b3JkP1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mb3Jnb3RQYXNzd29yZCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJMYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsb2dpbi1sYWJlbCBzaWduLXVwLWxhYmVsXCIsXG4gICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLnRvZ2dsZUZvcm0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJGb3JtYXR0ZWRTdHJpbmdcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcIlNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IF92bS5pc0xvZ2dpbmdJblxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkRvbuKAmXQgaGF2ZSBhbiBhY2NvdW50PyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIkJhY2sgdG8gTG9naW5cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiU3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmlzTG9nZ2luZ0luID8gXCJTaWduIHVwXCIgOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwic3ZnXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0MVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIyN1wiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjMzXCIsXG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAyNyAzM1wiLFxuICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGQ6XG4gICAgICAgICAgICAgICAgXCJNOS4xNjg5NyAyMC44ODQ1VjI0LjA2OTRIMjYuNjA5VjMyLjZIMFYwLjc2NDY2NEgyNi42MDlWOS4yOTUyNUg5LjE2ODk3VjEyLjM1MzlIMjYuNjA5VjIwLjg4NDVIOS4xNjg5N1pcIixcbiAgICAgICAgICAgICAgZmlsbDogXCIjRTYxNzczXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwic3ZnXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJhMVwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB3aWR0aDogXCIxMFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjMzXCIsXG4gICAgICAgICAgICB2aWV3Qm94OiBcIjAgMCAxMCAzM1wiLFxuICAgICAgICAgICAgZmlsbDogXCJub25lXCIsXG4gICAgICAgICAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwYXRoXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGQ6IFwiTTkuNzc3MzMgMjMuODIzOVYzMi42MDdIMC45NzMxNDVWMC43NjQ2NjRIOS43NzczM1YxNy4yMjI1XCIsXG4gICAgICAgICAgICAgIGZpbGw6IFwiI0U2MTc3M1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInN2Z1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYTJcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgd2lkdGg6IFwiMThcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxNFwiLFxuICAgICAgICAgICAgdmlld0JveDogXCIwIDAgMTggMTRcIixcbiAgICAgICAgICAgIGZpbGw6IFwibm9uZVwiLFxuICAgICAgICAgICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicGF0aFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBkOiBcIk0xNy4yMTM1IDAuNzY0NjY0TDAuOTczMTQ1IDEzLjE1MzdWMC43NjQ2NjRIMTcuMjEzNVpcIixcbiAgICAgICAgICAgICAgZmlsbDogXCIjRTYxNzczXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwLmNzc1wiLFxuXHRcIi4vYXBwLmpzXCI6IFwiLi9hcHAuanNcIixcblx0XCIuL3JvdXRlcy9pbmRleC5qc1wiOiBcIi4vcm91dGVzL2luZGV4LmpzXCIsXG5cdFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2UuanNcIjogXCIuL3NlcnZpY2VzL2JhY2tlbmQtc2VydmljZS5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKikoPzwhXFxcXC5cXFxcL1xcXFxidGVzdHNcXFxcYlxcXFwvLio/KVxcXFwuKHhtbHxjc3N8anN8KD88IVxcXFwuZFxcXFwuKXRzfCg/PCFcXFxcYl9bXFxcXHctXSpcXFxcLilzY3NzKSRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInR5cGVcIjpcInN0eWxlc2hlZXRcIixcInN0eWxlc2hlZXRcIjp7XCJydWxlc1wiOlt7XCJ0eXBlXCI6XCJjb21tZW50XCIsXCJjb21tZW50XCI6XCIgQGltcG9ydCAnbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzJzsgXCJ9LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNENTFBMUFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI2MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYnRuLXByaW1hcnk6ZGlzYWJsZWRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMC41XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07O1xuICAgIGlmIChtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6ICdzdHlsZScsIHBhdGg6ICcuL2FwcC5jc3MnIH0pO1xuICAgICAgICB9KVxuICAgIH1cbiIsImltcG9ydCBWdWUgZnJvbSBcIm5hdGl2ZXNjcmlwdC12dWVcIjtcblxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi9yb3V0ZXNcIjtcbmltcG9ydCBCYWNrZW5kU2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlcy9iYWNrZW5kLXNlcnZpY2VcIjtcblxuLy8gVW5jb21tbWVudCB0aGUgZm9sbG93aW5nIHRvIHNlZSBOYXRpdmVTY3JpcHQtVnVlIG91dHB1dCBsb2dzXG4vLyBWdWUuY29uZmlnLnNpbGVudCA9IGZhbHNlO1xuXG5jb25zdCBiYWNrZW5kU2VydmljZSA9IG5ldyBCYWNrZW5kU2VydmljZSgpO1xuVnVlLnByb3RvdHlwZS4kYmFja2VuZFNlcnZpY2UgPSBiYWNrZW5kU2VydmljZTtcblxubmV3IFZ1ZSh7XG4gIHJlbmRlcjogaCA9PiBoKFwiZnJhbWVcIiwgW2goYmFja2VuZFNlcnZpY2UuaXNMb2dnZWRJbigpID8gcm91dGVzLmhvbWUgOiByb3V0ZXMubG9naW4pXSlcbn0pLiRzdGFydCgpO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9oeWVvbnl1amluL25hdGl2ZXNjcmlwdC9Mb2dpbi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NzQxMGYzYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NzQxMGYzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSG9tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njc0MTBmM2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjc0MTBmM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvSG9tZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSG9tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ib21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzQxMGYzYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJjMjc0ODJjNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9oeWVvbnl1amluL25hdGl2ZXNjcmlwdC9Mb2dpbi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjMjc0ODJjNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjMjc0ODJjNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MyNzQ4MmM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMy0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMyNzQ4MmM0JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMjc0ODJjNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbG9nby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQ4OTk0MzQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9nby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xvZ28udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xvZ28udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9oeWVvbnl1amluL25hdGl2ZXNjcmlwdC9Mb2dpbi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwZDg5OTQzNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwZDg5OTQzNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwZDg5OTQzNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbG9nby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQ4OTk0MzQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGQ4OTk0MzQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbG9nby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9nby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9zdHlsZS1ob3QtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svYXBwbHktY3NzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0zLTIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9nby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTMtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ28udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkODk5NDM0JlwiIiwiaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Ib21lXCI7XG5cbmNvbnN0IHJvdXRlcyA9IHtcbiAgICBsb2dpbjogTG9naW4sXG4gICAgaG9tZTogSG9tZVxufVxuZXhwb3J0IGRlZmF1bHQgcm91dGVzOyIsIi8vIFRoZSBmb2xsb3dpbmcgaXMgYSBzYW1wbGUgaW1wbGVtZW50YXRpb24gb2YgYSBiYWNrZW5kIHNlcnZpY2UgdXNpbmcgUHJvZ3Jlc3MgS2ludmV5IChodHRwczovL3d3dy5wcm9ncmVzcy5jb20va2ludmV5KS5cbi8vIEZlZWwgZnJlZSB0byBzd2FwIGluIHlvdXIgb3duIHNlcnZpY2UgLyBBUElzIC8gZXRjIGhlcmUgZm9yIHlvdXIgb3duIGFwcHMuXG5cbmltcG9ydCAqIGFzIEtpbnZleSBmcm9tIFwia2ludmV5LW5hdGl2ZXNjcmlwdC1zZGtcIjtcblxuS2ludmV5LmluaXQoe1xuICAgIGFwcEtleTogXCJraWRfU3lZOExZTzhNXCIsXG4gICAgYXBwU2VjcmV0OiBcIjA5MjgyOTg1ZDdjNTQwZjdiMDc2YTljN2ZkODg0Yzc3XCJcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG5cbiAgICBpc0xvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gISFLaW52ZXkuVXNlci5nZXRBY3RpdmVVc2VyKCk7XG4gICAgfVxuXG4gICAgbG9naW4odXNlcikge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9naW4odXNlci5lbWFpbCwgdXNlci5wYXNzd29yZCk7XG4gICAgfVxuXG4gICAgbG9nb3V0KCkge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9nb3V0KCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIodXNlcikge1xuICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIuc2lnbnVwKHsgdXNlcm5hbWU6IHVzZXIuZW1haWwsIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkIH0pO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==