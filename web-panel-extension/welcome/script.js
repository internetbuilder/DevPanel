function setTheme(data)
{
	if (typeof data.theme === 'undefined') {
		data.theme = 'light';
	}

	if (data.theme === 'dark')
		$('#theme-link').attr('href', 'dark.css');
	else
		$('#theme-link').attr('href', '');
}

function reloadTheme(message, sender, response)
{
	if (typeof message.msg !== 'undefined' && message.msg === 'reloadTheme')
		chrome.storage.local.get('theme', function(data) { setTheme(data) });
}

chrome.storage.local.get('theme', function(data) { setTheme(data) });
chrome.runtime.onMessage.addListener(function(message, sender, response) { reloadTheme(message, sender, response); });