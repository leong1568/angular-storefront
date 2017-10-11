# Storefront (Angular 4 + Bootstrap 4 + SCSS + Responsive)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Architectural Summary
* Angular 4 application (scaffolded with angular-cli)
* Responsive design with Bootstrap 4  
* Code reusable with share module orginised by domains
* Nested routes applied
* Use Obserable for data services

## Assumption
Using product title as unique id to determine if it is the same object. Ideally would use product id instead in the real project.

## Responsive Design
* toggleable menu
* Separated of SCSS
* Display and hidden element between desktop and mobile
* Center the title overlay by translate
* Transform text display using text-transform - e.g. upper case.
* Bootstrop grid for shopping cart
* Demonstrate using SCSS 

## Development server
Run `npm install' for install required node_modules.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
