import React, { FC, useEffect, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';

interface PreviewProps {
  input: string;
}

const Preview: FC<PreviewProps> = ({ input }) => {
  const [html, setHtml] = useState(``);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) {
        setHtml(`
        <html> 
          <script id="run">${input}</script>
        </html>
        `);
      }
    }, 1000);

    return () => {
      timer && clearTimeout(timer);
    };
  }, [input]);

  return (
    <>
      <iframe srcDoc={html} frameBorder="0"></iframe>
    </>
  );
};

export default Preview;
