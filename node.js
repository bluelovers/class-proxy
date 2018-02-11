"use strict";
/**
 * Created by user on 2018/2/11/011.
 */
const index_1 = require("./index");
const ClassProxy = index_1.default;
// @ts-ignore
ClassProxy.createClassProxy = index_1.default;
// @ts-ignore
ClassProxy.default = index_1.default;
module.exports = ClassProxy;
