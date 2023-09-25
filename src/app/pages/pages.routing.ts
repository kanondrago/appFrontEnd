import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { NoFoundComponent } from '../no-found/no-found.component';
import { PagesComponent } from './pages.component';


// import { HomeComponent } from './';
// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const routes: Routes = [

    {
        path: 'admin', 
        component: PagesComponent,
        children: [
            { path: '', component: AdminComponent, data: { titulo: 'Admin' } },
            { path: 'customer', component: CustomerComponent, data: { titulo: 'Customer' } },
            // { path: '', redirectTo: '/admin', pathMatch:'full' },
        ]
    },



    // { path: '', component: AdminComponent },
    // { path: 'customer', component: CustomerComponent },

    // { path: '**', component: NoFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
