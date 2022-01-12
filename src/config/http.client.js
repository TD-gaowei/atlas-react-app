import axios from 'axios';
import TokenGenerator from './token.generator';

class HttpClient {
  initialize(baseUrl) {
    if (this._axiosInstance) throw new Error('HttpClient already initialized!');

    this._axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: 5000,
    });

    this._axiosInstance.interceptors.request.use(
      async function tokenInterceptor(config) {
        const accessToken = await TokenGenerator.get();

        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${accessToken}`,
          },
        };
      }
    );
  }

  get instance() {
    return this._axiosInstance;
  }
}
const httpClient = new HttpClient();

export default httpClient;
