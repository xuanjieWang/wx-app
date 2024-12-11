Page({
  data: {
    id: '',
    imgList: ["http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/nj608.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/nj2368.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/nj3688.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/nj4043.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/nj5332.png",
      "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/nj6643.png"
    ],

  },
  onLoad(query) {
    const {
      id
    } = query;
    console.log("====", id);

    if (id === "1") {
      this.setData({
        imgList: ["http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw007.png",
          "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw2883.png",
          "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw3650.png",
          "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw4912.png",
          "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw5160.png",
          "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw6445.png",
          "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw7769.png",
          "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw8045.png",
          "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw9340.png",
          "http://xuanjie22.oss-cn-beijing.aliyuncs.com/blog/dw10665.png"
        ],
      });
    }

    this.setData({
      id: id,
    });
  },
});