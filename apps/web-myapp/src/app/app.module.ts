import { NgModule } from '@angular/core';

// libs
import { environment } from '@xplat/core';

// app
import { CoreModule } from './features/core/core.module';
import { SharedModule } from './features/shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [CoreModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
