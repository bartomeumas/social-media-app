/* eslint-disable no-console */
import axios from "../axios.config";
import { apiUrl } from "../src/utils";

export default class PostApi {
  async getPosts() {
    let result = { data: [], error: null };
    try {
      const response = await axios.get(apiUrl("/posts"));
      console.log(response);
      if (response.status === 200) {
        result.data = response.data;
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
