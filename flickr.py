import flickrapi

api_key = "a0212156b0f464c7df274dc2587e353d"
api_secret = "e8795dc614708d42"

flickr = flickrapi.FlickrAPI(api_key, api_secret)
photos = flickr.photos.search(user_id="")