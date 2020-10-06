var callbackService = function() {

  /**
   * 跳转路由
   * @param {Object} data
   * {
       service_id: 'page.call_function',
       browser_type: 'chrome',
       function_name: 'window.$public.handleJumpRouter',
       path:'/',
       query:'{"data":"1234"}'
     }
   */
  var handleJumpRouter = function(data) {
    let path = "";
    let query = {};
    if (typeof data == 'string') {
      try {
        var obj = JSON.parse(data);
        if (typeof obj == 'object' && obj) {

          if (obj.hasOwnProperty("path")) {
            path = obj.path
          }
          if (obj.hasOwnProperty("query")) {
            try {
              query = obj.query
            } catch (e) {

            }

          }
        } else {}

      } catch (e) {
        console.log('error：' + e);
      }
    }
    $vue.$router.push({
      path: path,
      query: query
    });
  }

  /**
   * 打开iframe页面
   * @param {Object} data
   * {
       service_id: 'page.call_function',
       browser_type: 'chrome',
       function_name: 'window.$public.handleCreateIframe',
       id: "ifsajkldjlk",
       width: "200",
       height: "200",
       left: "10",
       top: "20",
       iframeSrc: "http://www.baidu.com",
     }
   */
  var handleCreateIframe = function(options) {
    var options = JSON.parse(options)
    var top = options.top ? (options.top.indexOf('%') == -1 ? options.top + 'px' : options.top) : 'initial';
    var left = options.left ? (options.left.indexOf('%') == -1 ? options.left + 'px' : options.left) : 'initial';
    var right = options.right ? (options.right.indexOf('%') == -1 ? options.right + 'px' : options.right) :
      'initial';
    var bottom = options.bottom ? (options.bottom.indexOf('%') == -1 ? options.bottom + 'px' : options.bottom) :
      'initial';
    $('#app').append(
      `
  			<iframe src="${window.rootUrl}${options.iframeSrc}"  id="${options.id}" class="handleCreateIframeContainer" style="
  			 position: fixed;
  			 z-index: 100001;
  			 width: ${options.width}px;
  			 height: ${options.height}px;
  			 left:${left};
  			 right:${right};
  			 top:${top};
  			 bottom:${bottom};
  			 overflow: hidden;" frameborder="0"></iframe>
  		`
    )
  }
  /**
   * 关闭iframe页面
   * @param {Object} data
   * {
       id: "ifsajkldjlk",
     }
   */
  var handleCloseIframe = function(options) {

    var optionsValue = JSON.parse(options)
    try {
      var obj = document.getElementById(optionsValue.id)
      obj.contentWindow.resafety_onclose && obj.contentWindow.resafety_onclose();
      obj.remove()
    } catch (error) {

    }

    // $(`#${optionsValue.id}`).remove()



  }
  //id=3195&fromId=00001&fromName=T_UO_BG
  /**
   * 获取落点三维属性标牌的信息
   * @param {Object} options
   * {
       service_id: 'page.call_function',
       browser_type: 'chrome',
       function_name: 'window.$public.handleGetPonitProperty',
       id: "3195",
       fromId:"00001",
       fromName:"T_UO_BG"
     }
   *
   */
  var handleGetPonitProperty = function(options) {
    var options = JSON.parse(options);

    $.ajax({
      url: rootUrl + '/query/selectFromField?id=' + options.id + '&fromId=' + options.fromId +
        '&fromName=' + options.fromName + '',
      success: function(res) {
        var data = {};
        if (res.length == 1) {
          data = res[0];
        }
        var contents = [];
        for (var key in data) {
          contents.push([key, data[key]])
        }
        // console.log(contents)
        rs._serviceCall({
          "service_id": "effect.texture_label.create",
          "pos": {
            "x": 113.34736393,
            "y": 23.33850389,
            "z": 9.47
          },
          "offset": {
            "x": 100,
            "y": -200
          },
          "align": 5,
          "title": {
            "back_color": "0xffffffff",
            "content": data['F_NAME'],
            "font": {
              "color": "0xffffffff",
              "name": "微软雅黑",
              "size": 28
            }
          },
          "contents": contents,
          "fonts": {
            "f1": {
              "color": "0xffdfdf50",
              "name": "微软雅黑",
              "size": 24
            },
            "f2": {
              "color": "0xff00fff6",
              "name": "微软雅黑",
              "size": 24
            }
          },
          "frame_color": "0xffff0000",
          "space": "10,10,5,10",
          "back_color": "0x80000000",
          "pointer": {
            "width": 2,
            "offset_x": 10,
            "offset_y": 10
          }
        })
      }
    })


  }

  return {
    handleGetPonitProperty,
    handleJumpRouter,
    handleCreateIframe,
    handleCloseIframe
  }
}()

export {
  callbackService
}
