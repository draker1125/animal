import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BoardComponent } from './board/board.component';
import { MapComponent } from './map/map.component';
import { ForumComponent } from './forum/forum.component';

export const routes: Routes = [
    {path: '', component: MainpageComponent},
    {path: 'mainpage', component: MainpageComponent },
    {path: 'board', component: BoardComponent},
    {path: 'map', component: MapComponent},
    {path: 'forum', component: ForumComponent},
    {path: '**', redirectTo: ''}
];
