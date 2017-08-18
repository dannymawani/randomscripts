<script>
//Define filetypes
var _files = /\.(zip|exe|pdf|doc.*|xls.*|ppt.*|mp(3|4)|eps|rar|air|csv|gz|dmg|xml|ashx|dwf|dwg|dxf|jpg|ibooks|wmv|avi)$/i;
var clickURL = {{Click URL}};
if (clickURL) {
if (clickURL.match(_files)) {
var file_type = (/[.]/.exec(clickURL)) ? _files.exec(clickURL)[0] : undefined;
var file_name = clickURL.substring(clickURL.lastIndexOf('/') + 1);
//If URL matches a filetype, strip anything of the URL except for the filetype and push it
standardTracker('download', file_type, file_name);
}

//Social
else if (clickURL.match(/^.*(facebook|twitter|youtube|linkedin|flickr)/i)) {
    var matches = clickURL.match(/^(.*)(twitter|facebook|youtube|flickr|linkedin)\.com.*/)[2];
  	social_link = matches
  
  standardTracker('social', social_link, {{Click URL}});

}

// Checks for mail
else if (clickURL.match(/^mailto\:/i)) {
var mailTo = clickURL.replace(/^mailto\:/i, '');

standardTracker('mail', mailTo, {{Page URL}});
}

//Phone links
else if (clickURL.match(/^tel\:/i)) {
var phoneLink = clickURL.replace(/^tel\:/i, '');

standardTracker('phone', phoneLink, {{Page URL}});
}


//Outbound link
else if ((clickURL.match(/^#?https?\:/i)) && (!clickURL.match(document.domain))) {
var outboundPage = (/^https?\:\/\/((\w|\.|-)*)/i).exec(clickURL)[1];
var outboundPath = (/^https?\:\/\/((\w|\.|-)*)(.*)?/i).exec(clickURL)[3];

standardTracker('outbound link', outboundPage, outboundPath);
}
}

// Send to DataLayer
function standardTracker(eventCategory, eventAction, eventLabel) {
dataLayer.push({
'event' : 'gaEvent',
'eventCategory' : eventCategory,
'eventAction' : eventAction,
'eventLabel' : eventLabel,
'eventValue' : undefined
});

</script>
