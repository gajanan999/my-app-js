import React, { useRef }  from 'react';

import BundledEditor from '../../BundledEditor'

export default function Testing() {

    const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
    return  ( 
      <div className='container'>
          <div className='row'> 
                <ul>
                    <li>
                        <a href="/data-table-component">DataTableComponent</a>
                    </li>
                    <li>
                        <a href="/data-table-component1">DataTableComponent1</a>
                    </li>
                    <li>
                        <a href="/dowpdown-component">DropdownComponent</a>
                    </li>
                    <li>
                        <a href="/table-component">Table component</a>
                    </li>
                    <li>
                        <a href="/resizable-table-component">Resizable Table component</a>
                    </li>
                    <li>
                        <a href="/state-management-component">State Management component</a>
                    </li>
                    <li>
                        <a href="/user-registration-formik">Formik User Registration Component</a>
                    </li>
                </ul>
          </div>

          <div className='row'>
          <BundledEditor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'anchor', 'autolink', 'help', 'image', 'link', 'lists',
            'searchreplace', 'table', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
          </div>
      </div>
);
}