// index.js
// 获取应用实例
const app = getApp()

//手势的全局变量
var touchStartX = 0;//触摸时的原点  
var touchStartY = 0;//触摸时的原点  
var time = 0;// 时间记录，用于滑动时且时间小于1s则执行左右滑动  
var interval = "";// 记录/清理时间记录  
var touchMoveX = 0; // x轴方向移动的距离
var touchMoveY = 0; // y轴方向移动的距离


//定义全局变量
var score = 0;
//创建二维数组
var map = new Array(4);
for(var i=0;i<4;i++){
　　map[i]=new Array(4);
}
var isnew = 0;              //是否需要创造
Page({
  data: {
    //此处数据待完善
    num11:0,
    num12:0,
    num13:0,
    num14:0,
    num21:0,
    num22:0,
    num23:0,
    num24:0,
    num31:0,
    num32:0,
    num33:0,
    num34:0,
    num41:0,
    num42:0,
    num43:0,
    num44:0,
    t11:" ", 
    t12:" ", 
    t13:" ", 
    t14:" ", 
    t21:" ", 
    t22:" ", 
    t23:" ", 
    t24:" ", 
    t31:" ", 
    t32:" ", 
    t33:" ", 
    t34:" ", 
    t41:" ", 
    t42:" ", 
    t43:" ", 
    t44:" ", 
    score:"得分："+score,
    motto: '--by：orall',
    userInfo: {},
    hasUserInfo: false,

    
  },
  
    playAudio:function(){
          const innerAudioContext = wx.createInnerAudioContext()
          innerAudioContext.autoplay = true // 是否自动开始播放，默认为 false
          innerAudioContext.loop = false // 是否循环播放，默认为 false
          wx.setInnerAudioOption({ // ios在静音状态下能够正常播放音效
          obeyMuteSwitch: false, // 是否遵循系统静音开关，默认为 true。当此参数为 false 时，即使用户打开了静音开关，也能继续发出声音。
          success: function (e) {},
              fail: function (e) {}
          })
          innerAudioContext.src = "/utils/music.mp3"; // 音频资源的地址
          innerAudioContext.onPlay()
    },

  show:function () {
  
    //小程序动态改变文字：https://blog.csdn.net/a772116804/article/details/88536766
    /*//为啥这个不行？？？待完善
    var text = " ";
    for(var i = 0 ; i < 4 ; i++ ){
      for(var j = 0 ; j < 4 ; j ++ ){
          if( map[i][j] == 0 ){
            text = " ";
          }else{
          text = String(map[i][j]);
          }
          var str1 = "t" +String(i+1)+String(j+1);
          this.setData({ str1: text});
          console.log(str1)
      }
    }*/

    var text = " ";
    if( map[0][0] == 0 ){
      text = " ";
    }else{
     text = map[0][0];
    }
    this.setData({num11:map[0][0]});
    this.setData({ t11: text});

    if( map[0][1] == 0 ){
      text = " ";
    }else{
      text = map[0][1];
    }
    this.setData({num12:map[0][1]});
    this.setData({ t12: text});
    
    if( map[0][2] == 0 ){
      text = " ";
    }else{
      text = map[0][2];
    }
    this.setData({num13:map[0][2]});
    this.setData({ t13: text});
    
    if( map[0][3] == 0 ){
      text = " ";
    }else{
      text = map[0][3];
    }
    this.setData({num14:map[0][3]});
    this.setData({ t14: text});

    if( map[1][0] == 0 ){
      text = " ";
    }else{
      text = map[1][0];
    }
    this.setData({num21:map[1][0]});
    this.setData({ t21: text});

    if( map[1][1] == 0 ){
      text = " ";
    }else{
      text = map[1][1];
    }
    this.setData({num22:map[1][1]});
    this.setData({ t22: text});

    if( map[1][2] == 0 ){
      text = " ";
    }else{
      text = map[1][2];
    }
    this.setData({num23:map[1][2]});
    this.setData({ t23: text});

    if( map[1][3] == 0 ){
      text = " ";
    }else{
      text = map[1][3];
    }
    this.setData({num24:map[1][3]});
    this.setData({ t24: text});

    if( map[2][0] == 0 ){
      text = " ";
    }else{
      text = map[2][0];
    }
    this.setData({num31:map[2][0]});
    this.setData({ t31: text});

    if( map[2][1] == 0 ){
      text = " ";
    }else{
      text = map[2][1];
    }
    this.setData({num32:map[2][1]});
    this.setData({ t32: text});

    if( map[2][2] == 0 ){
      text = " ";
    }else{
      text = map[2][2];
    }
    this.setData({num33:map[2][2]});
    this.setData({ t33: text});

    if( map[2][3] == 0 ){
      text = " ";
    }else{
      text = map[2][3];
    }
    this.setData({num34:map[2][3]});
    this.setData({ t34: text});

    if( map[3][0]== 0 ){
      text = " ";
    }else{
      text = map[3][0];
    }
    this.setData({num41:map[3][0]});
    this.setData({ t41: text});

    if( map[3][1]== 0 ){
      text = " ";
    }else{
      text = map[3][1];
    }
    this.setData({num42:map[3][1]});
    this.setData({ t42: text});

    if( map[3][2]== 0 ){
      text = " ";
    }else{
      text = map[3][2];
    }
    this.setData({num43:map[3][2]});
    this.setData({ t43: text});

    if( map[3][3]== 0 ){
      text = " ";
    }else{
      text = map[3][3];
    }
    this.setData({num44:map[3][3]});
    this.setData({ t44: text});
    
    this.setData({ score: "得分："+score});

  },
  new_num:function() {
    //开始时棋盘内随机出现两个数字，出现的数字仅可能为2或4。
    //每有效移动一步，棋盘的空位(无数字处)随机出现一个数字(依然可能为2或4)。

    var isok = 0;
    while (isok != 1) {
        var pos_x = Math.floor(Math.random()*(3-0+1)+0);
        var pos_y = Math.floor(Math.random()*(3-0+1)+0);
        if (map[pos_x][pos_y] == 0 ) {
      if( Math.floor(Math.random()*(1-0+1)+0) == 0 ){
         map[pos_x][pos_y] = 2;
      }else{
        map[pos_x][pos_y] = 4;
      }
            isok = 1;
        }
    }
    return;
},

 
  
  judge:function () {
      var isblack = 0;
      for (var i = 0; i < 4; i++) {
          for (var j = 0; j < 4; j++) {
              if (map[i][j] == 2048) {            //出现2048
                //弹出信息框：https://blog.csdn.net/zgmu/article/details/53435010
                wx.showModal({
                  title: '恭喜游戏胜利' ,
                  content: '，退出界面后按New重新开始一局新的游戏' ,
                  success: function (res) {
                   if (res.confirm) {
                    console.log( '用户点击确定' );
                    //this.main();
                   }
                  }
                })
                  //confirm("游戏胜利"); //在页面上弹出确认对话框
              }
              if (map[i][j] != 0) {
                  isblack++;
              }
          }
      }   
  
      //看是否还可以继续进行有效移动
      var isfail = 1;
      if (isblack == 16) {
          //分析一列
          for (var j = 0; j < 4 && isfail != 0;  j++) {           
              var stk = new Array(4);						//用数组表示栈
              var top = 0;		
              for (var i = 0; i < 4 && isfail != 0; i++) {
                  if (top == 0 || stk[top - 1] != map[i][j]) {         //top != map[i][j]
                      stk[top] = map[i][j];
            top++;
                  }
                  else {
                      isfail = 0;             //说明还可以继续进行有效移动
                      break;
                  }
              }
          }
  
          //分析一行
          for (var i = 0; i < 4 && isfail != 0; i++) {
              var stk = new Array(4);						//用数组表示栈
              var top = 0;		
              for (var j = 0; j < 4 && isfail != 0; j++) {
                  if (top == 0 || stk[top - 1] != map[i][j]) {         //top != map[i][j]
                      stk[top] = map[i][j];
            top++;
                  }
                  else {
                      isfail = 0;
                      break;
                  }
              }
          }
          if (isfail == 1) {
                //confirm("游戏失败"); //在页面上弹出确认对话框
                wx.showModal({
                  title: '很遗憾游戏失败' ,
                  content: '，退出界面后按New重新开始一局新的游戏' ,
                  success: function (res) {
                   if (res.confirm) {
                    console.log( '用户点击确定' );
                    //this.main();
                   }
                  }
                })
          }
      }
  },
  
  move:function (model) {               //移动
      var isvalid = 0;
      if (model == 1) {       //up
          for (var j = 0; j < 4; j++) {       //对每一列进行分析
              var stk = new Array(4);			//用数组表示栈
        for(var i = 0 ; i < 4 ; i++ ){
          stk[i] = 0;
        }
        
        var top = 0;					//top表示还没东西的位置（top = size）
              for (var i = 0; i < 4; i++) {
                 
                  //将不是0的插入
                  if ( map[i][j] != 0) {       //利用栈来排列（栈原理）
                         //top = size 
                      if ( top  == 0 ||  stk[top-1] != map[i][j]) {         //top != map[i][j]
                          stk[top] = map[i][j];
                          top++;
                      }
                      else {
                          score += map[i][j] * 2;
                          stk[top-1] = map[i][j] * 2;
                          this.playAudio();
                          
                      }
  
                     
                  }
              }
              if ( top != 4) {          //如果不等于4，说明是有效移动
                  //跟原来比较一下
                  for (var k = 0; k < top; k++) {
                      if (map[k][j] != stk[k]) {
                          isvalid = 1;
                      }
                  }
              }
              //将结果放入map中
              for (var k = 0; k < 4; k++) {
                  map[k][j] = stk[k];
              }
          }
      }else if( model == 2 ){         //down
          for (var j = 0; j < 4; j++) {       //对每一列进行分析
              var stk = new Array(4);
        for(var i = 0 ; i < 4 ; i++ ){
          stk[i] = 0;
        }
        var top = 0;
        
              for (var i = 3; i >= 0 ; i--) {
                
                  //将不是0的插入
                  if (map[i][j] != 0) {           //利用栈来排列
                      if (top == 0 || stk[top - 1] != map[i][j]) {         //top != map[i][j]
                          stk[top] = map[i][j];
                          top++;
                      }
                      else {
                          score += map[i][j] * 2;
                          stk[top - 1] = map[i][j] * 2;
                          this.playAudio();
                      }
                  }
              }
              if (top != 4) {          //如果不等于4，说明是有效移动
                  //跟原来比较一下
                  for (var k = 0; k < top; k++) {
                      if (map[3 - k][j] != stk[k]) {
                          isvalid = 1;
                      }
                  }
              }
              //将结果放入map中
              for (var k = 0; k < 4; k++) {
                  map[3-k][j] = stk[k];
              }
          }
      }
      else if ( model == 3) {          //left
          for (var i = 0; i < 4; i++) {           //对每一行进行分析
              var stk = new Array(4);
              for(var k = 0 ; k < 4 ; k++ ){
                stk[k] = 0;
              }
        var top = 0 ;
              for (var j = 0; j < 4; j++) {       
                  //将不是0的插入
                  if (map[i][j] != 0) {           //利用栈来排列
                      if (top == 0 || stk[top - 1] != map[i][j]) {         //top != map[i][j]
                          stk[top] = map[i][j];
                          top++;
                      }
                      else {
                          score += map[i][j] * 2;
                          stk[top - 1] = map[i][j] * 2;
                          this.playAudio();
                      }
                  }
              }
              if (top != 4) {          //如果不等于4，说明是有效移动
                   //跟原来比较一下
                  for (var k = 0; k < top; k++) {
                      if (map[i][k]  != stk[k]) {
                          isvalid = 1;
                      }
                  }
        
              }
              //将结果放入map中
              for (var k = 0; k < 4; k++) {
                  map[i][k] = stk[k];
              }
          }
      }
      else if ( model == 4) {              //right
          for (var i = 0; i < 4; i++) {           //对每一行进行分析
              var stk = new Array(4);
        for(var k = 0 ; k < 4 ; k++ ){
          stk[k] = 0;
        }
        var top = 0;
              for (var j = 3; j >= 0; j--) {       
                   
                  //将不是0的插入
                  if (map[i][j] != 0) {           //利用栈来排列
                      if (top == 0 || stk[top - 1] != map[i][j]) {         //top != map[i][j]
                          stk[top] = map[i][j];
                          top++;
                      }
                      else {
                          score += map[i][j] * 2;
                          stk[top - 1] = map[i][j] * 2;
                          this.playAudio();
              
                      }
                  }
              }
              if (top != 4) {          //如果不等于4，说明是有效移动
                   //跟原来比较一下
                  for (var k = 0; k < top; k++) {
                      if (map[i][3 - k] != stk[k]) {
                          isvalid = 1;
                      }
                  }
              }
  
              //将结果放入map中
              for (var k = 0; k < 4; k++) {
                  map[i][3-k] = stk[k];
              }
  
          }
      }
      return isvalid;
  
  },
  
  up:function() {
      if ( this.move(1)) {           //如果能进行有效移动，则创造新的数字
        this.new_num();
      }
  },
  
  down:function() {
      if (this.move(2)) {
        this.new_num();
         
      }
  },
  
  left:function() {
      if ( this.move(3)) {
        this.new_num();
      }
  },
  
  right:function() {
      if ( this.move(4)) {         
        this.new_num();
      }
  },
  
 
  main:function() {
    for(var i = 0 ; i < 4 ; i++ ){
      for(var j = 0 ; j < 4 ; j++ ){
        map[i][j]= 0;
      }
    }
      this.new_num();
      this.show();
  },
  // 触摸开始事件  
  touchStart: function (e) {
    touchStartX = e.touches[0].pageX; // 获取触摸时的原点  
    touchStartY = e.touches[0].pageY; // 获取触摸时的原点  
    // 使用js计时器记录时间    
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  // 触摸移动事件  
  touchMove: function (e) {
    touchMoveX = e.touches[0].pageX;
    touchMoveY = e.touches[0].pageY;
  },
  // 触摸结束事件  
  touchEnd: function (e) {
    var moveX = touchMoveX - touchStartX
    var moveY = touchMoveY - touchStartY
    if (Math.sign(moveX) == -1) {
      moveX = moveX * -1
    }
    if (Math.sign(moveY) == -1) {
      moveY = moveY * -1
    }
    if (moveX <= moveY) {// 上下
      // 向上滑动
      if (touchMoveY - touchStartY <= -30 && time < 10) {
        console.log("向上滑动");
        this.up();
        this.judge();
        this.show();
      }
      // 向下滑动  
      if (touchMoveY - touchStartY >= 30 && time < 10) {
        console.log('向下滑动 ');
        this.down();
        this.judge();
        this.show();
      }
    }else {// 左右
      // 向左滑动
      if (touchMoveX - touchStartX <= -30 && time < 10) {
        console.log("左滑页面")
        this.left();
        this.judge();
        this.show();
      }
      // 向右滑动  
      if (touchMoveX - touchStartX >= 30 && time < 10) {
        console.log('向右滑动');
        this.right();
        this.judge();
        this.show();
      }
    }
    clearInterval(interval); // 清除setInterval  
    time = 0;
  },  

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    for(var i = 0 ; i < 4 ; i ++ ){
      for(var j = 0 ; j < 4 ; j++ ){
        map[i][j] = 0;
      }
    }
    this.new_num();
    this.show();
    
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
