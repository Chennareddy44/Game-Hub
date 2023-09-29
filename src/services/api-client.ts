import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6c930516101543598963918785f72bb5",
  },
});
