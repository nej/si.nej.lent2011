
function DateLent() {
	
	//*** 'me' acts as an alias that can be used within the methods
	var me = this;
	
	//*** Public properties:
	this.someValue;
	this.someOtherValue;
	
	DateLent.prototype.outputDate = function(given_date) {
		year = given_date.getFullYear().toString();
		month = (given_date.getMonth()+1).toString();
		day = given_date.getDate().toString();
		
		if (month.length < 2)
			month = '0'+month;
		if (day.length == 1)
			day = '0'+day;
		
		return year+month+day;
	}
	
	DateLent.prototype.outputNiceDate = function(given_date) {
		year = given_date.getFullYear().toString();
		month = (given_date.getMonth()+1).toString();
		day = given_date.getDate().toString();
		
		if (month.length < 2)
			month = '0'+month;
		if (day.length == 1)
			day = '0'+day;
		
		return day+'.'+month+'. ' + Ti.App.days[given_date.getDay()];
	}
	
	DateLent.prototype.outputShortDate = function(given_date) {
		year = given_date.getFullYear().toString();
		month = (given_date.getMonth()+1).toString();
		day = given_date.getDate().toString();
		
		if (month.length < 2)
			month = '0'+month;
		if (day.length == 1)
			day = '0'+day;
		
		return day+'.'+month+'.';
	}
	
	DateLent.prototype.date2object = function(given_date) {
		MD_Y = given_date.substring(0,4);
		MD_M = given_date.substring(4,6);
		MD_M=MD_M-1;	// Jan-Dec=00-11
		MD_D = given_date.substring(6,8);
		MD_hour=0;
		MD_minutes=0;
		MD_seconds=0;
		return new Date(MD_Y, MD_M, MD_D, MD_hour, MD_minutes, MD_seconds);
	}
	
	DateLent.prototype.datetime2object = function(given_date) {
		MD_Y = given_date.substring(0,4);
		MD_M = given_date.substring(4,6);
		MD_M=MD_M-1;	// Jan-Dec=00-11
		MD_D = given_date.substring(6,8);
		MD_hour = given_date.substring(9,11);;
		MD_minutes = given_date.substring(13,15);;;
		MD_seconds=0;
		return new Date(MD_Y, MD_M, MD_D, MD_hour, MD_minutes, MD_seconds);
	}
	
	DateLent.prototype.secondsToHm = function(d) {
		
		var tm=new Date(d*1000) 
		var hours=tm.getUTCHours();
		var minutes=tm.getUTCMinutes();
		
		if ( hours < 10 )
			hours = ' ' + hours;
		if ( minutes < 10 )
			minutes = '0' + minutes;
		
		return hours+':'+minutes;
	}

}

function Stages() {
	
	//*** Public methods:
    Stages.prototype.getStageTitle = function(uid) {
	    for (var i = 0; i < Ti.App.stages.length; i++) {
			if ( Ti.App.stages[i].uid == uid )
				return Ti.App.stages[i].name;
		}
		return -1;
	};
	
	Stages.prototype.getStageLocation = function(uid) {
		var location_data;
		for (var i = 0; i < Ti.App.stages.length; i++) {
			if ( Ti.App.stages[i].uid == uid ) {
				location_data = [{"longitude":Ti.App.stages[i].longitude,"latitude":Ti.App.stages[i].latitude}];
				return location_data;
			}
		}
		return null;
	};
 	
}

function Categories() {
	
	//*** Public methods:
    Categories.prototype.getCategoryTitle = function(uid) {
    	for (var i = 0; i < Ti.App.categories.length; i++) {
			if ( Ti.App.categories[i].uid == uid )
				return Ti.App.categories[i].title;
		}
		return '';
	};
 	
}

