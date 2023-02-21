console.log("test");

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      concerts: [
        {
          title: 'Klang23 das Musikfestival',
          description: 'Mit Esther Lenherr am Klavier.',
          when: 'Samstag 17. Juni 2023, 17-23 Uhr',
          costs: 'Infos folgen',
          where: 'Reformierte Kirche Wädenswil',
          img: './assets/img/concerts/smaller/klang_600.jpg'
        },
        {
          title: 'Chornacht im Gaswerk',
          description: 'Mit Vocabular und dem Männderchor Schwyz',
          when: 'Freitag 1. September 2023, 20 Uhr',
          costs: 'Infos folgen',
          where: 'Gaswerk Seewen',
          img: './assets/img/concerts/smaller/kulturschock2_600.jpg'
        },
        {
          title: 'Muotitaler Alpchäsmärcht',
          description: 'Mit Andrea Ulrich am Akkordeon, Gaby Näf am Klavier und Monika Greenwald am Cello',
          when: 'Samstag 28. Oktober 2023',
          costs: 'Infos folgen',
          where: 'Muotathal',
          img: './assets/img/concerts/smaller/muotathal.jpg'
        },
        
        

      ]

    }
  }
}).mount('#app')

