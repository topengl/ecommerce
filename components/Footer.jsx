import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 by topengl.</p>
      <p className='icons'>
      <Link href="https://github.com/"><AiFillGithub> </AiFillGithub></Link>
      </p>
    </div>
  )
}

export default Footer;