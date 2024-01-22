import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { SuccesAlertComponent } from "./succes-alert/succes-alert.component";
import { BrowserModule } from "@angular/platform-browser";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";

@NgModule({
    declarations: [ //Manual import of components so TS knows where things are
        AppComponent,
        SuccesAlertComponent,
        WarningAlertComponent
    ],

    imports: [ //default cli packge import that makes the code break if not here
        BrowserModule
    ],

    providers:[],

    bootstrap:[AppComponent]
    
})
export class AppModule { }