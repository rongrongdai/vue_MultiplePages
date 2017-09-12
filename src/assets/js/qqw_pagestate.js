import { PullPush } from './qqw_pullpush.js';
import { PullDownPush } from './qqw_pulldownpush.js';

/**
 * 页面状态类 - 滚动加载更多
 */
class QqwPagestate {
	constructor(actiInstance,initGetDataCallback,context) {
		this.initGetDataCallback=initGetDataCallback;
		this.actiInstance = actiInstance;
		this.scrollHandler = null;
		this.pullDownHandler=null;
		this.preTriggerCb = null;
		this.updateCb = null;
		this.context = context;
		this.stateStore = {
			p: 0,
			lastP: 1,
			ps: 48,			// 抓取48条
			each: 4,		// 每次渲染加载12条
			totalItemCount: 0,
			itemIdx: 0,		// 已加载条数，当数据只剩下12条未渲染时，预先抓取
			itemArr: [],		// 缓存已加载的数据
			items: [],		// 要渲染的数据
			scrollSignDistance: 80,
			noMoreFlag: true,
			should_prefetch: false
		};
	}

	initPageState(){
		    this.stateStore = {
			p: 0,
			lastP: 1,
			ps: 48,			// 抓取48条
			each: 4,		// 每次渲染加载12条
			totalItemCount: 0,
			itemIdx: 0,		// 已加载条数，当数据只剩下12条未渲染时，预先抓取
			itemArr: [],		// 缓存已加载的数据
			items: [],		// 要渲染的数据
			scrollSignDistance: 80,
			noMoreFlag: true,
			should_prefetch: false
		};
	}
	set(k, newVal) {
		this.stateStore[k] = newVal;
		return this;
	}
	setHandling(isHandling) {
		this.scrollHandler.setHandling(isHandling);
	}
	get(k) {
		return this.stateStore[k];
	}
	addItemToCache(itemArr) {
		this.stateStore.itemArr = this.stateStore.itemArr.concat(itemArr);
	}
	updatePageState() {
		let itemEach = this.stateStore.each;
		let itemIdx = this.stateStore.itemIdx;
		let itemArr = this.stateStore.itemArr;
		let sizeOfCache = itemArr.length;
	  let endIdx = itemIdx + itemEach;
	  if (endIdx <= sizeOfCache) {
	  	this.stateStore.items = itemArr.slice(itemIdx, endIdx);
	    if ((endIdx + itemEach) >= sizeOfCache && this.stateStore.noMoreFlag) {
	    	this.stateStore.should_prefetch = true;
	    }
	  } else {
	    this.stateStore.should_prefetch = true;
	  	this.stateStore.items = itemArr.slice(itemIdx, sizeOfCache);
	  }
	}
	preTrigger(cb) {
		this.preTriggerCb = cb;
		return this;
	}
	updateCallback(cb) {
		this.updateCb = cb;
		return this;
	}
	getScrollHandler() {
		return this.scrollHandler;
	}
	build() {
		this.scrollHandler = new PullPush(this.stateStore.scrollSignDistance, () => {
						console.log('加载更多。。。。。。');
			if (!this.stateStore.noMoreFlag) {			// 没有更多数据了
				if (this.stateStore.itemIdx < (this.stateStore.totalItemCount - 1)) {
					this.updatePageState();
					this.updateCb && this.updateCb();
				} else {
					this.scrollHandler.cancelOb();
				}
				return ;
			}
			if (this.stateStore.lastP !== this.stateStore.p) {		// 分页索引相等则表示先前的网络请求没有返回或失败
				// 1. 检测是否到达预先抓取的条件
				if ((this.stateStore.itemIdx + this.stateStore.each) >= (this.stateStore.totalItemCount - 1)) {
					this.stateStore.lastP = this.stateStore.p;
					this.scrollHandler.setHandling(true);
					this.preTriggerCb && this.preTriggerCb();
				}
			}
			// 2. 加载更多
			this.updateCb && this.updateCb();

		});
	    this.pullDownHandler=new PullDownPush(50,() => {
             	this.stateStore.lastP=1;
             	console.log('this.stateStore.lastP:'+this.stateStore.lastP);
             	this.initPageState();
             	this.initGetDataCallback();
             	},this.context);
	    this.pullDownHandler.init();
	}

}

export default QqwPagestate;