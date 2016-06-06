
'use strict';

var testiap = (function() {

  return {

    onload: function () {

	var logResults = function( results ) {
		var str = 'Result: ' + JSON.stringify(results);
		console.log(str);
		$('<p>' + str + '</p>').appendTo('#log');
	};

	$(document).on("click","#getskus", function() {
		var str = "getting skus";
		console.log(str);
		$('<p>' + str + '</p>').appendTo('#log');
		google.payments.inapp.getSkuDetails({
  				'parameters': {'env': 'prod'},
  				'success': logResults,
  				'failure': logResults
				});
	});

	$(document).on("click","#buysku1", function() {
		var str = "buying sku1";
		console.log(str);
		$('<p>' + str + '</p>').appendTo('#log');
		google.payments.inapp.buy({
  				'parameters': {'env': 'prod'},
				'sku': 'sku1',
  				'success': logResults,
  				'failure': logResults
				});
	});

	$(document).on("click","#getpurchases", function() {
		var str = "getting purchased skus";
		console.log(str);
		$('<p>' + str + '</p>').appendTo('#log');
		google.payments.inapp.getPurchases({
  				'parameters': {'env': 'prod'},
  				'success': logResults,
  				'failure': logResults
				});
	});

	$(document).on("click","#consumesku1", function() {
		var str = "consuming sku1";
		console.log(str);
		$('<p>' + str + '</p>').appendTo('#log');
		google.payments.inapp.consumePurchase({
  				'parameters': {'env': 'prod'},
				'sku': 'sku1',
  				'success': logResults,
  				'failure': logResults
				});
	});

   }
  }

})();

window.onload = testiap.onload;
