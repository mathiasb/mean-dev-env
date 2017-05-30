export class Endpoint {
  constructor(
  public name: string,
  public url?: string,
  public client_id?: string,
  public client_secret?: string,
  public token?: string,
  public endpointId?: string,
  public userId?: string) {}
}
