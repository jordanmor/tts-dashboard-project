(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <div class=\"row\">\n      <main class=\"col-sm\">\n        <router-outlet></router-outlet>\n      </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-navbar></app-navbar>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/navbar/navbar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg\">\n  <a class=\"navbar-brand\" routerLink=\"/\"><span>TTS</span> Dashboard</a>\n  <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapsed = !collapsed\" [attr.aria-expanded]=\"!collapsed\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"navbar-collapse\" [class.collapse]=\"!collapsed\" id=\"navbarContent\">\n      <div class=\"navbar-nav\">\n          <a class=\"nav-item nav-link\" routerLink=\"products\">Products <span class=\"sr-only\">(current)</span></a>\n          <a class=\"nav-item nav-link\" routerLink=\"suppliers\">Suppliers</a>\n          <a class=\"nav-item nav-link\" routerLink=\"categories\">Categories</a>\n      </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/categories/categories.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/categories/categories.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main\n  [datasetTitle]=\"datasetTitle\"\n  [datasetName]=\"datasetName\"\n></app-main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/filter/filter.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/filter/filter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"datasetName === 'products'\" ngbDropdown class=\"d-inline-block filter\">\n\n    <button [ngClass]=\"filterOn ? 'btn btn-secondary' : 'btn btn-outline-secondary'\" id=\"dropdownForm1\" ngbDropdownToggle>\n        Filter \n        <span>{{filterOn ? \"On\" : \"Off\"}}</span>\n    </button>\n\n    <div ngbDropdownMenu aria-labelledby=\"dropdownFilterForm\">\n\n        <form [formGroup]=\"filterForm\" class=\"px-4 py-3\" (ngSubmit)=\"toggleFilter()\">\n\n            <!-- <button class=\"btn btn-outline-secondary filter-btn\" (click)=\"toggleFilter()\">\n                    Turn Filter {{filterOn ? \"Off\" : \"On\"}}\n            </button> -->\n\n            <div class=\"form-group\">\n                <select (change)=\"setFilterBy($event)\" formControlName=\"filterBy\" type=\"text\" class=\"form-control\">\n                    <option [selected]=\"true\" disabled hidden>Filter By</option>\n                    <option [value]=\"'category'\">Category</option>\n                    <option [value]=\"'supplier'\">Supplier</option>\n                    <option *ngIf=\"filterAlsoBy !== 'availability'\" [value]=\"'availability'\">Availability</option>\n                </select>\n\n                <div *ngIf=\"filterBy !== ''\" class=\"form-group\">\n\n                    <ng-container *ngIf=\"filterBy !== 'availability'; else showAvailability\">\n                        <select (change)=\"setFilterByValue($event)\" formControlName=\"filterByValue\" type=\"text\" class=\"form-control\">\n                            <option [value]=\"''\" selected disabled hidden>Select {{filterBy}}</option>\n                            <ng-container *ngIf=\"filterBy === 'category'\">\n                                <option *ngFor=\"let category of categories\" [attr.value]=\"category.id\">{{ category.name }}</option>\n                            </ng-container>\n                            <ng-container *ngIf=\"filterBy === 'supplier'\">\n                                <option *ngFor=\"let supplier of suppliers\" [attr.value]=\"supplier.id\">{{ supplier.name }}</option>\n                            </ng-container>\n                        </select>\n                    </ng-container>\n\n                    <ng-template #showAvailability>\n                        <div class=\"form-group checkbox-container\">\n                            <label class=\"checkbox-label\">Is Available\n                                <input (change)=\"setFilterByValue($event)\" type=\"checkbox\" formControlName=\"filterByValue\" [checked]=true>\n                                <span class=\"\"></span>\n                            </label>\n                        </div>\n                    </ng-template>\n\n                    <div *ngIf=\"filterByValue !== ''\" class=\"form-group\">\n                        <select (change)=\"setFilterAlsoBy($event)\" type=\"text\" formControlName=\"filterAlsoBy\" class=\"form-control\">\n                            <option (change)=\"setFilterAlsoByValue($event)\" [selected]=\"true\" disabled hidden>Also Filter By</option>\n                            <option *ngIf=\"filterBy === 'availability'\" [value]=\"'category'\">Category</option>\n                            <option *ngIf=\"filterBy === 'availability'\" [value]=\"'supplier'\">Supplier</option>\n                            <option *ngIf=\"filterBy !== 'availability'\" [value]=\"'availability'\">Availability</option>\n                            <option [value]=\"'none'\">None</option>\n                        </select>\n                    </div>\n\n                    <div *ngIf=\"filterAlsoBy !== 'none'\" class=\"form-group\">\n\n                        <ng-container *ngIf=\"filterBy === 'availability'; else showAvailabilityTwo\">\n                            <select (change)=\"setFilterAlsoByValue($event)\" formControlName=\"filterAlsoByValue\" type=\"text\" class=\"form-control\">\n                                <option [value]=\"''\" selected disabled hidden>Select {{filterAlsoBy}}</option>\n                                <ng-container *ngIf=\"filterAlsoBy === 'category'\">\n                                    <option *ngFor=\"let category of categories\" [attr.value]=\"category.id\">{{ category.name }}</option>\n                                </ng-container>\n                                <ng-container *ngIf=\"filterAlsoBy === 'supplier'\">\n                                    <option *ngFor=\"let supplier of suppliers\" [attr.value]=\"supplier.id\">{{ supplier.name }}</option>\n                                </ng-container>\n                            </select>\n                        </ng-container>\n\n                        <ng-template #showAvailabilityTwo>\n                            <div class=\"form-group checkbox-container\">\n                                <label class=\"checkbox-label\">Is Available\n                                    <input (change)=\"setFilterAlsoByValue($event)\" type=\"checkbox\" formControlName=\"filterAlsoByValue\" [checked]=true>\n                                    <span class=\"\"></span>\n                                </label>\n                            </div>\n                        </ng-template>\n\n                    </div>\n\n                </div>\n\n                <!-- <button *ngIf=\"filterBy !== '' && filterId !== 0\" class=\"btn btn-outline-secondary\">Submit</button> -->\n            </div>\n            <button class=\"btn btn-outline-secondary filter-btn\" [disabled]=\"!filterOn && filterByValue === ''\">\n                Turn Filter {{filterOn ? \"Off\" : \"On\"}}\n            </button>\n        </form>\n    </div>\n</div> <!-- /Filter End -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main-page-header/main-page-header.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main-page-header/main-page-header.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n    <div class=\"title\">\n        <h2>{{ datasetTitle.plural }}</h2>\n        <span>({{totalDataItems}})</span>\n    </div>\n    <div>\n        <!-- Add an Item -->\n        <button type=\"button\" (click)=\"openModal()\" class=\"btn btn-outline-secondary add\">Add a {{ datasetTitle.singular }}</button>\n        <!-- Filter -->\n        <app-filter\n            [categories]=\"categories\"\n            [suppliers]=\"suppliers\"\n            [datasetName]=\"datasetName\"\n            (onFilteredRequest)=\"filteredRequest($event)\"\n        >\n        </app-filter>\n    </div>\n</div>\n\n<!-- Alerts -->\n<div *ngIf='show' class=\"alert-group\">\n    <div [className]=\"'alert alert-' +  alertType\" role=\"alert\">\n        ...\n        <button (click)=hideAlert() type=\"button\" class=\"close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/main.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/main.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Header -->\n<app-main-page-header\n  [datasetTitle]=\"datasetTitle\"\n  [datasetName]=\"datasetName\"\n  [totalDataItems]=\"data.paginatedData.totalElements\"\n  [categories]=\"data.categories\"\n  (onModalFormSubmit)=\"handleModalFormSubmit()\"\n  [suppliers]=\"data.suppliers\"\n  (onFilteredRequest)=\"handleFilteredRequest($event)\"\n></app-main-page-header>\n\n<!-- Table -->\n<app-table\n  [datasetName]=\"datasetName\"\n  [data]=\"data.paginatedData\"\n  [filterData]=\"data.filterData\"\n  [categories]=\"data.categories\"\n  [suppliers]=\"data.suppliers\"\n  (onUpdateDataItem)=\"handleUpdateDataItem($event)\"\n  (onRemoveItem)=\"handleRemoveItem($event)\"\n  (onSortDataBy)=\"handleSortDataBy($event)\"\n>\n</app-table>\n\n<div class=\"pagination-container\">\n  <!-- Pagination -->\n  <ngb-pagination *ngIf=\"data.paginatedData.dataset && data.paginatedData.totalElements > data.paginatedData.pageSize\"\n      [collectionSize]=\"data.paginatedData.totalElements\" \n      [pageSize]=\"data.paginatedData.pageSize\"\n      [(page)]=\"data.paginatedData.currentPage\" \n      [maxSize]=\"5\" \n      [rotate]=\"true\" \n      [boundaryLinks]=\"true\"\n      (pageChange)=\"handlePageChange($event)\"\n  >\n  </ngb-pagination>\n\n  <!-- Page Size Filter -->\n  <div ngbDropdown placement=\"top-right\" class=\"d-inline-block page-size\">\n    <button class=\"btn btn-outline-secondary\" id=\"pageSizeDropDown\" ngbDropdownToggle>Page Size ({{data.paginatedData.pageSize}}) </button>\n    <div ngbDropdownMenu aria-labelledby=\"pageSizeDropDown\">\n      <button (click)=\"choosePageSize(100)\" ngbDropdownItem>100</button>\n      <button (click)=\"choosePageSize(50)\" ngbDropdownItem>50</button>\n      <button (click)=\"choosePageSize(25)\" ngbDropdownItem>25</button>\n      <button (click)=\"choosePageSize(10)\" ngbDropdownItem>10</button>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/modals/modal-category-form/modal-category-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/modals/modal-category-form/modal-category-form.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <div class=\"corner-accent top-left\"></div>\n  <div class=\"corner-accent top-right\"></div>\n  <h4 id=\"modal-basic-title\" class=\"modal-title\">Add a Category</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"addCategoryForm\" (ngSubmit)=\"submitForm()\">\n      <div class=\"form-group\">\n          <label for=\"productName\">Category Name</label>\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Category Name\" required>\n      </div>\n      <button class=\"btn btn-secondary\" [disabled]=\"!addCategoryForm.valid\">Submit</button>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">Close</button>\n  <div class=\"corner-accent bottom-left\"></div>\n  <div class=\"corner-accent bottom-right\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/modals/modal-product-form/modal-product-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/modals/modal-product-form/modal-product-form.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <div class=\"corner-accent top-left\"></div>\n    <div class=\"corner-accent top-right\"></div>\n    <h4 id=\"modal-basic-title\" class=\"modal-title\">Add a Product</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <form [formGroup]=\"addProductForm\" (ngSubmit)=\"submitForm()\">\n        <div class=\"form-group\">\n            <label for=\"productName\">Product Name</label>\n            <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"productName\" placeholder=\"Product Name\" required>\n        </div>\n        <div formGroupName=\"category\" class=\"form-group\">\n            <label for=\"productCategory\">Product Category</label>\n            <select formControlName=\"id\" class=\"form-control\" id=\"productCategory\" required>\n                <option [selected]=\"true\" disabled hidden>Choose a Category</option>\n                <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{ category.name }}</option>\n            </select>\n        </div>\n        <div formGroupName=\"supplier\" class=\"form-group\">\n            <label for=\"productSupplier\">Product Supplier</label>\n            <select formControlName=\"id\" type=\"text\" class=\"form-control\" id=\"productSupplier\" required>\n                <option [selected]=\"true\" disabled hidden>Choose a Supplier</option>\n                <option *ngFor=\"let supplier of suppliers\" [value]=\"supplier.id\">{{ supplier.name }}</option>\n            </select>\n        </div>\n        <span class=\"error-price\" *ngIf=\"addProductForm.get('salePrice').invalid && !addProductForm.get('salePrice').pristine\">Sale price can not exceed full price</span>\n        <div class=\"prices\">\n            <div class=\"form-group\">\n                <label for=\"productPrice\">Full Price</label>\n                <input type=\"number\" min=\"0.01\" step=\"0.01\" formControlName=\"fullPrice\" id=\"productPrice\" required>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"productSalePrice\">Sale Price</label>\n                <input type=\"number\" min=\"0.01\" step=\"0.01\" formControlName=\"salePrice\" id=\"productSalePrice\" required>\n            </div>\n        </div>\n        <div class=\"checkbox\">\n            <label class=\"checkbox-label\">\n                <input type=\"checkbox\" formControlName=\"availability\" >Availability\n                <span class=\"\"></span>\n            </label>\n        </div>\n        <button class=\"btn btn-secondary btn\" [disabled]=\"!addProductForm.valid\">Submit</button>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">Close</button>\n    <div class=\"corner-accent bottom-left\"></div>\n    <div class=\"corner-accent bottom-right\"></div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/modals/modal-supplier-form/modal-supplier-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/modals/modal-supplier-form/modal-supplier-form.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <div class=\"corner-accent top-left\"></div>\n  <div class=\"corner-accent top-right\"></div>\n  <h4 id=\"modal-basic-title\" class=\"modal-title\">Add a Supplier</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form [formGroup]=\"addSupplierForm\" (ngSubmit)=\"submitForm()\">\n      <div class=\"form-group\">\n          <label for=\"productName\">Supplier Name</label>\n          <input type=\"text\" formControlName=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Supplier Name\" required>\n      </div>\n      <button class=\"btn btn-secondary\" [disabled]=\"!addSupplierForm.valid\">Submit</button>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss()\">Close</button>\n  <div class=\"corner-accent bottom-left\"></div>\n  <div class=\"corner-accent bottom-right\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/products/products.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/products/products.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main\n  [datasetTitle]=\"datasetTitle\"\n  [datasetName]=\"datasetName\"\n></app-main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/suppliers/suppliers.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/suppliers/suppliers.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main\n  [datasetTitle]=\"datasetTitle\"\n  [datasetName]=\"datasetName\"\n></app-main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/table/table-header/table-header.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/table/table-header/table-header.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tr>\n  <!-- Id Table Header -->\n  <th [ngClass]=\"data.sortBy === 'id' ? 'sorted' : null\">\n      ID \n      <i (click)=\"sortDataBy('id')\" \n      [ngClass]=\"data.sortBy === 'id' && data.isSortDirectionAsc \n      ? 'fas fa-arrow-up' \n      :  data.sortBy === 'id' && !data.isSortDirectionAsc \n      ? 'fas fa-arrow-down' \n      : 'fas fa-sort'\">\n      </i>\n  </th>\n\n  <!-- Name Table Header -->\n  <th [ngClass]=\"data.sortBy === 'name' ? 'sorted' : null\">\n      Name \n      <i (click)=\"sortDataBy('name')\"\n      [ngClass]=\"data.sortBy === 'name' && data.isSortDirectionAsc \n      ? 'fas fa-arrow-up' \n      :  data.sortBy === 'name' && !data.isSortDirectionAsc \n      ? 'fas fa-arrow-down' \n      : 'fas fa-sort'\">\n      </i>\n  </th>\n\n  <!-- PRODUCT HEADERS ONLY -->\n  <ng-container *ngIf=\"datasetName === 'products'\">\n      <!-- Full Price Table Header -->\n      <th [ngClass]=\"data.sortBy === 'fullPrice' ? 'sorted' : null\">\n          Full Price \n          <i (click)=\"sortDataBy('fullPrice')\" \n          [ngClass]=\"data.sortBy === 'fullPrice' && data.isSortDirectionAsc \n                      ? 'fas fa-arrow-up' \n                      :  data.sortBy === 'fullPrice' && !data.isSortDirectionAsc \n                      ? 'fas fa-arrow-down' \n                      : 'fas fa-sort'\">\n          </i>\n      </th>\n\n      <!-- Sale Price Table Header -->\n      <th [ngClass]=\"data.sortBy === 'salePrice' ? 'sorted' : null\">\n          Sale Price \n          <i (click)=\"sortDataBy('salePrice')\" \n          [ngClass]=\"data.sortBy === 'salePrice' && data.isSortDirectionAsc \n                      ? 'fas fa-arrow-up' \n                      :  data.sortBy === 'salePrice' && !data.isSortDirectionAsc \n                      ? 'fas fa-arrow-down' \n                      : 'fas fa-sort'\">\n          </i>\n      </th>\n\n      <!-- Discount Table Header -->\n      <th [ngClass]=\"data.sortBy === 'discount' ? 'sorted' : null\">\n          Discount \n          <i (click)=\"sortDataBy('discount')\" \n          [ngClass]=\"data.sortBy === 'discount' && data.isSortDirectionAsc \n                      ? 'fas fa-arrow-up' \n                      :  data.sortBy === 'discount' && !data.isSortDirectionAsc \n                      ? 'fas fa-arrow-down' \n                      : 'fas fa-sort'\">\n          </i>\n      </th>\n\n      <!-- Category Table Header -->\n      <th [ngClass]=\"filterData.filterName1 === 'category' || filterData.filterName2 === 'category' \n                      ? 'filtered-column' \n                      : data.sortBy === 'category.name' ? 'sorted'\n                      : null \">\n          Category\n          <i *ngIf=\"filterData.filterName1 !== 'category' && filterData.filterName2 !== 'category'\" \n              (click)=\"sortDataBy('category.name')\"\n              [ngClass]=\"data.sortBy === 'category.name' && data.isSortDirectionAsc \n                              ? 'fas fa-arrow-up' \n                              : data.sortBy === 'category.name' && !data.isSortDirectionAsc \n                              ? 'fas fa-arrow-down' \n                              : 'fas fa-sort'\">\n          </i>\n      </th>\n\n      <!-- Supplier Table Header -->\n      <th [ngClass]=\"filterData.filterName1 === 'supplier' || filterData.filterName2 === 'supplier' \n                      ? 'filtered-column' \n                      : data.sortBy === 'supplier.name' \n                      ? 'sorted' \n                      : null \">\n          Supplier \n          <i *ngIf=\"filterData.filterName1 !== 'supplier' && filterData.filterName2 !== 'supplier'\" \n              (click)=\"sortDataBy('supplier.name')\" \n              [ngClass]=\"data.sortBy === 'supplier.name' && data.isSortDirectionAsc \n                          ? 'fas fa-arrow-up' \n                          : data.sortBy === 'supplier.name' && !data.isSortDirectionAsc \n                          ? 'fas fa-arrow-down' \n                          : 'fas fa-sort'\">\n          </i>\n      </th>\n      <!-- Availability Table Header -->\n      <th [ngClass]=\"filterData.filterName1 === 'availability' || filterData.filterName2 === 'availability' ? 'filtered-column' : null\">Availability</th>\n  </ng-container>\n  \n  <th></th>\n</tr>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/table/table.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/table/table.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive table-container\">\n    <table class=\"table table-bordered table-striped\">\n\n        <!-- TABLE HEADER -->\n        <app-table-header \n        class=\"thead\"\n        [data]=\"data\"\n        [filterData]=\"filterData\"\n        [datasetName]=\"datasetName\"\n        (onSortDataBy)=\"sortDataBy($event)\"\n        ></app-table-header>\n\n        <!-- TABLE BODY -->\n        <tbody *ngIf=\"data.dataset\">\n            <ng-container *ngFor=\"let dataItem of data.dataset\">\n\n                <!-- Display Data Item -->\n                <ng-container *ngIf=\"dataItem.id !== selectedId; else showForm\">\n                    <tr [attr.id]=\"dataItem.id\">\n\n                        <!-- Data -->\n                        <td>{{ dataItem.id }}</td>\n                        <td>{{ dataItem.name }}</td>\n\n                        <!-- Product Data Only -->\n                        <ng-container *ngIf=\"datasetName === 'products'\">\n                            <td>{{ dataItem.fullPrice | currency }}</td>\n                            <td>{{ dataItem.salePrice | currency }}</td>\n                            <td>{{ 1 - dataItem.salePrice / dataItem.fullPrice | percent }}</td>\n                            <td [attr.id]=\"'categoryId_' + dataItem.category.id\">{{ dataItem.category.name }}</td>\n                            <td [attr.id]=\"'supplierId_' + dataItem.supplier.id\">{{ dataItem.supplier.name }}</td>\n                            <td>{{ dataItem.availability }}</td>\n                        </ng-container>\n\n                        <td class=\"text-right\" id=\"tableDataBtns\">\n                            <div class=\"btn-group\" role=\"group\">\n                                <button type=\"button\" (click)=\"editItem(dataItem)\" class=\"btn btn-secondary\"><i class=\"far fa-edit\"></i></button>\n                                <button type=\"button\" (click)=\"removeItem(dataItem)\" class=\"btn btn-danger\"><i class=\"far fa-trash-alt\"></i></button>\n                            </div>\n                        </td>\n                    </tr>\n                </ng-container>\n\n                <!-- Update Data Item Form -->\n                <ng-template #showForm>\n                    <tr [formGroup]=\"datasetName === 'products' ? updateProductForm : updateItemForm\" [attr.id]=\"dataItem.id\">\n                        <ng-container>\n                            <!-- Data -->\n                            <td>{{ dataItem.id }}</td>\n                            <td>\n                                <input type=\"text\" [value]=\"dataItem.name\" formControlName=\"name\" autofocus required>\n                            </td>\n                        </ng-container>\n\n                        <!-- Product Data Only -->\n                        <ng-container *ngIf=\"datasetName === 'products'\">\n                            <td>\n                                <input type=\"number\" min=\"0.01\" step=\"0.01\" [value]=\"dataItem.fullPrice\" formControlName=\"fullPrice\" required>\n                            </td>\n\n                            <td>\n                                <input type=\"number\" min=\"0.01\" step=\"0.01\" [value]=\"dataItem.salePrice\" formControlName=\"salePrice\" required>\n                            </td>\n\n                            <td>{{ 1 - dataItem.salePrice / dataItem.fullPrice | percent }}</td>\n\n                            <td formGroupName=\"category\">\n                                <select formControlName=\"id\" type=\"text\" class=\"form-control\" [attr.id]=\"'categoryId_' + dataItem.category.id\">\n                                    <option *ngFor=\"let category of categories\" [selected]=\"category.id === dataItem.category.id\" [attr.value]=\"category.id\">{{ category.name }}</option>\n                                </select>\n                            </td>\n\n                            <td formGroupName=\"supplier\">\n                                <select formControlName=\"id\" type=\"text\" class=\"form-control\" [attr.id]=\"'supplierId_' + dataItem.supplier.id\">\n                                    <option *ngFor=\"let supplier of suppliers\" [selected]=\"supplier.id === dataItem.supplier.id\" [attr.value]=\"supplier.id\">{{ supplier.name }}</option>\n                                </select>\n                            </td>\n\n                            <td class=\"checkbox-container\">\n                                <label class=\"checkbox-label\">\n                                    <input type=\"checkbox\" [checked]=\"dataItem.availability\" formControlName=\"availability\" autofocus>\n                                    <span class=\"\"></span>\n                                </label>\n                            </td>\n                        </ng-container>\n\n                        <td class=\"text-right\" id=\"tableDataBtns\">\n                            <div class=\"btn-group\" role=\"group\">\n                                <button *ngIf=\"datasetName === 'products'\" type=\"button\" (click)=\"updateItem()\" class=\"btn btn-secondary\"  [disabled]=\"!updateProductForm.valid\"><i class=\"far fa-save\"></i></button>\n                                <button *ngIf=\"datasetName !== 'products'\" type=\"button\" (click)=\"updateItem()\" class=\"btn btn-secondary\"  [disabled]=\"!updateItemForm.valid\"><i class=\"far fa-save\"></i></button>\n                                <button type=\"button\" (click)=\"cancelEdit()\" class=\"btn btn-danger\"><i class=\"far fa-window-close\"></i></button>\n                            </div>\n                        </td>\n                    </tr>\n                </ng-template>\n\n            </ng-container> <!--End of main dataset container -->\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/products/products.component */ "./src/app/modules/products/products.component.ts");
/* harmony import */ var _modules_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/categories/categories.component */ "./src/app/modules/categories/categories.component.ts");
/* harmony import */ var _modules_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/suppliers/suppliers.component */ "./src/app/modules/suppliers/suppliers.component.ts");






const routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: _modules_products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"] },
    { path: 'categories', component: _modules_categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"] },
    { path: 'suppliers', component: _modules_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_5__["SuppliersComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\n  padding: 20px;\n}\n\n@media (min-width: 768px) {\n  main {\n      padding-right: 40px;\n      padding-left: 40px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtNQUNJLG1CQUFtQjtNQUNuQixrQkFBa0I7RUFDdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICBtYWluIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _modules_modals_modal_product_form_modal_product_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/modals/modal-product-form/modal-product-form.component */ "./src/app/modules/modals/modal-product-form/modal-product-form.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modules_main_page_header_main_page_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/main-page-header/main-page-header.component */ "./src/app/modules/main-page-header/main-page-header.component.ts");
/* harmony import */ var _modules_products_products_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/products/products.component */ "./src/app/modules/products/products.component.ts");
/* harmony import */ var _modules_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/categories/categories.component */ "./src/app/modules/categories/categories.component.ts");
/* harmony import */ var _modules_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/suppliers/suppliers.component */ "./src/app/modules/suppliers/suppliers.component.ts");
/* harmony import */ var _modules_filter_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/filter/filter.component */ "./src/app/modules/filter/filter.component.ts");
/* harmony import */ var _modules_modals_modal_category_form_modal_category_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/modals/modal-category-form/modal-category-form.component */ "./src/app/modules/modals/modal-category-form/modal-category-form.component.ts");
/* harmony import */ var _modules_modals_modal_supplier_form_modal_supplier_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/modals/modal-supplier-form/modal-supplier-form.component */ "./src/app/modules/modals/modal-supplier-form/modal-supplier-form.component.ts");
/* harmony import */ var _modules_main_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/main/main.component */ "./src/app/modules/main/main.component.ts");
/* harmony import */ var _modules_table_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/table/table.component */ "./src/app/modules/table/table.component.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _modules_table_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/table/table-header/table-header.component */ "./src/app/modules/table/table-header/table-header.component.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _core_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _core_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _modules_modals_modal_product_form_modal_product_form_component__WEBPACK_IMPORTED_MODULE_8__["ModalProductFormComponent"],
            _modules_main_page_header_main_page_header_component__WEBPACK_IMPORTED_MODULE_10__["MainPageHeaderComponent"],
            _modules_products_products_component__WEBPACK_IMPORTED_MODULE_11__["ProductsComponent"],
            _modules_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"],
            _modules_suppliers_suppliers_component__WEBPACK_IMPORTED_MODULE_13__["SuppliersComponent"],
            _modules_modals_modal_category_form_modal_category_form_component__WEBPACK_IMPORTED_MODULE_15__["ModalCategoryFormComponent"],
            _modules_modals_modal_supplier_form_modal_supplier_form_component__WEBPACK_IMPORTED_MODULE_16__["ModalSupplierFormComponent"],
            _modules_main_main_component__WEBPACK_IMPORTED_MODULE_17__["MainComponent"],
            _modules_table_table_component__WEBPACK_IMPORTED_MODULE_18__["TableComponent"],
            _modules_filter_filter_component__WEBPACK_IMPORTED_MODULE_14__["FilterComponent"],
            _modules_table_table_header_table_header_component__WEBPACK_IMPORTED_MODULE_21__["TableHeaderComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"]
        ],
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbActiveModal"], _core_services_data_service__WEBPACK_IMPORTED_MODULE_19__["DataService"]],
        entryComponents: [
            _modules_modals_modal_product_form_modal_product_form_component__WEBPACK_IMPORTED_MODULE_8__["ModalProductFormComponent"],
            _modules_modals_modal_category_form_modal_category_form_component__WEBPACK_IMPORTED_MODULE_15__["ModalCategoryFormComponent"],
            _modules_modals_modal_supplier_form_modal_supplier_form_component__WEBPACK_IMPORTED_MODULE_16__["ModalSupplierFormComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/models/category.ts":
/*!*****************************************!*\
  !*** ./src/app/core/models/category.ts ***!
  \*****************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
    constructor() {
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/core/models/data.ts":
/*!*************************************!*\
  !*** ./src/app/core/models/data.ts ***!
  \*************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var src_app_core_models_filterData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/filterData */ "./src/app/core/models/filterData.ts");
/* harmony import */ var _paginatedData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginatedData */ "./src/app/core/models/paginatedData.ts");


class Data {
    constructor(params = {}) {
        let { categories = [], suppliers = [], paginatedData = new _paginatedData__WEBPACK_IMPORTED_MODULE_1__["PaginatedData"](), filterData = new src_app_core_models_filterData__WEBPACK_IMPORTED_MODULE_0__["FilterData"]() } = params;
        this.categories = categories;
        this.suppliers = suppliers;
        this.paginatedData = paginatedData;
        this.filterData = filterData;
    }
}
Data.ctorParameters = () => [
    { type: Data }
];


/***/ }),

/***/ "./src/app/core/models/datasetTitle.ts":
/*!*********************************************!*\
  !*** ./src/app/core/models/datasetTitle.ts ***!
  \*********************************************/
/*! exports provided: DatasetTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasetTitle", function() { return DatasetTitle; });
class DatasetTitle {
    constructor(singular, plural) {
        this.singular = singular;
        this.plural = plural;
    }
}
DatasetTitle.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/core/models/filterData.ts":
/*!*******************************************!*\
  !*** ./src/app/core/models/filterData.ts ***!
  \*******************************************/
/*! exports provided: FilterData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterData", function() { return FilterData; });
class FilterData {
    constructor(filtered = false, filterBy = '', filterAlsoBy = 'none', filterName1 = '', filterName2 = '') {
        this.filtered = filtered;
        this.filterBy = filterBy;
        this.filterAlsoBy = filterAlsoBy;
        this.filterName1 = filterName1;
        this.filterName2 = filterName2;
    }
}
FilterData.ctorParameters = () => [
    { type: Boolean },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/core/models/paginatedData.ts":
/*!**********************************************!*\
  !*** ./src/app/core/models/paginatedData.ts ***!
  \**********************************************/
/*! exports provided: PaginatedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedData", function() { return PaginatedData; });
class PaginatedData {
    constructor(dataset = [], currentPage = 1, totalElements = 0, numberOfElements = 1, pageSize = 10, isSortDirectionAsc = true, sortBy = 'id', sortByDiscount = false) {
        this.dataset = dataset;
        this.currentPage = currentPage;
        this.totalElements = totalElements;
        this.numberOfElements = numberOfElements;
        this.pageSize = pageSize;
        this.isSortDirectionAsc = isSortDirectionAsc;
        this.sortBy = sortBy;
        this.sortByDiscount = sortByDiscount;
    }
}
PaginatedData.ctorParameters = () => [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];


/***/ }),

/***/ "./src/app/core/models/paginatedRequest.ts":
/*!*************************************************!*\
  !*** ./src/app/core/models/paginatedRequest.ts ***!
  \*************************************************/
/*! exports provided: PaginatedRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedRequest", function() { return PaginatedRequest; });
class PaginatedRequest {
    constructor(datasetName, page, pageSize, sortDirection, sortBy, sortByDiscount, filtered, filterBy, filterAlsoBy) {
        this.datasetName = datasetName;
        this.page = page - 1;
        this.pageSize = pageSize;
        this.sortDirection = sortDirection;
        this.sortBy = sortBy;
        this.sortByDiscount = sortByDiscount;
        this.filtered = filtered;
        this.filterBy = filterBy;
        this.filterAlsoBy = filterAlsoBy;
    }
}
PaginatedRequest.ctorParameters = () => [
    { type: String },
    { type: Number },
    { type: Number },
    { type: String },
    { type: String },
    { type: Boolean },
    { type: Boolean },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/core/models/product.ts":
/*!****************************************!*\
  !*** ./src/app/core/models/product.ts ***!
  \****************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var src_app_core_models_category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/category */ "./src/app/core/models/category.ts");
/* harmony import */ var _supplier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier */ "./src/app/core/models/supplier.ts");


class Product {
    constructor(id, name, fullPrice, salePrice, category, supplier, availability) {
        this.id = id;
        this.name = name;
        this.fullPrice = fullPrice;
        this.salePrice = salePrice;
        this.category = category;
        this.supplier = supplier;
        this.availability = availability;
    }
}
Product.ctorParameters = () => [
    { type: Number },
    { type: String },
    { type: Number },
    { type: Number },
    { type: src_app_core_models_category__WEBPACK_IMPORTED_MODULE_0__["Category"] },
    { type: _supplier__WEBPACK_IMPORTED_MODULE_1__["Supplier"] },
    { type: Boolean }
];


/***/ }),

/***/ "./src/app/core/models/supplier.ts":
/*!*****************************************!*\
  !*** ./src/app/core/models/supplier.ts ***!
  \*****************************************/
/*! exports provided: Supplier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Supplier", function() { return Supplier; });
class Supplier {
    constructor() {
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/core/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: rgba(228,239,246,.45); \n}\n\n.navbar a {\n  color: #3a5a78;\n  font-weight: 600;\n}\n\n.navbar .navbar-brand {\n  font-weight: bold;\n  border-bottom: 3px solid #f7941f;\n  margin: 0 .75rem 0 0;\n  padding: 0;\n}\n\n.navbar .navbar-brand span {\n  color:#f7941f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29yZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjgsMjM5LDI0NiwuNDUpOyBcbn1cblxuLm5hdmJhciBhIHtcbiAgY29sb3I6ICMzYTVhNzg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Y3OTQxZjtcbiAgbWFyZ2luOiAwIC43NXJlbSAwIDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1icmFuZCBzcGFuIHtcbiAgY29sb3I6I2Y3OTQxZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/core/navbar/navbar.component.css")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    // Local host and path for testing and development
    // host: string = 'http://localhost:8080';
    constructor(http) {
        this.http = http;
        // Heroku host for production
        this.host = 'https://ttsdashboard.herokuapp.com';
    }
    getPaginatedData(paginatedRequest) {
        const { datasetName, page, pageSize, sortDirection, sortBy, sortByDiscount, filtered } = paginatedRequest;
        if (datasetName === 'products') {
            if (filtered) {
                const { filterBy, filterAlsoBy } = paginatedRequest;
                // Filtered product request
                return this.http.get(`${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}&sortByDiscount=${sortByDiscount}&filtered=true&filterBy=${filterBy}&filterAlsoBy=${filterAlsoBy}`);
            }
            // Non-filtered product request
            return this.http.get(`${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}&sortByDiscount=${sortByDiscount}`);
        }
        else {
            // Category or supplier request
            return this.http.get(`${this.host}/${datasetName}?page=${page}&pageSize=${pageSize}&direction=${sortDirection}&sortBy=${sortBy}`);
        }
    }
    getAllCategories() {
        return this.http.get(`${this.host}/categories/all`);
    }
    getAllSuppliers() {
        return this.http.get(`${this.host}/suppliers/all`);
    }
    removeItem(id, datasetName) {
        return this.http.delete(`${this.host}/${datasetName}/${id}`);
    }
    updateData(dataItem, datasetName) {
        return this.http.put(`${this.host}/${datasetName}/${dataItem.id}`, dataItem);
    }
    createItem(dataItem, datasetName) {
        return this.http.post(`${this.host}/${datasetName}`, dataItem);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/modules/categories/categories.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/categories/categories.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/categories/categories.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/categories/categories.component.ts ***!
  \************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_models_datasetTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/datasetTitle */ "./src/app/core/models/datasetTitle.ts");



let CategoriesComponent = class CategoriesComponent {
    constructor() {
        this.datasetName = 'categories';
        this.datasetTitle = new src_app_core_models_datasetTitle__WEBPACK_IMPORTED_MODULE_2__["DatasetTitle"]("Category", "Categories");
    }
};
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/categories/categories.component.html"),
        styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/modules/categories/categories.component.css")]
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/modules/filter/filter.component.css":
/*!*****************************************************!*\
  !*** ./src/app/modules/filter/filter.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter {\n  margin-left: 1rem;\n}\n\n.filter .dropdown-menu {\n  min-width: 15rem;\n}\n\n.filter label {\n  color: var(--color-primary);\n}\n\n.filter .checkbox-label {\n  margin: 0;\n}\n\n.filter .checkbox-label span {\n  margin-left: .5rem;\n}\n\n.filter-btn {\n  width: 100%;\n  margin-bottom: .5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5maWx0ZXIgLmRyb3Bkb3duLW1lbnUge1xuICBtaW4td2lkdGg6IDE1cmVtO1xufVxuXG4uZmlsdGVyIGxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uZmlsdGVyIC5jaGVja2JveC1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmZpbHRlciAuY2hlY2tib3gtbGFiZWwgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcbn1cblxuLmZpbHRlci1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/filter/filter.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/filter/filter.component.ts ***!
  \****************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_models_filterData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/filterData */ "./src/app/core/models/filterData.ts");




let FilterComponent = class FilterComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.onFilteredRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.filterOn = false;
        this.createFilterForm();
    }
    ngOnInit() {
        this.resetFilter();
    }
    // ------- FILTER TOGGLE ------- //
    toggleFilter() {
        this.filterOn = !this.filterOn; // toggle filter
        this.createFilterRequest();
    }
    // ------- FILTER REQUEST ------- //
    setFilterData() {
        this.filterBy = this.filterForm.get('filterBy').value;
        this.filterByValue = this.filterForm.get('filterByValue').value;
        this.filterAlsoByValue = this.filterForm.get('filterAlsoByValue').value;
        this.filterAlsoBy = this.filterForm.get('filterAlsoBy').value;
        // Handles submission of filter with availability pre-checked
        if (this.filterBy === 'availability' && this.filterByValue === '') {
            this.filterByValue = true;
        }
        // Handles submission of filter with availability pre-checked
        if (this.filterAlsoBy === 'availability' && this.filterAlsoByValue === '') {
            this.filterAlsoByValue = true;
        }
    }
    createFilterRequest() {
        let filterData = new src_app_core_models_filterData__WEBPACK_IMPORTED_MODULE_3__["FilterData"]();
        filterData.filtered = this.filterOn;
        if (!this.filterOn) {
            this.resetFilter();
            this.createFilterForm();
            this.sendFilteredRequest(filterData);
        }
        else {
            this.setFilterData();
            filterData.filterBy = `${this.filterBy}+${this.filterByValue}`;
            filterData.filterAlsoBy = this.filterAlsoByValue === '' ? this.filterAlsoBy : `${this.filterAlsoBy}+${this.filterAlsoByValue}`;
            filterData.filterName1 = this.filterBy;
            filterData.filterName2 = this.filterAlsoBy;
            this.sendFilteredRequest(filterData);
        }
    }
    sendFilteredRequest(filterData) {
        this.onFilteredRequest.emit(filterData);
    }
    // -------- FILTER FORM --------- //
    createFilterForm() {
        this.filterForm = this.formBuilder.group({
            filterBy: '',
            filterByValue: '',
            filterAlsoBy: 'none',
            filterAlsoByValue: ''
        });
    }
    updateFilterFormValues() {
        const newFormData = {
            filterBy: this.filterBy,
            filterByValue: this.filterByValue,
            filterAlsoBy: this.filterAlsoBy,
            filterAlsoByValue: this.filterAlsoByValue
        };
        this.filterForm.patchValue(newFormData);
    }
    // -- SET FILTERS AND FILTER VALUES  -- //
    setFilterBy($event) {
        this.resetFilter();
        this.filterBy = $event.target.value;
        if (this.filterOn) {
            if (this.filterBy === 'availability') {
                this.filterByValue = true;
                this.updateFilterFormValues();
                this.createFilterRequest();
            }
        }
    }
    setFilterByValue($event) {
        this.filterByValue = $event.target.value;
        if (this.filterOn) {
            this.createFilterRequest();
        }
    }
    setFilterAlsoBy($event) {
        this.filterAlsoBy = $event.target.value;
        this.filterAlsoByValue = '';
        if (this.filterOn) {
            if (this.filterAlsoBy === 'availability') {
                this.filterAlsoByValue = true;
                this.updateFilterFormValues();
                this.createFilterRequest();
            }
            else if (this.filterAlsoBy === 'none')
                this.updateFilterFormValues();
            this.createFilterRequest();
        }
    }
    setFilterAlsoByValue($event) {
        this.filterAlsoByValue = $event.target.value;
        if (this.filterOn) {
            this.createFilterRequest();
        }
    }
    resetFilter() {
        this.filterBy = '';
        this.filterByValue = '';
        this.filterAlsoBy = 'none';
        this.filterAlsoByValue = '';
    }
};
FilterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilterComponent.prototype, "datasetName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilterComponent.prototype, "categories", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FilterComponent.prototype, "suppliers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FilterComponent.prototype, "onFilteredRequest", void 0);
FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: __webpack_require__(/*! raw-loader!./filter.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/filter/filter.component.html"),
        styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/modules/filter/filter.component.css")]
    })
], FilterComponent);



/***/ }),

/***/ "./src/app/modules/main-page-header/main-page-header.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/main-page-header/main-page-header.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --color-primary: #3a5a78;\n}\n\n.page-header {\n  margin-bottom: 15px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.page-header .title {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.page-header .title span {\n  position: relative;\n  top: .1rem;\n  display: inline-block;\n  font-size: 1rem;\n  margin-left: .5rem;\n  color: var(--color-primary);\n}\n\n.alert {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluLXBhZ2UtaGVhZGVyL21haW4tcGFnZS1oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi1wYWdlLWhlYWRlci9tYWluLXBhZ2UtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC0tY29sb3ItcHJpbWFyeTogIzNhNWE3ODtcbn1cblxuLnBhZ2UtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGFnZS1oZWFkZXIgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGFnZS1oZWFkZXIgLnRpdGxlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLjFyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW4tbGVmdDogLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmFsZXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/main-page-header/main-page-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/main-page-header/main-page-header.component.ts ***!
  \************************************************************************/
/*! exports provided: MainPageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageHeaderComponent", function() { return MainPageHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainPageHeaderComponent = class MainPageHeaderComponent {
    constructor() {
        this.show = false;
        this.alertType = 'success';
        this.onModalFormSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onFilteredRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    hideAlert() {
        this.show = false;
    }
    openModal() {
        this.onModalFormSubmit.emit();
    }
    filteredRequest(filterData) {
        this.onFilteredRequest.emit(filterData);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainPageHeaderComponent.prototype, "datasetTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainPageHeaderComponent.prototype, "datasetName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainPageHeaderComponent.prototype, "totalDataItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainPageHeaderComponent.prototype, "categories", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainPageHeaderComponent.prototype, "suppliers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MainPageHeaderComponent.prototype, "onModalFormSubmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MainPageHeaderComponent.prototype, "onFilteredRequest", void 0);
MainPageHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page-header',
        template: __webpack_require__(/*! raw-loader!./main-page-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main-page-header/main-page-header.component.html"),
        styles: [__webpack_require__(/*! ./main-page-header.component.css */ "./src/app/modules/main-page-header/main-page-header.component.css")]
    })
], MainPageHeaderComponent);



/***/ }),

/***/ "./src/app/modules/main/main.component.css":
/*!*************************************************!*\
  !*** ./src/app/modules/main/main.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --color-primary: #3a5a78;\n  --color-primary-faded: rgba(58,90,120, 0.6);\n}\n\nh2 {\n  color: var(--color-primary);\n}\n\n.pagination-container {\n  display: flex;\n  justify-content: flex-start;\n}\n\nngb-pagination ::ng-deep .pagination {\n  margin-bottom: 0;\n}\n\nngb-pagination ::ng-deep .page-item.active .page-link {\n  background-color: var(--color-primary);\n  border-color: var(--color-primary);\n  color: #fff;\n}\n\nngb-pagination ::ng-deep .page-item .page-link {\n  color: var(--color-primary);\n  outline: none;\n}\n\nngb-pagination ::ng-deep .page-link:focus {\n  box-shadow: 0 0 0 0.2rem rgba(58,90,120,.25);\n}\n\n.page-size {\n  margin-left: 1rem;\n}\n\n.page-size .btn-outline-secondary {\n  border-color: var(--color-primary-faded);\n  font-weight: 600;\n}\n\n.page-size .dropdown-menu {\n  min-width: 2rem;\n}\n\n.page-size .dropdown-item {\n  color: var(--color-primary);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGtDQUFrQztFQUNsQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1jb2xvci1wcmltYXJ5OiAjM2E1YTc4O1xuICAtLWNvbG9yLXByaW1hcnktZmFkZWQ6IHJnYmEoNTgsOTAsMTIwLCAwLjYpO1xufVxuXG5oMiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnBhZ2luYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG5uZ2ItcGFnaW5hdGlvbiA6Om5nLWRlZXAgLnBhZ2luYXRpb24ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5uZ2ItcGFnaW5hdGlvbiA6Om5nLWRlZXAgLnBhZ2UtaXRlbS5hY3RpdmUgLnBhZ2UtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxubmdiLXBhZ2luYXRpb24gOjpuZy1kZWVwIC5wYWdlLWl0ZW0gLnBhZ2UtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxubmdiLXBhZ2luYXRpb24gOjpuZy1kZWVwIC5wYWdlLWxpbms6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1OCw5MCwxMjAsLjI1KTtcbn1cblxuLnBhZ2Utc2l6ZSB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ucGFnZS1zaXplIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktZmFkZWQpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGFnZS1zaXplIC5kcm9wZG93bi1tZW51IHtcbiAgbWluLXdpZHRoOiAycmVtO1xufVxuXG4ucGFnZS1zaXplIC5kcm9wZG93bi1pdGVtIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/main/main.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var src_app_core_models_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/models/data */ "./src/app/core/models/data.ts");
/* harmony import */ var _core_models_paginatedRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/models/paginatedRequest */ "./src/app/core/models/paginatedRequest.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modals_modal_product_form_modal_product_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/modal-product-form/modal-product-form.component */ "./src/app/modules/modals/modal-product-form/modal-product-form.component.ts");
/* harmony import */ var _modals_modal_category_form_modal_category_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals/modal-category-form/modal-category-form.component */ "./src/app/modules/modals/modal-category-form/modal-category-form.component.ts");
/* harmony import */ var _modals_modal_supplier_form_modal_supplier_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/modal-supplier-form/modal-supplier-form.component */ "./src/app/modules/modals/modal-supplier-form/modal-supplier-form.component.ts");









let MainComponent = class MainComponent {
    constructor(dataService, modalService) {
        this.dataService = dataService;
        this.modalService = modalService;
        this.data = new src_app_core_models_data__WEBPACK_IMPORTED_MODULE_3__["Data"]();
    }
    ngOnInit() {
        this.showData(this.createPaginatedRequest(this.data));
        this.dataService.getAllCategories().subscribe(categories => this.data.categories = categories);
        this.dataService.getAllSuppliers().subscribe(suppliers => {
            this.data.suppliers = suppliers;
        });
    }
    // ---- GET AND DISPLAY DATA ---- //
    // Populate paginated data
    showData(paginatedRequest) {
        this.dataService.getPaginatedData(paginatedRequest).subscribe(response => {
            this.data.paginatedData.dataset = response.content;
            this.data.paginatedData.currentPage = response.number + 1; // page numbers from server start at 0 
            this.data.paginatedData.totalElements = response.totalElements;
            this.data.paginatedData.numberOfElements = response.numberOfElements;
            this.data.paginatedData.pageSize = response.size;
        });
    }
    // ---------- REMOVE ----------- //
    handleRemoveItem(id) {
        this.dataService.removeItem(id, this.datasetName).subscribe(res => {
            // If current data item being removed is the only one on the paginated page,
            // go to the previous page (request previous page)
            if (this.data.paginatedData.numberOfElements === 1) {
                this.data.paginatedData.currentPage -= 1;
            }
            this.showData(this.createPaginatedRequest(this.data));
        });
    }
    // ---------- UPDATE ----------- //
    handleUpdateDataItem(dataItem) {
        this.dataService.updateData(dataItem, this.datasetName).subscribe(res => {
            this.showData(this.createPaginatedRequest(this.data));
        });
    }
    // ------------ SORT ------------- //
    handleSortDataBy(sortBy) {
        this.data.paginatedData.isSortDirectionAsc = !this.data.paginatedData.isSortDirectionAsc;
        this.data.paginatedData.sortBy = sortBy;
        this.data.paginatedData.sortByDiscount = sortBy === 'discount' ? true : false;
        this.data.paginatedData.currentPage = 1;
        this.showData(this.createPaginatedRequest(this.data));
    }
    // ---------- FILTERS ----------- //
    // Table Filter
    handleFilteredRequest(filterData) {
        if (!filterData.filtered) {
            // Reset sort and current page
            this.data.paginatedData.isSortDirectionAsc = true;
            this.data.paginatedData.sortBy = 'id';
            this.data.paginatedData.currentPage = 1;
        }
        this.data.filterData.filtered = filterData.filtered;
        this.data.filterData.filterBy = filterData.filterBy;
        this.data.filterData.filterAlsoBy = filterData.filterAlsoBy;
        this.data.filterData.filterName1 = filterData.filterName1;
        this.data.filterData.filterName2 = filterData.filterName2;
        this.showData(this.createPaginatedRequest(this.data));
    }
    // Page Size Filter
    choosePageSize(pageSize) {
        this.data.paginatedData.pageSize = pageSize;
        this.data.paginatedData.currentPage = 1;
        this.showData(this.createPaginatedRequest(this.data));
    }
    // -------- MODAL FORMS --------- //
    handleModalFormSubmit() {
        let modalRef;
        if (this.datasetName === 'products') {
            modalRef = this.modalService.open(_modals_modal_product_form_modal_product_form_component__WEBPACK_IMPORTED_MODULE_6__["ModalProductFormComponent"]);
            modalRef.componentInstance.categories = this.data.categories;
            modalRef.componentInstance.suppliers = this.data.suppliers;
            modalRef.componentInstance.id = 1;
        }
        else if (this.datasetName === 'categories') {
            modalRef = this.modalService.open(_modals_modal_category_form_modal_category_form_component__WEBPACK_IMPORTED_MODULE_7__["ModalCategoryFormComponent"]);
            modalRef.componentInstance.id = 2;
        }
        else if (this.datasetName === 'suppliers') {
            modalRef = this.modalService.open(_modals_modal_supplier_form_modal_supplier_form_component__WEBPACK_IMPORTED_MODULE_8__["ModalSupplierFormComponent"]);
            modalRef.componentInstance.id = 3;
        }
        modalRef.result.then((result) => {
            this.dataService.createItem(result, this.datasetName).subscribe(res => {
                this.showData(this.createPaginatedRequest(this.data));
            });
        }).catch((error) => {
            // console.log(error);
        });
    }
    // ------- PAGINATION --------- //
    createPaginatedRequest(data) {
        const { filtered } = data.filterData;
        const { currentPage, pageSize, isSortDirectionAsc, sortBy, sortByDiscount } = data.paginatedData;
        let sortDirection = isSortDirectionAsc ? 'ASC' : 'DESC';
        if (filtered) {
            const { filterBy, filterAlsoBy } = data.filterData;
            return new _core_models_paginatedRequest__WEBPACK_IMPORTED_MODULE_4__["PaginatedRequest"](this.datasetName, currentPage, pageSize, sortDirection, sortBy, sortByDiscount, filtered, filterBy, filterAlsoBy);
        }
        return new _core_models_paginatedRequest__WEBPACK_IMPORTED_MODULE_4__["PaginatedRequest"](this.datasetName, currentPage, pageSize, sortDirection, sortBy, sortByDiscount);
    }
    handlePageChange(page) {
        this.data.paginatedData.currentPage = page;
        this.showData(this.createPaginatedRequest(this.data));
    }
};
MainComponent.ctorParameters = () => [
    { type: src_app_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainComponent.prototype, "datasetName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MainComponent.prototype, "datasetTitle", void 0);
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/modules/main/main.component.css")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/modules/modals/modal-category-form/modal-category-form.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/modals/modal-category-form/modal-category-form.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW9kYWxzL21vZGFsLWNhdGVnb3J5LWZvcm0vbW9kYWwtY2F0ZWdvcnktZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/modals/modal-category-form/modal-category-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/modals/modal-category-form/modal-category-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ModalCategoryFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCategoryFormComponent", function() { return ModalCategoryFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ModalCategoryFormComponent = class ModalCategoryFormComponent {
    constructor(activeModal, formBuilder) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.addCategoryForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    submitForm() {
        this.activeModal.close(this.addCategoryForm.value);
    }
};
ModalCategoryFormComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalCategoryFormComponent.prototype, "id", void 0);
ModalCategoryFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-category-form',
        template: __webpack_require__(/*! raw-loader!./modal-category-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/modals/modal-category-form/modal-category-form.component.html"),
        styles: [__webpack_require__(/*! ./modal-category-form.component.css */ "./src/app/modules/modals/modal-category-form/modal-category-form.component.css")]
    })
], ModalCategoryFormComponent);



/***/ }),

/***/ "./src/app/modules/modals/modal-product-form/modal-product-form.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/modals/modal-product-form/modal-product-form.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW9kYWxzL21vZGFsLXByb2R1Y3QtZm9ybS9tb2RhbC1wcm9kdWN0LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/modals/modal-product-form/modal-product-form.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/modals/modal-product-form/modal-product-form.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ModalProductFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalProductFormComponent", function() { return ModalProductFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_priceValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/priceValidator */ "./src/app/shared/priceValidator.ts");





let ModalProductFormComponent = class ModalProductFormComponent {
    constructor(activeModal, formBuilder) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.addProductForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            fullPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            salePrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            category: this.formBuilder.group({
                id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            }),
            supplier: this.formBuilder.group({
                id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            }),
            availability: ''
        }, { validators: _shared_priceValidator__WEBPACK_IMPORTED_MODULE_4__["ValidatePrice"] });
    }
    submitForm() {
        this.activeModal.close(this.addProductForm.value);
    }
};
ModalProductFormComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalProductFormComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalProductFormComponent.prototype, "categories", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalProductFormComponent.prototype, "suppliers", void 0);
ModalProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-product-form',
        template: __webpack_require__(/*! raw-loader!./modal-product-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/modals/modal-product-form/modal-product-form.component.html"),
        styles: [__webpack_require__(/*! ./modal-product-form.component.css */ "./src/app/modules/modals/modal-product-form/modal-product-form.component.css")]
    })
], ModalProductFormComponent);



/***/ }),

/***/ "./src/app/modules/modals/modal-supplier-form/modal-supplier-form.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/modals/modal-supplier-form/modal-supplier-form.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbW9kYWxzL21vZGFsLXN1cHBsaWVyLWZvcm0vbW9kYWwtc3VwcGxpZXItZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/modals/modal-supplier-form/modal-supplier-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/modals/modal-supplier-form/modal-supplier-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ModalSupplierFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSupplierFormComponent", function() { return ModalSupplierFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ModalSupplierFormComponent = class ModalSupplierFormComponent {
    constructor(activeModal, formBuilder) {
        this.activeModal = activeModal;
        this.formBuilder = formBuilder;
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.addSupplierForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    submitForm() {
        this.activeModal.close(this.addSupplierForm.value);
    }
};
ModalSupplierFormComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalSupplierFormComponent.prototype, "id", void 0);
ModalSupplierFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-supplier-form',
        template: __webpack_require__(/*! raw-loader!./modal-supplier-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/modals/modal-supplier-form/modal-supplier-form.component.html"),
        styles: [__webpack_require__(/*! ./modal-supplier-form.component.css */ "./src/app/modules/modals/modal-supplier-form/modal-supplier-form.component.css")]
    })
], ModalSupplierFormComponent);



/***/ }),

/***/ "./src/app/modules/products/products.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/products/products.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/products/products.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/products/products.component.ts ***!
  \********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_models_datasetTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/models/datasetTitle */ "./src/app/core/models/datasetTitle.ts");



let ProductsComponent = class ProductsComponent {
    constructor() {
        this.datasetName = 'products';
        this.datasetTitle = new _core_models_datasetTitle__WEBPACK_IMPORTED_MODULE_2__["DatasetTitle"]("Product", "Products");
    }
};
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/modules/products/products.component.css")]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/modules/suppliers/suppliers.component.css":
/*!***********************************************************!*\
  !*** ./src/app/modules/suppliers/suppliers.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VwcGxpZXJzL3N1cHBsaWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/suppliers/suppliers.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/suppliers/suppliers.component.ts ***!
  \**********************************************************/
/*! exports provided: SuppliersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuppliersComponent", function() { return SuppliersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_models_datasetTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/models/datasetTitle */ "./src/app/core/models/datasetTitle.ts");



let SuppliersComponent = class SuppliersComponent {
    constructor() {
        this.datasetName = 'suppliers';
        this.datasetTitle = new src_app_core_models_datasetTitle__WEBPACK_IMPORTED_MODULE_2__["DatasetTitle"]("Supplier", "Suppliers");
    }
};
SuppliersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-suppliers',
        template: __webpack_require__(/*! raw-loader!./suppliers.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/suppliers/suppliers.component.html"),
        styles: [__webpack_require__(/*! ./suppliers.component.css */ "./src/app/modules/suppliers/suppliers.component.css")]
    })
], SuppliersComponent);



/***/ }),

/***/ "./src/app/modules/table/table-header/table-header.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/table/table-header/table-header.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host(app-table-header) {\n  display: table-header-group;\n  vertical-align: middle;\n  border-color: inherit;\n}\n\nth {\n  color: var(--color-primary);\n  white-space: nowrap;\n}\n\n.filtered-column {\n  background-color: var(--color-tertiary);\n  color: #fff;\n}\n\n.sorted {\n  background-color: #e4eff6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90YWJsZS90YWJsZS1oZWFkZXIvdGFibGUtaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy90YWJsZS90YWJsZS1oZWFkZXIvdGFibGUtaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdChhcHAtdGFibGUtaGVhZGVyKSB7XG4gIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG50aCB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmZpbHRlcmVkLWNvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXRlcnRpYXJ5KTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zb3J0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlZmY2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/table/table-header/table-header.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/table/table-header/table-header.component.ts ***!
  \**********************************************************************/
/*! exports provided: TableHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableHeaderComponent", function() { return TableHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TableHeaderComponent = class TableHeaderComponent {
    constructor() {
        this.onSortDataBy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    sortDataBy(sortBy) {
        this.onSortDataBy.emit(sortBy);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableHeaderComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableHeaderComponent.prototype, "filterData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableHeaderComponent.prototype, "datasetName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableHeaderComponent.prototype, "onSortDataBy", void 0);
TableHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table-header',
        template: __webpack_require__(/*! raw-loader!./table-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/table/table-header/table-header.component.html"),
        styles: [__webpack_require__(/*! ./table-header.component.css */ "./src/app/modules/table/table-header/table-header.component.css")]
    })
], TableHeaderComponent);



/***/ }),

/***/ "./src/app/modules/table/table.component.css":
/*!***************************************************!*\
  !*** ./src/app/modules/table/table.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --color-primary: #3a5a78;\n  --color-tertiary: #f7941f;\n}\n\n.hide {\n  background-color: rgba(200, 233, 199, 0.4) !important;\n}\n\ntable input {\n  border-radius: 4px;\n  padding: .35rem .5rem;\n  width: 80%;;\n}\n\nselect {\n  width: 100%;\n}\n\nlabel {\n  padding: 0;\n  margin: 0;\n}\n\n.table-container {\n  margin-top: 15px;\n}\n\n.table-responsive>.table-bordered {\n  border-left: 14px solid var(--color-tertiary);\n}\n\ntable td {\n  font-family: 'Roboto', sans-serif;\n  vertical-align: middle;\n  padding: .35rem .75rem;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(228,239,246,.25);\n}\n\ntd.checkbox-container {\n  vertical-align: middle;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS1jb2xvci1wcmltYXJ5OiAjM2E1YTc4O1xuICAtLWNvbG9yLXRlcnRpYXJ5OiAjZjc5NDFmO1xufVxuXG4uaGlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjAwLCAyMzMsIDE5OSwgMC40KSAhaW1wb3J0YW50O1xufVxuXG50YWJsZSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogLjM1cmVtIC41cmVtO1xuICB3aWR0aDogODAlOztcbn1cblxuc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmxhYmVsIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRhYmxlLXJlc3BvbnNpdmU+LnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDE0cHggc29saWQgdmFyKC0tY29sb3ItdGVydGlhcnkpO1xufVxuXG50YWJsZSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogLjM1cmVtIC43NXJlbTtcbn1cblxuLnRhYmxlLXN0cmlwZWQgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI4LDIzOSwyNDYsLjI1KTtcbn1cblxudGQuY2hlY2tib3gtY29udGFpbmVyIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/table/table.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/table/table.component.ts ***!
  \**************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/models/category */ "./src/app/core/models/category.ts");
/* harmony import */ var _core_models_supplier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/models/supplier */ "./src/app/core/models/supplier.ts");
/* harmony import */ var _core_models_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/models/product */ "./src/app/core/models/product.ts");
/* harmony import */ var src_app_shared_priceValidator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/priceValidator */ "./src/app/shared/priceValidator.ts");







let TableComponent = class TableComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.onUpdateDataItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRemoveItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSortDataBy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.createItemForm();
        this.createProductForm();
    }
    ngOnInit() {
    }
    // --------- CREATE FORM -------- //
    createProductForm() {
        this.updateProductForm = this.formBuilder.group({
            id: '',
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            fullPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            salePrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            category: this.formBuilder.group({
                id: ''
            }),
            supplier: this.formBuilder.group({
                id: ''
            }),
            availability: ''
        }, { validators: src_app_shared_priceValidator__WEBPACK_IMPORTED_MODULE_6__["ValidatePrice"] });
    }
    // Form for category and supplier data
    createItemForm() {
        this.updateItemForm = this.formBuilder.group({
            id: '',
            name: ''
        });
    }
    // ------------ SORT ------------- //
    sortDataBy(productField) {
        this.onSortDataBy.emit(productField);
    }
    // ------------ DELETE ----------- //
    removeItem(data) {
        this.onRemoveItem.emit(data.id);
    }
    // ------------ EDIT ------------- //
    editItem(data) {
        this.selectedId = data.id;
        if (this.datasetName === 'products') {
            this.updateFormWithSelectedProductValues(data);
        }
        else if (this.datasetName = 'categories') {
            this.updateFormWithSelectedCategoryValues(data);
        }
        else if (this.datasetName = 'suppliers') {
            this.updateFormWithSelectedSupplierValues(data);
        }
    }
    cancelEdit() {
        this.selectedId = 0;
    }
    updateFormWithSelectedProductValues(dataItem) {
        const currentProduct = new _core_models_product__WEBPACK_IMPORTED_MODULE_5__["Product"](dataItem.id, dataItem.name, dataItem.fullPrice, dataItem.salePrice, dataItem.category, dataItem.supplier, dataItem.availability);
        this.updateProductForm.patchValue(currentProduct);
    }
    updateFormWithSelectedCategoryValues(dataItem) {
        const currentCategory = new _core_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        currentCategory.setId(dataItem.id);
        currentCategory.setName(dataItem.name);
        this.updateItemForm.patchValue(currentCategory);
    }
    updateFormWithSelectedSupplierValues(dataItem) {
        const currentSupplier = new _core_models_supplier__WEBPACK_IMPORTED_MODULE_4__["Supplier"]();
        currentSupplier.setId(dataItem.id);
        currentSupplier.setName(dataItem.name);
        this.updateItemForm.patchValue(currentSupplier);
    }
    // ----------- UPDATE ----------- //
    // Updated form data is sent to main component where 
    // it will be sent as a paginated request to the server
    updateItem() {
        if (this.datasetName === 'products') {
            this.onUpdateDataItem.emit(this.getUpdatedProduct());
            this.createProductForm();
        }
        else if (this.datasetName = 'categories') {
            this.onUpdateDataItem.emit(this.getUpdatedCategory());
        }
        else if (this.datasetName = 'suppliers') {
            this.onUpdateDataItem.emit(this.getUpdatedSupplier());
        }
        this.selectedId = 0;
    }
    getUpdatedProduct() {
        const category = new _core_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        const supplier = new _core_models_supplier__WEBPACK_IMPORTED_MODULE_4__["Supplier"]();
        const id = this.updateProductForm.get('id').value;
        const name = this.updateProductForm.get('name').value;
        const fullPrice = this.updateProductForm.get('fullPrice').value;
        const salePrice = this.updateProductForm.get('salePrice').value;
        category.setId(this.updateProductForm.get('category.id').value);
        supplier.setId(this.updateProductForm.get('supplier.id').value);
        const availability = this.updateProductForm.get('availability').value;
        return new _core_models_product__WEBPACK_IMPORTED_MODULE_5__["Product"](id, name, fullPrice, salePrice, category, supplier, availability);
    }
    getUpdatedCategory() {
        const category = new _core_models_category__WEBPACK_IMPORTED_MODULE_3__["Category"]();
        category.setId(this.updateItemForm.get('id').value);
        category.setName(this.updateItemForm.get('name').value);
        return category;
    }
    getUpdatedSupplier() {
        const supplier = new _core_models_supplier__WEBPACK_IMPORTED_MODULE_4__["Supplier"]();
        supplier.setId(this.updateItemForm.get('id').value);
        supplier.setName(this.updateItemForm.get('name').value);
        return supplier;
    }
};
TableComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "datasetName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "filterData", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "categories", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "suppliers", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "onUpdateDataItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "onRemoveItem", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "onSortDataBy", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: __webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/table/table.component.html"),
        styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/modules/table/table.component.css")]
    })
], TableComponent);



/***/ }),

/***/ "./src/app/shared/priceValidator.ts":
/*!******************************************!*\
  !*** ./src/app/shared/priceValidator.ts ***!
  \******************************************/
/*! exports provided: ValidatePrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatePrice", function() { return ValidatePrice; });
function ValidatePrice(fg) {
    const fullPrice = fg.get('fullPrice').value;
    const salePrice = fg.get('salePrice').value;
    if (salePrice > fullPrice || fullPrice < salePrice) {
        fg.controls['salePrice'].setErrors({ 'invalid': true });
    }
    else {
        return null;
    }
    return null;
}
;


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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Data/Coding/GitHub Projects/tts/projects/tts-dashboard-project/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map