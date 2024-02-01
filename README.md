# Practicing Directives

## Project Overview
This project, named **Practicing Directives**, was generated with Angular CLI version 17.1.1. It is intended for educational purposes, specifically as part of the first module of the course *The Complete Guide to Angular*. Please note that this project is not meant for production use.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Usage of Directives
Throughout the project, Directives have been extensively employed, drawing upon the concepts covered in previous course content. Specifically, this assignment concentrated on implementing built-in directives in Angular. For a comprehensive understanding of directives in Angular, you can refer to the official [Angular documentation on two-way data binding](https://angular.io/guide/built-in-directives).

## Code Comments
The solution utilizes Angular's *ngIf directive for conditional rendering, controlling the display of the secret content based on the state of the 'addSecret' variable.

For dynamic styling of log entries, ngStyle is employed to set the background color conditionally, while ngClass is utilized to dynamically apply a class for text color. This enhances the visual representation of log entries, especially beyond the 5th item.

The component logic, encapsulated in SecretComponent, efficiently manages the state of the secret content (addSecret) and tracks button click logs in the 'logs' array. This separation of concerns contributes to a clean and maintainable Angular component.
