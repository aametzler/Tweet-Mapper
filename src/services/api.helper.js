import axios from 'axios';
import { Config } from '../utility';

export const apiClient = axios.create({ withCredentials: true });

const apiRoot = Config.isDev
  ? Config.devApiRoute
  : Config.prodApiRoute;

export async function apiCall(method, path, params, opts) {
  method = method.toLowerCase();
  params = params || {};
  opts = opts || {};

  for (const [key, value] of Object.entries(params)) {
    if (value === null) {
      delete params[key];
    }
  }

  try {
    let response;

    if (method === 'get') {
      const queryParams = new URLSearchParams(params).toString();
      const url = `${path}?${queryParams}`;
      response = await apiClient.get(`${apiRoot}/${url}`);
    } else if (method === 'post') {
      if (!opts.headers) {
        opts.headers = {};
      }

      opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      const body = new URLSearchParams(params).toString();
      response = await apiClient.post(`${apiRoot}/${path}`, body, opts);
    } else if (method === 'delete') {
      const queryParams = new URLSearchParams(params).toString();
      const url = `${path}?${queryParams}`;
      response = await apiClient.delete(`${apiRoot}/${url}`);
    } else {
      throw new Error(`invalid http method: ${method}`)
    }

    if (response.data.status !== 200) {
      throw response;
    }

    return response.data.result;
  } catch (err) {
    if (err && err.response) {
      throw err.response;
    }

    throw err;
  }
}
