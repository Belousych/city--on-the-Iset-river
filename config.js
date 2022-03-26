import getConfig from "next/config";

const config = getConfig().publicRuntimeConfig;

export const SERVER_URL = config.SERVER_URL;
