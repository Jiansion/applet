const config = require("config.js");
App({
    globalData:{},

    onLaunch: function() {
    },

    initCloud: function() {
        wx.cloud.init({
            traceUser: true,
        });
    }


})