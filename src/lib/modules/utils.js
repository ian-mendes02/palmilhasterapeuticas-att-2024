import {DEV, ASSET_PREFIX} from './constants';

export const list = ( ...classes ) => classes.join( ' ' ).trim();

export const url = str => `url('/${str || 'placeholder.webp'}')`;

export function source( url ) {
    if ( typeof url === 'string' ) {
        !url.startsWith( '/' ) && ( url = '/' + url );
        return !url.startsWith( ASSET_PREFIX ) ? ASSET_PREFIX + url : url;
    }
}

export function prefix( prefix, classes ) {
    var cls = classes.split( ' ' );
    for ( let i = 0; i < cls.length; i++ ) cls[i] = prefix + cls[i];
    return cls.join( ' ' ).trim();
};

export function log( msg, type = 'default' ) {
    DEV && {
        warning: () => console.warn( msg ),
        success: () => console.log( `%c☑ - ${msg}`, "color: #B0C4DE" ),
        default: () => console.log( msg ),
        error: () => console.error( msg ),
        info: () => console.log( `%c⚠ - ${msg}`, "color: #F0E68C" ),
    }[type]();
};

export function useListener( target, event, callback, options = {} ) {
    return [
        () => target.addEventListener( event, callback, options ),
        () => target.removeEventListener( event, callback, options )
    ];
}

export function effectListener( target, event, callback, options = {} ) {
    let [attach, remove] = useListener( target, event, callback, options = {} );
    attach();
    return remove;
}

export function useTimeout( callback, timeout ) {
    let fn = setTimeout( callback, timeout );
    return () => clearTimeout( fn );
}

export function useInterval( callback, interval ) {
    let fn = setInterval( callback, interval );
    return () => clearInterval( fn );
}