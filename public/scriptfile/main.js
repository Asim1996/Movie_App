jQuery('#form-container').on('submit',function(e){
  e.preventDefault();  
  var title=jQuery('#movietitle').val();
  var movieurl="http://www.omdbapi.com/?s="+title+"&plot=full&apikey=thewdb";
    $("#err").html("");
    $("#movie-list").html("");
    $('table').css('display','none');
    $('#movieres').html("");
    $('tbody').html("");
$.ajax({
        type:"GET",
        url:movieurl,
    }).done(function(data){
            console.log(data);
             	if(data.Response==='False'){
					$('#err').text('Title not found')
				}
             else{
            console.log(title);
            $('#movieres').css('display','block').text('Search result for'+" "+title)
 var titles=data.Search;
 console.log(titles);
    for (var i = 0; i <= titles.length; i++) {
            var res = titles[i];
    // '<a href="http://www.omdbapi.com/?i='+res.imdbID+'&plot=full&apikey=thewdb">'+res.imdbID+'</a>'
      $('table').css({'display':'table','margin-top':'3%'});
       $('table').append('<tbody>'+'<tr>'+'<th scope="row">'+(i+1)+'</th>'+'<td>'+res.Title+'</td>'+'<td>'+res.Year+'</td>'+'<td>'+'<a href="/movie/'+res.imdbID+'">View more</a>'+'</td>'+'</tr>'+'</tbody>')
        };
                 
 }
})
})