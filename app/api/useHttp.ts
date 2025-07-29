import { useRuntimeConfig, useCookie } from "#app";

export const useHttp = async (url: string, options: RequestInit = {}) => {
  const config = useRuntimeConfig();
  const authToken = useCookie("auth_token");

  const response = await fetch(`${config.public.API_BASE_URL}${url}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${authToken.value || ""}`,
      "Accept-Language": "uz",
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }

  return await response.json();
};