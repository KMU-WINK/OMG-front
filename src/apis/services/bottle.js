import { bottleApiController } from "../api/bottle";

export const bottleService = {
  getBottleList,
  getBottleOne,
  createBottle,
  addLike,
  deleteLike,
  addClick,
  reserveBottle,
};

async function getBottleList() {
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

async function createBottle(dto) {
  try {
    const response = await bottleApiController.createBottle(dto);
    console.log(`response : ${response}`);
  } catch (e) {
    throw e;
  }
}

async function addLike(id) {
  try {
    const response = await bottleApiController.addLike(id);
    console.log(`response : ${response}`);
  } catch (e) {
    throw e;
  }
}

async function deleteLike(id) {
  try {
    const response = await bottleApiController.deleteLike(id);
    console.log(response);
  } catch (e) {
    throw e;
  }
}

async function addClick(id) {
  try {
    const response = await bottleApiController.addClick(id);
    console.log(response);
  } catch (e) {
    throw e;
  }
}

async function reserveBottle(id, dto) {
  try {
    const response = await bottleApiController.reserveBottle(id, dto);
    console.log(`response : ${response}`);
  } catch (e) {
    throw e;
  }
}
