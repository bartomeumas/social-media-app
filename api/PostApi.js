/* eslint-disable no-console */
import axios from "../axios.config";
import { apiUrl } from "../src/utils";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTY1MzI5ZjMwYTg5YzkwYzg2MmMzZiIsImlhdCI6MTY4MTgxMjQyNiwiZXhwIjoxNjg0NDA0NDI2fQ.CDIlUXToCUNOrbBqVhTyuOiMaviur5lOV_w8SBE6PB0";

const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export default class PostApi {
  async getPosts() {
    let result = { data: [], error: null };

    try {
      let response = await axios.get(apiUrl("/posts"), config);
      console.log(response);

      if (response.status === 200) {
        result.data = response.data;
        console.log(result.data);
      } else {
        result.error = {};
      }
      return result;
    } catch (error) {
      result.error = error;
      return result;
    }
  }

  async postPost() {}
}
