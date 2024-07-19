"use client";
import {useState, useEffect} from 'react';
import {Section, Content, ContentDefault, Container, Loading} from '@/lib/modules/layout-components';
import {pageView} from '@/lib/modules/utils';
import '$/css/workshop.css';

export default function Main() {

    const [pageLoading, setPageLoading] = useState( true )
        , [userEmail, setUserEmail] = useState( '' )
        , [submitButton, setSubmitButton] = useState( '' )
        , [statusMessage, setStatusMessage] = useState( null )
        , button = {
            default: 'Quero me inscrever!',
            retry: 'Tentar novamente',
            loading: <span className='spinner w-8 h-8 mx-auto'></span>,
            success: <span className='checkmark w-8 h-8 mx-auto'></span>
        }
        , status = {
            server_error: 'Falha na comunicação com o servidor, tente novamente.',
            no_email: 'O campo "e-mail" não pode ficar em branco.',
            user_exists: 'Esse email já está cadastrado.',
            success: 'Obrigado! Enviaremos um e-mail em breve para confirmar sua inscrição.'
        };

    useEffect( () => {
        !function( e, t, a, n, g ) {e[n] = e[n] || [], e[n].push( {"gtm.start": ( new Date ).getTime(), event: "gtm.js"} ); var m = t.getElementsByTagName( a )[0], r = t.createElement( a ); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4", m.parentNode.insertBefore( r, m );}( window, document, "script", "dataLayer" );
        document.title = 'Mini-curso Gratuito: Estratégias para o manejo de dores crônicas nos pés';
        pageView();
    }, [] );

    useEffect( () => {
        setStatusMessage( null );
        setSubmitButton( button.default );
    }, [userEmail] );

    function registerEmail() {
        setStatusMessage( null );
        var apiUrl = process.env.NEXT_PUBLIC_API
            , data = {
                action: 'workshop_register',
                data: {email: userEmail}
            };
        if ( userEmail == '' ) {
            setStatusMessage( status.no_email );
            return;
        } else {
            setSubmitButton( button.loading );
            fetch( apiUrl, {
                method: 'post',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify( data )
            } )
                .then( res => res.json() )
                .then( res => {
                    if ( res?.ok ) {
                        setSubmitButton( button.success );
                        setStatusMessage( status.success );
                    } else if ( !res?.ok && res?.reason == 'user exists' ) {
                        setSubmitButton( button.retry );
                        setStatusMessage( status.user_exists );
                    } else {
                        setStatusMessage( status.server_error );
                        setSubmitButton( button.retry );
                    }
                } )
                .catch( err => {
                    console.log( err );
                    setStatusMessage( status.server_error );
                    setSubmitButton( button.retry );
                } );
        }
    }

    useEffect( () => setPageLoading( false ), [] );

    return (
        <main>
            {pageLoading && (
                <div className='fixed w-screen h-screen bg-primary-900 bg-opacity-50 backdrop-blur-3xl z-[999]'>
                    <Loading width={32} />
                </div>
            )}

            <Section id='workshop-header' className='bg-[linear-gradient(90deg,#ffffff,#dedede)] shadow-lg'>
                <Content className='relative z-10'>
                    <ContentDefault>

                        <Container id='workshop-signup' className='w-full max-w-[720px] max-[820px]:items-center max-[820px]:text-center'>
                            <span className='inline-flex items-end text-xl font-bold mb-4 text-[#1678ab]'>
                                <span className='w-8 h-8 palmilhando-logo'></span>
                                <span>Palmilhando® oferece:</span>
                            </span>
                            <h1 className='font-bold text-3xl mb-8 text-[#1678ab]'>Mini-curso Gratuito: Estratégias para o manejo de dores crônicas nos pés</h1>
                            <p className='text-[#1678ab] w-3/4'>Descubra como utilizar as palmilhas terapêuticas como uma estratégia eficaz.</p>
                            <h2 className='font-bold mt-8 text-[#1678ab]'>Dia 03 de agosto, às 9h, no YouTube - curso 100% online e gratuito</h2>
                            <Container id='workshop-signup-form' className='w-3/4 my-4 max-[820px]:w-full'>
                                <input type='email' placeholder='Seu melhor e-mail' className='rounded-full outline-none bg-white py-2 px-4 text-xl border-4 border-[color:#1678ab] mb-4 text-[#296D7F]' defaultValue='' onInput={e => setUserEmail( e.target.value )} />
                                <div className='w-full rounded-full font-bold text-xl text-center py-3 px-4 bg-[#1678ab] hover:brightness-90 duration-100 ease-out cursor-pointer shadow-sm' onClick={registerEmail}>{submitButton}</div>
                                {statusMessage && <p className='max-[820px]:!text-center text-sm my-4 text-[#1678ab]'>{statusMessage}</p>}
                            </Container>
                        </Container>

                    </ContentDefault>
                </Content>
            </Section>

            <Section id='workshop-includes'>
                <Content>
                    <ContentDefault className='flex flex-col items-center'>
                        <h1 className='font-bold text-3xl text-center'>Neste mini curso, você terá a oportunidade de:</h1>

                        <div className='flex items-center justify-between my-8 max-[820px]:!flex-col max-[820px]:!justify-start max-[820px]:!text-center'>
                            <div className='h-36 w-auto aspect-square glyph-pain m-4'></div>
                            <div className='w-full max-w-[720px]'>
                                <h1 className="text-2xl font-bold mb-2">Diferenciar os mecanismos de dor:</h1>
                                <p className="text-lg">Compreender as diversas origens e tipos de dor, facilitando diagnósticos mais precisos.</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between my-8 max-[820px]:!flex-col-reverse max-[820px]:!justify-start max-[820px]:!text-center'>
                            <div className='w-full max-w-[720px]'>
                                <h1 className="text-2xl font-bold mb-2">Entender o mecanismo de ação das palmilhas:</h1>
                                <p className="text-lg">Explorar como as palmilhas atuam na modulação da dor, proporcionando alívio e conforto aos pacientes.</p>
                            </div>
                            <div className='h-36 w-auto aspect-square glyph-insoles m-4'></div>
                        </div>

                        <div className='flex items-center justify-between my-8 max-[820px]:!flex-col max-[820px]:!justify-start max-[820px]:!text-center'>
                            <div className='h-36 w-auto aspect-square glyph-research m-4'></div>
                            <div className='w-full max-w-[720px]'>
                                <h1 className="text-2xl font-bold mb-2">Analisar evidências científicas:</h1>
                                <p className="text-lg">Revisar as mais recentes pesquisas e evidências sobre a eficácia das palmilhas no tratamento da dor persistente.</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-between my-8 max-[820px]:!flex-col-reverse max-[820px]:!justify-start max-[820px]:!text-center'>
                            <div className='w-full max-w-[720px]'>
                                <h1 className="text-2xl font-bold mb-2">Aplicar estratégias terapêuticas:</h1>
                                <p className="text-lg">Aprender as principais abordagens para o gerenciamento eficaz de pacientes com condições crônicas, melhorando a qualidade de vida e os resultados clínicos.</p>
                            </div>
                            <div className='h-36 w-auto aspect-square glyph-target m-4'></div>
                        </div>

                    </ContentDefault>
                </Content>
            </Section>

            <Section id='workshop-about' className='bg-[linear-gradient(45deg,#dedede,#ffffff)] text-[#1678ab] shadow-lg'>
                <Content>
                    <ContentDefault>
                        <Container className='w-full max-w-[720px]'>
                            <h1 className='font-bold text-3xl mb-8'>QUEM É O IDEALIZADOR DO MINI CURSO?</h1>
                            <p>
                                <strong>André Mendes</strong> é um fisioterapeuta formado em 2003, especialista em Fisioterapia Ortopédica, Mestre e Doutorando em Fisioterapia pela UNICID.
                                <wbr />Autor do livro <i>"Palmilhas Terapêuticas: Ciência e Prática Clínica"</i> e co-autor do livro <i>"Manual de Palmilhas e Calçados Ortopédicos"</i>.
                                <br /><br />Tem artigos publicados em revistas científicas internacionais e hoje se dedica ao estudo das Palmilhas Terapêuticas.
                                <br /><br />Fundador da Podoshop e do canal Palmilhando, tem o objetivo de traduzir ciência de boa qualidade para clínicos e, assim, fazer com que a prática baseada em evidências se fortaleça entre os profissionais que utilizam as palmilhas como recurso terapêutico.
                            </p>
                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='workshop-footer' className='p-6'>
                <span className='logo-palmilhando w-full h-6'></span>
            </Section>
        </main>
    );
}