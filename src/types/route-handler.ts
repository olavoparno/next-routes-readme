export type Item = { value: string; line: number };

export interface RouteHandler {
  name: string;
  method: string;
  implementation: string;
  doc: {
    errors: Item[];
    comments: Item[];
    variables: Item[];
    conditionals: Item[];
    queryParams: string[];
    routeParams: string[];
  };
  dependencies: Item[];
}
