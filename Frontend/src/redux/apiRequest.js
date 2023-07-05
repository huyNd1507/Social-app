import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";

export const UpdateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("/api/update", user);
    dispatch(updateSuccess(res.data));
  } catch (error) {
    dispatch(updateError());
  }
};
