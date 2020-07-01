const isDev = false;

const Config = {
    ENV: isDev ? process.env.development : process.env.production,
    API_ROUTE: 'https://stream.twitter.com/1.1/',
};

export default Config;