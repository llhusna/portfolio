import React from 'react'
import { images } from './../constants'
import './Page.scss'
import { Navbar } from '../component';

function Project() {
  return (
      <div><Navbar />
    <div class="grid min-h-screen gap-y-20 bg-white justify-center text-center">
        <div>
            {/* <img src={images.flaworks} alt="frame" class="h-36 logo"></img> */}
            <div class="pt-20 text-company">FLAWORKS SDN BHD</div>
            <p>Status: Terminated</p>
            <p>Role: Frontend Developer</p>
            <p>The web app is intended for monitoring the manufacturing process in a factory.</p>
            <div class="flex gap-6 pt-10 justify-center text-white">
                <div class="skills-vue">Vue.js</div>
                <div class="skills-quasar">Quasar</div>
            </div>
            <div class="grid justify-center pt-10">
                <div>
                <img src={images.fla} alt="frame" class="object-cover h-80 w-70"></img>
                </div>
            </div>
        </div>
        <div>
            {/* <img src={images.sonikl} alt="frame" class="h-32 logo"></img> */}
            <div class="pt-4 text-company">SONIKL STUDIO</div>
            <p>Status: Launched</p>
            <p>Role: Frontend Developer</p>
            <p>Worldwide ticketing system for the first virtual concert in Malaysia.</p>
            <div class="flex gap-6 pt-10 justify-center text-white">
                <div class="skills-vue">Vue.js</div>
                <div class="skills-quasar">Quasar</div>
            </div>
            <div class="grid justify-center gap-10 pt-20">
                <div class="flex gap-x-10">
                    <div>
                        <img src={images.landing} alt="frame" class="h-64 w-70"></img>
                        Landing page
                    </div>
                    <div>
                        <img src={images.ticket} alt="frame" class="h-64 w-70"></img>
                        Ticketing page
                    </div>
                </div>
                <div class="flex gap-x-10">
                    <div>
                        <img src={images.lineup} alt="frame" class="h-64 w-70"></img>
                        Lineup artist
                    </div>
                    <div>
                        <img src={images.faq} alt="frame" class="h-64 w-70"></img>
                        FAQ page
                    </div>
                </div>
            </div>
        </div>
        <div>
            {/* <img src={images.kreno} alt="frame" class="logo"></img> */}
            <div class="pt-4 text-company">KRENOVATOR</div>
            <p>Status: Launched</p>
            <p>Role: UI Developer</p>
            <p>Basic company website</p>
            <div class="flex gap-6 pt-10 justify-center text-white">
                <div class="skills-vue">Vue.js</div>
                <div class="skills-quasar">Quasar</div>
            </div>
            <div class="grid justify-center">
            <div class="flex pt-10 gap-10">
                <div class="grid pt-8">
                    <img src={images.login} alt="frame" class="object-cover h-64 w-70 p-2 bg-kreno"></img>
                    <img src={images.krenopage} alt="frame" class="object-cover h-64 w-70 p-2 bg-kreno"></img>
                </div>
                <div>
                    <img src={images.krenomobile} alt="frame" class="object-cover h-90 w-80"></img>
                </div>
            </div>
            </div>
        </div>
        <div>
            {/* <img src={images.solvnex} alt="frame" class="logo"></img> */}
            <div class="pt-4 text-company">SOLVNEX MALAYSIA</div>
            <p>Status: Launched</p>
            <p>Role: Frontend Developer</p>
            <p>Website that handle the freelancing process from registration until completion.</p>
            <div class="flex gap-6 pt-10 justify-center text-white">
                <div class="skills-vue">Vue.js</div>
                <div class="skills-quasar">Quasar</div>
            </div>
            {/* <p class="flex container box">My scope in Solvnex includes adding the tooltips and upload function for documents.<br/>
                The main purpose was to familiarize myself with the folder structure and understand
                on how the dynamic code and intergration works.
            </p> */}
            <div class="flex pt-10 gap-10">
                {/* <img src={images.krenopage} alt="frame" class="object-cover h-80 w-70 items-center align-middle"></img>
                <img src={images.krenomobile} alt="frame" class="object-cover h-100 w-80"></img> */}
            </div>
        </div>
        <div class="pb-20">
            {/* <img src={images.aramco} alt="frame" class="logo"></img> */}
            <div class="pt-4 text-company">ARAMCO</div>
            <p>Status: Launched</p>
            <p>Role: UI Developer</p>
            <p>Basic company website</p>
            <div class="flex gap-6 pt-10 justify-center text-white">
                <div class="skills-php">php</div>
                <div class="skills-bootstrap">bootstrap</div>
            </div>
            <div class="flex pt-10 gap-10">
              {/*   <img src={images.krenopage} alt="frame" class="object-cover h-80 w-70 items-center align-middle"></img>
                <img src={images.krenomobile} alt="frame" class="object-cover h-100 w-80"></img> */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Project