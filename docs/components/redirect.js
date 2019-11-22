import React from 'react';

export default function Redirect(target) {
    return class RedirectComponent extends React.Component {
        componentDidMount() {
            window.location.href =
                typeof target === 'function' ? target() : target;
        }

        render() {
            return null;
        }
    };
}
