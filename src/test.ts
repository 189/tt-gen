import { resolve } from "path";
import { titanGen, SITE_COUNTRY } from "./index";

// const ezbuyWebPath = `/Users/violin/gitlab/ezbuyWeb`;

const params = {
    pages: [],
    templatePath: resolve(__dirname, "../test-data/index.html"),
    sitePath: resolve(__dirname, "/Users/violin/test-data"),
    siteCountry: SITE_COUNTRY.sg
};

titanGen(params, "test" , true);