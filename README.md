# RescueTheStray

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


####### TO RUN THE PROJECT ##########
############## ERROR ############

PS C:\Users\Achraf\AngularProjects\Vortex-PI-Angular> ng serve -o
ng : Impossible de charger le fichier C:\Users\Achraf\AppData\Roaming\npm\ng.ps1, car l’exécution de scripts est désactivée sur ce système. Pour plus 
d’informations, consultez about_Execution_Policies à l’adresse https://go.microsoft.com/fwlink/?LinkID=135170.
Au caractère Ligne:1 : 1
+ ng serve -o
+ ~~
    + CategoryInfo          : Erreur de sécurité : (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess


############## SOLUTION ##############

Ouvrez PowerShell en tant qu'administrateur.
Exécutez la commande suivante: "Get-ExecutionPolicy". Cette commande vous indiquera la stratégie d'exécution actuelle de votre système.
Si la stratégie actuelle est "Restricted", vous devez la modifier en exécutant la commande suivante: "Set-ExecutionPolicy RemoteSigned". Cette commande autorisera l'exécution des scripts signés à distance.

####################################

