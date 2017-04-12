export class Endpoint {
  constructor(
    public name: string,
    public type: string,
    public baseUrl?: string,
    public endpointId?: string,
    public userId?: string) {}
}
