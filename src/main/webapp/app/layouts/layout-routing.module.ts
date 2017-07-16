import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
import { RouterModule, Routes, Resolve } from '@angular/router';
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

import { navbarRoute } from '../app.route';
import { errorRoute } from './';

<<<<<<< HEAD
const LAYOUT_ROUTES = [
=======
let LAYOUT_ROUTES = [
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
    navbarRoute,
    ...errorRoute
];

@NgModule({
<<<<<<< HEAD
    imports: [
        RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
=======
  imports: [
    RouterModule.forRoot(LAYOUT_ROUTES, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
})
export class LayoutRoutingModule {}
