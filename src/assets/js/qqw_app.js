import { QqwUtil } from './qqw_ultilities';
import { EventUtil } from './qqw_eventutil.js';
import { PullDownPush } from './qqw_pulldownpush.js';



/**
 * 页面主控制器类
 * 使用类似设计模式： Builder（建造者）
 */
class QqwApp {
	constructor(actiInstance) {
		this.actiInstance = actiInstance;
		this.needScrollListener = false;
		this.isfetchNextNow = true;
		this.fetchMethod = 'get';
		this.fetchApi = '';
		this.fetchCallback = null;
		this.stateParamCallback = null;
		this.fetchNextMethod = [];
		this.fetchNextApi = [];
		this.fetchNextCallback = [];
		this.stateParamNextCallback = [];
		this.scrollListener = null;
		this.initCallback = null;
		this.initBeforeFetchCallback = null;
		this.initAfterFetchCallback = null;
		this.initAfterFetchCallback = null;
	}

// 		.useScrollListener()				// 下拉加载滚动监听
//		.init(cb)						    // 初始化，绑定click事件，渲染静态模板等
// 		.useStateParam(cb)					// 使用网络接口的参数
// 		.fetch(api, cb, method)			    // 获取接口数据
// 		.initBeforeFirstFetch(cb)		    // 获取接口数据后第一次要执行的初始化
// 		.start(cb);						    // 开始
// 		.innitPullDownRefresh(enable);		//启动下拉刷新							// 开始

	useScrollListener(cb) {
		this.needScrollListener = true;
		this.scrollListener = cb;
		return this;
	}

	domReady(cb) {
		this.initCallback = cb;
		return this;
	}

	useStateParam(cb) {
		this.stateParamCallback = cb || null;
		return this;
	}

	fetch(api, cb, method) {
		this.fetchMethod = method || 'get';
		this.fetchApi = api;
		this.fetchCallback = cb;
		return this;
	}

	useStateParamNext(cb) {
		this.stateParamNextCallback = cb || null;
		return this;
	}

	fetchNext(api, cb, method) {
		this.fetchNextMethod.push(method || 'get');
		this.fetchNextApi.push(api);
		this.fetchNextCallback.push(cb);
		return this;
	}

	initBeforeFirstFetch(cb) {
		this.initBeforeFetchCallback = cb;
		return this;
	}

	initAfterFirstFetch(cb) {
		this.initAfterFetchCallback = cb;
		return this;
	}
	start(cb) {
		let self = this;
		/**
		 * 流程
		 *  1. 先发网络请求（6. 渲染 dom）
		 *  2. 完成 dom 加载
		 *  3. 初始化，绑定 click 事件等
		 *  4. 判断是否需要滚动监听事件，是否有回调等
		 *  - 注意 2~4 不可执行需要长时间计算的操作
		 *
		 * Author: Kevin(212499714@qq.com)
		 */
		QqwUtil.main(function*(){
			self.doAjaxFetch();
			yield EventUtil.domReady();
  		console.log('白屏时间 = ' + (new Date().getTime() - window.startTime));
  		self.initCallback();
  		self.needScrollListener && self.scrollListener.ob();
  		cb && cb();
  		if (self.fetchNextMethod.length) {
  			self.doAjaxFetchNext();
  		}
		});
	}

	// ========================================================================
	// private
	// ========================================================================

	doAjaxFetch() {
		let self = this;
		QqwUtil.ajaxData(this.fetchMethod, this.fetchApi, this.stateParamCallback ? this.stateParamCallback() : null, (data) => {
			let startGetQqwOpDataTime = new Date().getTime();		// for 性能检测
			if (self.initBeforeFetchCallback) {
				self.initBeforeFetchCallback(data);
				self.initBeforeFetchCallback = null;
			}
			self.fetchCallback(data);
			if (self.initAfterFetchCallback) {
				self.initAfterFetchCallback(data);
				self.initAfterFetchCallback = null;
			}
			console.log('加载HTML到渲染后台数据花费毫秒数 = ' + (new Date().getTime() - window.startTime) +

			', 其中渲染后台数据花费 = ' + (new Date().getTime() - startGetQqwOpDataTime));

            let element=document.getElementsByClassName('pushDown');
            let i;
		    for (i = 0; i < element.length; i++) {
			   element[i].style.display='none' ;
				}

		});
	}
	doAjaxFetchNext() {
		let self = this;
		for (let idx = 0, size = this.fetchNextMethod.length; idx < size; ++idx) {
			QqwUtil.ajaxData(this.fetchNextMethod[idx], this.fetchNextApi[idx], this.stateParamNextCallback[idx] ? this.stateParamNextCallback[idx]() : null, (data) => {
				self.fetchNextCallback[idx](data);
			});
		}
	}


}

export default  QqwApp;
