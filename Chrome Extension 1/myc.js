/**
 * @author Sarah
 *  
 */


                                         
                                        

var all = 'all';
var lik = 'like';
var reb = 'reblog';
var fol = 'follow';
var selector = 'all';

var notesReader = {
	/**
   * Tumblr URL for the user's dashboard
   *
   * @type {string}
   * @private
   */
	getTumblrDash_: 'http://www.tumblr.com/*',
	
	requestNotes: function() {
		var win = new location();
		location.href = 'http://www.tumblr.com/*';
    	
	}
};



document.addEventListener('DOMContentLoaded', function () {
  /* runs the script  when DOM loaded*/
});