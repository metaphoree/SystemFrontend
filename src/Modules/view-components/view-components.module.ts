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
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, SidebarModule, BrowserModule,
    BrowserAnimationsModule, PanelMenuModule,
    InputTextModule, ButtonModule, InputTextareaModule, DynamicDialogModule
  ],
  exports: [SidebarModule, BrowserModule, BrowserAnimationsModule, PanelMenuModule, InputTextModule, ButtonModule,
    InputTextareaModule, DynamicDialogModule, FormsModule]

})

export class ViewComponentsModule { }
