'use client';
import {Section, Content, ContentDefault, Container, Badge, Img} from '@/lib/modules/layout-components';
import {page, scroll_to} from '@/lib/modules/page-load';
import {list, source} from '@/lib/modules/utils';
import {List} from '@/lib/modules/ui-components';
import Carousel from '@/lib/modules/carousel';
import {LINKS} from '@/lib/modules/constants';
import {useEffect} from 'react';
import '$/css/carousel.css';
import '$/css/curso.css';

export default function Page() {

    useEffect( () => page( 'Cursos Presenciais | Palmilhas Terapêuticas' ), [] );

    const SVG = {
        Grad: () =>
            <linearGradient id="linear-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#7dd3fc" />
                <stop offset="1" stopColor="#11E9DE" />
            </linearGradient>,

        Icon: ( {id = '', children} ) =>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-16 m-auto">
                <defs>
                    <clipPath id={'clippath' + id}>{children}</clipPath>
                    <SVG.Grad />
                </defs>
                <g clipPath={`url(#${'clippath' + id})`}>
                    <rect fill='url(#linear-gradient)' x='0' y='0' width='24' height='24' />
                </g>
            </svg>,

        Logo: ( {className = ''} ) =>
            <div
                className={list( 'bg-contain bg-center bg-no-repeat', className )}
                style={{backgroundImage: `url(${source( '/img/svg/logo_cursos_presenciais.svg' )})`}}>
            </div>,

        User: () =>
            <SVG.Icon id='-user'>
                <path
                    fill="none"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" />
            </SVG.Icon>,

        Calendar: () =>
            <SVG.Icon id='-calendar'>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" />
            </SVG.Icon>,

        External_Link: () =>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-6">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z" />
            </svg>,
    };

    const Slideshow = () =>
        <Container className='w-full relative max-[820px]:hidden'>
            <div className='w-auto aspect-square absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)_perspective(800px)_rotateY(8deg)]'>
                <video autoPlay muted loop width={480} height={480} className='rounded-lg shadow-[20px_70px_40px_-20px_rgba(0,0,0,0.2)] pointer-events-none'>
                    <source src={source( '/img/slideshow_cursos.mp4' )} type='video/mp4' />
                </video>
            </div>
        </Container>;

    return <main className='bg-[linear-gradient(45deg,#0a0a0a,#1E3050)] chuva-palmilhas before:blur-md before:opacity-30'>

        <Section id="cp-header">
            <Content className='relative z-10'>
                <ContentDefault>
                    <Container className='w-full max-w-[640px] text-center mx-auto'>
                        <SVG.Logo className='mx-auto my-4 h-24 w-full' />
                        <h1 className='text-4xl font-bold mb-4 max-[820px]:!text-2xl'>Uma experiência completa para aprender a avaliar, prescrever e confeccionar palmilhas terapêuticas.</h1>
                        <p className='font-extralight'>Dois dias intensos de teoria e muita prática de avaliação e confecção de palmilhas com diferentes técnicas de moldagem e configurações de elementos.</p>
                        <br />
                        <Container className='justify-center items-center'>
                            <button
                                onClick={() => scroll_to( '#cp-conteudo' )}
                                className='m-2 bg-[linear-gradient(45deg,#0474a4,#0986bf)] rounded-full py-2 px-4 shadow-lg w-max text-xl font-semibold border-b-4 border-t border-b-slate-700 border-t-sky-200'>
                                Saiba mais
                            </button>
                            <button
                                onClick={() => scroll_to( '#cp-mentorias' )}
                                className='underline underline-offset-4 m-2 rounded-full py-2 px-4 text-sm'>
                                Conheça nossas <strong>mentorias</strong>
                            </button>
                        </Container>
                    </Container>
                </ContentDefault>
            </Content>
        </Section>

        <Section id='cp-conteudo' className='bg-[linear-gradient(45deg,#1E3050,#0986bf)] rounded-3xl relative z-10 border-y-4 border-t-sky-300 border-b-slate-800 shadow-lg'>
            <Content className='relative z-10'>
                <ContentDefault>
                    <h1 className='text-3xl max-[820px]:text-2xl w-full max-w-3xl text-center mx-auto'>Tudo que você precisa saber sobre <strong>prescrição</strong>, <strong>confecção</strong> e <strong>aplicação</strong> de palmilhas terapêuticas</h1>
                    <div className='grid grid-cols-2 max-[820px]:!grid-cols-1 mt-8'>
                        <Container className='w-full max-w-[426px] m-4'>
                            <List className="chain">
                                <li>Anatomia e biomecânica para a prescrição de palmilhas</li>
                                <li>Prescrição de palmilhas para as diferentes queixas dos pés (fasciopatias, metatarsalgias, pés diabéticos, dentre outras)</li>
                                <li>Avaliação do pé/tornozelo para a prescrição de palmilhas</li>
                                <li>Prescrição de elementos e tipos de moldagens</li>
                                <li>Estudo de casos e discussão das prescrições dos diferentes tipos de palmilhas</li>
                                <li>Apresentação dos materiais e ferramentas (lixadeira, microrretífica, termoprensa, soprador e moldadores)</li>
                            </List>
                        </Container>
                        <Container className='w-full h-full justify-center'>
                            <Carousel isInfinite withIndicator visibleItemsCount={1} isFullWidth showControls={false}>
                                <div className='w-full h-full p-4'>
                                    <Img src='/img/[cursos_presenciais]_palmilha_1.webp' className='w-3/4 h-full m-auto' />
                                </div>
                                <div className='w-full h-full p-4'>
                                    <Img src='/img/[cursos_presenciais]_palmilha_2.webp' className='w-3/4 h-full m-auto' />
                                </div>
                                <div className='w-full h-full p-4'>
                                    <Img src='/img/[cursos_presenciais]_palmilha_3.webp' className='w-3/4 h-full m-auto' />
                                </div>
                                <div className='w-full h-full p-4'>
                                    <Img src='/img/[cursos_presenciais]_palmilha_4.webp' className='w-3/4 h-full m-auto' />
                                </div>
                            </Carousel>
                        </Container>
                    </div>

                    <div className='my-4'>
                        <button onClick={() => scroll_to( '#cursos-presenciais', 'center' )}
                            className='mx-auto bg-[linear-gradient(45deg,#0474a4,#0986bf)] rounded-full py-2 px-4 shadow-lg w-max text-lg font-semibold border-b-4 border-t border-b-slate-700 border-t-sky-200 flex items-center'>
                            Garanta já sua vaga
                        </button>
                    </div>

                </ContentDefault>
            </Content>
        </Section>

        <Section id='cp-mentorias'>
            <Content>
                <ContentDefault>
                    <div className='text-center max-w-3xl mx-auto'>
                        <h1 className='text-2xl mb-4'>Quer um <strong>conteúdo personalizado</strong> para <strong>tirar suas dúvidas</strong> ou para<strong> treinar a sua equipe</strong>?</h1>
                        <h2>Conheça nossas mentorias particulares.</h2>
                    </div>

                    <div className='max-w-3xl mx-auto mb-16'>
                        <div>
                            <div className='p-4 border border-sky-900 rounded-lg my-4 relative bg-slate-900 pt-16 min-[821px]:py-8 min-[821px]:pl-16 mt-16 min-[821px]:ml-8'>
                                <div className='absolute z-20 top-0 min-[821px]:top-1/2 left-1/2 min-[821px]:left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-lg border-b-4 border-t border-t-sky-900 border-b-neutral-950 bg-[linear-gradient(45deg,#0f172a,#0a3345)] shadow-lg flex items-center'>
                                    <SVG.User />
                                </div>
                                <div className='relative z-10'>
                                    <h2 className='text-xl font-semibold mb-4'>O conteúdo que <mark className='text-sky-300'>você</mark> precisa.</h2>
                                    <p>O conteúdo abordado será definido com base nas suas necessidades individuais, em uma reunião particular com o seu mentor.</p>
                                </div>
                            </div>
                            <div className='p-4 border border-sky-900 rounded-lg my-4 relative bg-slate-900 pt-16 min-[821px]:py-8 min-[821px]:pl-16 mt-16 min-[821px]:ml-8'>
                                <div className='absolute z-20 top-0 min-[821px]:top-1/2 left-1/2 min-[821px]:left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-lg border-b-4 border-t border-t-sky-900 border-b-neutral-950 bg-[linear-gradient(45deg,#0f172a,#0a3345)] shadow-lg flex items-center'>
                                    <SVG.Calendar />
                                </div>
                                <div className='relative z-10'>
                                    <h2 className='text-xl font-semibold mb-4'>Um <mark className='text-sky-300'>dia inteiro</mark> dedicado ao <mark className='text-sky-300'>seu aprendizado</mark>.</h2>
                                    <p>
                                        Após a definição do conteúdo, sua mentoria ficará programada para ser ministrada em um dia, das 8h às 18h, com uma breve pausa para o almoço.<br />
                                        Durante esse período, todo o conteúdo planejado será abordado e você poderá tirar dúvidas diretamente com o seu mentor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => scroll_to( '#mentorias', 'center' )}
                        className='mx-auto bg-[linear-gradient(45deg,#0474a4,#0986bf)] rounded-full py-2 px-4 shadow-lg w-max text-lg font-semibold border-b-4 border-t border-b-slate-700 border-t-sky-200 flex items-center'>
                        Agende já sua mentoria
                    </button>

                </ContentDefault>
            </Content>
        </Section>

        <Section id="cp-sobre" className='py-32 px-8 flex items-center max-[820px]:pt-[120vw] max-[820px]:pb-8 relative z-20 shadow-lg border-b border-sky-900 rounded-xl'>
            <Content className='relative z-10'>
                <ContentDefault>
                    <Container className='w-1/2 max-[820px]:w-[80%] max-[426px]:w-[96%] pt-8 max-[820px]:pt-0'>
                        <p className='font-extralight'>Olá, meu nome é</p>
                        <h1 className='text-left grad-text font-bold text-3xl'>ANDRÉ MENDES</h1>
                        <div className="divider left"></div>
                        <p>
                            Sou fisioterapeuta especialista em fisioterapia ortopédica com 20 anos de carreira.
                            Sou mestre e doutorando em fisioterapia e autor do livro <i>Palmilhas Terapêuticas: Ciência e Prática Clínica</i>, sócio-criador da Podoshop® e do Palmilhando® com 15 anos de experiência na prescrição e confecção de palmilhas terapêuticas.
                        </p>
                    </Container>
                </ContentDefault>
            </Content>
        </Section>

        <Section id='cp-investimento' className='pt-8 chuva-palmilhas before:blur-md before:opacity-30'>
            <Content className='relative z-10'>
                <ContentDefault>
                    <h1 className='grad-text font-bold text-center text-3xl'>SEU INVESTIMENTO</h1>
                    <div className='grid grid-cols-2 max-[820px]:grid-cols-1 mt-12 gap-12 min-[821px]:gap-4'>

                        <Container className='w-full max-w-[426px] bg-[linear-gradient(45deg,#0f172a,#0a3345)] self-start justify-self-end shadow-lg' id='cursos-presenciais'>
                            <div className="flex flex-col items-center justify-between border border-sky-900 rounded-xl backdrop-brightness-50 shadow-md text-center h-full relative ease-out pt-12">
                                <Badge className='border border-inherit rounded-full !w-max py-2 px-4 !bg-[color:#0e1b2c]'>
                                    <p className='grad-text font-semibold'>CURSOS PRESENCIAIS</p>
                                </Badge>
                                <Img src='/img/svg/logo_cursos_presenciais.svg' className='w-3/4' />
                                <Container className="my-4">
                                    <h1 className='text-3xl font-bold'><mark className="font-light text-white">R$</mark> 3000<sup><small>,00</small></sup></h1>
                                    <h2 className='text-xs font-light mt-4'>à vista ou em até 12x</h2>
                                </Container>
                                <a href={LINKS.whatsapp} target="_blank" referrerPolicy='noopener noreferrer'
                                    className='m-2 bg-[linear-gradient(45deg,#0474a4,#0986bf)] rounded-full py-2 px-4 shadow-lg w-max text-xl font-semibold border-b-4 border-t border-b-slate-700 border-t-sky-200'
                                >GARANTIR MINHA VAGA</a>
                                <Img src='/img/pagamento.webp' className='w-1/2 opacity-30 mt-8' />
                                <br />
                            </div>
                        </Container>

                        <Container className='w-full max-w-[426px] bg-[linear-gradient(45deg,#0f172a,#0a3345)] self-start justify-self-start shadow-lg' id='mentorias'>
                            <div className="flex flex-col items-center justify-between border border-sky-900 rounded-xl backdrop-brightness-50 shadow-md text-center h-full relative ease-out pt-12">
                                <Badge className='border border-inherit rounded-full !w-max py-2 px-4 !bg-[color:#0e1b2c]'>
                                    <p className='grad-text font-semibold'>AGENDE SUA MENTORIA</p>
                                </Badge>
                                <Img src='/img/svg/logo_mentorias.svg' className='w-3/4' />
                                <br />
                                <Container className="my-4">
                                    <div className='mb-4'>
                                        <div className='mb-4'>
                                            <h1 className='text-2xl font-bold grad-text'>MENTORIAS INDIVIDUAIS</h1>
                                        </div>
                                        <span className='text-4xl font-bold flex items-center align-bottom justify-center'><mark className="font-light text-white">R$</mark>&nbsp;2000<small className='font-light'>,00</small><span className='font-extralight text-sm ml-2'></span></span>
                                        <div className='mt-4'>
                                            <span className='text-xs font-light'>à vista ou em até 12x</span>
                                            <span className='font-extralight text-xs ml-2'>(Um dia)</span>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div>
                                        <div className='mb-4'>
                                            <h1 className='text-2xl font-bold grad-text'>TREINE SUA EQUIPE</h1>
                                            <small>- ATÉ 3 PARTICIPANTES -</small>
                                        </div>
                                        <span className='text-4xl font-bold flex justify-center items-center'><mark className="font-light text-white">R$</mark>&nbsp;1600<small className='font-light'>,00</small>
                                            <span className='font-extralight text-sm ml-2'>/ participante</span>
                                        </span>
                                        <div className='mt-4'>
                                            <span className='text-xs font-light'>à vista ou em até 12x</span>
                                            <span className='font-extralight text-xs ml-2'>(Um dia)</span>
                                        </div>
                                    </div>
                                </Container>
                                <a href={LINKS.mentorias} target="_blank" referrerPolicy='noopener noreferrer'
                                    className='m-2 bg-[linear-gradient(45deg,#0474a4,#0986bf)] rounded-full py-2 px-4 shadow-lg w-max text-xl font-semibold border-b-4 border-t border-b-slate-700 border-t-sky-200'
                                >QUERO AGENDAR AGORA</a>
                                <Img src='/img/pagamento.webp' className='w-1/2 opacity-30 mt-8' />
                                <br />
                            </div>
                        </Container>
                    </div>
                </ContentDefault>
            </Content>
        </Section>

        <Section id='cp-footer'>
            <span className='logo-palmilhando w-32 h-32 mx-auto'></span>
        </Section>
    </main>;
}