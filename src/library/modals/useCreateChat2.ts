import { useModal } from './modal-wrapper/useModal';
import Modal from './modal-wrapper/Modal.vue';

export const useModalCreateChat2 = async (title: string, theme: string) => {
  const data = await useModal({
    //в component должен быть встроен emit change(key: value)
    component: import('./CreateChat2.vue'),
    attrs: {
      title, 
    },
    Modal,
    modalAttrs: {
      theme,
    },
  });
  // console.log('data', data);
  return data;
}
