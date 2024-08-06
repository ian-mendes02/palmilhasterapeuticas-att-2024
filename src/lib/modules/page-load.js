import { useEffect } from 'react';
import { useListener } from './utils';

export async function getIp() {
    return await fetch( "https://api.ipify.org?format=json" )
        .then( res => res.json() )
        .then( res => res.ip );
};

export async function post( url, data ) {
    return await fetch( url, {
        headers: {"Content-Type": "application/json"},
        method: 'post',
        body: JSON.stringify( data )
    } )
        .then( res => res.json() );
};

export function pageView() {
    fetch( 'https://api.ipify.org/?format=json' )
        .then( res => res.json() )
        .then( res => fetch( process.env.NEXT_PUBLIC_API, {
            headers: {"Content-Type": "application/json"},
            method: "post",
            body: JSON.stringify( {
                action: "page_view",
                data: {
                    ip: res.ip,
                    origin: window.location.href
                }
            } )
        } ) );
}

export function viewportListener( setIsMobile ) {
    const viewport = window?.visualViewport
        , listener = {add: () => void 0, remove: () => void 0};
    if ( viewport ) {
        const vw = () => setIsMobile( viewport.width <= 820 );
        vw();
        listener.add = () => viewport.addEventListener( 'resize', vw );
        listener.remove = () => viewport.removeEventListener( 'resize', vw );
    }
    return listener;
}

export function useViewportListener( setIsMobile ) {
    useEffect( () => {
        const viewport = window.visualViewport;
        if ( viewport ) {
            const vw = () => setIsMobile( viewport.width <= 820 );
            const [attach, remove] = useListener( viewport, 'resize', vw );
            vw();
            attach();
            return remove;
        }
    }, [setIsMobile] );
}

export function page( title = 'Document' ) {
    !function( e, t, a, n, g ) {e[n] = e[n] || [], e[n].push( {"gtm.start": ( new Date ).getTime(), event: "gtm.js"} ); var m = t.getElementsByTagName( a )[0], r = t.createElement( a ); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4", m.parentNode.insertBefore( r, m );}( window, document, "script", "dataLayer" );
    document.title = title;
}

export function $( el ) {
    return typeof el === 'string' ? document.querySelector( el ) : el;
}

export function scroll_to( el, position = 'start' ) {
    $( el )?.scrollIntoView( {block: position, behavior: 'smooth'} );
};