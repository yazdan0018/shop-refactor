// @flow

import axios, { AxiosRequestConfig } from 'axios';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

const service = async ({
  method = 'get',
  headers,
  url,
  ...rest
}: AxiosRequestConfig) => {
  const axiosHeaders = { ...DEFAULT_HEADERS, ...headers };

  try {
    const response = await axios({
      method,
      headers: axiosHeaders,
      url,
      ...rest,
    });
    return {
      data: response.data,
      status: response.status,
    };
  } catch (e) {
    return {
      message: e.message ?? 'Axios error',
      status: e.response.status,
      response: e.response,
    };
  }
};

export default service;
