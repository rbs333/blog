import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ArchiveComponent } from './archive/archive.component';
import { ManifestoComponent } from './manifesto/manifesto.component';
import { ArchiveItemComponent } from './archive-item/archive-item.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'manifesto', component: ManifestoComponent },
    { path: 'archive', component: ContentListComponent},
    { path: "archive/:title", component: ArchiveItemComponent},
    { path: "shop", component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
