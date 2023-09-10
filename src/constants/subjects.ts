import humansAndArts from '../assets/images/subjects/humans-and-arts.png';
import mathematics from '../assets/images/subjects/mathematics.png';
import musics from '../assets/images/subjects/musics.png';
import science from '../assets/images/subjects/science.png';
import socialStudies from '../assets/images/subjects/social-studies.png';

const TOP_SUBJECTS: Subject[] = [
  {
    id: 1,
    label: 'Mathematics',
    url: '/mathematics',
    image: mathematics,
  },
  {
    id: 2,
    label: 'Science',
    url: '/science',
    image: science,
  },
  { id: 3, label: 'Musics', url: '/musics', image: musics },
  {
    id: 4,
    label: 'Social studies',
    url: '/social-studies',
    image: socialStudies,
  },
  {
    id: 5,
    label: 'Humanities& Arts',
    url: '/humans-arts',
    image: humansAndArts,
  },
];

export { TOP_SUBJECTS };
