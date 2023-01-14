import { meApiController } from "../api/me";

export const meService = {
  getInfo,
};

async function getInfo(dto) {
  try {
    const response = await meApiController.getInfo();
    console.log(`response : ${response}`);
    return response.data;
  } catch (e) {
    throw e;
  }
}
