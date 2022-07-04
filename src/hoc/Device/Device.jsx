import React, {Component} from 'react';

const device = (Comp) => {

    class Device extends Component {

        render() {

            if(this.props.device) {
                console.log(device);
            } else {
                console.log("This component is not suitable for any device ");
            }

            return <Comp {...this.props} device={this.props.device} options={this.props.options} />;
        }
    }

    Device.displayName = `Device(${Component.displayName || 
        Component.name || 
        'Component'})`;

    return Device;
}

export default device;
