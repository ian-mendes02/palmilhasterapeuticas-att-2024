"use client";
import {Section, Content, ContentDefault, Container} from '@/lib/modules/layout-components';
import {useEffect} from 'react';
import { page } from '@/lib/modules/page-load';
export default function Main() {
    useEffect( () => page('Obrigado | Mini-curso Gratuito: Estratégias para o manejo de dores crônicas nos pés'), [] );
    return (
        <main>
            <Section>
                <Content>
                    <ContentDefault className='px-4'>
                        <div className='w-32 max-[820px]:!w-full max-[820px]:!mb-8'>
                            <span className="logo-palmilhando w-full h-12"></span>
                        </div>
                        <h1 className='font-bold text-xl max-[820px]:!text-left'>Falta pouco para concluir sua inscrição!</h1>
                        <h2 className='my-4'>Siga os passos a seguir para garantir sua participação no nosso workshop.</h2>
                        <Container>
                            <p className='inline-flex items-end max-[820px]:!items-start'><span className='font-bold text-xl mr-1'>1.</span>&nbsp;Clique no botão abaixo para entrar no grupo de WhatsApp e receber informações e materiais complementares do evento.</p>
                            <a
                                href='https://chat.whatsapp.com/EugnKFN257kIRSmwvjAkkH'
                                id='workshop-whatsapp'
                                className='bg-[#46c15c] rounded-full hover:brightness-75 duration-100 ease-out py-2 px-4 w-max font-semibold my-4 max-[820px]:!w-full text-center'>
                                <i className='fa-brands fa-whatsapp mr-2' aria-hidden></i>
                                ENTRAR NO GRUPO
                            </a>
                        </Container>
                        <Container>
                            <p className='inline-flex items-end max-[820px]:!items-start'><span className='font-bold text-xl mr-1'>2.</span>&nbsp;Siga as orientações enviadas no seu e-mail.</p>
                            <p className='text-xs my-4'>Obs: Caso não tenha recebido o e-mail na sua caixa de entrada, verifique a sua caixa de spam.</p>
                        </Container>
                    </ContentDefault>
                </Content>
            </Section>
        </main>
    );
}