//import layer from 'alert_1.0.1';

//扩展Date的format方法
Date.prototype.format = function (format) {
    let o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

/**
 * 固定Loading效果，简版；
 * 只支持固定loading效果，效果通过通过CSS控制
 * HTML结构：
 * <div class="u-loading-fixed">
    <div class="u-loading-mask"></div>
    <div class="u-loading-icon"></div>
   </div>
 */
var Loading = function(autoHide){
  this.el = null;
  this.hasnotHide = false;
  this.autoHide = autoHide || false;			// 默认不开启
  return this.init();
}

Loading.prototype = {
  // 生成id key
  guid: function () {
      return Math.floor(Math.random() * 1000);
  },
  init: function(){
    var self = this;
    self.el = $('<div>', {
        'id': 'ui-loading' + self.guid(),
        'class': 'u-loading-fixed'
    });
    self.hide();
    self.render();
    console.log('')
    self.show();
  },
  render: function () {
    var self = this;
    var html = '<div class="u-loading-mask"></div>' +
                '<div class="u-loading-icon"></div>';
    self.el.html(html);
    $('body').append(self.el);
    return self;
  },
  show: function () {
      this.el.show();
      if (this.autoHide) {
      	this.hasnotHide = true;
      	let that = this;
      	setTimeout(function() {
      		that.hide();
      		that.hasnotHide = false;
      	}, 3000);
      }
      return this;
  },
  hide: function () {
  	if (this.autoHide && this.hasnotHide) {
    	this.el.hide();
    	this.hasnotHide = false;
  	}
  	this.hasnotHide = true;
    return this;
  },
  close: function () {
    this.el.remove();
    Loadding = null;
  }
}

const QqwUtil = {

	/**
	 * 异步操作转变同步操作，避免回调
	 *  - 作为程序流程控制
	 *  - 示例，参见 index.js 等
	 * @param  {[type]} gen [ES6 generator]
	 */
	main(gen) {
	  const runner = gen(resume);
	function resume(){
	    const pro = runner.next(...arguments);
	    if(!pro.done){
	        pro.value.then(resume);
	    }
	  }
	  resume();
	},

	/**
	 * 已废弃：
	 * 		template模板渲染，基于artTemplate，依赖jquery或zepto；
	 *   	移动端zepto.touch.template.min.js已经集成，减少HTTP请求；
	 * 采纳：
	 * 		webpack 打包，直接引用模板路径
	 * 使用的是原生语法，具体使用方法：https://github.com/aui/artTemplate
	 * @param: {String} el      模板父元素名称
	 *         {String} renderHtml  模板渲染后的html fragment
	 * @author: fengri
	 * @create: 2015年9月8日17:46:19
	 * @author: Kevin
	 * @modify: 2016年9月7日19:48:19
	 */
	renderTemplate: {
	    // 验证参数
	    parmCheck: function (el, renderHtml) {
	        if (!el || !renderHtml) {
	            return false;
	        } else {
	            return true;
	        }
	    },

	    // 追加
	    append: function (el, renderHtml) {
	        if (this.parmCheck(el, renderHtml)) {
	            $('#' + el).append(renderHtml);
	        }
	    },  //插入前面
	    before : function(el, renderHtml) {
	        if (this.parmCheck(el, renderHtml)) {
	            el.before(renderHtml);
	        }
	    },
	    // 替换
	    html: function (el, renderHtml) {
	    	if (el == 'J-category'){
	    		console.log(tempEl);
	    	}
	        if (this.parmCheck(el, renderHtml)) {
	            $('#' + el).html(renderHtml);
	        }
	    }
	},

	isSupportWebp(supportWebp, supportOther) {
		let webp = new Image();
    webp.src="data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
    webp.onload = function(){
	    if (webp.width === 2 && webp.height === 1) {
	    	supportWebp();
	    } else{
	    	supportOther();
	    }
    }
	},

	/**
	 * 如果浏览器内置 querySelectorAll 接口可获取
	 * @param  {[type]} q   [选择器]
	 * @param  {[type]} ctx [执行环境]
	 */
	$q(q, ctx) {
		return (ctx || document).querySelectorAll(q);
  },

  /**
   * 遍历 querySelectorAll 获取到的选择器数组，并对其执行 fn 操作
   * @param  {[type]}   els [选择器数组]
   * @param  {Function} fn  [要执行的操作]
   */
  each(els, fn) {
    for (var i = 0, len = (els || []).length, el; i < len; i++) {
      el = els[i];
      if (el != null && fn(el, i) === false) i--;
    }
    return els;
  },

  /**
   * 遍历 url 参数转换为 json 对象
   * @return {[type]} [description]
   */
  getSearchToJson() {
	  let pairs = window.location.search.substring(1).split("&"),
	    	obj = {},
	    	pair,
	    	i;
	  for ( i in pairs ) {
	    if ( pairs[i] === "" ) continue;
	    pair = pairs[i].split("=");
	    obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
	  }
	  return obj;
	},

	/**
	 * use "image Ping" for log error
	 * @param  {[type]} msgTip [self definition message for debug]
	 * @param  {[type]} errMsg [message for log]
	 */
	logError(msgTip, errMsg) {
	  var img = new Image();
	  img.src = "/log?msgtip=" + encodeURIComponent(msgTip) + "&msg=" + encodeURIComponent(errMsg);
	},

	/**
	 * try to execute the tryFunc otherwise the catchFunc and then log if error
	 * @param  {[type]} tryFunc   [the target func what you want to do]
	 * @param  {[type]} catchFunc [the catch func what you want to help]
	 * @param  {[type]} errMsgTip [if error, set the error message]
	 * @param  {[type]} errMsg    [optional currently]
	 */
	tryCatch(tryFunc, catchFunc, errMsgTip, errMsg) {
	  try {
	    tryFunc();
	  } catch (ex) {
	    catchFunc && catchFunc();
	    QqwUtil.logError(msgTip, errMsg + ", failed = " + ex.message);
	  }
	},

	/**
	 * check if there localstorage supported
	 * @return {[type]} [description]
	 */
	checkLocalstorage() {
		if (window.localstorage) {
			try {
	      localStorage.setItem(mod, mod);
	      localStorage.removeItem(mod);
	      return true;
	    } catch (e) {
	      return false;
	    }
		}
		return false;
	},

	/**
	 *转换日期对象为日期字符串
   * @param date 日期对象
   * @param isFull 是否为完整的日期数据,
   *               为true时, 格式如"2000-03-05 01:05:04"
   *               为false时, 格式如 "2000-03-05"
   * @return 符合要求的日期字符串
	 */
	getSmpFormatDate(date, isFull) {
    let pattern = "";
    if (isFull == true || isFull == undefined) {
      pattern = 'yyyy-MM-dd hh:mm:ss';
    } else {
      pattern = 'yyyy-MM-dd';
    }
    return QqwUtil.getFormatDate(date, pattern);
  },

  /**
   *转换日期对象为日期字符串
   * @param l long值
   * @param pattern 格式字符串,例如：yyyy-MM-dd hh:mm:ss
   * @return 符合要求的日期字符串
   */
  getFormatDate(date, pattern) {
    if (date == undefined) {
      date = new Date();
    }
    if (pattern == undefined) {
      pattern = "yyyy-MM-dd hh:mm:ss";
    }
    return date.format(pattern);
  },

	/**
 * 基于layer插件的弹出层之消息提醒方法，3秒后自动消失；
 * layer http://layer.layui.com/mobile/
 * param{String}    content   提醒的文本内容
 */
	msg(content, t) {
    if(!content) return;
    t = arguments[1] ? arguments[1] : 3;
    layer.open({
        shade: false,
        // className: 'layer-msg',
        // style: '',
        style: 'background-color:black; color:#fff; border:none; position: fixed; top:4.5rem;  width: 70%; left:0.8rem; text-align: center; ' +
        'border-radius: 8px; text-align: center; line-height: 1.5; padding:0.2rem; font-size: 0.32rem; z-index:2010',
        content: content,
        time: t
    })
	},

	//遮罩层
	pop (content, isClose) {
	  if(!content) return;
	  layer.open({
		  content: content,
		  style: 'background-color:black; color:#fff; border:none;',
		  //time: 2
		  shade: true,
		  shadeClose:isClose,
	  })
	},

	/**
	 * 基于layer插件的弹出层之询问框，
	 * layer http://layer.layui.com/mobile/
	 * param{String}    content   提醒的文本内容
	 */
	confirm(content, yesfn, nofn){
		if(!content) return false;
		console.log(layer);
		layer.open({
		    content: content,
		    btn: ['确认', '取消'],
		    shadeClose: false,
		    yes: function(){
		    	yesfn();
		    }, no: function(){
		    	nofn && nofn();
		    }
		});
	},

	fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                callback && callback(data.data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
	},

	/**
	 * ajax get方法二次封装，方便作统一异常处理；
	 * @param: {String}   type      请求类型,get/post
	 *         {String}   url     请求URL
	 *         {Object}   data     发送数据
	 *         {function} callback 回调函数
	 * @author: fengri
	 * @create: 2015年9月8日18:05:29
	 */
	ajaxData(type, url, data, callback) {
    var e=this;
	  if(!type || !url || !callback) return;

	  if(typeof callback !== 'function') return;

	  $.ajax({
	    type: type,
	    url: url,
	    data: data || {},
	    dataType: 'json',
	    success: function(json){
	      if (!json){
	        return false;
	      }
	      if (json.ret != 0){
	        if(json.ret == 100001) {
            if(e.getPlatform() == 'wechat'){
               location.href = (location.protocol + '//' + location.hostname + '/mobile-user-main/login?return_uri=' + location.href);
	        	}else{
               GlobleToNative.sendToGoLogin();
            }

	        }else{
	          QqwUtil.msg(json.msg);
	        }
	        return false;
	      }

	      callback(json.data);

	    },
	    error: function() {
	      QqwUtil.msg('数据获取失败，请刷新页面重试!');
	    }
	  });
	},
		/**
	 * ajax get方法二次封装，方便作统一异常处理；
	 * @param: {String}   type      请求类型,get/post
	 *         {String}   url     请求URL
	 *         {Object}   data     发送数据
	 *         {function} callback 回调函数
	 * @author: fengri
	 * @create: 2015年9月8日18:05:29
	 */
	ajaxOriginalData(type, url, data, callback) {
	  if(!type || !url || !callback) return;

	  if(typeof callback !== 'function') return;

	  $.ajax({
	    type: type,
	    url: url,
	    data: data || {},
	    dataType: 'json',
	    success: function(json){
	      if (!json){
	        return false;
	      }
	      callback(json);
	    },
	    error: function() {
	      QqwUtil.msg('数据获取失败，请刷新页面重试!');
	    }
	  });
	},
    /**
	 * ajax get方法二次封装，方便作统一异常处理；
	 * @param: {String}   type      请求类型,get/post
	 *         {String}   url     请求URL
	 *         {Object}   data     发送数据
	 *         {function} successCallback 请求成功回调函数
	 *         {function} failCallback 请求失败回调函数
	 * @author: lambert
	 * @create: 2017年4月19日09:50:29
	 */
	ajaxBothOriginalData(type, url, data, successCallback,failCallback) {
	  if(!type || !url || !callback) return;
	  if(typeof callback !== 'function') return;
	  $.ajax({
	    type: type,
	    url: url,
	    data: data || {},
	    dataType: 'json',
	    success: function(json){
	      if (!json){
	        return false;
	      }
	      successCallback(json);
	    },
	    error: function(json) {
	      failCallback(json);
	    }
	  });
	},
  /**
 * 通用jquery图片懒加载方法；注：<img> 标签要内置data-src属性预存网络图片地址  添加'.img-lazy-upload' class名
 * @author: benjianLin
 * @param: {int}   scrollTop     滚动条滚动的距离
 *         {int}   distance      预加载提前量
 * @create: 2017年3月06日11:56:09
 */
	LazyUpLoadImg(scrollTop,distance){
        var winH = $(window).height();
        $('.img-lazy-upload').each(function(index, evevt){//遍历每一个元素
            let $cur = $(evevt);
            let top = $cur.offset().top;
            let url=$cur.data('src');
            if(url==''){return;}//判断是否已加载
            if(top < scrollTop + winH+distance){
               $cur.attr('src',url);
               $cur.data('src')=='';
               $cur.removeClass('img-lazy-upload');
            }
        });
	},

/**
 * 改变头部的状态；depend on jquery
 * @param scrollTop  滑动距离顶部的距离
 * @param elements   传入定点元素的className
 * @param scopeHeight 对元素的监控范围  建议：300
 * @param forwardIstance   监控的提前量 建议：400
 * return Lastindex  触发的索引 返回-1  无效指令或者是第一个分类之前的指令
 */
  triggerHeadState(scrollTop,elements,scopeHeight,forwardIstance){
       if(typeof(elements)=='string'){
       	  elements='.'+elements;
          elements=$(elements);
	        }else{
	        	return;
	        }
	       let Lastindex=-1;
           elements.each((index,event)=>{
           let top = $(event).offset().top-forwardIstance;
           if(scrollTop >= top && scrollTop <= scopeHeight + top){
             Lastindex=index;
           }
           else if( scrollTop <= top &&   top <= scopeHeight + scrollTop ){
              Lastindex=index-1;
           }
       	});
           return Lastindex;
     },
    getPlatform(){
    	  var ua = window.navigator.userAgent.toLowerCase();
         if(ua.match(/MicroMessenger/i) == 'micromessenger'){
           return 'wechat';
         }
    	 var isAndroid = navigator.userAgent.toLowerCase().match(/Android/i)=="android";
         var isIphon = navigator.userAgent.toLowerCase().match(/iPhone/i)=="iphone"||navigator.userAgent.toLowerCase().match(/Ipad/i)=="ipad";
    	if (isAndroid ){
            return 'android';
        }else if(isIphon){
            return 'ios';
        }

    },
    getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }


};
/**
 * 通用表单验证方法集；
 * @author: fengri
 * @create: 2015年10月15日12:02:09
 */
const valiatorReg = {
  // 空
  isEmpty: function(str) {
      return new RegExp("^[\\s+]*$").test(str);
  },

  // 数字
  isNum: function(str) {
      return new RegExp("^([+-]?)\\d*\\.?\\d+$").test(str);
  },

  // 中文
  isChinese: function(str) {
      return new RegExp("^[\\u4e00-\\u9fa5]+$").test(str);
  },

  // 是否为日期
  isDate: function(str) {
      return new RegExp("^\\d{4}(\\-|\\/|.)\\d{1,2}\\1\\d{1,2}$").test(str);
  },

  // Email
  isEmail: function(str) {
      return new RegExp("^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$").test(str);
  },

  // 字母
  isLetter: function(str) {
      return new RegExp("^[A-Za-z]+$").test(str);
  },

  // 手机号
  isPhone: function(str) {
      return new RegExp("^0?(13|15|18|14|17|19)[0-9]{9}$").test(str);
  },

  // URL
  isUrl: function(str) {
      return new RegExp("^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$").test(str);
  },

  // 用户名（数字+中文+字母组合）
  isUserName: function(str) {
      return new RegExp("^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$").test(str);
  },

  // 身份证，参考：http://www.cnblogs.com/lzrabbit/archive/2011/10/23/2221643.html
  isIDCard: function(str){
      return new RegExp("^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[12])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|X)$", "i").test(str);
  }
};


/**
 * 通用表单验证方法集；
 * @author: lambert
 * @create: 2017.4.15
 */
const GlobleToNative = {
  // 空
  isAndroid : navigator.userAgent.toLowerCase().match(/Android/i)=="android",
  isIphon:navigator.userAgent.toLowerCase().match(/iPhone/i)=="iphone"||navigator.userAgent.toLowerCase().match(/Ipad/i)=="ipad",
  toPay: function(card_id,paytype) {
          if (this.isAndroid){
            window.JSInterface.toPay(card_id,paytype)
          }else if(this.isIphon){
            toPay(card_id,paytype);
        }
  },
  sendToSupport:function(goods_id,goods_number,sku_id){
        if (this.isAndroid ){
            window.JSInterface.toSupport(goods_id,goods_number,sku_id);
        }else if(this.isIphon){
            toSupport(goods_id,goods_number,sku_id)
        }

    },
  sendBack:function(){
        if (this.isAndroid){
            window.JSInterface.back();
        }else if(this.isIphon){
            back();
        }

    },
  sendShare:function(shareId,type){
        if (this.isAndroid){
            window.JSInterface.share(shareId,type);
        }else if(this.isIphon){
            share(shareId,type);
        }

    },
  sendToShopCart:function(){
        if (this.isAndroid){
            window.JSInterface.toShopCart();
        }else if(this.isIphon){
            toShopCart();
        }
    },

  sendToCategory:function(){
        if (this.isAndroid){
            window.JSInterface.toCategory ();
        }else if(this.isIphon){
            toCategory();
        }
    },
  sendToQuickPay:function(goods_id,count,sku_id){
        if (this.isAndroid){
            window.JSInterface.toQuickPay(goods_id,count,sku_id);
        }else if(this.isIphon){
            toQuickPay(goods_id,count,sku_id)
        }
       ;
    },
  sendToGoLogin:function(){
        if (this.isAndroid){
            window.JSInterface.login();
        }else if(this.isIphon){
            login();
        }
    },
  sendToArtSpecial:function(){
        if (this.isAndroid){
            window.JSInterface.toArtSpecial();
        }else if(this.isIphon){
            toArtSpecial();
        }
    },
  sendToDoyen:function(){
        if (this.isAndroid){
            if (arguments.length === 2) {
                window.JSInterface.toDoyen(arguments[0], arguments[1]);
                return ;
            }
            window.JSInterface.toDoyen();
        }else if(this.isIphon){
            if (arguments.length === 2) {
                toDoyen(arguments[0], arguments[1]);
                return ;
            }
            toDoyen();
        }
    },
  sendRedirectTo:function(url){
        if (this.isAndroid){
            window.JSInterface.redirectTo(url)
        }else if(this.isIphon){
            redirectTo(url)
        }
    },
  sendAddPullToRefersh:function(){
        if (this.isAndroid){
            window.JSInterface.addPullToRefersh();
        }else if(this.isIphon){
            addPullToRefersh();
        }
    },
  sendEvent:function(eventId){
        if (this.isAndroid){
            window.JSInterface.event(eventId);
        }else if(this.isIphon){
            event(eventId);
        }
    },
  sendSelectedTag:function(str){
        if (this.isAndroid){
            window.JSInterface.selectedTag(str);
        }else if(this.isIphon){
            selectedTag(str);
        }
    },
sendToPrivateMsg:function(uid,name){
        if (this.isAndroid){
            window.JSInterface.sendPrivateMsg(uid,name);
        }else if(this.isIphon){
            sendPrivateMsg(uid,name);
        }
    },
sendToShow:function(tid){
        if (this.isAndroid){
            console.log('this.isAndroid tid+:'+tid);
            window.JSInterface.toShow(tid);
        }else if(this.isIphon){
            toShow(tid);
        }
    },
sendToSay:function(cid){
        if (this.isAndroid){
            console.log('isAndroid tid+:'+cid);
            window.JSInterface.toSay(cid);
        }else if(this.isIphon){
            toSay(cid);
        }
    },
sendTobookshare:function(cid,url,imgurl,sharename){
        if (this.isAndroid){
            console.log('传'+cid,url+'到安卓')
            window.JSInterface.sharexpell(cid,url,imgurl,sharename);
        }else if(this.isIphon){
            console.log('传'+cid,url+'苹果')
            sharexpell(cid,url,imgurl,sharename);
        }
    }
}

export { QqwUtil, Loading,valiatorReg,GlobleToNative};


