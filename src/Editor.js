import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import grapesjsMJML from 'grapesjs-mjml'
import React, { useEffect } from 'react';

export const Editor = () => {
    useEffect(() => {
        const editor = grapesjs.init({
            container: '#email-editor',
            fromElement: true,
            avoidInlineStyle: false,
            plugins: [grapesjsMJML],
            pluginsOpts: {
                [grapesjsMJML]: {}
            },
        });
        console.log('editor.addComponents', editor.addComponents);
        editor.addComponents(`
        <mjml>
            <mj-body>
                <mj-section></mj-section>
            </mj-body>
        </mjml>
        `)
    }, []);
    return (
        <div>
            <div id="email-editor" />
        </div>
    );
};
