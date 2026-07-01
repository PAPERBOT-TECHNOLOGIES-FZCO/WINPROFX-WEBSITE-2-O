import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';
import { Container } from '@/components/grid'
import PolicyTitle from '@/components/policy/policy-title'
import { motion } from 'framer-motion';
import { y, duration, once } from '@/utilities/animation'
import SeoHead from '@/components/seo-head'
import { useSeo } from '@/hooks/use-seo'

import img_1 from '@/assets/img/blog/1.png'
import img_2 from '@/assets/img/blog/2.png'
import img_3 from '@/assets/img/blog/3.png'
import img_4 from '@/assets/img/blog/4.png'
import img_5 from '@/assets/img/blog/5.png'
import img_6 from '@/assets/img/blog/6.png'
import shape from '@/assets/img/blog/shape.png'


export default function Blog() {
    const { t } = useTranslation('trading')
    const seo = useSeo('blog')
  const categoryKeys = ['all', 'forex', 'indices', 'crypto', 'oil', 'metals', 'commodities']
  const categorys = categoryKeys.map((key) => ({
    key,
    name: t(`blog.categories.${key}`),
  }))
    const [active_category, set_active_category] = useState(categorys[0]);

    const postKeys = t('blog.postKeys', { returnObjects: true, defaultValue: [] })
    const postImages = [img_1, img_2, img_3, img_4, img_5, img_6, img_4]
    const postCategories = [
      ['forex', 'crypto', 'metals'],
      ['indices'],
      ['forex'],
      ['crypto'],
      ['oil'],
      ['metals'],
      ['crypto'],
    ]

    const blogs_item = (Array.isArray(postKeys) ? postKeys : []).map((key, idx) => ({
      img: postImages[idx] ?? img_1,
      date: '06 - 21 - 2026',
      title: t(`blog.posts.${key}.title`),
      des: t(`blog.posts.${key}.des`),
      category: postCategories[idx] ?? ['forex'],
    }))

    const filtered_blog = active_category.key === 'all' ? blogs_item : blogs_item.filter(blog => blog.category.some(cat => cat.toLowerCase() === active_category.key));
    const blog_card_class = 'flex flex-col bg-white/3 border border-white/8 border-solid backdrop-blur-2xl p-2 rounded-2xl md:rounded-3xl transition-all duration-300 main-shadow hover:-translate-y-1'

    return (
        <div className='padding-top-245 -mt-4 md:mt-0 common-padding'>
            <SeoHead
        {...seo}
        canonicalPath="/blog"
      />
            <img src={shape} className='absolute top-0 right-0 max-w-full -z-10 pointer-events-none blur-[140px]' alt="" />
            <Container>
                <PolicyTitle
                    as="h1"
                    meta={t('blog.pageMeta')}
                    title={t('blog.pageTitle')}
                    className={"md:text-start! max-w-175"}
                />
                <div className="flex flex-wrap gap-y-2 gap-x-2 mb-4 md:mb-5 lg:mb-6">
                    {categorys.map((item, idx) => (
                        <button onClick={() => set_active_category(item)} key={idx} className={`inline-flex items-center justify-center font-medium min-h-9 md:min-h-10.5 rounded-full px-4 md:px-5 lg:px-6 min-w-12 md:min-w-17 hover:bg-primary hover:text-black ${item.key === active_category.key ? 'bg-primary text-black' : 'bg-white/8 text-white'}`}>{item.name}</button>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {filtered_blog.splice(0, 1).map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 1}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className="h-full"
                        >
                            <Link to={`/blog/${idx + 1}`} className={`${blog_card_class} h-full`}>
                                <BlogContent
                                    imageClass='aspect-[100/54] w-full'
                                    item={item} />
                            </Link>
                        </motion.div>
                    ))}
                    <div className="flex flex-col gap-y-4">
                        {filtered_blog.splice(0, 2).map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: y }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: duration, delay: `0.${idx * 2}` }}
                                viewport={{ once: once, amount: 0.2 }}
                                className=""
                            >
                                <Link to={`/blog/${idx + 1}`} className={`${blog_card_class} md:flex-row! md:items-center md:gap-x-5 xl:gap-x-6`}>
                                    <BlogContent
                                        className="p-3 mt-2 md:mt-0 md:p-0"
                                        imageClass='md:max-w-55 w-full aspect-[1/.67] md:aspect-[1/1] lg:aspect-[1/1.2] xl:aspect-[1/1] '
                                        item={item}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {filtered_blog.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: duration, delay: `0.${idx * 1}` }}
                            viewport={{ once: once, amount: 0.2 }}
                            className=""
                        >
                            <Link to={`/blog/${idx + 1}`} className={`${blog_card_class}`}>
                                <BlogContent item={item} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

const BlogContent = ({ className = "p-3 md:p-4 pt-5 md:pt-6", item, imageClass = "w-full aspect-[1/.67]" }) => {
    return (
        <>
            <div className={`rounded-2xl md:rounded-[20px] bg-white/8 relative z-1 overflow-hidden ${imageClass}`}>
                <img src={item.img} className='w-full h-auto min-h-full absolute inset-0 -z-10 object-cover' alt="" />
            </div>
            <div className={`flex flex-col gap-y-2 ${className}`}>
                <span className='text-sm font-normal text-para2 leading-[140%]'>{item.date}</span>
                <h5 className='text-xl leading-[140%] font-inter font-semibold text-white line-clamp-2'>{item.title}</h5>
                {item.des &&
                    <p className='text-sm leading-normal text-para2'>{item.des}</p>
                }
            </div>
        </>
    )
}