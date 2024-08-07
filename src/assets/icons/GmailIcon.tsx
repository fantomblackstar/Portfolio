import React, { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const GmailIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      height="16px"
      version="1.1"
      viewBox="0 0 20 16"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge('size-6', props.className)}
    >
      <title />
      <desc />
      <defs />
      <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
        <g fill="#fff" id="Icons-Communication" transform="translate(0.000000, -85.000000)">
          <g id="gmail" transform="translate(0.000000, 85.000000)">
            <path
              d="M18,0 L2,0 C0.9,0 0,0.9 0,2 L0,14 C0,15.1 0.9,16 2,16 L18,16 C19.1,16 20,15.1 20,14 L20,2 C20,0.9 19.1,0 18,0 L18,0 Z M18,14 L16,14 L16,5.2 L10,9 L4,5.2 L4,14 L2,14 L2,2 L3.2,2 L10,6.2 L16.8,2 L18,2 L18,14 L18,14 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
