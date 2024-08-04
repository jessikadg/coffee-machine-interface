export interface UserOrderState {
  coffeeStyle: string | null;
  size: string | null;
  extras: {
    sugar: string | null;
    milk: string | null;
  };
}
