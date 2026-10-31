import type { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="currentColor"
                d="M5 7.5h4.4L16 20.2 22.6 7.5H27L17.6 24.5h-3.2L5 7.5Z"
            />
        </svg>
    );
}
