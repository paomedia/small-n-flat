var G1 = 0;
var SNF_VERSION = 0;
var SNF_REPO = 'paomedia/small-n-flat';

function init()
{
    $('.browser-title').affix(
	{
	    offset:
	    {
		top: $('#header-jumbo').outerHeight(true)
	    }
	});

    $('#filter').keyup(filterByName);

    //initLastRelease([{tag_name: 'v1.3'}]);
    gh.query('releases', initLastRelease);



    $('.browser-title button').click
    (function()
     {
	 $('.browser-title button').removeClass('active');
	 $(this).addClass('active');
	 $('#icons-container').attr('class', $(this).data('class'));
     });
}

function filterByName()
{
    var filter = $('#filter').val().toLowerCase();
    $('.icon').each
	(function()
	 {
	     if($(this).data('original-title').indexOf(filter) > -1)
		 $(this).show();
	     else
		 $(this).hide();
	 });
}


function initLastRelease(releases)
{
    var release = releases[0];
    SNF_VERSION = release.tag_name;

    $('#dl-button').attr('href', release.zipball_url);
    $('#dl-button').append(' ' + release.tag_name);
    /*
      release.tarball_url
      release.zipball_url
      */
    $.ajax({
	type: 'GET',
	dataType: 'jsonp',
	cache: true,
	jsonp: false,
	jsonpCallback: 'printIcons',
	url: 'https://cdn.rawgit.com/' + SNF_REPO + '/' + SNF_VERSION + '/concat.js'
    });
}

function printIcons(list)
{
    $('.browser-title h4').text(list.length + ' icons');

    

    for(var i in list)
    {
	var name = list[i].name;
	var src = 'data:image/svg+xml;base64,' + list[i].blob;
	var icon = $('<div class="icon icon-hidden" title="' + name + '"><table><tr><td><img></td></tr></table></div>');
	icon.find('img').attr('src', src);
	$('#icons-container').append(icon);
    }
    $('.icon').tooltip({placement: 'bottom'});
    for(var i = 0; i < list.length; i++)
    {
	setTimeout(function(){
	    var k = G1; G1++;
	    $('#icons-container .icon:eq(' + k + ')').removeClass('icon-hidden');
	},50 * i);
    }
}

var gh = {
    url: 'https://api.github.com',
    repo: SNF_REPO,
    headers:
    {
	Accept: 'application/vnd.github.v3+json'
	/*Accept: 'application/vnd.github.v3.raw+json'*/
    },
    query: function(action, callback)
    {
	$.ajax({
	    type: 'GET',
	    dataType: 'jsonp',
	    headers: this.headers,
	    url: this.url + '/repos/' + this.repo + '/' + action,
	    success: function(response)
	    {
		callback(response.data);
	    },
	    error: function()
	    {
		alert('ajax error !');
	    }
	});
    }
};
