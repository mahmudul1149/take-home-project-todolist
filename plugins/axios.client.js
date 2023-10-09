import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const baseurl = nuxtApp.$config.public.baseURL;

  let api = axios.create({
    baseUrl: baseurl,
    headers: {
      common: {},
    },
  });
  return {
    provide: {
      api: api,
    },
  };
});
