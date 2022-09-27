import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MacroComponent } from './macro/macro.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [HeaderComponent, MacroComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzSkeletonModule,
    NzCardModule,
    NzAvatarModule,
    NzTypographyModule,
    NzStatisticModule,
    NzGridModule,
    NzDividerModule,
  ],
  exports: [HeaderComponent, MacroComponent],
})
export class ComponentsModule {}
