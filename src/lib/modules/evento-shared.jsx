import {Section, Content, ContentDefault, Grid, Container} from './layout-components';
import {Loading} from './layout-components';
import {scroll_to} from './page-load';
import {ASSET_PREFIX} from '@/lib/modules/constants';

export const VideoEvento = (
    <iframe
        className='outline-none aspect-video w-full max-[820px]:!w-screen rounded-lg relative z-50'
        src="https://www.youtube.com/embed/ELc7U9NgONY"
        allow='autoplay;picture-in-picture;web-share'
        allowFullScreen
    ></iframe>
);

export function toggleFulscreen( contentRef, setModalActive ) {
    let scrollEvents = ['wheel', 'scroll', 'keydown']
        , scrollKeys = ["Space", "ArrowUp", "ArrowDown"]
        , handleClickOutside = e => !contentRef.current?.contains( e.target ) ? setModalActive( false ) : null
        , preventScroll = e => scrollEvents.includes( e.type ) && e.type === 'keydown'
            ? ( e.code === 'Escape'
                ? setModalActive( false )
                : scrollKeys.includes( e.code ) && e.preventDefault()
            ) : e.preventDefault()
        , toggle = {
            add: () => (
                document.addEventListener( 'mousedown', handleClickOutside ),
                scrollEvents.forEach( e => document.addEventListener( e, preventScroll, {passive: false} ) )
            ),
            remove: () => (
                document.removeEventListener( 'mousedown', handleClickOutside ),
                scrollEvents.forEach( e => document.removeEventListener( e, preventScroll, {passive: false} ) )
            )
        };

    return toggle;

}

export function Banner() {
    return (
        <div className='absolute top-0 left-0 w-screen h-auto overflow-clip mix-blend-soft-light opacity-75 z-10 max-[820px]:!h-full'>
            <video autoPlay muted playsInline loop className='inline-block align-baseline w-full relative max-[820px]:!h-full max-[820px]:!w-full object-cover bg-cover'>
                <source src={ASSET_PREFIX + 'img/evt_banner.webm'} />
            </video>
        </div>

    );
}

export function Fullscreen( {content, contentRef, containerRef, onClick} ) {
    return (
        <div className='bg-[rgb(0,0,0,0.5)] backdrop-blur-lg fixed z-[999] top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center px-32 py-[2.5%] max-[820px]:!p-0' ref={containerRef}>
            <div className='w-full h-full flex items-center justify-center relative'>
                <div className='h-auto w-full relative' ref={contentRef}>
                    <div className='w-12 h-12 absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 max-[820px]:!-translate-x-1/2 max-[820px]:!-translate-y-full'>
                        <span className='w-full text-right cursor-pointer' onClick={onClick}><i className="fa-regular fa-circle-xmark text-2xl" aria-hidden="true"></i></span>
                    </div>
                    <Loading width={32} />
                    {content}
                </div>
            </div>
        </div>
    );
}

export const Checkout = () => (
    <div
        className='block w-max py-4 px-8 my-8 mx-auto rounded-full shadow-lg bg-sky-700 grad-alt cursor-pointer hover:brightness-105 hover:-scale-y-[5px] duration-150 ease-out'
        onClick={() => scroll_to( '#evt-valor' )}
    ><span className='m-auto text-center text-white font-bold'>QUERO GARANTIR MINHA VAGA</span></div>
);

export function Footer() {
    return (
        <Section id='evt-footer'>
            <div className='w-36 m-auto text-center'>
                <img src={ASSET_PREFIX + 'img/svg/logo_palmilhando.svg'} alt='' draggable='false' />
            </div>
        </Section>
    );
}

export function Palestrantes() {
    const defaultUserProfile = ASSET_PREFIX + 'img/default_user.jpg';
    const defaultText = 'Teremos mais informações em breve. Fique ligado!';
    const defaultOccupation = '?';
    const Palestrante = ( {children = defaultText, src = defaultUserProfile, name = 'Palestrante não confirmado', occupation = defaultOccupation, theme = 'Tema da palestra'} ) => (
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
    );
    return (
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
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Fisioterapeuta, especialista em Fisioterapia Ortopédica,
                                        Mestre e doutorando em Fisioterapia, sócio fundador da Podoshop e do Palmilhando.
                                        Autor do livro Palmilhas Terapêuticas: ciência e prática clínica.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/felipe-barcelos.webp'}
                                    name='Felipe Barcelos'
                                    occupation='Médico Ortopedista'
                                    theme='O pé da criança com doenças neuromusculares'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Médico ortopedista com subespecialização em ortopedia pediátrica e doenças neuromusculares pelo Ensino Einstein.
                                        Médico do corpo clínico do Hospital Israelita Albert Einstein.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/maria-lucoveis.webp'}
                                    name='Maria Lucóveis'
                                    occupation='Enfermeira e fisioterapeuta'
                                    theme='Recomendação de recursos offloading para pés de risco'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Fisioterapeuta e Enfermeira Estomaterapeuta,
                                        Mestre em Ciências pela Universidade Federal de São Paulo,
                                        Master em pé diabético pela <i>Universidad Complutense de Madrid</i>,
                                        doutoranda em Ciências da Reabilitação pela Universidade de São Paulo.
                                        Socia proprietária da Bem Estar dos Pés - Serviços de Enfermagem.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/george-sabino.webp'}
                                    name='George Sabino'
                                    occupation='Fisioterapeuta'
                                    theme='Utilização de I.A. nas avaliações clínicas do pé e da marcha'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Fisioterapeuta, Doutor em Ciências da Reabilitação UFMG,
                                        Pós doutorando em Ciências da Saúde CMMG.
                                        Sócio fundador da Propulsão.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/brenda-braga.webp'}
                                    name='Brenda Braga'
                                    occupation='Fisioterapeuta'
                                    theme='A influência dos calçados infantis na saúde dos pés'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Fisioterapeuta ortesista, especialista em órteses suropodálicas.
                                        Empreendedora e sócia da Gente Miúda Kids Shoes.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/leonardo-signorini.webp'}
                                    name='Leonardo Signorini'
                                    occupation='Fisioterapeuta'
                                    theme='As palmilhas no futebol profissional'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Fisioterapeuta, especialista em Fisioterapia Ortopédica e Esportiva.
                                        Dono da Dr. Pés palmilhas.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/leandro_fukusawa.webp'}
                                    name='Leandro Fukusawa'
                                    occupation='Fisioterapeuta'
                                    theme='Fatores psicossociais nas lesões de tornozelo e pé'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Graduado pela Centro Universitário São Camilo
                                        Especialização e Aprimoramento pela Santa Casa de São Paulo
                                        Mestre pela UNICID
                                        Doutorando em Ciências da Saúde pela Santa Casa de São Paulo
                                        Sócio-Fundador do Grupo Superador
                                        Diretor de Produto do Portal Fisioemortopedia.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/juliana_azevedo.webp'}
                                    name='Juliana Azevedo'
                                    occupation=''
                                    theme='Ortoplastia como recurso para o cuidado dos pés'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Doutoranda e Mestre pela Escola Paulista de Medicina - UNIFESP,
                                        Master em Podologia Pediatrica pela Universidade de Barcelona - UB,
                                        Especialista em Biomecânica pela Universidade Estadual do Amazonas - UEA,
                                        Enfermeira Podiatra do Comitê Paralímpico Brasileiro - CPB,
                                        Co-autora do primeiro Manual de Podiatria do Brasil.
                                    </p>
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
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Estrategista digital e copywriter da Podoshop e do Palmilhando.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/jordache-murta.webp'}
                                    name='Jordache Murta'
                                    occupation='Publicitário'
                                    theme='Estratégias para construir a sua autoridade no digital'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Publicitário, especialista em marketing digital.
                                        Há 20 anos trabalhando com marketing,
                                        atua em estratégias digitais para construção de autoridade,
                                        vendas e captação de novos clientes de forma orgânica.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/natalia-faro.webp'}
                                    name='Natália Faro'
                                    occupation='Fisioterapeuta'
                                    theme='Ecossistema empreendedor: Como fomentar seu crescimento'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Fisioterapeuta, empreendedora há 15 anos,
                                        influenciadora e fundadora da Verticalle - Palmilhas.
                                        Experiência de 7 anos com palmilhas personalizadas e criadora das palmilhas dupla face para saltos.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/myrlla-moreira.webp'}
                                    name='Myrlla Moreira'
                                    occupation='Fisioterapeuta'
                                    theme='Como ser um profissional de referência e ter um consultório de sucesso'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Fisioterapeuta formada há 11 anos, empreendedora,
                                        especialista em coluna vertebral pela Santa Casa de São Paulo.
                                        Criadora do curso on-line de capacitação Escoliose na Prática.
                                    </p>
                                </Palestrante>
                                <Palestrante
                                    src={ASSET_PREFIX + 'img/palestrantes-2024/clayton-fuzetti.webp'}
                                    name='Clayton Fuzetti'
                                    occupation='Fisioterapeuta e CEO da Podoshop®'
                                    theme='Planejando as finanças do seu futuro'
                                >
                                    <p className='text-sm' style={{lineHeight: '24px'}}>
                                        Fisioterapeuta, especialista em Fisioterapia Ortopédica,
                                        MBA em gestão empresarial.
                                        Sócio fundador da Podoshop e do Palmilhando.
                                    </p>
                                </Palestrante>
                            </Grid>
                        </Container>

                    </Container>
                </ContentDefault>
            </Content>
        </Section>
    );
}