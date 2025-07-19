export interface IProduct {
  id: number
  name: string
  category: string
  outOfStock: boolean
  type: string
  orderIds: number[];
  img?: string;
}
