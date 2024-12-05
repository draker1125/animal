import { Component, NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { BoardComponent } from "./core/components/board/board.component";

@NgModule({
    declarations: [
      AppComponent,
      Component
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BoardComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule{}