/** REACT APP STATE */

import { Member } from "./member";
import { Product } from "./product";

//Types for all the screen components
export interface AppRootState {
  homePage: HomePageState;
}

/** HOMEPAGE */
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}
/** PRODUCTS PAGE */

/** ORDERS PAGE */
