console.log("test");

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      concerts: [
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
          title: 'Whisky On Ice - schottisch, irisch, keltisch, englisch',
          description: 'Wir arbeiten aktuell intensiv am Programm für diesen Auftritt. Lassen Sie sich überraschen und merken Sie sich dieses Datum vor.',
          when: 'Samstag 13. April 2024',
          costs: 'Weitere Infos folgen. Ticketverkauf voraussichtlich ab Herbst 2023.',
          linkAvailable: false,
          link: '',
          where: 'Schuler Vinothek Seewen',
          img: './assets/img/concerts/23/templebar_600.jpg',
          imgalt: 'Foto Templebar'
        },
        {
          title: 'Whisky On Ice - schottisch, irisch, keltisch, englisch',
          description: 'Wir arbeiten aktuell intensiv am Programm für diesen Auftritt. Lassen Sie sich überraschen und merken Sie sich dieses Datum vor.',
          when: 'Freitag 19. April 2024',
          costs: 'Weitere Infos folgen. Ticketverkauf voraussichtlich ab Herbst 2023.',
          linkAvailable: false,
          link: '',
          where: 'Gaswerk Seewen',
          img: './assets/img/concerts/23/templebar_600.jpg',
          imgalt: 'Foto Templebar'
        },
      ],
      pastconcerts: [
        {
          title: 'Klang23 das Musikfestival',
          description: 'Mit Esther Lenherr am Klavier.',
          when: 'Samstag 17. Juni 2023, 14 Uhr',
          costs: 'Mehr Infos auf der Website Klang23',
          linkAvailable: true,
          link: 'https://www.klang-dasfestival.ch/',
          where: 'Reformierte Kirche Wädenswil',
          img: './assets/img/concerts/23/klang23_flyer.jpeg',
          imgalt: 'Flyer Klang 23',
          impressionen: false,
          impressionenlink: '',
          past: 'Am Samstag 17. Juni konnten wir am Klang 23 in Wädenswil auftreten. Esther Lenherr begleitete uns am Klavier.'
        },
        {
          title: 'Kurzkonzerte Advents- und Weihnachtslieder',
          description: 'Am 18. Dezember 2022 sangen wir im Talkessel Schwyz an vier Orten Weihnachtslieder und stimmten auf die Festtage ein. Fotos folgen.',
          when: 'Samstag 17. Juni 2023, 14 Uhr',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/postcard.jpg',
          imgalt: 'Kurzkonzerte 22',
          impressionen: false,
          impressionenlink: '',
          past: 'Am 18. Dezember 2022 sangen wir im Talkessel Schwyz an vier                   Orten Weihnachtslieder und stimmten auf die Festtage ein. Fotos folgen.'
        },
        {
          title: 'Singing Advent 2022',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/singing_advent_kirche.jpg',
          imgalt: 'Singing Advent 22',
          impressionen: false,
          impressionenlink: '',
          past: 'Am 27. November 2022 fand nach langer Coronapause endlich wieder das Singing Advent statt. Zusammen mit einem Projektchor ad hoc, Peter Fröhlich an der Orgel und unter Leitung von Cristina Marugg füllten wir die ganze Kollegikirche in Schwyz und sangen Weihnachtslieder aus der ganzen Welt. Fotos folgen.'
        },
        {
          title: 'dMädels am Jazz meets Folklore',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/jazz_meets_folklore_600.jpeg',
          imgalt: 'Jazz meets Folkore',
          impressionen: false,
          impressionenlink: '',
          past: 'Jazz meets Folklore, das Musikfestival im Herzen von Schwyz. Wir waren Teil des Veranstaltungsprogramms am 4. September 2022. Einmal begleitet von mit Andrea Ulrich, Gaby-Isabelle Näf und Monika Greenwald-Loher und einmal als Begleitung von Baba Shrimps.'
        },
        {
          title: 'dMädels auf dem Stoos',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/stoosbahn_600.jpeg',
          imgalt: 'Stoos Bild',
          past: 'Wir durften am 27. August 2022 an verschiedenen Orten auf dem Stoos auftreten. Begleitet wurden wir von Andrea Ulrich am Akkordeon.',
          impressionen: false,
          impressionenlink: ''
        },
        {
          title: 'Benefiz Konzert',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/benefiz_hinten.jpg',
          imgalt: 'Benefizbild',
          past: 'Am 25. Juni 2022 traten wir im Verenasaal in Ibach auf. Ein Konzert für alle Menschen auf der Flucht vor Krieg und Gewalt. Ein Konzert für die Liebe und die Hoffnung. dMädels zusammen mit Esther Lenherr am Klavier.',
          impressionen: true,
          impressionenlink: 'impressions.html#benefiz22'
        },
        {
          title: 'Öffentliche Probe',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/oeffentliche_probe.JPG',
          imgalt: 'Probe Bild',
          past: 'Am 10. Juni 2022 fand unsere erste öffentliche Probe mit anschliessendem Apero statt. Singbegeisterte Besucher sangen am Freitagabend mit uns.',
          impressionen: false,
          impressionenlink: ''
        },
        {
          title: 'Kulturschock',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/oeffentliche_probe.JPG',
          imgalt: 'Benefizbild',
          past: 'Unser erstes grösseres Konzert nach Corona war ein echtes Erlebnis. Am Freitag 3. Juni 2022 füllten wir zusammen mit dem Kulturschock Streichorchester das Gaswerk in Seewen.',
          impressionen: true,
          impressionenlink: 'impressions.html#kultur22'
        }
      ]
    }
  }
}).mount('#app')

