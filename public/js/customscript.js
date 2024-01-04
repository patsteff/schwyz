console.log("test");

document.addEventListener('click', showShamrock);

function showShamrock(event) {
  var posX = event.pageX;
  var posY = event.pageY;

  createShamrock(posX, posY, randomShamrock(), randomClass(), randomGreen());


  var svgs = document.getElementsByTagName('svg');
  if (svgs.length > 50) {
    for (i = svgs.length - 1; i >= 0; i--) {
      svgs[i].parentNode.removeChild(svgs[i]);
    }
  }

}

function randomGreen() {
  var greens = ['#66a841', '#7ba237', '#95eb00', '#00b842', '#4caf50', '#56B949', '#C1CCAE', '#03d1ab', '#8DC0B1', '#B2EDCE', '#88C542', '#a6cb62', '#47cb4a', '#9BF14F', '#6b7d27', '#4caf50', '#00be70', '#207720', '#86c036'];
  var random = Math.floor(Math.random() * (greens.length - 1 + 1)) + 0;
  var green = greens[random];
  // console.log(random, green);
  return green;
}

function randomClass() {
  var animClass = ['normal-fade', 'counter-fade'];
  var random = Math.floor(Math.random() * (animClass.length - 1 + 1)) + 0;
  return animClass[random];
}

function randomShamrock() {
  var shamrockList = [
    {
      'width': 111.994,
      'height': 110.637,
      'viewBox': "0 0 111.994 110.637",
      'd': 'M111.462,65.159c2.263-13.032-15.935-19.88-25.183-21.101c11.188-11.163,15.355-38.708-8.668-31.884c-7.935-27.668-30.969-1.793-32.394,14.748C34.472,15.305,4.875,9,12.046,34.245c-26.144,7.497-3.973,29.846,12.314,32.113C13.096,77.463,8.66,105.296,32.845,98.426c8.066,28.13,31.356,1.1,32.455-15.587c6.062,6.934,21.552,18.087,31.092,9.219c3.879-4.685,4.791-9.955,2.736-15.811C105.424,74.862,109.536,71.167,111.462,65.159C113.023,56.169,110.558,70.376,111.462,65.159z'
    },
    {
      'width': 215.864,
      'height': 234.908,
      'viewBox': "0 0 215.864 234.908",
      'd': "M215.141,117.341c3.291-25.531-30.435-37.346-50.109-36.702c20.565-21.12,21.139-82.684-19.291-54.5c-8.249-53.786-59.09-13.651-59.853,22.91C65.84,22.042,19.937,19.389,31.183,63.042c-58.854-1.868-23.982,66.436,19.115,67.457c-31.552,25.345-29.373,50.841,8.254,55.072c-3.511,55.13,52.971,18.657,59.89-14.906c7.204,19.541-15.156,42.589-9.872,57.707c7.312,20.926,20.941-15.131,20.858-14.653c3.351-19.336-1.521-36.422,0.143-54.847c15.044-2.052,41.946,45.009,63.252,14.188c7.172-10.371,1.271-22.031-1.28-32.563C202.365,137.243,213.57,129.531,215.141,117.341C217.319,100.446,213.747,128.157,215.141,117.341z"
    },
  ];

  var random = Math.floor(Math.random() * (shamrockList.length - 1 + 1)) + 0;
  return shamrockList[random];
}

function createShamrock(x, y, shape, animation, fill) {
  var shamrock = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  shamrock.setAttribute('width', shape.width + 'px');
  shamrock.setAttribute('height', shape.height + 'px');
  shamrock.setAttribute('class', animation);
  shamrock.setAttribute('viewBox', shape.viewBox);
  shamrock.setAttribute('fill', fill);
  shamrock.style.position = 'absolute';
  shamrock.style.top = (y - (shape.height / 2)) + 'px';
  shamrock.style.left = (x - (shape.width / 2)) + 'px';
  var svgNS = shamrock.namespaceURI;
  var path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', shape.d);
  shamrock.appendChild(path);
  document.body.appendChild(shamrock);
}

// function showDOM (){
//   var svgs = document.getElementsByTagName('svg');
//   console.log(svgs);
// }

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello Vue!',
      concerts: [
        {
          title: 'Whisky On Ice - schottisch, irisch, keltisch, englisch (Dinner)',
          description: 'Ein Konzert, das dich musikalisch in die atemberaubende Landschaft der grünen Inseln und der schottischen Highlands entführt.',
          when: 'Samstag 13. April 2024',
          costs: 'Weitere Infos folgen. Inklusive Apero und 3 Gänge Menü. Ticketverkauf voraussichtlich ab Januar 2024.',
          additionalCosts: '',
          linkAvailable: false,
          link: '',
          where: 'Schuler Vinothek Seewen',
          img: './assets/img/concerts/24/whisky_dinner.jpg',
          imgalt: 'Foto Templebar',
          flyerAvailable: true,
          flyer: './assets/pdf/whiskey_flyer_schuler_compressed.pdf'
        },
        {
          title: 'Whisky On Ice - schottisch, irisch, keltisch, englisch (Party)',
          description: 'Ein Konzert, das dich musikalisch in die atemberaubende Landschaft der grünen Inseln und der schottischen Highlands entführt.',
          when: 'Freitag 19. April 2024, 20:00 Uhr (Türöffnung 19:00 Uhr)',
          costs: 'Tickets Vorverkauf',
          additionalCosts: 'Vorverkauf CHF 25.- / Abendkasse CHF 30.-',
          linkAvailable: true,
          link: 'https://www.gaswerk-eventbar.ch/veranstaltungen/whiskey-on-ice-ch/',
          where: 'Gaswerk Seewen',
          img: './assets/img/concerts/24/whisky_party.jpg',
          imgalt: 'Foto Templebar',
          flyerAvailable: true,
          flyer: './assets/pdf/whiskey_flyer_gaswerk_compressed.pdf'
        },
      ],
      pastconcerts: [
        {
          title: 'Muotitaler Alpchäsmärcht',
          description: 'Wir treten am Unterhaltungsabend des Muotitaler Alpchäsmärcht auf. Mit Andrea Ulrich am Akkordeon, Gaby Näf am Klavier und Monika Greenwald am Cello.',
          when: 'Samstag 28. Oktober 2023 ab 20 Uhr',
          costs: 'Website Chäsmärcht',
          additionalCosts: 'Eintritt frei, ',
          linkAvailable: true,
          link: 'https://www.alpkaesemarkt.ch/programm/',
          where: 'MZH Muotathal',
          img: './assets/img/concerts/smaller/muotathal.jpg',
          imgalt: 'Foto Käsemarkt',
          impressionen: false,
          impressionenlink: '',
          past: 'Am Samstagabend 28. Oktober 2023 durften wir im Rahmen des Unterhaltungsabend am Muotitaler Alpchäsmärcht auftreten. Mit Andrea Ulrich am Akkordeon, Gaby Näf am Klavier und Monika Greenwald am Cello.'
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
          imgalt: 'Foto vom Kulturschock im Gaswerk',
          impressionen: false,
          impressionenlink: '',
          past: 'Am Freitagabend 1. September konnten wir im vollen Gaswerk in Seewen auftreten. Zusammen mit dem Männerchor Schwyz und Vocabular aus Luzern. Esther Lenherr begleitete uns am Klavier.'
        },
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
          imgalt: 'Jazz meets Folklore',
          impressionen: true,
          impressionenlink: 'impressions.html#jazz22',
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
          img: './assets/img/concerts/smaller/kulturschock2_600.JPG',
          imgalt: 'Bild',
          past: 'Unser erstes grösseres Konzert nach Corona war ein echtes Erlebnis. Am Freitag 3. Juni 2022 füllten wir zusammen mit dem Kulturschock Streichorchester das Gaswerk in Seewen.',
          impressionen: true,
          impressionenlink: 'impressions.html#kultur22'
        },
        {
          title: 'Singing Advent 2019',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/advent_600_400.jpg',
          imgalt: 'Bild',
          past: 'Am 1. Dezember 2019 durften wir in der Kollegikirche Schwyz Advents- und Weihnachtslieder aus aller Welt singen. Mitwirkende: dMädels, COR der Kammerchor, Projektchor ad hoc. Orgel: Peter Fröhlich, Leitung: Cristina Marugg.',
          impressionen: true,
          impressionenlink: 'impressions.html#singing20'
        },
        {
          title: 'Intrinsic Soundz Knackeboul dMädels',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/knacke_600_400.jpg',
          imgalt: 'Bild',
          past: 'Am Mittwochabend 30. Oktober 2019 füllten wir zusammen mit Intrinsic Soundz und Knackebouldas Gaswerk in Seewen, Schwyz.',
          impressionen: true,
          impressionenlink: 'impressions.html#knacke'
        },
        {
          title: 'Klang 19',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/klang_600.jpg',
          imgalt: 'Bild',
          past: 'Am 15. Juni 2019 konnten wir im Rahmen des „Klang ’19 – Festival der Höhepunkte“ in der reformierten Kirche Wädenswil auftreten.',
          impressionen: true,
          impressionenlink: 'impressions.html#klang'
        },
        {
          title: 'Konzert Swissness',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/swissness_600_400.jpg',
          imgalt: 'Bild',
          past: 'Am 11. April im Schützenhaus Schwyz und am 12. April 2019 im Gaswerk Seewen präsentierten wir zusammen mit Interfolk ein Konzert voll mit Schweizerlieder.',
          impressionen: true,
          impressionenlink: 'impressions.html#swissness'
        },
        {
          title: 'Es dutzend Stimme',
          description: 'xx',
          when: 'xx',
          costs: '',
          linkAvailable: false,
          link: '',
          where: '',
          img: './assets/img/concerts/smaller/dutzend.jpg',
          imgalt: 'Bild',
          past: 'Am 18. April konnten wir im Gaswerk Seewen und am 19. April 2018 im Schützenhaus Schwyz unsere Zuhörer begeistern.',
          impressionen: false,
          impressionenlink: ''
        }
      ]
    }
  }
}).mount('#app')

