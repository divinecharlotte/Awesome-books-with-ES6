import { DateTime } from './luxon.js';

const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

export default currentDate;