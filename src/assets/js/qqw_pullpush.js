
class PullPush {

	constructor(distance, callback,callbackScrollTop) {
		this.isHandling = false;
		this.distance = distance;
		this.callback = callback;
		this.i = 0;
		this.callbackScrollTop = callbackScrollTop;
		this.handler = null;
	}

	setHandling(isHandling) {
		this.isHandling = isHandling;
	}

	ob() {
		let self = this;
		// this.handler = (event) => {
		// 	// console.log(self.getScrollTop() + ', height = ' + self.getClientScrollHeight() + ', availble = ' + window.screen.availHeight);
		// 	// console.log('dis = ' + (self.getClientScrollHeight() - 2*window.screen.availHeight - self.getScrollTop()));

		// };

		// document.addEventListener("scroll", this.handler, false);
	   $(document).scroll(function() {
	   // 			console.log('self.getClientScrollHeight():'+self.getClientScrollHeight());
				// console.log('2*window.screen.availHeight'+(2*window.screen.availHeight));
				// console.log('self.getScrollTop():'+self.getScrollTop());
   			if ((self.getClientScrollHeight() -2*window.screen.availHeight - self.getScrollTop()) < self.distance) {
				if (!self.isHandling) {
					console.log('sdjfvsidfvuj ')
					self.callback();
				}
			} 
		   if(self.callbackScrollTop){
		       self.callbackScrollTop(self.getScrollTop());
			}
       }); 
       }


	cancelOb() {
		document.removeEventListener("scroll", this.handler, false);
	}

	getScrollTop() {
		let scrollTop = 0;
		scrollTop = (document.body.scrollTop>document.documentElement.scrollTop) ? document.body.scrollTop:document.documentElement.scrollTop;
		return scrollTop;
	}

	getClientScrollHeight(){
		let scrollHeight  = 0;
		if (document.body.scrollHeight && document.documentElement.scrollHeight ) {
			scrollHeight  = (document.body.scrollHeight <document.documentElement.scrollHeight )?document.body.scrollHeight :document.documentElement.scrollHeight ;
		} else {
			scrollHeight  = (document.body.scrollHeight >document.documentElement.scrollHeight )?document.body.scrollHeight :document.documentElement.scrollHeight ;
		}
		return scrollHeight ;
	}

	// getClientHeight(){
	// 	let clientHeight = 0;
	// 	if (document.body.clientHeight&&document.documentElement.clientHeight) {
	// 		clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
	// 	} else {
	// 		clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
	// 	}
	// 	return clientHeight;
	// }

}

export { PullPush };