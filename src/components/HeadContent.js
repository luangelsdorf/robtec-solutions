import React from 'react';
import Head from 'next/head';

export default function HeadContent(props) {
    return (
        <Head>
            <title>{props.title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="theme-color" content="#000000"/>
            <meta name="description" content="Web site created using create-react-app"/>
            <link rel="icon" href="/img/favicon.png"/>
            <link rel="apple-touch-icon" href="/img/favicon.png"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
                rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/css/main.css" />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" />
            <script src="/js/home.js" />
        </Head>
    )
}