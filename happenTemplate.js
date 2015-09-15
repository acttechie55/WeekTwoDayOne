var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
			 //UTC Timestamp to the second//
		UnixTimestamp: function(){
			var utcDate = new Date(Date.UTC('','','','','',''));
				  return Math.ceil(utcDate.getTime()/1000)
		},
		//UTC Millisecond//
		UnixMillisecond: function(){
			var thisMoment = new Date().getUTCMilliseconds();
			return String(thisMoment);
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
				  var myDate = new Date().getTime();
				  return String(myDate);
			  },
	   	    WithOutSeconds: function() {}
		  }
		})(),
		MDY: (function(){
	  	  return {
			//returns month/day/year as 9/15/2015
		    Numeral: function(){
				var month = new Date().getMonth()+1;
				var day = new Date().getDate(); 
				var year    = new Date().getFullYear();
				return month+'/'+day+'/'+year;
				
			},
			//returns month/day/year as "September 15, 2015"//
			Name: function(){
				var FullMonthName = ["January", "February", "March", "April", "May", "June",
  				"July", "August", "September", "October", "November", "December"];	
				var LongMonthName = new Date().getMonth();
				var year    = new Date().getFullYear();
				var day     = new Date().getDate(); 
				var comma   = ','
			 	return FullMonthName[LongMonthName]+' '+day+comma+' '+year;
				
			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			//returns second in a timestamp//
			Second: function(){
				var second = new Date().getSeconds();
				return String(second);
			},
			//returns a double digit second in a timestamp//
			DblDigit: function(){
				var SecTwo = new Date().getSeconds();
				return SecTwo < 10 ? '0' + SecTwo : '' + SecTwo;	
			}
		}
	})(),
	Minute: (function(){
		return{
			//returns the minutes of a time stamp//
			Minute: function(){
				var minutes = new Date().getMinutes();
				return String(minutes);
			},
			//returns the double digit time stamp//
			DblDigit: function(){
				var MinuteTwo = new Date().getMinutes();
				return MinuteTwo < 10 ? '0' + MinuteTwo : '' + MinuteTwo;
			}
		}
	})(),
	Hour: (function(){
		return {
			//24 hours format: 13:00//
			TwentyFourHour: function() {
				var hours = new Date().getHours();
				return String(hours);
			},
			//Twelve Hour: 2:00pm, 9:00pm format//
			TwelveHour: function() {	
				//HAVE NO IDEA AS TO WHY THIS IS WORKING!!//			
   				var hour   = new Date().getHours();
   				if (hour   > 11) 
  			    if (hour   > 12) { hour = hour - 12;}
   				if (hour   == 0) { hour = 12;}
   				if (hour   < 10) { hour = hour;}
   				return String(hour);
			},
			AMPM: (function() {
				return {
					//Uppercase AM and PM/
					UpperCase: function(){
						var hours = new Date().getHours();
						if (hours > 12){
							return 'PM';
						} else {
							return 'AM';
						}
					},
					//Lowercase am and pm/
					LowerCase: function(){
						var hours = new Date().getHours();
						if (hours > 12){
							return 'pm';
						} else {
							return 'am';
						}
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			//Full Name of the Week: Monday, Tuesday, Wednesday//
			DayOfWeek: function(){
			var FullWeekName = ["Sunday", "Monday", "Tuesday", "Wednesday",
			"Thursday", "Friday", "Saturday"];	
			var LongWeekName = new Date().getDay();
			return FullWeekName[LongWeekName]; 
			},
			//Abbr Name of the Week: Mon, Tue, Wed//
			AbrDayOfWeek: function(){
			var AbrWeekName = ["Sun", "Mon", "Tue", "Wed",
			"Thur", "Fri", "Sat"];	
			var ShortWeekName = new Date().getDay();
			return AbrWeekName[ShortWeekName]; 	
			},
			FirstTwoOfWeek: function(){
			var TwoWeekName = ["Su", "Mo", "Tu", "We",
			"Th", "Fr", "Sa"];	
			var VeryShortWeekName = new Date().getDay();
			return TwoWeekName[VeryShortWeekName]; 
			},
			//Week of the year: eg: 38 is this week of the year/
			WeekOfYear: function(){
						var now = new Date();
						var start = new Date(now.getFullYear(), 0, 1); // 0,0 means 0 month and 0 day? It is the absolute base point of the year//
						var diff = now - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var oneWeek = oneDay * 7;
						var thisWeek = Math.ceil(diff / oneWeek)+1;
						return String(thisWeek);
			}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					//Numeral of the Date of the Month//
					Numeral: function(){
						var currentDayNumeral = new Date().getDate();
						return String(currentDayNumeral);
					},
					//Ordinal of the Date of the Month//
					Ordinal: function(){
						var currentDayOrdinal = new Date().getDate();
						if (currentDayOrdinal>3 && currentDayOrdinal<21) return currentDayOrdinal+'th';
						switch(currentDayOrdinal%10){
							case 1: return currentDayOrdinal+'st';
							case 2: return currentDayOrdinal+'nd';
							case 3: return currentDayOrdinal+'rd';
							default: return currentDayOrdinal+'th';
						}
					},
					//Double Digits for the Day of the Month//
					DateDblDigit: function(){
						var DateTwo = new Date().getDate();
						return DateTwo < 10 ? '0' + DateTwo : '' + DateTwo;
					}
				}
			})(),
			//Month Number//
			MonthNumber: function(){
			var MonthNum = new Date().getMonth() + 1;
			return String(MonthNum);
			},
			//Double Digits for Month Number//
			MonthNumberDblDigit: function(){
				var monthxtwo = new Date().getMonth() + 1;
				return monthxtwo < 10 ? '0' + monthxtwo : '' + monthxtwo;
			},	
			//Abbreviation for Month Number//
			AbrOfCurrentMonth: function(){
			var AbrMonthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  			"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];	
			var ShortMonth = new Date().getMonth();
			return AbrMonthNames[ShortMonth];
			},
			//Full Name for Month//
			CurrentMonth: function(){
			var FullMonthName = ["January", "February", "March", "April", "May", "June",
  			"July", "August", "September", "October", "November", "December"];	
			var LongMonthName = new Date().getMonth();
			return FullMonthName[LongMonthName]; 
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					//Day of the year: Eg - today is the 257 day of this year.//
					Numeral: function(){
						var now = new Date();
						var start = new Date(now.getFullYear(), 0, 0); // 0,0 means 0 month and 0 day. It is the absolute base point of the year//
						var diff = now - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay);
						return String(day);
					},
					//Day of the year: eg - 257th day of the year//
					Ordinal: function(){
						var now = new Date();
						var start = new Date(now.getFullYear(), 0, 0);
						var diff = now - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay);
						var DOYOrdinal = new Date().getDate();
						if (DOYOrdinal>3 && DOYOrdinal<21) return DOYOrdinal+'th';
						switch(DOYOrdinal%10){
							case 1: return DOYOrdinal+'st';
							case 2: return DOYOrdinal+'nd';
							case 3: return DOYOrdinal+'rd';
							default: return DOYOrdinal+'th';
						}
					}
				}
			})(),
			YearFull: function(){
				//Year = 2014, 2015, 1997, etc//
				var currentYear = new Date().getFullYear();
				return String(currentYear)
			},
			YearAbr: function(){
				//Year = 15, 14, 13//
				var shortYear = new Date().getYear();
				return String(shortYear-100);
			}
		}
	})(),
	// return the date & time in the following format: year-month-dayThour:minute:second//
	Defaults: function(){
		var now     = new Date(); 
   		var year    = now.getFullYear();
    	var month   = now.getMonth()+1; 
    	var day     = now.getDate();
    	var hour    = now.getHours();
    	var minute  = now.getMinutes();
    	var second  = now.getSeconds(); 
		var why     = 'T';
	
			if(month.toString().length == 1) {
				var month = '0'+month;
			}
			if(day.toString().length == 1) {
				var day = '0'+day;
			}   
			if(hour.toString().length == 1) {
				var hour = '0'+hour;
			}
			if(minute.toString().length == 1) {
				var minute = '0'+minute;
			}
			if(second.toString().length == 1) {
				var second = '0'+second;
			}   
			var dateTime = year+'-'+month+'-'+day+why+hour+':'+minute+':'+second;   
			return dateTime;
	}
  }
})();