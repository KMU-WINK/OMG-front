import { meApiController } from "../api/me";
import { UserInfoService } from "../utils/userInfo";

export const meService = {
  getInfo,
};

async function getInfo(dto) {
  try {
    const response = await meApiController.getInfo();
    console.log(`response : ${response}`);
    UserInfoService.setUserID(response.data.user.id);
    return response.data;
  } catch (e) {
    throw e;
  }
}
