/** REACT APP STATE */

import { Member } from "./member";
import { Product } from "./product";

export interface AppRootState {
  homePage: HomePageSTate;
}

/** HOMEPAGE */
export interface HomePageSTate {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}
/** PRODUCTS PAGE */


/** ORDERS PAGE */