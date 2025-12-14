interface successResponse<T> {
  message: string;
  [key: string]: T;
}

interface errorResponse {
  message: string;
}

type AirResponse<T> = successResponse<T> | errorResponse;
