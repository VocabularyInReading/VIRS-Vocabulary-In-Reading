import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent, SidebarComponent, FooterComponent } from '../shared';
import { LayoutComponent } from './layout.component';
import { FormsModule } from '@angular/forms';
import { RegisterService } from 'app/shared/services/register.service';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { JsEncryption } from 'app/shared/services/jsEncryption.service';
//import { ChangePasswordService } from '../shared/services/change-password.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      NgbDropdownModule.forRoot(),
        TranslateModule.forRoot(),
        FormsModule,
        NgbModule.forRoot(),
        
    ],
      declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        FooterComponent,
        ],
        providers: [RegisterService, HttpClient, HttpHandler, JsEncryption ]//ChangePasswordService

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
