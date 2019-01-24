//fires when iFrame form is submitted in the iFrame

<script>
try
{
var postObject = JSON.stringify ({
event: 'gaEvent', // use as event listener
eventCategory:'form', //use as datalayer var
eventAction: 'submit', //use as datalayer var
eventLabel: 'name of form' //use as datalayer var
});
parent.postMessage (postObject, 'https://thedomainyouactuallywantitsendto')
}
catch (e)
{
window.console && window.console.log (e);
}
</script>

//and then grab the code with this (fires on all pages) through GTM:

<script type="text/javascript">
(function(window) {

    addEvent(window, 'message', function(message) {
      try{
      var data = JSON.parse(message.data);
      var dataLayer = window.dataLayer || (window.dataLayer = []);
      if (data.event) {
        dataLayer.push({
          'event': data.event,
          'eventCategory': data.eventCategory,
          'eventAction':data.eventAction,
          'eventLabel':data.eventAction
        });
      }
      }catch(e){}
    });

    // Cross-browser event listener
    function addEvent(el, evt, fn) {
      if (el.addEventListener) {
        el.addEventListener(evt, fn);
      } else if (el.attachEvent) {
        el.attachEvent('on' + evt, function(evt) {
          fn.call(el, evt);
        });
      } else if (typeof el['on' + evt] === 'undefined' || el['on' + evt] === null) {
        el['on' + evt] = function(evt) {
          fn.call(el, evt);
        };
      }
    }

  })(window);
</script>

//What happens is that you send a message from the iframe to the main domain, catch it with the script and from here push the values to the DataLayer which you can use for basically all Iframe forms =)
//All needed now is an event GA tag to pick it up.
