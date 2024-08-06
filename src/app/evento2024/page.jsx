'use client';
import {VideoEvento, Fullscreen, Palestrantes, Checkout, toggleFulscreen, Footer, Banner} from '@/lib/modules/evento-shared';
import {Section, Content, ContentDefault, Container, Wrapper, Loading} from '@/lib/modules/layout-components';
import {pageView, page, viewportListener} from '@/lib/modules/page-load';
import {EventoIngressos} from '@/lib/modules/ticket-purchase';
import {Collapsible} from '@/lib/modules/ui-components';
import {ASSET_PREFIX} from '@/lib/modules/constants';
import {useEffect, useRef, useState} from 'react';
import Countdown from '@/lib/modules/countdown';
import '$/css/carousel.css';
import '$/css/evento.css';

export default function Main() {

    const [pageLoading, setPageLoading] = useState( true )
        , [fullscreenContent, setFullscreenContent] = useState( null )
        , [modalActive, setModalActive] = useState( false )
        , [isMobile, setIsMobile] = useState( false )
        , containerRef = useRef( null )
        , contentRef = useRef( null );

    useEffect( () => setModalActive( fullscreenContent !== null ), [fullscreenContent] );

    useEffect( () => {
        let toggle = toggleFulscreen( contentRef, setModalActive );
        modalActive && toggle.add();
        return toggle.remove;
    }, [modalActive] );

    useEffect( () => {
        page( 'Evento Palmilhas e Ciência Aplicada 2024' );
        let listener = viewportListener( setIsMobile );
        listener.add();
        pageView();
        setPageLoading( false );
        return listener.remove;
    }, [] );

    return (
        <main className='bg-[radial-gradient(circle_at_center,#1E3050,#121e31)]'>

            {pageLoading && (
                <div className='fixed w-screen h-screen bg-primary-900 bg-opacity-50 backdrop-blur-3xl z-[999]'>
                    <Loading width={32} />
                </div>
            )}

            <Countdown paused />

            <Section id='evt-header' className='pt-48 pb-12 flex items-center overflow-hidden bg-[var(--cor-4)]'>

                <Banner />

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
                                        <img src={ASSET_PREFIX + 'img/svg/map_pin.svg'} alt='' draggable='false' className='w-[40%]' />
                                    </div>
                                    <h2 className='font-light text-base'>Mercure São José dos Campos</h2>
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
                            <Checkout />
                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='evt-local' className='max-[820px]:!py-16 bg-[linear-gradient(45deg,var(--cor-4),var(--cor-5))] duration-200 ease-out overflow-hidden'>
                <Content className='relative z-20'>
                    <ContentDefault>
                        <Wrapper className='!flex-nowrap max-[820px]:!flex-col justify-start items-center h-[420px] max-[820px]:!h-auto w-9/12 max-[820px]:!w-full mx-auto'>
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
                                            <img src={ASSET_PREFIX + 'img/svg/map_pin.svg'} alt='' draggable='false' className='w-[40%]' />
                                        </div>
                                    )}
                                    <h2 className='font-extralight text-base'>
                                        {isMobile && <i className="fa-solid fa-location-dot mr-2" aria-hidden="true"></i>}
                                        <strong>Hotel Mercure São José dos Campos - Torre II</strong><br />
                                        Av. Jorge Zarur, 81, Jardim Apolo <br />
                                        São José dos Campos, SP - 12243-081 <br />
                                    </h2>
                                </Wrapper>
                                <Wrapper className='flex-nowrap items-center w-max m-2 max-[820px]:!w-full'>
                                    <div className="relative w-16 h-12 aspect-square">
                                        <div className='absolute h-2/3 aspect-square left-0 top-0 rounded-full mr-4 bg-center bg-cover' style={{backgroundImage: `url(${ASSET_PREFIX + 'img/mercure.webp'})`}}></div>
                                        <div className='absolute h-2/3 aspect-square right-0 bottom-0 mr-4 bg-center bg-cover' style={{backgroundImage: `url(${ASSET_PREFIX + 'img/png/logo_ibis.png'})`}}></div>
                                    </div>
                                    <div>
                                        <div className='mb-2'>
                                            <h2 className="font-extralight text-base m-0"><strong>Em parceria com:</strong></h2>
                                            <span className="font-extralight text-base">Mercure São José dos Campos<br /> 20% OFF</span>
                                            <span className="font-extralight text-base">Ibis São José dos Campos<br /> 15% OFF</span>
                                        </div>
                                        <a className='inline !underline font-light cursor-pointer text-sm' href='mailto:h5168-re@accor.com?subject=Reserva%20de%20estadia%20-%20Palmilhas%20%26%20Ci%C3%AAncia%20Aplicada%202024'>Clique aqui para fazer sua reserva por email</a>
                                    </div>
                                </Wrapper>
                            </Container>
                            <Container className='w-[32rem] p-4 aspect-video max-[820px]:!w-full max-[820px]:!p-0 relative'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14668.122128172752!2d-45.90516370000002!3d-23.205557899999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc3589bc020f0d%3A0x96bc968352c2c899!2sMercure%20Sao%20Jose%20dos%20Campos!5e0!3m2!1sen!2sbr!4v1710790411443!5m2!1sen!2sbr" className='outline-none border-none w-full h-full absolute rounded-lg' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </Container>
                        </Wrapper>
                        <Checkout />
                    </ContentDefault>
                </Content>
            </Section>

            <Palestrantes />

            <Section id='evt-video' className='shadow-xl !py-0'>
                <div className='my-8'>
                    <h1 className='grad-text text-center font-semibold text-3xl'>Confira como foi nosso último encontro</h1>
                </div>
                <div className='relative pt-24 h-[576px] max-[820px]:!h-[90vh] flex items-center overflow-hidden'>
                    <div className='cursor-pointer' onClick={() => setFullscreenContent( VideoEvento )}>
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
                {modalActive && <Fullscreen content={fullscreenContent} containerRef={containerRef} contentRef={contentRef} onClick={() => setFullscreenContent( null )} />}
            </Section>

            <EventoIngressos />

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
                                <p>Dias 13 e 14 de setembro de 2024. Em ambos os dias, as atividades acontecerão das 8h às 18h.</p>
                            </Collapsible>
                            <Collapsible title='Onde será o evento?'>
                                <p>
                                    O evento será realizado no Hotel Mercure São José dos Campos, na torre II.
                                    Endereço: Avenida Dr - Av. Jorge Zarur, 81 - Torre II - Jardim Apolo, São José dos Campos - SP, 12243-081.
                                    <br /><br />
                                    O evento tabém será transmitido ao vivo via Zoom.
                                </p>
                            </Collapsible>
                            <Collapsible title='Para quem é o evento?'>
                                <p>Para profissionais da saúde que desejam ter uma experiência incrível e ter acesso a todo o conhecimento necessário para se destacar como profissional.</p>
                            </Collapsible>
                            <Collapsible title='Como recebo meu ingresso?'>
                                <p>O ingresso será enviado para o seu e-mail. Para os participantes do evento presencial, será necessário que mostrar o ingresso na entrada. Por isso, no momento da compra, informe um e-mail ao qual você tenha acesso. Você poderá apresentar o seu ingresso de forma impressa ou digital, por meio de um print.</p>
                            </Collapsible>
                            <Checkout />
                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Footer />

        </main>
    );
}