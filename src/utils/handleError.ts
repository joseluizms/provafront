import { toast } from 'react-toastify';
import { toastStyle } from '../layouts/toast';

export default function handleError(err: any) {
  if(typeof err==='object' && err.message) {
    toast.error(err.message, toastStyle.error);
    console.log(err);
    return;
  }

  toast.error('Ocorreu um erro desconhecido!', toastStyle.error);
  console.log(err);
}