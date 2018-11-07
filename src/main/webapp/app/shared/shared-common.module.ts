import { NgModule } from '@angular/core';

import { AminiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [AminiSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [AminiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class AminiSharedCommonModule {}
