HTMLWidgets.widget({

  name: 'ztb',

  type: 'output',

  factory: function(el, width, height) {

    var ztb = new ZTB.ZTB(el);

    return {

      renderValue: function(x) {

        ztb.render(x);

      },

      resize: function(width, height) {}

    };
  }
});
