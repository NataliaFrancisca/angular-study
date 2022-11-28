import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { FatherComponent } from './components/father/father.component';
import { DaugtherComponent } from './components/daugther/daugther.component';
import { ListasComponent } from './components/listas/listas.component';
import { PipeOperatorComponent } from './components/pipe-operator/pipe-operator.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormComponent } from './components/form/form.component';
import { GenerateListComponent } from './components/generate-list/generate-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    FatherComponent,
    DaugtherComponent,
    ListasComponent,
    PipeOperatorComponent,
    DataBindingComponent,
    FormComponent,
    GenerateListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
