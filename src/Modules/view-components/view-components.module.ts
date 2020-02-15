import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, SidebarModule, BrowserModule,
    BrowserAnimationsModule, PanelMenuModule, InputTextModule, ButtonModule, InputTextareaModule
  ],
  exports: [SidebarModule, BrowserModule, BrowserAnimationsModule, PanelMenuModule, InputTextModule, ButtonModule, InputTextareaModule]

})

export class ViewComponentsModule { }
