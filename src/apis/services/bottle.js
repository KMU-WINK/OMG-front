import { bottleApiController } from "../api/bottle";

export const bottleService = {
  getBottleList,
  getBottleOne,
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

async function getBottleOne(id) {
  try {
    const response = await bottleApiController.getBottleOne(id);
    console.log(`response : ${response}`);
    return response.data;
  } catch (e) {
    throw e;
  }
}
