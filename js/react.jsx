const HelloWorld = () => {
  return React.createElement('div', null, 'Hello world');
};

// Render the component inside the root element
const rootElement = document.getElementById('test');
ReactDOM.render(React.createElement(HelloWorld), rootElement);