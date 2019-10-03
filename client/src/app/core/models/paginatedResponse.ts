export class PaginatedResponse {
  content: Array<any>;
  number: number; // Current page number
  // All relevant data items in database
  totalElements: number;
  // Number of data elements in current paginated response
  numberOfElements: number;
  size: number; // Page size
}