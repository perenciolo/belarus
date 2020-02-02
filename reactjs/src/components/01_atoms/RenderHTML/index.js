import React from "react";

export default function RenderHTML({ html }) {
  return <span dangerouslySetInnerHTML={{ __html: html }}></span>;
}
