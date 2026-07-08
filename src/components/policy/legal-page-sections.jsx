import React from 'react'
import { motion } from 'framer-motion'
import { y, duration, once } from '@/utilities/animation'

function InlineUl({ items, className = '' }) {
  if (!items?.length) return null
  return (
    <div className={`flex flex-col gap-y-0.5 pl-2 -mt-2 mb-4 md:mb-5 lg:mb-6 last:mb-0 ${className}`}>
      {items.map((uli, ulk) => (
        <p key={ulk} className="flex gap-x-2.5 items-start">
          <span className="block size-1 rounded-full bg-para translate-y-2.5" />
          {typeof uli === 'string' ? uli : <span dangerouslySetInnerHTML={{ __html: uli.name }} />}
        </p>
      ))}
    </div>
  )
}

function ListBlock({ list }) {
  if (!list?.length) return null
  return (
    <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-5 lg:p-6 rounded-2xl lg:rounded-[20px]">
      {list.map((entry, k) => (
        <div className="flex flex-col mb-6 md:mb-8 lg:mb-10 last:mb-0" key={k}>
          <h4 className="text-lg leading-tight font-semibold mb-3 md:mb-4 lg:mb-5 max-w-max w-full uppercase">
            {entry.title}
          </h4>
          {entry.des?.map((ldes, li) => (
            <React.Fragment key={li}>
              {ldes.name && (
                <p
                  className="mb-4 md:mb-5 lg:mb-6 last:mb-0 [&>strong]:font-semibold [&>strong]:text-white [&>strong]:underline"
                  dangerouslySetInnerHTML={{ __html: ldes.name }}
                />
              )}
              <InlineUl items={ldes.ul} />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}

/**
 * @param {object} props
 * @param {Array} props.sections
 * @param {'standard'|'numbered'|'boxed'} [props.variant='standard']
 */
export default function LegalPageSections({ sections, variant = 'standard' }) {
  return sections.map((item, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: variant === 'numbered' ? y : y + 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay: variant === 'numbered' ? `0.${idx * 2}` : '0.1' }}
      viewport={{ once, amount: 0.2 }}
      className="flex flex-col mb-6 md:mb-8 lg:mb-10 last:mb-0"
    >
      {item.title && (
        <h4 className="text-2xl mb-3 md:mb-4 lg:mb-5 font-medium max-w-max w-full">
          {variant === 'numbered' ? `${idx + 1}. ${item.title}` : item.title}
        </h4>
      )}

      {variant === 'boxed' ? (
        <div className="bg-white/2 border border-solid border-white/8 p-4 md:p-5 lg:p-6 rounded-2xl lg:rounded-[20px]">
          {item.des?.map((des, i) => (
            <React.Fragment key={i}>
              {des.name && (
                <p
                  className="mb-4 md:mb-5 lg:mb-6 last:mb-0 [&>strong]:font-semibold [&>strong]:text-white xl:pr-20"
                  dangerouslySetInnerHTML={{ __html: des.name }}
                />
              )}
              <InlineUl items={des.ul} />
            </React.Fragment>
          ))}
        </div>
      ) : variant === 'numbered' ? (
        item.des?.map((des, i) => (
          <p key={i} className="mb-4 md:mb-5 lg:mb-6 last:mb-0">
            {idx + 1}.{i + 1}{' '}
            <span
              className="[&>strong]:font-semibold [&>strong]:text-white [&>strong]:underline"
              dangerouslySetInnerHTML={{ __html: des.name }}
            />
          </p>
        ))
      ) : (
        <>
          {item.des?.map((des, i) => (
            <React.Fragment key={i}>
              {des.ul && !des.name && (
                <div className="flex flex-col gap-y-0.5 mb-4 md:mb-5 lg:mb-6 bg-white/2 border border-solid border-white/8 p-4 md:p-6 lg:p-8 rounded-2xl lg:rounded-[20px]">
                  {des.ul.map((uli, ulk) => (
                    <p key={ulk} className="flex gap-x-2.5 items-start">
                      <span className="block size-1 rounded-full bg-para translate-y-2.5" />
                      {uli}
                    </p>
                  ))}
                </div>
              )}
              {des.name && (
                <p
                  className="mb-4 md:mb-5 lg:mb-6 last:mb-0 [&>strong]:font-semibold [&>strong]:text-white lg:pr-14"
                  dangerouslySetInnerHTML={{ __html: des.name }}
                />
              )}
              {des.ul && des.name && <InlineUl items={des.ul} />}
            </React.Fragment>
          ))}
          <ListBlock list={item.list} />
        </>
      )}
    </motion.div>
  ))
}
