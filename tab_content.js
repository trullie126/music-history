
let composers = [
    {
        section: 'medieval',
        composers: [
            {
                id: 'hildegard',
                image: '../../images/hildegard.jpg',
                name: 'St. Hildegard von Bingen',
                text: 'Volutpat est velit egestas dui id ornare arcu odio ut. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Ut enim blandit volutpat maecenas volutpat. In pellentesque massa placerat duis ultricies lacus sed. Sed velit dignissim sodales ut eu sem integer vitae justo. Imperdiet massa tincidunt nunc pulvinar sapien et. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Et netus et malesuada fames ac turpis.',
                works: ['Ordo Virtutum']
            },
            {
                id: 'abelard',
                image: '../../images/abelard.jpg',
                name: 'Peter Abelard',
                text: 'In nibh mauris cursus mattis molestie a. Tincidunt arcu non sodales neque sodales ut etiam sit. Nisi est sit amet facilisis magna. Tellus molestie nunc non blandit massa enim nec dui nunc. Massa placerat duis ultricies lacus sed turpis. Malesuada fames ac turpis egestas sed tempus urna et.',
                works: ['De Profundis', 'Dolorum Solatium', 'Epithalamica']
            },
            {
                id: 'de-machaut',
                image: '../../images/demachaut.jpg',
                name: 'Guillaume de Machaut',
                text: 'Pharetra convallis posuere morbi leo. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Non arcu risus quis varius quam quisque id diam vel. Tellus in hac habitasse platea dictumst vestibulum. Mattis enim ut tellus elementum sagittis vitae et. A arcu cursus vitae congue mauris rhoncus aenean vel.',
                works: ['Messe de Nostre Dame', 'Rose, Liz, Printemps, Verdure']
            }
        ]
    },
    {
        section: 'renaissance',
        composers: [
            {
                id: 'byrd',
                image: '../../images/byrd.png',
                name: 'William Byrd',
                text: 'Magnis dis parturient montes nascetur ridiculus mus. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Dictum non consectetur a erat. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Adipiscing bibendum est ultricies integer quis auctor. Congue quisque egestas diam in arcu.',
                works: ['Fitzwilliam Virginal Book']
            },
            {
                id: 'tallis',
                image: '../../images/tallis.png',
                name: 'Thomas Tallis',
                text: 'Magnis dis parturient montes nascetur ridiculus mus. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Dictum non consectetur a erat. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Adipiscing bibendum est ultricies integer quis auctor. Congue quisque egestas diam in arcu.Fames ac turpis egestas maecenas. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Orci dapibus ultrices in iaculis nunc sed augue lacus. Semper auctor neque vitae tempus quam pellentesque nec.',
                works: ['Gaude Gloriosa Dei Mater', 'Puer Natus Est Nobis']
            },
            {
                id: 'palestrina',
                image: '../../images/palestrina.jpg',
                name: 'Giovanni Pierluigi da Palestrina',
                text: 'Eget velit aliquet sagittis id consectetur. Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Aliquet lectus proin nibh nisl condimentum id venenatis. Purus gravida quis blandit turpis cursus in hac habitasse platea. Amet justo donec enim diam vulputate ut pharetra sit. Leo urna molestie at elementum eu facilisis sed odio morbi. Fermentum iaculis eu non diam phasellus vestibulum lorem.',
                works: ['Missa Papae Marcelli', 'Jesu Rex Admirabilis', 'Ave Regina Caelorum']
            }
        ]
    },
    {
        section: 'baroque',
        composers: [
            {
                id: 'bach',
                image: '../../images/bach.jpg',
                name: 'Johann Sebastian Bach',
                text: 'Nisi est sit amet facilisis magna etiam tempor. In arcu cursus euismod quis viverra. Volutpat est velit egestas dui id ornare arcu odio ut. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Ut enim blandit volutpat maecenas volutpat. In pellentesque massa placerat duis ultricies lacus sed.',
                works: ['Brandenburg Concertos', 'Goldberg Variations', 'Concerto for Two Violins in D minor']
            },
            {
                id: 'vivaldi',
                image: '../../images/vivaldi.jpg',
                name: 'Antonio Vivaldi',
                text: 'Sed velit dignissim sodales ut eu sem integer vitae justo. Imperdiet massa tincidunt nunc pulvinar sapien et. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Et netus et malesuada fames ac turpis. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.',
                works: ['The Four Seasons', 'Six Flute Concertos, Op. 10']
            },
            {
                id: 'pachelbel',
                image: '../../images/pachelbel.jpg',
                name: 'Johann Pachelbel',
                text: 'I couldn\'t find a good image :(<br><br>Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Nunc consequat interdum varius sit. Dolor morbi non arcu risus. Feugiat in ante metus dictum at. Amet mauris commodo quis imperdiet massa. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Bibendum neque egestas congue quisque egestas diam in.',
                works: ['Pachelbel\'s Canon', 'Chaconne in F minor', 'Toccata in G minor, P.466']
            }
        ]
    },
    {
        section: 'classical',
        composers: [
            {
                id: 'mozart',
                image: '../../images/tab-mozart.jpg',
                name: 'Wolfgang Amadeus Mozart',
                text: 'Imperdiet nulla malesuada pellentesque elit eget gravida. Augue interdum velit euismod in pellentesque. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Nam at lectus urna duis. Pretium viverra suspendisse potenti nullam ac.',
                works: ['Requieum', 'Rondo Alla Turca', 'Eine kleine Nachtmusik']
            },
            {
                id: 'beethoven',
                image: '../../images/beethoven.jpg',
                name: 'Ludwig van Beethoven',
                text: 'Semper risus in hendrerit gravida rutrum. Placerat in egestas erat imperdiet sed euismod nisi. Arcu cursus euismod quis viverra. Maecenas pharetra convallis posuere morbi leo. Fames ac turpis egestas maecenas.',
                works: ['Moonlight Sonata', 'Fur Elise']
            },
            {
                id: 'schubert',
                image: '../../images/schubert.jpg',
                name: 'Franz Schubert',
                text: 'Magnis dis parturient montes nascetur ridiculus mus. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Dictum non consectetur a erat. Iaculis urna id volutpat lacus laoreet non curabitur gravida.',
                works: ['Winterreise', 'Ave Maria']
            }
        ]
    },
    {
        section: 'romantic',
        composers: [
            {
                id: 'liszt',
                image: '../../images/liszt.jpg',
                name: 'Franz Liszt',
                text: 'In nibh mauris cursus mattis molestie a. Tincidunt arcu non sodales neque sodales ut etiam sit. Nisi est sit amet facilisis magna. Tellus molestie nunc non blandit massa enim nec dui nunc. Massa placerat duis ultricies lacus sed turpis. Malesuada fames ac turpis egestas sed tempus urna et.',
                works: ['Liebestraum No. 3 in A-flat major', 'La Campanella']
            },
            {
                id: 'chopin',
                image: '../../images/chopin.jpg',
                name: 'Frederic Chopin',
                text: 'Nunc sed blandit libero volutpat sed cras ornare arcu. Feugiat vivamus at augue eget arcu dictum varius duis at. A scelerisque purus semper eget duis at tellus at urna.',
                works: ['Ballade no. 1 in G minor, op. 23', 'Nocturne Op. 0: No. 2 in E-Flat Major']
            },
            {
                id: 'debussy',
                image: '../../images/debussy.jpg',
                name: 'Claude Debussy',
                text: 'Purus faucibus ornare suspendisse sed nisi lacus sed. Feugiat nisl pretium fusce id velit ut tortor pretium. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Porttitor eget dolor morbi non arcu risus quis varius quam. Elit ut aliquam purus sit.',
                works: ['Claire de Lune', 'Prelude to the Afternoon of a Faun', 'La Mer']
            }
        ]
    },
    {
        section: 'contemporary',
        composers: [
            {
                id: 'ravel',
                image: '../../images/ravel.jpg',
                name: 'Maurice Ravel',
                text: 'At risus viverra adipiscing at. Nisi vitae suscipit tellus mauris a. Pharetra convallis posuere morbi leo. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Non arcu risus quis varius quam quisque id diam vel. Tellus in hac habitasse platea dictumst vestibulum.',
                works: ['Pavane for a Dead Princess', 'Miroirs: III. Une Barque Sur L\'ocean', 'Bolero']
            },
            {
                id: 'shostakovich',
                image: '../../images/shostakovich.jpg',
                name: 'Dmitri Shostakovich',
                text: 'Mattis enim ut tellus elementum sagittis vitae et. A arcu cursus vitae congue mauris rhoncus aenean vel. Pellentesque habitant morbi tristique senectus et netus et. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra.',
                works: ['Symphony No. 4 in D-minor', 'Piano Concerto No. 2 in F-major']
            },
            {
                id: 'rachmaninoff',
                image: '../../images/rachmaninoff.jpg',
                name: 'Sergei Rachmaninoff',
                text: 'Feugiat nisl pretium fusce id velit ut tortor pretium. Quis enim lobortis scelerisque fermentum dui faucibus in ornare quam. Porttitor eget dolor morbi non arcu risus quis varius quam. Elit ut aliquam purus sit. At risus viverra adipiscing at. Nisi vitae suscipit tellus mauris a.',
                works: ['Isle of the Dead', 'Piano Concerto No. 2 in C-Minor', 'Symphony No. 2 in E-minor']
            }
        ]
    }
];

export default composers;