import React from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/grid'
import PolicyTitle from '@/components/policy/policy-title'
import SeoHead from '@/components/seo-head'
import { parseBlogDateToIso } from '@/lib/schema-org'

import img_1 from '@/assets/img/blog/1.png'
import shape from '@/assets/img/blog/shape.png'

export default function BlogDetails() {
  const { t } = useTranslation('trading')
  const sectionKeys = t('blog.details.sectionKeys', { returnObjects: true, defaultValue: [] })
  const date = '06 - 21 - 2026'

  const single_blog = {
    id: '1',
    date,
    title: t('blog.details.title'),
    img: img_1,
    des: t('blog.details.des'),
    info: (Array.isArray(sectionKeys) ? sectionKeys : []).map((key) => ({
      title: t(`blog.details.sections.${key}.title`),
      des: t(`blog.details.sections.${key}.des`),
    })),
  }

  return (
    <div className="padding-top-245 -mt-4 md:mt-0 common-padding">
      <SeoHead
        title={`${single_blog.title} | WINPROFX`}
        description={single_blog.des}
        canonicalPath={`/blog/${single_blog.id}`}
        blogPosting={{
          headline: single_blog.title,
          description: single_blog.des,
          datePublished: parseBlogDateToIso(single_blog.date),
        }}
      />
      <img src={shape} className="absolute top-0 right-0 max-w-full -z-10 pointer-events-none blur-[140px]" alt="" />
      <Container>
        <PolicyTitle
          as="h1"
          animation={false}
          className="max-w-260 mx-auto mb-8! md:mb-12! lg:mb-16!"
          meta={t('blog.details.meta')}
          title={single_blog.title}
        />
        <div className="rounded-3xl md:rounded-4xl lg:rounded-[40px] bg-white/4 border border-solid border-white/16 p-4 md:p-5 lg:p-6 flex flex-col gap-y-5 md:gap-y-6.5 lg:gap-y-8">
          <div className="bg-white/4 rounded-2xl md:rounded-3xl lg:rounded-[30px] relative overflow-hidden z-1 aspect-100/50 xl:aspect-[1/.395]">
            <img src={single_blog.img} className="w-full min-h-full h-auto absolute inset-0 -z-10" alt="" />
          </div>
          <div className="flex flex-col gap-y-6 md:gap-y-8 lg:gap-y-10 mb-2 p-2 pt-0">
            <p>{single_blog.des}</p>
            {single_blog.info.map((item) => (
              <div className="flex flex-col gap-y-3" key={item.title}>
                <h5 className="font-medium text-white text-xl leading-tight">{item.title}</h5>
                <p>{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
