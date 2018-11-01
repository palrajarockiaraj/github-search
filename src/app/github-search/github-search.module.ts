import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearchRoutingModule } from './github-search-routing.module';
import { GithubSearchComponent } from './github-search.component';

@NgModule({
  imports: [
    CommonModule,
    GithubSearchRoutingModule
  ],
  declarations: [GithubSearchComponent]
})
export class GithubSearchModule { }
