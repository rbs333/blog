import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { BioComponent } from './bio/bio.component';
import { ArchiveComponent } from './archive/archive.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
    { path: 'home', component: ContentListComponent},
    { path: 'bio', component: BioComponent },
    { path: 'archive', component: ArchiveComponent, children: [
      { path: ':title', component: ContentComponent }
    ]},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
