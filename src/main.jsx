import React from 'react';
import ReactDOM from 'react-dom';

const AppConfig = {
    fullspace:false,
    verticalAlign: "middle",
    syncSystem: false,
    appName: "New App",
    author: "Your Name Here"
};

class Main extends React.Component {
  render() {
    return (
        <a-scene
            altspace={`vertical-align: ${AppConfig.verticalAlign}; fullspace: ${AppConfig.fullspace};`}
            sync-system={AppConfig.syncSystem?`app: ${AppConfig.appName}; author: ${AppConfig.author}` : null}
        >
            <a-entity n-text="text: Hello World!;" />
        </a-scene>
    )
  }
}

ReactDOM.render(
    <Main />,
    document.getElementById('appMain')
);
