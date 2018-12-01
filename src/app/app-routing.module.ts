import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerLobbyComponent } from './server-lobby/server-lobby.component';


const routes: Routes = [

  { path: 'server-lobby', component: ServerLobbyComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
