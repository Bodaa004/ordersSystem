import { IProduct } from "./iproduct"

export interface IResponseProduct {
   message: string
  metadata: Metadata
  products: IProduct[]
}

interface Metadata {
  currentPage: number
  totalPages: number
  limit: number
  totalItems: number
}

