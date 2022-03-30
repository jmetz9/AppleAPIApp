$(function(){
    $('#search').on('click', function(e){

        $('#results').html('')
        $.get(
            'https://itunes.apple.com/search',
            {
                term:$('#searchBar').val(),
                limit:5
            },
            function (data){
                for(i in data.results){
                    $('#results').append(`
                        <h3>${data.results[i].trackName} By ${data.results[i].artistName}</h3>
                    `);
                }
            },
            'json'
        )

    });


})