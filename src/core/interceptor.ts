/* eslint-disable no-case-declarations */
/* eslint-disable no-plusplus */
import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect } from "react";

function AuthInterceptor() {
  // We can set the default url also
  axios.defaults.baseURL = "";
  // We can set the default authorization token in header
  // axios.defaults.headers.common['authorization'] = "token"

  //  this will add the code in a global level
  axios.interceptors.request.use(
    (req: any) => {
      // const authData = authService.getAuthData();
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEaXNwbGF5TmFtZSI6IkFua3VyIFRlc3QgU3VwZXJ2aXNvciIsIlVzZXJJZCI6IiIsIlVzZXJOYW1lIjoiQW5rdXJUZXN0U3VwZXJ2aXNvciIsIkVtYWlsIjoiQW5rdXJUZXN0U3VwZXJ2aXNvckBpbnRveGFsb2NrLmNvbSIsIlJvbGVJZCI6IiIsIlJvbGVOYW1lIjoiU3VwZXJ2aXNvciIsIklkIjoiZjNlM2IxZTctMzA5Ny00Nzc2LWEzYzAtNTYzYTIxNmJlYjFkIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI0NDdlZDc4Mi01NzE2LTQ4Y2MtYjM2ZS1iNTUxM2IyNGMxOGUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJTdXBlcnZpc29yIiwiVG9rZW5FeHBpcmVkVGltZSI6Ik1hciBNb24gMDYgMjAyMyAxMjo1MToyOSBQTSIsIlRpdGxlIjoiVGVzdCBTYWxlcyBTdXBlcnZpc29yIiwibmJmIjoxNjc4MTE3ODg5LCJleHAiOjE2NzgxMjg2ODl9.FmdK9nyZGRxwki6ts3BzTaj60AHTowgE-5f5x7xi7Y8";
      req.headers.Authorization = `Bearer ${token}`;
      req.headers["Content-Type"] = "application/json";
      // if (authData && !req.url.includes("api/contactUs")) {
      //   req.headers.Authorization = `Bearer ${authData.Access_token}`;
      // } else {
      //   const preloginToken = localStorage.getItem("preLoginToken");
      //   req.headers.Authorization = `Bearer ${preloginToken}`;
      // }
      // if (!req.url.includes("api/token")) {
      //   req.headers["Content-Type"] = "application/json";
      // }
      // setLoader(true);
      return req;
    },
    () => {}
  );

  const axiosResponseInterceptor = axios.interceptors.response.use(
    (res: any) => {
      // setLoader(false);

      const { status } = res as AxiosResponse;

      // if (
      //   res?.data?.ApiResponse &&   !res?.data?.ApiResponse.Status &&
      //   res?.data?.ApiResponse.Message === "Unauthorized"
      // ) {
      //   localStorage.clear();
      //   setCustomerName(null);
      //   authContextValue.setAuthData(null);
      //   openNotification(
      //     NotificationType.error,
      //     "Your session has been expired. Please login to continue.",
      //     "UNAUTHORIZED_ERROR"
      //   );
      //   navigate("/login");
      // }

      switch (status) {
        case 200:
          return Promise.resolve(res?.data);
        case 204:
          return Promise.resolve(res?.data);
        default:
          return Promise.resolve(res);
      }
    },
    async (error: AxiosError<any>) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      axios.interceptors.response.eject(axiosResponseInterceptor);
    };
  });
  return null;
}

export default AuthInterceptor;
