import { Configuration } from "webpack";

/** 开发环境 */
export const devConf: Configuration = {
  mode: "development",
  devtool: "inline-source-map",
};

/** 生产环境 */
export const prodConf: Configuration = {
  mode: "production",
  devtool: false,
};
