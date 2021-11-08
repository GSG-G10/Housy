import {
  AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiOutlineWhatsApp,
} from 'react-icons/ai';

const data = [
  {
    title: 'About Us',
    links: [
      {
        href: '/',
        name: 'Story',
      },
      {
        href: '/',
        name: 'Clients',
      },
      {
        href: '/',
        name: 'Testimonials',
      },
    ],
  },
  {
    title: 'Services',
    links: [
      {
        href: '/',
        name: 'Marketing',
      },
      {
        href: '/',
        name: 'Consulting',
      },
      {
        href: '/',
        name: 'Development',
      },
      {
        href: '/',
        name: 'Design',
      },
    ],
  },
  {
    title: 'Contact us',
    links: [
      {
        href: '/',
        name: 'United States',
      },
      {
        href: '/',
        name: 'United Kingdom',
      },
      {
        href: '/',
        name: 'Australia',
      },
      {
        href: '/',
        name: 'Support',
      },
    ],
  },
  {
    title: 'Social',
    links: [
      {
        href: '/',
        name: 'Facebook',
        children: <AiFillFacebook size={22} />,
      },
      {
        href: '/',
        name: 'Twitter',
        children: <AiFillTwitterCircle size={22} />,
      },
      {
        href: '/',
        name: 'Instagram',
        children: <AiFillInstagram size={22} />,
      },
      {
        href: '/',
        name: 'WhatsApp',
        children: <AiOutlineWhatsApp size={22} />,
      },
    ],
  },
];
export default data;
