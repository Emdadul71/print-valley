import { apiSlice } from "@/appstore/api-slice";
import { setEncryptedCookie } from "@/helpers/cookie/cookieCryptoUtils";
import Cookies from "js-cookie";

const baseURL = process.env.NEXT_PUBLIC_API_URI;

export const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (data) => ({
        url: `/user/login`,
        method: "POST",
        body: data,
        keepUnusedDataFor: 0,
      }),

      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          if (result) {
            Cookies.set("userToken", result.data.token);
          }
          window.location.href = `/admin/dashboard`;
        } catch (error) {
          //
        }
      },
    }),
    signUp: build.mutation({
      query: (data) => ({
        url: `/user`,
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          if (result) {
            window.location.href = `/active-account`;
          }
        } catch (error) {
          //
        }
      },
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: `/profile/password`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateProfile: build.mutation({
      query: (data) => ({
        url: `/profile`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["ProfileData"],
    }),
    profile: build.query({
      query: () => {
        return `/profile`;
      },
      keepUnusedDataFor: 10,
      providesTags: ["ProfileData"],
    }),
    forgotPass: build.mutation({
      query: (data) => ({
        url: "/user/forgot-password",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          if (result) {
            window.location.href = `/reset-password`;
          }
        } catch (error) {
          //
        }
      },
    }),
    accountActive: build.mutation({
      query: (data) => ({
        url: "/user",
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          if (result) {
            window.location.href = `/login`;
          }
        } catch (error) {
          //
        }
      },
    }),
    resetPass: build.mutation({
      query: (data) => ({
        url: "/user/reset-password",
        method: "POST",
        body: data,
      }),
    }),
    confirmOtp: build.query({
      query: (queryString) => {
        return `${baseURL}/confirm${queryString}`;
      },
    }),
    logout: build.query({
      query: () => `${baseURL}/auth/logout`,
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          if (result) {
            Cookies.remove("userToken");
            Cookies.remove("refreshToken");
          }
          window.location.href = `/login`;
        } catch (error) {
          //
        }
      },
    }),
    getProfile: build.query({
      query: () => `/profile`,
      providesTags: ["Profile"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useSignInMutation,
  useAccountActiveMutation,
  useSignUpMutation,
  useProfileQuery,
  useLogoutQuery,
  useChangePasswordMutation,
  useConfirmOtpQuery,
  useUpdateProfileMutation,
  useForgotPassMutation,
  useResetPassMutation,
} = authApi;
