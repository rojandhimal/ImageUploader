import { useState } from 'react';
import './App.css';
import { FileUpload } from './components';

function App() {
  const [images, setImages] = useState([]);
  const fileUploadprops = {images, setImages};
  return (
    <div className="app-container">
      <FileUpload {...fileUploadprops}/>
    </div>
  );
}

export default App;
