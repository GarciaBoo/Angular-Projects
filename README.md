# Practicing Data Binding

## Project Overview
This project, named **Practicing Data Binding**, was generated with Angular CLI version 17.1.1. It is intended for educational purposes, specifically as part of the first module of the course *The Complete Guide to Angular*. Please note that this project is not meant for production use.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Code Comments

### Two-Way Data Binding
The project extensively uses two-way data binding with `[(ngModel)]`. This is evident in the relevant components and templates, such as [app.component.ts] and [app.component.html]. For more information on two-way data binding in Angular, refer to the [Angular documentation on two-way data binding](https://angular.io/guide/binding-syntax#types-of-data-binding).


### Button Interaction
The "Clean User Name" button demonstrates interaction with user input. It utilizes event binding and provides functionality to dynamically update data. Check [user.component.ts] and [user.component.html].

### Styling with CSS
CSS styling enhances the user experience. Special attention has been given to the hover effect of the button, designed to work only when the button is clickable (not disabled). Refer to [styles.css] for the styling details.

Feel free to explore the source files to gain a deeper understanding of the implemented concepts.