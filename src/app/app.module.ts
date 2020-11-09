import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadingTestComponent } from './reading-test/reading-test.component';
import { CreateUserComponent } from './reading-test/create-user.component';

@NgModule({
  declarations: [AppComponent, ReadingTestComponent, CreateUserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
