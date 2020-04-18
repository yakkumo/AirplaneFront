import { NgModule} from '@angular/core';
import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

import { NgxMaskModule } from 'ngx-mask';
import { IConfig } from 'ngx-mask';
import { TemplateModule } from '../../../components/template/template.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PainelMetaRoutingModule } from './painel-meta-routing.module';
import { PainelMetaComponent } from './painel-meta/painel-meta.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from '../../../components/template/toolbar-content/toolbar-content.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { IndicadorMetaComponent } from './painel-meta/aba-indicador-meta-component/aba-indicador-meta.component';
import { MetaFinanceiraComponent } from './painel-meta/aba-meta-financeira-component/aba-meta-financeira.component';
import { PainelIndividualComponent } from './painel-meta/aba-painel-individual-component/aba-painel-individual.component';
import { TableComponent } from './painel-meta/table-component/table-painel-meta.component';
import { TextFieldAutosizePainelMetas } from './painel-meta/text-area/text-field-autosize-textarea-painel-meta.component';
import { MockService } from './painel-meta/services/mock.service';

import { AprovacaoGrupoComponent } from './painel-meta/aprovacao-grupo-component/aprovacao-grupo.component';
import { AprovacaoIndividualComponent } from './painel-meta/aprovacao-individual-component/aprovacao-individual.component';
import { AprovacaoMetaComponent } from './painel-meta/aprovacao-meta-component/aprovacao-meta.component';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};
@NgModule({
  declarations: [
    PainelMetaComponent,
    IndicadorMetaComponent,
    MetaFinanceiraComponent,
    PainelIndividualComponent,
    TableComponent,
    AprovacaoGrupoComponent,
    AprovacaoIndividualComponent,
    AprovacaoMetaComponent,
    TextFieldAutosizePainelMetas,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    NgxPaginationModule,
    CommonModule,
    PainelMetaRoutingModule,
    TemplateModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(options),
  ],
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    MatNativeDateModule
  ],
  providers: [MockService],
  bootstrap: [PainelMetaComponent]
})
export class PainelMetaModule {

 }
