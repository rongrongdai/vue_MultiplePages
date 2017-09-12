
class PullDownPush {
	constructor(distance, callback,context) {
		 this.distance = distance;
		 this.callback = callback;
         this.contentStartY='';
         this.startY='';
         this.track = false;
         this.refresh = false;
         if(context){
          this.content = context.getElementsByClassName('content')[0];  
         this.refreshing = context.getElementsByClassName('pushDown')[0];
         }
         else{
        this.content = document.getElementById('content');  
         this.refreshing = document.getElementById('pushDown');
         }

	}
	setHandling(isHandling) {
		this.isHandling = isHandling;
	}
	init() {
		let self = this;
	    this.content.addEventListener('touchstart', function(e) {
        e.preventDefault();
        self.contentStartY = parseInt(self.content.style.top);
        console.log('self.content.style.top:'+self.content.style.top);
        self.startY = e.touches[0].screenY;
      });

      this.content.addEventListener('touchend', function(e) {
         	console.log('touchend....');
        if(self.refresh) {
          self.content.style['-webkit-transition-duration'] = '.5s';
          self.content.style.top = '0px';
          self.refresh = false;
          self.callback();
          console.log('callback...');
        } 

      });

      this.content.addEventListener('touchmove', function(e) {
        let move_to = self.contentStartY - (self.startY - e.changedTouches[0].screenY);
        // if(move_to > 0) {
        self.track = true; // start tracking if near the top 
        self.content.style.top = move_to + 'px';
        // }
        if(move_to > self.distance) {
          self.refresh = true;
          self.refreshing.style.display='block';
        } else {
          self.content.style['-webkit-transition'] = '';
          self.refresh = false;
        }
      });
	}

	resetPD() {
		    let self = this;
		    self.refreshing.style['-webkit-transition-duration'] ='.25s';
		    self.refreshing.style.display='none'
            self.content.style.top = '0';
            self.removeTransition()
	      }
        
	removeTransition() {
			let self = this;
            self.content.style['-webkit-transition-duration'] ='.25s';
            self.content.style['transition-duration'] ='.25s';
          }  

}
export { PullDownPush };