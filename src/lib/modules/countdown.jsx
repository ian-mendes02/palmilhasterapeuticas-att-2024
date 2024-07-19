'use client';
import {Grid, Container} from '@/lib/modules/layout-components';
import {useEffect, useMemo, useState} from 'react';
export default function Countdown( {paused = false} ) {
    const eventDate = useMemo( () => new Date( '2024-09-01T23:59:00.000-03:00' ).getTime(), [] )
        , [time, setTime] = useState( {d: '00', h: '00', m: '00', s: '00'} )
        , tick = () => {
            var del = eventDate - ( new Date ).getTime()
                , _ = n => n < 10 ? '0' + n : n
                , f = Math.floor;
            !paused && del > 0 && setTime( {
                d: _( f( del / 86400000 ) ),
                h: _( f( ( del % 86400000 ) / 3600000 ) ),
                m: _( f( ( del % 3600000 ) / 60000 ) ),
                s: _( f( ( del % 60000 ) / 1000 ) ),
            } );
        };
    useEffect( () => {
        let t = setInterval( tick, 1000 );
        return () => clearInterval( t );
    }, [] );

    return <div id='countdown' className='fixed top-0 w-full h-20 bg-[var(--cor-4)] flex items-center border-b-2 border-sky-800 rounded-bl-3xl rounded-br-3xl z-50 slide-down overflow-hidden'>
        {!paused
            ? <Grid className='justify-center items-center m-auto grid-cols-2 max-[820px]:!grid-cols-1 h-full gap-1'>
                <span className='text-center mx-4'>
                    <span className='font-bold my-1'>Garanta seu ingresso no 1º lote</span>
                    <span className='font-light text-xs'>Tempo restante:</span>
                </span>
                <Grid className="grid-cols-4">
                    <div className='flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                        <span className='text-xl font-extrabold max-[820px]:!text-lg'>{time.d}</span>
                        <span className='text-xs font-light'>DIAS</span>
                    </div>
                    <div className='flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                        <span className='text-xl font-extrabold max-[820px]:!text-lg'>{time.h}</span>
                        <span className='text-xs font-light'>HORAS</span>
                    </div>
                    <div className='flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                        <span className='text-xl font-extrabold max-[820px]:!text-lg'>{time.m}</span>
                        <span className='text-xs font-light'>MINUTOS</span>
                    </div>
                    <div className='flex flex-col items-center justify-center w-20 h-16 max-[820px]:!w-[4.5rem] max-[820px]:!h-[3.5rem] rounded-2xl border border-sky-800 mx-1 bg-sky-950'>
                        <span className='text-xl font-extrabold max-[820px]:!text-lg'>{time.s}</span>
                        <span className='text-xs font-light'>SEGUNDOS</span>
                    </div>
                </Grid>
            </Grid>
            : <Container className='w-full h-full p-4'>
                <img src={process.env.NEXT_PUBLIC_ASSET_PREFIX + 'img/svg/encontro_logo_3.svg'} className='h-full w-auto block mx-auto' alt='' draggable='false' />
            </Container>
        }
    </div>;
}