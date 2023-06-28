import { Box } from '@mui/material';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; 

import React, { useRef, useEffect } from 'react';

function TextEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6] }],
            ['bold', 'italic', 'underline', 'strike'],
            // [{ indent: '-1' }, { indent: '+1' }],
            // [{ align: [] }], // Text alignment option
            ['link',"blockquote", "code-block", 'image'],
            [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
          ],
        },
        placeholder: "Insert text in here ..."
      });
    }
  }, []);

  return(
    <div
      ref={editorRef}
      style={{border: "none"}}
    >
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </div>  
  );
}

export default TextEditor;