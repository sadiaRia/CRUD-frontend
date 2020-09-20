
import axios from 'axios';

export function getForm() {
  return axios.get(`/api/get_form.php`).then(response => response);
}

