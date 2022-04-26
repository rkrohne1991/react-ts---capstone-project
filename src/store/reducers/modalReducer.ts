import { AnyAction } from 'redux';
import { setIsModalOpen, setModalContent } from '../action-creators';

export type ModalState = {
  readonly isModalOpen: boolean;
  readonly modalData: string;
};

const initialState: ModalState = {
  isModalOpen: false,
  modalData: '',
};

const reducer = (action: AnyAction, state: ModalState = initialState) => {
  if (setIsModalOpen.match(action)) {
    return { ...state, isModalOpen: action.payload };
  }

  if (setModalContent.match(action)) {
    return { ...state, modalData: action.payload };
  }

  return state;
};

export default reducer;
