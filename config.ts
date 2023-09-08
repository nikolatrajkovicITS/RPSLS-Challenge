type ConfigType = {
  [key in 'development' | 'production' | 'test']: {
    API_BASE_URL: string;
  };
};

const getApiBaseUrl = (): string => {
  return typeof window !== 'undefined'
    ? `${window.location.origin}/api`
    : 'http://localhost:3000/api';
};

const config: ConfigType = {
  development: {
    API_BASE_URL: getApiBaseUrl(),
  },
  production: {
    API_BASE_URL: getApiBaseUrl(),
  },
  test: {
    API_BASE_URL: getApiBaseUrl(),
  },
};

const ENV = process.env.NODE_ENV as 'development' | 'production' | 'test';

export default config[ENV];
