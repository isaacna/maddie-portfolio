// import React from 'react';

// function ImageList({ imageUrls }) {
//   return (
//     <div className="image-list">
//       {imageUrls.map((imageUrl, index) => (
//         <img key={index} src={imageUrl} alt={`Image ${index}`} />
//       ))}
//     </div>
//   );
// }

// export default ImageList;
console.log("FFFF");
// Define a React component
const HelloWorld = () => {
  return React.createElement('div', null, 'Hellofff world');
};

// Render the component inside the root element
const rootElement = document.getElementById('test');
ReactDOM.render(React.createElement(HelloWorld), rootElement);