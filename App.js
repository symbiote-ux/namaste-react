import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => Object => HTMLElement(on rendering);

const heading = React.createElement('h1', { id: 'heading' }, 'Namaste React');
const Title = () => {
  return <p>Title</p>;
};
const HeadingComponent = () => {
  return (
    <>
      <Title />
      <h1>Hello</h1>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);
