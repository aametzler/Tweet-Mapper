import { apiCall } from './api.helper';

export default class StatusService {
    filter = (filterData) => {
        return apiCall('get', 'statuses', filterData);
      }
}