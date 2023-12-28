import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ModalModule } from "ngx-bootstrap/modal";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContentComponent } from "./content/content.component";
import { SafePipe } from "./safe.pipe";
import { ListViewComponent } from "./list-view/list-view.component";
import { ArchiveComponent } from "./archive/archive.component";
import { ManifestoComponent } from "./manifesto/manifesto.component";
import { ArchiveItemComponent } from "./archive-item/archive-item.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { HomeComponent } from "./home/home.component";
import { PancakeComponent } from "./pancake/pancake.component";

// close the store for time being
// import { CheckoutElementComponent } from './checkout-element/checkout-element.component';
// import { CheckoutComponent } from './checkout/checkout.component';
// import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    ContentComponent,
    ListViewComponent,
    ArchiveComponent,
    ManifestoComponent,
    ArchiveItemComponent,
    ProductFormComponent,
    HomeComponent,
    PancakeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // ModalModule.forRoot()
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
