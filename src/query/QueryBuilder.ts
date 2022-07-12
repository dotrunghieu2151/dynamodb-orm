import AutoBindThis from "../utils/decorators/AutoBindThis.decorator";

export interface QueryLanguage {

}

@AutoBindThis
export class QueryBuilder<T extends QueryLanguage> {
  _filters = []
  _substitutions = [] // replace placeholder in filter
  _select: string[] = [];
  _with = []; // eager load relationships

  constructor(
    private queryLanguage: T
  ) {

  }

  filter(

  ) {
    return this;
  }

  where() { }



  select(...fields: string[]) {
    this._select = fields;
    return this;
  }

  with() {
    return this;
  }
}