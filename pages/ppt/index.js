Page({
  data: {
    id: '',
    pptList: ["城市介绍", "电网汇报"], //ppt标题
    imgList: ["http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/nj608.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw007.png"
    ], //pptimage,
    pageLoading: false,

  },
  onLoad(query) {
    const {
      id
    } = query;
    this.setData({
      id: id,
    });
  },
  goPPT(e) {
    const id = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: `/pages/ppt/details/index?id=${id}`,
    });
  }
});