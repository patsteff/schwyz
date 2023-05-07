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
          when: 'Samstag 17. Juni 2023, 14 Uhr',
          costs: 'Mehr Infos auf der Website Klang23',
          link: 'https://www.klang-dasfestival.ch/',
          where: 'Reformierte Kirche Wädenswil',
          img: './assets/img/concerts/smaller/klang_600.jpg',
          imgalt: 'Foto vom Klang 2019'
        },
        {
          title: 'Chornacht im Gaswerk',
          description: 'Mit Vocabular und dem Männerchor Schwyz',
          when: 'Freitag 1. September 2023, 20 Uhr',
          costs: 'Tickets Website Gaswerk',
          link: 'https://www.gaswerk-eventbar.ch/veranstaltungen/nacht-der-choere/',
          where: 'Gaswerk Seewen',
          img: './assets/img/concerts/smaller/nachtchoere.jpg',
          imgalt: 'Foto vom Kulturschock im Gaswerk'
        },
        {
          title: 'Muotitaler Alpchäsmärcht',
          description: 'Mit Andrea Ulrich am Akkordeon, Gaby Näf am Klavier und Monika Greenwald am Cello',
          when: 'Samstag 28. Oktober 2023 ab 20 Uhr',
          costs: 'Website Chäsmärcht',
          link: 'https://www.alpkaesemarkt.ch/programm/',
          where: 'Muotathal',
          img: './assets/img/concerts/smaller/muotathal.jpg',
          imgalt: 'Foto Käsemarkt'
        },
        
        

      ]

    }
  }
}).mount('#app')

