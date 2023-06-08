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
          linkAvailable: true,
          link: 'https://www.klang-dasfestival.ch/',
          where: 'Reformierte Kirche Wädenswil',
          img: './assets/img/concerts/23/klang23_flyer.jpeg',
          imgalt: 'Flyer Klang 23'
        },
        {
          title: 'Chornacht im Gaswerk',
          description: 'Mit Vocabular und dem Männerchor Schwyz',
          when: 'Freitag 1. September 2023, 20 Uhr',
          costs: 'Tickets Website Gaswerk',
          linkAvailable: true,
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
          linkAvailable: true,
          link: 'https://www.alpkaesemarkt.ch/programm/',
          where: 'Muotathal',
          img: './assets/img/concerts/smaller/muotathal.jpg',
          imgalt: 'Foto Käsemarkt'
        },
        {
          title: 'Whisky On Ice 2024',
          description: 'Wir arbeiten aktuell intensiv am Programm für diesen Auftritt. Lassen Sie sich überraschen und merken Sie sich dieses Datum vor.',
          when: 'Sonntag 14. April 2024',
          costs: 'Weitere Infos folgen',
          linkAvailable: false,
          link: '',
          where: 'Schuler Vinothek Seewen',
          img: './assets/img/concerts/23/templebar_600.jpg',
          imgalt: 'Foto Templebar'
        },
        {
          title: 'Whisky On Ice 2024',
          description: 'Wir arbeiten aktuell intensiv am Programm für diesen Auftritt. Lassen Sie sich überraschen und merken Sie sich dieses Datum vor.',
          when: 'Freitag 19. April 2024',
          costs: 'Weitere Infos folgen',
          linkAvailable: false,
          link: '',
          where: 'Gaswerk Seewen',
          img: './assets/img/concerts/23/templebar_600.jpg',
          imgalt: 'Foto Templebar'
        },
        
        

      ]

    }
  }
}).mount('#app')

