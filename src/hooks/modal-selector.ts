import { createSelector } from 'reselect';

import { RootState } from '../store/reducers';
import { ModalState } from '../store/reducers/modalReducer';

const selectModalReducer = (state: RootState): ModalState => state.modal;

export const selectIsModalOpen = createSelector(
  [selectModalReducer],
  (modal) => modal.isModalOpen,
);

export const selectModalContent = createSelector(
  [selectModalReducer],
  (modal) => modal.modalData,
);
