export class Endpoint {
  constructor(
    public name: string,
    public type: string,
    public baseUrl?: string,
    public client_id?: string,
    public client_secret?: string,
    public authcode?: string,
    public endpointId?: string,
    public userId?: string) {}
}
