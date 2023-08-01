import Quill from 'quill';
import 'quill/dist/quill.snow.css'; 

import React, { useRef, useEffect } from 'react';

const TextEditor: React.FC = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['link', "blockquote", "code-block", 'image'],
            [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
          ],
        },
        placeholder: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      });
    }
  }, []);

  return(
    <div
      ref={editorRef}
      style={{border: "none"}}
    >
    </div>  
  );
}

export default TextEditor;