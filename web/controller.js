const makeRequest = (method, ...args) =>
  window
    .fetch('/cv/api', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ method, args }),
    })
    .then(res => res.text())
    .then(JSON.parse)

export const getData = () => makeRequest('getData')
export const setData = data => makeRequest('setData', data)

// const DATA = {
//   general: {
//     address: '1 rue révol, 38000 Grenoble',
//     firstName: 'Badr',
//     github: 'https://github.com/badrAZ',
//     lastName: 'Azizbi',
//     linkedin: 'https://www.linkedin.com/in/badr-azizbi-b2a58788/',
//     mail: 'azizbibdr@gmail.com',
//     poste: 'Développeur full stack',
//     tel: '06-95-39-91-52',
//   },
//   xp: [
//     {
//       company: 'VATES - GRENOBLE',
//       period: 'Octobre 2016 - Aujourd’hui',
//       poste: 'CONCEPTEUR DÉVELOPPEUR INFORMATIQUE',
//       content:
//         'Xen orchestra est un logiciel libre conçus par Vates permettant l’administration des serveurs Xen/XCP-ng. Ma mission au sein de Vates se porte sur:
//          <ul>
//            <li> l’ajout de nouvelle fonctionnalités au logiciel</li>
//            <li> l’analyse et la fixation des anomalies reportées par des utilisateurs</li>
//            <li> la rédaction de spécification et le chiffrement des besoins utilisateurs</li>
//            <li> la rédaction de documentation</li>
//            <li> la revue des pull requests</li>
//          </ul>
//          <b>Technologies utilisées:</b> React JS, Node JS, Redis, Level DB, Redux, Jest, Git (Github/Gitlab)'
//     },
//     {
//       company: 'LCIS - VALENCE',
//       period: 'Mai 2016 - Aout 2016',
//       poste: 'STAGIAIRE',
//       content:
//         'MASH est une plateforme multi-agents réalisée par l’équipe MACSY-COSY permettant la simulation des systèmes multi-agents. Ma mission au sein de LCIS concernait:
//         <ul>
//           <li> la réalisation d’une documentation utilisateur permettant la prise en main de la plateforme</li>
//           <li> la réalisation d’une documentation développeur qui jouera le rôle d’un guide pour les développeurs souhaitant ajouter des solutions à des problématiques multi-agents sur la plateforme</li>
//           <li> la réalisation d’un agent android embarqué communicant avec la plateforme</li>
//         </ul>
//         <b>Technologies utilisées:</b> Java SE, Android, Latext'
//     },
//     {
//       company: 'OFPPT CASABLANCA - MAROC',
//       period: 'Avril 2015 - Juin 2015',
//       poste: 'STAGIAIRE',
//       content:
//         'L’OFPPT est un centre de formation délivrant des diplômes de type technicien/ouvrier. Ma mission au sein de cette organisme concernait l’automatisation du processus d’impression des diplômes.<br />
//          <b>Technologies utilisées:</b> PHP, SQL Server, JQuery'
//     },
//   ],
//   formations: [
//     {
//       year: 2017,
//       diploma: 'Master en Génie Informatique',
//       school: 'UGA-Grenoble',
//     },
//     {
//       year: 2015,
//       diploma: 'Licence en Informatique et Gestion Industrielle',
//       school: 'FST Settat-Maroc',
//     },
//     {
//       year: 2014,
//       diploma: 'DEUST en Mathématique, Informatique, Physique',
//       school: 'FST Settat-Maroc',
//     },
//     {
//       year: 2011,
//       diploma: 'Baccalauréat Science de la Vie et de la Terre',
//       school: 'GSB Casablanca-Maroc',
//     },
//   ],
//   skills: {
//     frontEnd: ['React JS', 'Redux', 'Bootstrap', 'HTML', 'CSS'],
//     backEnd: ['Node JS', 'Express', 'GraphQL'],
//     db: ['Redis', 'Level DB', 'MongoDB'],
//     environnement: [
//       'Git',
//       'Github',
//       'Gitlab',
//       'NPM',
//       'Yarn',
//       'Webpack',
//       'VSCode',
//       'Babel',
//       'Linux',
//       'Windows',
//     ],
//   },
//   languages: [
//     { language: 'Arabe', level: 'Maternelle' },
//     { language: 'Français', level: 'Courant' },
//     { language: 'Anglais', level: 'Bon' },
//   ],
//   hobbies: ['Lecture', 'Fitness', 'Cinéma'],
// }
