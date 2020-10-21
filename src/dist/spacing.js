"use strict";
exports.__esModule = true;
exports.Spacing = void 0;
var core_1 = require("@styled-system/core");
var config = {
    m: { property: 'margin' },
    mt: { propery: 'marginTop' },
    mr: { property: 'marginRight' },
    mb: { propery: 'marginBottom' },
    ml: { property: 'marginLeft' },
    mx: { properties: ['marginRight', 'marginLeft'] },
    my: { properties: ['marginTop', 'marginBottom'] },
    p: { property: 'padding' },
    pt: { propery: 'paddingTop' },
    pr: { propery: 'paddingRight' },
    pb: { property: 'paddingBottom' },
    pl: { propery: 'paddingLeft' },
    px: { properties: ['paddingRight, paddingLeft'] },
    py: { properties: ['paddingTop, paddingBottom'] }
};
exports.Spacing = core_1.system(config);
