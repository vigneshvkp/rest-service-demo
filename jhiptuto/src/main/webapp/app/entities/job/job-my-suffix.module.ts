import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Tuto2SharedModule } from '../../shared';
import {
    JobMySuffixService,
    JobMySuffixPopupService,
    JobMySuffixComponent,
    JobMySuffixDetailComponent,
    JobMySuffixDialogComponent,
    JobMySuffixPopupComponent,
    JobMySuffixDeletePopupComponent,
    JobMySuffixDeleteDialogComponent,
    jobRoute,
    jobPopupRoute,
    JobMySuffixResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...jobRoute,
    ...jobPopupRoute,
];

@NgModule({
    imports: [
        Tuto2SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        JobMySuffixComponent,
        JobMySuffixDetailComponent,
        JobMySuffixDialogComponent,
        JobMySuffixDeleteDialogComponent,
        JobMySuffixPopupComponent,
        JobMySuffixDeletePopupComponent,
    ],
    entryComponents: [
        JobMySuffixComponent,
        JobMySuffixDialogComponent,
        JobMySuffixPopupComponent,
        JobMySuffixDeleteDialogComponent,
        JobMySuffixDeletePopupComponent,
    ],
    providers: [
        JobMySuffixService,
        JobMySuffixPopupService,
        JobMySuffixResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tuto2JobMySuffixModule {}
