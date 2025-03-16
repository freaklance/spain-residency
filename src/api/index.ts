import axios from 'axios';
import { ContactFormData } from '../types';

export const  sendMessage = async (data: ContactFormData): Promise<void> => {
  const text = `Заявка с сайта:\nName: ${data.name}\nCountry: ${data.country}\nPhone: ${data.phone}`;
  await axios.post('https://api.spain-residency.com/send-message', { text });
}