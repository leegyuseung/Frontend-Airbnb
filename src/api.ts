import { QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import Cookie from "js-cookie";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { formatDate } from "./lib/utils";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8000/api/v1/"
      : "https://airbnbclone-elun.onrender.com",
  withCredentials: true, // api에 요청을 할 때 cookie를 보내겠다는 의미
});

export const getRooms = () =>
  instance.get("rooms/").then((response) => response.data);

export const getRoom = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  return instance.get(`rooms/${roomPk}`).then((response) => response.data);
};

export const getRoomReviews = ({ queryKey }: QueryFunctionContext) => {
  const [_, roomPk] = queryKey;
  return instance
    .get(`rooms/${roomPk}/reviews`)
    .then((response) => response.data);
};

export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);

export const logOut = () =>
  instance
    .post(`users/log-out`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const githubLogIn = (code: string) =>
  instance
    .post(
      `users/github`,
      { code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.status);

export const kakaoLogIn = (code: string) =>
  instance
    .post(
      `users/kakao`,
      { code },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.status);

export interface IUsernameLoginVariables {
  username: string;
  password: string;
}

export interface IUsernameLoginSuccess {
  ok: string;
}

export interface IUsernameLoginError {
  error: string;
}

export const usernameLogin = ({
  username,
  password,
}: IUsernameLoginVariables) =>
  instance
    .post(
      `users/log-in`,
      { username, password },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

export const getAmenities = () =>
  instance.get(`rooms/amenities`).then((response) => response.data);

export const getCategories = () =>
  instance.get(`categories`).then((response) => response.data);

export interface IUploadRoomVariables {
  name: string;
  country: string;
  price: number;
  rooms: number;
  toilets: number;
  description: string;
  address: string;
  pet_friendly: boolean;
  kind: string;
  amenities: number[];
  category: number;
  city: string;
}

export const uploadRoom = (variables: IUploadRoomVariables) =>
  instance
    .post(`rooms/`, variables, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export const getUploadURL = () =>
  instance
    .post(`medias/photos/get-url`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export interface IUploadImageVariables {
  file: FileList;
  uploadURL: string;
}

export const uploadImage = ({ file, uploadURL }: IUploadImageVariables) => {
  const form = new FormData();
  form.append("file", file[0]);
  return axios
    .post(uploadURL, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

export interface ICreatePhotoVariables {
  description: string;
  file: string;
  roomPk: string;
}

export const createPhoto = ({
  description,
  file,
  roomPk,
}: ICreatePhotoVariables) =>
  instance
    .post(
      `rooms/${roomPk}/photos`,
      { description, file },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

type CheckBookingQueryKey = [string, string?, Value?];

export const checkBooking = ({
  queryKey,
}: QueryFunctionContext<CheckBookingQueryKey>) => {
  const [_, roomPk, dates] = queryKey;
  if (dates) {
    if (dates && Array.isArray(dates)) {
      const [firstDate, secondDate] = dates;
      if (firstDate && secondDate) {
        const checkIn = formatDate(firstDate);
        const checkOut = formatDate(secondDate);
        return instance.get(
          `room/${roomPk}/bookings/check?check_in=${checkIn}&check_out=${checkOut}`
        );
      }
    }
  }
};
