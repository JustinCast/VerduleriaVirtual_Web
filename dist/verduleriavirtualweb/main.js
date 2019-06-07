(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/add-product/add-product.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/add-product/add-product.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\">\r\n  <form [formGroup]=\"addProductFG\">\r\n    <h1>Agregar producto</h1>\r\n    <hr>\r\n    <mat-form-field>\r\n      <input [formControl]=\"addProductFG.get('productName')\" matInput placeholder=\"Nombre\" type=\"text\">\r\n    </mat-form-field>\r\n    <hr>\r\n    <div class=\"dropzone\" \r\n      dropZone\r\n      (hovered)=\"toggleHover($event)\"\r\n      (dropped)=\"startUpload($event)\"\r\n      [class.hovering]=\"isHovering\">\r\n  \r\n  \r\n  \r\n      <h3>Seleccione o arrastre el archivo</h3>\r\n  \r\n      <div class=\"container text-center\">\r\n        <input style=\"color: transparent\" [formControl]=\"addProductFG.get('photo')\" type=\"file\" (change)=\"startUpload($event.target.files)\">\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"percentage | async as pct\">\r\n  \r\n      <progress class=\"progress is-info\" \r\n                [value]=\"pct\" \r\n                max=\"100\">        \r\n      </progress>\r\n    \r\n      {{ pct | number }}%\r\n    \r\n    </div>\r\n    <div id=\"controls-container\" *ngIf=\"snapshot | async as snap\">\r\n      <button mat-raised-button color=\"secondary\" (click)=\"task.pause()\" [disabled]=\"!isActive(snap)\">\r\n        <mat-icon>pause</mat-icon>\r\n      </button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"task.cancel()\" [disabled]=\"!isActive(snap)\">\r\n        <mat-icon>\r\n          clear\r\n        </mat-icon>\r\n      </button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"task.resume()\" [disabled]=\"!(snap?.state === 'paused')\">\r\n        <mat-icon>\r\n          play_arrow\r\n        </mat-icon>\r\n      </button>\r\n    </div>\r\n    <div class=\"mt-2\" *ngIf=\"downloadURL | async as url\">\r\n      <button (click)=\"onSubmit(url)\" [disabled]=\"!addProductFG.valid\" color=\"primary\" id=\"done-btn\" mat-stroked-button><mat-icon>{{icon}}</mat-icon></button>\r\n    </div>\r\n  </form>\r\n\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/admin/add-product/add-product.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/add-product/add-product.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 601px) {\n  #main {\n    width: 70%; } }\n\n@media screen and (max-width: 700px) {\n  #main {\n    width: 100%; } }\n\n@media screen and (min-width: 601px) {\n  form {\n    width: 70%; } }\n\n@media screen and (max-width: 700px) {\n  form {\n    width: 100%; } }\n\nh1 {\n  color: #2B78FE; }\n\n#main {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto;\n  height: 100%; }\n\nform {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: auto;\n  text-align: center;\n  border: 0.5px solid rgba(184, 184, 184, 0.2);\n  border-radius: 15px;\n  padding: 5%; }\n\nmat-form-field {\n  width: 100%;\n  margin: auto; }\n\nprogress::-webkit-progress-value {\n  transition: width 0.1 ease; }\n\nprogress {\n  width: 100%; }\n\n.dropzone {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 300px;\n  border: 0.5px dashed #2b78fe;\n  border-radius: 5px;\n  background: white;\n  margin: 10px 0; }\n\n.dropzone.hovering {\n    border: 2px solid #f16624;\n    color: #dadada !important; }\n\n#controls-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  margin: 1.5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLXByb2R1Y3QvQzpcXFVzZXJzXFxqdXN0aVxcRG9jdW1lbnRzXFxBbmd1bGFyUHJvamVjdHNcXFZlcmR1bGVyaWFWaXJ0dWFsX1dlYi9zcmNcXGFwcFxcYWRtaW5cXGFkZC1wcm9kdWN0XFxhZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRkLXByb2R1Y3QvQzpcXFVzZXJzXFxqdXN0aVxcRG9jdW1lbnRzXFxBbmd1bGFyUHJvamVjdHNcXFZlcmR1bGVyaWFWaXJ0dWFsX1dlYi9zcmNcXGFwcFxcdWktdXRpbHNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFO0lBQ0UsVUFBVSxFQUFBLEVBQ1g7O0FBRUg7RUFDRTtJQUNFLFdBQVcsRUFBQSxFQUNaOztBQUdIO0VBQ0U7SUFDRSxVQUFVLEVBQUEsRUFDWDs7QUFFSDtFQUNFO0lBQ0UsV0FBVyxFQUFBLEVBQ1o7O0FBR0g7RUFDRSxjQ3ZCMEIsRUFBQTs7QUR5QjVCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFFZDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixXQUNGLEVBQUE7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFDRixFQUFBOztBQUVBO0VBQ0UsMEJBQ0YsRUFBQTs7QUFDQTtFQUNFLFdBQ0YsRUFBQTs7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsNEJDN0RxQjtFRDhEckIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBVGhCO0lBWU0seUJBQXlCO0lBQ3pCLHlCQUF5QixFQUFBOztBQUkvQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdWktdXRpbHMvdmFyaWFibGVzJztcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgI21haW4ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAjbWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgZm9ybSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3JcclxufVxyXG4jbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuZm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjYjhiOGI4YjQsICRhbHBoYTogMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDUlXHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiBhdXRvXHJcbn1cclxuXHJcbnByb2dyZXNzOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjEgZWFzZVxyXG59XHJcbnByb2dyZXNzIHtcclxuICB3aWR0aDogMTAwJVxyXG59XHJcbi5kcm9wem9uZSB7IFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlcjogMC41cHggZGFzaGVkICRwcmltYXJ5LWNvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgJi5ob3ZlcmluZyB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMTY2MjQ7XHJcbiAgICAgIGNvbG9yOiAjZGFkYWRhICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4jY29udHJvbHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luOiAxLjUlO1xyXG59IiwiJHByaW1hcnktY29sb3I6ICMyYjc4ZmU7XHJcbiRzZWNvbmRhcnktY29sb3I6IHdoaXRlO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMkI3OEZFO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6IGdyYXk7Il19 */"

/***/ }),

/***/ "./src/app/admin/add-product/add-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/add-product/add-product.component.ts ***!
  \************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_models_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/Product */ "./src/app/models/Product.ts");







var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(_fb, storage, _product) {
        this._fb = _fb;
        this.storage = storage;
        this._product = _product;
        this.icon = "priority_high";
        this.addProductFG = this._fb.group({
            productName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            photo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AddProductComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    AddProductComponent.prototype.startUpload = function (event) {
        var _this = this;
        // The File object
        var file = event.item(0);
        // Client-side validation example
        if (file.type.split("/")[0] !== "image") {
            console.error("unsupported file type :( ");
            return;
        }
        // The storage path
        var path = new Date().getTime() + "_" + file.name;
        // Totally optional metadata
        var customMetadata = { app: "My AngularFire-powered PWA!" };
        // The main task
        this.task = this.storage.upload(path, file, { customMetadata: customMetadata });
        this.task
            .then(function () { return console.log("success"); })
            .catch(function (err) { return console.error(err); });
        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges();
        // The file's download URL
        this.snapshot
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            _this.downloadURL = _this.storage.ref(path).getDownloadURL();
        }))
            .subscribe();
    };
    // Determines if the upload task is active
    AddProductComponent.prototype.isActive = function (snapshot) {
        return (snapshot.state === "running" &&
            snapshot.bytesTransferred < snapshot.totalBytes);
    };
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addProductFG.valueChanges.subscribe(function () {
            if (_this.addProductFG.invalid)
                _this.icon = "priority_high";
            else
                _this.icon = "done";
        });
    };
    AddProductComponent.prototype.onSubmit = function (url) {
        console.log(this.addProductFG.value);
        var product = new src_app_models_Product__WEBPACK_IMPORTED_MODULE_6__["Product"](this.addProductFG.get('productName').value, url);
        console.log(product);
        this._product.saveProduct(product);
    };
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-add-product",
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/admin/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.scss */ "./src/app/admin/add-product/add-product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-product/drop-zone.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/add-product/drop-zone.directive.ts ***!
  \**********************************************************/
/*! exports provided: DropZoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropZoneDirective", function() { return DropZoneDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropZoneDirective = /** @class */ (function () {
    function DropZoneDirective() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DropZoneDirective.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    DropZoneDirective.prototype.onDragOver = function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    };
    DropZoneDirective.prototype.onDragLeave = function ($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropZoneDirective.prototype, "dropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropZoneDirective.prototype, "hovered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDrop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropZoneDirective.prototype, "onDragLeave", null);
    DropZoneDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[dropZone]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropZoneDirective);
    return DropZoneDirective;
}());



/***/ }),

/***/ "./src/app/admin/admin-root/admin-root.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-root/admin-root.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin/admin-root/admin-root.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-root/admin-root.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXJvb3QvYWRtaW4tcm9vdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin-root/admin-root.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-root/admin-root.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRootComponent", function() { return AdminRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminRootComponent = /** @class */ (function () {
    function AdminRootComponent() {
    }
    AdminRootComponent.prototype.ngOnInit = function () {
    };
    AdminRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-root',
            template: __webpack_require__(/*! ./admin-root.component.html */ "./src/app/admin/admin-root/admin-root.component.html"),
            styles: [__webpack_require__(/*! ./admin-root.component.scss */ "./src/app/admin/admin-root/admin-root.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminRootComponent);
    return AdminRootComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-root/admin-root.component */ "./src/app/admin/admin-root/admin-root.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/admin/add-product/add-product.component.ts");






var ROUTES = [
    {
        path: "admin", component: _admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_4__["AdminRootComponent"],
        children: [
            { path: 'add-product', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"] },
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-root/admin-root.component */ "./src/app/admin/admin-root/admin-root.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/admin/add-product/add-product.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _add_product_drop_zone_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-product/drop-zone.directive */ "./src/app/admin/add-product/drop-zone.directive.ts");








var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_3__["AdminRootComponent"],
                _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"],
                _admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_3__["AdminRootComponent"],
                _add_product_drop_zone_directive__WEBPACK_IMPORTED_MODULE_7__["DropZoneDirective"],
                _admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_3__["AdminRootComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            exports: [_admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_3__["AdminRootComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer shadow-sm rounded\">\r\n  <div class=\"navBar\">\r\n    <a *ngIf=\"admin\" [routerLink]=\"['/admin/add-product']\">Producto</a>\r\n    <a [routerLink]=\"['/provider/providers']\">Proveedor</a>\r\n    <a *ngIf=\"provider\" [routerLink]=\"['/provider/show-stocktaking']\">Inventario</a>\r\n    <a *ngIf=\"provider\"[routerLink]=\"['/provider/purchases-report']\">reportes</a>\r\n    <a class=\"leaveOption\" [routerLink]=\"\">Salir</a>\r\n  </div>\r\n  <!--<h1>Verduleria virtual</h1>-->\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContainer {\n  display: flex;\n  flex-direction: column;\n  text-align: center; }\n\n.navBar {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  flex-direction: row; }\n\na {\n  padding: 0.5% 1% 0.5% 1%;\n  color: #2B78FE;\n  font-size: 18px; }\n\na:hover {\n  cursor: pointer;\n  color: gray;\n  text-decoration: none;\n  font-size: 18px; }\n\nh1 {\n  margin-top: 22%; }\n\n.leaveOption {\n  right: 2%;\n  position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxqdXN0aVxcRG9jdW1lbnRzXFxBbmd1bGFyUHJvamVjdHNcXFZlcmR1bGVyaWFWaXJ0dWFsX1dlYi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXGp1c3RpXFxEb2N1bWVudHNcXEFuZ3VsYXJQcm9qZWN0c1xcVmVyZHVsZXJpYVZpcnR1YWxfV2ViL3NyY1xcYXBwXFx1aS11dGlsc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxXQUFXO0VBQ1gsYUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx3QkFBd0I7RUFDeEIsY0NmMEI7RURnQjFCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlO0VBQ2YsV0NwQnlCO0VEcUJ6QixxQkFBb0I7RUFDcEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd1aS11dGlscy9fdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLm1haW5Db250YWluZXJ7XHJcbiAgZGlzcGxheTpmbGV4OyBcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdkJhcntcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OmZsZXg7IFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbmF7XHJcbiAgcGFkZGluZzogMC41JSAxJSAwLjUlIDElO1xyXG4gIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICRzZWNvbmRhcnktdGV4dC1jb2xvcjtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTsgXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5oMXtcclxuICBtYXJnaW4tdG9wOiAyMiU7XHJcbn1cclxuXHJcbi5sZWF2ZU9wdGlvbntcclxuICByaWdodDogMiU7IFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjMmI3OGZlO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiB3aGl0ZTtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzJCNzhGRTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiBncmF5OyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'verduleriavirtualweb';
        this.admin = false;
        this.provider = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        JSON.parse(localStorage.getItem('actual_user')).id == 'admin' ? this.admin = true : this.provider = true;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/app/router.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _provider_provider_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./provider/provider.module */ "./src/app/provider/provider.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_7__["AdminModule"],
                _provider_provider_module__WEBPACK_IMPORTED_MODULE_8__["ProviderModule"],
                //AppRoutingModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_router__WEBPACK_IMPORTED_MODULE_5__["ROUTES"])
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\" class=\"main \">\r\n  <h2 class=\"title container\">Login</h2>\r\n  <hr>\r\n  <div class=\"text-center\">\r\n    <form class=\"form\" [formGroup]=\"loginGroup\" (ngSubmit)=\"onSubmit()\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input [formControl]=\"loginGroup.get('username')\" required matInput placeholder=\"Username\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"full-width-password\">\r\n        <input  [type]=\"show ? 'text' : 'password'\"  [formControl]=\"loginGroup.get('password')\" required matInput placeholder=\"Password\">\r\n      </mat-form-field>\r\n      <mat-icon class=\"icon\" *ngIf=\"show\" (click)=\"password()\">visibility</mat-icon>\r\n      <mat-icon class=\"icon\" *ngIf=\"!show\" (click)=\"password()\">visibility_off</mat-icon>\r\n      <button type=\"submit\" class=\"button\" mat-stroked-button color=\"primary\" [disabled]=\"loginGroup.invalid\">\r\n        <mat-icon *ngIf=\"!loginGroup.invalid\">done</mat-icon>\r\n        <mat-icon *ngIf=\"loginGroup.invalid\">warning</mat-icon>\r\n      </button>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"loading\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 601px) {\n  .full-width {\n    width: 80%; }\n  .full-width-password {\n    width: 75%; }\n  .main {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    height: 100%;\n    width: 30%;\n    margin: auto; }\n  .button {\n    width: 30%;\n    margin-left: 3%;\n    margin-top: 2%; } }\n\n@media screen and (max-width: 700px) {\n  .full-width {\n    width: 60%; }\n  .full-width-password {\n    width: 55%; }\n  .main {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    height: 100%;\n    width: 100%;\n    margin: auto; }\n  .button {\n    width: 40%;\n    margin-left: 3%;\n    margin-top: 2%; } }\n\n.spinner {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: visible;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.title {\n  color: #2B78FE;\n  text-align: center; }\n\n.form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n  text-align: center; }\n\n.icon {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxqdXN0aVxcRG9jdW1lbnRzXFxBbmd1bGFyUHJvamVjdHNcXFZlcmR1bGVyaWFWaXJ0dWFsX1dlYi9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9DOlxcVXNlcnNcXGp1c3RpXFxEb2N1bWVudHNcXEFuZ3VsYXJQcm9qZWN0c1xcVmVyZHVsZXJpYVZpcnR1YWxfV2ViL3NyY1xcYXBwXFx1aS11dGlsc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFVBQVU7SUFDVixZQUFZLEVBQUE7RUFFZDtJQUNFLFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYyxFQUFBLEVBQ2Y7O0FBR0g7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUdaO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVksRUFBQTtFQUdkO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjLEVBQUEsRUFDZjs7QUFFSDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVEsRUFBQTs7QUFFVjtFQUNFLGNDMUQwQjtFRDJEMUIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi91aS11dGlscy9fdmFyaWFibGVzJztcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAuZnVsbC13aWR0aC1wYXNzd29yZCB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gIH1cclxuICAubWFpbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuICAuYnV0dG9ue1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxuXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgfVxyXG5cclxuICAuZnVsbC13aWR0aC1wYXNzd29yZCB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gIH1cclxuICAubWFpbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgfVxyXG4gIC5idXR0b257XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgfVxyXG59XHJcbi5zcGlubmVye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDJlbTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi50aXRsZXtcclxuICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pY29ue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjMmI3OGZlO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiB3aGl0ZTtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzJCNzhGRTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiBncmF5OyJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_fb, loginService, _snackBar, _router) {
        this._fb = _fb;
        this.loginService = loginService;
        this._snackBar = _snackBar;
        this._router = _router;
        this.loading = false;
        this.show = false;
        this.eye = 'eye-slash';
        this.loginGroup = this._fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // click event function toggle
    LoginComponent.prototype.password = function () {
        this.show = !this.show;
    };
    /**
     * Function to show snackbar
     * @param msj, action
     */
    LoginComponent.prototype.snackbar = function (msj, action) {
        this._snackBar.open(msj, action, {
            duration: 3000,
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.loginGroup.invalid) {
            return;
        }
        // call service
        this.loading = true;
        // If admin
        if (this.loginGroup.get('username').value === 'admin' && this.loginGroup.get('password').value === 'admin') {
            localStorage.setItem('actual_user', JSON.stringify({ id: 'admin', nombre: 'admin' }));
            this.snackbar("Bienvenido Administrador", 'Aceptado');
            this.loading = false;
        }
        else { // Provider
            this.loginService.login(this.loginGroup.get('username').value, this.loginGroup.get('password').value).subscribe(function (user) {
                if (user.length !== 0) {
                    localStorage.setItem('actual_user', JSON.stringify({ id: user[0].id, nombre: user[0].name }));
                    _this.snackbar("Bienvenido " + (user[0].name.charAt(0).toUpperCase() + user[0].name.slice(1)), 'Aceptado');
                    _this.loading = false;
                    // TODO: navegar al main
                }
                else {
                    _this.snackbar("Informaci\u00F3n incorrecta o esta bloqueado", 'ERROR');
                    _this.loading = false;
                }
            }, function (err) {
                _this.snackbar(JSON.stringify(err), 'ERROR');
                _this.loading = false;
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_3__["loginService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/Product.ts":
/*!***********************************!*\
  !*** ./src/app/models/Product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(productName, imageURL) {
        this.productName = productName;
        this.imageURL = imageURL;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/models/Provider.ts":
/*!************************************!*\
  !*** ./src/app/models/Provider.ts ***!
  \************************************/
/*! exports provided: Provider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
var Provider = /** @class */ (function () {
    function Provider(id, user_name, name, ranking, lat, lon, block) {
        this.id = id;
        this.user_name = user_name;
        this.name = name;
        this.ranking = ranking;
        this.lat = lat;
        this.lon = lon;
        this.block = block;
    }
    return Provider;
}());



/***/ }),

/***/ "./src/app/provider/create-modify-provider/create-modify-provider.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/provider/create-modify-provider/create-modify-provider.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\">\r\n  <h2 class=\"title container\">{{ title }}</h2>\r\n  <hr>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <form class=\"form\" [formGroup]=\"providerGroup\" (ngSubmit)=\"onSubmit()\">\r\n          <mat-form-field class=\"full-width\">\r\n            <input [formControl]=\"providerGroup.get('user_name')\" required matInput placeholder=\"Username\" >\r\n          </mat-form-field>\r\n          <mat-form-field class=\"full-width\">\r\n            <input [formControl]=\"providerGroup.get('name')\" required matInput placeholder=\"Name\" >\r\n          </mat-form-field>\r\n          <p *ngIf=\"this.data.provider !== null\">Verfique su contraseña actual: </p>\r\n          <mat-form-field id=\"password\" class=\"full-width-password\">\r\n            <input [type]=\"show ? 'text' : 'password'\" [formControl]=\"providerGroup.get('password')\" required matInput placeholder=\"Contraseña\" >\r\n          </mat-form-field>\r\n          <mat-icon class=\"icon\" *ngIf=\"show && this.data.provider === null\" (click)=\"viewPassword()\">visibility</mat-icon>\r\n          <mat-icon class=\"icon\" *ngIf=\"!show && this.data.provider === null\" (click)=\"viewPassword()\">visibility_off</mat-icon>\r\n          <mat-icon class=\"icon\" *ngIf=\"this.data.provider !== null\" (click)=\"checkPassword()\">{{icon}}</mat-icon>\r\n          <mat-form-field class=\"full-width\" *ngIf=\"showNewPassword\">\r\n            <input [formControl]=\"providerGroup.get('newPassword')\" required matInput placeholder=\"Nueva Contraseña\" >\r\n          </mat-form-field>\r\n        </form>\r\n    </div>\r\n    <div class=\"col col-lg\">\r\n      <p>Marque la dirección que desea almacenar: </p>\r\n      <agm-map class=\"map\" [latitude]=\"lat\" [longitude]=\"lon\" (mapClick)=\"onChoseLocation($event)\">\r\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lon\" [markerDraggable]=\"true\" (dragEnd)=\"dragEnd($event)\"></agm-marker>\r\n      </agm-map>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <button class=\"button\" mat-stroked-button color=\"primary\" (click)=\"onSubmit()\">\r\n      Guardar\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"loading\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/provider/create-modify-provider/create-modify-provider.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/provider/create-modify-provider/create-modify-provider.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 601px) {\n  .full-width {\n    width: 60%; }\n  .full-width-password {\n    width: 55%; }\n  .button {\n    width: 20%;\n    margin: 10% auto 0.2% auto; }\n  .map {\n    width: 100%;\n    height: 200px; } }\n\n@media screen and (max-width: 700px) {\n  .full-width {\n    width: 90%; }\n  .full-width-password {\n    width: 85%; }\n  .button {\n    width: 85%;\n    margin: 92% auto 0.2% auto; }\n  .map {\n    width: 100%;\n    height: 350%; } }\n\n.spinner {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: visible;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\n.title {\n  color: #2B78FE;\n  text-align: center; }\n\n.spinner-icon {\n  position: absolute;\n  right: 0; }\n\n.icon {\n  cursor: pointer;\n  color: #2b78fe; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY3JlYXRlLW1vZGlmeS1wcm92aWRlci9DOlxcVXNlcnNcXGp1c3RpXFxEb2N1bWVudHNcXEFuZ3VsYXJQcm9qZWN0c1xcVmVyZHVsZXJpYVZpcnR1YWxfV2ViL3NyY1xcYXBwXFxwcm92aWRlclxcY3JlYXRlLW1vZGlmeS1wcm92aWRlclxcY3JlYXRlLW1vZGlmeS1wcm92aWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvdmlkZXIvY3JlYXRlLW1vZGlmeS1wcm92aWRlci9DOlxcVXNlcnNcXGp1c3RpXFxEb2N1bWVudHNcXEFuZ3VsYXJQcm9qZWN0c1xcVmVyZHVsZXJpYVZpcnR1YWxfV2ViL3NyY1xcYXBwXFx1aS11dGlsc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsV0FBVztJQUNYLGFBQWEsRUFBQSxFQUNkOztBQUVIO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVTtJQUNWLDBCQUEwQixFQUFBO0VBRTVCO0lBQ0UsV0FBVztJQUNYLFlBQVksRUFBQSxFQUNiOztBQUVIO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUSxFQUFBOztBQUVWO0VBQ0UsY0M1QzBCO0VENkMxQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUSxFQUFBOztBQUVWO0VBQ0UsZUFBZTtFQUNmLGNDdkRxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvY3JlYXRlLW1vZGlmeS1wcm92aWRlci9jcmVhdGUtbW9kaWZ5LXByb3ZpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdWktdXRpbHMvX3ZhcmlhYmxlcyc7XHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuICAuZnVsbC13aWR0aC1wYXNzd29yZHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgfVxyXG4gIC5idXR0b257XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luOiAxMCUgYXV0byAwLjIlIGF1dG87XHJcbiAgfVxyXG4gIC5tYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgLmZ1bGwtd2lkdGgtcGFzc3dvcmR7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gIH1cclxuICAuYnV0dG9ue1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogOTIlIGF1dG8gMC4yJSBhdXRvO1xyXG4gIH1cclxuICAubWFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNTAlO1xyXG4gIH1cclxufVxyXG4uc3Bpbm5lcntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG4udGl0bGV7XHJcbiAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3I7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5zcGlubmVyLWljb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbi5pY29ue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbn1cclxuXHJcblxyXG4iLCIkcHJpbWFyeS1jb2xvcjogIzJiNzhmZTtcclxuJHNlY29uZGFyeS1jb2xvcjogd2hpdGU7XHJcbiRwcmltYXJ5LXRleHQtY29sb3I6ICMyQjc4RkU7XHJcbiRzZWNvbmRhcnktdGV4dC1jb2xvcjogZ3JheTsiXX0= */"

/***/ }),

/***/ "./src/app/provider/create-modify-provider/create-modify-provider.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/provider/create-modify-provider/create-modify-provider.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CreateModifyProviderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateModifyProviderComponent", function() { return CreateModifyProviderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/Provider */ "./src/app/models/Provider.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/provider.service */ "./src/app/services/provider.service.ts");






var CreateModifyProviderComponent = /** @class */ (function () {
    function CreateModifyProviderComponent(dialogRef, data, _fb, _providerService, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._fb = _fb;
        this._providerService = _providerService;
        this._snackBar = _snackBar;
        this.loading = false;
        this.showNewPassword = false;
        this.icon = "warning";
        this.lat = 9.934739;
        this.lon = -84.087502;
        this.show = true;
        this.fillDefaultProvider(); // Default provider
        this.providerGroup = this._fb.group({
            user_name: [this.actualProvider.user_name === undefined ? '' : this.actualProvider.user_name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: [this.actualProvider.name === undefined ? '' : this.actualProvider.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', this.actualProvider.id === undefined ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required : _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator],
            newPassword: ['', this.actualProvider.id === undefined ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required : _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator]
        });
    }
    CreateModifyProviderComponent.prototype.viewPassword = function () {
        this.show = !this.show;
    };
    // Set provider location
    CreateModifyProviderComponent.prototype.setActualLocation = function (lat, lon) {
        this.lat = lat;
        this.lon = lon;
    };
    CreateModifyProviderComponent.prototype.onChoseLocation = function (event) {
        this.lat = event.coords.lat;
        this.lon = event.coords.lng;
    };
    // Fill default provider for update or create
    CreateModifyProviderComponent.prototype.fillDefaultProvider = function () {
        this.data.provider === null ? this.actualProvider = new src_app_models_Provider__WEBPACK_IMPORTED_MODULE_3__["Provider"]() : this.actualProvider = this.data.provider;
        this.data.provider === null ? this.title = 'Crear un Proveedor' : this.title = 'Actualizar Datos';
        this.data.provider !== null ? this.setActualLocation(+this.data.provider.lat, +this.data.provider.lon) : null;
    };
    CreateModifyProviderComponent.prototype.ngOnInit = function () {
    };
    /**
     * Function to show snackbar
     * @param msj, action
     */
    CreateModifyProviderComponent.prototype.snackbar = function (msj, action) {
        this._snackBar.open(msj, action, {
            duration: 3000,
        });
    };
    // Check password
    CreateModifyProviderComponent.prototype.checkPassword = function () {
        var _this = this;
        this._providerService.checkPassword(this.actualProvider.id, this.providerGroup.get('password').value)
            .subscribe(function (res) {
            if (res.length > 0) {
                _this.showNewPassword = true;
                _this.icon = 'check';
                _this.snackbar('Contraseña Correcta', 'Aceptado');
            }
            else {
                _this.snackbar('Contraseña Incorrecta', 'ERROR');
                _this.showNewPassword = false;
            }
        }, function (err) { _this.snackbar(err, 'ERROR'); _this.showNewPassword = false; });
    };
    CreateModifyProviderComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateModifyProviderComponent.prototype.dragEnd = function (event) {
        this.lat = event.coords.lat;
        this.lon = event.coords.lng;
    };
    /**
     * Function to validate create provider
     * @param {}
     * return provider{user_name, password,name, lat, lon, create}
     */
    CreateModifyProviderComponent.prototype.validateCreateProvider = function () {
        if (this.providerGroup.get('user_name').value === ''
            || this.providerGroup.get('name').value === ''
            || this.providerGroup.get('password').value === '') {
            return null;
        }
        else {
            return {
                user_name: this.providerGroup.get('user_name').value,
                name: this.providerGroup.get('name').value,
                password: this.providerGroup.get('password').value,
                lat: this.lat,
                lon: this.lon,
                create: true
            };
        }
    };
    /**
     *  Function to validate update provider
     * @param {}
     * return provider{user_name, password,name, lat, lon, create}
     */
    CreateModifyProviderComponent.prototype.validateUpdateProvider = function () {
        if (this.providerGroup.get('user_name').value === ''
            || this.providerGroup.get('name').value === ''
            || (this.providerGroup.get('password').value) !== '' &&
                this.providerGroup.get('newPassword').value === '') {
            return null;
        }
        else {
            var provider = {
                id: this.actualProvider.id,
                user_name: this.providerGroup.get('user_name').value,
                name: this.providerGroup.get('name').value,
                password: this.providerGroup.get('password').value === '' ? null : this.providerGroup.get('newPassword').value,
                lat: this.lat,
                lon: this.lon,
                block: false
            };
            return provider;
        }
    };
    CreateModifyProviderComponent.prototype.onSubmit = function () {
        var _this = this;
        var provider;
        if (this.actualProvider.id === undefined) { // Admin
            provider = this.validateCreateProvider();
        }
        else { // Provider
            provider = this.validateUpdateProvider();
        }
        if (provider === null) { // Error
            this.snackbar('Faltan datos por rellenar', 'ERROR');
        }
        else {
            this._providerService.updateOrCreateProvider(provider).subscribe(function (res) {
                _this.snackbar('Se realizo correctamente', 'Aceptado');
                if (_this.actualProvider.id === undefined) { // Return provider
                    _this.dialogRef.close({
                        id: res[0].id,
                        user_name: provider.user_name,
                        name: provider.name,
                        lat: provider.lat,
                        lon: provider.lon,
                        block: false,
                        ranking: 0
                    });
                }
                else {
                    _this.dialogRef.close();
                }
            }, function (err) { return _this.snackbar(err, 'ERROR'); });
        }
    };
    CreateModifyProviderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-modify-provider',
            template: __webpack_require__(/*! ./create-modify-provider.component.html */ "./src/app/provider/create-modify-provider/create-modify-provider.component.html"),
            styles: [__webpack_require__(/*! ./create-modify-provider.component.scss */ "./src/app/provider/create-modify-provider/create-modify-provider.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_5__["ProviderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], CreateModifyProviderComponent);
    return CreateModifyProviderComponent;
}());



/***/ }),

/***/ "./src/app/provider/create-stocktaking/create-stocktaking.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/provider/create-stocktaking/create-stocktaking.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContainer\">\r\n  <form\r\n    [formGroup]=\"stockFG\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n  >\r\n  <h4 style=\"text-align: center\">{{title}}</h4>\r\n    <p *ngIf=\"this._providerServices.action == false\" style=\"text-align: center; font-size: 25px\">{{this.stock.productname}}</p>\r\n    <mat-form-field *ngIf=\"this._providerServices.action == true\">\r\n      <mat-label>Seleccione el producto</mat-label>\r\n      <mat-select [(ngModel)]=\"product\" [ngModelOptions]=\"{standalone: true}\"\r\n      >\r\n        <mat-option *ngFor=\"let product of _providerServices.productsList\" [value]=\"product\" >\r\n          {{product.productname}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input\r\n        [formControl]=\"stockFG.get('count')\"\r\n        matInput\r\n        type=\"number\"\r\n        placeholder=\"Cantidad\"\r\n      >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input\r\n        [formControl]=\"stockFG.get('price')\"\r\n        matInput\r\n        type=\"number\"\r\n        placeholder=\"Precio\"\r\n      >\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input\r\n        [formControl]=\"stockFG.get('description')\"\r\n        matInput\r\n        type=\"text\"\r\n        placeholder=\"Descripción\"\r\n      >\r\n    </mat-form-field>\r\n    <button\r\n      disabled\r\n      mat-button\r\n      type=\"submit\"\r\n      [disabled]=\"!stockFG.valid\"\r\n    >\r\n      {{buttonLabel}}\r\n    </button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/provider/create-stocktaking/create-stocktaking.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/provider/create-stocktaking/create-stocktaking.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContainer {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  height: 100%; }\n\nform {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 40%; }\n\n.submitButton {\n  width: 20%;\n  margin: 0.5% auto 0.2% auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvY3JlYXRlLXN0b2NrdGFraW5nL0M6XFxVc2Vyc1xcanVzdGlcXERvY3VtZW50c1xcQW5ndWxhclByb2plY3RzXFxWZXJkdWxlcmlhVmlydHVhbF9XZWIvc3JjXFxhcHBcXHByb3ZpZGVyXFxjcmVhdGUtc3RvY2t0YWtpbmdcXGNyZWF0ZS1zdG9ja3Rha2luZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFHZDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVU7RUFDViwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL2NyZWF0ZS1zdG9ja3Rha2luZy9jcmVhdGUtc3RvY2t0YWtpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uc3VibWl0QnV0dG9ue1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luOiAwLjUlIGF1dG8gMC4yJSBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/provider/create-stocktaking/create-stocktaking.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/provider/create-stocktaking/create-stocktaking.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateStocktakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStocktakingComponent", function() { return CreateStocktakingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/provider.service */ "./src/app/services/provider.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var CreateStocktakingComponent = /** @class */ (function () {
    function CreateStocktakingComponent(dialogRef, formBuilder, _providerServices) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this._providerServices = _providerServices;
        this.stockFG = this.formBuilder.group({
            count: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    CreateStocktakingComponent.prototype.ngOnInit = function () {
        this._providerServices.action ? (this.title = "Crear inventario", this.buttonLabel = "Crear")
            : (this.title = "Modificar inventario", this.buttonLabel = "Modificar");
        this._providerServices.getProducts();
        this._providerServices.stockToModify ? (this.stock = this._providerServices.stockToModify,
            this.stockFG.controls["count"].setValue(this.stock.count),
            this.stockFG.controls["price"].setValue(this.stock.price),
            this.stockFG.controls["description"].setValue(this.stock.description),
            !this._providerServices.action ? this.product = this.stock.productname : null) : null;
    };
    CreateStocktakingComponent.prototype.onSubmit = function () {
        var currentStock = {
            description: this.stockFG.controls["description"].value,
            price: this.stockFG.controls["price"].value,
            count: this.stockFG.controls["count"].value,
            idProvider: 1,
            idProduct: undefined,
            idCommodity: undefined
        };
        this._providerServices.action ? currentStock.idProduct = this.product.product_id
            : currentStock.idProduct = this._providerServices.stockToModify.product_id;
        this._providerServices.action ? currentStock.idCommodity = undefined
            : currentStock.idCommodity = this._providerServices.stockToModify.commodity_id;
        this._providerServices.aboutStock(currentStock);
    };
    CreateStocktakingComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateStocktakingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-stocktaking',
            template: __webpack_require__(/*! ./create-stocktaking.component.html */ "./src/app/provider/create-stocktaking/create-stocktaking.component.html"),
            styles: [__webpack_require__(/*! ./create-stocktaking.component.scss */ "./src/app/provider/create-stocktaking/create-stocktaking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"]])
    ], CreateStocktakingComponent);
    return CreateStocktakingComponent;
}());



/***/ }),

/***/ "./src/app/provider/provider-root/provider-root.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/provider/provider-root/provider-root.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/provider/provider-root/provider-root.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/provider/provider-root/provider-root.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL3Byb3ZpZGVyLXJvb3QvcHJvdmlkZXItcm9vdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/provider/provider-root/provider-root.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/provider/provider-root/provider-root.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProviderRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderRootComponent", function() { return ProviderRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProviderRootComponent = /** @class */ (function () {
    function ProviderRootComponent() {
    }
    ProviderRootComponent.prototype.ngOnInit = function () {
    };
    ProviderRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-provider-root',
            template: __webpack_require__(/*! ./provider-root.component.html */ "./src/app/provider/provider-root/provider-root.component.html"),
            styles: [__webpack_require__(/*! ./provider-root.component.scss */ "./src/app/provider/provider-root/provider-root.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProviderRootComponent);
    return ProviderRootComponent;
}());



/***/ }),

/***/ "./src/app/provider/provider-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/provider/provider-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProviderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderRoutingModule", function() { return ProviderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _provider_root_provider_root_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider-root/provider-root.component */ "./src/app/provider/provider-root/provider-root.component.ts");
/* harmony import */ var _providers_providers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/providers.component */ "./src/app/provider/providers/providers.component.ts");
/* harmony import */ var _purchases_report_purchases_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchases-report/purchases-report.component */ "./src/app/provider/purchases-report/purchases-report.component.ts");
/* harmony import */ var _stocktaking_stocktaking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stocktaking/stocktaking.component */ "./src/app/provider/stocktaking/stocktaking.component.ts");








var ROUTES = [
    {
        path: "provider",
        component: _provider_root_provider_root_component__WEBPACK_IMPORTED_MODULE_4__["ProviderRootComponent"],
        children: [
            {
                path: "providers",
                component: _providers_providers_component__WEBPACK_IMPORTED_MODULE_5__["ProvidersComponent"]
            },
            { path: "show-stocktaking", component: _stocktaking_stocktaking_component__WEBPACK_IMPORTED_MODULE_7__["StocktakingComponent"] },
            {
                path: "purchases-report",
                component: _purchases_report_purchases_report_component__WEBPACK_IMPORTED_MODULE_6__["PurchasesReportComponent"]
            }
        ]
    }
];
var ProviderRoutingModule = /** @class */ (function () {
    function ProviderRoutingModule() {
    }
    ProviderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(ROUTES)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ProviderRoutingModule);
    return ProviderRoutingModule;
}());



/***/ }),

/***/ "./src/app/provider/provider.module.ts":
/*!*********************************************!*\
  !*** ./src/app/provider/provider.module.ts ***!
  \*********************************************/
/*! exports provided: ProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderModule", function() { return ProviderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _provider_root_provider_root_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider-root/provider-root.component */ "./src/app/provider/provider-root/provider-root.component.ts");
/* harmony import */ var _provider_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider-routing.module */ "./src/app/provider/provider-routing.module.ts");
/* harmony import */ var _providers_providers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/providers.component */ "./src/app/provider/providers/providers.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _stocktaking_stocktaking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stocktaking/stocktaking.component */ "./src/app/provider/stocktaking/stocktaking.component.ts");
/* harmony import */ var _create_stocktaking_create_stocktaking_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-stocktaking/create-stocktaking.component */ "./src/app/provider/create-stocktaking/create-stocktaking.component.ts");
/* harmony import */ var _purchases_report_purchases_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./purchases-report/purchases-report.component */ "./src/app/provider/purchases-report/purchases-report.component.ts");
/* harmony import */ var _purchases_result_dialog_purchases_result_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./purchases-result-dialog/purchases-result-dialog.component */ "./src/app/provider/purchases-result-dialog/purchases-result-dialog.component.ts");
/* harmony import */ var _create_modify_provider_create_modify_provider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./create-modify-provider/create-modify-provider.component */ "./src/app/provider/create-modify-provider/create-modify-provider.component.ts");













var ProviderModule = /** @class */ (function () {
    function ProviderModule() {
    }
    ProviderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _provider_root_provider_root_component__WEBPACK_IMPORTED_MODULE_3__["ProviderRootComponent"],
                _providers_providers_component__WEBPACK_IMPORTED_MODULE_5__["ProvidersComponent"],
                _purchases_report_purchases_report_component__WEBPACK_IMPORTED_MODULE_10__["PurchasesReportComponent"],
                _purchases_result_dialog_purchases_result_dialog_component__WEBPACK_IMPORTED_MODULE_11__["PurchasesResultDialogComponent"],
                _create_modify_provider_create_modify_provider_component__WEBPACK_IMPORTED_MODULE_12__["CreateModifyProviderComponent"],
                _stocktaking_stocktaking_component__WEBPACK_IMPORTED_MODULE_8__["StocktakingComponent"],
                _create_stocktaking_create_stocktaking_component__WEBPACK_IMPORTED_MODULE_9__["CreateStocktakingComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _provider_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProviderRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBHGUUQv1uL0NOQ3C1vB8LfbOQEFNlrQHg'
                })
            ],
            entryComponents: [
                _purchases_result_dialog_purchases_result_dialog_component__WEBPACK_IMPORTED_MODULE_11__["PurchasesResultDialogComponent"],
                _create_modify_provider_create_modify_provider_component__WEBPACK_IMPORTED_MODULE_12__["CreateModifyProviderComponent"],
                _create_stocktaking_create_stocktaking_component__WEBPACK_IMPORTED_MODULE_9__["CreateStocktakingComponent"]
            ],
            exports: [_provider_root_provider_root_component__WEBPACK_IMPORTED_MODULE_3__["ProviderRootComponent"]]
        })
    ], ProviderModule);
    return ProviderModule;
}());



/***/ }),

/***/ "./src/app/provider/providers/providers.component.html":
/*!*************************************************************!*\
  !*** ./src/app/provider/providers/providers.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\"  class=\"main\">\r\n  <h2 class=\"title section parallax bg1\">Proveedor</h2>\r\n  <hr>\r\n  <div *ngFor=\"let provider of listProviders; let i = index\"  class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n          <p>ID: <span class=\"subtitle\">{{provider.id}}</span></p>\r\n          <p>Username: <span class=\"subtitle\">{{provider.user_name}}</span></p>\r\n          <p>Nombre: <span class=\"subtitle\">{{provider.name}}</span></p>\r\n          <p>Ranking: <span class=\"subtitle\">{{provider.ranking}}</span></p>\r\n          <mat-icon *ngIf=\"actualUser.id === 'admin'\" class=\"icon delete\" (click)=\"deleteProvider(provider.id)\">delete</mat-icon>\r\n          <mat-icon *ngIf=\"actualUser.id !== 'admin'\" class=\"icon edit\" (click)=\"openDialog()\">edit</mat-icon>\r\n          <mat-slide-toggle class=\"toggle\" *ngIf=\"actualUser.id === 'admin'\" [checked]=\"provider.block\" (change)=\"onChangeToggle(provider.block,provider.id)\">{{provider.block ? 'Habilitar' : 'Desabilitar'}}</mat-slide-toggle>\r\n      </div>\r\n      <div class=\"col\">\r\n        <agm-map class=\"map\" [latitude]=\"+provider.lat\" [longitude]=\"+provider.lon\" [zoom]=\"15\">\r\n            <agm-marker [latitude]=\"+provider.lat\" [longitude]=\"+provider.lon\"></agm-marker>\r\n        </agm-map>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button class=\"custom-button\" *ngIf=\"actualUser.id === 'admin'\" mat-fab color=\"primary\" (click)=\"openDialog()\">\r\n    <span style=\"font-size: 25px;\">+</span>\r\n  </button>\r\n</div>\r\n<div *ngIf=\"loading\">\r\n  <mat-spinner class=\"spinner\"></mat-spinner>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/provider/providers/providers.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/provider/providers/providers.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 601px) {\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 100%; }\n  .container {\n    border: 1px solid rgba(211, 211, 211, 0.6);\n    border-radius: 5px;\n    width: 60%;\n    padding: 1% 1% 1% 1%;\n    margin-top: 2%; } }\n\n@media screen and (max-width: 700px) {\n  .main {\n    display: flex;\n    flex-direction: column;\n    height: 100%; }\n  .container {\n    border: 1px solid rgba(211, 211, 211, 0.6);\n    border-radius: 5px;\n    width: 80%;\n    padding: 1% 1% 1% 1%;\n    margin-top: 2%; } }\n\n.title {\n  text-align: center;\n  margin-top: 2%;\n  color: #2B78FE; }\n\n#map {\n  width: 100%;\n  height: 100%; }\n\n.subtitle {\n  color: #2b78fe; }\n\n.spinner {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: visible;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n\nagm-map {\n  width: 100%;\n  height: 100%; }\n\n.icon {\n  margin-left: 5%;\n  color: #2B78FE;\n  cursor: pointer; }\n\n.custom-button {\n  position: absolute;\n  top: 5%;\n  right: 5%; }\n\n.toggle {\n  margin: 1% 2% 1% 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvcHJvdmlkZXJzL0M6XFxVc2Vyc1xcanVzdGlcXERvY3VtZW50c1xcQW5ndWxhclByb2plY3RzXFxWZXJkdWxlcmlhVmlydHVhbF9XZWIvc3JjXFxhcHBcXHByb3ZpZGVyXFxwcm92aWRlcnNcXHByb3ZpZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvdmlkZXIvcHJvdmlkZXJzL0M6XFxVc2Vyc1xcanVzdGlcXERvY3VtZW50c1xcQW5ndWxhclByb2plY3RzXFxWZXJkdWxlcmlhVmlydHVhbF9XZWIvc3JjXFxhcHBcXHVpLXV0aWxzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWSxFQUFBO0VBRWQ7SUFDRSwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsY0FBYyxFQUFBLEVBQ2Y7O0FBR0g7RUFFRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWSxFQUFBO0VBRWQ7SUFDRSwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsY0FBYyxFQUFBLEVBQ2Y7O0FBR0g7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNDbEMwQixFQUFBOztBRHNDNUI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUVkO0VBQ0UsY0M3Q3FCLEVBQUE7O0FEK0N2QjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVEsRUFBQTs7QUFHVjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxlQUFlO0VBQ2YsY0NoRTBCO0VEaUUxQixlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTLEVBQUE7O0FBRVg7RUFDRSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL3Byb3ZpZGVycy9wcm92aWRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi91aS11dGlscy9fdmFyaWFibGVzLnNjc3MnO1xyXG5AbWVkaWEgc2NyZWVuIGFuZChtaW4td2lkdGg6IDYwMXB4KSB7XHJcblxyXG4gIC5tYWlue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxMSwgMjExLCAyMTEsIDAuNik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgcGFkZGluZzogMSUgMSUgMSUgMSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogNzAwcHgpIHtcclxuXHJcbiAgLm1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTEsIDIxMSwgMC42KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiAxJSAxJSAxJSAxJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gIH1cclxufVxyXG5cclxuLnRpdGxle1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxufVxyXG5cclxuXHJcbiNtYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uc3VidGl0bGV7XHJcbiAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG59XHJcbi5zcGlubmVye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgd2lkdGg6IDJlbTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmljb257XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIGNvbG9yOiAkcHJpbWFyeS10ZXh0LWNvbG9yO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uY3VzdG9tLWJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1JTtcclxuICByaWdodDogNSU7XHJcbn1cclxuLnRvZ2dsZXtcclxuICBtYXJnaW46IDElIDIlIDElIDIlO1xyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjMmI3OGZlO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiB3aGl0ZTtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzJCNzhGRTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiBncmF5OyJdfQ== */"

/***/ }),

/***/ "./src/app/provider/providers/providers.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/provider/providers/providers.component.ts ***!
  \***********************************************************/
/*! exports provided: ProvidersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidersComponent", function() { return ProvidersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/provider.service */ "./src/app/services/provider.service.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var ProvidersComponent = /** @class */ (function () {
    function ProvidersComponent(_ps, _dialog, _snackBar) {
        this._ps = _ps;
        this._dialog = _dialog;
        this._snackBar = _snackBar;
        this.listProviders = new Array();
        this.loading = false;
        this.actualUser = null;
        // Get actual user
        this.actualUser = JSON.parse(localStorage.getItem('actual_user'));
    }
    ProvidersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this._ps.getProviders(this.actualUser.id).subscribe(function (list) {
            _this.listProviders = list.slice();
            _this.loading = false;
        }, function (err) { console.log(err); _this.loading = false; });
    };
    // Open dialog for create or update provider
    ProvidersComponent.prototype.openDialog = function () {
        // this.actualUser.id === 'admin' ?
        // this._dialog.openCreateProviders(null).subscribe(newProvider => {
        //   if(newProvider !== undefined)
        //     this.listProviders.push(newProvider);
        // })
        //  : this._dialog.openCreateProviders(this.listProviders[0]);
    };
    /**
       * Function to show snackbar
       * @param msj, action
       */
    ProvidersComponent.prototype.snackbar = function (msj, action) {
        this._snackBar.open(msj, action, {
            duration: 3000,
        });
    };
    // Delete provider
    ProvidersComponent.prototype.deleteProvider = function (id) {
        var _this = this;
        this._ps.deleteProvider(id).subscribe(function (res) {
            _this.listProviders = _this.listProviders.filter(function (provider) { return provider.id !== id; });
            _this.snackbar('Eliminado correctamente', 'Aceptado');
        }, function (err) { _this.snackbar('Este proveedor ya a sido asignado a un inventario', 'ERROR'); });
    };
    ProvidersComponent.prototype.onChangeToggle = function (block, id) {
        var _this = this;
        this._ps.blockProvider(!block, id).subscribe(function (res) {
            if (!block) {
                _this.snackbar('Se ha bloqueado correctamente', 'Aceptado');
            }
            else
                _this.snackbar('Se ha desbloqueado correctamente', 'Aceptado');
            _this.listProviders.forEach(function (e) { return e.id === id ? e.block = !block : null; });
        }, function (err) { _this.snackbar('Este proveedor ya a sido asignado a un inventario', 'ERROR'); });
    };
    ProvidersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-providers',
            template: __webpack_require__(/*! ./providers.component.html */ "./src/app/provider/providers/providers.component.html"),
            styles: [__webpack_require__(/*! ./providers.component.scss */ "./src/app/provider/providers/providers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"], src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ProvidersComponent);
    return ProvidersComponent;
}());



/***/ }),

/***/ "./src/app/provider/purchases-report/purchases-report.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/provider/purchases-report/purchases-report.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"purchases-report-container\">\r\n  <div class=\"container text-center\">\r\n    <h3>Consulte la compra de sus productos</h3>\r\n    <form [formGroup]=\"purchaseReportFG\" (ngSubmit)=\"onSubmit()\">\r\n      <mat-form-field>\r\n        <input [formControl]=\"purchaseReportFG.get('initialDate')\" matInput [matDatepicker]=\"initialDatePicker\" placeholder=\"Fecha inicial\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"initialDatePicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #initialDatePicker></mat-datepicker>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input [formControl]=\"purchaseReportFG.get('finalDate')\" matInput [matDatepicker]=\"finalDatePicker\" placeholder=\"Fecha final\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"finalDatePicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #finalDatePicker></mat-datepicker>\r\n      </mat-form-field>\r\n      <div>\r\n        <button [disabled]=\"!purchaseReportFG.valid\" mat-stroked-button color=\"primary\"><mat-icon>search</mat-icon></button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/provider/purchases-report/purchases-report.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/provider/purchases-report/purchases-report.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 601px) {\n  mat-form-field {\n    width: 40%; } }\n\n@media screen and (max-width: 700px) {\n  mat-form-field {\n    width: 90%; } }\n\n#purchases-report-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center; }\n\ndiv.container {\n  border: 0.5px dashed rgba(147, 148, 150, 0.3);\n  border-radius: 15px;\n  padding: 1%; }\n\nh3 {\n  color: #2B78FE; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvcHVyY2hhc2VzLXJlcG9ydC9DOlxcVXNlcnNcXGp1c3RpXFxEb2N1bWVudHNcXEFuZ3VsYXJQcm9qZWN0c1xcVmVyZHVsZXJpYVZpcnR1YWxfV2ViL3NyY1xcYXBwXFxwcm92aWRlclxccHVyY2hhc2VzLXJlcG9ydFxccHVyY2hhc2VzLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvdmlkZXIvcHVyY2hhc2VzLXJlcG9ydC9DOlxcVXNlcnNcXGp1c3RpXFxEb2N1bWVudHNcXEFuZ3VsYXJQcm9qZWN0c1xcVmVyZHVsZXJpYVZpcnR1YWxfV2ViL3NyY1xcYXBwXFx1aS11dGlsc1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFDRSxVQUFVLEVBQUEsRUFDWDs7QUFFSDtFQUNFO0lBQ0UsVUFBVSxFQUFBLEVBQ1g7O0FBR0g7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSw2Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNDekIwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvdmlkZXIvcHVyY2hhc2VzLXJlcG9ydC9wdXJjaGFzZXMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdWktdXRpbHMvdmFyaWFibGVzJztcclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxufVxyXG5cclxuI3B1cmNoYXNlcy1yZXBvcnQtY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdi5jb250YWluZXIge1xyXG4gIGJvcmRlcjogMC41cHggZGFzaGVkIHJnYmEoJGNvbG9yOiAjOTM5NDk2LCAkYWxwaGE6IDAuMyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuaDN7XHJcbiAgY29sb3I6ICRwcmltYXJ5LXRleHQtY29sb3JcclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjMmI3OGZlO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiB3aGl0ZTtcclxuJHByaW1hcnktdGV4dC1jb2xvcjogIzJCNzhGRTtcclxuJHNlY29uZGFyeS10ZXh0LWNvbG9yOiBncmF5OyJdfQ== */"

/***/ }),

/***/ "./src/app/provider/purchases-report/purchases-report.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/provider/purchases-report/purchases-report.component.ts ***!
  \*************************************************************************/
/*! exports provided: PurchasesReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesReportComponent", function() { return PurchasesReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/provider.service */ "./src/app/services/provider.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");





var PurchasesReportComponent = /** @class */ (function () {
    function PurchasesReportComponent(_provider, _fb, _dialog) {
        this._provider = _provider;
        this._fb = _fb;
        this._dialog = _dialog;
        this.purchaseReportFG = this._fb.group({
            initialDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            finalDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    PurchasesReportComponent.prototype.ngOnInit = function () { };
    PurchasesReportComponent.prototype.onSubmit = function () {
        var _this = this;
        var initialDate = new Date(this.purchaseReportFG.get("initialDate").value);
        var finalDate = new Date(this.purchaseReportFG.get("finalDate").value);
        var initialDateFormatted = initialDate.getFullYear() + "-" + (initialDate.getMonth() < 10
            ? "0" + Number(initialDate.getMonth() + 1)
            : Number(initialDate.getMonth() + 1)) + "-" + initialDate.getDate();
        var finalDateFormatted = finalDate.getFullYear() + "-" + (finalDate.getMonth() < 10
            ? "0" + Number(finalDate.getMonth() + 1)
            : Number(finalDate.getMonth() + 1)) + "-" + finalDate.getDate();
        this._provider
            .getPurchasesReport(1, initialDateFormatted, finalDateFormatted)
            .subscribe(function (data) { return _this._dialog.openPurchasesReportResult(data, initialDateFormatted, finalDateFormatted); }, function (err) { return _this._provider.handleError(err); });
    };
    PurchasesReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-purchases-report",
            template: __webpack_require__(/*! ./purchases-report.component.html */ "./src/app/provider/purchases-report/purchases-report.component.html"),
            styles: [__webpack_require__(/*! ./purchases-report.component.scss */ "./src/app/provider/purchases-report/purchases-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_2__["ProviderService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], PurchasesReportComponent);
    return PurchasesReportComponent;
}());



/***/ }),

/***/ "./src/app/provider/purchases-result-dialog/purchases-result-dialog.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/provider/purchases-result-dialog/purchases-result-dialog.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <ul>\r\n    <li *ngFor=\"let p of data.purchases\">\r\n      <h3><i>Compras desde {{data.initialDate}} hasta {{data.finalDate}}</i></h3>\r\n      <h4>{{p.product_name}}</h4>\r\n      <hr>\r\n      <p><strong>Cantidad: </strong>{{p._total_product}}</p>\r\n      <p><strong>Precio unitario: </strong>{{p.price}}</p>\r\n      <p><strong>Precio total: </strong>{{p.total_price}}</p>\r\n      <p><strong>Fecha: </strong>{{p._date | date : 'full'}}</p>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/provider/purchases-result-dialog/purchases-result-dialog.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/provider/purchases-result-dialog/purchases-result-dialog.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 90%;\n  list-style-type: none;\n  padding-top: 3%; }\n\nli {\n  width: 95%;\n  margin: 2%;\n  border: 0.5px dashed gray;\n  border-radius: 10px;\n  padding: 2%; }\n\nh3 {\n  color: gray; }\n\nh4 {\n  color: #2B78FE; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvcHVyY2hhc2VzLXJlc3VsdC1kaWFsb2cvQzpcXFVzZXJzXFxqdXN0aVxcRG9jdW1lbnRzXFxBbmd1bGFyUHJvamVjdHNcXFZlcmR1bGVyaWFWaXJ0dWFsX1dlYi9zcmNcXGFwcFxccHJvdmlkZXJcXHB1cmNoYXNlcy1yZXN1bHQtZGlhbG9nXFxwdXJjaGFzZXMtcmVzdWx0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvdmlkZXIvcHVyY2hhc2VzLXJlc3VsdC1kaWFsb2cvQzpcXFVzZXJzXFxqdXN0aVxcRG9jdW1lbnRzXFxBbmd1bGFyUHJvamVjdHNcXFZlcmR1bGVyaWFWaXJ0dWFsX1dlYi9zcmNcXGFwcFxcdWktdXRpbHNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxXQ2R5QixFQUFBOztBRGdCM0I7RUFDRSxjQ2xCMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL3B1cmNoYXNlcy1yZXN1bHQtZGlhbG9nL3B1cmNoYXNlcy1yZXN1bHQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdWktdXRpbHMvX3ZhcmlhYmxlcyc7XHJcbnVse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZy10b3A6IDMlO1xyXG59XHJcbmxpe1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luOiAyJTtcclxuICBib3JkZXI6IDAuNXB4IGRhc2hlZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMiU7XHJcbn1cclxuaDMge1xyXG4gIGNvbG9yOiAkc2Vjb25kYXJ5LXRleHQtY29sb3JcclxufVxyXG5oNHtcclxuICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvclxyXG59IiwiJHByaW1hcnktY29sb3I6ICMyYjc4ZmU7XHJcbiRzZWNvbmRhcnktY29sb3I6IHdoaXRlO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMkI3OEZFO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6IGdyYXk7Il19 */"

/***/ }),

/***/ "./src/app/provider/purchases-result-dialog/purchases-result-dialog.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/provider/purchases-result-dialog/purchases-result-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PurchasesResultDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasesResultDialogComponent", function() { return PurchasesResultDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var PurchasesResultDialogComponent = /** @class */ (function () {
    function PurchasesResultDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    PurchasesResultDialogComponent.prototype.ngOnInit = function () {
    };
    PurchasesResultDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PurchasesResultDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-purchases-result-dialog",
            template: __webpack_require__(/*! ./purchases-result-dialog.component.html */ "./src/app/provider/purchases-result-dialog/purchases-result-dialog.component.html"),
            styles: [__webpack_require__(/*! ./purchases-result-dialog.component.scss */ "./src/app/provider/purchases-result-dialog/purchases-result-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PurchasesResultDialogComponent);
    return PurchasesResultDialogComponent;
}());



/***/ }),

/***/ "./src/app/provider/stocktaking/stocktaking.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/provider/stocktaking/stocktaking.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\">Inventario</h2>\r\n<div class=\"mainContainer\" *ngIf=\"_providerService.stockList; else loading \">\r\n    <div class=\"stocktakingContainer shadow-sm\"\r\n    *ngFor=\"let stock of _providerService.stockList\"\r\n    >\r\n      <h3>{{stock.productname}}</h3>\r\n      <p>{{stock.description}}</p>\r\n      <div class=\"containerPriceAndQuantity\">\r\n        <p>Precio: {{stock.price}}</p>\r\n        <p>Cantidad: {{stock.count}}</p>\r\n      </div>\r\n      <div id=\"iconsContainer\">\r\n        <i class=\"material-icons\" (click)=\"openCreateStock(false, stock)\"> create </i>\r\n        <i class=\"material-icons\" (click)=\"this._providerService.deleteStock(stock.commodity_id,1)\"> delete </i>\r\n        <mat-slide-toggle\r\n          [checked]=\"stock.locked\"\r\n          (click)=\"stock.locked ? this._providerService.unlockedStock(stock.commodity_id) : this._providerService.lockedStock(stock.commodity_id)\"\r\n          >\r\n          <p *ngIf=\"stock.locked; else desabled\">\r\n            Desabilitado\r\n          </p> \r\n          <ng-template #desabled>\r\n            <p>Habilitado</p>\r\n          </ng-template>\r\n        </mat-slide-toggle>\r\n      </div>\r\n    </div>  \r\n</div>\r\n<button mat-button id=\"buttonAdd\" (click)=\"openCreateStock(true, null)\">+</button>\r\n\r\n<ng-template #loading>\r\n  <div class=\"loading\">\r\n    <mat-spinner strokeWidth=3 diameter=45 style=\"margin:auto\"></mat-spinner>\r\n    <p>Cargando</p>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/provider/stocktaking/stocktaking.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/provider/stocktaking/stocktaking.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContainer {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 2%; }\n\n.stocktakingContainer {\n  width: 60%;\n  text-align: center;\n  background-color: #2b78fe;\n  padding: 2%;\n  margin: 0.5% auto 0.5% auto;\n  border-radius: 5px; }\n\n#iconsContainer {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: row; }\n\n#buttonAdd {\n  position: fixed;\n  right: 2%;\n  bottom: 2%;\n  background-color: #2b78fe; }\n\n.title {\n  position: fixed;\n  text-align: center;\n  padding: 2%; }\n\ni {\n  margin: 0.5%;\n  color: #2B78FE; }\n\ni:hover {\n  color: gray;\n  cursor: pointer; }\n\n.containerPriceAndQuantity {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  width: 40%;\n  margin: auto; }\n\n.loading {\n  height: 100%;\n  padding-top: 25%;\n  width: 5%;\n  margin: auto;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlkZXIvc3RvY2t0YWtpbmcvQzpcXFVzZXJzXFxqdXN0aVxcRG9jdW1lbnRzXFxBbmd1bGFyUHJvamVjdHNcXFZlcmR1bGVyaWFWaXJ0dWFsX1dlYi9zcmNcXGFwcFxccHJvdmlkZXJcXHN0b2NrdGFraW5nXFxzdG9ja3Rha2luZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvdmlkZXIvc3RvY2t0YWtpbmcvQzpcXFVzZXJzXFxqdXN0aVxcRG9jdW1lbnRzXFxBbmd1bGFyUHJvamVjdHNcXFZlcmR1bGVyaWFWaXJ0dWFsX1dlYi9zcmNcXGFwcFxcdWktdXRpbHNcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLFdBQVcsRUFBQTs7QUFHWjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIseUJDWnFCO0VEYXJCLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsYUFBYTtFQUNiLHlCQUF3QjtFQUN4QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVix5QkM1QnFCLEVBQUE7O0FEK0J2QjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLGNDckMwQixFQUFBOztBRHdDNUI7RUFDRSxXQ3hDeUI7RUR5Q3pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsWUFDRixFQUFBOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFlO0VBQ2YsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Byb3ZpZGVyL3N0b2NrdGFraW5nL3N0b2NrdGFraW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vdWktdXRpbHMvdmFyaWFibGVzJztcclxuXHJcbi5tYWluQ29udGFpbmVye1xyXG4gZGlzcGxheTogZmxleDtcclxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4uc3RvY2t0YWtpbmdDb250YWluZXJ7XHJcbiAgd2lkdGg6IDYwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICBwYWRkaW5nOiAyJTtcclxuICBtYXJnaW46IDAuNSUgYXV0byAwLjUlIGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4jaWNvbnNDb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuI2J1dHRvbkFkZHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDIlO1xyXG4gIGJvdHRvbTogMiU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG5pe1xyXG4gIG1hcmdpbjogMC41JTtcclxuICBjb2xvcjogJHByaW1hcnktdGV4dC1jb2xvcjtcclxufVxyXG5cclxuaTpob3ZlcntcclxuICBjb2xvcjokc2Vjb25kYXJ5LXRleHQtY29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29udGFpbmVyUHJpY2VBbmRRdWFudGl0eXtcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG4gIHdpZHRoOiA0MCU7IFxyXG4gIG1hcmdpbjogYXV0b1xyXG59XHJcblxyXG4ubG9hZGluZ3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6MjUlO1xyXG4gIHdpZHRoOiA1JTsgXHJcbiAgbWFyZ2luOiBhdXRvOyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICMyYjc4ZmU7XHJcbiRzZWNvbmRhcnktY29sb3I6IHdoaXRlO1xyXG4kcHJpbWFyeS10ZXh0LWNvbG9yOiAjMkI3OEZFO1xyXG4kc2Vjb25kYXJ5LXRleHQtY29sb3I6IGdyYXk7Il19 */"

/***/ }),

/***/ "./src/app/provider/stocktaking/stocktaking.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/provider/stocktaking/stocktaking.component.ts ***!
  \***************************************************************/
/*! exports provided: StocktakingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocktakingComponent", function() { return StocktakingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/provider.service */ "./src/app/services/provider.service.ts");




var StocktakingComponent = /** @class */ (function () {
    function StocktakingComponent(_dialogService, _providerService) {
        this._dialogService = _dialogService;
        this._providerService = _providerService;
    }
    StocktakingComponent.prototype.ngOnInit = function () {
        this._providerService.getStocks(1);
    };
    StocktakingComponent.prototype.openCreateStock = function (action, stock) {
        stock ? this._providerService.stockToModify = stock : this._providerService.stockToModify = undefined;
        this._providerService.action = action;
        this._dialogService.openCreateStock();
    };
    StocktakingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stocktaking',
            template: __webpack_require__(/*! ./stocktaking.component.html */ "./src/app/provider/stocktaking/stocktaking.component.html"),
            styles: [__webpack_require__(/*! ./stocktaking.component.scss */ "./src/app/provider/stocktaking/stocktaking.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"],
            src_app_services_provider_service__WEBPACK_IMPORTED_MODULE_3__["ProviderService"]])
    ], StocktakingComponent);
    return StocktakingComponent;
}());



/***/ }),

/***/ "./src/app/router.ts":
/*!***************************!*\
  !*** ./src/app/router.ts ***!
  \***************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _admin_admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin-root/admin-root.component */ "./src/app/admin/admin-root/admin-root.component.ts");
/* harmony import */ var _provider_provider_root_provider_root_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provider/provider-root/provider-root.component */ "./src/app/provider/provider-root/provider-root.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var ROUTES = [
    { path: 'admin', component: _admin_admin_root_admin_root_component__WEBPACK_IMPORTED_MODULE_0__["AdminRootComponent"] },
    { path: 'provider', component: _provider_provider_root_provider_root_component__WEBPACK_IMPORTED_MODULE_1__["ProviderRootComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'main', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];


/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _provider_create_stocktaking_create_stocktaking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../provider/create-stocktaking/create-stocktaking.component */ "./src/app/provider/create-stocktaking/create-stocktaking.component.ts");
/* harmony import */ var _provider_purchases_result_dialog_purchases_result_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider/purchases-result-dialog/purchases-result-dialog.component */ "./src/app/provider/purchases-result-dialog/purchases-result-dialog.component.ts");
/* harmony import */ var _provider_create_modify_provider_create_modify_provider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../provider/create-modify-provider/create-modify-provider.component */ "./src/app/provider/create-modify-provider/create-modify-provider.component.ts");






var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.openCreateStock = function () {
        var dialogRef = this.dialog.open(_provider_create_stocktaking_create_stocktaking_component__WEBPACK_IMPORTED_MODULE_3__["CreateStocktakingComponent"], {
            width: "40%",
            height: "45%",
            panelClass: "dialog"
        });
        return dialogRef.afterClosed();
    };
    DialogService.prototype.openPurchasesReportResult = function (purchases, initialDate, finalDate) {
        var dialogRef;
        dialogRef = this.dialog.open(_provider_purchases_result_dialog_purchases_result_dialog_component__WEBPACK_IMPORTED_MODULE_4__["PurchasesResultDialogComponent"], {
            width: "70%",
            height: "80%",
            data: {
                purchases: purchases,
                initialDate: initialDate,
                finalDate: finalDate
            }
        });
        return dialogRef.afterClosed();
    };
    DialogService.prototype.openCreateProviders = function (provider) {
        var dialogRef;
        dialogRef = this.dialog.open(_provider_create_modify_provider_create_modify_provider_component__WEBPACK_IMPORTED_MODULE_5__["CreateModifyProviderComponent"], {
            width: "90%",
            height: "90%",
            data: { provider: provider }
        });
        return dialogRef.afterClosed();
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: loginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginService", function() { return loginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var loginService = /** @class */ (function () {
    function loginService(http) {
        this.http = http;
    }
    /**
     * Function to verify the user into system
     * @param config (username, password)
     */
    loginService.prototype.login = function (username, password) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "login", { username: username, password: password });
    };
    loginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], loginService);
    return loginService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var ProductService = /** @class */ (function () {
    function ProductService(_http, _snackBar) {
        this._http = _http;
        this._snackBar = _snackBar;
    }
    ProductService.prototype.saveProduct = function (product) {
        var _this = this;
        this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "createProduct", product)
            .subscribe(function () { return _this.openSnackBar('Producto guardado', 'Ok', 3000); }, function (err) { return _this.handleError(err); });
    };
    ProductService.prototype.openSnackBar = function (message, action, duration) {
        this._snackBar.open(message, action, {
            duration: duration,
        });
    };
    ProductService.prototype.handleError = function (err) {
        if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log("An error occurred:", err.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log("Backend returned code " + err.status + ", body was: " + JSON.stringify(err.error));
        }
    };
    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/provider.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/provider.service.ts ***!
  \**********************************************/
/*! exports provided: ProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderService", function() { return ProviderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var ProviderService = /** @class */ (function () {
    function ProviderService(_http, _snackBar) {
        this._http = _http;
        this._snackBar = _snackBar;
    }
    /**
     * Function to get Providers
     * @param {id}
     * return list providers{id,username,name,lat,lon}
     */
    ProviderService.prototype.getProviders = function (id) {
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "getProviders/" + id);
    };
    ProviderService.prototype.getPurchasesReport = function (id_provider, initial_date, final_date) {
        return this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "getPurchasesByProvider/" + id_provider + "/" + initial_date + "/" + final_date);
    };
    /**
       * Function to delete provider
       * @param id
       * confirmation
       */
    ProviderService.prototype.deleteProvider = function (id) {
        return this._http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "deleteProvider/" + id);
    };
    ProviderService.prototype.handleError = function (err) {
        if (err.error instanceof Error) {
            // Error del lado del cliente
            console.log("An error occurred:", err.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // Error del lado del backend
            console.log("Backend returned code " + err.status + ", body was: " + JSON.stringify(err.error));
        }
    };
    ProviderService.prototype.getStocks = function (providerId) {
        var _this = this;
        this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "getStockOfProvider/" + providerId).subscribe(function (data) {
            _this.stockList = data;
            console.log(data);
            console.log(data);
        });
    };
    ProviderService.prototype.getProducts = function () {
        var _this = this;
        this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "getAllProducts").subscribe(function (data) {
            _this.productsList = data;
            console.log(data);
        });
    };
    ProviderService.prototype.addStock = function (stock) {
        var _this = this;
        this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "addStock", {
            description: stock.description,
            price: stock.price,
            count: stock.count,
            id_product: stock.idProduct,
            id_provider: stock.idProvider
        }).subscribe(function () {
            _this.openSnackBar("Creado exitosamente");
            _this.getStocks(1);
        });
    };
    ProviderService.prototype.modifyStock = function (stock) {
        var _this = this;
        this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "modifyStock", {
            description: stock.description,
            price: stock.price,
            count: stock.count,
            id_commodity: stock.idCommodity
        }).subscribe(function () {
            _this.openSnackBar("Modificado exitosamente");
            _this.getStocks(1);
        });
    };
    ProviderService.prototype.aboutStock = function (stock) {
        this.action ? (this.addStock(stock)) : (this.modifyStock(stock));
        console.log(stock);
    };
    ProviderService.prototype.deleteStock = function (commodity_id, provider_id) {
        var _this = this;
        this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "deleteCommodity/" + commodity_id + "/" + provider_id).subscribe(function (data) {
            console.log("data" + JSON.stringify(data)),
                data[0].delete_commodity ? _this.openSnackBar("Eliminado exitosamente") : _this.openSnackBar("No se puede eliminar el inventario"),
                _this.getStocks(1);
        });
    };
    ProviderService.prototype.lockedStock = function (commodity_id) {
        var _this = this;
        var lock = true;
        this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "lockedStock/" + commodity_id + "/" + lock).subscribe(function (data) {
            console.log(data);
            _this.openSnackBar("Bloqueado exitosamente"),
                _this.getStocks(1);
        });
    };
    ProviderService.prototype.unlockedStock = function (commodity_id) {
        var _this = this;
        var lock = false;
        this._http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "lockedStock/" + commodity_id + "/" + lock).subscribe(function (data) {
            console.log(data);
            _this.openSnackBar("Desbloqueado exitosamente"),
                _this.getStocks(1);
        });
    };
    ProviderService.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, "cerrar", {
            duration: 3000
        });
    };
    /**
     * Function to checkPassword provider
     * @param {id,password}
     * return id
     */
    ProviderService.prototype.checkPassword = function (id, password) {
        return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "checkPassword", { id: id, password: password });
    };
    /**
       * Function to create or update provider
       * @param provider
       * confirmation
       */
    ProviderService.prototype.updateOrCreateProvider = function (provider) {
        return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "updateOrCreateProvider", { provider: provider });
    };
    /**
     * Function to block provider
     * @param id, block
     * confirmation
     */
    ProviderService.prototype.blockProvider = function (block, id) {
        return this._http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SERVER_BASE_URL + "blockProvider", { block: block, id: id });
    };
    ProviderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ProviderService);
    return ProviderService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                angularfire2_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCs-2ntsnVVNX6EXiWLxH-4nC3XVnM_TtY",
        authDomain: "productosfrescos-31e79.firebaseapp.com",
        databaseURL: "https://productosfrescos-31e79.firebaseio.com",
        projectId: "productosfrescos-31e79",
        storageBucket: "productosfrescos-31e79.appspot.com",
        messagingSenderId: "1014678087961",
        appId: "1:1014678087961:web:e6dc7118aada998f"
    },
    SERVER_BASE_URL: 'http://localhost:5000/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\justi\Documents\AngularProjects\VerduleriaVirtual_Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map