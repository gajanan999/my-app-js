
import React from 'react';
import '../components/UITheme.css';
import {useState} from 'react';


function UITheme() {
      
      const [posts, setPosts] = useState([]);

      function callAPI() {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response) => response.json())
        .then((data) => {
           console.log(data);
            setPosts(data);
        });
      }
    
        return ( 
            <div className="ui-text">
                <div className="posts-container" style={{ color: "red" }}>
                    {posts.map((post) => {
                        return (
                                <div className="post-card" key={post.id}>
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-body">{post.body}</p>
                                <div className="button">
                                <div className="delete-btn">Delete</div>
                                </div>
                                <span style={{float:'right'}}>Download Audit</span>

                                </div>
                            );
                        })}
                </div>

            <button onClick={callAPI}>
                click
            </button>
            </div>
        );

}

export default UITheme;