import axios, { AxiosResponse } from 'axios';

export interface MessageResponse {
  message: string;
}

export const postMessage = async (message: string): Promise<MessageResponse> => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const response: AxiosResponse<MessageResponse> = await axios.post(`${import.meta.env.VITE_BASE_URL}/feedback`, { message });
  return response.data;
};