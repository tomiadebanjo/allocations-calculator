import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputSystemComponent } from './input-system/input-system.component';
import { AllocationsListComponent } from './allocations-list/allocations-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllocationsTotalComponent } from './allocations-total/allocations-total.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSystemComponent,
    AllocationsListComponent,
    AllocationsTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
