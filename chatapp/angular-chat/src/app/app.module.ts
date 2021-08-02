import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'; // for routing
import { HttpClientModule } from '@angular/common/http'; // for the http client
import { FormsModule } from '@angular/forms'; // to handle forms

import { AppComponent } from './app.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: 'join', component: JoinComponent },
], {
    initialNavigation: 'enabled'
}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}