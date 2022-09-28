import { runBuild } from "./build";
import { start } from "./serve";

const main = () => {
  if (process.env.SERVE == "true") {
    start();
  } else {
    runBuild(process.env.NODE_ENV == "prod");
  }
};

main();
