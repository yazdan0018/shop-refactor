import { AxiosResponse, AxiosError } from 'axios';

type ServiceData = {
  data: AxiosResponse['data'],
  status: number,
};

type ServiceError = {
  message: string,
  status: number,
  response: AxiosError['response'],
};

export type AsyncModuleState = {
  loading: boolean,
  loaded: boolean,
  data: ServiceData | null,
  error: ServiceError | null,
};
