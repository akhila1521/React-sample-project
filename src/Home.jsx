import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
        <div className='bg-dark text-white'>
            <div className='homeDiv'>
            <h1 className='font-italic'><i>Hi Buddies,Welcome to My Store ❤️</i></h1>
            <img src="./hp7.png" style={{marginTop:10, marginBottom:20}} width={1375} height={650}/>
             <div className='container float-left'>
                  <h1>Gadgets</h1>

               <p className='m-9 p-3 float-left'>Electronics can be defined as a branch of physics and engineering that deals with the study of electron behavior, flow, and control under different conditions. It encompasses an exceptionally broad range of technology, including the study of electron behavior and movement, particularly as observed in the first electron tubes.

The term "electronics" originally referred to the study of electron behavior and movement, but it has come to be used in its broader sense with advances in knowledge about the fundamental nature of electrons and about the way in which the motion of these particles could be utilized.
Electronics can be defined as a branch of physics and engineering that deals with the study of electron behavior, flow, and control under different conditions. It encompasses an exceptionally broad range of technology, including the study of electron behavior and movement, particularly as observed in the first electron tubes.

The term "electronics" originally referred to the study of electron behavior and movement, but it has come to be used in its broader sense with advances in knowledge about the fundamental nature of electrons and about the way in which the motion of these particles could be utilized.

Electronics includes just about everything — from resistors to Bluetooth enabled devices to ham radio transceivers. It also ignores the past several decades of fundamental electronic engineering teachings that include the behavior and effect of holes as well as electrons.

In simple terms, electronics is a branch of physics that deals with the emission, behavior, and effects of electrons and with electronic devices. It is a diverse field that includes various aspects such as consumer electronics, robotics, medical devices, and video game consoles.
Electronics is not just about purchasing the latest gadgets, but also about understanding how they work. It involves a hands-on component, where one actively investigates and experiments with electronic devices and circuits.
<Link to={'/electronicproducts'} className='navlink'>
<button className='btn btn-primary'> Click for more Gadgets</button></Link></p>
            <img src="./hp4.avif" className='rounded-4 w-25' />
            </div>
             </div>
             </div>
            
            <footer style={{marginTop:20}}>
                <div>
                    <p className='text-center font-bold'>Verify &copy; 2023 AkPros. All rights reserved.</p>
<center>
<h4>Get in Touch </h4>
<p><strong>Email:</strong> <a href="mailto:example@example.com" className='navlink  text-black'>example@example.com</a><strong> Mailto:</strong><a href="mailto:example@example.com" className='navlink  text-black'>example@example.com</a>  <strong>Phone:</strong> 555-555-5555</p>
<p><strong>Address:</strong> 123 Main St, Anytown, USA 12345</p>
</center>
                </div>
            </footer>
          
            </>
        
    )
}

export default Home
