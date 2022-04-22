import { ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { ModalActionType } from "../action-types/modalActionTypes";

export type SetIsModalOpen = ActionWithPayload<
  ModalActionType.SET_IS_MODAL_OPEN,
  boolean
>;

export type SetModalContent = ActionWithPayload<
  ModalActionType.SET_MODAL_CONTENT,
  string
>;
