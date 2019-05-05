"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const index_1 = require("./index");
// const ezbuyWebPath = `/Users/violin/gitlab/ezbuyWeb`;
const params = {
    pages: [],
    templatePath: path_1.resolve(__dirname, "../test-data/index.html"),
    sitePath: path_1.resolve(__dirname, "/Users/violin/test-data"),
    siteCountry: index_1.SITE_COUNTRY.sg
};
index_1.titanGen(params, "test", true);
