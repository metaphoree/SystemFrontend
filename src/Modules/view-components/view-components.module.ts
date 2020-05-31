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
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
 import {CalendarModule} from 'primeng/calendar';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CheckboxModule} from 'primeng/checkbox';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';
import {BlockUIModule} from 'primeng/blockui';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, SidebarModule, BrowserModule,
    BrowserAnimationsModule, PanelMenuModule,
    InputTextModule, ButtonModule, InputTextareaModule, DynamicDialogModule, 
    TableModule, ToastModule, MessagesModule, MessageModule,DropdownModule,
    ConfirmDialogModule,ProgressSpinnerModule,CheckboxModule,
    PanelModule,AccordionModule,CalendarModule,BlockUIModule,ToolbarModule,
    SplitButtonModule

  ],
  exports: [SidebarModule, BrowserModule, BrowserAnimationsModule, PanelMenuModule,
     InputTextModule, ButtonModule,
    InputTextareaModule, DynamicDialogModule, FormsModule,
     TableModule, ToastModule, MessagesModule, MessageModule,
     DropdownModule,ConfirmDialogModule,
     ProgressSpinnerModule,CheckboxModule,
     PanelModule,AccordionModule,CalendarModule,BlockUIModule,ToolbarModule,SplitButtonModule
  ]
})

export class ViewComponentsModule { }
