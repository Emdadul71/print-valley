import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  prepareHeaders: async (headers, { getState }) => {
    const userToken = Cookies.get("userToken");
    if (userToken) {
      headers.set("Authorization", `Bearer ${userToken}`);
    }
    return headers;
  },
});

// Custom base query with reauthentication logic
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args: any, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  // Handle reauthentication for a 401 status
  if (
    result.error &&
    (result.error.status === 401 || result.error.status === 403) &&
    !args?.url?.includes("/auth")
  ) {
    Cookies.remove("userToken", {
      domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    });
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,

  tagTypes: ["ProfileData", "Profile"],
  endpoints: () => ({}),
});
