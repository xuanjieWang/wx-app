import {
  fetchHome
} from '../../services/home/home';

Page({
  data: {
    imgSrcs: [],
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: '500',
    interval: 5000,
    navigation: {
      type: 'dots'
    },
    swiperImageProps: {
      mode: 'scaleToFill'
    },
    iconList: [
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/1274.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/2256.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/3462.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/4635.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/5840.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/6046.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/7240.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/8420.png"
    ],
    titleList: ["标准静态", "精美静态", "定制静态", "微课/MG动画", "标准动态", "精美动态", "定制动态", "高端静/动态"]
  },

  onShow() {
    // this.getTabBar().init();
  },

  onLoad() {
    this.init();
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.loadHomePage();
  },

  loadHomePage() {
    this.setData({
      pageLoading: true,
    });
    fetchHome().then(({
      swiper,
    }) => {
      this.setData({
        imgSrcs: swiper,
        pageLoading: false,
      });
    });
  },
  goPPT(e) {
    const id = e.currentTarget.dataset.index;
    console.log(id)
    wx.navigateTo({
      url: `/pages/ppt/index?id=${id}`,
    });
  }
});