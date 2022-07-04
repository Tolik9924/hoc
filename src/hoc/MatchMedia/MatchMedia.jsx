import React, { Component } from 'react';

const matchMedia = (Comp, media) => {

    class MatchMedia extends Component {

        render() {

            if (window.matchMedia(media).matches) {
                console.log(this.props.options);
            } else {
                console.log("max width is not suitable");
            }

            return <Comp options={this.props.options} {...this.props} />;
        }
    }

    MatchMedia.displayName = `MatchMedia(${Component.displayName ||
        Component.name ||
        'Component'})`;

    return MatchMedia;
}

export default matchMedia;
