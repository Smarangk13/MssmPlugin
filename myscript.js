function getCurrentTabUrl(callback) {
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });
}

function tabOpener(url, callback) {
  var reader = new String(url);
  var pos = reader.indexOf("q=")+2;
  reader = reader.substring(pos);
  chrome.tabs.create({"url":"http://allrecipes.com/"+"/search/results/?wt=" + reader + "&sort=re"});
  //chrome.tabs.create({"url":"http://google.com/"});
  callback(1)
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl(function(url) {
    renderStatus('will open tab ' + url);
    tabOpener(url, function() {
        renderStatus('Here you go ');
    });
  });
});
