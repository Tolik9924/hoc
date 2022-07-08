import React, { Component } from 'react';

const device = (Comp) => {

    class Device extends Component {

        state = {
            isMobile: false,
            isTablet: false,
            isDesktop: false,
            isPrinting: false
        }

        innerWidth = window.innerWidth;

        componentDidMount() {
            window.addEventListener('resize', () => {
                if (this.innerWidth <= 600) {
                    this.setState({
                        isMobile: 'isMobile',
                        isTablet: false,
                        isDesktop: false,
                        isPrinting: false
                    });
                } else if (this.innerWidth  > 600 && this.innerWidth  <= 1200) {
                    this.setState({
                        isMobile: false,
                        isTablet: 'isTablet',
                        isDesktop: false,
                        isPrinting: false
                    });
                } else if (this.innerWidth  > 1200 && this.innerWidth  <= 1800) {
                    this.setState({
                        isMobile: false,
                        isTablet: false,
                        isDesktop: true,
                        isPrinting: false
                    });
                } else if (this.innerWidth  > 1800) {
                    this.setState({
                        isMobile: false,
                        isTablet: false,
                        isDesktop: false,
                        isPrinting: 'isPrinting'
                    });
                }
            });
        }

        render() {
            return <Comp {...this.props}
                options={this.props.options} 
                isMobile={this.state.isMobile}
                isTablet={this.state.isTablet}
                isDesktop={this.state.isDesktop}
                isPrinting={this.state.isPrinting}/>;

        }
    }

    Device.displayName = `Device(${Comp.displayName ||
        Comp.name ||
        'Component'})`;

    return Device;
}

export default device;
