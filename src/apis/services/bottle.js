import { bottleApiController } from "../api/bottle";

export const bottleService = {
  getBottleList,
};

async function getBottleList(dto) {
  try {
    const response = await bottleApiController.getBottleList();
    console.log(`response : ${response}`);
    return response.data;
  } catch (e) {
    throw e;
  }
}
