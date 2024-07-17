'use client';
import Countdown from '@/lib/modules/countdown';
import {Section, Content, ContentDefault, Container, Wrapper, Loading, Grid} from '@/lib/modules/layout-components';
import {Collapsible} from '@/lib/modules/ui-components';
import {EventoIngressos} from '@/lib/modules/ticket-purchase';
import {useEffect, useRef, useMemo, useState} from 'react';
import {scrollToTop} from '@/lib/modules/utils';
import '$/css/carousel.css';

export default function Main() {

    const $ = el => document.querySelector( el )
        , [pageLoading, setPageLoading] = useState( true )
        , [viewportWidth, setViewportWidth] = useState( null )
        , [fullscreenContent, setFullscreenContent] = useState( null )
        , [modalActive, setModalActive] = useState( false )
        , isMobile = useMemo( () => viewportWidth <= 820, [viewportWidth] )
        , ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX
        , defaultUserProfile = useMemo( () => ASSET_PREFIX + 'img/default_user.jpg', [] )
        , defaultText = 'Teremos mais informações em breve. Fique ligado!'
        , defaultOccupation = '?'
        , containerRef = useRef( null )
        , contentRef = useRef( null )
        , VideoEvento = (
            <iframe
                className='outline-none aspect-video w-full max-[820px]:!w-screen rounded-lg relative z-50'
                src="https://www.youtube.com/embed/ELc7U9NgONY"
                allow='autoplay;picture-in-picture;web-share'
                allowFullScreen
            ></iframe>
        )
        , toggleFullscreen = c => (
            setFullscreenContent( c ),
            setModalActive( true )
        )
        , Fullscreen = () => (
            <div className='bg-[rgb(0,0,0,0.5)] backdrop-blur-lg fixed z-[999] top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center px-32 py-[2.5%] max-[820px]:!p-0' ref={containerRef}>
                <div className='w-full h-full flex items-center justify-center relative'>
                    <div className='h-auto w-full relative' ref={contentRef}>
                        <div className='w-12 h-12 absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 max-[820px]:!-translate-x-1/2 max-[820px]:!-translate-y-full'>
                            <span className='w-full text-right cursor-pointer' onClick={() => setModalActive( false )}><i className="fa-regular fa-circle-xmark text-2xl" aria-hidden="true"></i></span>
                        </div>
                        <Loading width={32} />
                        {fullscreenContent}
                    </div>
                </div>
            </div>
        )
        , Palestrante = ( {children = defaultText, src = defaultUserProfile, name = 'Palestrante não confirmado', occupation = defaultOccupation, theme = 'Tema da palestra'} ) => (
            <div className='w-full flex items-start justify-center'>
                <div className='p-2 rounded-2xl shadow-md bg-[#121e31] border-t-2 border-sky-900 w-full h-full'>
                    <div className="flex flex-col justify-between relative duration-300 ease-out">
                        <div className='speaker-header w-full flex items-center justify-start p-2 max-[820px]:!p-0'>
                            <div
                                className='speaker-profile w-24 min-w-24 aspect-square left-0 bottom-0 rounded-full mr-4 bg-center bg-cover'
                                style={{backgroundImage: `url('${src}')`}}
                            ></div>
                            <div className='speaker-title'>
                                <h2 className='font-bold text-lg mb-1 max-[820px]:!text-base'>{theme}</h2>
                                <h2 className='font-normal text-sm'>{name}</h2>
                                <h3 className='italic opacity-80 text-xs'>{occupation}</h3>
                            </div>
                        </div>
                        <div className='speaker-description duration-300 ease-out p-2'>
                            <div className="divider left"></div>
                            <div>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
        , Checkout = () => (
            <div
                className='block w-max py-4 px-8 my-8 mx-auto rounded-full shadow-lg bg-sky-700 grad-alt cursor-pointer hover:brightness-105 hover:-scale-y-[5px] duration-150 ease-out'
                onClick={() => scrollToTop( '#evt-valor' )}
            ><span className='m-auto text-center text-white font-bold'>GARANTA SUA PARTICIPAÇÃO</span></div>
        );

    useEffect( () => {
        !function( e, t, a, n, g ) {e[n] = e[n] || [], e[n].push( {"gtm.start": ( new Date ).getTime(), event: "gtm.js"} ); var m = t.getElementsByTagName( a )[0], r = t.createElement( a ); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4", m.parentNode.insertBefore( r, m );}( window, document, "script", "dataLayer" );
        document.title = 'Evento Palmilhas e Ciência Aplicada 2024';
        let vw = () => setViewportWidth( window.visualViewport.width );
        vw();
        window.visualViewport.addEventListener( 'resize', vw );
        return () => window.visualViewport.removeEventListener( 'resize', vw );
    }, [] );

    useEffect( () => {
        let scrollEvents = ['wheel', 'scroll', 'keydown']
            , scrollKeys = ["Space", "ArrowUp", "ArrowDown"]
            , handleClickOutside = e => !contentRef.current?.contains( e.target ) ? setModalActive( false ) : null
            , preventScroll = e => scrollEvents.includes( e.type ) && e.type === 'keydown'
                ? ( e.code === 'Escape'
                    ? setModalActive( false )
                    : scrollKeys.includes( e.code ) && e.preventDefault()
                ) : e.preventDefault();

        modalActive && (
            document.addEventListener( 'mousedown', handleClickOutside ),
            scrollEvents.forEach( e => document.addEventListener( e, preventScroll, {passive: false} ) )
        );

        return () => (
            document.removeEventListener( 'mousedown', handleClickOutside ),
            scrollEvents.forEach( e => document.removeEventListener( e, preventScroll, {passive: false} ) )
        );

    }, [modalActive] );

    useEffect( () => setPageLoading( false ), [] );

    return (
        <main className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)]'>

            {pageLoading && (
                <div className='fixed w-screen h-screen bg-primary-900 bg-opacity-50 backdrop-blur-3xl z-[999]'>
                    <Loading width={32} />
                </div>
            )}

            <Countdown paused />

            <Section id='evt-header' className='pt-48 pb-12 flex items-center overflow-hidden bg-[var(--cor-4)]'>

                <div className='absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light opacity-75 z-10 max-[820px]:!h-full'>
                    <video autoPlay muted playsInline loop className='inline-block align-baseline w-full relative max-[820px]:!h-full max-[820px]:!w-full object-cover bg-cover'>
                        <source src={ASSET_PREFIX + 'img/evt_banner.webm'} />
                    </video>
                </div>

                <Content className='relative z-20'>
                    <ContentDefault className='flex flex-col justify-center items-center text-center'>
                        <Container className='h-full w-[48rem] max-[1024px]:w-[80%] max-[426px]:w-full items-center justify-center'>
                            <Container className='w-1/2'>
                                <img src={ASSET_PREFIX + 'img/svg/encontro_logo_3.svg'} alt='' draggable='false' />
                            </Container>
                            <div className="divider"></div>
                            <Container className='my-4'>
                                <p className='text-3xl'>DOMINE TÉCNICAS E APRIMORE O SEU RACIOCÍNIO CLÍNICO SOBRE PALMILHAS TERAPÊUTICAS.</p>
                            </Container>
                            <Wrapper className='flex-nowrap max-[820px]:!flex-col'>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-8 h-8 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                        <img src={ASSET_PREFIX + 'img/svg/calendar.svg'} alt='' draggable='false' className='w-1/2' />
                                    </div>
                                    <h2 className='font-light text-base text-left'>13 e 14 de Setembro <br />das 8h às 18h</h2>
                                </Wrapper>
                                <Wrapper className="items-center flex-nowrap w-max m-2">
                                    <div className='w-8 h-8 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                        <i className="fa-solid fa-video" aria-hidden="true"></i>
                                    </div>
                                    <h2 className='font-extralight text-base text-left'>
                                        <strong>Evento com transmissão AO VIVO</strong><br />
                                        Via Zoom
                                    </h2>
                                </Wrapper>
                            </Wrapper>
                            <button
                                className='font-bold text-2xl max-[820px]:!text-base shadow-md w-fit py-4 px-16 rounded-full max-[820px]:!max-w-[340px] grad-alt hover:scale-105 hover:brightness-105 duration-200 my-4'
                                onClick={() => $( '#evt-valor' ).scrollIntoView( {block: 'start'} )}>
                                GARANTA SUA VAGA
                            </button>
                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-zoom' className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] max-[820px]:!py-16 duration-200 ease-out overflow-hidden'>
                <Content className='relative z-20'>
                    <ContentDefault>
                        <Wrapper className='!flex-nowrap max-[820px]:!flex-col justify-start items-center w-9/12 max-[820px]:!w-full mx-auto'>
                            <Container className='w-[32rem] max-[820px]:!w-full p-4'>
                                <Container className='mb-2'>
                                    <h2 className='grad-text font-bold text-3xl mb-2'>ONDE E QUANDO?</h2>
                                    <div className="divider left"></div>
                                </Container>
                                <Wrapper className="items-center flex-nowrap w-max m-2 max-[820px]:!w-full">
                                    {!isMobile && (
                                        <div className='w-12 h-12 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                            <img src={ASSET_PREFIX + 'img/svg/calendar.svg'} alt='' draggable='false' className='w-1/2' />
                                        </div>
                                    )}
                                    <h2 className='font-extralight text-base'>
                                        {isMobile && <i className="fa-solid fa-calendar-days mr-2" aria-hidden="true"></i>}
                                        <strong>13 e 14 de Setembro</strong><br />
                                        Sexta-feira e sábado<br />
                                        Das 8h às 18h
                                    </h2>
                                </Wrapper>
                                <Wrapper className="items-center flex-nowrap w-max m-2 max-[820px]:!w-full">
                                    {!isMobile && (
                                        <div className='w-12 h-12 mr-4 bg-[var(--cor-1)] rounded-full flex items-center justify-center shadow-md'>
                                            <i className="fa-solid fa-video" aria-hidden="true"></i>
                                        </div>
                                    )}
                                    <h2 className='font-extralight text-base'>
                                        {isMobile && <i className="fa-solid fa-video mr-2" aria-hidden="true"></i>}
                                        <strong>Evento com transmissão AO VIVO</strong><br />
                                        Via Zoom
                                    </h2>
                                </Wrapper>
                                <div
                                    className='block w-max py-2 px-8 mt-4 rounded-full shadow-lg bg-sky-700 grad-alt cursor-pointer hover:brightness-105 hover:-scale-y-[5px] duration-150 ease-out'
                                    onClick={() => scrollToTop( '#evt-valor' )}
                                ><span className='m-auto text-center text-white font-bold'>GARANTA SUA PARTICIPAÇÃO</span></div>
                            </Container>
                        </Wrapper>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-palestrantes' className='shadow-lg bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] max-[820px]:!py-4 border-y-2 border-sky-800 chuva-palmilhas overflow-hidden rounded-bl-3xl rounded-br-3xl'>
                <Content className='relative z-20'>
                    <ContentDefault>
                        <Container className='w-9/12 max-[820px]:!w-full my-4 px-4 mx-auto'>
                            <h2 className='text-2xl text-center max-[820px]:!text-xl font-bold grad-text mb-2'>CONHEÇA OS PALESTRANTES DE 2024</h2>
                            <div className="divider"></div>
                        </Container>
                        <Container className='items-center justify-center'>

                            <Container className='mt-4 items-center'>
                                <h2 className='grad-text text-center font-semibold text-2xl'>Ciência Aplicada</h2>
                                <Grid className='mt-4 mx-auto grid-cols-2 max-[820px]:!grid-cols-1 w-full gap-4'>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/andre-mendes.webp'}
                                        name='André Mendes'
                                        occupation='Fisioterapeuta'
                                        theme='Vamos pensar juntos: Um guia para o raciocínio clínico'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, especialista em Fisioterapia Ortopédica, Mestre e doutorando em Fisioterapia, sócio fundador da Podoshop e do Palmilhando. Autor do livro Palmilhas Terapêuticas: ciência e prática clínica.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/felipe-barcelos.webp'}
                                        name='Felipe Barcelos'
                                        occupation='Médico Ortopedista'
                                        theme='O pé da criança com doenças neuromusculares'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Médico ortopedista com subespecialização em ortopedia pediátrica e doenças neuromusculares pelo Ensino Einstein. Médico do corpo clínico do Hospital Israelita Albert Einstein.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/maria-lucoveis.webp'}
                                        name='Maria Lucóveis'
                                        occupation='Enfermeira e fisioterapeuta'
                                        theme='Recomendação de recursos offloading para pés de risco'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta e Enfermeira Estomaterapeuta, Mestre em Ciências pela Universidade Federal de São Paulo, Master em pé diabético pela <i>Universidad Complutense de Madrid</i>, doutoranda em Ciências da Reabilitação pela Universidade de São Paulo. Socia proprietária da Bem Estar dos Pés - Serviços de Enfermagem.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/george-sabino.webp'}
                                        name='George Sabino'
                                        occupation='Fisioterapeuta'
                                        theme='Utilização de I.A. nas avaliações clínicas do pé e da marcha'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, Doutor em Ciências da Reabilitação UFMG, Pós doutorando em Ciências da Saúde CMMG. Sócio fundador da Propulsão.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/brenda-braga.webp'}
                                        name='Brenda Braga'
                                        occupation='Fisioterapeuta'
                                        theme='A influência dos calçados infantis na saúde dos pés'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta ortesista, especialista em órteses suropodálicas. Empreendedora e sócia da Gente Miúda Kids Shoes.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/leonardo-signorini.webp'}
                                        name='Leonardo Signorini'
                                        occupation='Fisioterapeuta'
                                        theme='As palmilhas no futebol profissional'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, especialista em Fisioterapia Ortopédica e Esportiva. Dono da Dr. Pés palmilhas.</p>
                                    </Palestrante>
                                </Grid>
                            </Container>

                            <Container className='mt-8'>
                                <h2 className='grad-text text-center font-semibold text-2xl'>Empreendedorismo</h2>
                                <Grid className='mt-4 mx-auto grid-cols-2 max-[820px]:!grid-cols-1 w-full gap-4'>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/mariana-pereira.webp'}
                                        name='Mariana Pereira'
                                        occupation='Copywriter'
                                        theme='Consciência, dores e desejos do cliente'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Estrategista digital e copywriter da Podoshop e do Palmilhando.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/jordache-murta.webp'}
                                        name='Jordache Murta'
                                        occupation='Publicitário'
                                        theme='Estratégias para construir a sua autoridade no digital'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Publicitário, especialista em marketing digital. Há 20 anos trabalhando com marketing, atua em estratégias digitais para construção de autoridade, vendas e captação de novos clientes de forma orgânica.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/natalia-faro.webp'}
                                        name='Natália Faro'
                                        occupation='Fisioterapeuta'
                                        theme='Ecossistema empreendedor: Como fomentar seu crescimento'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, empreendedora há 15 anos, influenciadora e fundadora da Verticalle - Palmilhas. Experiência de 7 anos com palmilhas personalizadas e criadora das palmilhas dupla face para saltos.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/myrlla-moreira.webp'}
                                        name='Myrlla Moreira'
                                        occupation='Fisioterapeuta'
                                        theme='Como ser um profissional de referência e ter um consultório de sucesso'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta formada há 11 anos, empreendedora, especialista em coluna vertebral pela Santa Casa de São Paulo. Criadora do curso on-line de capacitação Escoliose na Prática.</p>
                                    </Palestrante>
                                    <Palestrante
                                        src={ASSET_PREFIX + 'img/palestrantes-2024/clayton-fuzetti.webp'}
                                        name='Clayton Fuzetti'
                                        occupation='Fisioterapeuta e CEO da Podoshop®'
                                        theme='Planejando as finanças do seu futuro'
                                    >
                                        <p className='text-sm' style={{lineHeight: '24px'}}>Fisioterapeuta, especialista em Fisioterapia Ortopédica, MBA em gestão empresarial. Sócio fundador da Podoshop e do Palmilhando.</p>
                                    </Palestrante>
                                </Grid>
                            </Container>

                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-video' className='shadow-xl !py-0'>
                <div className='my-8'>
                    <h1 className='grad-text text-center font-semibold text-3xl'>Confira como foi nosso último encontro</h1>
                </div>
                <div className='relative pt-24 h-[576px] max-[820px]:!h-[90vh] flex items-center overflow-hidden'>
                    <div className='cursor-pointer' onClick={() => toggleFullscreen( VideoEvento )}>
                        {!modalActive && <div className='absolute-center w-20 h-20 z-30'>
                            <img src={ASSET_PREFIX + 'img/svg/play_button.svg'} alt='' draggable='false' className='w-full h-full' />
                        </div>}
                        <div className='absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light opacity-75 z-10 max-[820px]:!h-full'>
                            <video id='evento-video' autoPlay muted playsInline loop className='inline-block align-baseline w-full max-[820px]:!h-full max-[820px]:!w-full object-cover bg-cover'>
                                <source src={ASSET_PREFIX + 'img/evt_banner.webm'} />
                            </video>
                        </div>
                    </div>
                </div>
                {modalActive && <Fullscreen>{fullscreenContent}</Fullscreen>}
            </Section>

            <Section id='evt-valor' className='shadow-lg bg-[radial-gradient(circle_at_center,#1E3050,#121e31)] border-y-2 border-sky-800 chuva-palmilhas rounded-bl-3xl rounded-br-3xl'>
                <Content className='relative z-30'>
                    <ContentDefault>
                        <EventoIngressos online />
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='faq'>
                <Content>
                    <ContentDefault className='flex justify-evenly max-[820px]:!flex-col'>
                        <Container className='w-[30%] max-[820px]:!w-[90%] max-[820px]:!mx-auto max-[820px]:!mb-8 max-[820px]:!text-center'>
                            <h2 className='font-semibold text-xl'>Ficou com alguma dúvida?</h2>
                            <div className="divider left"></div>
                            <p>Confira aqui as respostas para as dúvidas mais frequentes, ou entre em contato conosco via Whatsapp</p>
                            <a href="https://wa.me//5512982628132" className='flex items-center justify-evenly py-4 my-4 px-8 border border-cyan-200 rounded-xl hover:backdrop-brightness-110 ease-out duration-200 cursor-pointer decoration-[none] text-white'>
                                <img src={ASSET_PREFIX + 'img/svg/whatsapp-green.svg'} alt="" draggable='false' width='32px' height='32px' className='mr-2' />
                                <p className='w-full'>ATENDIMENTO POR <mark className="cor-3">WHATSAPP</mark></p>
                            </a>
                        </Container>
                        <Container className='w-[70%] max-[820px]:!w-full ml-8 max-[820px]:!ml-0'>
                            <Collapsible title='Quando vai ser o evento?'>
                                <p>Dias 13 e 14 de setembro de 2024, das 8h às 18h em ambos os dias.</p>
                            </Collapsible>
                            <Collapsible title='Onde será transmitido o evento?'>
                                <p>
                                    O evento será transmitido ao vivo via Zoom.
                                    O link de acesso será fornecido no momento da compra do seu ingresso.
                                </p>
                            </Collapsible>
                            <Collapsible title='Para quem é o evento?'>
                                <p>Para profissionais da saúde que desejam ter uma experiência incrível e ter acesso a todo o conhecimento necessário para se destacar como profissional.</p>
                            </Collapsible>
                            <Collapsible title='Como recebo meu acesso?'>
                                <p>O link de acesso será enviado para o seu e-mail. Por isso, no momento da compra, informe um e-mail ao qual você tenha acesso.</p>
                            </Collapsible>
                            <Checkout />
                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-footer'>
                <div className='w-36 m-auto text-center'>
                    <img src={ASSET_PREFIX + 'img/svg/logo_palmilhando.svg'} alt='' draggable='false' />
                </div>
            </Section>

        </main>
    );
}