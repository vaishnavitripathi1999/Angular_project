// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { PostListComponent } from './post-list/post-list.component';

// const routes: Routes = [
//   {
//     path:'post-list',
//     component:PostListComponent

//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'posts-list', component: PostListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
