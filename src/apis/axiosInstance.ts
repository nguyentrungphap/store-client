import axios from "axios";
import axiosRetry from "axios-retry";
// import { useGlobalStore } from "@/store/globalStore"; // Uncomment if you have Zustand global store
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

// Custom config type for advanced options
interface CustomAxiosConfig extends AxiosRequestConfig {
  authToken?: string;
  refreshToken?: () => Promise<string>;
  _retry?: boolean;
  signal?: import("axios").GenericAbortSignal;
  baseURL?: string;
  onUploadProgress?: (
    progressEvent: import("axios").AxiosProgressEvent
  ) => void;
  onDownloadProgress?: (
    progressEvent: import("axios").AxiosProgressEvent
  ) => void;
}
// Create singleton instance
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatic retry for network errors
axiosRetry(instance, {
  retries: 2,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) =>
    axiosRetry.isNetworkOrIdempotentRequestError(error) ||
    error.code === "ECONNABORTED",
});

// Request interceptor
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig & CustomAxiosConfig) => {
    // Global loading state (Zustand example)
    // useGlobalStore.getState().setLoading(true);

    // Attach auth token if available
    if (config.authToken && config.headers) {
      if (typeof config.headers.set === "function") {
        config.headers.set("Authorization", `Bearer ${config.authToken}`);
      } else {
        (config.headers as any)["Authorization"] = `Bearer ${config.authToken}`;
      }
    }
    // Dynamic baseURL per request
    if (config.baseURL) {
      config.baseURL = config.baseURL;
    }
    // Request cancellation
    if (config.signal) {
      config.signal = config.signal;
    }
    // Logging (dev only)
    if (import.meta.env.DEV) {
      console.log(
        "[Axios Request]",
        config.method?.toUpperCase(),
        config.url,
        config
      );
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response interceptor
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // useGlobalStore.getState().setLoading(false);
    // Logging (dev only)
    if (import.meta.env.DEV) {
      console.log(
        "[Axios Response]",
        response.status,
        response.config.url,
        response.data
      );
    }
    return response;
  },
  async (error: AxiosError) => {
    // useGlobalStore.getState().setLoading(false);
    // Token refresh logic
    const originalRequest = error.config as CustomAxiosConfig;
    if (
      error.response?.status === 401 &&
      originalRequest.refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const newToken = await originalRequest.refreshToken();
        originalRequest.authToken = newToken;
        return instance(originalRequest);
      } catch (refreshError) {
        // Handle refresh error (e.g., logout)
        return Promise.reject(refreshError);
      }
    }
    // Custom error formatting
    const formattedError = {
      status: error.response?.status,
      message:
        (error.response?.data as any)?.message ||
        (error.response?.data as any)?.error ||
        (error.response?.data as any)?.msg ||
        error.message ||
        "Unknown error",
      data: error.response?.data,
      config: error.config,
    };
    // Logging (dev only)
    if (import.meta.env.DEV) {
      console.error("[Axios Error]", formattedError);
    }
    // useGlobalStore.getState().setError(formattedError);
    return Promise.reject(formattedError);
  }
);

// Helper methods
export const api = {
  get: <T = any>(url: string, config?: CustomAxiosConfig) =>
    instance.get<T>(url, config),
  post: <T = any>(url: string, data?: any, config?: CustomAxiosConfig) =>
    instance.post<T>(url, data, config),
  put: <T = any>(url: string, data?: any, config?: CustomAxiosConfig) =>
    instance.put<T>(url, data, config),
  delete: <T = any>(url: string, config?: CustomAxiosConfig) =>
    instance.delete<T>(url, config),
  // File upload helper
  upload: <T = any>(
    url: string,
    file: File | Blob,
    config?: CustomAxiosConfig
  ) => {
    const formData = new FormData();
    formData.append("file", file);
    return instance.post<T>(url, formData, {
      ...config,
      headers: {
        ...(config?.headers as any),
        "Content-Type": "multipart/form-data",
      },
    });
  },
  // File download helper
  download: <T = Blob>(url: string, config?: CustomAxiosConfig) =>
    instance.get<T>(url, { ...config, responseType: "blob" }),
  instance, // Expose raw instance for advanced use
};

export default api;
