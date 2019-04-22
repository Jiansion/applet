const config = require("config.js");
App({
    globalData: {},

    onLaunch: function() {
        wx.getSystemInfo({
            success: res => {
                let navigateBar = {};
                navigateBar.statusBarHeight = res.statusBarHeight;
                navigateBar.customMenuButton = wx.getMenuButtonBoundingClientRect();
                navigateBar.navigateBarHeight = navigateBar.customMenuButton.bottom + navigateBar.customMenuButton.top - res.statusBarHeight;
                console.log(navigateBar);
                this.navigateBar = navigateBar;
            },
        })
    },


    // 调用时初始化云函数
    initCloud: function() {
        wx.cloud.init({
            traceUser: true,
        });
    }


})