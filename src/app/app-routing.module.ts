import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadingTestComponent } from './reading-test/reading-test.component';
const routes: Routes = [
  {
    path: 'test',
    component: ReadingTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
