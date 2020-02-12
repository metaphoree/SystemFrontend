import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, SidebarModule, BrowserModule,
    BrowserAnimationsModule, PanelMenuModule
  ],
  exports: [SidebarModule, BrowserModule, BrowserAnimationsModule, PanelMenuModule ]

})

export class ViewComponentsModule { }
