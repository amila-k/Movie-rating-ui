export class PagingFiltering {
  constructor(
    public pageSize: number,
    public pageNumber: number,
    public filterText: string,
    public hasMoreResults: boolean = true
  ) {}
}
