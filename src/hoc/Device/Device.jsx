import React, { Component } from 'react';

const device = (Comp) => {

    const parameter = {
        isMobile: false,
        isTablet: false,
        isDesktop: false,
        isPrinting: false
    };

    class Device extends Component {

        showDevice() {
            if (this.props.width <= 600) {
                parameter.isMobile = true;

                return parameter;
            } else if (this.props.width > 600 && this.props.width <= 1200) {
                parameter.isTablet = true;

                return parameter;
            } else if (this.props.width > 1200 && this.props.width <= 1800) {
                parameter.isDesktop = true;

                return parameter;
            } else if (this.props.width > 1800) {
                parameter.isPrinting = true;

                return parameter;
            }
        }

        render() {
            console.log(this.showDevice());
            return <Comp {...this.props}
                parameter={parameter}
                options={this.props.options} />;
        }
    }

    Device.displayName = `Device(${Component.displayName ||
        Component.name ||
        'Component'})`;

    return Device;
}

export default device;
