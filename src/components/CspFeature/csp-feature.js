import React, { useRef, useState, useEffect } from 'react';
import * as cheerio from 'cheerio';

export default function CspFeature() {
    const [html, setHtml] = useState('');
    const [inlineStyles, setInlineStyles] = useState([]);
    const styleRef = useRef(null);


    useEffect(() => {

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
            console.log('nonce2', nonce2)


            let htmlString = 
            `<div style="color: red; background-color: yellow;" >hello</div>`
          

            const html1 =` <div style="color: red; background-color: yellow; height: 100%; width: 100%" >
                                <div style="color: blue; background-color: green; height: 90%; width: 90%" >
                                    <div style="color: blue; background-color: navy; height: 80%; width: 80%" >
                                        <div style="color: blue; background-color: white; height: 700%; width: 70%" >
                                            <div style="color: blue; background-color: black; height: 600%; width: 60%" >
                                                <div style="color: blue; background-color: orange; height: 500%; width: 50%; text-align:center" >
                                                        It finally worked!!!!!!!!!!!!!!!!!!!!!
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        `;

            setStyle(html1,nonce2);
            
            
        }
      
      }, []);


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

        setInlineStyles(css)
        const styleTag = document.createElement('style');
        styleTag.innerHTML = css;
        styleTag.setAttribute('nonce', nonce2);
       styleRef.current.appendChild(styleTag);

      }
    
      return (
        <div>
            <div ref={styleRef} />
            <div  dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      );
}
 

