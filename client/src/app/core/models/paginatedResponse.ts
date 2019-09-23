export class PaginatedResponse {
  content: Array<any>;
  number: number; // Current page number
  totalElements: number;
  size: number; // Page size
}