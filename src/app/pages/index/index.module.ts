import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { ComponentsModule } from '../../components/components.module';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, IndexRoutingModule, ComponentsModule, NzGridModule],
})
export class IndexModule {}
