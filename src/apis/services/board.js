import { boardApiController } from "../api/board";

export const boardService = {
  getBoardList,
};

async function getBoardList(dto) {
  try {
    const response = await boardApiController.getBoardList();
    console.log(response);
  } catch (e) {
    throw e;
  }
}
