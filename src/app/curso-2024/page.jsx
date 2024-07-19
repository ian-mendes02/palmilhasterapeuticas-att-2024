'use client';
import {Section, Content, ContentDefault, Container, Wrapper, Badge} from '@/lib/modules/layout-components';
import {Button, List} from '@/lib/modules/ui-components';
import Carousel from '@/lib/modules/carousel';
import React from 'react';
import '$/css/carousel.css';
import '$/css/curso.css';

export default function Page() {
    const $ = (el) => document.querySelector(el);

    const ASSET_PREFIX = process.env.NEXT_PUBLIC_ASSET_PREFIX;

    React.useEffect(() => {
        !function(e, t, a, n, g) {e[n] = e[n] || [], e[n].push({"gtm.start": (new Date).getTime(), event: "gtm.js"}); var m = t.getElementsByTagName(a)[0], r = t.createElement(a); r.async = !0, r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-5TTGRP4", m.parentNode.insertBefore(r, m);}(window, document, "script", "dataLayer");
        document.title = 'Cursos Presenciais | Palmilhas Terapêuticas';
    }, []);

    const locations = React.useMemo(() => {
        return {
            select: {
                cityName: '',
                location: '',
                purchaseLink: '',
                mapData: null
            },
            sao_jose_dos_campos: {
                cityName: 'São José dos Campos - SP',
                location: 'Grupo Equality',
                eventDate: '23 e 24 de Fevereiro',
                endDate: Date.parse('2024-02-24T00:00:00.000-03:00'),
                purchaseLink: 'https://www.sympla.com.br/curso-presencial-de-palmilhas-terapeuticas__2299829',
                mapData: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.682361024928!2d-45.91256568822172!3d-23.21824374899062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc358248ce2ec5%3A0x74eaa5023e4ca7eb!2sGrupo%20Equality!5e0!3m2!1sen!2sbr!4v1706649149402!5m2!1sen!2sbr"
            },
            curitiba: {
                cityName: 'Curitiba - PR',
                location: 'Confidence Hotel Batel',
                eventDate: '15 e 16 de Março',
                endDate: Date.parse('2024-03-16T00:00:00.000-03:00'),
                purchaseLink: 'https://www.sympla.com.br/curso-presencial-de-palmilhas-terapeuticas__2299832',
                mapData: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1268876561558!2d-49.28252522258879!3d-25.43402104471572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce40ac8a88ea9%3A0xfe6a996ac4f7f5fd!2sAlameda%20Dr.%20Carlos%20de%20Carvalho%2C%20784%20-%20Centro%2C%20Curitiba%20-%20PR%2C%2080430-180!5e0!3m2!1sen!2sbr!4v1708037069655!5m2!1sen!2sbr"
            },
            belo_horizonte: {
                cityName: 'Belo Horizonte - MG',
                location: null,
                eventDate: '5 e 6 de Abril',
                endDate: Date.parse('2024-04-06T00:00:00.000-03:00'),
                purchaseLink: 'https://wa.me/553181075257',
                mapData: null
            },
            porto_alegre: {
                cityName: 'Porto Alegre - RS',
                location: null,
                eventDate: '18 e 19 de Maio',
                endDate: Date.parse('2024-05-19T00:00:00.000-03:00'),
                purchaseLink: '',
                mapData: null
            }
        };
    }, []);

    const [option, setOption] = React.useState('select');

    const [optionData, setOptionData] = React.useState(locations.curitiba);

    const MapContent = () => (
        optionData.mapData
            ? <iframe src={optionData.mapData} style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full rounded-md'></iframe>
            : <span className='absolute-center text-center'>&#x26A0;<br />Mapa indisponível</span>
    );

    React.useEffect(
        () => option == "select"
            ? setOptionData(locations.porto_alegre)
            : setOptionData(locations[option])
        , [option]
    );

    return (
        <div>
            <div className='bg-[linear-gradient(#0a0a0a,#1E3050)]'>
                <Section id="cp-header" className='h-[512px] flex flex-col justify-center pb-0 pt-0'>
                    <Content className='relative z-10'>
                        <ContentDefault>
                            <Wrapper className='pt-8'>
                                <Container className='w-[32rem] max-[1024px]:w-96 max-[820px]:w-full px-8 mb-8 max-[820px]:text-center'>
                                    <img src={ASSET_PREFIX + '/img/svg/logo_cursos_presenciais.svg'} alt='' draggable='false' />
                                    <br />
                                    <p>O curso de Palmilhas Terapêuticas é uma experiência completa para quem quer aprender a avaliar, prescrever e confeccionar palmilhas terapêuticas.</p>
                                    <br />
                                    <p>Dois dias intensos de teoria e muita prática de avaliação e confecção de palmilhas com diferentes técnicas de moldagem e configurações de elementos.</p>
                                    <br />
                                    <Button onClick={() => $('#cp-investimento').scrollIntoView({block: 'start'})}>GARANTA JÁ A SUA VAGA!</Button>
                                </Container>
                            </Wrapper>
                        </ContentDefault>
                    </Content>
                </Section>
                <Section id="cp-proposta" className='pt-0'>
                    <Content>
                    </Content>
                </Section>
            </div>

            <Section id='cp-conteudo' className='bg-[linear-gradient(#0c6b96,transparent)] pb-0'>
                <Content>
                    <ContentDefault>
                        <div className="w-full text-center">
                            <h1 className='grad-text mx-auto my-4 font-bold text-3xl'>CONTEÚDO DO CURSO</h1>
                            <p className='font-extralight w-1/2 mx-auto max-[820px]:w-full'>Confira aqui tudo o que você vai aprender sobre prescrição, confecção e aplicação de palmilhas terapêuticas:</p>
                        </div>
                        <br />
                        <div className="divider max-[820px]:mb-8"></div>
                        <Wrapper className='items-center justify-evenly'>
                            <Container className='w-full'>
                                <Carousel isInfinite withIndicator visibleItemsCount={1} isFullWidth>
                                    <div className='w-full h-auto'>
                                        <img src={ASSET_PREFIX + '/img/[cursos_presenciais]_palmilha_1.webp'} alt='' draggable='false' className='w-3/4 h-auto m-auto' />
                                    </div>
                                    <div className='w-full h-auto'>
                                        <img src={ASSET_PREFIX + '/img/[cursos_presenciais]_palmilha_2.webp'} alt='' draggable='false' className='w-3/4 h-auto m-auto' />
                                    </div>
                                    <div className='w-full h-auto'>
                                        <img src={ASSET_PREFIX + '/img/[cursos_presenciais]_palmilha_3.webp'} alt='' draggable='false' className='w-3/4 h-auto m-auto' />
                                    </div>
                                    <div className='w-full h-auto'>
                                        <img src={ASSET_PREFIX + '/img/[cursos_presenciais]_palmilha_4.webp'} alt='' draggable='false' className='w-3/4 h-auto m-auto' />
                                    </div>
                                </Carousel>
                            </Container>
                        </Wrapper>
                        <Wrapper className='justify-evenly items-center'>
                            <Container className='w-[40%] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4'>
                                <h2 className='grad-text font-bold text-xl'>Além da confecção de palmilhas, ainda teremos:</h2>
                                <div className="divider left"></div>
                                <br />
                                <List className="chain">
                                    <li>Anatomia e biomecânica para a prescrição de palmilhas</li>
                                    <li>Prescrição de palmilhas para as diferentes queixas dos pés (fasciopatias, metatarsalgias, pés diabéticos, dentre outras)</li>
                                    <li>Avaliação do pé/tornozelo para a prescrição de palmilhas</li>
                                    <li>Prescrição de elementos e tipos de moldagens</li>
                                    <li>Estudo de casos e discussão das prescrições dos diferentes tipos de palmilhas</li>
                                    <li>Apresentação dos materiais e ferramentas (lixadeira, microrretífica, termoprensa, soprador e moldadores)</li>
                                </List>
                            </Container>
                            <Container className='w-[40%] h-[480px] max-[425px]:h-[240px] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 relative max-[820px]:hidden'>
                                <div className='w-9/12 aspect-square absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)_perspective(800px)_rotateY(-8deg)]'>
                                    <video autoPlay muted loop width={480} height={480} className='rounded-lg shadow-[20px_70px_40px_-20px_rgba(0,0,0,0.2)]'>
                                        <source src='/img/slideshow_cursos.mp4' type='video/mp4' />
                                    </video>
                                </div>
                            </Container>
                        </Wrapper>

                    </ContentDefault>
                </Content>
            </Section>

            <Section id="cp-sobre" className='py-32 px-8 flex items-center max-[820px]:pt-[120vw] max-[820px]:pb-8 border-b border-cyan-100'>
                <Content className='relative z-10'>
                    <ContentDefault>
                        <Container className='w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%] pt-8 max-[820px]:pt-0'>
                            <p className='font-extralight'>Olá, meu nome é</p>
                            <h1 className='text-left grad-text font-bold text-3xl'>ANDRÉ MENDES</h1>
                            <div className="divider left"></div>
                            <p>Sou fisioterapeuta especialista em fisioterapia ortopédica com 20 anos de carreira. Sou mestre e doutorando em fisioterapia e autor do livro <i>Palmilhas Terapêuticas: Ciência e Prática Clínica</i>, sócio-criador da Podoshop® e do Palmilhando® com 15 anos de experiência na prescrição e confecção de palmilhas terapêuticas.</p>
                        </Container>
                    </ContentDefault>
                </Content>
            </Section>

            <Section id='cp-investimento'>
                <Content>
                    <ContentDefault>
                        <Wrapper className='items-center justify-evenly'>
                            <Container className='w-[40%] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:mx-0'>
                                <div className="flex flex-col items-center justify-between px-2 pb-[5%] pt-[10%] border border-cyan-100 rounded-xl backdrop-brightness-50 shadow-md text-center h-full relative endDate-200 ease-out">
                                    <Badge className='border border-inherit rounded-full !w-max py-2 px-4 !bg-[color:#0e1b2c]'>
                                        <p className='grad-text grad-slide'>SEU INVESTIMENTO</p>
                                    </Badge>
                                    <img src={ASSET_PREFIX + '/img/svg/logo_cursos_presenciais.svg'} alt='' draggable='false' className='w-1/2' />
                                    <br />
                                    <div className="divider"></div>
                                    <Container className="my-4">
                                        <h1 className='text-3xl font-bold'><mark className="font-light text-white">R$</mark> 3000<sup><small>,00</small></sup></h1>
                                        <h2 className='text-xs font-light mt-4'>ou em até 12x (Parcelado pelo Sympla)</h2>
                                    </Container>
                                    <div className="divider"></div>
                                    <br />
                                    <select name="localCurso" defaultValue='select' className='cor-4 rounded-lg shadow-md w-9/12 p-2 cursor-pointer' onChange={(e) => {
                                        setOption(e.target.value);
                                        if (window.visualViewport.width <= 820) {$('#location-info').scrollIntoView({block: 'start'});}
                                    }}>
                                        <option value="select" className='cursor-pointer'>Selecione sua cidade...</option>
                                        {/* <option value="sao_jose_dos_campos">São José Dos Campos - SP</option> */}
                                        <option value="curitiba">Curitiba - PR</option>
                                        {/* <option value="belo_horizonte">Belo Horizonte - MG</option>
                                        <option value="porto_alegre">Porto Alegre - RS</option> */}
                                    </select>
                                    <br />
                                    <p className='text-sm font-extralight w-9/12'>Selecione uma opção para ver detalhes sobre o local do evento</p>
                                    <br />
                                    <a href={optionData.purchaseLink} target="_blank"
                                        className={
                                            `relative z-10 w-9/12 mx-auto py-4 px-8 rounded-xl border font-bold border-cyan-100 shadow-md bg-[linear-gradient(to_right,var(--grad-1))] bg-[length:150%] select-none
                                                ${option == 'select' ? 'saturate-0 opacity-50 cursor-not-allowed pointer-events-none' : 'hover:scale-[101%] hover:brightness-110 hover:translate-y-[-1px] endDate-100 ease-out cursor-pointer'}`
                                        }>GARANTIR MINHA VAGA</a>
                                    <img src={ASSET_PREFIX + '/img/pagamento.webp'} alt='' draggable='false' className='w-1/2 opacity-30 mt-8' />
                                    <br />
                                </div>
                            </Container>
                            <Container className='w-[40%] max-[820px]:w-[80%] max-[426px]:w-[96%] m-4 max-[820px]:mx-0' id='location-info'>
                                <Container className='w-full max-[820px]:items-center'>
                                    <h1 className='font-bold text-3xl'>{option == "select" ? 'PRÓXIMO CURSO:' : 'LOCAL SELECIONADO:'}</h1>
                                    <h1 className='grad-text text-3xl max-[820px]:text-2xl my-4'>{optionData.cityName}</h1>
                                    <div className="divider"></div>
                                    <Wrapper className='items-center justify-start max-[820px]:justify-center w-full'>
                                        <Wrapper className="items-center flex-nowrap w-max m-2">
                                            <img src={ASSET_PREFIX + '/img/svg/map_pin.svg'} alt='' draggable='false' className='w-6 h-6 mr-4' />
                                            <h2 className='font-extralight max-[820px]:text-base'>{optionData.location || 'Local indisponível'}</h2>
                                        </Wrapper>
                                        <Wrapper className="items-center flex-nowrap w-max m-2">
                                            <img src={ASSET_PREFIX + '/img/svg/calendar.svg'} alt='' draggable='false' className='w-6 h-6 mr-4' />
                                            <h2 className='font-extralight max-[820px]:text-base'>{optionData.eventDate || 'Data indisponível'}</h2>
                                        </Wrapper>
                                    </Wrapper>
                                    <div className='rounded-md w-full aspect-video my-4 relative bg-[color:#0e1b2c]'>
                                        <MapContent />
                                    </div>
                                </Container>
                                <br />
                            </Container>
                        </Wrapper>
                    </ContentDefault>
                </Content>
            </Section>

        </div>
    );
}