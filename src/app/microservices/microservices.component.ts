import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavBarConfig } from '../navbar/navbar-modal';
import { WrapperInterface } from '../modals';
import { CardListComponentComponent } from '../card-for-list-component/card-for-list-component';
import {
  CardConfig,
  CardGridConfig,
  CardListConfig,
} from '../card-collection-component/card.modal';
import { SectionWrapperComponent } from '../shared/section-wrapper/section-wrapper.component';
import { CardComponentComponent } from '../card-collection-component/card-collection-component';
import { GridViewComponent } from '../grid-view/grid-view.component';
import { ListViewComponent } from '../list-view/list-view.component';
import { FormComponentComponent } from '../form-component/form-component.component';
import { FormConfig } from '../form-component/form-modal';
import { FooterComponent } from '../footer/footer.component';
import { FooterConfig } from '../footer/footer.modal';
import { ShapeWrapperComponent } from '../shared/shape-wrapper/shape-wrapper.component';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { OurExpertiseComponent } from '../our-expertise/our-expertise.component';

@Component({
  selector: 'app-microservices',
  standalone: true,
  imports: [
    NavbarComponent,
    CardListComponentComponent,
    SectionWrapperComponent,
    GridViewComponent,
    ListViewComponent,
    FormComponentComponent,
    FooterComponent,
    ShapeWrapperComponent,
  ],
  templateUrl: './microservices.component.html',
  styleUrl: './microservices.component.css',
})
export class MicroservicesComponent {
  scrollPosition = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrollPosition = Math.min(window.scrollY, 200); // Max 200px
  }
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
      zIndex: '500',
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
            id: 'forms',
            text: 'Forms',
            icon: 'forms_add_on',
            showIcon: true,
            iconPosition: 'left',
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: '#333333',
            backgroundColor: 'var(--primary-color)',
            transparent: true,
            hasBorder: false,
            shadow: false,
            navigate: true,
            url: '/forms',
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

      description: [
        {
          descriptionText:
            'Future-proof your applications with enterprise-grade | microservices designed for speed, security, and scale.',
          descriptionTag: 'p',
          descriptionAlign: 'left',
          descriptionStyles: {
            color: '#131313',
            fontSize: '18px',
            fontWeight: '400',
            width: '71%',
            marginBottom: '40px',
          },
        },
      ],

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

  expertiseList = [
    'Microservices & Cloud-Native Development',
    'REST & GRPC API Strategies For Scalability',
    'Event-Driven Architecture & Message Queues',
    'Single Sign-On (SSO) & Secure Authentication',
    'Microfrontends With Angular For Modular UIs',
    'CI/CD Pipelines & Automated Deployments',
    'Monitoring, Logging & Observability',
  ];

  whoWeAreSection: CardConfig = {
    dynamicComponents: [
      {
        dynamicComponent: OurExpertiseComponent,
        dynamicComponentConfig: { expertiseList: this.expertiseList },
      },
    ],
    imagebackgroundShapes: [
      {
        type: 'circle',
        position: 'top-left',
        styles: {
          width: '150px',
          height: '150px',
          position: 'absolute',
          top: '-75px',
          left: '-75px',
          backgroundColor: '#DD8208',
          opacity: '0.6', // Light red transparent circle
        },
      },
      // {
      //   type: 'rectangle',
      //   styles: {
      //     width: '100px',
      //     height: '50px',
      //     position: 'absolute',
      //     top: '20px',
      //     right: '20px',
      //     backgroundColor: 'rgba(0, 0, 255, 0.5)', // Light blue rectangle
      //   },
      // },
    ],
    listForegroundImages: [
      {
        src: './fore-ground-image.png',
        position: 'bottom-right',
        'img-class': 'list-image-foreground',
        imgStyles: {
          right: '100px',
          border: '5px solid white',
          borderRadius: '18px',
        },
      },
    ],
    imageAlignment: 'left',
    sectionWidths: [50, 50],
    customStyles: {
      backgroundColor: 'transparent',
      padding: '0px',
      display: 'flex',
    },
    header: {
      headerStyles: {
        display: 'flex',
        flexDirection: 'column',
        // rowGap: '20px',
      },
      title: 'Who We Are',
      titleTag: 'h1',
      titleStyles: {
        color: '#9D6F00',
        fontSize: '48px',
        fontWeight: '800',
        letterSpacing: '0px',
        width: '98%',
      },
      titleAlign: 'left',

      description: [
        {
          descriptionText:
            'We are a specialized software consultancy helping startups and enterprises modernize their systems through scalable microservices, cloud-native architectures, and high-performance APIs.',
          descriptionTag: 'p',
          descriptionStyles: {
            color: '#131313',
            fontSize: '18px',
            fontWeight: '400',
            width: '100%',
          },
          descriptionAlign: 'left',
        },
        {
          descriptionText:
            'Our team has successfully worked with leading companies such as Siemens Energy, Wolters Kluwer, and National Instruments, delivering mission-critical solutions for energy, healthcare, and industrial applications.',
          descriptionTag: 'p',
          descriptionStyles: {
            color: '#131313',
            fontSize: '18px',
            fontWeight: '400',
            width: '100%',
          },
          descriptionAlign: 'left',
        },
      ],

      buttonsAlign: 'left',

      buttons: [
        {
          text: 'Learn More',
          hasBorder: false,
          isPillButton: true,
          backgroundColor: '#15A46E',
          customStyles: {
            padding: '16px 24px',
            width: '224px',
          },
        },
      ],
    },
    image: {
      // position: 'top-half',
      src: './meeting.png',
      title: '',
      description: '',
      hoverEffect: false,
    },
  };

  cardGridConfig: CardGridConfig = {
    gridTitle: 'What We Do',
    gridTitleTag: 'h2',
    gridTitleStyles: {
      width: '250px',
      margin: '84px auto 24px',
    },
    layoutType: 'grid',
    gridSubtitle:
      'You have problems with leaking pipes, broken tiles, lost keys or want to tidy up the trees around you, of course you need our help!',
    gridSubtitleTag: 'p',
    gridSubtitleStyles: {
      'text-align': 'center',
      width: '580px',
    },
    gridContainerStyle: {
      marginTop: '80px',
      gap: '40px',
    },
    cardConfigs: [
      {
        customStyles: {
          padding: '32px',
          border: '2px solid #DD8208',
          background: 'transparent',
        },
        hoverStyles: {
          backgroundColor: '#DD8208',
          color: '#fff',
          transform: 'scale(1.05)',
        },
        header: {
          title: 'Microservices Architecture & API Strategy',
          titleTag: 'h2',
          titleAlign: 'center',
          titleStyles: {
            color: '#9D6F00',
            fontFamily: 'Manrope',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'center',
            maxWidth: '95%',
            margin: 'auto',
            marginBottom: '12px',
          },
          description: [
            {
              descriptionText:
                'We design scalable microservices with optimized API strategies using REST for standard operations and gRPC for fast, real-time communication.',
              descriptionTag: 'p',
              descriptionAlign: 'center',
              descriptionStyles: {
                fontSize: '16px',
                maxWidth: '90%',
                margin: 'auto',
              },
            },
          ],

          icons: [
            {
              icon: 'plumbing',
              iconPlacement: 'top',
              iconStyles: {
                color: '#DD8208',
                padding: '22px',
                borderRadius: '50%',
                border: '2px solid ',
              },
            },
            // {
            //   icon: 'delete',
            //   iconPlacement: 'left',
            //   iconStyles: {
            //     color: '#007bff',
            //     fontSize: '30px',
            //   },
            // },
          ],
        },
      },
      {
        customStyles: {
          padding: '32px',
          border: '2px solid #DD8208',
          background: 'transparent',
        },
        hoverStyles: {
          backgroundColor: '#DD8208',
          color: '#fff',
          transform: 'scale(1.05)',
        },
        header: {
          title: 'Event-Driven & Asynchronous Processing',
          titleTag: 'h2',
          titleAlign: 'center',
          titleStyles: {
            color: '#9D6F00',
            fontFamily: 'Manrope',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'center',
            maxWidth: '95%',
            margin: 'auto',
            marginBottom: '12px',
          },
          description: [
            {
              descriptionText:
                'Using event queuing, we enable asynchronous workflows that improve system efficiency, fault tolerance, and scalability across distributed systems.',
              descriptionTag: 'p',
              descriptionAlign: 'center',
              descriptionStyles: {
                fontSize: '16px',
                maxWidth: '90%',
                margin: 'auto',
              },
            },
          ],

          icons: [
            {
              icon: 'water_damage',
              iconPlacement: 'top',
              iconStyles: {
                color: '#DD8208',
                padding: '22px',
                borderRadius: '50%',
                border: '2px solid',
              },
            },
            // {
            //   icon: 'delete',
            //   iconPlacement: 'left',
            //   iconStyles: {
            //     color: '#007bff',
            //     fontSize: '30px',
            //   },
            // },
          ],
        },
      },
      {
        customStyles: {
          padding: '32px',
          border: '2px solid #DD8208',
          background: 'transparent',
        },
        hoverStyles: {
          backgroundColor: '#DD8208',
          color: '#fff',
          transform: 'scale(1.05)',
        },
        header: {
          title: 'Kubernetes & Cloud Deployment',
          titleTag: 'h2',
          titleAlign: 'center',
          titleStyles: {
            color: '#9D6F00',
            fontFamily: 'Manrope',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'center',
            maxWidth: '95%',
            margin: 'auto',
            marginBottom: '12px',
          },
          description: [
            {
              descriptionText:
                'We help businesses deploy and manage workloads securely on AWS, Azure, and Kubernetes, ensuring smooth cloud operations.',
              descriptionTag: 'p',
              descriptionAlign: 'center',
              descriptionStyles: {
                fontSize: '16px',
                maxWidth: '90%',
                margin: 'auto',
              },
            },
          ],
          icons: [
            {
              icon: 'currency_bitcoin',
              iconPlacement: 'top',
              iconStyles: {
                color: '#DD8208',
                padding: '22px',
                borderRadius: '50%',
                border: '2px solid',
              },
            },
            // {
            //   icon: 'delete',
            //   iconPlacement: 'left',
            //   iconStyles: {
            //     color: '#007bff',
            //     fontSize: '30px',
            //   },
            // },
          ],
        },
      },
      {
        customStyles: {
          padding: '32px',
          border: '2px solid #DD8208',
          background: 'transparent',
        },
        hoverStyles: {
          backgroundColor: '#DD8208',
          color: '#fff',
          transform: 'scale(1.05)',
        },
        header: {
          title: 'Microfrontends with Angular',
          titleTag: 'h2',
          titleAlign: 'center',
          titleStyles: {
            color: '#9D6F00',
            fontFamily: 'Manrope',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'center',
            maxWidth: '95%',
            margin: 'auto',
            marginBottom: '12px',
          },
          description: [
            {
              descriptionText:
                'Scalable and independent frontend modules, enabling teams to build and deploy UI components separately, which improves flexibility and performance.',
              descriptionTag: 'p',
              descriptionAlign: 'center',
              descriptionStyles: {
                fontSize: '16px',
                maxWidth: '90%',
                margin: 'auto',
              },
            },
          ],

          icons: [
            {
              icon: 'plumbing',
              iconPlacement: 'top',
              iconStyles: {
                color: '#DD8208',
                padding: '22px',
                borderRadius: '50%',
                border: '2px solid',
              },
            },
            // {
            //   icon: 'delete',
            //   iconPlacement: 'left',
            //   iconStyles: {
            //     color: '#007bff',
            //     fontSize: '30px',
            //   },
            // },
          ],
        },
      },
      {
        customStyles: {
          padding: '32px',
          border: '2px solid #DD8208',
          background: 'transparent',
        },
        hoverStyles: {
          backgroundColor: '#DD8208',
          color: '#fff',
          transform: 'scale(1.05)',
        },
        header: {
          title: 'CI/CD Pipelines & System Observability',
          titleTag: 'h2',
          titleAlign: 'center',
          titleStyles: {
            color: '#9D6F00',
            fontFamily: 'Manrope',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'center',
            maxWidth: '95%',
            margin: 'auto',
            marginBottom: '12px',
          },
          description: [
            {
              descriptionText:
                'We automate deployments using CI/CD pipelines and ensure system reliability with real-time monitoring, logging, and system observability tools.',
              descriptionTag: 'p',
              descriptionAlign: 'center',
              descriptionStyles: {
                fontSize: '16px',
                maxWidth: '90%',
                margin: 'auto',
              },
            },
          ],
          icons: [
            {
              icon: 'plumbing',
              iconPlacement: 'top',
              iconStyles: {
                color: '#DD8208',
                padding: '22px',
                borderRadius: '50%',
                border: '2px solid',
              },
            },
            // {
            //   icon: 'delete',
            //   iconPlacement: 'left',
            //   iconStyles: {
            //     color: '#007bff',
            //     fontSize: '30px',
            //   },
            // },
          ],
        },
      },
      {
        customStyles: {
          padding: '32px',
          border: '2px solid #DD8208',
          background: 'transparent',
        },
        hoverStyles: {
          backgroundColor: '#DD8208',
          color: '#fff',
          transform: 'scale(1.05)',
        },
        header: {
          title: 'Custom Solutions',
          titleTag: 'h2',
          titleAlign: 'center',
          titleStyles: {
            color: '#9D6F00',
            fontFamily: 'Manrope',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '30px',
            textAlign: 'center',
            maxWidth: '95%',
            margin: 'auto',
            marginBottom: '12px',
          },
          description: [
            {
              descriptionText:
                'Have unique requirements? We design tailored solutions to fit your specific business needs.',
              descriptionTag: 'p',
              descriptionAlign: 'center',
              descriptionStyles: {
                fontSize: '16px',
                maxWidth: '90%',
                margin: 'auto',
              },
            },
          ],
          buttons: [
            {
              customStyles: { padding: '16px 24px' },
              hasBorder: false,
              isPillButton: true,
              text: 'Learn More',
              backgroundColor: '#DD8208',
              foregroundColor: '#fff',
            },
          ],
        },
      },
    ],
  };

  cardListConfig: CardListConfig = {
    layoutType: 'list',
    listTitle: 'Real-World Impact',
    listTitleTag: 'h3',
    listTitleStyles: {
      fontWeight: '700',
      fontSize: '42px',
      letterSpacing: '0%',
      color: ' #9D6F00',
      marginBottom: '80px',
    },

    listContainerStyle: {
      marginTop: '80px',
      gap: '80px',
    },
    cardConfigs: [
      {
        imageAlignment: 'left',
        // sectionWidths: [50, 50],
        customStyles: {
          backgroundColor: 'transparent',
          padding: '0px',
          alignItems: 'center',
          display: 'flex',
          columnGap: '40px',
        },
        hoverStyles: {
          background: '#DD8208',
          color: 'white',
        },
        header: {
          headerStyles: {
            display: 'flex',
            flexDirection: 'column',
            // rowGap: '20px',
          },
          title: 'Enterprise-Level Deployment Optimization',
          titleTag: 'p',
          titleStyles: {
            color: '#DD8208',
            fontSize: '24px',
            fontWeight: '700',
          },
          titleAlign: 'left',

          description: [
            {
              descriptionText:
                'A startup reduced their deployment time by 50% with our automated CI/CD pipeline solutions.',
              descriptionTag: 'p',
              descriptionAlign: 'left',
              descriptionStyles: {
                color: '#131313',
                fontSize: '18px',
                fontWeight: '400',
              },
            },
          ],
        },
        image: {
          position: 'top-half',
          src: './deployment.png',
          title: '',
          description: '',
          hoverEffect: false,
        },
      },
      {
        imageAlignment: 'right',
        // sectionWidths: [50, 50],
        customStyles: {
          backgroundColor: 'transparent',
          padding: '0px',
          alignItems: 'center',
          display: 'flex',
          columnGap: '40px',
        },
        header: {
          headerStyles: {
            display: 'flex',
            flexDirection: 'column',
            // rowGap: '20px',
          },
          title: 'Enterprise-Level Deployment Optimization',
          titleTag: 'p',
          titleStyles: {
            color: '#DD8208',
            fontSize: '24px',
            fontWeight: '700',
          },
          titleAlign: 'right',

          description: [
            {
              descriptionText:
                'We helped Wolters Kluwer (Healthcare) and National Instruments (Test & Measurement Systems, now Emerson) modernize their legacy applications by migrating from monolithic architectures to microservices and microfrontends. This transformation improved system scalability, modularity, and long-term maintainability, allowing for faster development cycles and more efficient data processing.',
              descriptionTag: 'p',
              descriptionAlign: 'right',
              descriptionStyles: {
                color: '#131313',
                fontSize: '18px',
                fontWeight: '400',
              },
            },
          ],
        },
        image: {
          position: 'top-half',
          src: './ms_mf.png',
          title: '',
          description: '',
          hoverEffect: false,
        },
      },
      {
        imageAlignment: 'left',
        // sectionWidths: [50, 50],
        customStyles: {
          backgroundColor: 'transparent',
          padding: '0px',
          alignItems: 'center',
          display: 'flex',
          columnGap: '40px',
        },
        header: {
          headerStyles: {
            display: 'flex',
            flexDirection: 'column',
            // rowGap: '20px',
          },
          title: 'Enterprise-Level Deployment Optimization',
          titleTag: 'p',
          titleStyles: {
            color: '#DD8208',
            fontSize: '24px',
            fontWeight: '700',
          },
          titleAlign: 'left',

          description: [
            {
              descriptionText:
                'A startup reduced their deployment time by 50% with our automated CI/CD pipeline solutions.',
              descriptionTag: 'p',
              descriptionAlign: 'left',
              descriptionStyles: {
                color: '#131313',
                fontSize: '18px',
                fontWeight: '400',
              },
            },
          ],
        },
        image: {
          position: 'top-half',
          src: './sso.png',
          title: '',
          description: '',
          hoverEffect: false,
        },
      },
      {
        imageAlignment: 'right',
        // sectionWidths: [50, 50],
        customStyles: {
          backgroundColor: 'transparent',
          padding: '0px',
          alignItems: 'center',
          display: 'flex',
          columnGap: '40px',
        },
        header: {
          headerStyles: {
            display: 'flex',
            flexDirection: 'column',
            // rowGap: '20px',
          },
          title: 'Enterprise-Level Deployment Optimization',
          titleTag: 'p',
          titleStyles: {
            color: '#DD8208',
            fontSize: '24px',
            fontWeight: '700',
          },
          titleAlign: 'right',

          description: [
            {
              descriptionText:
                'A startup reduced their deployment time by 50% with our automated CI/CD pipeline solutions.',
              descriptionTag: 'p',
              descriptionAlign: 'right',
              descriptionStyles: {
                color: '#131313',
                fontSize: '18px',
                fontWeight: '400',
              },
            },
          ],
        },
        image: {
          position: 'top-half',
          src: './grpc.png',
          title: '',
          description: '',
          hoverEffect: false,
        },
      },
    ],
  };

  formConfigForContact: FormConfig = {
    formTitle: "Let's Talk",
    formTitleStyles: { textAlign: 'center', color: '#9D6F00' },
    formSubTitle: 'Get a Quote Immediately Upon Form Submission',
    formSubTitleStyles: { textAlign: 'center' },
    isImageShow: false,
    formWidth: 100,
    backgroundColor: 'transparent',
    fields: [
      {
        type: 'text',
        label: 'Name',
        key: 'Name',
        placeholder: 'Enter your name',
        width: '492px',
        required: true,
        validation: {
          minLength: 2,
          maxLength: 30,
        },
        errorMessages: {
          required: 'name is required.',
          minLength: 'name must be at least 2 characters long.',
          maxLength: 'name cannot exceed 30 characters.',
        },
      },
      {
        type: 'email',
        label: 'Email',
        key: 'email',
        placeholder: 'Enter your email',
        width: '492px',
        required: true,
        validation: {
          pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
        },
        errorMessages: {
          required: 'Email is required.',
          pattern: 'Enter a valid email address.',
        },
      },
      {
        type: 'text',
        label: 'Company',
        key: 'company',
        placeholder: "Enter Comapany's Name",
        width: '100%',
        validation: {
          minLength: 10,
          maxLength: 15,
        },
        errorMessages: {
          minLength: 'Phone number must be at least 10 digits.',
          maxLength: 'Phone number cannot exceed 15 digits.',
        },
      },
      {
        type: 'textarea',
        label: 'Message',
        key: 'message',
        placeholder: 'Enter your message',
        width: '100%',
        textareaConfig: {
          rows: 3,
          toolbarOptions: [
            { type: 'bold' },
            { type: 'italic' },
            { type: 'underline' },
            { type: 'strike' },
            { type: 'color' },
            { type: 'background' },
            { type: 'blockquote' },
            { type: 'code-block' },
            { type: 'header', value: 1 },
            { type: 'list', value: 'ordered' },
            { type: 'list', value: 'bullet' },
            { type: 'script', value: 'sub' },
            { type: 'script', value: 'super' },
            { type: 'indent', value: '-1' },
            { type: 'indent', value: '+1' },
            { type: 'direction', value: 'rtl' },
            { type: 'size', value: 'large' },
            { type: 'font' },
            { type: 'align' },
            { type: 'link' },
            { type: 'image' },
            { type: 'video' },
            { type: 'clean' },
          ],
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              [{ color: [] }, { background: [] }],
              ['blockquote', 'code-block'],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ script: 'sub' }, { script: 'super' }],
              [{ indent: '-1' }, { indent: '+1' }],
              [{ direction: 'rtl' }],
              [{ size: ['small', false, 'large', 'huge'] }],
              [{ font: [] }],
              [{ align: [] }],
              ['link', 'image', 'video'],
              ['clean'],
            ],
          },
        },
      },
    ],
    submitButtonConfig: {
      text: 'Send Message',
      // icon: 'send',
      showIcon: false,
      hasBorder: false,
      foregroundColor: '#ffffff',
      backgroundColor: '#15A46E',
      shadow: true,
      shape: 'rectangle',
      corners: 'rounded',
      transparent: false,
      width: '280px',
      isPillButton: true,
      customStyles: { padding: '16px 24px', margin: 'auto' },
    },
  };

  footerConfig: FooterConfig = {
    footerContainerstyle: { backgroundColor: '#9D6F00', color: '#fff' },
    isSubscribeShow: false,
    logoUrl: './white_logo.png',
    description:
      "Cycolis Software specializes in scalable microservices, high-performance APIs, and cloud-native solutions. We empower startups and mid-sized businesses in Germany and the UK with secure architectures, CI/CD pipelines, and modular microfrontends to future-proof their software systems. Let's build together.",

    usefulLinks: [
      { name: 'Home', url: '/home' },
      { name: 'Services', url: '/services' },
      { name: 'Case Studies', url: '/case_studies' },
      { name: 'Contact Us', url: '/contact' },
    ],

    contact: {
      address: 'Neha Tobacco, Banda, Madhya Pradesh, India',
      email: 'iesparagjain@gmail.com',
      phone: '+91 9770525851',
    },

    columns: [
      {
        title: 'About Us',
        description: 'Learn more about our company and team.',
        buttonText: 'Contact',
        buttonUrl: 'https://facebook.com',
        lineText: 'Connect with us on social media.',
        iconButtons: [
          { icon: 'Google', url: 'https://google.com' },
          { icon: 'facebook', url: 'https://facebook.com' },
        ],
      },
      {
        lineText: 'Connect with us on social media.',
        iconButtons: [
          { icon: 'Google', url: 'https://google.com' },
          { icon: 'facebook', url: 'https://facebook.com' },
        ],
      },

      {
        // lineText: 'Connect with us on social media.',
        title: 'About Us',
        description: 'Learn more about our company and team.',
        iconButtons: [
          { icon: 'Google', url: 'https://google.com' },
          { icon: 'facebook', url: 'https://facebook.com' },
        ],
      },
    ],
    // iframeUrl: 'https://example.com',
    // iframeWidth: '400',
    // iframeHeight: '300',
    bottomBar: {
      logoUrl: 'https://picsum.photos/id/237/600/300',
      copyrightText: 'All rights reserved.',
      year: 2024,
      company: 'My Company',
      backgroundColor: 'transparent',
      align: 'left',
      margin: '10px 10px',
      icons: [
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
          url: 'https://twitter.com',
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
          url: 'https://facebook.com',
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/733/733558.png',
          url: 'https://instagram.com',
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/733/733609.png',
          url: 'https://github.com',
        },
      ],
    },
  };
}
