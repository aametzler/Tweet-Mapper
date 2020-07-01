import { apiCall } from './api.helper';
import Config from '../utility/config';

class StatusService {
  static filter = (filterData) => {
      console.log(Config);
      return apiCall('get', 'statuses/filter.json', filterData);
  }
}

export default StatusService;