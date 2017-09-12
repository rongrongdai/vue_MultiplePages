/**
 * Created by gemini on 2017/3/15.
 */
var proving = function(){
	//验证特殊字符
	//返回false表示有特殊字符
	function checkStr(str){
		if(!!str.match(/^(([^\^\.<>%&',;=?$"':#@!~\]\[{}\\/`\|])*)$/)){ 
			return false; 
		} else{
			return true; 
		}
	}
	
	//验证金额
	//任意正整数，正小数（小数位不超过2位）
	function checkMoney(money){
		if(!!money.match(/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//手机号码验证
	function checkMobile(mobile){
		if(!!mobile.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//验证码验证(6位纯数字)
	function checkCode(code){
		if(!!code.match(/^[0-9]{0,6}$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//验证邮箱地址
	function checkemail(mail){
		if(!!mail.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//验证用户名(只包含大小写英文、数字和下划线,同时用户名长度在6-15之间)
	function checkusername(username){
	   if(!!username.match(/^(?!\d+$)[a-zA-Z0-9]{6,15}$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//验证真实姓名
	//只能是汉字且2-4位
	function checkName(name){
	   if(!!name.match( /^[\u4E00-\u9FA5]{2,4}$/)){ 
			return true; 
		} else{
			return false; 
		}
	}
	//验证身份证号码
	function checkCardNo(card){
	  	vcity={ 11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",  
            21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",  
            33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",  
            42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",  
            51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",  
            63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"  
        }; 
	    var card = document.getElementById('card_no').value;  
	    //是否为空  
	    if(card === '')  
	    {  
	        alert('请输入身份证号，身份证号不能为空');  
	        document.getElementById('card_no').focus;  
	        return false;  
	    }  
	    //校验长度，类型  
	    if(isCardNo(card) === false)  
	    {  
	        alert('您输入的身份证号码不正确，请重新输入');  
	        document.getElementById('card_no').focus;  
	        return false;  
	    }  
	    //检查省份  
	    if(checkProvince(card) === false)  
	    {  
	        alert('您输入的身份证号码不正确,请重新输入');  
	        document.getElementById('card_no').focus;  
	        return false;  
	    }  
	    //校验生日  
	    if(checkBirthday(card) === false)  
	    {  
	        alert('您输入的身份证号码生日不正确,请重新输入');  
	        document.getElementById('card_no').focus();  
	        return false;  
	    }  
	    //检验位的检测  
	    if(checkParity(card) === false)  
	    {  
	        alert('您的身份证校验位不正确,请重新输入');  
	        document.getElementById('card_no').focus();  
	        return false;  
	    }  
	    return true;  
		//检查号码是否符合规范，包括长度，类型  
		isCardNo = function(card)  
		{  
		    //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
		    var reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/;  
		    if(reg.test(card) === false)  
		    {  
		        return false;  
		    }  
		  
		    return true;  
		};  
		  
		//取身份证前两位,校验省份  
		checkProvince = function(card)  
		{  
		    var province = card.substr(0,2);  
		    if(vcity[province] == undefined)  
		    {  
		        return false;  
		    }  
		    return true;  
		};  
		  
		//检查生日是否正确  
		checkBirthday = function(card)  
		{  
		    var len = card.length;  
		    //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字  
		    if(len == '15')  
		    {  
		        var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;   
		        var arr_data = card.match(re_fifteen);  
		        var year = arr_data[2];  
		        var month = arr_data[3];  
		        var day = arr_data[4];  
		        var birthday = new Date('19'+year+'/'+month+'/'+day);  
		        return verifyBirthday('19'+year,month,day,birthday);  
		    }  
		    //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X  
		    if(len == '18')  
		    {  
		        var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;  
		        var arr_data = card.match(re_eighteen);  
		        var year = arr_data[2];  
		        var month = arr_data[3];  
		        var day = arr_data[4];  
		        var birthday = new Date(year+'/'+month+'/'+day);  
		        return verifyBirthday(year,month,day,birthday);  
		    }  
		    return false;  
		};  
		  
		//校验日期  
		verifyBirthday = function(year,month,day,birthday)  
		{  
		    var now = new Date();  
		    var now_year = now.getFullYear();  
		    //年月日是否合理  
		    if(birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day)  
		    {  
		        //判断年份的范围（3岁到100岁之间)  
		        var time = now_year - year;  
		        if(time >= 3 && time <= 100)  
		        {  
		            return true;  
		        }  
		        return false;  
		    }  
		    return false;  
		};  
		  
		//校验位的检测  
		checkParity = function(card)  
		{  
		    //15位转18位  
		    card = changeFivteenToEighteen(card);  
		    var len = card.length;  
		    if(len == '18')  
		    {  
		        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);   
		        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');   
		        var cardTemp = 0, i, valnum;   
		        for(i = 0; i < 17; i ++)   
		        {   
		            cardTemp += card.substr(i, 1) * arrInt[i];   
		        }   
		        valnum = arrCh[cardTemp % 11];   
		        if (valnum == card.substr(17, 1))   
		        {  
		            return true;  
		        }  
		        return false;  
		    }  
		    return false;  
		};  
		  
		//15位转18位身份证号  
		changeFivteenToEighteen = function(card)  
		{  
		    if(card.length == '15')  
		    {  
		        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);   
		        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');   
		        var cardTemp = 0, i;     
		        card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);  
		        for(i = 0; i < 17; i ++)   
		        {   
		            cardTemp += card.substr(i, 1) * arrInt[i];   
		        }   
		        card += arrCh[cardTemp % 11];   
		        return card;  
		    }  
		    return card;  
		};  
	}
	 
  	//银行卡号校验
    //Description:  银行卡号Luhm校验
    //Luhm校验规则：16位银行卡号（19位通用）:
    // 1.将未带校验位的 15（或18）位卡号从右依次编号 1 到 15（18），位于奇数位号上的数字乘以 2。
    // 2.将奇位乘积的个十位全部相加，再加上所有偶数位上的数字。
    // 3.将加法和加上校验位能被 10 整除。
    function checkLuhm(bankno){
		if (bankno.length < 16 || bankno.length > 19) {
			//$("#banknoInfo").html("银行卡号长度必须在16到19之间");
			return false;
		}
		var num = /^\d*$/;  //全数字
		if (!num.exec(bankno)) {
			//$("#banknoInfo").html("银行卡号必须全为数字");
			return false;
		}
		//开头6位
		var strBin="10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";    
		if (strBin.indexOf(bankno.substring(0, 2))== -1) {
			//$("#banknoInfo").html("银行卡号开头6位不符合规范");
			return false;
		}
        var lastNum=bankno.substr(bankno.length-1,1);//取出最后一位（与luhm进行比较）
    
        var first15Num=bankno.substr(0,bankno.length-1);//前15或18位
        var newArr=new Array();
        for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
            newArr.push(first15Num.substr(i,1));
        }
        var arrJiShu=new Array();  //奇数位*2的积 <9
        var arrJiShu2=new Array(); //奇数位*2的积 >9
        
        var arrOuShu=new Array();  //偶数位数组
        for(var j=0;j<newArr.length;j++){
            if((j+1)%2==1){//奇数位
                if(parseInt(newArr[j])*2<9)
                arrJiShu.push(parseInt(newArr[j])*2);
                else
                arrJiShu2.push(parseInt(newArr[j])*2);
            }
            else //偶数位
            arrOuShu.push(newArr[j]);
        }
        
        var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
        var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
        for(var h=0;h<arrJiShu2.length;h++){
            jishu_child1.push(parseInt(arrJiShu2[h])%10);
            jishu_child2.push(parseInt(arrJiShu2[h])/10);
        }        
        
        var sumJiShu=0; //奇数位*2 < 9 的数组之和
        var sumOuShu=0; //偶数位数组之和
        var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
        var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
        var sumTotal=0;
        for(var m=0;m<arrJiShu.length;m++){
            sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
        }
        
        for(var n=0;n<arrOuShu.length;n++){
            sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
        }
        
        for(var p=0;p<jishu_child1.length;p++){
            sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
            sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
        }      
        //计算总和
        sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);
        
        //计算Luhm值
        var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;        
        var luhm= 10-k;
        
        if(lastNum==luhm){
        $("#banknoInfo").html("Luhm验证通过");
        return true;
        }
        else{
        $("#banknoInfo").html("银行卡号必须符合Luhm校验");
        return false;
        }        
    }
	return {
		checkStr : checkStr,
		checkMoney : checkMoney,
		checkMobile : checkMobile,
		checkCode : checkCode,
		checkemail : checkemail,
		checkusername : checkusername,
		checkName : checkName,
		checkCardNo : checkCardNo,
		checkLuhm : checkLuhm
	}
}();
