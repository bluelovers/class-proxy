/**
 * Created by user on 2018/2/11/011.
 */

import createClassProxy from './index';

const ClassProxy = createClassProxy;

// @ts-ignore
ClassProxy.createClassProxy = createClassProxy;
// @ts-ignore
ClassProxy.default = createClassProxy;

export = ClassProxy;
