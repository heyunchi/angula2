/**
 * Created by lzhan on 2017/9/3.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FindComponent } from './find/find.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import { PersonalComponent } from './personal/personal.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';

//时
import { PayComponent } from './pay/pay.component';
import { PaysecondComponent } from './paysecond/paysecond.component';

//何
import { TopicComponent } from './topic/topic.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';
import { ArticaldetailComponent } from './articaldetail/articaldetail.component';

const routes: Routes = [


  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'find',
    component: FindComponent
  },
  {
    path: 'booklist',
    component: BooklistComponent
  },
  {
    path: 'bookdetail/:book_id',
    component: BookdetailComponent
  },
  {
    path: 'topic',
    component: TopicComponent
  },
  {
    path: 'topicdetail/:topic_id',
    component: TopicdetailComponent
  },
  {
    path: 'articaldetail/:artical_id',
    component: ArticaldetailComponent
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: 'paysecond',
    component: PaysecondComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'regist',
    component: RegistComponent
  },
  {
    path: 'personal',
    component: PersonalComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
