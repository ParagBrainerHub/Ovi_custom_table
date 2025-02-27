import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavBarConfig } from '../navbar/navbar-modal';
import { WrapperComponent } from '../shared/wrapper/wrapper.component';
import { WrapperInterface } from '../modals';
import { CardListComponentComponent } from '../card-for-list-component/card-for-list-component';
import { CardConfig } from '../card-collection-component/card.modal';

@Component({
  selector: 'app-microservices',
  standalone: true,
  imports: [NavbarComponent, WrapperComponent, CardListComponentComponent],
  templateUrl: './microservices.component.html',
  styleUrl: './microservices.component.css',
})
export class MicroservicesComponent {
  wrapperConfig: WrapperInterface = {
    height: '930px',
    cornerImagesPositions: {
      rightBottom: './quarter_anda.png',
    },
  };
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
    cardActions: [
      {
        icon: 'schedule',
        text: '1 day ago',
      },
      {
        icon: 'comment',
        text: '3 COMMENTS',
      },
      {
        icon: 'favorite',
        text: '1 LIKE',
      },
    ],
    header: {
      title: 'Chihuahua 2',
      align: 'center',
      buttonsAlign: 'left',
      buttons: [
        {
          text: 'Edit',
          align: 'left',
          icon: '✏️',
          hasBorder: false,
        },
        {
          text: 'Delete',
          align: 'right',
          icon: '✏️',
          hasBorder: false,
        },
      ],
    },
    image: {
      position: 'top-half',
      src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
      title: 'Title on Image',
      description: 'This is a description shown on hover.',
      hoverEffect: false,
    },
    content: {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    body: {
      type: 'text',
      align: 'left',
      content: 'The Chihuahua is a Mexican breed of toy dog.',
      buttons: [
        {
          text: 'More Info',
          align: 'center',
          hasBorder: false,
        },
      ],
    },
    footer: {
      type: 'buttons',
      align: 'left',
      text: 'This is a dynamically aligned footer text',
      buttons: [
        {
          text: 'Edit',
          align: 'left',
          group: 'left',
          icon: 'edit',
          showIcon: true,
          iconPosition: 'left',
          shape: 'square',
          corners: 'rounded',
          foregroundColor: '#ffffff',
          backgroundColor: '#800080',
          hasBorder: false,
          shadow: true,
          transparent: false,
        },
        {
          text: 'Done',
          align: 'left',
          group: 'left',
          icon: 'check_circle',
          showIcon: true,
          iconPosition: 'left',
          shape: 'square',
          corners: 'rounded',
          foregroundColor: '#ffffff',
          backgroundColor: '#800080',
          hasBorder: false,
          shadow: true,
          transparent: false,
        },
        {
          text: 'Delete',
          align: 'left',
          group: 'left',
          icon: 'delete',
          showIcon: true,
          iconPosition: 'left',
          shape: 'square',
          corners: 'rounded',
          foregroundColor: '#ffffff',
          backgroundColor: '#800080',
          hasBorder: false,
          shadow: true,
          transparent: false,
        },
      ],
    },
  };
}
