import React, { useState } from "react";

function DynamicHTMLData() {
  const [htmlContent, setHtmlContent] = useState(
    "<h2 style='color:blue';>Hello World</h2> <p>This is <b>Dynamic HTML</b> content!</p>"
  );
  return (
    <div>
      <h1>Dynamic HTML renders</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <button
        onClick={() =>
          setHtmlContent("<h3 style='color:green';>Updated Content!</h3>")
        }
      >
        Change Content
      </button>
    </div>
  );
}

export default DynamicHTMLData;

