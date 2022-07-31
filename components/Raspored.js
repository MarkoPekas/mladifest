import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";

const raspored = {
    ponedjeljak: {
        date: '1. 8. 2022.',
        events: [
        {
            event: 'Molitva krunice',
            time: '18:00'
        },{
            event: 'SVEČANO OTVARANJE MLADIFESTA',
            time: '19:00'
        },{
            event: 'Euharistija',
            time: ''
        },{
            event: 'Klanjanje pred Presvetim',
            time: '21:00 - 22:00'
        }
    ]},
    utorak: {
        date: '2. 8. 2022.',
        events: [
            {
                event: 'Krunica na Podbrdu kod Gospina kipa',
                time: '06:00 - 06:40'
            },{
                event: 'Molitva, Kateheza, Svjedočanstva',
                time: '9:00'
            },{
                event: 'Anđeo Gospodnji',
                time: '12:00'
            },{
                event: 'Predah',
                time: ''
            },{
                event: 'Svjedočanstva',
                time: '17:00'
            },{
                event: 'Krunica',
                time: '18:00'
            },{
                event: 'Euharistija',
                time: '18:00'
            },{
                event: 'Procesija s Gospinim kipom i klanjanje pred Presvetim',
                time: '20:30 - 21:30'
            },
        ]
    },
    srijeda: {
        date: '3. 8. 2022.',
        events: [
            {
                event: 'Molitva, Kateheza, Svjedočanstva',
                time: '9:00'
            },{
                event: 'Anđeo Gospodnji',
                time: '12:00'
            },{
                event: 'Predah',
                time: ''
            },{
                event: 'Svjedočanstva',
                time: '17:00'
            },{
                event: 'Krunica',
                time: '18:00'
            },{
                event: 'Euharistija',
                time: '18:00'
            },{
                event: 'Meditacija sa svijećama i molitva pred Križem',
                time: '20:30 - 21:30'
            },
        ]
    },
    cetvrtak: {
        date: '4. 8. 2022.',
        events: [
            {
                event: 'Molitva, Kateheza, Svjedočanstva',
                time: '9:00'
            },{
                event: 'Anđeo Gospodnji',
                time: '12:00'
            },{
                event: 'Predah',
                time: ''
            },{
                event: 'Svjedočanstva - Cenacolo',
                time: '17:00'
            },{
                event: 'Krunica',
                time: '18:00'
            },{
                event: 'Euharistija',
                time: '18:00'
            },{
                event: 'Predstava zajednice Cenacolo',
                time: '21:15'
            },
        ]
    },
    cetvrtak: {
        date: '5. 8. 2022.',
        events: [
            {
                event: 'Molitva, Kateheza, Svjedočanstva',
                time: '9:00'
            },{
                event: 'Anđeo Gospodnji',
                time: '12:00'
            },{
                event: 'Predah',
                time: ''
            },{
                event: 'Svjedočanstva',
                time: '17:00'
            },{
                event: 'Krunica',
                time: '18:00'
            },{
                event: 'Euharistija',
                time: '18:00'
            },{
                event: 'Klanjanje pred Presvetim',
                time: '20:30 - 21:30'
            },{
                event: 'POSLANJE',
                time: '21:30 - 22:00'
            },{
                event: 'Oproštaj uz pjesmu',
                time: ''
            }
        ]
    },
    subota: {
        date: '6. 8. 2022.',
        events: [
            {
                event: 'Uspon privatno na Križevac',
                time: '~2:00'
            },{
                event: 'Sv. misa na Križevcu',
                time: '5:00'
            }
        ]
    }
}

export default function Raspored() {
  return (
    <div className="w-full p-4 overflow-hidden md:overflow-visible mx-auto max-w-2xl" id='raspored'>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {Object.keys(raspored).map((key, i) => (
        <SwiperSlide key={i}>
            <div className="w-full rounded-xl bg-gray-100 shadow-xl p-4 md:p-6 space-y-4">
                <p className="text-gray-700 font-bold text-xl md:text-2xl capitalize">{key}, 1. 8. 2022.</p>
                <div className="overflow-y-auto no-scrollbar h-96 space-y-2">
                    {raspored[key].events.map((e, i) => (<div key={i} className="rounded bg-white w-full p-4 flex justify-between">
                        <p className="font-semibold text-gray-800">{e.event}</p>
                        <p className="text-gray-600">{e.time}</p>
                    </div>))}
                </div>
            </div>
        </SwiperSlide>))}
      </Swiper>
    </div>
  );
}
