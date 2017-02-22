//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    imgUrls:["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567995773&di=1f6fe748850121a2d63e9fe1e93b1335&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F6483681474989378.jpg","https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567995773&di=6809d272962aa86a7fd540afcc192138&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201609%2F18%2F20160918114110_jELFM.jpeg"],
    btnInfo:[
      {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg", title:'这是女神'},
      {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg", title:'这是女神'},
      {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg", title:'这是女神'},
      {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg", title:'这是女神'}],
  streetInfo:[
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  {url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487567960127&di=cce8e6cb1698864ec8d06b7584475c87&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160927%2F5589861474989378.jpg"},
  ],

  merchandiseInfo:[
    {picNumber:1, signture:['标签2','标签3']},
    {picNumber:3, signture:['标签1','标签2','标签3']},
    {picNumber:3, signture:['标签1','标签2']},
    {picNumber:1, signture:['标签1','标签2','标签3']},
    {picNumber:3, signture:['标签1','标签3']},
    {picNumber:1, signture:['标签3']},
    {picNumber:3, signture:['标签1']},
    {picNumber:1, signture:['标签1','标签3']},
    {picNumber:3, signture:['标签1','标签2','标签3']},
  ]
  },
 
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  imageClick:function(event){
    console.log(event)
  }
})
