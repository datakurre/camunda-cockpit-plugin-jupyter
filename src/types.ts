export interface API {
  adminApi: string;
  baseApi: string;
  engineApi: string;
  engine: string;
  tasklistApi: string;
  CSRFToken: string;
}

export interface RoutePluginParams {
  api: API;
}
