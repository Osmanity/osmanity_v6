'use client';
import { format, parseISO } from 'date-fns';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const PostCard = ({ post, index }) => {
  index *= 0.05;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index,
          duration: 0.5
        }
      }}
      viewport={{ once: true }}
      className='bg-white dark:bg-black  dark:border-1 border border-white/30 shadow-sm dark:shadow-none dark:shadow-white relative overflow-hidden '
    >

      <Link href={post.url} className='relative block overflow-hidden group'>
          <Image
            src={post.image}
            alt={post.title}
            width={1064}
            height={644}
            className='object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]'
          />
      </Link>

      <div className='p-8'>
        <p className='text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]'>
          {format(parseISO(post.date), "LLL d, yyyy")} • {post.author}
        </p>
        <div className='h-20' >
          <h3 className='mb-4'>
            <Link href={post.url} className=' text-lg leading-none bg-gradient-to-r from-violet-600/50 to-violet-600/50  dark:from-violet-600/50
                dark:to-violet-600/50
                bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
              {post.title}
            </Link>
          </h3>
        </div>
        <p>
          <Link href={post.url} className='text-[12px] tracking-[2px] uppercase border-b-2 pb-2 inline-block border-violet-600'>Read more</Link>
        </p>
      </div>
      
    </motion.div>
  )
}

export default PostCard