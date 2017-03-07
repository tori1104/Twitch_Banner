/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${followLink}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.twitch.tv/katexy", "_blank");
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'twitchLink'
   (function(symbolName) {   
   
   })("twitchLink");
   //Edge symbol end:'twitchLink'

   //=========================================================
   
   //Edge symbol: 'followLink'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${twitchLink}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.twitch.tv/katexy", "_blank");
         

      });
      //Edge binding end

   })("followLink");
   //Edge symbol end:'followLink'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-50165037");