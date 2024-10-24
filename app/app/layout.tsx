
import React from 'react';
import Overlay from './overlay';
import type { Metadata } from "next";
import "./app.css";
import Link from 'next/link';
//import { parseCookies } from 'nookies';

//Icons
import { Search } from 'lucide-react';
import { Archive } from 'lucide-react';

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };

export default function AppLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
        
    //const cookies = parseCookies();
    //const myCookie = cookies['myCookieName'];

   // if(myCookie){
        return(
            <html lang="en">
            <body>
                <div className="app__container">
                    <div className="app__chats">
                        <div className="app__search">
                            <input type="text" className="app__search-input" placeholder="Search..."/>
                            <button className="app__search-button">
                                <Search color="var(--color-icon)"/>
                            </button>
                        </div>
                        <ul className="app__list">
                            <li className="app__item">
                                <div className="app__chat-icon app__chat-icon-Archive">
                                    <Archive color="var(--color-icon)" size="30" />
                                </div>
                                <div className="app__chat-info">
                                    <h3 className="app__chat-name">[Archive]</h3>
                                    <p className="app__chat-desc">[Chats in Archive]</p>
                                </div>
                            </li>
                            <li>
                                <Link href={"/app/c/123"} className="app__item app__item">
                                    <div className="app__chat-icon">

                                    </div>
                                    <div className="app__chat-info">
                                        <h3 className="app__chat-name">[ChannelName]</h3>
                                        <p className="app__chat-desc">[LastMessage]</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="app__item app__item">
                                <div className="app__chat-icon">

                                </div>
                                <div className="app__chat-info">
                                    <h3 className="app__chat-name">[UserName]</h3>
                                    <p className="app__chat-desc">[LastMessage]</p>
                                </div>
                            </li>
                            <li className="app__item app__item">
                                <div className="app__chat-icon">

                                </div>
                                <div className="app__chat-info">
                                    <h3 className="app__chat-name">[GroupName]</h3>
                                    <p className="app__chat-desc">[LastMessage]</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="app__wrapper">
                        {children}
                    </div>
                </div>
                <Overlay/>
            </body>
            </html>
        ); 
    /*} else {
        return(
            <html lang='en'>
                <body>
                    
                </body>
            </html>
        )
    }*/
}