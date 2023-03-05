import React, { useRef, useState, useEffect } from 'react';
import * as cheerio from 'cheerio';

export default function CspFeatureWithHtmlEditor() {
    const [html, setHtml] = useState('');
    const styleRef = useRef(null);
    const [postContent, setPostContent] = useState('');

    useEffect(() => {


        setHtml(postContent)

        
      
      }, []);

      function separateHtmlAndCSS(html){
        const cspHeader = document.querySelector("meta[http-equiv='Content-Security-Policy']").getAttribute('content');

        console.log('cspHeader', cspHeader);
        if(null !=cspHeader){
            let cspDirectives = cspHeader.split(';');
            console.log(cspDirectives)

            let styleSrc = cspDirectives.find(directive =>directive.includes('style-src'))
            console.log('style-src', styleSrc)

            let stylesSrcs =  styleSrc.split(' ')
            console.log('style-srcs', stylesSrcs)

            let nonce1 = stylesSrcs.find(directive =>directive.includes("'nonce-"))
            console.log('nonce1', nonce1)

            let nonce2 = ''
            if(null != nonce1){
                nonce2 = nonce1.split("'")[1];
            }
            nonce2 = nonce2.substring(6)
            console.log('nonce2', nonce2);

            setStyle(html,nonce2);
            
            
        }
      }

      function changeHtml(e){
          setPostContent(e.target.value)

          //separateHtmlAndCSS(e.target.value)
          
          setHtml(e.target.value);
      }


      function setStyle(html1, nonce2){
        const $ = cheerio.load(html1);

        const styles = {};
        let nextId = 1;

        $('[style]').each(function() {
            const el = $(this);
            const style = el.attr('style');
            const id = `style-${nextId}`;
            styles[id] = style;
            el.removeAttr('style');
            el.addClass(id);
            nextId++;
        });

        const css = Object.entries(styles).map(([id, style]) => {
        return `.${id} { ${style} }`;
        }).join('\n');

        console.log(css);
        console.log($.html());

        setHtml($.html())
        //setHtml(html1)

        const styleTag = document.createElement('style');
        styleTag.innerHTML = css;
        styleTag.setAttribute('nonce', nonce2);
        styleRef.current.appendChild(styleTag);

      }
    
      return (
        <div className='container'>
             <div className='row mt-4'>
               <label style={{ color: 'black', fontWeight: 600 }}>Csp Feature With Html Editor </label>
             </div>
            <div className='row mt-4'>
                < label style={{ color: 'black', fontWeight: 600 }}>Input Area</label>
                <textarea value={postContent} onChange={e => changeHtml(e)} name="postContent" />
            </div>
            <div className='row' ref={styleRef} />
            <div className='row mt-4' >HTML: </div>
            <div  className='row' dangerouslySetInnerHTML={{ __html: html }}/>
        </div>

      );
}
 

