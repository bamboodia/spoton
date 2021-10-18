import React from "react"
import "./Playlist.css"
import PlaylistTracks from '../PlaylistTracks/PlaylistTracks'

class Playlist extends React.Component {
	constructor(props) {
		super(props);
		this.handleNameChange = this.handleNameChange.bind(this)
	}
	handleNameChange(e) {
		this.props.onNameChange(e.target.value)
	}
	render() {
		return (
			<div className="Playlist">
				<input defaultValue={'Playlist Name'} onChange={this.handleNameChange} />
				<PlaylistTracks 
				tracks={this.props.playlistTracks} 
				onRemove={this.props.onRemove} 
				isRemoval={true} 
				onPlay={this.props.onPlay}
				onStop={this.props.onStop} 
				isPlaying={this.props.isPlaying}
				playlist={this.props.playlist}  />
				<button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
			</div>
		)
	}
}

export default Playlist;