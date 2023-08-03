import { arrServices } from "./fakeApi";
const getAllServicer = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arrServices);
    }, 1000);
  });
};
export default {
  getAllServicer,
};
