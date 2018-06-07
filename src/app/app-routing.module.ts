import { NgModel } from "@angular/forms";
er/src/core";

import { Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    
    { path: '', redirectTo: '/reipes' }
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent }

];

@NgModel({

})
export class AppRoutingModule {

}