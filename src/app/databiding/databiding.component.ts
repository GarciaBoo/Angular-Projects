import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-databiding',
  templateUrl: './databiding.component.html',
  styleUrl: './databiding.component.css'
})
export class DatabidingComponent implements OnInit{
  // Variable declared using TypeScript for visualization in studies
  serverID: number = 10;
  serverName = 'teste';
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  servers = ['Testeserver', 'Testserver 2'];

  constructor() {
  setTimeout(() => {
    // After 2 seconds, set change the state of allowNewServer 
    this.allowNewServer = true;
  }, 2000);
  }
  
  //Event biding exemple
  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
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
