/* node .smart-gridrc.js */
const smartgrid = require('smart-grid');

/* Default settings in => '.\node_modules\smart-grid\system\defaults' */
let settings = {
  filename: '_grid',
  /* less || scss || sass || styl */
  outputStyle: 'scss',
  /* number of grid columns */
  columns: 12,
  /* gutter width px || % || rem */
  offset: '3rem',
  /* mobileFirst ? 'min-width' : 'max-width' */
  mobileFirst: false,
  container: {
    /* max-width оn very large screen */
    maxWidth: '1200px',
    fields: '30px' /* side fields */
  },
  breakPoints: {
    /*xlg: {
      width: '1600px'
    },
     lg: {
        width: '1200px'
    }, */
    md: {
      width: '992px'
    },
    sm: {
      width: '768px',
      fields: '15px' /* set fields only if you want to change container.fields */
    },
    xs: {
      width: '544px'
    },
    xxs: {
      width: '420px'
    },
    /* We can create any quantity of break points. */
    /* some_name: {
        width: 'Npx',
        fields: 'N(px|%|rem)',
        offset: 'N(px|%|rem)'
    } */
  },
  mixinNames: {
    // container: "wrapper",
    container: "w",
    // row: "row-flex",
    row: "r",
    rowFloat: "row-float",
    rowInlineBlock: "row-ib",
    rowOffsets: "row-offsets",
    // column: "col",
    column: "c",
    // size: "size",
    size: "s",
    columnFloat: "col-float",
    columnInlineBlock: "col-ib",
    columnPadding: "col-padding",
    columnOffsets: "col-offsets",
    shift: "shift",
    from: "from",
    to: "to",
    fromTo: "from-to",
    reset: "reset",
    clearfix: "clearfix",
    debug: "bug",
    // debug: "debug",
    uRowFlex: "u-row-flex",
    uColumn: "u-col",
    uSize: "u-size"
  },
  tab: "  ",
  defaultMediaDevice: "screen",
  detailedCalc: false
}

smartgrid('./src/scss', settings);