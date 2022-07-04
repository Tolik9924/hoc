import React, { Component } from 'react';

const matchMedia = (Comp, media = undefined) => {
 

    class MatchMedia extends Component {

        showMedia = window.matchMedia(media).matches ? media : 'matchMedia';

        render() {

            return <Comp options={this.props.options} showMedia={this.showMedia} {...this.props} />;
        }
    }

    MatchMedia.displayName = `MatchMedia(${Component.displayName ||
        Component.name ||
        'Component'})`;

    return MatchMedia;
}

export default matchMedia;
