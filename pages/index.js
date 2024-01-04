import MainHomePage from '@/components/mainHomePage/mainHomePage'
import React from 'react'
import AboutUS from '@/components/about/about'
import Services from '@/components/services/services'
import Offer from '@/components/offer/offer'
import Menu from '@/components/menu/menu'
import Reserve from '@/components/reserve/reserve'
import Testimonialmone from '@/components/Testimonialmone/Testimonialmone'

export default function Home({data}) {
  return (
   <>
      <MainHomePage />
      <AboutUS />
      <Services services={data.services}/>
      <Offer />
      <Menu menu={data.menu}/>
      <Reserve />
      <Testimonialmone comments={data.comments} />
   </>
  )
}

export async function getStaticProps() {
  const resServices = await fetch("http://localhost:4000/services");
  const services = await resServices.json();

  const resMenu = await fetch("http://localhost:4000/menu");
  const menu = await resMenu.json();

  const resComments = await fetch("http://localhost:4000/comments");
  const comments = await resComments.json();

  return {
    props: {
      data: {
        services,
        menu,
        comments,
      },
    },
    revalidate: 60 * 60 * 12, // Second
  };
}

