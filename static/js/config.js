let cityList = {
  beijing: {
    name: '北京',         // 展示的城市名字
    fullName: 'beijing',  // 城市的全称 路由显示用的
    abbr: 'bj',           // 城市简写 下载和画图文件的后缀用的
    pswd: '0420a206ae8b77b60f314a33b38c875a', // md5加密 用的是md5(城市全拼)
    center: [116.407394, 39.904211] // 城市坐标 画图用的
  }, 
  shanghai: {
    name: '上海',
    fullName: 'shanghai',
    abbr: 'sh',
    pswd: '22638a3131d0f0a7346b178fd29f939c',
    center: [121.473662, 31.230372]
  },
  shenzhen: {
    name: '深圳',
    fullName: 'shenzhen',
    abbr: 'sz',
    pswd: '21dab17afb987530111f64f123597f1c',
    center: [114.085947,22.547]
  }
}