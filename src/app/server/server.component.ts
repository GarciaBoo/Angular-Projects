import { Component } from "@angular/core"; //Importa o decorador component

@Component({ //Define o que é o componente usando um objeto js
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrl: './server.component.css',
    styles: [`.online{ color: white;}`]

})
export class ServerComponent {
    ServerID: number = 11;
    serverStatus: string = 'offiline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : "offiline";
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? "green" : "red";
    }
}