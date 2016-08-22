	var progressBar = document.querySelector('#progressbar'),
				max = progressBar.getAttribute('max'),
				time = (1000/max)*20,progressValue=document.querySelector(".progressValue"),value = progressBar.value;
		    var loading = function() {
		        value += 1;
		        addValue = progressBar.setAttribute("value",value);
		        
		       progressValue.innerHTML=value + '%';

			        if (value == max) {
			            clearInterval(animate);			           
			        }
		    };
		    var animate = setInterval(function() {
		        loading();
		    }, time);