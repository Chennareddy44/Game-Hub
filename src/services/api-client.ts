import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b874e319fab947169cb54555e33f61f7",
    // key: "6c930516101543598963918785f72bb5",
  },
});
