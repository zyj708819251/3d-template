let Tools = {
  //全屏
  enterFullScreen() {
    let el = document.documentElement
    let rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
    if (rfs) { // typeof rfs != "undefined" && rfs
      rfs.call(el)
    } else if (typeof window.ActiveXObject !== 'undefined') {
      // for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
      let wscript = new ActiveXObject('WScript.Shell')
      if (wscript != null) {
        wscript.SendKeys('{F11}')
      }
    }
  },
  //禁用ctrl+滚轮操作
  forbidCtrlAndHl() {
    document.addEventListener('keydown', function(event) {
      if ((event.ctrlKey === true || event.metaKey === true) &&
        (event.which === 61 || event.which === 107 ||
          event.which === 173 || event.which === 109 ||
          event.which === 187 || event.which === 189)) {
        event.preventDefault();
      }
    }, false);
    // Chrome IE 360
    window.addEventListener('mousewheel', function(event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    }, {
      passive: false
    });

    //firefox
    window.addEventListener('DOMMouseScroll', function(event) {
      if (event.ctrlKey === true || event.metaKey) {
        event.preventDefault();
      }
    }, {
      passive: false
    });
  },
  //获取当月的最新数据
  getNowMonthFirstDay() {
    var date = new Date();
    var year, month, day, hour, min, second;
    year = date.getFullYear();
    parseInt(date.getMonth()) + 1 < 10 ? month = '0' + (parseInt(date.getMonth()) + 1) : month = parseInt(date.getMonth()) +
      1;
    return [year, month, '01'].join('-') + ' ' + '00:00:00'
  },
  //千分位
  formatNum(num) {
    return (num + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,');
  },
  //获取随机数
  getRandomNum(num, m, n) {
    var a = [];
    for (var i = 0; i < num; i++) {
      var r = getRand(m, n);
      if (a.indexOf(r) == -1) {
        a.push(r);
      } else {
        i--;
        getRand(m, n);
      }
    }

    function getRand(m, n) {
      return (Math.ceil(Math.random() * 10000) % (n - m + 1)) + m;
    }
    return a;
  }
}

export default Tools
