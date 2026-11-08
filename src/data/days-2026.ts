// src/data/days-2026.ts
import { MarathonDay } from '../types/challenge';

export const DAYS_2026: MarathonDay[] = [
  {
    year: 2026,
    dayNumber: 1,
    slug: 'points',
    category: 'map',
    releaseDate: '2026-11-01T00:00:00Z',
    moodboardKeywords: ['Points of Interest', 'Vector Data', 'Spatial Density'],
    suggestedStackOrTools: ['Leaflet.js', 'GeoJSON', 'TypeScript'],
    localization: {
      en: {
        theme: 'Points',
        title: 'Day 01: Points',
        teaserDescription: 'Exploring spatial density and point-based geospatial distribution.',
      },
      de: {
        theme: 'Punkte',
        title: 'Tag 01: Punkte',
        teaserDescription: 'Untersuchung der räumlichen Dichte und punktbasierten Geodaten.',
      },
      ru: {
        theme: 'Точки',
        title: 'День 01: Точки',
        teaserDescription: 'Исследование пространственной плотности и точечных геоданных.',
      },
      pl: {
        theme: 'Punkty',
        title: 'Dzień 01: Punkty',
        teaserDescription: 'Badanie gęstości przestrzennej i punktowych danych geograficznych.',
      },
    },
  },
  {
    year: 2026,
    dayNumber: 2,
    slug: 'lines',
    category: 'map',
    releaseDate: '2026-11-02T00:00:00Z',
    moodboardKeywords: ['Routes', 'Flows', 'Networks', 'Linestrings'],
    suggestedStackOrTools: ['Turf.js', 'Deck.gl', 'Mapbox GL'],
    localization: {
      en: {
        theme: 'Lines',
        title: 'Day 02: Lines',
        teaserDescription: 'Visualizing transportation networks, rivers, and linear paths.',
      },
      de: {
        theme: 'Linien',
        title: 'Tag 02: Linien',
        teaserDescription: 'Visualisierung von Verkehrsnetzen, Flüssen und linearen Pfaden.',
      },
      ru: {
        theme: 'Линии',
        title: 'День 02: Линии',
        teaserDescription: 'Визуализация транспортных сетей, рек и линейных маршрутов.',
      },
      pl: {
        theme: 'Linie',
        title: 'Dzień 02: Linie',
        teaserDescription: 'Wizualizacja sieci transportowych, rzek i ścieżek liniowych.',
      },
    },
  },
  {
    year: 2026,
    dayNumber: 3,
    slug: 'polygons',
    category: 'map',
    releaseDate: '2026-11-03T00:00:00Z',
    moodboardKeywords: ['Districts', 'Zoning', 'Choropleth', 'Boundaries'],
    suggestedStackOrTools: ['Cesium.js', 'D3.js', 'DART'],
    localization: {
      en: {
        theme: 'Polygons',
        title: 'Day 03: Polygons',
        teaserDescription: 'Mapping territorial boundaries, urban zoning, and area coverage.',
      },
      de: {
        theme: 'Polygone',
        title: 'Tag 03: Polygone',
        teaserDescription: 'Kartierung von Gebietsgrenzen, städtischer Zonierung und Flächen.',
      },
      ru: {
        theme: 'Полигоны',
        title: 'День 03: Полигоны',
        teaserDescription: 'Картографирование территориальных границ, зонирования и площадей.',
      },
      pl: {
        theme: 'Poligony',
        title: 'Dzień 03: Poligony',
        teaserDescription: 'Mapowanie granic terytorialnych, stref urbanistycznych i powierzchni.',
      },
    },
  },
  // Day 4
  {
    year: 2026,
    dayNumber: 4,
    slug: 'clusters',
    category: 'map',
    releaseDate: '2026-11-04T00:00:00.000Z',
    moodboardKeywords: ['density', 'grouping', 'concentration'],
    suggestedStackOrTools: ['MarkerCluster', 'JavaScript'],
    localization: {
      en: { title: 'Clusters', theme: 'Clusters', teaserDescription: 'Highlighting density concentrations and spatial grouping phenomena.', fullDescription: 'Implementing hierarchical clustering algorithms to manage dense datasets on web maps.' },
      de: { title: 'Cluster', theme: 'Cluster', teaserDescription: 'Hervorhebung von Dichtekonzentrationen und räumlichen Gruppierungen.', fullDescription: 'Implementierung hierarchischer Clustering-Algorithmen.' },
      ru: { title: 'Кластеры', theme: 'Кластеры', teaserDescription: 'Выделение концентраций плотности и явлений пространственной группировки.', fullDescription: 'Реализация иерархических алгоритмов кластеризации для плотных наборов данных.' },
      pl: { title: 'Klastry', theme: 'Klastry', teaserDescription: 'Wyróżnianie koncentracji gęstości i grupowania przestrzennego.', fullDescription: 'Implementacja algorytmów grupowania hierarhicznego.' }
    }
  },
  // Day 5
  {
    year: 2026,
    dayNumber: 5,
    slug: 'senses-sight',
    category: 'architecture',
    releaseDate: '2026-11-05T00:00:00.000Z',
    moodboardKeywords: ['viewsheds', 'panoramas', 'visual'],
    suggestedStackOrTools: ['3D Viz', 'Three.js', 'Canvas'],
    localization: {
      en: { title: 'Senses: Sight', theme: 'Senses: Sight', teaserDescription: 'Visual exposure, skyline panoramas, and urban viewsheds analysis.', fullDescription: 'Calculating line-of-sight visibility polygons and immersive architectural vantage points.' },
      de: { title: 'Sinn: Sicht', theme: 'Sinn: Sicht', teaserDescription: 'Visuelle Exposition, Skyline-Panoramen und Analyse städtischer Sichtfelder.', fullDescription: 'Berechnung von Sichtbarkeits-Polygonen und architektonischen Standpunkten.' },
      ru: { title: 'Чувства: Зрение', theme: 'Сенсорика: Зрение', teaserDescription: 'Визуальная экспозиция, панорамы скайлайна и анализ видимости в городской среде.', fullDescription: 'Расчет полигонов видимости (viewsheds) и иммерсивных архитектурных ракурсов.' },
      pl: { title: 'Zmysły: Wzrok', theme: 'Zmysły: Wzrok', teaserDescription: 'Ekspozycja wizualna, panoramy i analiza osi widokowych.', fullDescription: 'Obliczanie poligonów widoczności i punktów widokowych.' }
    }
  },
  // Day 6
  {
    year: 2026,
    dayNumber: 6,
    slug: 'vintage',
    category: 'sketch',
    releaseDate: '2026-11-06T00:00:00.000Z',
    moodboardKeywords: ['retro', 'parchment', 'historical'],
    suggestedStackOrTools: ['Ink', 'SVG filters', 'CSS'],
    localization: {
      en: { title: 'Vintage', theme: 'Vintage', teaserDescription: 'Historical map styling, antique typography, and parchment aesthetics.', fullDescription: 'Recreating old cartographic styles using custom SVG filters, sepia tones, and hand-inked textures.' },
      de: { title: 'Vintage', theme: 'Vintage', teaserDescription: 'Historischer Kartenstil, antike Typografie und Pergament-Ästhetik.', fullDescription: 'Nachbildung alter kartografischer Stile mit benutzerdefinierten SVG-Filtern.' },
      ru: { title: 'Винтаж', theme: 'Винтаж', teaserDescription: 'Исторический картографический стиль, антикварная типографика и пергаментная эстетика.', fullDescription: 'Воссоздание старинных стилей карт с помощью кастомных SVG-фильтров и тушевых текстур.' },
      pl: { title: 'Wentylowany / Vintage', theme: 'Vintage', teaserDescription: 'Historyczny styl map, antyczna typografia i estetka pergaminu.', fullDescription: 'Odtwarzanie dawnych stylów kartograficznych przy użyciu filtrów SVG.' }
    }
  },
  // Day 7
  {
    year: 2026,
    dayNumber: 7,
    slug: '10-minute-map',
    category: 'code',
    releaseDate: '2026-11-07T00:00:00.000Z',
    moodboardKeywords: ['speed', 'minimal', 'quick-fix'],
    suggestedStackOrTools: ['Vanilla JS', 'CSS Grid'],
    localization: {
      en: { title: '10 Minute Map', theme: '10 minute map', teaserDescription: 'Rapid prototyping challenge built under strict time constraints.', fullDescription: 'A lightning-fast web map component assembled from scratch in under 10 minutes.' },
      de: { title: '10-Minuten-Karte', theme: '10 minute map', teaserDescription: 'Rapid-Prototyping-Herausforderung unter strengen Zeitvorgaben.', fullDescription: 'Eine blitzschnelle Webkarte, erstellt in unter 10 Minuten.' },
      ru: { title: 'Карта за 10 минут', theme: '10 minute map', teaserDescription: 'Челлендж быстрого прототипирования в условиях жестких временных ограничений.', fullDescription: 'Молниеносный компонент веб-карты, собранный с нуля менее чем за 10 минут.' },
      pl: { title: 'Mapa w 10 minut', theme: '10 minute map', teaserDescription: 'Szybkie prototypowanie w warunkach ograniczenia czasowego.', fullDescription: 'Błyskawicznie złożony komponent mapy internetowej.' }
    }
  },
  // Day 8
  {
    year: 2026,
    dayNumber: 8,
    slug: 'utopia',
    category: 'architecture',
    releaseDate: '2026-11-08T00:00:00.000Z',
    moodboardKeywords: ['ideal', 'future', 'masterplan'],
    suggestedStackOrTools: ['Urban Planning', 'SVG'],
    localization: {
      en: { title: 'Utopia', theme: 'Utopia', teaserDescription: 'Designing ideal cities, speculative urbanism, and harmonious masterplans.', fullDescription: 'Concept urban design layout focusing on pedestrian priority, green networks, and radial symmetry.' },
      de: { title: 'Utopie', theme: 'Utopia', teaserDescription: 'Entwurf idealer Städte, spekulativer Urbanismus und harmonische Masterpläne.', fullDescription: 'Konzeptionelles Stadtbaudesign mit Fokus auf Fußgängerzonen und grüne Netze.' },
      ru: { title: 'Утопия', theme: 'Utopia', teaserDescription: 'Проектирование идеальных городов, спекулятивный урбанизм и гармоничные мастер-планы.', fullDescription: 'Концептуальный градостроительный дизайн с фокусом на пешеходную связность и зеленые каркасы.' },
      pl: { title: 'Utopia', theme: 'Utopia', teaserDescription: 'Projektowanie idealnych miast, urbanistyką spekulacyjna i plany zagospodarowania.', fullDescription: 'Koncepcyjny projekt urbanistyczny z naciskiem na przestrzeń dla pieszych.' }
    }
  },
  // Day 9
  {
    year: 2026,
    dayNumber: 9,
    slug: 'urban-rural',
    category: 'map',
    releaseDate: '2026-11-09T00:00:00.000Z',
    moodboardKeywords: ['transition', 'sprawl', 'countryside'],
    suggestedStackOrTools: ['GIS', 'GeoJSON'],
    localization: {
      en: { title: 'Urban-Rural', theme: 'Urban-rural', teaserDescription: 'Examining the gradients, fringes, and transition zones between city and nature.', fullDescription: 'Spatial analysis of suburban sprawl, peri-urban agriculture, and density gradients.' },
      de: { title: 'Stadt-Land', theme: 'Urban-rural', teaserDescription: 'Untersuchung der Übergangszonen und Ränder zwischen Stadt und Natur.', fullDescription: 'Räumliche Analyse von Zersiedelung und peri-urbaner Landwirtschaft.' },
      ru: { title: 'Город-деревня', theme: 'Urban-rural', teaserDescription: 'Исследование градиентов, окраин и переходных зон между мегаполисом и природой.', fullDescription: 'Пространственный анализ субурбанизации, периферийного земледелия и градиентов плотности.' },
      pl: { title: 'Miasto-Wieś', theme: 'Urban-rural', teaserDescription: 'Badanie stref przejściowych i obrzeży między miastem a naturą.', fullDescription: 'Analiza przestrzenna rozlewania się miast i rolnictwa periurbanistycznego.' }
    }
  },
  // Day 10
  {
    year: 2026,
    dayNumber: 10,
    slug: 'prompting-only',
    category: 'code',
    releaseDate: '2026-11-10T00:00:00.000Z',
    moodboardKeywords: ['ai', 'generation', 'llm'],
    suggestedStackOrTools: ['AI Agents', 'Prompt Engineering'],
    localization: {
      en: { title: 'Prompting Only', theme: 'Prompting only', teaserDescription: 'Maps and artifacts generated exclusively through AI prompt engineering.', fullDescription: 'Exploring the boundaries of pure generative workflows and prompt-crafted spatial layouts.' },
      de: { title: 'Nur Prompting', theme: 'Prompting only', teaserDescription: 'Ausschließlich durch AI-Prompt-Engineering generierte Karten und Artefakte.', fullDescription: 'Erforschung generativer Workflows und prompt-basierter Layouts.' },
      ru: { title: 'Только промпты', theme: 'Prompting only', teaserDescription: 'Карты и артефакты, созданные исключительно с помощью искусственного интеллекта и промптов.', fullDescription: 'Исследование границ чисто генеративных воркфлоу и пространственных макетов.' },
      pl: { title: 'Tylko prompty', theme: 'Prompting only', teaserDescription: 'Mapy i artefakty generowane wyłącznie za pomocą inżynierii promptów AI.', fullDescription: 'Badanie granic czysto generatywnych przepływów pracy.' }
    }
  },
  // Day 11
  {
    year: 2026,
    dayNumber: 11,
    slug: 'senses-sound',
    category: 'map',
    releaseDate: '2026-11-11T00:00:00.000Z',
    moodboardKeywords: ['noise', 'acoustics', 'soundscape'],
    suggestedStackOrTools: ['Web Audio', 'Leaflet.js'],
    localization: {
      en: { title: 'Senses: Sound', theme: 'Senses: Sound', teaserDescription: 'Acoustic mapping, urban noise pollution, and soundscape geographies.', fullDescription: 'Visualizing decibel gradients, traffic noise zones, and quiet parks in the city.' },
      de: { title: 'Sinn: Klang', theme: 'Senses: Sound', teaserDescription: 'Akustische Kartierung, Lärmbelastung und Klanglandschaften.', fullDescription: 'Visualisierung von Dezibel-Gradienten und städtischen Ruhezonen.' },
      ru: { title: 'Чувства: Звук', theme: 'Senses: Sound', teaserDescription: 'Акустическое картирование, городской шум и географическая среда звуковых ландшафтов.', fullDescription: 'Визуализация градиентов децибел, зон шума дорог и тихих парков.' },
      pl: { title: 'Zmysły: Dźwięk', theme: 'Senses: Sound', teaserDescription: 'Mapowanie akustyczne, hałas miejski i pejzaże dźwiękowe.', fullDescription: 'Wizualizowanie gradientów decybeli i miejskich stref ciszy.' }
    }
  },
  // Day 12
  {
    year: 2026,
    dayNumber: 12,
    slug: 'power',
    category: 'map',
    releaseDate: '2026-11-12T00:00:00.000Z',
    moodboardKeywords: ['energy', 'grids', 'infrastructure'],
    suggestedStackOrTools: ['Leaflet.js', 'Networks'],
    localization: {
      en: { title: 'Power', theme: 'Power', teaserDescription: 'Mapping electrical grids, power plants, and energy infrastructure networks.', fullDescription: 'High-voltage transmission lines, substation distribution points, and renewable energy sites.' },
      de: { title: 'Energie', theme: 'Power', teaserDescription: 'Kartierung von Stromnetzen, Kraftwerken und Energieinfrastruktur.', fullDescription: 'Hochspannungsleitungen und Verteilungsstationen.' },
      ru: { title: 'Энергия', theme: 'Power', teaserDescription: 'Картографирование электросетей, электростанций и инфраструктуры энергетики.', fullDescription: 'Линии высоковольтных передач, подстанции и объекты возобновляемой энергетики.' },
      pl: { title: 'Energia', theme: 'Power', teaserDescription: 'Mapowanie sieci elektrycznych, elektrowni i infrastruktury energetycznej.', fullDescription: 'Linie przesyłowe wysokiego napięcia i stacje transformatorowe.' }
    }
  },
  // Day 13
  {
    year: 2026,
    dayNumber: 13,
    slug: 'interactions',
    category: 'code',
    releaseDate: '2026-11-13T00:00:00.000Z',
    moodboardKeywords: ['events', 'dynamics', 'ui-ux'],
    suggestedStackOrTools: ['TypeScript', 'DOM Events'],
    localization: {
      en: { title: 'Interactions', theme: 'Interactions', teaserDescription: 'Dynamic user interactions, hover effects, and responsive cartography.', fullDescription: 'Advanced event-driven map controls and seamless UI feedback loops.' },
      de: { title: 'Interaktionen', theme: 'Interactions', teaserDescription: 'Dynamische Benutzerinteraktionen und responsive Kartografie.', fullDescription: 'Fortgeschrittene ereignisgesteuerte Kartensteuerungen.' },
      ru: { title: 'Взаимодействия', theme: 'Interactions', teaserDescription: 'Динамические пользовательские взаимодействия, ховер-эффекты и адаптивная картография.', fullDescription: 'Продвинутые событийно-ориентированные элементы управления картой.' },
      pl: { title: 'Interakcje', theme: 'Interactions', teaserDescription: 'Dynamiczne interakcje użytkownika i responsywna kartografia.', fullDescription: 'Zaawansowane sterowanie mapą oparte na zdarzeniach.' }
    }
  },
  // Day 14
  {
    year: 2026,
    dayNumber: 14,
    slug: 'borgesian-map',
    category: 'sketch',
    releaseDate: '2026-11-14T00:00:00.000Z',
    moodboardKeywords: ['scale', 'empire', 'surreal'],
    suggestedStackOrTools: ['Ink', 'Concept Art'],
    localization: {
      en: { title: 'Borgesian Map', theme: 'Borgesian map', teaserDescription: 'Maps of scale 1:1, infinite details, and literary cartography.', fullDescription: 'Artistic exploration of Jorge Luis Borges’ allegory on exactitude in science and mapmaking.' },
      de: { title: 'Borgesianische Karte', theme: 'Borgesian map', teaserDescription: 'Karten im Maßstab 1:1, unendliche Details und literarische Kartografie.', fullDescription: 'Künstlerische Erkundung von Borges’ Allegorie über exakte Kartografie.' },
      ru: { title: 'Борхесианская карта', theme: 'Borgesian map', teaserDescription: 'Карты в масштабе 1:1, бесконечные детали и литературная картография.', fullDescription: 'Художественное исследование аллегории Хорхе Луиса Борхеса о точности в науке.' },
      pl: { title: 'Mapa Borgesjańska', theme: 'Borgesian map', teaserDescription: 'Mapy w skali 1:1, nieskończone detale i kartografia literacka.', fullDescription: 'Artystyczne poszukiwania wokół alegorii Jorge Luisa Borgesa.' }
    }
  },
  // Day 15
  {
    year: 2026,
    dayNumber: 15,
    slug: 'inside-out',
    category: 'architecture',
    releaseDate: '2026-11-15T00:00:00.000Z',
    moodboardKeywords: ['section', 'interior', 'axonometric'],
    suggestedStackOrTools: ['CAD', 'Vector Graphics'],
    localization: {
      en: { title: 'Inside Out', theme: 'Inside out', teaserDescription: 'Building sections, interior spatial layouts, and inverted perspectives.', fullDescription: 'Axonometric architectural cutaways revealing building cores and internal circulation.' },
      de: { title: 'Nach außen gekehrt', theme: 'Inside out', teaserDescription: 'Gebäudeschnitte, Innenraumlayouts und invertierte Perspektiven.', fullDescription: 'Axonometrische architektonische Schnitte.' },
      ru: { title: 'Наизнанку', theme: 'Inside out', teaserDescription: 'Разрезы зданий, интерьерные планировки и инвертированные перспективы.', fullDescription: 'Аксонометрические архитектурные разрезы, раскрывающие внутренние ядра и циркуляцию.' },
      pl: { title: 'Od podszewki', theme: 'Inside out', teaserDescription: 'Przekroje budynków, układy wnętrz i odwrócone perspektywy.', fullDescription: 'Aksonometryczne przekroje architektoniczne.' }
    }
  },
  // Day 16
  {
    year: 2026,
    dayNumber: 16,
    slug: 'collaborative-map',
    category: 'code',
    releaseDate: '2026-11-16T00:00:00.000Z',
    moodboardKeywords: ['osm', 'crowdsource', 'community'],
    suggestedStackOrTools: ['OpenStreetMap', 'Leaflet.js'],
    localization: {
      en: { title: 'Collaborative Map', theme: 'Collaborative map', teaserDescription: 'Open-source contributions, crowdsourced data, and community mapping.', fullDescription: 'Integrating crowd data layers and highlighting collaborative urban mapping efforts.' },
      de: { title: 'Kollaborative Karte', theme: 'Collaborative map', teaserDescription: 'Open-Source-Beiträge und Community-Kartografie.', fullDescription: 'Integration von Crowdsourcing-Datenebenen.' },
      ru: { title: 'Коллаборативная карта', theme: 'Collaborative map', teaserDescription: 'Open-source вклад, краудсорсинговые данные и общественное картографирование.', fullDescription: 'Интеграция слоев крауд-данных и совместных инициатив городского картирования.' },
      pl: { title: 'Mapa wspólna', theme: 'Collaborative map', teaserDescription: 'Wpisy open-source, dane społecznościowe i mapowanie obywatelskie.', fullDescription: 'Integracja warstw danych społecznościowych.' }
    }
  },
  // Day 17
  {
    year: 2026,
    dayNumber: 17,
    slug: 'light-and-dark',
    category: 'map',
    releaseDate: '2026-11-17T00:00:00.000Z',
    moodboardKeywords: ['contrast', 'night', 'illumination'],
    suggestedStackOrTools: ['CSS Themes', 'Tile Layers'],
    localization: {
      en: { title: 'Light & Dark', theme: 'Light & dark', teaserDescription: 'High contrast cartography, night lights, and shadow analysis.', fullDescription: 'Dynamic palette switching between bright daytime view and high-contrast dark mode.' },
      de: { title: 'Hell & Dunkel', theme: 'Light & dark', teaserDescription: 'Kontrastreiche Kartografie, Nachtlichter und Schattenanalyse.', fullDescription: 'Dynamischer Palettenwechsel zwischen Tag- und Nachtansicht.' },
      ru: { title: 'Свет и тень', theme: 'Light & dark', teaserDescription: 'Контрастная картография, ночное освещение и анализ теней.', fullDescription: 'Динамическое переключение палитры между светлым дневным режимом и контрастным темным.' },
      pl: { title: 'Światło i Ciemność', theme: 'Light & dark', teaserDescription: 'Kartografia kontrastowa, nocne światła i analiza cieni.', fullDescription: 'Dynamiczne przełączanie palety barw.' }
    }
  },
  // Day 18
  {
    year: 2026,
    dayNumber: 18,
    slug: 'null',
    category: 'code',
    releaseDate: '2026-11-18T00:00:00.000Z',
    moodboardKeywords: ['empty', 'void', 'missing-data'],
    suggestedStackOrTools: ['TypeScript', 'Error Handling'],
    localization: {
      en: { title: 'NULL', theme: 'NULL', teaserDescription: 'Mapping blank spots, missing values, and unmapped voids.', fullDescription: 'Handling empty geospatial datasets, null geometries, and uncharted territories gracefully.' },
      de: { title: 'NULL', theme: 'NULL', teaserDescription: 'Kartierung leerer Flecken, fehlender Werte und unbekannter Regionen.', fullDescription: 'Umgang mit leeren Geodaten und Null-Geometrien.' },
      ru: { title: 'NULL (Пустота)', theme: 'NULL', teaserDescription: 'Картографирование белых пятен, отсутствующих значений и пустых пространств.', fullDescription: 'Корректная обработка пустых геопространственных датасетов и нулевых геометрий.' },
      pl: { title: 'NULL', theme: 'NULL', teaserDescription: 'Mapowanie białych plam, brakujących danych i pustych przestrzeni.', fullDescription: 'Obsługa pustych zestawów danych geoprzestrzennych.' }
    }
  },
  // Day 19
  {
    year: 2026,
    dayNumber: 19,
    slug: 'senses-smell',
    category: 'map',
    releaseDate: '2026-11-19T00:00:00.000Z',
    moodboardKeywords: ['air-quality', 'scents', 'atmosphere'],
    suggestedStackOrTools: ['Leaflet.js', 'Heatmap'],
    localization: {
      en: { title: 'Senses: Smell', theme: 'Senses: Smell', teaserDescription: 'Olfactory maps, air quality indicators, and atmospheric scents.', fullDescription: 'Visualizing urban odors, green park fragrances, and industrial emissions zones.' },
      de: { title: 'Sinn: Geruch', theme: 'Senses: Smell', teaserDescription: 'Geruchskarten, Luftqualitätsindikatoren und atmosphärische Düfte.', fullDescription: 'Visualisierung von städtischen Gerüchen und Industrieemissionen.' },
      ru: { title: 'Чувства: Запах', theme: 'Senses: Smell', teaserDescription: 'Обонятельные карты, показатели качества воздуха и атмосферные ароматы.', fullDescription: 'Визуализация городских запахов, ароматов парков и зон выбросов.' },
      pl: { title: 'Zmysły: Węch', theme: 'Senses: Smell', teaserDescription: 'Mapy zapachowe, wskaźniki jakości powietrza i aromaty.', fullDescription: 'Wizualizowanie zapachów miejskich i stref emisji przemysłowych.' }
    }
  },
  // Day 20
  {
    year: 2026,
    dayNumber: 20,
    slug: 'hexagons',
    category: 'map',
    releaseDate: '2026-11-20T00:00:00.000Z',
    moodboardKeywords: ['grids', 'tiling', 'h3'],
    suggestedStackOrTools: ['Uber H3', 'Leaflet.js'],
    localization: {
      en: { title: 'Hexagons', theme: 'Hexagons', teaserDescription: 'Hexagonal tessellations, H3 spatial indexing, and discrete global grids.', fullDescription: 'Aggregating point metrics into smooth hexagonal bins for density visualization.' },
      de: { title: 'Sechsecke', theme: 'Hexagons', teaserDescription: 'Hexagonale Tessellationen und räumliche H3-Indizierung.', fullDescription: 'Aggregierung von Punktmetriken in hexagonale Bins.' },
      ru: { title: 'Шестиугольники', theme: 'Hexagons', teaserDescription: 'Гексагональные мозаики, пространственная индексация H3 и дискретные глобальные сетки.', fullDescription: 'Агрегация точечных метрик в сглаженные гексагональные ячейки.' },
      pl: { title: 'Sześciokąty', theme: 'Hexagons', teaserDescription: 'Tesselacje sześciokątne i indeksowanie przestrzenne H3.', fullDescription: 'Agregacja metryk punktowych do koszyków heksagonalnych.' }
    }
  },
  // Day 21
  {
    year: 2026,
    dayNumber: 21,
    slug: 'openstreetmap',
    category: 'map',
    releaseDate: '2026-11-21T00:00:00.000Z',
    moodboardKeywords: ['osm', 'wiki', 'overpass'],
    suggestedStackOrTools: ['Overpass API', 'Leaflet.js'],
    localization: {
      en: { title: 'OpenStreetMap', theme: 'OpenStreetMap', teaserDescription: 'Leveraging free wiki-world map data, Overpass queries, and custom rendering.', fullDescription: 'Querying live OSM features and displaying custom thematic vector layers.' },
      de: { title: 'OpenStreetMap', theme: 'OpenStreetMap', teaserDescription: 'Nutzung von Wiki-Weltkartendaten, Overpass-Abfragen und Custom Rendering.', fullDescription: 'Abfrage von OSM-Funktionen und Darstellung von Vektorebenen.' },
      ru: { title: 'OpenStreetMap', theme: 'OpenStreetMap', teaserDescription: 'Использование свободных картографических данных OSM, запросы Overpass и кастомный рендеринг.', fullDescription: 'Запросы к Overpass API в реальном времени и отображение кастомных тематических векторов.' },
      pl: { title: 'OpenStreetMap', theme: 'OpenStreetMap', teaserDescription: 'Wykorzystanie danych OSM, zapytania Overpass i niestandardowe renderowanie.', fullDescription: 'Zapytania do API Overpass i wyświetlanie wektorowych warstw tematycznych.' }
    }
  },
  // Day 22
  {
    year: 2026,
    dayNumber: 22,
    slug: 'projections',
    category: 'map',
    releaseDate: '2026-11-22T00:00:00.000Z',
    moodboardKeywords: ['epsg', 'transform', 'crs'],
    suggestedStackOrTools: ['Proj4js', 'GIS'],
    localization: {
      en: { title: 'Projections', theme: 'Projections', teaserDescription: 'Coordinate reference systems, map distortions, and spatial transformations.', fullDescription: 'Comparing various cartographic projections and handling on-the-fly CRS transformations.' },
      de: { title: 'Projektionen', theme: 'Projections', teaserDescription: 'Koordinatenbezugssysteme, Kartenverzerrungen und räumliche Transformationen.', fullDescription: 'Vergleich verschiedener kartografischer Projektionen.' },
      ru: { title: 'Проекции', theme: 'Projections', teaserDescription: 'Системы координат, картографические искажения и пространственные трансформации.', fullDescription: 'Сравнение различных картографических проекций и преобразование CRS «на лету».' },
      pl: { title: 'Projekcje', theme: 'Projections', teaserDescription: 'Układy współrzędnych, zniekształcenia map i transformacje.', fullDescription: 'Porównanie różnych odwzorowań kartograficznych.' }
    }
  },
  // Day 23
  {
    year: 2026,
    dayNumber: 23,
    slug: 'senses-taste',
    category: 'sketch',
    releaseDate: '2026-11-23T00:00:00.000Z',
    moodboardKeywords: ['culinary', 'food-map', 'flavors'],
    suggestedStackOrTools: ['Illustration', 'SVG'],
    localization: {
      en: { title: 'Senses: Taste', theme: 'Senses: Taste', teaserDescription: 'Gastronomic maps, culinary traditions, and local food flavors.', fullDescription: 'Mapping regional recipes, coffee cultures, and traditional local dishes.' },
      de: { title: 'Sinn: Geschmack', theme: 'Senses: Taste', teaserDescription: 'Gastronomische Karten, kulinarische Traditionen und lokale Aromen.', fullDescription: 'Kartierung regionaler Rezepte und der Kaffeekultur.' },
      ru: { title: 'Чувства: Вкус', theme: 'Senses: Taste', teaserDescription: 'Гастрономические карты, кулинарные традиции и локальные вкусы.', fullDescription: 'Картографирование региональных рецептов, культуры кофе и традиционных блюд.' },
      pl: { title: 'Zmysły: Smak', theme: 'Senses: Taste', teaserDescription: 'Mapy gastronomiczne, tradice kulinarne i smaki lokalne.', fullDescription: 'Mapowanie regionalnych przepisów i kultury kawowej.' }
    }
  },
  // Day 24
  {
    year: 2026,
    dayNumber: 24,
    slug: 'network',
    category: 'map',
    releaseDate: '2026-11-24T00:00:00.000Z',
    moodboardKeywords: ['topology', 'graphs', 'connections'],
    suggestedStackOrTools: ['Graph Theory', 'Leaflet.js'],
    localization: {
      en: { title: 'Network', theme: 'Network', teaserDescription: 'Topological graphs, connectivity analysis, and transit lines.', fullDescription: 'Analyzing node connectivity, shortest paths, and complex graph structures.' },
      de: { title: 'Netzwerk', theme: 'Network', teaserDescription: 'Topologische Graphen, Konnektivitätsanalyse und Transitlinien.', fullDescription: 'Analyse von Knotenkonnektivität und kürzesten Wegen.' },
      ru: { title: 'Сеть', theme: 'Network', teaserDescription: 'Топологические графы, анализ связности и транспортные линии.', fullDescription: 'Анализ связности узлов, кратчайших путей и сложных граф-структур.' },
      pl: { title: 'Sieć', theme: 'Network', teaserDescription: 'Grafy topologiczne, analiza łączności i linie transportowe.', fullDescription: 'Analiza łączności węzłów i najkrótszych ścieżek.' }
    }
  },
  // Day 25
  {
    year: 2026,
    dayNumber: 25,
    slug: 'is-this-a-map',
    category: 'code',
    releaseDate: '2026-11-25T00:00:00.000Z',
    moodboardKeywords: ['abstract', 'surreal', 'conceptual'],
    suggestedStackOrTools: ['Canvas API', 'Generative'],
    localization: {
      en: { title: 'Is this a map?', theme: 'Is this a map?', teaserDescription: 'Challenging cartographic definitions with abstract and conceptual art.', fullDescription: 'Experimental interface blurring the line between data visualization and abstract paintings.' },
      de: { title: 'Ist das eine Karte?', theme: 'Is this a map?', teaserDescription: 'Herausforderung kartografischer Definitionen durch abstrakte Kunst.', fullDescription: 'Experimentelle Schnittstelle zwischen Datenvisualisierung und abstrakter Malerei.' },
      ru: { title: 'Это вообще карта?', theme: 'Is this a map?', teaserDescription: 'Оспаривание картографических определений с помощью абстрактного и концептуального искусства.', fullDescription: 'Экспериментальный интерфейс, стирающий грань между визуализацией данных и живописью.' },
      pl: { title: 'Czy to jest mapa?', theme: 'Is this a map?', teaserDescription: 'Kwestionowanie definicji kartograficznych za pomocą sztuki abstrakcyjnej.', fullDescription: 'Eksperymentalny interfejs zacierający granicę między wizualizacją a sztuką.' }
    }
  },
  // Day 26
  {
    year: 2026,
    dayNumber: 26,
    slug: 'water',
    category: 'map',
    releaseDate: '2026-11-26T00:00:00.000Z',
    moodboardKeywords: ['rivers', 'hydrology', 'oceans'],
    suggestedStackOrTools: ['GeoJSON', 'Leaflet.js'],
    localization: {
      en: { title: 'Water', theme: 'Water', teaserDescription: 'Hydrological networks, rivers, coastlines, and marine currents.', fullDescription: 'Visualizing river basins, watershed boundaries, and open water bodies.' },
      de: { title: 'Wasser', theme: 'Water', teaserDescription: 'Hydrologische Netze, Flüsse, Küstenlinien und Meeresströmungen.', fullDescription: 'Visualisierung von Flussgebieten und Gewässern.' },
      ru: { title: 'Вода', theme: 'Water', teaserDescription: 'Гидрологические сети, реки, береговые линии и морские течения.', fullDescription: 'Визуализация речных бассейнов, водоразделов и водных объектов.' },
      pl: { title: 'Woda', theme: 'Water', teaserDescription: 'Sieci hydrologiczne, rzeki, linie brzegowe i prądy morskie.', fullDescription: 'Wizualizowanie dorzeczy i zbiorników wodnych.' }
    }
  },
  // Day 27
  {
    year: 2026,
    dayNumber: 27,
    slug: 'new-tool',
    category: 'code',
    releaseDate: '2026-11-27T00:00:00.000Z',
    moodboardKeywords: ['experiment', 'learning', 'framework'],
    suggestedStackOrTools: ['Vite', 'TypeScript'],
    localization: {
      en: { title: 'New Tool', theme: 'New tool', teaserDescription: 'Testing and exploring unfamiliar software, libraries, or workflows.', fullDescription: 'Building a spatial mini-app with a freshly learned library and modern toolchains.' },
      de: { title: 'Neues Werkzeug', theme: 'New tool', teaserDescription: 'Testen und Erkunden ungewohnter Software oder Bibliotheken.', fullDescription: 'Entwicklung einer räumlichen Mini-App mit einer neuen Bibliothek.' },
      ru: { title: 'Новый инструмент', theme: 'New tool', teaserDescription: 'Тестирование и изучение незнакомого софта, библиотек или воркфлоу.', fullDescription: 'Создание пространственного мини-приложения с использованием новой библиотеки.' },
      pl: { title: 'Nowe narzędzie', theme: 'New tool', teaserDescription: 'Testowanie i poznawanie nieznanego oprogramowania lub bibliotek.', fullDescription: 'Budowanie mini-aplikacji przestrzennej przy użyciu nowo poznanej technologii.' }
    }
  },
  // Day 28
  {
    year: 2026,
    dayNumber: 28,
    slug: 'senses-feeling',
    category: 'sketch',
    releaseDate: '2026-11-28T00:00:00.000Z',
    moodboardKeywords: ['emotions', 'atmosphere', 'mood'],
    suggestedStackOrTools: ['Ink', 'Illustration'],
    localization: {
      en: { title: 'Senses: Feeling', theme: 'Senses: Feeling', teaserDescription: 'Emotional geographies, psychological mapping, and felt experiences.', fullDescription: 'Expressive sketching of safe spaces, urban anxiety zones, and cozy neighborhoods.' },
      de: { title: 'Sinn: Gefühl', theme: 'Senses: Feeling', teaserDescription: 'Emotionale Geografien, psychologische Kartierung und gefühlte Erlebnisse.', fullDescription: 'Ausdrucksstarke Skizzen von sicheren Räumen und angstfreien Zonen.' },
      ru: { title: 'Чувства: Ощущения', theme: 'Senses: Feeling', teaserDescription: 'Эмоциональная география, психологическое картирование и субъективный опыт.', fullDescription: 'Выразительные зарисовки безопасных пространств, зон городского комфорта и тревожности.' },
      pl: { title: 'Zmysły: Poczucie', theme: 'Senses: Feeling', teaserDescription: 'Geografie emocjonalne, mapowanie psychologiczne i odczucia.', fullDescription: 'Wyraziste szkice bezpiecznych przestrzeni i stref miejskich.' }
    }
  },
  // Day 29
  {
    year: 2026,
    dayNumber: 29,
    slug: 'raster',
    category: 'map',
    releaseDate: '2026-11-29T00:00:00.000Z',
    moodboardKeywords: ['pixels', 'grids', 'imagery'],
    suggestedStackOrTools: ['Canvas', 'Raster Layers'],
    localization: {
      en: { title: 'Raster', theme: 'Raster', teaserDescription: 'Pixel-based data, satellite imagery, and digital elevation models.', fullDescription: 'Processing raster grids, heightmaps, and cellular map matrices.' },
      de: { title: 'Raster', theme: 'Raster', teaserDescription: 'Pixelbasierte Daten, Satellitenbilder und digitale Höhenmodelle.', fullDescription: 'Verarbeitung von Rastergittern und Höhenmodellen.' },
      ru: { title: 'Растр', theme: 'Raster', teaserDescription: 'Пиксельные данные, спутниковые снимки и цифровые модели рельефа.', fullDescription: 'Обработка растровых сеток, карт высот и матричных структур.' },
      pl: { title: 'Raster', theme: 'Raster', teaserDescription: 'Dane oparte na pikselach, zdjęcia satelitarne i modele wysokościowe.', fullDescription: 'Przetwarzanie siatek rastrowych i map wysokości.' }
    }
  },
  // Day 30
  {
    year: 2026,
    dayNumber: 30,
    slug: 'pen-and-paper',
    category: 'sketch',
    releaseDate: '2026-11-30T00:00:00.000Z',
    moodboardKeywords: ['analog', 'ink', 'hand-drawn'],
    suggestedStackOrTools: ['Fine Liner', 'Paper', 'Ink'],
    localization: {
      en: { title: 'Pen & Paper', theme: 'Pen & paper', teaserDescription: 'Analog cartography, hand-drawn maps, and physical ink sketches.', fullDescription: 'Traditional fine-liner architectural sketching and hand-rendered map details.' },
      de: { title: 'Stift & Papier', theme: 'Pen & paper', teaserDescription: 'Analoge Kartografie, handgezeichnete Karten und physische Tuscheskizzen.', fullDescription: 'Traditionelle architektonische Skizzen mit Fineliner.' },
      ru: { title: 'Ручка и бумага', theme: 'Pen & paper', teaserDescription: 'Аналоговая картография, карты от руки и физические тушевые скетчи.', fullDescription: 'Традиционные архитектурные зарисовки лайнером и ручные детали карты.' },
      pl: { title: 'Pióro i papier', theme: 'Pen & paper', teaserDescription: 'Kartografia analogowa, mapy rysowane ręcznie i szkice tuszem.', fullDescription: 'Tradycyjne szkice architektoniczne i ręcznie renderowane detale.' }
    }
  }
];