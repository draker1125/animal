import { NgModule } from "@angular/core";
import { BoardAnnouncementListComponent } from "./components/board/announcement-list/announcement-list.component";
import { BoardComponent } from "./components/board/board.component";
import { ForumComponent } from "./components/forum/forum.component";
import { AddAnnouncementComponent } from "./components/board/add-announcement/add-announcement.component";

@NgModule({
    declarations: [
        AddAnnouncementComponent,
        BoardComponent,
        BoardAnnouncementListComponent,
        ForumComponent,
    ],
    imports: [
    ],
    providers: [],
    bootstrap: []
  })
  export class CoreModule{}