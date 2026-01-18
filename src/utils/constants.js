import UserData from "../views/plugin/UserData";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const userId = UserData()?.user_id;
export const PAYPAL_CLIENT_ID = "test";
export const teacherId = UserData()?.teacher_id; 