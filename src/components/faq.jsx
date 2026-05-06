import React from 'react'
import Accordion from './accordion'
import CommonTitle from './common-title';

export default function Faq() {
  const item = [
    {
      title: 'What are commodities?',
      body: `
        <p>Commodities are raw materials or primary agricultural products that can be bought and sold in the financial markets. They are typically used in the production of other goods and services and are traded on commodity exchanges around the world. </p>
        <p>Some examples include metals (gold, silver, and platinum), energy sources (coal, crude oil, and natural gas), agricultural products (soybeans, corn, and wheat), and livestock and animal products (cattle, eggs, and milk).</p>
      `,
    },
    {
      title: 'How does commodity trading work?',
      body: `
        <p>Commodities are raw materials or primary agricultural products that can be bought and sold in the financial markets. They are typically used in the production of other goods and services and are traded on commodity exchanges around the world. </p>
        <p>Some examples include metals (gold, silver, and platinum), energy sources (coal, crude oil, and natural gas), agricultural products (soybeans, corn, and wheat), and livestock and animal products (cattle, eggs, and milk).</p>
      `,
    },
    {
      title: 'How much money do i need to start commodity trading?',
      body: `
        <p>Commodities are raw materials or primary agricultural products that can be bought and sold in the financial markets. They are typically used in the production of other goods and services and are traded on commodity exchanges around the world. </p>
        <p>Some examples include metals (gold, silver, and platinum), energy sources (coal, crude oil, and natural gas), agricultural products (soybeans, corn, and wheat), and livestock and animal products (cattle, eggs, and milk).</p>
      `,
    },
  ]
  return (
    <div className="common-padding">
      <div className='max-w-215 mx-auto px-3'>
        <CommonTitle className='text-center' title="Learn About Commodities Trading" />
        <Accordion items={item} activeItem={0} />
      </div>
    </div>
  )
}