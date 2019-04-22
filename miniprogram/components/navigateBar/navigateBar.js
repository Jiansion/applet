const app = getApp();
Component({
    /**
     * 组件的一些选项
     */
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    /**
     * 组件的对外属性
     */
    properties: {
        bgColor: {
            // 背景颜色
            type: String,
            default: ''
        },
        isCustom: {
            // 是否展示指定义胶囊按钮
            type: [Boolean, String],
            default: false
        },
        isBack: {
            // 是否展示返回上页按钮
            type: [Boolean, String],
            default: false
        },
        bgImage: {
            // 色湖之状态栏背景图片
            type: String,
            default: ''
        },
    },
    /**
     * 组件的初始数据
     */
    data: {
        navigateBar: app.navigateBar
    },
    /**
     * 组件的方法列表
     */
    methods: {
        toBack() {
            wx.navigateBack({
                delta: 1
            });
        },
        toHome() {
            wx.reLaunch({
                url: '/pages/index/index',
            })
        }
    }
})