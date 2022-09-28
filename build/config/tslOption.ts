import { Options } from "ts-loader";
import { resolvePath } from "../env";

export const tslOption: Partial<Options> = {
  configFile: resolvePath(__dirname, "../../tsconfig.json"),
  transpileOnly: true,
};
