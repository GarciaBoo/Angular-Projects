import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})

export class ServersComponent implements OnInit{
  // Variable declared using TypeScript for visualization in studies
  serverID: number = 10;
  serverName = 'teste';

  allowNewServer = false;
  serverCreationStatus = 'No server was created';

  constructor() {
    setTimeout(() => {
      // After 2 seconds, set change the state of allowNewServer 
      this.allowNewServer = true;
    }, 2000);
  }
  
  //Event biding exemple
  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    /*<HTMLInputElement>: This is a type assertion in TypeScript.
     * It tells the TypeScript compiler that you are treating event.target as an HTMLInputElement. 
    */
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
    
  }
}
