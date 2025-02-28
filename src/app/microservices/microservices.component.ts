import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavBarConfig } from '../navbar/navbar-modal';
import { WrapperInterface } from '../modals';
import { CardListComponentComponent } from '../card-for-list-component/card-for-list-component';
import { CardConfig } from '../card-collection-component/card.modal';
import { SectionWrapperComponent } from '../shared/section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-microservices',
  standalone: true,
  imports: [
    NavbarComponent,
    CardListComponentComponent,
    SectionWrapperComponent,
  ],
  templateUrl: './microservices.component.html',
  styleUrl: './microservices.component.css',
})
export class MicroservicesComponent {
  navbarConfig: NavBarConfig = {
    isBorderTop: false,
    isBorderBottom: true,

    style: {
      maxWidth: '1280px',
      position: 'fixed',
      padding: '12px 40px',
      top: '55px',
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '80px',
      borderBottomColor: '#15A46E',
      zIndex: '999',
    },
    logo: {
      url: './microServices_logo.png',
      position: 'left',
    },
    buttons: [
      {
        position: 'center',
        alignWithLogo: true,
        buttonsGroup: [
          {
            id: 'home',
            text: 'Home',
            // icon: 'home',
            // showIcon: true,
            // iconPosition: 'right',
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: '#333333',
            backgroundColor: '#800080',
            transparent: true,
            hasBorder: false,
            shadow: false,
            navigate: true,
            url: '/',
          },
          {
            id: 'aboutus',
            text: 'About Us',
            // icon: 'info',
            // showIcon: true,
            // iconPosition: 'left',
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: '#333333',
            backgroundColor: 'var(--primary-color)',
            transparent: true,
            hasBorder: false,
            shadow: false,
            navigate: true,
            url: '/about',
          },
          {
            id: 'services',
            text: 'Services',
            // icon: 'info',
            // showIcon: true,
            // iconPosition: 'left',
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: '#333333',
            backgroundColor: 'var(--primary-color)',
            transparent: true,
            hasBorder: false,
            shadow: false,
            navigate: true,
            url: '/services',
          },
          {
            id: 'case-studies',
            text: 'Case Studies',
            // icon: 'info',
            // showIcon: true,
            // iconPosition: 'left',
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: '#333333',
            backgroundColor: 'var(--primary-color)',
            transparent: true,
            hasBorder: false,
            shadow: false,
            navigate: true,
            url: '/case-studies',
          },
          {
            id: 'contact-us',
            text: 'Contact Us',
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: '#333333',
            backgroundColor: '#800080',
            transparent: true,
            hasBorder: false,
            shadow: false,
            navigate: true,
            url: '/contact',
          },

          {
            id: 'schedule-a-call',
            text: 'Schedule A Call',
            icon: 'wifi_calling',
            showIcon: true,
            iconPosition: 'right',
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: '#DD8208',
            transparent: true,
            hasBorder: true,
            borderColor: '#DD8208',
            shadow: false,
            navigate: true,
            url: '/call',
            isPillButton: true,
            // onClick: (event: Event) => this.handleClick(event),
          },
        ],
      },
    ],
  };

  heroBannerConfig: CardConfig = {
    imageAlignment: 'right',
    sectionWidths: [50, 50],
    customStyles: {
      backgroundColor: 'transparent',
      padding: '0px',
      alignItems: 'center',
      display: 'flex',
    },
    header: {
      headerStyles: {
        display: 'flex',
        flexDirection: 'column',
        // rowGap: '20px',
      },
      title:
        'Scalable Microservices for <span color="#9D6F00">Startups & Businesses</span> ',
      titleTag: 'h1',
      titleStyles: {
        color: 'black',
        fontSize: '48px',
        fontWeight: '800',
        letterSpacing: '0px',
        width: '98%',
      },
      titleAlign: 'left',

      description:
        'Future-proof your applications with enterprise-grade | microservices designed for speed, security, and scale.',
      descriptionTag: 'p',
      descriptionStyles: {
        color: '#131313',
        fontSize: '18px',
        fontWeight: '400',
        width: '71%',
        marginBottom: '40px',
      },
      descriptionAlign: 'left',

      buttonsAlign: 'left',
      buttons: [
        {
          text: 'Get a Free Consultation',
          hasBorder: false,
          isPillButton: true,
          backgroundColor: '#15A46E',
          customStyles: {
            padding: '16px 24px',
          },
        },
        {
          text: 'See My Work',
          hasBorder: false,
          isPillButton: true,
          backgroundColor: '#DD8208',
          customStyles: {
            padding: '16px 24px',
          },
        },
      ],
    },
    image: {
      position: 'top-half',
      src: './hero_image.png',
      title: '',
      description: '',
      hoverEffect: false,
    },
  };
}
