import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text0center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus suscipit quos voluptates obcaecati et, cum dicta numquam voluptatibus rerum id ipsa iusto aliquid? Voluptate incidunt iure, similique at nemo voluptatum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur sint repudiandae aliquid nulla magnam officiis perferendis iusto placeat, inventore, neque at quisquam sit hic veritatis, ullam architecto praesentium? Neque, nisi!</p>
        <b className='text-gray-800' >Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde quis ratione beatae at saepe asperiores veritatis. Quam cupiditate sit, provident magni vitae, eos, tenetur quibusdam officia dolore eaque aperiam sequi!</p>
        </div>
      </div>
      <div className='text-xl py-4' >
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20' >
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Ouality Assurance:</b>
          <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti laboriosam ad adipisci officiis, asperiores tempora qui aperiam corporis veniam dolorum ut atque architecto aut earum dolor minima odio natus dicta?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convinence:</b>
          <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti laboriosam ad adipisci officiis, asperiores tempora qui aperiam corporis veniam dolorum ut atque architecto aut earum dolor minima odio natus dicta?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti laboriosam ad adipisci officiis, asperiores tempora qui aperiam corporis veniam dolorum ut atque architecto aut earum dolor minima odio natus dicta?</p>
        </div>

      </div>
      <NewsLetterBox />
      
    </div>
  )
}

export default About
