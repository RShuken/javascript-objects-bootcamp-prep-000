
var playlist = new Object({artistName: 'songTitle'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}

var removeFromPlaylist = function(playlist, artistName){
  var playlist = playlist;
  delete playlist.artistName
  return playlist
}


/*
function removeFromPlaylist(playlist, artistName) {
  var playlist = playlist;
  delete playlist.artistName;
  return playlist;
}
*/
