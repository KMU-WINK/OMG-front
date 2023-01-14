export function handleSuccess(response) {
  return { data: response.data };
}

export function handleError(error) {
  console.log(`handler : ${error}`);
  switch (error.response.status) {
    case 400:
      break;
    case 401:
      // token 만료, 갱신
      break;
    case 404:
      // not found
      break;
    case 500:
      //server error
      break;
    default:
      break;
  }
  return Promise.reject(error);
}
