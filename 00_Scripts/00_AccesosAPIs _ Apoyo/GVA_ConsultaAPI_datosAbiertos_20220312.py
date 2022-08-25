      import urllib
      url = 'https://dadesobertes.gva.es/es/api/3/action/datastore_search?resource_id=9df33118-59e6-4a50-9381-9e85e99b61e5&limit=5&q=title:jones'  
      fileobj = urllib.urlopen(url)
      print fileobj.read()