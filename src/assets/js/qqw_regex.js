
const QqwReg = {
	/**
	 * 通用表单验证方法集；
	 * @author: fengri
	 * @create: 2015年10月15日12:02:09
	 */
	valiatorReg: {
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
	}
}

export { QqwReg };

