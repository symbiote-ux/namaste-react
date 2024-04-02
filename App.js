const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'I am H1 tag'),
    React.createElement('h2', {}, 'I am H2 tag'),
  ])
);

const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' },
  'Hello World from React Inside It'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
 