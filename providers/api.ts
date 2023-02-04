import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.github.com/users/joycemagalhaess",
});

export const reporUser = async (name: string, full_name: string, description: string) => {
    const response = await Api.post("/repos", {
        name,
        full_name,
        description
    })
  
    return response;
  }