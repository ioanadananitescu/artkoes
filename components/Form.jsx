
'use client'
import { useState } from 'react';
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { medium } from './data';


const Form = ({ session, type, post, setPost, submitting, handleSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(['']);
  const handleSelectedValue = (event) => {
    setSelectedValue(event.target.value);
  }
    
  
  
 
  
  return (
    <section className='w-full max-w-full flex-start flex-col md:flex-row gap-8'>
      <section className='relative max-lg:w-screen mx-auto flex start flex-col gap-5 items-center justify-center'>
        <Image
          width={200}
          height={200}
          alt="your profile image"
          src={session?.user.image} 
       
            />
        <p>You can add a new work </p>
        <div className='flex-end mx-3 mb-5 gap-4'>
        <button
            type='submit'
            onClick={()=>{}}
            
            className='px-5 py-1.5 text-sm  border-black rounded shadow text-marron-oscuro'
          >
            Share
        </button>
        <button
            type='submit'
           onClick={()=>{}}
            className='px-5 py-1.5 text-sm border-black rounded shadow text-marron-oscuro'
          >
          Back
          </button>
          </div>
      </section>

      <section className='flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='marron_gradient'>{type} Work</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Description
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea '
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Keywords{" "}
            <span className='font-normal'>
              (#luxuryart, #cheapart, #originalartforsale, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
          </label>
          
          <label htmlFor='dropdown'>Select a value:     
<select 
value={post.medium}
className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
id="grid-medium"
onChange={(e)=>
    setPost({...post, medium:e.target.value})
} 
placeholder="Select the  medium"
required>
    {medium.map((e)=>(
    <option key={e.id} value={e.name}>{e.name}</option>
    ))}
</select>
          </label>
    

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
        </form>
        </section>
    </section>
  )
};

export default Form;