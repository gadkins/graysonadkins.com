import * as React from "react";

const NotebookViewer = ({ url }) => {
    const [iFrameLoaded, setIFrameLoaded] = React.useState(false);
    const divBoxRef = React.useRef(null);
    const resizeIframe = (iframe) => {
        // .. resize iFrame container divBoxRef as needed.
    };
    return (
        <div ref={divBoxRef} className="relative text-gray-600" style={{ height: '100vh' }}>
            {/* {!iFrameLoaded && (
                <span className="inline-block">loading notebook ...</span>
            )} */}
            <iframe
                onLoad={(e) => {
                    setIFrameLoaded(true);
                    resizeIframe(e.target);
                }}
                title="static_html"
                src={url}
                style={{ width: '100%', height: '100%', border: 'none' }}
            ></iframe>
        </div>
    );
};
export default NotebookViewer;