var data = {
    resource_id: '9df33118-59e6-4a50-9381-9e85e99b61e5', // the resource id
    limit: 5, // get 5 results
    q: 'jones' // query for 'jones'
  };
  $.ajax({
    url: 'https://dadesobertes.gva.es/es/api/3/action/datastore_search',
    data: data,
    dataType: 'jsonp',
    success: function(data) {
      alert('Total results found: ' + data.result.total)
    }
  });