import React from "react"
import "./Tracklist.css"
import Track from "../Track/Track"

class Tracklist extends React.Component {
	render() {
		return (
			<div className="TrackList">
				{this.props.tracks.map((track) => {
					return <Track 
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

export default Tracklist
