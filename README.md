# MyContacts
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## --- Project Folder Structure ---

    ## src folder
            : This folder contains the main code files related to application.
    ## app folder
            : The folder contains the files, created for app components.
            - app.component.css: This file contains the css code for your app component.
            - app.component.html: This file contains the html for navbar and main header. This is the template file which is used by angular to do the data binding.
            - app.component.spec.ts: This file is a unit testing file related to app component. This file is used along with other unit tests. It is run from Angular CLI by the command ng test.
            - app.component.ts: This is typescript file which includes the view logic behind the navebar.
            - app.module.ts: This typescript file includes all the dependencies for the application. This file is used to define the needed modules to be imported, the components to be declared and the main component to be bootstrapped.
        ## contacts, add-contact, edit-contact 
            : these are the main components used for showing contact list with add/edit of single contacts.
        ## mod
            : This folder contains all model class files used in application.
            - contact.model.ts : contains contact class with its parameters
        ## services
            : This folder contains all service files used in application.
            - contact.service.ts : contains all methods for used throghout application. eg. contact list add/edit contact, activate deactivate contact.
    ## src/style.css 
            : this style sheet file contails all classes required for the application which can share across components. 

        