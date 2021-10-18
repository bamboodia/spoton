import React from "react"
import "./PlaylistTracks.css"
import PlaylistTrack from "../PlaylistTrack/PlaylistTrack"

class PlaylistTracks extends React.Component {
	render() {
		return (
			<div className="PlaylistTracks">
				{this.props.tracks.map((track) => {
					return <PlaylistTrack 
					track={track} 
					key={track.id} 
					onAdd={this.props.onAdd} 
					onRemove={this.props.onRemove} 
					isRemoval={this.props.isRemoval}
					onPlay={this.props.onPlay}
					onStop={this.props.onStop} 
					isPlaying={this.props.isPlaying}
					playlist={this.props.playlist}  />
				})}
			</div>
		)
	}
}

export default PlaylistTracks 
