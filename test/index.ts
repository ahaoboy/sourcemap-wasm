import { init, SourceMap } from "../src";
import fs from "fs";

(async () => {
  await init();
  const RAW_SOURCEMAP = JSON.parse(
    fs.readFileSync(
      "C:/tool/wt/vite-react/dist/assets/index.e3aee5d4.js.map",
      "utf-8"
    )
  );

  let sourcemap = new SourceMap();
  sourcemap.addVLQMap(RAW_SOURCEMAP);

  // This function removes the underlying references in the native code
  // sourcemap.delete();

  const m = sourcemap.findClosestMapping(7984, 1);
  console.log(m);
})();

(async () => {
  await init();
  let map = new SourceMap("/test-root");
  map.addVLQMap({
    mappings: "AAAA;AAAA,EAAA,OAAO,CAAC,GAAR,CAAY,aAAZ,CAAA,CAAA;AAAA",
    sources: ["helloworld.coffee"],
    names: [],
  });

  let mapping = map.findClosestMapping(2, 8);
  console.log(mapping);
})()
