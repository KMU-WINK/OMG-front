import { boardApiController } from "../api/board";

export const boardService = {
  getBoardList,
  deleteBoard,
  createBoard
};

async function getBoardList(dto) {
  try {
    const response = await boardApiController.getBoardList();
    console.log(`response : ${response}`);
    return response.data;
  } catch (e) {
    throw e;
  }
}

async function deleteBoard(id) {
  try {
    const response = await boardApiController.deleteBoard(id);
    console.log(`response : ${response}`);
  } catch (e) {
    throw e;
  }
}

async function createBoard(dto) {
  try {
    const response = await boardApiController.createBoard(dto);
    console.log(`response : ${response}`);
  } catch (e) {
    throw e;
  }
}