import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// nativescript
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

// libs
import { TranslateModule } from '@ngx-translate/core';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { UISharedModule } from '@xplat/features';

// app
import { UI_COMPONENTS } from './components';

const MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  TNSFontIconModule,
  TranslateModule,
  UISharedModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UIModule {}
