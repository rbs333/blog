import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ArchiveComponent } from './archive/archive.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
    { path: '', component: ContentListComponent},
    { path: 'archive', component: ArchiveComponent, children: [
      { path: ':title', component: ContentComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
