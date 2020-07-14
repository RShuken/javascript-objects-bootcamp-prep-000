var playlist = new Object({artistName: 'songTitle'});

function updatePlaylist(Object,string,songTitle) {
  playlist.assign({}, playlist,{[string]: songTitle })
}
