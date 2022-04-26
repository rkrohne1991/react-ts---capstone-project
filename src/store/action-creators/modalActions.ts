import { createAction, withMatcher } from '../../utils/reducer/reducer.utils';
import { ModalActionType } from '../action-types/modalActionTypes';
import { SetIsModalOpen, SetModalContent } from '../actions/modalActions';

export const setIsModalOpen = withMatcher(
  (boolean: boolean): SetIsModalOpen => createAction(ModalActionType.SET_IS_MODAL_OPEN, boolean),
);

export const setModalContent = withMatcher(
  (content: string): SetModalContent => createAction(ModalActionType.SET_MODAL_CONTENT, content),
);
