import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ArchiveComponent } from './archive/archive.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { ArchiveItemComponent } from './archive-item/archive-item.component';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
    { path: '', component: ContentListComponent},
    { path: 'manifesto', component: ManifestoComponent },
    { path: 'archive', component: ArchiveComponent},
    { path: "archive/:title", component: ArchiveItemComponent},
    { path: "store", component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
