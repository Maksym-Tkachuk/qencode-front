export enum ErrorStatus {
  INVALID_USER = 401,
  INVALID_DATA = 422,
  TOO_MANY_REQUESTS = 429,
  SERVER_ERROR = 500,
}

export enum LocalStorageKeys {
  REFRESH_TOKEN = 'refresh_token',
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN_EXPIRE = 'refresh_token_expire',
}
