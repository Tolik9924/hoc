import React, { Component } from 'react';

const matchMedia = (Comp, media = undefined) => {
 

    class MatchMedia extends Component {

        state = {
            showMedia: ''
        }

        componentDidMount() {
            window.addEventListener('resize', () => {
                if( window.matchMedia(media).matches) {
                    this.setState({
                        showMedia: 'matchMedia'
                    });
                } else {
                    this.setState({
                        showMedia: 'notMatchMedia'
                    });
                }
            });
        }

        render() {

            return <Comp options={this.props.options} 
                         showMedia={this.state.showMedia} 
                         {...this.props} />;
        }
    }

    MatchMedia.displayName = `MatchMedia(${Comp.displayName ||
        Comp.name ||
        'Component'})`;

    return MatchMedia;
}

export default matchMedia;
